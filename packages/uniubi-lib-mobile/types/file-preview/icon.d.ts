import type { CSSProperties, FC } from 'react';

export interface FilePreviewIconProps {
  className?: string;
  style?: CSSProperties;
  type?: string;
}

declare const FilePreviewIcon: FC<FilePreviewIconProps>;

export default FilePreviewIcon;
