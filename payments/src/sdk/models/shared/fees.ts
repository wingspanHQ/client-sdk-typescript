/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Fee, Fee$ } from "./fee";
import { z } from "zod";

export type Fees = {
    lateFee?: Fee | null | undefined;
    processingFee?: Fee | null | undefined;
};

/** @internal */
export namespace Fees$ {
    export type Inbound = {
        lateFee?: Fee$.Inbound | null | undefined;
        processingFee?: Fee$.Inbound | null | undefined;
    };

    export const inboundSchema: z.ZodType<Fees, z.ZodTypeDef, Inbound> = z
        .object({
            lateFee: Fee$.inboundSchema.nullable().optional(),
            processingFee: Fee$.inboundSchema.nullable().optional(),
        })
        .transform((v) => {
            return {
                ...(v.lateFee === undefined ? null : { lateFee: v.lateFee }),
                ...(v.processingFee === undefined ? null : { processingFee: v.processingFee }),
            };
        });

    export type Outbound = {
        lateFee?: Fee$.Outbound | null | undefined;
        processingFee?: Fee$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Fees> = z
        .object({
            lateFee: Fee$.outboundSchema.nullable().optional(),
            processingFee: Fee$.outboundSchema.nullable().optional(),
        })
        .transform((v) => {
            return {
                ...(v.lateFee === undefined ? null : { lateFee: v.lateFee }),
                ...(v.processingFee === undefined ? null : { processingFee: v.processingFee }),
            };
        });
}
