/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type ClientInvoiceTemplateUpdateRequest = {
    accountId?: string | null | undefined;
    clientId: string;
    paymentMethodId?: string | null | undefined;
};

/** @internal */
export namespace ClientInvoiceTemplateUpdateRequest$ {
    export type Inbound = {
        accountId?: string | null | undefined;
        clientId: string;
        paymentMethodId?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<
        ClientInvoiceTemplateUpdateRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            accountId: z.nullable(z.string()).optional(),
            clientId: z.string(),
            paymentMethodId: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.accountId === undefined ? null : { accountId: v.accountId }),
                clientId: v.clientId,
                ...(v.paymentMethodId === undefined
                    ? null
                    : { paymentMethodId: v.paymentMethodId }),
            };
        });

    export type Outbound = {
        accountId?: string | null | undefined;
        clientId: string;
        paymentMethodId?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ClientInvoiceTemplateUpdateRequest
    > = z
        .object({
            accountId: z.nullable(z.string()).optional(),
            clientId: z.string(),
            paymentMethodId: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.accountId === undefined ? null : { accountId: v.accountId }),
                clientId: v.clientId,
                ...(v.paymentMethodId === undefined
                    ? null
                    : { paymentMethodId: v.paymentMethodId }),
            };
        });
}
