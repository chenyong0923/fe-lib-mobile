import React, { useState } from 'react';
import { Button, Steps } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Page = () => {
  const [step, setStep] = useState<number>(1);
  const [step2, setStep2] = useState<number>(1);

  return (
    <BasicLayout>
      <Section title="基础使用">
        <Steps active={step}>
          <Steps.Item title="步骤一" description="描述一" />
          <Steps.Item title="步骤二" description="描述二" />
          <Steps.Item title="步骤三" description="描述三" />
        </Steps>
        <Button
          onClick={() => {
            setStep(step - 1);
          }}
          disabled={step <= 1}
        >
          上一步
        </Button>
        <Button
          onClick={() => {
            setStep(step + 1);
          }}
          disabled={step >= 3}
        >
          下一步
        </Button>
      </Section>
      <Section title="纵向步骤条">
        <Steps active={step2} layout="vertical">
          <Steps.Item title="步骤一" description="描述一">
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
          </Steps.Item>
          <Steps.Item title="步骤二" description="描述二">
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
          </Steps.Item>
          <Steps.Item title="步骤三" description="描述三">
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
          </Steps.Item>
        </Steps>
        <Button
          onClick={() => {
            setStep2(step2 - 1);
          }}
          disabled={step2 <= 1}
        >
          上一步
        </Button>
        <Button
          onClick={() => {
            setStep2(step2 + 1);
          }}
          disabled={step2 >= 3}
        >
          下一步
        </Button>
      </Section>
    </BasicLayout>
  );
};

export default Page;
