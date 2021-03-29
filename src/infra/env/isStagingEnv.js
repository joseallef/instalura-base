const isServer = typeof window === 'undefined';

export const isStagingEnv = isServer
  // eslint-disable-next-line no-undef
  ? process.env.NODE_ENV === 'development'
  : globalThis.location.href.includes('localhost');
