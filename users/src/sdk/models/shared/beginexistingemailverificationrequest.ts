/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type BeginExistingEmailVerificationRequest = {
    redirectPath?: string | null | undefined;
};

/** @internal */
export namespace BeginExistingEmailVerificationRequest$ {
    export type Inbound = {
        redirectPath?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<
        BeginExistingEmailVerificationRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            redirectPath: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.redirectPath === undefined ? null : { redirectPath: v.redirectPath }),
            };
        });

    export type Outbound = {
        redirectPath?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        BeginExistingEmailVerificationRequest
    > = z
        .object({
            redirectPath: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.redirectPath === undefined ? null : { redirectPath: v.redirectPath }),
            };
        });
}
