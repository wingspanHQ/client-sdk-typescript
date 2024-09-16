/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const BulkInvoiceBatchUpdateStatus = {
  Open: "Open",
  Pending: "Pending",
  Processing: "Processing",
  Complete: "Complete",
  Failed: "Failed",
} as const;
export type BulkInvoiceBatchUpdateStatus = ClosedEnum<
  typeof BulkInvoiceBatchUpdateStatus
>;

export type BulkInvoiceBatchUpdate = {
  labels?: { [k: string]: string } | null | undefined;
  status?: BulkInvoiceBatchUpdateStatus | null | undefined;
};

/** @internal */
export const BulkInvoiceBatchUpdateStatus$inboundSchema: z.ZodNativeEnum<
  typeof BulkInvoiceBatchUpdateStatus
> = z.nativeEnum(BulkInvoiceBatchUpdateStatus);

/** @internal */
export const BulkInvoiceBatchUpdateStatus$outboundSchema: z.ZodNativeEnum<
  typeof BulkInvoiceBatchUpdateStatus
> = BulkInvoiceBatchUpdateStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BulkInvoiceBatchUpdateStatus$ {
  /** @deprecated use `BulkInvoiceBatchUpdateStatus$inboundSchema` instead. */
  export const inboundSchema = BulkInvoiceBatchUpdateStatus$inboundSchema;
  /** @deprecated use `BulkInvoiceBatchUpdateStatus$outboundSchema` instead. */
  export const outboundSchema = BulkInvoiceBatchUpdateStatus$outboundSchema;
}

/** @internal */
export const BulkInvoiceBatchUpdate$inboundSchema: z.ZodType<
  BulkInvoiceBatchUpdate,
  z.ZodTypeDef,
  unknown
> = z.object({
  labels: z.nullable(z.record(z.string())).optional(),
  status: z.nullable(BulkInvoiceBatchUpdateStatus$inboundSchema).optional(),
});

/** @internal */
export type BulkInvoiceBatchUpdate$Outbound = {
  labels?: { [k: string]: string } | null | undefined;
  status?: string | null | undefined;
};

/** @internal */
export const BulkInvoiceBatchUpdate$outboundSchema: z.ZodType<
  BulkInvoiceBatchUpdate$Outbound,
  z.ZodTypeDef,
  BulkInvoiceBatchUpdate
> = z.object({
  labels: z.nullable(z.record(z.string())).optional(),
  status: z.nullable(BulkInvoiceBatchUpdateStatus$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BulkInvoiceBatchUpdate$ {
  /** @deprecated use `BulkInvoiceBatchUpdate$inboundSchema` instead. */
  export const inboundSchema = BulkInvoiceBatchUpdate$inboundSchema;
  /** @deprecated use `BulkInvoiceBatchUpdate$outboundSchema` instead. */
  export const outboundSchema = BulkInvoiceBatchUpdate$outboundSchema;
  /** @deprecated use `BulkInvoiceBatchUpdate$Outbound` instead. */
  export type Outbound = BulkInvoiceBatchUpdate$Outbound;
}
