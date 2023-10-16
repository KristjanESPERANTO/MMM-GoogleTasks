import { Duration } from "date-fns";

export interface PlannedTaskConfig {
  enable: boolean;
  duration: Duration;
}

export interface AccountConfig {
  name: string;
  includedLists: string[];
}

export interface DataConfig {
  credentialPath: string;
  tokenPath: string;
  showCompleted: boolean;
  maxResults: number;
  plannedTasks: PlannedTaskConfig;
  accounts: AccountConfig[];
}

export const isDataConfig = (obj: unknown): boolean => {
  if (typeof obj === "object" && obj) {
    return "accounts" in obj && "ordering" in obj && "showCompleted" in obj;
  }
  return false;
};

export interface AppearanceConfig {
  dateFormat: string;
  updateInterval?: number;
  animationSpeed?: number;
  initialLoadDelay?: number;
  maxWidth?: string;
  ordering: string;
}

export interface Config extends DataConfig, AppearanceConfig {}
