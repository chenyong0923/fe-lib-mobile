import { AlarmclockOutlined } from '@uniubi/icons-taro';
import React from 'react';
import { Button } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Page = () => {
  return (
    <BasicLayout>
      <Section title="按钮类型">
        <Button>default</Button>
        <Button type="primary">primary</Button>
        <Button type="secondary">secondary</Button>
        <Button type="link">link</Button>
        <Button type="text">text</Button>
      </Section>
      <Section title="危险按钮">
        <Button danger>default</Button>
        <Button type="primary" danger>
          primary
        </Button>
        <Button type="secondary" danger>
          secondary
        </Button>
        <Button type="link" danger>
          link
        </Button>
        <Button type="text" danger>
          text
        </Button>
      </Section>
      <Section title="禁用按钮">
        <Button disabled>default</Button>
        <Button type="primary" disabled>
          primary
        </Button>
        <Button type="secondary" disabled>
          secondary
        </Button>
        <Button type="link" disabled>
          link
        </Button>
        <Button type="text" disabled>
          text
        </Button>
        <Button type="primary" danger disabled>
          primary danger
        </Button>
        <Button type="text" danger disabled>
          text danger
        </Button>
      </Section>
      <Section title="按钮大小">
        <Button>default</Button>
        <Button size="small">small</Button>
      </Section>
      <Section title="Block 按钮">
        <Button block>default</Button>
      </Section>
      <Section title="按钮形状">
        <Button type="primary" round>
          round
        </Button>
        <Button type="primary" round size="small">
          round
        </Button>
      </Section>
      <Section title="Loading">
        <Button loading>loading</Button>
        <Button type="primary" loading block>
          loading
        </Button>
      </Section>
      <Section title="带图标的按钮">
        <Button icon={<AlarmclockOutlined />}>Button</Button>
      </Section>
    </BasicLayout>
  );
};

export default Page;
