/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type PaymentEligibility = {
    field: string;
    value: string;
};

/** @internal */
export namespace PaymentEligibility$ {
    export type Inbound = {
        field: string;
        value: string;
    };

    export const inboundSchema: z.ZodType<PaymentEligibility, z.ZodTypeDef, Inbound> = z
        .object({
            field: z.string(),
            value: z.string(),
        })
        .transform((v) => {
            return {
                field: v.field,
                value: v.value,
            };
        });

    export type Outbound = {
        field: string;
        value: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentEligibility> = z
        .object({
            field: z.string(),
            value: z.string(),
        })
        .transform((v) => {
            return {
                field: v.field,
                value: v.value,
            };
        });
}
