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
import {
  InvoiceLineItemsCreateRequest,
  InvoiceLineItemsCreateRequest$inboundSchema,
  InvoiceLineItemsCreateRequest$Outbound,
  InvoiceLineItemsCreateRequest$outboundSchema,
} from "./invoicelineitemscreaterequest.js";
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
  LateFeeConfigUpdate,
  LateFeeConfigUpdate$inboundSchema,
  LateFeeConfigUpdate$Outbound,
  LateFeeConfigUpdate$outboundSchema,
} from "./latefeeconfigupdate.js";
import {
  ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2,
  ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2$inboundSchema,
  ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2$Outbound,
  ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2$outboundSchema,
} from "./thirtysixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2.js";
import {
  ThreeBillionOneHundredAndNinetyMillionSixHundredAndEightyFiveThousandEightHundredAndThirtyTwoa4970525ea5b0803efff0b36a0202062e1fd8a0bc187acbe156461,
  ThreeBillionOneHundredAndNinetyMillionSixHundredAndEightyFiveThousandEightHundredAndThirtyTwoa4970525ea5b0803efff0b36a0202062e1fd8a0bc187acbe156461$inboundSchema,
  ThreeBillionOneHundredAndNinetyMillionSixHundredAndEightyFiveThousandEightHundredAndThirtyTwoa4970525ea5b0803efff0b36a0202062e1fd8a0bc187acbe156461$Outbound,
  ThreeBillionOneHundredAndNinetyMillionSixHundredAndEightyFiveThousandEightHundredAndThirtyTwoa4970525ea5b0803efff0b36a0202062e1fd8a0bc187acbe156461$outboundSchema,
} from "./threebilliononehundredandninetymillionsixhundredandeightyfivethousandeighthundredandthirtytwoa4970525ea5b0803efff0b36a0202062e1fd8a0bc187acbe156461.js";

export const PayableCreateRequestAcceptedPaymentMethods = {
  Credit: "Credit",
  Ach: "ACH",
  Manual: "Manual",
} as const;
export type PayableCreateRequestAcceptedPaymentMethods = ClosedEnum<
  typeof PayableCreateRequestAcceptedPaymentMethods
>;

export type PayableCreateRequestClient = {};

export const PayableCreateRequestCurrency = {
  Usd: "USD",
  Cad: "CAD",
} as const;
export type PayableCreateRequestCurrency = ClosedEnum<
  typeof PayableCreateRequestCurrency
>;

export type PayableCreateRequestMember = {};

export const PayableCreateRequestStatus = {
  Draft: "Draft",
  Open: "Open",
  Overdue: "Overdue",
  Cancelled: "Cancelled",
  Pending: "Pending",
  PaymentInTransit: "PaymentInTransit",
  Paid: "Paid",
} as const;
export type PayableCreateRequestStatus = ClosedEnum<
  typeof PayableCreateRequestStatus
>;

export type PayableCreateRequest = {
  acceptedPaymentMethods?:
    | Array<PayableCreateRequestAcceptedPaymentMethods>
    | null
    | undefined;
  attachments?:
    | ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2
    | null
    | undefined;
  client?: PayableCreateRequestClient | null | undefined;
  collaboratorId: string;
  creditFeeHandling: FeeHandlingConfig;
  currency?: PayableCreateRequestCurrency | null | undefined;
  dueDate: string;
  integration?:
    | ThreeBillionOneHundredAndNinetyMillionSixHundredAndEightyFiveThousandEightHundredAndThirtyTwoa4970525ea5b0803efff0b36a0202062e1fd8a0bc187acbe156461
    | null
    | undefined;
  invoiceNotes?: string | null | undefined;
  labels?: { [k: string]: string } | null | undefined;
  lateFeeHandling?: LateFeeConfigUpdate | null | undefined;
  lineItems: Array<InvoiceLineItemsCreateRequest>;
  member?: PayableCreateRequestMember | null | undefined;
  memberClientId?: string | null | undefined;
  metadata?: InvoiceMetadata | null | undefined;
  notificationPreferences?: InvoiceNotificationPreferences | null | undefined;
  status?: PayableCreateRequestStatus | null | undefined;
};

/** @internal */
export const PayableCreateRequestAcceptedPaymentMethods$inboundSchema:
  z.ZodNativeEnum<typeof PayableCreateRequestAcceptedPaymentMethods> = z
    .nativeEnum(PayableCreateRequestAcceptedPaymentMethods);

