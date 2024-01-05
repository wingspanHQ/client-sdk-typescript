/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type CardTokenRequest = {
    verificationCode: string;
    verificationToken: string;
};

/** @internal */
export namespace CardTokenRequest$ {
    export type Inbound = {
        verificationCode: string;
        verificationToken: string;
    };

    export const inboundSchema: z.ZodType<CardTokenRequest, z.ZodTypeDef, Inbound> = z
        .object({
            verificationCode: z.string(),
            verificationToken: z.string(),
        })
        .transform((v) => {
            return {
                verificationCode: v.verificationCode,
                verificationToken: v.verificationToken,
            };
        });

    export type Outbound = {
        verificationCode: string;
        verificationToken: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CardTokenRequest> = z
        .object({
            verificationCode: z.string(),
            verificationToken: z.string(),
        })
        .transform((v) => {
            return {
                verificationCode: v.verificationCode,
                verificationToken: v.verificationToken,
            };
        });
}
