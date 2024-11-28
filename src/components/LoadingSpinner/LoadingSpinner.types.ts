import { SPINNER_SIZES } from '../../utils/constants';

export type SpinnerSize = keyof typeof SPINNER_SIZES;

export interface LoadingSpinnerProps {
  size?: SpinnerSize;
  className?: string;
  color?: string;
}