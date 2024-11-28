import { useState, useEffect } from 'react';
import { LoadingPage } from './components/LoadingPage/LoadingPage';
import { LoadingState } from './components/LoadingPage/LoadingPage.types';
import { LOADING_STATES } from './utils/constants';

function App() {
  const [loadingState, setLoadingState] = useState<LoadingState>(LOADING_STATES.LOADING);

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setLoadingState(LOADING_STATES.COMPLETE);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loadingState !== LOADING_STATES.COMPLETE) {
    return (
      <LoadingPage 
        text="Please wait while we load your content..." 
        state={loadingState}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-2xl font-bold text-gray-900">Content Loaded!</h1>
      <p className="mt-4 text-gray-600">Your content is now ready to view.</p>
    </div>
  );
}