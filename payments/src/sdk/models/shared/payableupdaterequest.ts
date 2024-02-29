/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { FeeHandlingConfig, FeeHandlingConfig$ } from "./feehandlingconfig";
import { Fees, Fees$ } from "./fees";
import {
    InvoiceCollaboratorUpdateRequest,
    InvoiceCollaboratorUpdateRequest$,
} from "./invoicecollaboratorupdaterequest";
import {
    InvoiceLineItemsCreateRequest,
    InvoiceLineItemsCreateRequest$,
} from "./invoicelineitemscreaterequest";
import { InvoiceMetadata, InvoiceMetadata$ } from "./invoicemetadata";
import {
    InvoiceNotificationPreferences,
    InvoiceNotificationPreferences$,
} from "./invoicenotificationpreferences";
import { LateFeeConfigUpdate, LateFeeConfigUpdate$ } from "./latefeeconfigupdate";
import {
    ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2,
    ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2$,
} from "./thirtysixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2";
import {
    ThreeBillionOneHundredAndNinetyMillionSixHundredAndEightyFiveThousandEightHundredAndThirtyTwoa4970525ea5b0803efff0b36a0202062e1fd8a0bc187acbe156461,
    ThreeBillionOneHundredAndNinetyMillionSixHundredAndEightyFiveThousandEightHundredAndThirtyTwoa4970525ea5b0803efff0b36a0202062e1fd8a0bc187acbe156461$,
} from "./threebilliononehundredandninetymillionsixhundredandeightyfivethousandeighthundredandthirtytwoa4970525ea5b0803efff0b36a0202062e1fd8a0bc187acbe156461";
import { z } from "zod";

export enum PayableUpdateRequestAcceptedPaymentMethods {
    Credit = "Credit",
    Ach = "ACH",
    Manual = "Manual",
}

export type PayableUpdateRequestClient = {};

export type PayableUpdateRequestMember = {};

export enum PaymentMethods {
    Credit = "Credit",
    Ach = "ACH",
    Manual = "Manual",
}

export enum PayableUpdateRequestStatus {
    Draft = "Draft",
    Open = "Open",
    Overdue = "Overdue",
    Cancelled = "Cancelled",
    Pending = "Pending",
    PaymentInTransit = "PaymentInTransit",
    Paid = "Paid",
}

export type PayableUpdateRequest = {
    acceptedPaymentMethods?: Array<PayableUpdateRequestAcceptedPaymentMethods> | null | undefined;
    attachments?:
        | ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2
        | null
        | undefined;
    chargedFees?: Fees | null | undefined;
    client?: PayableUpdateRequestClient | null | undefined;
    collaborators?: Array<InvoiceCollaboratorUpdateRequest> | null | undefined;
    creditFeeHandling?: FeeHandlingConfig | null | undefined;
    dueDate?: string | null | undefined;
    integration?:
        | ThreeBillionOneHundredAndNinetyMillionSixHundredAndEightyFiveThousandEightHundredAndThirtyTwoa4970525ea5b0803efff0b36a0202062e1fd8a0bc187acbe156461
        | null
        | undefined;
    invoiceNotes?: string | null | undefined;
    labels?: Record<string, string> | null | undefined;
    lateFeeHandling?: LateFeeConfigUpdate | null | undefined;
    lineItems?: Array<InvoiceLineItemsCreateRequest> | null | undefined;
    member?: PayableUpdateRequestMember | null | undefined;
    memberClientId?: string | null | undefined;
    metadata?: InvoiceMetadata | null | undefined;
    notificationPreferences?: InvoiceNotificationPreferences | null | undefined;
    paymentMethods?: Array<PaymentMethods> | null | undefined;
    status?: PayableUpdateRequestStatus | null | undefined;
};

/** @internal */
export const PayableUpdateRequestAcceptedPaymentMethods$ = z.nativeEnum(
    PayableUpdateRequestAcceptedPaymentMethods
);

/** @internal */
export namespace PayableUpdateRequestClient$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<PayableUpdateRequestClient, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PayableUpdateRequestClient> =
        z.object({});
}

/** @internal */
export namespace PayableUpdateRequestMember$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<PayableUpdateRequestMember, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PayableUpdateRequestMember> =
        z.object({});
}

/** @internal */
export const PaymentMethods$ = z.nativeEnum(PaymentMethods);

/** @internal */
export const PayableUpdateRequestStatus$ = z.nativeEnum(PayableUpdateRequestStatus);

