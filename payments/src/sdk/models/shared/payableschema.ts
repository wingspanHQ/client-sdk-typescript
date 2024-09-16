/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import {
  Address,
  Address$inboundSchema,
  Address$Outbound,
  Address$outboundSchema,
} from "./address.js";
import {
  BankAccount,
  BankAccount$inboundSchema,
  BankAccount$Outbound,
  BankAccount$outboundSchema,
} from "./bankaccount.js";
import {
  ClientOptions,
  ClientOptions$inboundSchema,
  ClientOptions$Outbound,
  ClientOptions$outboundSchema,
} from "./clientoptions.js";
import {
  FeeHandlingConfig,
  FeeHandlingConfig$inboundSchema,
  FeeHandlingConfig$Outbound,
  FeeHandlingConfig$outboundSchema,
} from "./feehandlingconfig.js";
import {
  Fees,
  Fees$inboundSchema,
  Fees$Outbound,
  Fees$outboundSchema,
} from "./fees.js";
import {
  InvoiceAttachments,
  InvoiceAttachments$inboundSchema,
  InvoiceAttachments$Outbound,
  InvoiceAttachments$outboundSchema,
} from "./invoiceattachments.js";
import {
  InvoiceEvents,
  InvoiceEvents$inboundSchema,
  InvoiceEvents$Outbound,
  InvoiceEvents$outboundSchema,
} from "./invoiceevents.js";
import {
  InvoiceLineItem,
  InvoiceLineItem$inboundSchema,
  InvoiceLineItem$Outbound,
  InvoiceLineItem$outboundSchema,
} from "./invoicelineitem.js";
import {
  InvoiceMetadata,
  InvoiceMetadata$inboundSchema,
  InvoiceMetadata$Outbound,
  InvoiceMetadata$outboundSchema,
} from "./invoicemetadata.js";
import {
  InvoiceNotificationPreferences,
  InvoiceNotificationPreferences$inboundSchema,
  InvoiceNotificationPreferences$Outbound,
  InvoiceNotificationPreferences$outboundSchema,
} from "./invoicenotificationpreferences.js";
import {
  LateFeeConfig,
  LateFeeConfig$inboundSchema,
  LateFeeConfig$Outbound,
  LateFeeConfig$outboundSchema,
} from "./latefeeconfig.js";
import {
  MemberOptions,
  MemberOptions$inboundSchema,
  MemberOptions$Outbound,
  MemberOptions$outboundSchema,
} from "./memberoptions.js";
import {
  ScheduleDate,
  ScheduleDate$inboundSchema,
  ScheduleDate$Outbound,
  ScheduleDate$outboundSchema,
} from "./scheduledate.js";
import {
  Sixb94b58d661f3eabc1444a7a43ac4b99580f0d050123b7bf38184e2f0d7bd66e,
  Sixb94b58d661f3eabc1444a7a43ac4b99580f0d050123b7bf38184e2f0d7bd66e$inboundSchema,
  Sixb94b58d661f3eabc1444a7a43ac4b99580f0d050123b7bf38184e2f0d7bd66e$Outbound,
  Sixb94b58d661f3eabc1444a7a43ac4b99580f0d050123b7bf38184e2f0d7bd66e$outboundSchema,
} from "./sixb94b58d661f3eabc1444a7a43ac4b99580f0d050123b7bf38184e2f0d7bd66e.js";
import {
  UserRoles,
  UserRoles$inboundSchema,
  UserRoles$Outbound,
  UserRoles$outboundSchema,
} from "./userroles.js";

export const PayableSchemaAcceptedPaymentMethods = {
  Credit: "Credit",
  Ach: "ACH",
  Manual: "Manual",
} as const;
export type PayableSchemaAcceptedPaymentMethods = ClosedEnum<
  typeof PayableSchemaAcceptedPaymentMethods
>;

export const PayableSchemaCurrency = {
  Usd: "USD",
  Cad: "CAD",
} as const;
export type PayableSchemaCurrency = ClosedEnum<typeof PayableSchemaCurrency>;

export const PayableSchemaStatus = {
  Draft: "Draft",
  Open: "Open",
  Overdue: "Overdue",
  Cancelled: "Cancelled",
  Pending: "Pending",
  PaymentInTransit: "PaymentInTransit",
  Paid: "Paid",
} as const;
export type PayableSchemaStatus = ClosedEnum<typeof PayableSchemaStatus>;

