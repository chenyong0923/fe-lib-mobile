import React from 'react';

import MarkdownParser from '@/components/MarkdownParser';

import Doc from './index.md';

const Page: React.FC = () => {
  return <MarkdownParser>{Doc}</MarkdownParser>;
};

export default Page;
