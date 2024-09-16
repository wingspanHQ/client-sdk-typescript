/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import {
  FeeHandlingConfig,
  FeeHandlingConfig$inboundSchema,
  FeeHandlingConfig$Outbound,
  FeeHandlingConfig$outboundSchema,
} from "./feehandlingconfig.js";

export const BulkInvoiceItemCreateAcceptedPaymentMethods = {
  Credit: "Credit",
  Ach: "ACH",
  Manual: "Manual",
} as const;
export type BulkInvoiceItemCreateAcceptedPaymentMethods = ClosedEnum<
  typeof BulkInvoiceItemCreateAcceptedPaymentMethods
>;

export const BulkInvoiceItemCreateInvoiceStatus = {
  Draft: "Draft",
  Open: "Open",
  Approved: "Approved",
  Paid: "Paid",
  Cancelled: "Cancelled",
} as const;
export type BulkInvoiceItemCreateInvoiceStatus = ClosedEnum<
  typeof BulkInvoiceItemCreateInvoiceStatus
>;

export type BulkInvoiceItemCreate = {
  acceptedPaymentMethods?:
    | Array<BulkInvoiceItemCreateAcceptedPaymentMethods>
    | null
    | undefined;
  amount: number;
  bulkInvoiceBatchId: string;
  bulkInvoiceItemMergeKey?: string | null | undefined;
  bulkInvoiceItemReference?: string | null | undefined;
  clientEmail?: string | null | undefined;
  clientExternalId?: string | null | undefined;
  creditFeeHandling?: FeeHandlingConfig | null | undefined;
  dueDate: string;
  invoiceNotes?: string | null | undefined;
  invoiceStatus: BulkInvoiceItemCreateInvoiceStatus;
  labels?: { [k: string]: string } | null | undefined;
  lineItemDescription: string;
  lineItemDetail?: string | null | undefined;
  memberClientId?: string | null | undefined;
  paidDate?: string | null | undefined;
  projectName?: string | null | undefined;
  reimbursableExpense?: boolean | null | undefined;
  sendDate?: string | null | undefined;
};

/** @internal */
export const BulkInvoiceItemCreateAcceptedPaymentMethods$inboundSchema:
  z.ZodNativeEnum<typeof BulkInvoiceItemCreateAcceptedPaymentMethods> = z
    .nativeEnum(BulkInvoiceItemCreateAcceptedPaymentMethods);

/** @internal */
export const BulkInvoiceItemCreateAcceptedPaymentMethods$outboundSchema:
  z.ZodNativeEnum<typeof BulkInvoiceItemCreateAcceptedPaymentMethods> =
    BulkInvoiceItemCreateAcceptedPaymentMethods$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BulkInvoiceItemCreateAcceptedPaymentMethods$ {
  /** @deprecated use `BulkInvoiceItemCreateAcceptedPaymentMethods$inboundSchema` instead. */
  export const inboundSchema =
    BulkInvoiceItemCreateAcceptedPaymentMethods$inboundSchema;
  /** @deprecated use `BulkInvoiceItemCreateAcceptedPaymentMethods$outboundSchema` instead. */
  export const outboundSchema =
    BulkInvoiceItemCreateAcceptedPaymentMethods$outboundSchema;
}

/** @internal */
export const BulkInvoiceItemCreateInvoiceStatus$inboundSchema: z.ZodNativeEnum<
  typeof BulkInvoiceItemCreateInvoiceStatus
> = z.nativeEnum(BulkInvoiceItemCreateInvoiceStatus);

/** @internal */
export const BulkInvoiceItemCreateInvoiceStatus$outboundSchema: z.ZodNativeEnum<
  typeof BulkInvoiceItemCreateInvoiceStatus
> = BulkInvoiceItemCreateInvoiceStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BulkInvoiceItemCreateInvoiceStatus$ {
  /** @deprecated use `BulkInvoiceItemCreateInvoiceStatus$inboundSchema` instead. */
  export const inboundSchema = BulkInvoiceItemCreateInvoiceStatus$inboundSchema;
  /** @deprecated use `BulkInvoiceItemCreateInvoiceStatus$outboundSchema` instead. */
  export const outboundSchema =
    BulkInvoiceItemCreateInvoiceStatus$outboundSchema;
}

