import React from 'react';
import { Button } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Page = () => {
  return (
    <BasicLayout>
      <Section title="按钮类型">
        <Button>default</Button>
      </Section>
    </BasicLayout>
  );
};

export default Page;
