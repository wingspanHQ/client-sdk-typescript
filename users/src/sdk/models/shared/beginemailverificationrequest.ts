/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type BeginEmailVerificationRequest = {
    email: string;
    redirectPath?: string | null | undefined;
};

/** @internal */
export namespace BeginEmailVerificationRequest$ {
    export type Inbound = {
        email: string;
        redirectPath?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<BeginEmailVerificationRequest, z.ZodTypeDef, Inbound> = z
        .object({
            email: z.string(),
            redirectPath: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                email: v.email,
                ...(v.redirectPath === undefined ? null : { redirectPath: v.redirectPath }),
            };
        });

    export type Outbound = {
        email: string;
        redirectPath?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BeginEmailVerificationRequest> =
        z
            .object({
                email: z.string(),
                redirectPath: z.nullable(z.string()).optional(),
            })
            .transform((v) => {
                return {
                    email: v.email,
                    ...(v.redirectPath === undefined ? null : { redirectPath: v.redirectPath }),
                };
            });
}
