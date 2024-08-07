import { test as base, expect } from '@playwright/test';

import type { MockServiceWorker } from 'playwright-msw';
import { createWorkerFixture } from 'playwright-msw';
import handlers from './handlers';
import { http } from 'msw';

const test = base.extend<{
  worker: MockServiceWorker;
  http: typeof http;
}>({
  worker: createWorkerFixture(handlers),
  http,
});

export { expect, test };
