/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type Discount = {
    amountOff?: number | null | undefined;
    couponId: string;
    name: string;
    percentOff?: number | null | undefined;
};

/** @internal */
export namespace Discount$ {
    export type Inbound = {
        amountOff?: number | null | undefined;
        couponId: string;
        name: string;
        percentOff?: number | null | undefined;
    };

    export const inboundSchema: z.ZodType<Discount, z.ZodTypeDef, Inbound> = z
        .object({
            amountOff: z.nullable(z.number()).optional(),
            couponId: z.string(),
            name: z.string(),
            percentOff: z.nullable(z.number()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.amountOff === undefined ? null : { amountOff: v.amountOff }),
                couponId: v.couponId,
                name: v.name,
                ...(v.percentOff === undefined ? null : { percentOff: v.percentOff }),
            };
        });

    export type Outbound = {
        amountOff?: number | null | undefined;
        couponId: string;
        name: string;
        percentOff?: number | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Discount> = z
        .object({
            amountOff: z.nullable(z.number()).optional(),
            couponId: z.string(),
            name: z.string(),
            percentOff: z.nullable(z.number()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.amountOff === undefined ? null : { amountOff: v.amountOff }),
                couponId: v.couponId,
                name: v.name,
                ...(v.percentOff === undefined ? null : { percentOff: v.percentOff }),
            };
        });
}
