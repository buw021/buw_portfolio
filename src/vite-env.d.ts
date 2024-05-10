/// <reference types="vite/client" />
/// <reference types="./vite-env-override.d.ts" />
declare interface ImportMeta {
    globEager<T = unknown>(globPattern: string): Record<string, T>;
  }

  declare module '*.svg' {
    const content: React.FC<React.SVGProps<SVGElement>>
    export default content
  }