/** @internal */
export const BulkInvoiceItemCreate$inboundSchema: z.ZodType<
  BulkInvoiceItemCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  acceptedPaymentMethods: z.nullable(
    z.array(BulkInvoiceItemCreateAcceptedPaymentMethods$inboundSchema),
  ).optional(),
  amount: z.number(),
  bulkInvoiceBatchId: z.string(),
  bulkInvoiceItemMergeKey: z.nullable(z.string()).optional(),
  bulkInvoiceItemReference: z.nullable(z.string()).optional(),
  clientEmail: z.nullable(z.string()).optional(),
  clientExternalId: z.nullable(z.string()).optional(),
  creditFeeHandling: z.nullable(FeeHandlingConfig$inboundSchema).optional(),
  dueDate: z.string(),
  invoiceNotes: z.nullable(z.string()).optional(),
  invoiceStatus: BulkInvoiceItemCreateInvoiceStatus$inboundSchema,
  labels: z.nullable(z.record(z.string())).optional(),
  lineItemDescription: z.string(),
  lineItemDetail: z.nullable(z.string()).optional(),
  memberClientId: z.nullable(z.string()).optional(),
  paidDate: z.nullable(z.string()).optional(),
  projectName: z.nullable(z.string()).optional(),
  reimbursableExpense: z.nullable(z.boolean()).optional(),
  sendDate: z.nullable(z.string()).optional(),
});

/** @internal */
export type BulkInvoiceItemCreate$Outbound = {
  acceptedPaymentMethods?: Array<string> | null | undefined;
  amount: number;
  bulkInvoiceBatchId: string;
  bulkInvoiceItemMergeKey?: string | null | undefined;
  bulkInvoiceItemReference?: string | null | undefined;
  clientEmail?: string | null | undefined;
  clientExternalId?: string | null | undefined;
  creditFeeHandling?: FeeHandlingConfig$Outbound | null | undefined;
  dueDate: string;
  invoiceNotes?: string | null | undefined;
  invoiceStatus: string;
  labels?: { [k: string]: string } | null | undefined;
  lineItemDescription: string;
  lineItemDetail?: string | null | undefined;
  memberClientId?: string | null | undefined;
  paidDate?: string | null | undefined;
  projectName?: string | null | undefined;
  reimbursableExpense?: boolean | null | undefined;
  sendDate?: string | null | undefined;
};

/** @internal */
export const BulkInvoiceItemCreate$outboundSchema: z.ZodType<
  BulkInvoiceItemCreate$Outbound,
  z.ZodTypeDef,
  BulkInvoiceItemCreate
> = z.object({
  acceptedPaymentMethods: z.nullable(
    z.array(BulkInvoiceItemCreateAcceptedPaymentMethods$outboundSchema),
  ).optional(),
  amount: z.number(),
  bulkInvoiceBatchId: z.string(),
  bulkInvoiceItemMergeKey: z.nullable(z.string()).optional(),
  bulkInvoiceItemReference: z.nullable(z.string()).optional(),
  clientEmail: z.nullable(z.string()).optional(),
  clientExternalId: z.nullable(z.string()).optional(),
  creditFeeHandling: z.nullable(FeeHandlingConfig$outboundSchema).optional(),
  dueDate: z.string(),
  invoiceNotes: z.nullable(z.string()).optional(),
  invoiceStatus: BulkInvoiceItemCreateInvoiceStatus$outboundSchema,
  labels: z.nullable(z.record(z.string())).optional(),
  lineItemDescription: z.string(),
  lineItemDetail: z.nullable(z.string()).optional(),
  memberClientId: z.nullable(z.string()).optional(),
  paidDate: z.nullable(z.string()).optional(),
  projectName: z.nullable(z.string()).optional(),
  reimbursableExpense: z.nullable(z.boolean()).optional(),
  sendDate: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BulkInvoiceItemCreate$ {
  /** @deprecated use `BulkInvoiceItemCreate$inboundSchema` instead. */
  export const inboundSchema = BulkInvoiceItemCreate$inboundSchema;
  /** @deprecated use `BulkInvoiceItemCreate$outboundSchema` instead. */
  export const outboundSchema = BulkInvoiceItemCreate$outboundSchema;
  /** @deprecated use `BulkInvoiceItemCreate$Outbound` instead. */
  export type Outbound = BulkInvoiceItemCreate$Outbound;
}
