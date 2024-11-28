import { LOADING_STATES } from '../../utils/constants';

export type LoadingState = keyof typeof LOADING_STATES;

export interface LoadingPageProps {
  text?: string;
  state?: LoadingState;
  className?: string;
}