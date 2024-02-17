/// <reference types="vite/client" />
import path from 'node:path';

export function resolveFontPath(name: string): string {
  const isBrowser = typeof window !== 'undefined'
  if (isBrowser) {
    return `${import.meta.env.BASE_URL}fonts/${name}.ttf`;
  }

  return path.resolve(`./public/fonts/${name}.ttf`);
}