/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type CardCodeRequest = {
    channel: string;
};

/** @internal */
export namespace CardCodeRequest$ {
    export type Inbound = {
        channel: string;
    };

    export const inboundSchema: z.ZodType<CardCodeRequest, z.ZodTypeDef, Inbound> = z
        .object({
            channel: z.string(),
        })
        .transform((v) => {
            return {
                channel: v.channel,
            };
        });

    export type Outbound = {
        channel: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CardCodeRequest> = z
        .object({
            channel: z.string(),
        })
        .transform((v) => {
            return {
                channel: v.channel,
            };
        });
}
