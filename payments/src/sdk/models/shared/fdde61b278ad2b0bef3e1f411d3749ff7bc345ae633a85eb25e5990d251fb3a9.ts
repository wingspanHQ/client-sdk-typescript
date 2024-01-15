/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type Fdde61b278ad2b0bef3e1f411d3749ff7bc345ae633a85eb25e5990d251fb3a9 = {
    clearedAt?: string | null | undefined;
    failedAt?: string | null | undefined;
    pendingAt?: string | null | undefined;
    returnedAt?: string | null | undefined;
    sentAt?: string | null | undefined;
};

/** @internal */
export namespace Fdde61b278ad2b0bef3e1f411d3749ff7bc345ae633a85eb25e5990d251fb3a9$ {
    export type Inbound = {
        clearedAt?: string | null | undefined;
        failedAt?: string | null | undefined;
        pendingAt?: string | null | undefined;
        returnedAt?: string | null | undefined;
        sentAt?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<
        Fdde61b278ad2b0bef3e1f411d3749ff7bc345ae633a85eb25e5990d251fb3a9,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            clearedAt: z.nullable(z.string()).optional(),
            failedAt: z.nullable(z.string()).optional(),
            pendingAt: z.nullable(z.string()).optional(),
            returnedAt: z.nullable(z.string()).optional(),
            sentAt: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.clearedAt === undefined ? null : { clearedAt: v.clearedAt }),
                ...(v.failedAt === undefined ? null : { failedAt: v.failedAt }),
                ...(v.pendingAt === undefined ? null : { pendingAt: v.pendingAt }),
                ...(v.returnedAt === undefined ? null : { returnedAt: v.returnedAt }),
                ...(v.sentAt === undefined ? null : { sentAt: v.sentAt }),
            };
        });

    export type Outbound = {
        clearedAt?: string | null | undefined;
        failedAt?: string | null | undefined;
        pendingAt?: string | null | undefined;
        returnedAt?: string | null | undefined;
        sentAt?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        Fdde61b278ad2b0bef3e1f411d3749ff7bc345ae633a85eb25e5990d251fb3a9
    > = z
        .object({
            clearedAt: z.nullable(z.string()).optional(),
            failedAt: z.nullable(z.string()).optional(),
            pendingAt: z.nullable(z.string()).optional(),
            returnedAt: z.nullable(z.string()).optional(),
            sentAt: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.clearedAt === undefined ? null : { clearedAt: v.clearedAt }),
                ...(v.failedAt === undefined ? null : { failedAt: v.failedAt }),
                ...(v.pendingAt === undefined ? null : { pendingAt: v.pendingAt }),
                ...(v.returnedAt === undefined ? null : { returnedAt: v.returnedAt }),
                ...(v.sentAt === undefined ? null : { sentAt: v.sentAt }),
            };
        });
}
