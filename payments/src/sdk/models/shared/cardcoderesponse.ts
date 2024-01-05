/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type CardCodeResponse = {
    phoneNumber: string;
    verificationToken: string;
};

/** @internal */
export namespace CardCodeResponse$ {
    export type Inbound = {
        phoneNumber: string;
        verificationToken: string;
    };

    export const inboundSchema: z.ZodType<CardCodeResponse, z.ZodTypeDef, Inbound> = z
        .object({
            phoneNumber: z.string(),
            verificationToken: z.string(),
        })
        .transform((v) => {
            return {
                phoneNumber: v.phoneNumber,
                verificationToken: v.verificationToken,
            };
        });

    export type Outbound = {
        phoneNumber: string;
        verificationToken: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CardCodeResponse> = z
        .object({
            phoneNumber: z.string(),
            verificationToken: z.string(),
        })
        .transform((v) => {
            return {
                phoneNumber: v.phoneNumber,
                verificationToken: v.verificationToken,
            };
        });
}
