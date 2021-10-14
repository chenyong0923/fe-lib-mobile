import { Input, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import React, { useState } from 'react';

import styles from './index.module.less';
import list from './list';

const Index: React.FC = () => {
  const [val, setVal] = useState<string>('');

  // 匹配输入文字
  const match = (str: string, key: string = val) => {
    if (!str) return true;
    return str.includes(key);
  };

  // 跳转详情
  const goDetail = (id: string) => {
    Taro.navigateTo({ url: `/pages/${id}/index` });
  };

  return (
    <View className={styles.container}>
      <View className={styles.search}>
        <Input
          className={styles.input}
          placeholder="搜索"
          onInput={(e) => {
            setVal(e.detail.value);
          }}
        />
      </View>
      <View className={styles.row}>
        {list
          .filter((item) => match(item.id) || match(item.name))
          .map((item) => (
            <View
              key={item.id}
              className={styles.col}
              onClick={() => {
                goDetail(item.id);
              }}
            >
              <View className={styles.item}>{item.name}</View>
            </View>
          ))}
      </View>
    </View>
  );
};

export default Index;
