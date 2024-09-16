/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type InvoiceRefundEvents = {
  refundFailedAt?: string | null | undefined;
  refundStartedAt?: string | null | undefined;
  refundSuccessfulAt?: string | null | undefined;
};

/** @internal */
export const InvoiceRefundEvents$inboundSchema: z.ZodType<
  InvoiceRefundEvents,
  z.ZodTypeDef,
  unknown
> = z.object({
  refundFailedAt: z.nullable(z.string()).optional(),
  refundStartedAt: z.nullable(z.string()).optional(),
  refundSuccessfulAt: z.nullable(z.string()).optional(),
});

/** @internal */
export type InvoiceRefundEvents$Outbound = {
  refundFailedAt?: string | null | undefined;
  refundStartedAt?: string | null | undefined;
  refundSuccessfulAt?: string | null | undefined;
};

/** @internal */
export const InvoiceRefundEvents$outboundSchema: z.ZodType<
  InvoiceRefundEvents$Outbound,
  z.ZodTypeDef,
  InvoiceRefundEvents
> = z.object({
  refundFailedAt: z.nullable(z.string()).optional(),
  refundStartedAt: z.nullable(z.string()).optional(),
  refundSuccessfulAt: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvoiceRefundEvents$ {
  /** @deprecated use `InvoiceRefundEvents$inboundSchema` instead. */
  export const inboundSchema = InvoiceRefundEvents$inboundSchema;
  /** @deprecated use `InvoiceRefundEvents$outboundSchema` instead. */
  export const outboundSchema = InvoiceRefundEvents$outboundSchema;
  /** @deprecated use `InvoiceRefundEvents$Outbound` instead. */
  export type Outbound = InvoiceRefundEvents$Outbound;
}
