/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    Fivea32679f9ede76c39a5dbdbf1b227070bff3053fb97aac841f885751d36d7dac,
    Fivea32679f9ede76c39a5dbdbf1b227070bff3053fb97aac841f885751d36d7dac$,
} from "./fivea32679f9ede76c39a5dbdbf1b227070bff3053fb97aac841f885751d36d7dac";
import * as z from "zod";

export type Oneec70b8932527ff4790394003fff4dc0129da172d7ffa7d79fdfb7db427d1746 = {
    quickbooks?:
        | Fivea32679f9ede76c39a5dbdbf1b227070bff3053fb97aac841f885751d36d7dac
        | null
        | undefined;
};

/** @internal */
export namespace Oneec70b8932527ff4790394003fff4dc0129da172d7ffa7d79fdfb7db427d1746$ {
    export type Inbound = {
        quickbooks?:
            | Fivea32679f9ede76c39a5dbdbf1b227070bff3053fb97aac841f885751d36d7dac$.Inbound
            | null
            | undefined;
    };

    export const inboundSchema: z.ZodType<
        Oneec70b8932527ff4790394003fff4dc0129da172d7ffa7d79fdfb7db427d1746,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            quickbooks: z
                .nullable(
                    Fivea32679f9ede76c39a5dbdbf1b227070bff3053fb97aac841f885751d36d7dac$.inboundSchema
                )
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.quickbooks === undefined ? null : { quickbooks: v.quickbooks }),
            };
        });

    export type Outbound = {
        quickbooks?:
            | Fivea32679f9ede76c39a5dbdbf1b227070bff3053fb97aac841f885751d36d7dac$.Outbound
            | null
            | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        Oneec70b8932527ff4790394003fff4dc0129da172d7ffa7d79fdfb7db427d1746
    > = z
        .object({
            quickbooks: z
                .nullable(
                    Fivea32679f9ede76c39a5dbdbf1b227070bff3053fb97aac841f885751d36d7dac$.outboundSchema
                )
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.quickbooks === undefined ? null : { quickbooks: v.quickbooks }),
            };
        });
}
