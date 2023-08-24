import type { CSSProperties, FC } from 'react';

export interface FilePreviewProps {
  className?: string;
  style?: CSSProperties;
  name?: string;
  url: string;
  preview?: boolean;
  onClick?: (e: ITouchEvent) => void;
}

declare const FilePreview: FC<FilePreviewProps>;

export default FilePreview;
