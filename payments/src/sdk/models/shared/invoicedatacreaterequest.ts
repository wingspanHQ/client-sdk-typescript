/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import {
    FeeHandlingConfig,
    FeeHandlingConfig$inboundSchema,
    FeeHandlingConfig$Outbound,
    FeeHandlingConfig$outboundSchema,
} from "./feehandlingconfig.js";
import {
    InvoiceCollaboratorCreateRequest,
    InvoiceCollaboratorCreateRequest$inboundSchema,
    InvoiceCollaboratorCreateRequest$Outbound,
    InvoiceCollaboratorCreateRequest$outboundSchema,
} from "./invoicecollaboratorcreaterequest.js";
import {
    InvoiceLineItemsCreateRequest,
    InvoiceLineItemsCreateRequest$inboundSchema,
    InvoiceLineItemsCreateRequest$Outbound,
    InvoiceLineItemsCreateRequest$outboundSchema,
} from "./invoicelineitemscreaterequest.js";
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
    ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2,
    ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2$inboundSchema,
    ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2$Outbound,
    ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2$outboundSchema,
} from "./thirtysixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2.js";
import * as z from "zod";

export const InvoiceDataCreateRequestAcceptedPaymentMethods = {
    Credit: "Credit",
    Ach: "ACH",
    Manual: "Manual",
} as const;
export type InvoiceDataCreateRequestAcceptedPaymentMethods = ClosedEnum<
    typeof InvoiceDataCreateRequestAcceptedPaymentMethods
>;

export const InvoiceDataCreateRequestCurrency = {
    Usd: "USD",
    Cad: "CAD",
} as const;
export type InvoiceDataCreateRequestCurrency = ClosedEnum<typeof InvoiceDataCreateRequestCurrency>;

export const InvoiceDataCreateRequestStatus = {
    Draft: "Draft",
    Open: "Open",
    Overdue: "Overdue",
    Cancelled: "Cancelled",
    Pending: "Pending",
    PaymentInTransit: "PaymentInTransit",
    Paid: "Paid",
} as const;
export type InvoiceDataCreateRequestStatus = ClosedEnum<typeof InvoiceDataCreateRequestStatus>;

export type InvoiceDataCreateRequest = {
    acceptedPaymentMethods?:
        | Array<InvoiceDataCreateRequestAcceptedPaymentMethods>
        | null
        | undefined;
    attachments?:
        | ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2
        | null
        | undefined;
    collaborators?: Array<InvoiceCollaboratorCreateRequest> | null | undefined;
    creditFeeHandling?: FeeHandlingConfig | null | undefined;
    currency?: InvoiceDataCreateRequestCurrency | null | undefined;
    dueDate?: string | null | undefined;
    invoiceNotes?: string | null | undefined;
    labels?: { [k: string]: string } | null | undefined;
    lateFeeHandling?: LateFeeConfig | null | undefined;
    lineItems: Array<InvoiceLineItemsCreateRequest>;
    memberClientId: string;
    notificationPreferences?: InvoiceNotificationPreferences | null | undefined;
    status?: InvoiceDataCreateRequestStatus | null | undefined;
};

/** @internal */
export const InvoiceDataCreateRequestAcceptedPaymentMethods$inboundSchema: z.ZodNativeEnum<
    typeof InvoiceDataCreateRequestAcceptedPaymentMethods
> = z.nativeEnum(InvoiceDataCreateRequestAcceptedPaymentMethods);

/** @internal */
export const InvoiceDataCreateRequestAcceptedPaymentMethods$outboundSchema: z.ZodNativeEnum<
    typeof InvoiceDataCreateRequestAcceptedPaymentMethods
> = InvoiceDataCreateRequestAcceptedPaymentMethods$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvoiceDataCreateRequestAcceptedPaymentMethods$ {
    /** @deprecated use `InvoiceDataCreateRequestAcceptedPaymentMethods$inboundSchema` instead. */
    export const inboundSchema = InvoiceDataCreateRequestAcceptedPaymentMethods$inboundSchema;
    /** @deprecated use `InvoiceDataCreateRequestAcceptedPaymentMethods$outboundSchema` instead. */
    export const outboundSchema = InvoiceDataCreateRequestAcceptedPaymentMethods$outboundSchema;
}

/** @internal */
export const InvoiceDataCreateRequestCurrency$inboundSchema: z.ZodNativeEnum<
    typeof InvoiceDataCreateRequestCurrency
> = z.nativeEnum(InvoiceDataCreateRequestCurrency);

/** @internal */
export const InvoiceDataCreateRequestCurrency$outboundSchema: z.ZodNativeEnum<
    typeof InvoiceDataCreateRequestCurrency
> = InvoiceDataCreateRequestCurrency$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvoiceDataCreateRequestCurrency$ {
    /** @deprecated use `InvoiceDataCreateRequestCurrency$inboundSchema` instead. */
    export const inboundSchema = InvoiceDataCreateRequestCurrency$inboundSchema;
    /** @deprecated use `InvoiceDataCreateRequestCurrency$outboundSchema` instead. */
    export const outboundSchema = InvoiceDataCreateRequestCurrency$outboundSchema;
}

