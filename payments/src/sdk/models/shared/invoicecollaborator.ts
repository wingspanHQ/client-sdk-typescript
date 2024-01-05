/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum InvoiceCollaboratorCurrency {
    Usd = "USD",
    Cad = "CAD",
}

export type InvoiceCollaborator = {
    amount: number;
    currency: InvoiceCollaboratorCurrency;
    description: string;
    invoiceId?: string | null | undefined;
    memberClientId: string;
};

/** @internal */
export const InvoiceCollaboratorCurrency$ = z.nativeEnum(InvoiceCollaboratorCurrency);

/** @internal */
export namespace InvoiceCollaborator$ {
    export type Inbound = {
        amount: number;
        currency: InvoiceCollaboratorCurrency;
        description: string;
        invoiceId?: string | null | undefined;
        memberClientId: string;
    };

    export const inboundSchema: z.ZodType<InvoiceCollaborator, z.ZodTypeDef, Inbound> = z
        .object({
            amount: z.number(),
            currency: InvoiceCollaboratorCurrency$,
            description: z.string(),
            invoiceId: z.string().nullable().optional(),
            memberClientId: z.string(),
        })
        .transform((v) => {
            return {
                amount: v.amount,
                currency: v.currency,
                description: v.description,
                ...(v.invoiceId === undefined ? null : { invoiceId: v.invoiceId }),
                memberClientId: v.memberClientId,
            };
        });

    export type Outbound = {
        amount: number;
        currency: InvoiceCollaboratorCurrency;
        description: string;
        invoiceId?: string | null | undefined;
        memberClientId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InvoiceCollaborator> = z
        .object({
            amount: z.number(),
            currency: InvoiceCollaboratorCurrency$,
            description: z.string(),
            invoiceId: z.string().nullable().optional(),
            memberClientId: z.string(),
        })
        .transform((v) => {
            return {
                amount: v.amount,
                currency: v.currency,
                description: v.description,
                ...(v.invoiceId === undefined ? null : { invoiceId: v.invoiceId }),
                memberClientId: v.memberClientId,
            };
        });
}
