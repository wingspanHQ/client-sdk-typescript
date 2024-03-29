/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type PayRequest = {
    accountId?: string | null | undefined;
    paymentMethodId?: string | null | undefined;
    plaidPublicToken?: string | null | undefined;
};

/** @internal */
export namespace PayRequest$ {
    export type Inbound = {
        accountId?: string | null | undefined;
        paymentMethodId?: string | null | undefined;
        plaidPublicToken?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<PayRequest, z.ZodTypeDef, Inbound> = z
        .object({
            accountId: z.nullable(z.string()).optional(),
            paymentMethodId: z.nullable(z.string()).optional(),
            plaidPublicToken: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.accountId === undefined ? null : { accountId: v.accountId }),
                ...(v.paymentMethodId === undefined
                    ? null
                    : { paymentMethodId: v.paymentMethodId }),
                ...(v.plaidPublicToken === undefined
                    ? null
                    : { plaidPublicToken: v.plaidPublicToken }),
            };
        });

    export type Outbound = {
        accountId?: string | null | undefined;
        paymentMethodId?: string | null | undefined;
        plaidPublicToken?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PayRequest> = z
        .object({
            accountId: z.nullable(z.string()).optional(),
            paymentMethodId: z.nullable(z.string()).optional(),
            plaidPublicToken: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.accountId === undefined ? null : { accountId: v.accountId }),
                ...(v.paymentMethodId === undefined
                    ? null
                    : { paymentMethodId: v.paymentMethodId }),
                ...(v.plaidPublicToken === undefined
                    ? null
                    : { plaidPublicToken: v.plaidPublicToken }),
            };
        });
}
