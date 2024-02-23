/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type GuestAccountRequest = {
    accountId: string;
    publicToken: string;
};

/** @internal */
export namespace GuestAccountRequest$ {
    export type Inbound = {
        accountId: string;
        publicToken: string;
    };

    export const inboundSchema: z.ZodType<GuestAccountRequest, z.ZodTypeDef, Inbound> = z
        .object({
            accountId: z.string(),
            publicToken: z.string(),
        })
        .transform((v) => {
            return {
                accountId: v.accountId,
                publicToken: v.publicToken,
            };
        });

    export type Outbound = {
        accountId: string;
        publicToken: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GuestAccountRequest> = z
        .object({
            accountId: z.string(),
            publicToken: z.string(),
        })
        .transform((v) => {
            return {
                accountId: v.accountId,
                publicToken: v.publicToken,
            };
        });
}