/** @internal */
export namespace PayableUpdateRequest$ {
    export type Inbound = {
        acceptedPaymentMethods?:
            | Array<PayableUpdateRequestAcceptedPaymentMethods>
            | null
            | undefined;
        attachments?:
            | ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2$.Inbound
            | null
            | undefined;
        chargedFees?: Fees$.Inbound | null | undefined;
        client?: PayableUpdateRequestClient$.Inbound | null | undefined;
        collaborators?: Array<InvoiceCollaboratorUpdateRequest$.Inbound> | null | undefined;
        creditFeeHandling?: FeeHandlingConfig$.Inbound | null | undefined;
        dueDate?: string | null | undefined;
        integration?:
            | ThreeBillionOneHundredAndNinetyMillionSixHundredAndEightyFiveThousandEightHundredAndThirtyTwoa4970525ea5b0803efff0b36a0202062e1fd8a0bc187acbe156461$.Inbound
            | null
            | undefined;
        invoiceNotes?: string | null | undefined;
        labels?: Record<string, string> | null | undefined;
        lateFeeHandling?: LateFeeConfigUpdate$.Inbound | null | undefined;
        lineItems?: Array<InvoiceLineItemsCreateRequest$.Inbound> | null | undefined;
        member?: PayableUpdateRequestMember$.Inbound | null | undefined;
        memberClientId?: string | null | undefined;
        metadata?: InvoiceMetadata$.Inbound | null | undefined;
        notificationPreferences?: InvoiceNotificationPreferences$.Inbound | null | undefined;
        paymentMethods?: Array<PaymentMethods> | null | undefined;
        status?: PayableUpdateRequestStatus | null | undefined;
    };

