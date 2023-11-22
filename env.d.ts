declare namespace NodeJS {
  export type ProcessEnv = {
    PORT: number;
    DB_URL: string;
    DB_URL_LOCAL: string;
    NODE_ENV: string;
  };
}