export type PayableSchema = {
  acceptedPaymentMethods?:
    | Array<PayableSchemaAcceptedPaymentMethods>
    | null
    | undefined;
  accountId?: string | null | undefined;
  amount: number;
  attachments: InvoiceAttachments;
  bankTransferInfo?: BankAccount | null | undefined;
  chargedFees?: Fees | null | undefined;
  client: ClientOptions;
  clientId: string;
  collaboratorId: string;
  createdAt: string;
  creditFeeHandling: FeeHandlingConfig;
  currency: PayableSchemaCurrency;
  dueDate: string;
  eventActors: { [k: string]: string };
  events: InvoiceEvents;
  integration:
    Sixb94b58d661f3eabc1444a7a43ac4b99580f0d050123b7bf38184e2f0d7bd66e;
  internationalBankTransferInfo?: BankAccount | null | undefined;
  invoiceNotes: string;
  invoiceNumber: string;
  invoiceTemplateId: string;
  labels: { [k: string]: string };
  lateFeeHandling: LateFeeConfig;
  lineItems: Array<InvoiceLineItem>;
  member: MemberOptions;
  memberAddress: Address;
  memberFormattedAddressLines?: Array<string> | null | undefined;
  memberId: string;
  metadata?: InvoiceMetadata | null | undefined;
  nextPayrollExecutionDate?: ScheduleDate | null | undefined;
  notificationPreferences: InvoiceNotificationPreferences;
  payableId: string;
  paymentMethodId?: string | null | undefined;
  sourceId?: string | null | undefined;
  status: PayableSchemaStatus;
  updatedAt: string;
  userRoles: UserRoles;
};

/** @internal */
export const PayableSchemaAcceptedPaymentMethods$inboundSchema: z.ZodNativeEnum<
  typeof PayableSchemaAcceptedPaymentMethods
> = z.nativeEnum(PayableSchemaAcceptedPaymentMethods);

/** @internal */
export const PayableSchemaAcceptedPaymentMethods$outboundSchema:
  z.ZodNativeEnum<typeof PayableSchemaAcceptedPaymentMethods> =
    PayableSchemaAcceptedPaymentMethods$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PayableSchemaAcceptedPaymentMethods$ {
  /** @deprecated use `PayableSchemaAcceptedPaymentMethods$inboundSchema` instead. */
  export const inboundSchema =
    PayableSchemaAcceptedPaymentMethods$inboundSchema;
  /** @deprecated use `PayableSchemaAcceptedPaymentMethods$outboundSchema` instead. */
  export const outboundSchema =
    PayableSchemaAcceptedPaymentMethods$outboundSchema;
}

/** @internal */
export const PayableSchemaCurrency$inboundSchema: z.ZodNativeEnum<
  typeof PayableSchemaCurrency
> = z.nativeEnum(PayableSchemaCurrency);

/** @internal */
export const PayableSchemaCurrency$outboundSchema: z.ZodNativeEnum<
  typeof PayableSchemaCurrency
> = PayableSchemaCurrency$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PayableSchemaCurrency$ {
  /** @deprecated use `PayableSchemaCurrency$inboundSchema` instead. */
  export const inboundSchema = PayableSchemaCurrency$inboundSchema;
  /** @deprecated use `PayableSchemaCurrency$outboundSchema` instead. */
  export const outboundSchema = PayableSchemaCurrency$outboundSchema;
}

/** @internal */
export const PayableSchemaStatus$inboundSchema: z.ZodNativeEnum<
  typeof PayableSchemaStatus
> = z.nativeEnum(PayableSchemaStatus);

/** @internal */
export const PayableSchemaStatus$outboundSchema: z.ZodNativeEnum<
  typeof PayableSchemaStatus
> = PayableSchemaStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PayableSchemaStatus$ {
  /** @deprecated use `PayableSchemaStatus$inboundSchema` instead. */
  export const inboundSchema = PayableSchemaStatus$inboundSchema;
  /** @deprecated use `PayableSchemaStatus$outboundSchema` instead. */
  export const outboundSchema = PayableSchemaStatus$outboundSchema;
}

/** @internal */
export const PayableSchema$inboundSchema: z.ZodType<
  PayableSchema,
  z.ZodTypeDef,
  unknown
> = z.object({
  acceptedPaymentMethods: z.nullable(
    z.array(PayableSchemaAcceptedPaymentMethods$inboundSchema),
  ).optional(),
  accountId: z.nullable(z.string()).optional(),
  amount: z.number(),
  attachments: InvoiceAttachments$inboundSchema,
  bankTransferInfo: z.nullable(BankAccount$inboundSchema).optional(),
  chargedFees: z.nullable(Fees$inboundSchema).optional(),
  client: ClientOptions$inboundSchema,
  clientId: z.string(),
  collaboratorId: z.string(),
  createdAt: z.string(),
  creditFeeHandling: FeeHandlingConfig$inboundSchema,
  currency: PayableSchemaCurrency$inboundSchema,
  dueDate: z.string(),
  eventActors: z.record(z.string()),
  events: InvoiceEvents$inboundSchema,
  integration:
    Sixb94b58d661f3eabc1444a7a43ac4b99580f0d050123b7bf38184e2f0d7bd66e$inboundSchema,
  internationalBankTransferInfo: z.nullable(BankAccount$inboundSchema)
    .optional(),
  invoiceNotes: z.string(),
  invoiceNumber: z.string(),
  invoiceTemplateId: z.string(),
  labels: z.record(z.string()),
  lateFeeHandling: LateFeeConfig$inboundSchema,
  lineItems: z.array(InvoiceLineItem$inboundSchema),
  member: MemberOptions$inboundSchema,
  memberAddress: Address$inboundSchema,
  memberFormattedAddressLines: z.nullable(z.array(z.string())).optional(),
  memberId: z.string(),
  metadata: z.nullable(InvoiceMetadata$inboundSchema).optional(),
  nextPayrollExecutionDate: z.nullable(ScheduleDate$inboundSchema).optional(),
  notificationPreferences: InvoiceNotificationPreferences$inboundSchema,
  payableId: z.string(),
  paymentMethodId: z.nullable(z.string()).optional(),
  sourceId: z.nullable(z.string()).optional(),
  status: PayableSchemaStatus$inboundSchema,
  updatedAt: z.string(),
  userRoles: UserRoles$inboundSchema,
});

