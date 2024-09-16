/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const BulkPayableItemCreatePayableStatus = {
  Draft: "Draft",
  Open: "Open",
  Approved: "Approved",
  Paid: "Paid",
  Cancelled: "Cancelled",
} as const;
export type BulkPayableItemCreatePayableStatus = ClosedEnum<
  typeof BulkPayableItemCreatePayableStatus
>;

export const BulkPayableItemCreateWorkflowSubStatus = {
  Submitted: "Submitted",
} as const;
export type BulkPayableItemCreateWorkflowSubStatus = ClosedEnum<
  typeof BulkPayableItemCreateWorkflowSubStatus
>;

export type BulkPayableItemCreate = {
  amount: number;
  attachmentId?: string | null | undefined;
  bulkPayableBatchId: string;
  bulkPayableItemMergeKey?: string | null | undefined;
  bulkPayableItemReference?: string | null | undefined;
  clientId?: string | null | undefined;
  collaboratorEmail?: string | null | undefined;
  collaboratorExternalId?: string | null | undefined;
  collaboratorId?: string | null | undefined;
  dueDate: string;
  labels?: { [k: string]: string } | null | undefined;
  lineItemDescription: string;
  lineItemDetail?: string | null | undefined;
  paidDate?: string | null | undefined;
  payableNotes?: string | null | undefined;
  payableStatus: BulkPayableItemCreatePayableStatus;
  reimbursableExpense?: boolean | null | undefined;
  workflowSubStatus?: BulkPayableItemCreateWorkflowSubStatus | null | undefined;
};

/** @internal */
export const BulkPayableItemCreatePayableStatus$inboundSchema: z.ZodNativeEnum<
  typeof BulkPayableItemCreatePayableStatus
> = z.nativeEnum(BulkPayableItemCreatePayableStatus);

/** @internal */
export const BulkPayableItemCreatePayableStatus$outboundSchema: z.ZodNativeEnum<
  typeof BulkPayableItemCreatePayableStatus
> = BulkPayableItemCreatePayableStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BulkPayableItemCreatePayableStatus$ {
  /** @deprecated use `BulkPayableItemCreatePayableStatus$inboundSchema` instead. */
  export const inboundSchema = BulkPayableItemCreatePayableStatus$inboundSchema;
  /** @deprecated use `BulkPayableItemCreatePayableStatus$outboundSchema` instead. */
  export const outboundSchema =
    BulkPayableItemCreatePayableStatus$outboundSchema;
}

/** @internal */
export const BulkPayableItemCreateWorkflowSubStatus$inboundSchema:
  z.ZodNativeEnum<typeof BulkPayableItemCreateWorkflowSubStatus> = z.nativeEnum(
    BulkPayableItemCreateWorkflowSubStatus,
  );

/** @internal */
export const BulkPayableItemCreateWorkflowSubStatus$outboundSchema:
  z.ZodNativeEnum<typeof BulkPayableItemCreateWorkflowSubStatus> =
    BulkPayableItemCreateWorkflowSubStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BulkPayableItemCreateWorkflowSubStatus$ {
  /** @deprecated use `BulkPayableItemCreateWorkflowSubStatus$inboundSchema` instead. */
  export const inboundSchema =
    BulkPayableItemCreateWorkflowSubStatus$inboundSchema;
  /** @deprecated use `BulkPayableItemCreateWorkflowSubStatus$outboundSchema` instead. */
  export const outboundSchema =
    BulkPayableItemCreateWorkflowSubStatus$outboundSchema;
}

/** @internal */
export const BulkPayableItemCreate$inboundSchema: z.ZodType<
  BulkPayableItemCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: z.number(),
  attachmentId: z.nullable(z.string()).optional(),
  bulkPayableBatchId: z.string(),
  bulkPayableItemMergeKey: z.nullable(z.string()).optional(),
  bulkPayableItemReference: z.nullable(z.string()).optional(),
  clientId: z.nullable(z.string()).optional(),
  collaboratorEmail: z.nullable(z.string()).optional(),
  collaboratorExternalId: z.nullable(z.string()).optional(),
  collaboratorId: z.nullable(z.string()).optional(),
  dueDate: z.string(),
  labels: z.nullable(z.record(z.string())).optional(),
  lineItemDescription: z.string(),
  lineItemDetail: z.nullable(z.string()).optional(),
  paidDate: z.nullable(z.string()).optional(),
  payableNotes: z.nullable(z.string()).optional(),
  payableStatus: BulkPayableItemCreatePayableStatus$inboundSchema,
  reimbursableExpense: z.nullable(z.boolean()).optional(),
  workflowSubStatus: z.nullable(
    BulkPayableItemCreateWorkflowSubStatus$inboundSchema,
  ).optional(),
});

/** @internal */
export type BulkPayableItemCreate$Outbound = {
  amount: number;
  attachmentId?: string | null | undefined;
  bulkPayableBatchId: string;
  bulkPayableItemMergeKey?: string | null | undefined;
  bulkPayableItemReference?: string | null | undefined;
  clientId?: string | null | undefined;
  collaboratorEmail?: string | null | undefined;
  collaboratorExternalId?: string | null | undefined;
  collaboratorId?: string | null | undefined;
  dueDate: string;
  labels?: { [k: string]: string } | null | undefined;
  lineItemDescription: string;
  lineItemDetail?: string | null | undefined;
  paidDate?: string | null | undefined;
  payableNotes?: string | null | undefined;
  payableStatus: string;
  reimbursableExpense?: boolean | null | undefined;
  workflowSubStatus?: string | null | undefined;
};

/** @internal */
export const BulkPayableItemCreate$outboundSchema: z.ZodType<
  BulkPayableItemCreate$Outbound,
  z.ZodTypeDef,
  BulkPayableItemCreate
> = z.object({
  amount: z.number(),
  attachmentId: z.nullable(z.string()).optional(),
  bulkPayableBatchId: z.string(),
  bulkPayableItemMergeKey: z.nullable(z.string()).optional(),
  bulkPayableItemReference: z.nullable(z.string()).optional(),
  clientId: z.nullable(z.string()).optional(),
  collaboratorEmail: z.nullable(z.string()).optional(),
  collaboratorExternalId: z.nullable(z.string()).optional(),
  collaboratorId: z.nullable(z.string()).optional(),
  dueDate: z.string(),
  labels: z.nullable(z.record(z.string())).optional(),
  lineItemDescription: z.string(),
  lineItemDetail: z.nullable(z.string()).optional(),
  paidDate: z.nullable(z.string()).optional(),
  payableNotes: z.nullable(z.string()).optional(),
  payableStatus: BulkPayableItemCreatePayableStatus$outboundSchema,
  reimbursableExpense: z.nullable(z.boolean()).optional(),
  workflowSubStatus: z.nullable(
    BulkPayableItemCreateWorkflowSubStatus$outboundSchema,
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BulkPayableItemCreate$ {
  /** @deprecated use `BulkPayableItemCreate$inboundSchema` instead. */
  export const inboundSchema = BulkPayableItemCreate$inboundSchema;
  /** @deprecated use `BulkPayableItemCreate$outboundSchema` instead. */
  export const outboundSchema = BulkPayableItemCreate$outboundSchema;
  /** @deprecated use `BulkPayableItemCreate$Outbound` instead. */
  export type Outbound = BulkPayableItemCreate$Outbound;
}
