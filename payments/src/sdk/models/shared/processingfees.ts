/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Fee, Fee$ } from "./fee";
import { z } from "zod";

export type ProcessingFees = {
    creditCardFee?: Fee | null | undefined;
    instantPayoutFee?: Fee | null | undefined;
};

/** @internal */
export namespace ProcessingFees$ {
    export type Inbound = {
        creditCardFee?: Fee$.Inbound | null | undefined;
        instantPayoutFee?: Fee$.Inbound | null | undefined;
    };

    export const inboundSchema: z.ZodType<ProcessingFees, z.ZodTypeDef, Inbound> = z
        .object({
            creditCardFee: z.nullable(Fee$.inboundSchema).optional(),
            instantPayoutFee: z.nullable(Fee$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.creditCardFee === undefined ? null : { creditCardFee: v.creditCardFee }),
                ...(v.instantPayoutFee === undefined
                    ? null
                    : { instantPayoutFee: v.instantPayoutFee }),
            };
        });

    export type Outbound = {
        creditCardFee?: Fee$.Outbound | null | undefined;
        instantPayoutFee?: Fee$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ProcessingFees> = z
        .object({
            creditCardFee: z.nullable(Fee$.outboundSchema).optional(),
            instantPayoutFee: z.nullable(Fee$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.creditCardFee === undefined ? null : { creditCardFee: v.creditCardFee }),
                ...(v.instantPayoutFee === undefined
                    ? null
                    : { instantPayoutFee: v.instantPayoutFee }),
            };
        });
}
