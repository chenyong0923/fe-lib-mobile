import React from 'react';
import { Button, Toast } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Page = () => {
  return (
    <BasicLayout>
      <Section title="基础使用">
        <Button
          onClick={() => {
            Toast.info('info');
          }}
        >
          info
        </Button>
        <Button
          type="primary"
          onClick={() => {
            Toast.success('success');
          }}
        >
          success
        </Button>
        <Button
          type="primary"
          danger
          onClick={() => {
            Toast.error('error');
          }}
        >
          error
        </Button>
      </Section>
      <Section title="长文本">
        <Button
          onClick={() => {
            Toast.info(
              '长文本长文本长文本长文本长文本长文本长文本长文本长文本',
            );
          }}
        >
          info
        </Button>
      </Section>
    </BasicLayout>
  );
};

export default Page;
