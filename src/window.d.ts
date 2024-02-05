import { SmocConfig } from "./SmocConfig";

declare global {
  interface Window { SmocConfig: SmocConfig; }
}
