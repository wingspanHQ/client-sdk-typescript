/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type Value = {};

export type PaymentEligibilityUpdateRequest = {
    field?: string | null | undefined;
    value?: Value | null | undefined;
};

/** @internal */
export namespace Value$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<Value, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Value> = z.object({});
}

/** @internal */
export namespace PaymentEligibilityUpdateRequest$ {
    export type Inbound = {
        field?: string | null | undefined;
        value?: Value$.Inbound | null | undefined;
    };

    export const inboundSchema: z.ZodType<PaymentEligibilityUpdateRequest, z.ZodTypeDef, Inbound> =
        z
            .object({
                field: z.string().nullable().optional(),
                value: z
                    .lazy(() => Value$.inboundSchema)
                    .nullable()
                    .optional(),
            })
            .transform((v) => {
                return {
                    ...(v.field === undefined ? null : { field: v.field }),
                    ...(v.value === undefined ? null : { value: v.value }),
                };
            });

    export type Outbound = {
        field?: string | null | undefined;
        value?: Value$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PaymentEligibilityUpdateRequest
    > = z
        .object({
            field: z.string().nullable().optional(),
            value: z
                .lazy(() => Value$.outboundSchema)
                .nullable()
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.field === undefined ? null : { field: v.field }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}
