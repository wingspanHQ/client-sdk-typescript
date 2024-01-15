/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type Fee = {
    amount: number;
    calculatedAt?: string | null | undefined;
};

/** @internal */
export namespace Fee$ {
    export type Inbound = {
        amount: number;
        calculatedAt?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<Fee, z.ZodTypeDef, Inbound> = z
        .object({
            amount: z.number(),
            calculatedAt: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                amount: v.amount,
                ...(v.calculatedAt === undefined ? null : { calculatedAt: v.calculatedAt }),
            };
        });

    export type Outbound = {
        amount: number;
        calculatedAt?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Fee> = z
        .object({
            amount: z.number(),
            calculatedAt: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                amount: v.amount,
                ...(v.calculatedAt === undefined ? null : { calculatedAt: v.calculatedAt }),
            };
        });
}
