import { clsx } from 'clsx';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import { LoadingText } from '../LoadingText/LoadingText';
import { LoadingPageProps } from './LoadingPage.types';
import { LOADING_STATES } from '../../utils/constants';
import { fadeInAnimation } from '../../utils/animations';

export function LoadingPage({ 
  text,
  state = 'loading',
  className 
}: LoadingPageProps) {
  return (
    <div className={clsx(
      'min-h-screen flex flex-col items-center justify-center bg-gray-50',
      fadeInAnimation,
      className
    )}>
      <div className="flex flex-col items-center space-y-4">
        {state === LOADING_STATES.LOADING && (
          <>
            <LoadingSpinner size="lg" />
            <LoadingText text={text} className="text-lg font-medium" />
          </>
        )}
        {state === LOADING_STATES.ERROR && (
          <LoadingText 
            text="An error occurred. Please try again." 
            variant="static"
            className="text-red-600"
          />
        )}
        {state === LOADING_STATES.COMPLETE && (
          <LoadingText 
            text="Loading complete!" 
            variant="static"
            className="text-green-600"
          />
        )}
      </div>
    </div>
  );
}