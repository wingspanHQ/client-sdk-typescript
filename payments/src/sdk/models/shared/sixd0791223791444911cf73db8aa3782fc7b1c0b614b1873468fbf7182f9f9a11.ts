/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type Sixd0791223791444911cf73db8aa3782fc7b1c0b614b1873468fbf7182f9f9a11 = {
    billClassId?: string | null | undefined;
    billCustomerId?: string | null | undefined;
    expenseAccountId?: string | null | undefined;
    invoiceClassId?: string | null | undefined;
    itemId?: string | null | undefined;
};

/** @internal */
export namespace Sixd0791223791444911cf73db8aa3782fc7b1c0b614b1873468fbf7182f9f9a11$ {
    export type Inbound = {
        billClassId?: string | null | undefined;
        billCustomerId?: string | null | undefined;
        expenseAccountId?: string | null | undefined;
        invoiceClassId?: string | null | undefined;
        itemId?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<
        Sixd0791223791444911cf73db8aa3782fc7b1c0b614b1873468fbf7182f9f9a11,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            billClassId: z.nullable(z.string()).optional(),
            billCustomerId: z.nullable(z.string()).optional(),
            expenseAccountId: z.nullable(z.string()).optional(),
            invoiceClassId: z.nullable(z.string()).optional(),
            itemId: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.billClassId === undefined ? null : { billClassId: v.billClassId }),
                ...(v.billCustomerId === undefined ? null : { billCustomerId: v.billCustomerId }),
                ...(v.expenseAccountId === undefined
                    ? null
                    : { expenseAccountId: v.expenseAccountId }),
                ...(v.invoiceClassId === undefined ? null : { invoiceClassId: v.invoiceClassId }),
                ...(v.itemId === undefined ? null : { itemId: v.itemId }),
            };
        });

    export type Outbound = {
        billClassId?: string | null | undefined;
        billCustomerId?: string | null | undefined;
        expenseAccountId?: string | null | undefined;
        invoiceClassId?: string | null | undefined;
        itemId?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        Sixd0791223791444911cf73db8aa3782fc7b1c0b614b1873468fbf7182f9f9a11
    > = z
        .object({
            billClassId: z.nullable(z.string()).optional(),
            billCustomerId: z.nullable(z.string()).optional(),
            expenseAccountId: z.nullable(z.string()).optional(),
            invoiceClassId: z.nullable(z.string()).optional(),
            itemId: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.billClassId === undefined ? null : { billClassId: v.billClassId }),
                ...(v.billCustomerId === undefined ? null : { billCustomerId: v.billCustomerId }),
                ...(v.expenseAccountId === undefined
                    ? null
                    : { expenseAccountId: v.expenseAccountId }),
                ...(v.invoiceClassId === undefined ? null : { invoiceClassId: v.invoiceClassId }),
                ...(v.itemId === undefined ? null : { itemId: v.itemId }),
            };
        });
}
