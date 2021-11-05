const highlight = require('highlight.js');
const loaderUtils = require('loader-utils');
const frontMatter = require('front-matter');
const mdContainer = require('markdown-it-container');

let md = require('markdown-it');

const options = {
  className: 'docs-wrapper',
};

md = md({
  html: true, // Enable HTML tags in source
  xhtmlOut: true,
  typographer: false,
  linkify: false,
})
  .enable(['smartquotes'])
  .set({
    highlight(content, languageHint) {
      let highlightedContent;

      highlight.configure({
        useBR: true,
        tabReplace: '    ',
      });

      if (languageHint && highlight.getLanguage(languageHint)) {
        try {
          highlightedContent = highlight.highlight(languageHint, content).value;
        } catch (err) {
          console.log(err);
        }
      }

      if (!highlightedContent) {
        try {
          highlightedContent = highlight.highlightAuto(content).value;
        } catch (err) {
          console.log(err);
        }
      }

      // 把代码中的{}转
      highlightedContent = highlightedContent.replace(
        /[{}]/g,
        (match) => `{'${match}'}`,
      );

      // 加上 hljs
      highlightedContent = highlightedContent
        .replace('<code class="', '<code class="hljs ')
        .replace('<code>', '<code class="hljs">');

      return highlight.fixMarkup(highlightedContent);
    },
  });

const formatModule = (imports, js, jsx, state, method) => {
  const moduleText = `
    ${imports}

    ${js}

    class MarkdownItReactComponent extends React.Component {
        constructor(props){
            super(props);
            this.state = ${state || '{}'};
            Object.assign(this,props.methods)
        }
        handleToggleCode(flag){
            const state = {};
            state['showCode' + flag] = !this.state['showCode' + flag];
            this.setState(state);
        }
        handleCopyCode (code) {
          copy(code)
        }
        ${method || ''}
        render(){

            return (
                <div className="${options.className}">
                    ${jsx}
                </div>
            );
        }
    };

    export default MarkdownItReactComponent;`;

  return moduleText;
};

const formatOpening = () => `
    <div className="uniubi-lib-mobile-container">
      <div className="uniubi-lib-mobile-code">`;

const formatClosing = () => `
      </div>
    </div>`;

module.exports = function (source) {
  // 设置是否可缓存标志，默认可缓存，此处设置为不可缓存
  this.cacheable();

  // 官方推荐的 loader query 处理工具
  const _options = loaderUtils.getOptions(this) || {};

  Object.assign(
    options,
    _options.markdownItReact ? _options.markdownItReact() : {},
  );

  // 处理 md 文件头部内容
  const {
    body,
    attributes: { imports: importMap },
  } = frontMatter(source);

  // 给所有模块增加外部引用
  const imports = `import React from 'react';  import copy from 'copy-to-clipboard';${importMap}`;

  const moduleJS = [];
  const state = '';
  let flag = '';

  /**
   * markdown-it-container 是处理类似以下格式的内容
   * ::: warning
   * *here is dragons*
   * :::
   * ->
   * <div class="warning">
   * <em>here is dragons</em>
   * </div>
   */
  md.use(mdContainer, 'demo', {
    validate: (params) => params.trim().match(/^demo\s*(.*)$/),
    render: (tokens, idx) => {
      // container 从开头到结尾把之间的 token 跑一遍，其中idx定位到具体的位置

      // 获取描述
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);

      // 有此标记代表 ::: 开始
      if (tokens[idx].nesting === 1) {
        flag = idx;

        let codeText = '';
        // let state = null
        // let method = ''
        let i = 1;

        // 从 ::: 下一个token开始
        let token = tokens[idx + i];

        // 如果没有到结尾
        while (token.markup !== ':::') {
          // 只认```，其他忽略
          if (token.markup === '```') {
            // 里面的内容都当代码文本输出
            codeText = token.content;
          }
          i++;
          token = tokens[idx + i];
        }
        // 描述也执行md
        return formatOpening(codeText, md.render(m[1]), flag);
      }
      return formatClosing(flag);
    },
  });

  // md 处理过后的字符串含有 class 和 style ，需要再次处理给到react
  const content = md
    .render(body)
    .replace(/<hr>/g, '<hr />')
    .replace(/<br>/g, '<br />')
    .replace(/class=/g, 'className=');
  return formatModule(imports, moduleJS.join('\n'), content, state);
};