/** @internal */
export const PayableCreateRequestAcceptedPaymentMethods$outboundSchema:
  z.ZodNativeEnum<typeof PayableCreateRequestAcceptedPaymentMethods> =
    PayableCreateRequestAcceptedPaymentMethods$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PayableCreateRequestAcceptedPaymentMethods$ {
  /** @deprecated use `PayableCreateRequestAcceptedPaymentMethods$inboundSchema` instead. */
  export const inboundSchema =
    PayableCreateRequestAcceptedPaymentMethods$inboundSchema;
  /** @deprecated use `PayableCreateRequestAcceptedPaymentMethods$outboundSchema` instead. */
  export const outboundSchema =
    PayableCreateRequestAcceptedPaymentMethods$outboundSchema;
}

/** @internal */
export const PayableCreateRequestClient$inboundSchema: z.ZodType<
  PayableCreateRequestClient,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type PayableCreateRequestClient$Outbound = {};

/** @internal */
export const PayableCreateRequestClient$outboundSchema: z.ZodType<
  PayableCreateRequestClient$Outbound,
  z.ZodTypeDef,
  PayableCreateRequestClient
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PayableCreateRequestClient$ {
  /** @deprecated use `PayableCreateRequestClient$inboundSchema` instead. */
  export const inboundSchema = PayableCreateRequestClient$inboundSchema;
  /** @deprecated use `PayableCreateRequestClient$outboundSchema` instead. */
  export const outboundSchema = PayableCreateRequestClient$outboundSchema;
  /** @deprecated use `PayableCreateRequestClient$Outbound` instead. */
  export type Outbound = PayableCreateRequestClient$Outbound;
}

/** @internal */
export const PayableCreateRequestCurrency$inboundSchema: z.ZodNativeEnum<
  typeof PayableCreateRequestCurrency
> = z.nativeEnum(PayableCreateRequestCurrency);

/** @internal */
export const PayableCreateRequestCurrency$outboundSchema: z.ZodNativeEnum<
  typeof PayableCreateRequestCurrency
> = PayableCreateRequestCurrency$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PayableCreateRequestCurrency$ {
  /** @deprecated use `PayableCreateRequestCurrency$inboundSchema` instead. */
  export const inboundSchema = PayableCreateRequestCurrency$inboundSchema;
  /** @deprecated use `PayableCreateRequestCurrency$outboundSchema` instead. */
  export const outboundSchema = PayableCreateRequestCurrency$outboundSchema;
}

/** @internal */
export const PayableCreateRequestMember$inboundSchema: z.ZodType<
  PayableCreateRequestMember,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type PayableCreateRequestMember$Outbound = {};

/** @internal */
export const PayableCreateRequestMember$outboundSchema: z.ZodType<
  PayableCreateRequestMember$Outbound,
  z.ZodTypeDef,
  PayableCreateRequestMember
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PayableCreateRequestMember$ {
  /** @deprecated use `PayableCreateRequestMember$inboundSchema` instead. */
  export const inboundSchema = PayableCreateRequestMember$inboundSchema;
  /** @deprecated use `PayableCreateRequestMember$outboundSchema` instead. */
  export const outboundSchema = PayableCreateRequestMember$outboundSchema;
  /** @deprecated use `PayableCreateRequestMember$Outbound` instead. */
  export type Outbound = PayableCreateRequestMember$Outbound;
}

/** @internal */
export const PayableCreateRequestStatus$inboundSchema: z.ZodNativeEnum<
  typeof PayableCreateRequestStatus
> = z.nativeEnum(PayableCreateRequestStatus);

/** @internal */
export const PayableCreateRequestStatus$outboundSchema: z.ZodNativeEnum<
  typeof PayableCreateRequestStatus
> = PayableCreateRequestStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PayableCreateRequestStatus$ {
  /** @deprecated use `PayableCreateRequestStatus$inboundSchema` instead. */
  export const inboundSchema = PayableCreateRequestStatus$inboundSchema;
  /** @deprecated use `PayableCreateRequestStatus$outboundSchema` instead. */
  export const outboundSchema = PayableCreateRequestStatus$outboundSchema;
}

