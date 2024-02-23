/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { HTTPClient } from "./http";
import { RetryConfig } from "./retries";
import { pathToFunc } from "./url";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * Wingspan's Benefits API in Production
     */
    "https://api.wingspan.app",
    /**
     * Wingspan's Benefits API in Staging
     */
    "https://stagingapi.wingspan.app",
] as const;

export type SDKOptions = {
    bearerAuth?: string | (() => Promise<string>);

    httpClient?: HTTPClient;
    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: RetryConfig;
};

export function serverURLFromOptions(options: SDKOptions): URL | null {
    let serverURL = options.serverURL;

    const params: Record<string, string> = {};
    const serverIdx = options.serverIdx ?? 0;

    if (!serverURL) {
        serverURL = ServerList[serverIdx] || "";
    }

    const u = pathToFunc(serverURL)(params);
    return new URL(u);
}

export const SDK_METADATA = Object.freeze({
    language: "typescript",
    openapiDocVersion: "1.0.0",
    sdkVersion: "2.0.0",
    genVersion: "2.272.1",
    userAgent: "speakeasy-sdk/typescript 2.0.0 2.272.1 1.0.0 @wingspan/benefits",
});