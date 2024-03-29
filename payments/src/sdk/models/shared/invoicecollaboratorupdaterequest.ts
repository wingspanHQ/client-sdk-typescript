/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type InvoiceCollaboratorUpdateRequest = {
    amount?: number | null | undefined;
    description?: string | null | undefined;
};

/** @internal */
export namespace InvoiceCollaboratorUpdateRequest$ {
    export type Inbound = {
        amount?: number | null | undefined;
        description?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<InvoiceCollaboratorUpdateRequest, z.ZodTypeDef, Inbound> =
        z
            .object({
                amount: z.nullable(z.number()).optional(),
                description: z.nullable(z.string()).optional(),
            })
            .transform((v) => {
                return {
                    ...(v.amount === undefined ? null : { amount: v.amount }),
                    ...(v.description === undefined ? null : { description: v.description }),
                };
            });

    export type Outbound = {
        amount?: number | null | undefined;
        description?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        InvoiceCollaboratorUpdateRequest
    > = z
        .object({
            amount: z.nullable(z.number()).optional(),
            description: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.amount === undefined ? null : { amount: v.amount }),
                ...(v.description === undefined ? null : { description: v.description }),
            };
        });
}
