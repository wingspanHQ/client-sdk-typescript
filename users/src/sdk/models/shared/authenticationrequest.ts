/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type AuthenticationRequest = {
    email: string;
};

/** @internal */
export namespace AuthenticationRequest$ {
    export type Inbound = {
        email: string;
    };

    export const inboundSchema: z.ZodType<AuthenticationRequest, z.ZodTypeDef, Inbound> = z
        .object({
            email: z.string(),
        })
        .transform((v) => {
            return {
                email: v.email,
            };
        });

    export type Outbound = {
        email: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AuthenticationRequest> = z
        .object({
            email: z.string(),
        })
        .transform((v) => {
            return {
                email: v.email,
            };
        });
}
