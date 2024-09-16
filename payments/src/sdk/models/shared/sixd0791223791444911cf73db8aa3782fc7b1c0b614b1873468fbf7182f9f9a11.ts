/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type Sixd0791223791444911cf73db8aa3782fc7b1c0b614b1873468fbf7182f9f9a11 =
  {
    billClassId?: string | null | undefined;
    billCustomerId?: string | null | undefined;
    expenseAccountId?: string | null | undefined;
    invoiceClassId?: string | null | undefined;
    itemId?: string | null | undefined;
  };

/** @internal */
export const Sixd0791223791444911cf73db8aa3782fc7b1c0b614b1873468fbf7182f9f9a11$inboundSchema:
  z.ZodType<
    Sixd0791223791444911cf73db8aa3782fc7b1c0b614b1873468fbf7182f9f9a11,
    z.ZodTypeDef,
    unknown
  > = z.object({
    billClassId: z.nullable(z.string()).optional(),
    billCustomerId: z.nullable(z.string()).optional(),
    expenseAccountId: z.nullable(z.string()).optional(),
    invoiceClassId: z.nullable(z.string()).optional(),
    itemId: z.nullable(z.string()).optional(),
  });

/** @internal */
export type Sixd0791223791444911cf73db8aa3782fc7b1c0b614b1873468fbf7182f9f9a11$Outbound =
  {
    billClassId?: string | null | undefined;
    billCustomerId?: string | null | undefined;
    expenseAccountId?: string | null | undefined;
    invoiceClassId?: string | null | undefined;
    itemId?: string | null | undefined;
  };

/** @internal */
export const Sixd0791223791444911cf73db8aa3782fc7b1c0b614b1873468fbf7182f9f9a11$outboundSchema:
  z.ZodType<
    Sixd0791223791444911cf73db8aa3782fc7b1c0b614b1873468fbf7182f9f9a11$Outbound,
    z.ZodTypeDef,
    Sixd0791223791444911cf73db8aa3782fc7b1c0b614b1873468fbf7182f9f9a11
  > = z.object({
    billClassId: z.nullable(z.string()).optional(),
    billCustomerId: z.nullable(z.string()).optional(),
    expenseAccountId: z.nullable(z.string()).optional(),
    invoiceClassId: z.nullable(z.string()).optional(),
    itemId: z.nullable(z.string()).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Sixd0791223791444911cf73db8aa3782fc7b1c0b614b1873468fbf7182f9f9a11$ {
  /** @deprecated use `Sixd0791223791444911cf73db8aa3782fc7b1c0b614b1873468fbf7182f9f9a11$inboundSchema` instead. */
  export const inboundSchema =
    Sixd0791223791444911cf73db8aa3782fc7b1c0b614b1873468fbf7182f9f9a11$inboundSchema;
  /** @deprecated use `Sixd0791223791444911cf73db8aa3782fc7b1c0b614b1873468fbf7182f9f9a11$outboundSchema` instead. */
  export const outboundSchema =
    Sixd0791223791444911cf73db8aa3782fc7b1c0b614b1873468fbf7182f9f9a11$outboundSchema;
  /** @deprecated use `Sixd0791223791444911cf73db8aa3782fc7b1c0b614b1873468fbf7182f9f9a11$Outbound` instead. */
  export type Outbound =
    Sixd0791223791444911cf73db8aa3782fc7b1c0b614b1873468fbf7182f9f9a11$Outbound;
}
