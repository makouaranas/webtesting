import { clsx } from 'clsx';
import { LoadingSpinnerProps } from './LoadingSpinner.types';
import { SPINNER_SIZES } from '../../utils/constants';
import { spinAnimation } from '../../utils/animations';

export function LoadingSpinner({ 
  size = 'md', 
  className,
  color = 'blue-600'
}: LoadingSpinnerProps) {
  return (
    <div
      className={clsx(
        spinAnimation,
        'rounded-full border-4 border-gray-200',
        `border-t-${color}`,
        SPINNER_SIZES[size],
        className
      )}
      role="status"
      aria-label="Loading"
    />
  );
}