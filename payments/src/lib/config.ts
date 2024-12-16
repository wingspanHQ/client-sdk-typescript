/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { HTTPClient } from "./http.js";
import { Logger } from "./logger.js";
import { RetryConfig } from "./retries.js";
import { Params, pathToFunc } from "./url.js";

/**
 * Wingspan's Payments API in Production
 */
export const ServerProd = "prod";
/**
 * Wingspan's Payments API in Staging
 */
export const ServerStaging = "staging";
/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = {
  [ServerProd]: "https://api.wingspan.app",
  [ServerStaging]: "https://stagingapi.wingspan.app",
} as const;

export type SDKOptions = {
  bearerAuth?: string | (() => Promise<string>);

  httpClient?: HTTPClient;
  /**
   * Allows overriding the default server used by the SDK
   */
  server?: keyof typeof ServerList;
  /**
   * Allows overriding the default server URL used by the SDK
   */
  serverURL?: string;
  /**
   * Allows overriding the default retry config used by the SDK
   */
  retryConfig?: RetryConfig;
  timeoutMs?: number;
  debugLogger?: Logger;
};

export function serverURLFromOptions(options: SDKOptions): URL | null {
  let serverURL = options.serverURL;

  const params: Params = {};

  if (!serverURL) {
    const server = options.server ?? ServerProd;
    serverURL = ServerList[server] || "";
  }

  const u = pathToFunc(serverURL)(params);
  return new URL(u);
}

export const SDK_METADATA = {
  language: "typescript",
  openapiDocVersion: "1.0.0-oas3.1",
  sdkVersion: "2.8.5",
  genVersion: "2.479.3",
  userAgent:
    "speakeasy-sdk/typescript 2.8.5 2.479.3 1.0.0-oas3.1 @wingspan/payments",
} as const;
