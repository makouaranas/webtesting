import { clsx } from 'clsx';
import { LoadingTextProps } from './LoadingText.types';
import { pulseAnimation } from '../../utils/animations';

export function LoadingText({ 
  text = 'Loading...', 
  className = '',
  variant = 'pulse'
}: LoadingTextProps) {
  return (
    <p className={clsx(
      'text-gray-600',
      variant === 'pulse' && pulseAnimation,
      className
    )}>
      {text}
    </p>
  );
}