    export const inboundSchema: z.ZodType<PayableUpdateRequest, z.ZodTypeDef, Inbound> = z
        .object({
            acceptedPaymentMethods: z
                .nullable(z.array(PayableUpdateRequestAcceptedPaymentMethods$))
                .optional(),
            attachments: z
                .nullable(
                    ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2$.inboundSchema
                )
                .optional(),
            chargedFees: z.nullable(Fees$.inboundSchema).optional(),
            client: z.nullable(z.lazy(() => PayableUpdateRequestClient$.inboundSchema)).optional(),
            collaborators: z
                .nullable(z.array(InvoiceCollaboratorUpdateRequest$.inboundSchema))
                .optional(),
            creditFeeHandling: z.nullable(FeeHandlingConfig$.inboundSchema).optional(),
            dueDate: z.nullable(z.string()).optional(),
            integration: z
                .nullable(
                    ThreeBillionOneHundredAndNinetyMillionSixHundredAndEightyFiveThousandEightHundredAndThirtyTwoa4970525ea5b0803efff0b36a0202062e1fd8a0bc187acbe156461$.inboundSchema
                )
                .optional(),
            invoiceNotes: z.nullable(z.string()).optional(),
            labels: z.nullable(z.record(z.string())).optional(),
            lateFeeHandling: z.nullable(LateFeeConfigUpdate$.inboundSchema).optional(),
            lineItems: z.nullable(z.array(InvoiceLineItemsCreateRequest$.inboundSchema)).optional(),
            member: z.nullable(z.lazy(() => PayableUpdateRequestMember$.inboundSchema)).optional(),
            memberClientId: z.nullable(z.string()).optional(),
            metadata: z.nullable(InvoiceMetadata$.inboundSchema).optional(),
            notificationPreferences: z
                .nullable(InvoiceNotificationPreferences$.inboundSchema)
                .optional(),
            paymentMethods: z.nullable(z.array(PaymentMethods$)).optional(),
            status: z.nullable(PayableUpdateRequestStatus$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.acceptedPaymentMethods === undefined
                    ? null
                    : { acceptedPaymentMethods: v.acceptedPaymentMethods }),
                ...(v.attachments === undefined ? null : { attachments: v.attachments }),
                ...(v.chargedFees === undefined ? null : { chargedFees: v.chargedFees }),
                ...(v.client === undefined ? null : { client: v.client }),
                ...(v.collaborators === undefined ? null : { collaborators: v.collaborators }),
                ...(v.creditFeeHandling === undefined
                    ? null
                    : { creditFeeHandling: v.creditFeeHandling }),
                ...(v.dueDate === undefined ? null : { dueDate: v.dueDate }),
                ...(v.integration === undefined ? null : { integration: v.integration }),
                ...(v.invoiceNotes === undefined ? null : { invoiceNotes: v.invoiceNotes }),
                ...(v.labels === undefined ? null : { labels: v.labels }),
                ...(v.lateFeeHandling === undefined
                    ? null
                    : { lateFeeHandling: v.lateFeeHandling }),
                ...(v.lineItems === undefined ? null : { lineItems: v.lineItems }),
                ...(v.member === undefined ? null : { member: v.member }),
                ...(v.memberClientId === undefined ? null : { memberClientId: v.memberClientId }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.notificationPreferences === undefined
                    ? null
                    : { notificationPreferences: v.notificationPreferences }),
                ...(v.paymentMethods === undefined ? null : { paymentMethods: v.paymentMethods }),
                ...(v.status === undefined ? null : { status: v.status }),
            };
        });

    export type Outbound = {
        acceptedPaymentMethods?:
            | Array<PayableUpdateRequestAcceptedPaymentMethods>
            | null
            | undefined;
        attachments?:
            | ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2$.Outbound
            | null
            | undefined;
        chargedFees?: Fees$.Outbound | null | undefined;
        client?: PayableUpdateRequestClient$.Outbound | null | undefined;
        collaborators?: Array<InvoiceCollaboratorUpdateRequest$.Outbound> | null | undefined;
        creditFeeHandling?: FeeHandlingConfig$.Outbound | null | undefined;
        dueDate?: string | null | undefined;
        integration?:
            | ThreeBillionOneHundredAndNinetyMillionSixHundredAndEightyFiveThousandEightHundredAndThirtyTwoa4970525ea5b0803efff0b36a0202062e1fd8a0bc187acbe156461$.Outbound
            | null
            | undefined;
        invoiceNotes?: string | null | undefined;
        labels?: Record<string, string> | null | undefined;
        lateFeeHandling?: LateFeeConfigUpdate$.Outbound | null | undefined;
        lineItems?: Array<InvoiceLineItemsCreateRequest$.Outbound> | null | undefined;
        member?: PayableUpdateRequestMember$.Outbound | null | undefined;
        memberClientId?: string | null | undefined;
        metadata?: InvoiceMetadata$.Outbound | null | undefined;
        notificationPreferences?: InvoiceNotificationPreferences$.Outbound | null | undefined;
        paymentMethods?: Array<PaymentMethods> | null | undefined;
        status?: PayableUpdateRequestStatus | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PayableUpdateRequest> = z
        .object({
            acceptedPaymentMethods: z
                .nullable(z.array(PayableUpdateRequestAcceptedPaymentMethods$))
                .optional(),
            attachments: z
                .nullable(
                    ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2$.outboundSchema
                )
                .optional(),
            chargedFees: z.nullable(Fees$.outboundSchema).optional(),
            client: z.nullable(z.lazy(() => PayableUpdateRequestClient$.outboundSchema)).optional(),
            collaborators: z
                .nullable(z.array(InvoiceCollaboratorUpdateRequest$.outboundSchema))
                .optional(),
            creditFeeHandling: z.nullable(FeeHandlingConfig$.outboundSchema).optional(),
            dueDate: z.nullable(z.string()).optional(),
            integration: z
                .nullable(
                    ThreeBillionOneHundredAndNinetyMillionSixHundredAndEightyFiveThousandEightHundredAndThirtyTwoa4970525ea5b0803efff0b36a0202062e1fd8a0bc187acbe156461$.outboundSchema
                )
                .optional(),
            invoiceNotes: z.nullable(z.string()).optional(),
            labels: z.nullable(z.record(z.string())).optional(),
            lateFeeHandling: z.nullable(LateFeeConfigUpdate$.outboundSchema).optional(),
            lineItems: z
                .nullable(z.array(InvoiceLineItemsCreateRequest$.outboundSchema))
                .optional(),
            member: z.nullable(z.lazy(() => PayableUpdateRequestMember$.outboundSchema)).optional(),
            memberClientId: z.nullable(z.string()).optional(),
            metadata: z.nullable(InvoiceMetadata$.outboundSchema).optional(),
            notificationPreferences: z
                .nullable(InvoiceNotificationPreferences$.outboundSchema)
                .optional(),
            paymentMethods: z.nullable(z.array(PaymentMethods$)).optional(),
            status: z.nullable(PayableUpdateRequestStatus$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.acceptedPaymentMethods === undefined
                    ? null
                    : { acceptedPaymentMethods: v.acceptedPaymentMethods }),
                ...(v.attachments === undefined ? null : { attachments: v.attachments }),
                ...(v.chargedFees === undefined ? null : { chargedFees: v.chargedFees }),
                ...(v.client === undefined ? null : { client: v.client }),
                ...(v.collaborators === undefined ? null : { collaborators: v.collaborators }),
                ...(v.creditFeeHandling === undefined
                    ? null
                    : { creditFeeHandling: v.creditFeeHandling }),
                ...(v.dueDate === undefined ? null : { dueDate: v.dueDate }),
                ...(v.integration === undefined ? null : { integration: v.integration }),
                ...(v.invoiceNotes === undefined ? null : { invoiceNotes: v.invoiceNotes }),
                ...(v.labels === undefined ? null : { labels: v.labels }),
                ...(v.lateFeeHandling === undefined
                    ? null
                    : { lateFeeHandling: v.lateFeeHandling }),
                ...(v.lineItems === undefined ? null : { lineItems: v.lineItems }),
                ...(v.member === undefined ? null : { member: v.member }),
                ...(v.memberClientId === undefined ? null : { memberClientId: v.memberClientId }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.notificationPreferences === undefined
                    ? null
                    : { notificationPreferences: v.notificationPreferences }),
                ...(v.paymentMethods === undefined ? null : { paymentMethods: v.paymentMethods }),
                ...(v.status === undefined ? null : { status: v.status }),
            };
        });
}
