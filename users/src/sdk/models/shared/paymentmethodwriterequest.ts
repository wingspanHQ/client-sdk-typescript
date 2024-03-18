/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type PaymentMethodWriteRequest = {
    discountCode?: string | null | undefined;
    paymentMethodId?: string | null | undefined;
};

/** @internal */
export namespace PaymentMethodWriteRequest$ {
    export type Inbound = {
        discountCode?: string | null | undefined;
        paymentMethodId?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<PaymentMethodWriteRequest, z.ZodTypeDef, Inbound> = z
        .object({
            discountCode: z.nullable(z.string()).optional(),
            paymentMethodId: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.discountCode === undefined ? null : { discountCode: v.discountCode }),
                ...(v.paymentMethodId === undefined
                    ? null
                    : { paymentMethodId: v.paymentMethodId }),
            };
        });

    export type Outbound = {
        discountCode?: string | null | undefined;
        paymentMethodId?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentMethodWriteRequest> = z
        .object({
            discountCode: z.nullable(z.string()).optional(),
            paymentMethodId: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.discountCode === undefined ? null : { discountCode: v.discountCode }),
                ...(v.paymentMethodId === undefined
                    ? null
                    : { paymentMethodId: v.paymentMethodId }),
            };
        });
}
