/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c,
  Fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c$inboundSchema,
  Fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c$Outbound,
  Fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c$outboundSchema,
} from "./fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c.js";
import {
  PayrollReportLineItem,
  PayrollReportLineItem$inboundSchema,
  PayrollReportLineItem$Outbound,
  PayrollReportLineItem$outboundSchema,
} from "./payrollreportlineitem.js";
import {
  RedactedMember,
  RedactedMember$inboundSchema,
  RedactedMember$Outbound,
  RedactedMember$outboundSchema,
} from "./redactedmember.js";

export type PayrollReportInvoiceLabels = {};

export const PayrollReportInvoiceStatus = {
  Draft: "Draft",
  Open: "Open",
  Overdue: "Overdue",
  Cancelled: "Cancelled",
  Pending: "Pending",
  PaymentInTransit: "PaymentInTransit",
  Paid: "Paid",
} as const;
export type PayrollReportInvoiceStatus = ClosedEnum<
  typeof PayrollReportInvoiceStatus
>;

export type PayrollReportInvoice = {
  amount: number;
  approverName?: string | null | undefined;
  createdAt: string;
  currency: string;
  dueDate: string;
  eventActors?:
    | Fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c
    | null
    | undefined;
  invoiceId: string;
  invoiceNumber: string;
  invoicePdf: string;
  labels?: PayrollReportInvoiceLabels | null | undefined;
  lineItems: Array<PayrollReportLineItem>;
  member: RedactedMember;
  memberClientId: string;
  memberExternalId?: number | null | undefined;
  memberId: string;
  notes?: string | null | undefined;
  paidDate?: string | null | undefined;
  payoutDestination?: string | null | undefined;
  projectName?: string | null | undefined;
  purchaseOrderNumber?: string | null | undefined;
  receiptPdf: string;
  sentDate?: string | null | undefined;
  status: PayrollReportInvoiceStatus;
  updatedAt: string;
};

/** @internal */
export const PayrollReportInvoiceLabels$inboundSchema: z.ZodType<
  PayrollReportInvoiceLabels,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type PayrollReportInvoiceLabels$Outbound = {};

/** @internal */
export const PayrollReportInvoiceLabels$outboundSchema: z.ZodType<
  PayrollReportInvoiceLabels$Outbound,
  z.ZodTypeDef,
  PayrollReportInvoiceLabels
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PayrollReportInvoiceLabels$ {
  /** @deprecated use `PayrollReportInvoiceLabels$inboundSchema` instead. */
  export const inboundSchema = PayrollReportInvoiceLabels$inboundSchema;
  /** @deprecated use `PayrollReportInvoiceLabels$outboundSchema` instead. */
  export const outboundSchema = PayrollReportInvoiceLabels$outboundSchema;
  /** @deprecated use `PayrollReportInvoiceLabels$Outbound` instead. */
  export type Outbound = PayrollReportInvoiceLabels$Outbound;
}

export function payrollReportInvoiceLabelsToJSON(
  payrollReportInvoiceLabels: PayrollReportInvoiceLabels,
): string {
  return JSON.stringify(
    PayrollReportInvoiceLabels$outboundSchema.parse(payrollReportInvoiceLabels),
  );
}

export function payrollReportInvoiceLabelsFromJSON(
  jsonString: string,
): SafeParseResult<PayrollReportInvoiceLabels, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PayrollReportInvoiceLabels$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PayrollReportInvoiceLabels' from JSON`,
  );
}

/** @internal */
export const PayrollReportInvoiceStatus$inboundSchema: z.ZodNativeEnum<
  typeof PayrollReportInvoiceStatus
> = z.nativeEnum(PayrollReportInvoiceStatus);

/** @internal */
export const PayrollReportInvoiceStatus$outboundSchema: z.ZodNativeEnum<
  typeof PayrollReportInvoiceStatus
> = PayrollReportInvoiceStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PayrollReportInvoiceStatus$ {
  /** @deprecated use `PayrollReportInvoiceStatus$inboundSchema` instead. */
  export const inboundSchema = PayrollReportInvoiceStatus$inboundSchema;
  /** @deprecated use `PayrollReportInvoiceStatus$outboundSchema` instead. */
  export const outboundSchema = PayrollReportInvoiceStatus$outboundSchema;
}

