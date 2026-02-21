// Devfolio SDK TypeScript declarations
declare global {
  interface Window {
    devfolio?: {
      initialize: () => void;
    };
  }
}

export {};
