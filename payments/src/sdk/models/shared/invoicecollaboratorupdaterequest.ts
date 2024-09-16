/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type InvoiceCollaboratorUpdateRequest = {
  amount?: number | null | undefined;
  description?: string | null | undefined;
};

/** @internal */
export const InvoiceCollaboratorUpdateRequest$inboundSchema: z.ZodType<
  InvoiceCollaboratorUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: z.nullable(z.number()).optional(),
  description: z.nullable(z.string()).optional(),
});

/** @internal */
export type InvoiceCollaboratorUpdateRequest$Outbound = {
  amount?: number | null | undefined;
  description?: string | null | undefined;
};

/** @internal */
export const InvoiceCollaboratorUpdateRequest$outboundSchema: z.ZodType<
  InvoiceCollaboratorUpdateRequest$Outbound,
  z.ZodTypeDef,
  InvoiceCollaboratorUpdateRequest
> = z.object({
  amount: z.nullable(z.number()).optional(),
  description: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvoiceCollaboratorUpdateRequest$ {
  /** @deprecated use `InvoiceCollaboratorUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = InvoiceCollaboratorUpdateRequest$inboundSchema;
  /** @deprecated use `InvoiceCollaboratorUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = InvoiceCollaboratorUpdateRequest$outboundSchema;
  /** @deprecated use `InvoiceCollaboratorUpdateRequest$Outbound` instead. */
  export type Outbound = InvoiceCollaboratorUpdateRequest$Outbound;
}