/** @internal */
export type PayableSchema$Outbound = {
  acceptedPaymentMethods?: Array<string> | null | undefined;
  accountId?: string | null | undefined;
  amount: number;
  attachments: InvoiceAttachments$Outbound;
  bankTransferInfo?: BankAccount$Outbound | null | undefined;
  chargedFees?: Fees$Outbound | null | undefined;
  client: ClientOptions$Outbound;
  clientId: string;
  collaboratorId: string;
  createdAt: string;
  creditFeeHandling: FeeHandlingConfig$Outbound;
  currency: string;
  dueDate: string;
  eventActors: { [k: string]: string };
  events: InvoiceEvents$Outbound;
  integration:
    Sixb94b58d661f3eabc1444a7a43ac4b99580f0d050123b7bf38184e2f0d7bd66e$Outbound;
  internationalBankTransferInfo?: BankAccount$Outbound | null | undefined;
  invoiceNotes: string;
  invoiceNumber: string;
  invoiceTemplateId: string;
  labels: { [k: string]: string };
  lateFeeHandling: LateFeeConfig$Outbound;
  lineItems: Array<InvoiceLineItem$Outbound>;
  member: MemberOptions$Outbound;
  memberAddress: Address$Outbound;
  memberFormattedAddressLines?: Array<string> | null | undefined;
  memberId: string;
  metadata?: InvoiceMetadata$Outbound | null | undefined;
  nextPayrollExecutionDate?: ScheduleDate$Outbound | null | undefined;
  notificationPreferences: InvoiceNotificationPreferences$Outbound;
  payableId: string;
  paymentMethodId?: string | null | undefined;
  sourceId?: string | null | undefined;
  status: string;
  updatedAt: string;
  userRoles: UserRoles$Outbound;
};

/** @internal */
export const PayableSchema$outboundSchema: z.ZodType<
  PayableSchema$Outbound,
  z.ZodTypeDef,
  PayableSchema
> = z.object({
  acceptedPaymentMethods: z.nullable(
    z.array(PayableSchemaAcceptedPaymentMethods$outboundSchema),
  ).optional(),
  accountId: z.nullable(z.string()).optional(),
  amount: z.number(),
  attachments: InvoiceAttachments$outboundSchema,
  bankTransferInfo: z.nullable(BankAccount$outboundSchema).optional(),
  chargedFees: z.nullable(Fees$outboundSchema).optional(),
  client: ClientOptions$outboundSchema,
  clientId: z.string(),
  collaboratorId: z.string(),
  createdAt: z.string(),
  creditFeeHandling: FeeHandlingConfig$outboundSchema,
  currency: PayableSchemaCurrency$outboundSchema,
  dueDate: z.string(),
  eventActors: z.record(z.string()),
  events: InvoiceEvents$outboundSchema,
  integration:
    Sixb94b58d661f3eabc1444a7a43ac4b99580f0d050123b7bf38184e2f0d7bd66e$outboundSchema,
  internationalBankTransferInfo: z.nullable(BankAccount$outboundSchema)
    .optional(),
  invoiceNotes: z.string(),
  invoiceNumber: z.string(),
  invoiceTemplateId: z.string(),
  labels: z.record(z.string()),
  lateFeeHandling: LateFeeConfig$outboundSchema,
  lineItems: z.array(InvoiceLineItem$outboundSchema),
  member: MemberOptions$outboundSchema,
  memberAddress: Address$outboundSchema,
  memberFormattedAddressLines: z.nullable(z.array(z.string())).optional(),
  memberId: z.string(),
  metadata: z.nullable(InvoiceMetadata$outboundSchema).optional(),
  nextPayrollExecutionDate: z.nullable(ScheduleDate$outboundSchema).optional(),
  notificationPreferences: InvoiceNotificationPreferences$outboundSchema,
  payableId: z.string(),
  paymentMethodId: z.nullable(z.string()).optional(),
  sourceId: z.nullable(z.string()).optional(),
  status: PayableSchemaStatus$outboundSchema,
  updatedAt: z.string(),
  userRoles: UserRoles$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PayableSchema$ {
  /** @deprecated use `PayableSchema$inboundSchema` instead. */
  export const inboundSchema = PayableSchema$inboundSchema;
  /** @deprecated use `PayableSchema$outboundSchema` instead. */
  export const outboundSchema = PayableSchema$outboundSchema;
  /** @deprecated use `PayableSchema$Outbound` instead. */
  export type Outbound = PayableSchema$Outbound;
}
