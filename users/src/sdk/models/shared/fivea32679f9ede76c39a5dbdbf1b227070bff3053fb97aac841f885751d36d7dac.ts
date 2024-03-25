/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Fivea32679f9ede76c39a5dbdbf1b227070bff3053fb97aac841f885751d36d7dac = {
    bankAccountId?: string | null | undefined;
};

/** @internal */
export namespace Fivea32679f9ede76c39a5dbdbf1b227070bff3053fb97aac841f885751d36d7dac$ {
    export type Inbound = {
        bankAccountId?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<
        Fivea32679f9ede76c39a5dbdbf1b227070bff3053fb97aac841f885751d36d7dac,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            bankAccountId: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.bankAccountId === undefined ? null : { bankAccountId: v.bankAccountId }),
            };
        });

    export type Outbound = {
        bankAccountId?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        Fivea32679f9ede76c39a5dbdbf1b227070bff3053fb97aac841f885751d36d7dac
    > = z
        .object({
            bankAccountId: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.bankAccountId === undefined ? null : { bankAccountId: v.bankAccountId }),
            };
        });
}
