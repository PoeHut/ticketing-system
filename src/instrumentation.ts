import * as Sentry from "@sentry/nextjs";
import type { Instrumentation } from "next";

export const onRequestError: Instrumentation.onRequestError = (...args) => {
  Sentry.captureRequestError(...args);

  // ... additional logic here
};
