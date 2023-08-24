import React from 'react';
import { Input, VerificationCodeButton } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Page = () => {
  return (
    <BasicLayout>
      <Section title="基础使用">
        <VerificationCodeButton />
      </Section>
      <Section title="输入框中使用">
        <Input placeholder="请输入验证码" suffix={<VerificationCodeButton />} />
      </Section>
    </BasicLayout>
  );
};

export default Page;
