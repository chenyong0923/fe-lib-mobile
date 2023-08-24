import React from 'react';
import { FilePreview } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Page = () => {
  const fileList = [
    {
      name: '110.jpg',
      url: 'https://blue-front.oss-cn-hangzhou.aliyuncs.com/images/9cece8f5a4c04d89bcfe3086b8af5e8e.jpg',
    },
    {
      name: '274.mp4',
      url: 'https://blue-front.oss-cn-hangzhou.aliyuncs.com/images/64908f7a73ce4a63b00bd6b864132b22.mp4',
    },
    {
      name: '球哥心脏超声报告.PDF',
      url: 'https://blue-front.oss-cn-hangzhou.aliyuncs.com/images/13412ea907cd42fcaf551a2336ea2292.PDF',
    },
  ];
  return (
    <BasicLayout>
      <Section title="基础使用">
        {fileList.map((file) => (
          <FilePreview
            name={file.name}
            url={file.url}
            key={file.url}
            preview={false}
          />
        ))}
      </Section>
      <Section title="预览">
        {fileList.map((file) => (
          <FilePreview name={file.name} url={file.url} key={file.url} />
        ))}
      </Section>
    </BasicLayout>
  );
};

export default Page;
