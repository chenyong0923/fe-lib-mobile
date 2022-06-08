import React, { useState } from 'react';
import { Button, Overlay } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Page = () => {
  const [visible, setVisible] = useState(false);

  return (
    <BasicLayout>
      <Section title="基本用法">
        <Button
          onClick={() => {
            setVisible(true);
          }}
        >
          打开遮照层
        </Button>
        <Overlay
          visible={visible}
          onClick={() => {
            setVisible(false);
          }}
        />
      </Section>
    </BasicLayout>
  );
};

export default Page;
