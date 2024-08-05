/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type PayRequest = {
    accountId?: string | null | undefined;
    paymentMethodId?: string | null | undefined;
    plaidPublicToken?: string | null | undefined;
};

/** @internal */
export const PayRequest$inboundSchema: z.ZodType<PayRequest, z.ZodTypeDef, unknown> = z.object({
    accountId: z.nullable(z.string()).optional(),
    paymentMethodId: z.nullable(z.string()).optional(),
    plaidPublicToken: z.nullable(z.string()).optional(),
});

/** @internal */
export type PayRequest$Outbound = {
    accountId?: string | null | undefined;
    paymentMethodId?: string | null | undefined;
    plaidPublicToken?: string | null | undefined;
};

/** @internal */
export const PayRequest$outboundSchema: z.ZodType<PayRequest$Outbound, z.ZodTypeDef, PayRequest> =
    z.object({
        accountId: z.nullable(z.string()).optional(),
        paymentMethodId: z.nullable(z.string()).optional(),
        plaidPublicToken: z.nullable(z.string()).optional(),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PayRequest$ {
    /** @deprecated use `PayRequest$inboundSchema` instead. */
    export const inboundSchema = PayRequest$inboundSchema;
    /** @deprecated use `PayRequest$outboundSchema` instead. */
    export const outboundSchema = PayRequest$outboundSchema;
    /** @deprecated use `PayRequest$Outbound` instead. */
    export type Outbound = PayRequest$Outbound;
}
