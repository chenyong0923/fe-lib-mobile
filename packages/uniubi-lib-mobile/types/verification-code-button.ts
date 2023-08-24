import type { CSSProperties, FC, ReactNode } from 'react';

export interface VerificationCodeButtonProps {
  className?: string;
  style?: CSSProperties;
  text?: ReactNode;
  time?: number;
  disabled?: boolean;
  onBeforeCountdown?: () => Promise<void>;
}

declare const VerificationCodeButton: FC<VerificationCodeButtonProps>;

export default VerificationCodeButton;