/** @internal */
export const PayableCreateRequest$inboundSchema: z.ZodType<
  PayableCreateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  acceptedPaymentMethods: z.nullable(
    z.array(PayableCreateRequestAcceptedPaymentMethods$inboundSchema),
  ).optional(),
  attachments: z.nullable(
    ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2$inboundSchema,
  ).optional(),
  client: z.nullable(z.lazy(() => PayableCreateRequestClient$inboundSchema))
    .optional(),
  collaboratorId: z.string(),
  creditFeeHandling: FeeHandlingConfig$inboundSchema,
  currency: z.nullable(PayableCreateRequestCurrency$inboundSchema).optional(),
  dueDate: z.string(),
  integration: z.nullable(
    ThreeBillionOneHundredAndNinetyMillionSixHundredAndEightyFiveThousandEightHundredAndThirtyTwoa4970525ea5b0803efff0b36a0202062e1fd8a0bc187acbe156461$inboundSchema,
  ).optional(),
  invoiceNotes: z.nullable(z.string()).optional(),
  labels: z.nullable(z.record(z.string())).optional(),
  lateFeeHandling: z.nullable(LateFeeConfigUpdate$inboundSchema).optional(),
  lineItems: z.array(InvoiceLineItemsCreateRequest$inboundSchema),
  member: z.nullable(z.lazy(() => PayableCreateRequestMember$inboundSchema))
    .optional(),
  memberClientId: z.nullable(z.string()).optional(),
  metadata: z.nullable(InvoiceMetadata$inboundSchema).optional(),
  notificationPreferences: z.nullable(
    InvoiceNotificationPreferences$inboundSchema,
  ).optional(),
  status: z.nullable(PayableCreateRequestStatus$inboundSchema).optional(),
});

/** @internal */
export type PayableCreateRequest$Outbound = {
  acceptedPaymentMethods?: Array<string> | null | undefined;
  attachments?:
    | ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2$Outbound
    | null
    | undefined;
  client?: PayableCreateRequestClient$Outbound | null | undefined;
  collaboratorId: string;
  creditFeeHandling: FeeHandlingConfig$Outbound;
  currency?: string | null | undefined;
  dueDate: string;
  integration?:
    | ThreeBillionOneHundredAndNinetyMillionSixHundredAndEightyFiveThousandEightHundredAndThirtyTwoa4970525ea5b0803efff0b36a0202062e1fd8a0bc187acbe156461$Outbound
    | null
    | undefined;
  invoiceNotes?: string | null | undefined;
  labels?: { [k: string]: string } | null | undefined;
  lateFeeHandling?: LateFeeConfigUpdate$Outbound | null | undefined;
  lineItems: Array<InvoiceLineItemsCreateRequest$Outbound>;
  member?: PayableCreateRequestMember$Outbound | null | undefined;
  memberClientId?: string | null | undefined;
  metadata?: InvoiceMetadata$Outbound | null | undefined;
  notificationPreferences?:
    | InvoiceNotificationPreferences$Outbound
    | null
    | undefined;
  status?: string | null | undefined;
};

/** @internal */
export const PayableCreateRequest$outboundSchema: z.ZodType<
  PayableCreateRequest$Outbound,
  z.ZodTypeDef,
  PayableCreateRequest
> = z.object({
  acceptedPaymentMethods: z.nullable(
    z.array(PayableCreateRequestAcceptedPaymentMethods$outboundSchema),
  ).optional(),
  attachments: z.nullable(
    ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2$outboundSchema,
  ).optional(),
  client: z.nullable(z.lazy(() => PayableCreateRequestClient$outboundSchema))
    .optional(),
  collaboratorId: z.string(),
  creditFeeHandling: FeeHandlingConfig$outboundSchema,
  currency: z.nullable(PayableCreateRequestCurrency$outboundSchema).optional(),
  dueDate: z.string(),
  integration: z.nullable(
    ThreeBillionOneHundredAndNinetyMillionSixHundredAndEightyFiveThousandEightHundredAndThirtyTwoa4970525ea5b0803efff0b36a0202062e1fd8a0bc187acbe156461$outboundSchema,
  ).optional(),
  invoiceNotes: z.nullable(z.string()).optional(),
  labels: z.nullable(z.record(z.string())).optional(),
  lateFeeHandling: z.nullable(LateFeeConfigUpdate$outboundSchema).optional(),
  lineItems: z.array(InvoiceLineItemsCreateRequest$outboundSchema),
  member: z.nullable(z.lazy(() => PayableCreateRequestMember$outboundSchema))
    .optional(),
  memberClientId: z.nullable(z.string()).optional(),
  metadata: z.nullable(InvoiceMetadata$outboundSchema).optional(),
  notificationPreferences: z.nullable(
    InvoiceNotificationPreferences$outboundSchema,
  ).optional(),
  status: z.nullable(PayableCreateRequestStatus$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PayableCreateRequest$ {
  /** @deprecated use `PayableCreateRequest$inboundSchema` instead. */
  export const inboundSchema = PayableCreateRequest$inboundSchema;
  /** @deprecated use `PayableCreateRequest$outboundSchema` instead. */
  export const outboundSchema = PayableCreateRequest$outboundSchema;
  /** @deprecated use `PayableCreateRequest$Outbound` instead. */
  export type Outbound = PayableCreateRequest$Outbound;
}