/** @internal */
export const PayrollReportInvoice$inboundSchema: z.ZodType<
  PayrollReportInvoice,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: z.number(),
  approverName: z.nullable(z.string()).optional(),
  createdAt: z.string(),
  currency: z.string(),
  dueDate: z.string(),
  eventActors: z.nullable(
    Fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c$inboundSchema,
  ).optional(),
  invoiceId: z.string(),
  invoiceNumber: z.string(),
  invoicePdf: z.string(),
  labels: z.nullable(z.lazy(() => PayrollReportInvoiceLabels$inboundSchema))
    .optional(),
  lineItems: z.array(PayrollReportLineItem$inboundSchema),
  member: RedactedMember$inboundSchema,
  memberClientId: z.string(),
  memberExternalId: z.nullable(z.number()).optional(),
  memberId: z.string(),
  notes: z.nullable(z.string()).optional(),
  paidDate: z.nullable(z.string()).optional(),
  payoutDestination: z.nullable(z.string()).optional(),
  projectName: z.nullable(z.string()).optional(),
  purchaseOrderNumber: z.nullable(z.string()).optional(),
  receiptPdf: z.string(),
  sentDate: z.nullable(z.string()).optional(),
  status: PayrollReportInvoiceStatus$inboundSchema,
  updatedAt: z.string(),
});

/** @internal */
export type PayrollReportInvoice$Outbound = {
  amount: number;
  approverName?: string | null | undefined;
  createdAt: string;
  currency: string;
  dueDate: string;
  eventActors?:
    | Fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c$Outbound
    | null
    | undefined;
  invoiceId: string;
  invoiceNumber: string;
  invoicePdf: string;
  labels?: PayrollReportInvoiceLabels$Outbound | null | undefined;
  lineItems: Array<PayrollReportLineItem$Outbound>;
  member: RedactedMember$Outbound;
  memberClientId: string;
  memberExternalId?: number | null | undefined;
  memberId: string;
  notes?: string | null | undefined;
  paidDate?: string | null | undefined;
  payoutDestination?: string | null | undefined;
  projectName?: string | null | undefined;
  purchaseOrderNumber?: string | null | undefined;
  receiptPdf: string;
  sentDate?: string | null | undefined;
  status: string;
  updatedAt: string;
};

/** @internal */
export const PayrollReportInvoice$outboundSchema: z.ZodType<
  PayrollReportInvoice$Outbound,
  z.ZodTypeDef,
  PayrollReportInvoice
> = z.object({
  amount: z.number(),
  approverName: z.nullable(z.string()).optional(),
  createdAt: z.string(),
  currency: z.string(),
  dueDate: z.string(),
  eventActors: z.nullable(
    Fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c$outboundSchema,
  ).optional(),
  invoiceId: z.string(),
  invoiceNumber: z.string(),
  invoicePdf: z.string(),
  labels: z.nullable(z.lazy(() => PayrollReportInvoiceLabels$outboundSchema))
    .optional(),
  lineItems: z.array(PayrollReportLineItem$outboundSchema),
  member: RedactedMember$outboundSchema,
  memberClientId: z.string(),
  memberExternalId: z.nullable(z.number()).optional(),
  memberId: z.string(),
  notes: z.nullable(z.string()).optional(),
  paidDate: z.nullable(z.string()).optional(),
  payoutDestination: z.nullable(z.string()).optional(),
  projectName: z.nullable(z.string()).optional(),
  purchaseOrderNumber: z.nullable(z.string()).optional(),
  receiptPdf: z.string(),
  sentDate: z.nullable(z.string()).optional(),
  status: PayrollReportInvoiceStatus$outboundSchema,
  updatedAt: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PayrollReportInvoice$ {
  /** @deprecated use `PayrollReportInvoice$inboundSchema` instead. */
  export const inboundSchema = PayrollReportInvoice$inboundSchema;
  /** @deprecated use `PayrollReportInvoice$outboundSchema` instead. */
  export const outboundSchema = PayrollReportInvoice$outboundSchema;
  /** @deprecated use `PayrollReportInvoice$Outbound` instead. */
  export type Outbound = PayrollReportInvoice$Outbound;
}

export function payrollReportInvoiceToJSON(
  payrollReportInvoice: PayrollReportInvoice,
): string {
  return JSON.stringify(
    PayrollReportInvoice$outboundSchema.parse(payrollReportInvoice),
  );
}

export function payrollReportInvoiceFromJSON(
  jsonString: string,
): SafeParseResult<PayrollReportInvoice, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PayrollReportInvoice$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PayrollReportInvoice' from JSON`,
  );
}
