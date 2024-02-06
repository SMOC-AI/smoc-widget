import type { SmocConfig } from './SmocConfig';

declare global {
  interface Window {
    SmocConfig: SmocConfig;
  }
}
