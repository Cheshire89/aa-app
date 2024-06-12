export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export interface IEnvironment {
  production: boolean;
  dataUrl: string;
  logLevel: LogLevel;
  enableDebugTools: boolean;
}