/** @internal */
export const InvoiceDataCreateRequestStatus$inboundSchema: z.ZodNativeEnum<
    typeof InvoiceDataCreateRequestStatus
> = z.nativeEnum(InvoiceDataCreateRequestStatus);

/** @internal */
export const InvoiceDataCreateRequestStatus$outboundSchema: z.ZodNativeEnum<
    typeof InvoiceDataCreateRequestStatus
> = InvoiceDataCreateRequestStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvoiceDataCreateRequestStatus$ {
    /** @deprecated use `InvoiceDataCreateRequestStatus$inboundSchema` instead. */
    export const inboundSchema = InvoiceDataCreateRequestStatus$inboundSchema;
    /** @deprecated use `InvoiceDataCreateRequestStatus$outboundSchema` instead. */
    export const outboundSchema = InvoiceDataCreateRequestStatus$outboundSchema;
}

/** @internal */
export const InvoiceDataCreateRequest$inboundSchema: z.ZodType<
    InvoiceDataCreateRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    acceptedPaymentMethods: z
        .nullable(z.array(InvoiceDataCreateRequestAcceptedPaymentMethods$inboundSchema))
        .optional(),
    attachments: z
        .nullable(
            ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2$inboundSchema
        )
        .optional(),
    collaborators: z.nullable(z.array(InvoiceCollaboratorCreateRequest$inboundSchema)).optional(),
    creditFeeHandling: z.nullable(FeeHandlingConfig$inboundSchema).optional(),
    currency: z.nullable(InvoiceDataCreateRequestCurrency$inboundSchema).optional(),
    dueDate: z.nullable(z.string()).optional(),
    invoiceNotes: z.nullable(z.string()).optional(),
    labels: z.nullable(z.record(z.string())).optional(),
    lateFeeHandling: z.nullable(LateFeeConfig$inboundSchema).optional(),
    lineItems: z.array(InvoiceLineItemsCreateRequest$inboundSchema),
    memberClientId: z.string(),
    notificationPreferences: z.nullable(InvoiceNotificationPreferences$inboundSchema).optional(),
    status: z.nullable(InvoiceDataCreateRequestStatus$inboundSchema).optional(),
});

/** @internal */
export type InvoiceDataCreateRequest$Outbound = {
    acceptedPaymentMethods?: Array<string> | null | undefined;
    attachments?:
        | ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2$Outbound
        | null
        | undefined;
    collaborators?: Array<InvoiceCollaboratorCreateRequest$Outbound> | null | undefined;
    creditFeeHandling?: FeeHandlingConfig$Outbound | null | undefined;
    currency?: string | null | undefined;
    dueDate?: string | null | undefined;
    invoiceNotes?: string | null | undefined;
    labels?: { [k: string]: string } | null | undefined;
    lateFeeHandling?: LateFeeConfig$Outbound | null | undefined;
    lineItems: Array<InvoiceLineItemsCreateRequest$Outbound>;
    memberClientId: string;
    notificationPreferences?: InvoiceNotificationPreferences$Outbound | null | undefined;
    status?: string | null | undefined;
};

/** @internal */
export const InvoiceDataCreateRequest$outboundSchema: z.ZodType<
    InvoiceDataCreateRequest$Outbound,
    z.ZodTypeDef,
    InvoiceDataCreateRequest
> = z.object({
    acceptedPaymentMethods: z
        .nullable(z.array(InvoiceDataCreateRequestAcceptedPaymentMethods$outboundSchema))
        .optional(),
    attachments: z
        .nullable(
            ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2$outboundSchema
        )
        .optional(),
    collaborators: z.nullable(z.array(InvoiceCollaboratorCreateRequest$outboundSchema)).optional(),
    creditFeeHandling: z.nullable(FeeHandlingConfig$outboundSchema).optional(),
    currency: z.nullable(InvoiceDataCreateRequestCurrency$outboundSchema).optional(),
    dueDate: z.nullable(z.string()).optional(),
    invoiceNotes: z.nullable(z.string()).optional(),
    labels: z.nullable(z.record(z.string())).optional(),
    lateFeeHandling: z.nullable(LateFeeConfig$outboundSchema).optional(),
    lineItems: z.array(InvoiceLineItemsCreateRequest$outboundSchema),
    memberClientId: z.string(),
    notificationPreferences: z.nullable(InvoiceNotificationPreferences$outboundSchema).optional(),
    status: z.nullable(InvoiceDataCreateRequestStatus$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvoiceDataCreateRequest$ {
    /** @deprecated use `InvoiceDataCreateRequest$inboundSchema` instead. */
    export const inboundSchema = InvoiceDataCreateRequest$inboundSchema;
    /** @deprecated use `InvoiceDataCreateRequest$outboundSchema` instead. */
    export const outboundSchema = InvoiceDataCreateRequest$outboundSchema;
    /** @deprecated use `InvoiceDataCreateRequest$Outbound` instead. */
    export type Outbound = InvoiceDataCreateRequest$Outbound;
}
