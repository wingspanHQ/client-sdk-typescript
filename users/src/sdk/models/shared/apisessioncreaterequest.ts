/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ApiSessionCreateRequest = {
    expiration?: string | null | undefined;
    isUnlimitedExpiration?: boolean | null | undefined;
    labels?: Record<string, string> | null | undefined;
};

/** @internal */
export namespace ApiSessionCreateRequest$ {
    export type Inbound = {
        expiration?: string | null | undefined;
        isUnlimitedExpiration?: boolean | null | undefined;
        labels?: Record<string, string> | null | undefined;
    };

    export const inboundSchema: z.ZodType<ApiSessionCreateRequest, z.ZodTypeDef, Inbound> = z
        .object({
            expiration: z.nullable(z.string()).optional(),
            isUnlimitedExpiration: z.nullable(z.boolean()).optional(),
            labels: z.nullable(z.record(z.string())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.expiration === undefined ? null : { expiration: v.expiration }),
                ...(v.isUnlimitedExpiration === undefined
                    ? null
                    : { isUnlimitedExpiration: v.isUnlimitedExpiration }),
                ...(v.labels === undefined ? null : { labels: v.labels }),
            };
        });

    export type Outbound = {
        expiration?: string | null | undefined;
        isUnlimitedExpiration?: boolean | null | undefined;
        labels?: Record<string, string> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ApiSessionCreateRequest> = z
        .object({
            expiration: z.nullable(z.string()).optional(),
            isUnlimitedExpiration: z.nullable(z.boolean()).optional(),
            labels: z.nullable(z.record(z.string())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.expiration === undefined ? null : { expiration: v.expiration }),
                ...(v.isUnlimitedExpiration === undefined
                    ? null
                    : { isUnlimitedExpiration: v.isUnlimitedExpiration }),
                ...(v.labels === undefined ? null : { labels: v.labels }),
            };
        });
}
