/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Address, Address$ } from "./address";
import { BankAccount, BankAccount$ } from "./bankaccount";
import { ClientOptions, ClientOptions$ } from "./clientoptions";
import { ExternalIds, ExternalIds$ } from "./externalids";
import { FeeHandlingConfig, FeeHandlingConfig$ } from "./feehandlingconfig";
import { Fees, Fees$ } from "./fees";
import { InvoiceAmountDetails, InvoiceAmountDetails$ } from "./invoiceamountdetails";
import { InvoiceAppliedDeductions, InvoiceAppliedDeductions$ } from "./invoiceapplieddeductions";
import { InvoiceAttachments, InvoiceAttachments$ } from "./invoiceattachments";
import { InvoiceCollaborator, InvoiceCollaborator$ } from "./invoicecollaborator";
import { InvoiceEvents, InvoiceEvents$ } from "./invoiceevents";
import { InvoiceIntegrations, InvoiceIntegrations$ } from "./invoiceintegrations";
import { InvoiceLineItem, InvoiceLineItem$ } from "./invoicelineitem";
import { InvoiceMetadata, InvoiceMetadata$ } from "./invoicemetadata";
import {
    InvoiceNotificationPreferences,
    InvoiceNotificationPreferences$,
} from "./invoicenotificationpreferences";
import { InvoicePayment, InvoicePayment$ } from "./invoicepayment";
import { InvoicePayoutDestination, InvoicePayoutDestination$ } from "./invoicepayoutdestination";
import { InvoiceRefundDestination, InvoiceRefundDestination$ } from "./invoicerefunddestination";
import { InvoiceWithholdings, InvoiceWithholdings$ } from "./invoicewithholdings";
import { LateFeeConfig, LateFeeConfig$ } from "./latefeeconfig";
import { MemberOptions, MemberOptions$ } from "./memberoptions";
import { PaymentInfo, PaymentInfo$ } from "./paymentinfo";
import { ProcessingFees, ProcessingFees$ } from "./processingfees";
import { UserRoles, UserRoles$ } from "./userroles";
import { z } from "zod";

export enum InvoiceAcceptedPaymentMethods {
    Credit = "Credit",
    Ach = "ACH",
    Manual = "Manual",
}

export enum InvoiceCurrency {
    Usd = "USD",
    Cad = "CAD",
}

export enum InvoiceSchemasStatus {
    Draft = "Draft",
    Open = "Open",
    Overdue = "Overdue",
    Cancelled = "Cancelled",
    Pending = "Pending",
    PaymentInTransit = "PaymentInTransit",
    Paid = "Paid",
}

export type Invoice = {
    acceptedPaymentMethods?: Array<InvoiceAcceptedPaymentMethods> | null | undefined;
    accountId?: string | null | undefined;
    amount: number;
    amountDetails?: InvoiceAmountDetails | null | undefined;
    attachments?: InvoiceAttachments | null | undefined;
    bankTransferInfo?: BankAccount | null | undefined;
    chargedFees?: Fees | null | undefined;
    client: ClientOptions;
    clientId?: string | null | undefined;
    collaborators?: Array<InvoiceCollaborator> | null | undefined;
    createdAt: string;
    creditFeeHandling?: FeeHandlingConfig | null | undefined;
    currency: InvoiceCurrency;
    deductions?: Array<InvoiceAppliedDeductions> | null | undefined;
    dueDate: string;
    eventActors: Record<string, string>;
    events: InvoiceEvents;
    externalIds: ExternalIds;
    integration?: InvoiceIntegrations | null | undefined;
    internationalBankTransferInfo?: BankAccount | null | undefined;
    invoiceId: string;
    invoiceNotes?: string | null | undefined;
    invoiceNumber: string;
    invoiceTemplateId?: string | null | undefined;
    labels: Record<string, string>;
    lateFeeHandling?: LateFeeConfig | null | undefined;
    lineItems: Array<InvoiceLineItem>;
    member: MemberOptions;
    memberAddress: Address;
    memberClientId: string;
    memberFormattedAddressLines?: Array<string> | null | undefined;
    memberId: string;
    metadata?: InvoiceMetadata | null | undefined;
    notificationPreferences?: InvoiceNotificationPreferences | null | undefined;
    parentInvoiceId?: string | null | undefined;
    paymentInfo?: PaymentInfo | null | undefined;
    paymentMethodId?: string | null | undefined;
    payments: Array<InvoicePayment>;
    payoutDestinations?: Array<InvoicePayoutDestination> | null | undefined;
    processingFees?: ProcessingFees | null | undefined;
    refundDestinations?: Array<InvoiceRefundDestination> | null | undefined;
    sourceId?: string | null | undefined;
    status: InvoiceSchemasStatus;
    updatedAt: string;
    userRoles: UserRoles;
    withholdings?: InvoiceWithholdings | null | undefined;
};

/** @internal */
export const InvoiceAcceptedPaymentMethods$ = z.nativeEnum(InvoiceAcceptedPaymentMethods);

/** @internal */
export const InvoiceCurrency$ = z.nativeEnum(InvoiceCurrency);

/** @internal */
export const InvoiceSchemasStatus$ = z.nativeEnum(InvoiceSchemasStatus);

/** @internal */
export namespace Invoice$ {
    export type Inbound = {
        acceptedPaymentMethods?: Array<InvoiceAcceptedPaymentMethods> | null | undefined;
        accountId?: string | null | undefined;
        amount: number;
        amountDetails?: InvoiceAmountDetails$.Inbound | null | undefined;
        attachments?: InvoiceAttachments$.Inbound | null | undefined;
        bankTransferInfo?: BankAccount$.Inbound | null | undefined;
        chargedFees?: Fees$.Inbound | null | undefined;
        client: ClientOptions$.Inbound;
        clientId?: string | null | undefined;
        collaborators?: Array<InvoiceCollaborator$.Inbound> | null | undefined;
        createdAt: string;
        creditFeeHandling?: FeeHandlingConfig$.Inbound | null | undefined;
        currency: InvoiceCurrency;
        deductions?: Array<InvoiceAppliedDeductions$.Inbound> | null | undefined;
        dueDate: string;
        eventActors: Record<string, string>;
        events: InvoiceEvents$.Inbound;
        externalIds: ExternalIds$.Inbound;
        integration?: InvoiceIntegrations$.Inbound | null | undefined;
        internationalBankTransferInfo?: BankAccount$.Inbound | null | undefined;
        invoiceId: string;
        invoiceNotes?: string | null | undefined;
        invoiceNumber: string;
        invoiceTemplateId?: string | null | undefined;
        labels: Record<string, string>;
        lateFeeHandling?: LateFeeConfig$.Inbound | null | undefined;
        lineItems: Array<InvoiceLineItem$.Inbound>;
        member: MemberOptions$.Inbound;
        memberAddress: Address$.Inbound;
        memberClientId: string;
        memberFormattedAddressLines?: Array<string> | null | undefined;
        memberId: string;
        metadata?: InvoiceMetadata$.Inbound | null | undefined;
        notificationPreferences?: InvoiceNotificationPreferences$.Inbound | null | undefined;
        parentInvoiceId?: string | null | undefined;
        paymentInfo?: PaymentInfo$.Inbound | null | undefined;
        paymentMethodId?: string | null | undefined;
        payments: Array<InvoicePayment$.Inbound>;
        payoutDestinations?: Array<InvoicePayoutDestination$.Inbound> | null | undefined;
        processingFees?: ProcessingFees$.Inbound | null | undefined;
        refundDestinations?: Array<InvoiceRefundDestination$.Inbound> | null | undefined;
        sourceId?: string | null | undefined;
        status: InvoiceSchemasStatus;
        updatedAt: string;
        userRoles: UserRoles$.Inbound;
        withholdings?: InvoiceWithholdings$.Inbound | null | undefined;
    };

    export const inboundSchema: z.ZodType<Invoice, z.ZodTypeDef, Inbound> = z
        .object({
            acceptedPaymentMethods: z.nullable(z.array(InvoiceAcceptedPaymentMethods$)).optional(),
            accountId: z.nullable(z.string()).optional(),
            amount: z.number(),
            amountDetails: z.nullable(InvoiceAmountDetails$.inboundSchema).optional(),
            attachments: z.nullable(InvoiceAttachments$.inboundSchema).optional(),
            bankTransferInfo: z.nullable(BankAccount$.inboundSchema).optional(),
            chargedFees: z.nullable(Fees$.inboundSchema).optional(),
            client: ClientOptions$.inboundSchema,
            clientId: z.nullable(z.string()).optional(),
            collaborators: z.nullable(z.array(InvoiceCollaborator$.inboundSchema)).optional(),
            createdAt: z.string(),
            creditFeeHandling: z.nullable(FeeHandlingConfig$.inboundSchema).optional(),
            currency: InvoiceCurrency$,
            deductions: z.nullable(z.array(InvoiceAppliedDeductions$.inboundSchema)).optional(),
            dueDate: z.string(),
            eventActors: z.record(z.string()),
            events: InvoiceEvents$.inboundSchema,
            externalIds: ExternalIds$.inboundSchema,
            integration: z.nullable(InvoiceIntegrations$.inboundSchema).optional(),
            internationalBankTransferInfo: z.nullable(BankAccount$.inboundSchema).optional(),
            invoiceId: z.string(),
            invoiceNotes: z.nullable(z.string()).optional(),
            invoiceNumber: z.string(),
            invoiceTemplateId: z.nullable(z.string()).optional(),
            labels: z.record(z.string()),
            lateFeeHandling: z.nullable(LateFeeConfig$.inboundSchema).optional(),
            lineItems: z.array(InvoiceLineItem$.inboundSchema),
            member: MemberOptions$.inboundSchema,
            memberAddress: Address$.inboundSchema,
            memberClientId: z.string(),
            memberFormattedAddressLines: z.nullable(z.array(z.string())).optional(),
            memberId: z.string(),
            metadata: z.nullable(InvoiceMetadata$.inboundSchema).optional(),
            notificationPreferences: z
                .nullable(InvoiceNotificationPreferences$.inboundSchema)
                .optional(),
            parentInvoiceId: z.nullable(z.string()).optional(),
            paymentInfo: z.nullable(PaymentInfo$.inboundSchema).optional(),
            paymentMethodId: z.nullable(z.string()).optional(),
            payments: z.array(InvoicePayment$.inboundSchema),
            payoutDestinations: z
                .nullable(z.array(InvoicePayoutDestination$.inboundSchema))
                .optional(),
            processingFees: z.nullable(ProcessingFees$.inboundSchema).optional(),
            refundDestinations: z
                .nullable(z.array(InvoiceRefundDestination$.inboundSchema))
                .optional(),
            sourceId: z.nullable(z.string()).optional(),
            status: InvoiceSchemasStatus$,
            updatedAt: z.string(),
            userRoles: UserRoles$.inboundSchema,
            withholdings: z.nullable(InvoiceWithholdings$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.acceptedPaymentMethods === undefined
                    ? null
                    : { acceptedPaymentMethods: v.acceptedPaymentMethods }),
                ...(v.accountId === undefined ? null : { accountId: v.accountId }),
                amount: v.amount,
                ...(v.amountDetails === undefined ? null : { amountDetails: v.amountDetails }),
                ...(v.attachments === undefined ? null : { attachments: v.attachments }),
                ...(v.bankTransferInfo === undefined
                    ? null
                    : { bankTransferInfo: v.bankTransferInfo }),
                ...(v.chargedFees === undefined ? null : { chargedFees: v.chargedFees }),
                client: v.client,
                ...(v.clientId === undefined ? null : { clientId: v.clientId }),
                ...(v.collaborators === undefined ? null : { collaborators: v.collaborators }),
                createdAt: v.createdAt,
                ...(v.creditFeeHandling === undefined
                    ? null
                    : { creditFeeHandling: v.creditFeeHandling }),
                currency: v.currency,
                ...(v.deductions === undefined ? null : { deductions: v.deductions }),
                dueDate: v.dueDate,
                eventActors: v.eventActors,
                events: v.events,
                externalIds: v.externalIds,
                ...(v.integration === undefined ? null : { integration: v.integration }),
                ...(v.internationalBankTransferInfo === undefined
                    ? null
                    : { internationalBankTransferInfo: v.internationalBankTransferInfo }),
                invoiceId: v.invoiceId,
                ...(v.invoiceNotes === undefined ? null : { invoiceNotes: v.invoiceNotes }),
                invoiceNumber: v.invoiceNumber,
                ...(v.invoiceTemplateId === undefined
                    ? null
                    : { invoiceTemplateId: v.invoiceTemplateId }),
                labels: v.labels,
                ...(v.lateFeeHandling === undefined
                    ? null
                    : { lateFeeHandling: v.lateFeeHandling }),
                lineItems: v.lineItems,
                member: v.member,
                memberAddress: v.memberAddress,
                memberClientId: v.memberClientId,
                ...(v.memberFormattedAddressLines === undefined
                    ? null
                    : { memberFormattedAddressLines: v.memberFormattedAddressLines }),
                memberId: v.memberId,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.notificationPreferences === undefined
                    ? null
                    : { notificationPreferences: v.notificationPreferences }),
                ...(v.parentInvoiceId === undefined
                    ? null
                    : { parentInvoiceId: v.parentInvoiceId }),
                ...(v.paymentInfo === undefined ? null : { paymentInfo: v.paymentInfo }),
                ...(v.paymentMethodId === undefined
                    ? null
                    : { paymentMethodId: v.paymentMethodId }),
                payments: v.payments,
                ...(v.payoutDestinations === undefined
                    ? null
                    : { payoutDestinations: v.payoutDestinations }),
                ...(v.processingFees === undefined ? null : { processingFees: v.processingFees }),
                ...(v.refundDestinations === undefined
                    ? null
                    : { refundDestinations: v.refundDestinations }),
                ...(v.sourceId === undefined ? null : { sourceId: v.sourceId }),
                status: v.status,
                updatedAt: v.updatedAt,
                userRoles: v.userRoles,
                ...(v.withholdings === undefined ? null : { withholdings: v.withholdings }),
            };
        });

    export type Outbound = {
        acceptedPaymentMethods?: Array<InvoiceAcceptedPaymentMethods> | null | undefined;
        accountId?: string | null | undefined;
        amount: number;
        amountDetails?: InvoiceAmountDetails$.Outbound | null | undefined;
        attachments?: InvoiceAttachments$.Outbound | null | undefined;
        bankTransferInfo?: BankAccount$.Outbound | null | undefined;
        chargedFees?: Fees$.Outbound | null | undefined;
        client: ClientOptions$.Outbound;
        clientId?: string | null | undefined;
        collaborators?: Array<InvoiceCollaborator$.Outbound> | null | undefined;
        createdAt: string;
        creditFeeHandling?: FeeHandlingConfig$.Outbound | null | undefined;
        currency: InvoiceCurrency;
        deductions?: Array<InvoiceAppliedDeductions$.Outbound> | null | undefined;
        dueDate: string;
        eventActors: Record<string, string>;
        events: InvoiceEvents$.Outbound;
        externalIds: ExternalIds$.Outbound;
        integration?: InvoiceIntegrations$.Outbound | null | undefined;
        internationalBankTransferInfo?: BankAccount$.Outbound | null | undefined;
        invoiceId: string;
        invoiceNotes?: string | null | undefined;
        invoiceNumber: string;
        invoiceTemplateId?: string | null | undefined;
        labels: Record<string, string>;
        lateFeeHandling?: LateFeeConfig$.Outbound | null | undefined;
        lineItems: Array<InvoiceLineItem$.Outbound>;
        member: MemberOptions$.Outbound;
        memberAddress: Address$.Outbound;
        memberClientId: string;
        memberFormattedAddressLines?: Array<string> | null | undefined;
        memberId: string;
        metadata?: InvoiceMetadata$.Outbound | null | undefined;
        notificationPreferences?: InvoiceNotificationPreferences$.Outbound | null | undefined;
        parentInvoiceId?: string | null | undefined;
        paymentInfo?: PaymentInfo$.Outbound | null | undefined;
        paymentMethodId?: string | null | undefined;
        payments: Array<InvoicePayment$.Outbound>;
        payoutDestinations?: Array<InvoicePayoutDestination$.Outbound> | null | undefined;
        processingFees?: ProcessingFees$.Outbound | null | undefined;
        refundDestinations?: Array<InvoiceRefundDestination$.Outbound> | null | undefined;
        sourceId?: string | null | undefined;
        status: InvoiceSchemasStatus;
        updatedAt: string;
        userRoles: UserRoles$.Outbound;
        withholdings?: InvoiceWithholdings$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Invoice> = z
        .object({
            acceptedPaymentMethods: z.nullable(z.array(InvoiceAcceptedPaymentMethods$)).optional(),
            accountId: z.nullable(z.string()).optional(),
            amount: z.number(),
            amountDetails: z.nullable(InvoiceAmountDetails$.outboundSchema).optional(),
            attachments: z.nullable(InvoiceAttachments$.outboundSchema).optional(),
            bankTransferInfo: z.nullable(BankAccount$.outboundSchema).optional(),
            chargedFees: z.nullable(Fees$.outboundSchema).optional(),
            client: ClientOptions$.outboundSchema,
            clientId: z.nullable(z.string()).optional(),
            collaborators: z.nullable(z.array(InvoiceCollaborator$.outboundSchema)).optional(),
            createdAt: z.string(),
            creditFeeHandling: z.nullable(FeeHandlingConfig$.outboundSchema).optional(),
            currency: InvoiceCurrency$,
            deductions: z.nullable(z.array(InvoiceAppliedDeductions$.outboundSchema)).optional(),
            dueDate: z.string(),
            eventActors: z.record(z.string()),
            events: InvoiceEvents$.outboundSchema,
            externalIds: ExternalIds$.outboundSchema,
            integration: z.nullable(InvoiceIntegrations$.outboundSchema).optional(),
            internationalBankTransferInfo: z.nullable(BankAccount$.outboundSchema).optional(),
            invoiceId: z.string(),
            invoiceNotes: z.nullable(z.string()).optional(),
            invoiceNumber: z.string(),
            invoiceTemplateId: z.nullable(z.string()).optional(),
            labels: z.record(z.string()),
            lateFeeHandling: z.nullable(LateFeeConfig$.outboundSchema).optional(),
            lineItems: z.array(InvoiceLineItem$.outboundSchema),
            member: MemberOptions$.outboundSchema,
            memberAddress: Address$.outboundSchema,
            memberClientId: z.string(),
            memberFormattedAddressLines: z.nullable(z.array(z.string())).optional(),
            memberId: z.string(),
            metadata: z.nullable(InvoiceMetadata$.outboundSchema).optional(),
            notificationPreferences: z
                .nullable(InvoiceNotificationPreferences$.outboundSchema)
                .optional(),
            parentInvoiceId: z.nullable(z.string()).optional(),
            paymentInfo: z.nullable(PaymentInfo$.outboundSchema).optional(),
            paymentMethodId: z.nullable(z.string()).optional(),
            payments: z.array(InvoicePayment$.outboundSchema),
            payoutDestinations: z
                .nullable(z.array(InvoicePayoutDestination$.outboundSchema))
                .optional(),
            processingFees: z.nullable(ProcessingFees$.outboundSchema).optional(),
            refundDestinations: z
                .nullable(z.array(InvoiceRefundDestination$.outboundSchema))
                .optional(),
            sourceId: z.nullable(z.string()).optional(),
            status: InvoiceSchemasStatus$,
            updatedAt: z.string(),
            userRoles: UserRoles$.outboundSchema,
            withholdings: z.nullable(InvoiceWithholdings$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.acceptedPaymentMethods === undefined
                    ? null
                    : { acceptedPaymentMethods: v.acceptedPaymentMethods }),
                ...(v.accountId === undefined ? null : { accountId: v.accountId }),
                amount: v.amount,
                ...(v.amountDetails === undefined ? null : { amountDetails: v.amountDetails }),
                ...(v.attachments === undefined ? null : { attachments: v.attachments }),
                ...(v.bankTransferInfo === undefined
                    ? null
                    : { bankTransferInfo: v.bankTransferInfo }),
                ...(v.chargedFees === undefined ? null : { chargedFees: v.chargedFees }),
                client: v.client,
                ...(v.clientId === undefined ? null : { clientId: v.clientId }),
                ...(v.collaborators === undefined ? null : { collaborators: v.collaborators }),
                createdAt: v.createdAt,
                ...(v.creditFeeHandling === undefined
                    ? null
                    : { creditFeeHandling: v.creditFeeHandling }),
                currency: v.currency,
                ...(v.deductions === undefined ? null : { deductions: v.deductions }),
                dueDate: v.dueDate,
                eventActors: v.eventActors,
                events: v.events,
                externalIds: v.externalIds,
                ...(v.integration === undefined ? null : { integration: v.integration }),
                ...(v.internationalBankTransferInfo === undefined
                    ? null
                    : { internationalBankTransferInfo: v.internationalBankTransferInfo }),
                invoiceId: v.invoiceId,
                ...(v.invoiceNotes === undefined ? null : { invoiceNotes: v.invoiceNotes }),
                invoiceNumber: v.invoiceNumber,
                ...(v.invoiceTemplateId === undefined
                    ? null
                    : { invoiceTemplateId: v.invoiceTemplateId }),
                labels: v.labels,
                ...(v.lateFeeHandling === undefined
                    ? null
                    : { lateFeeHandling: v.lateFeeHandling }),
                lineItems: v.lineItems,
                member: v.member,
                memberAddress: v.memberAddress,
                memberClientId: v.memberClientId,
                ...(v.memberFormattedAddressLines === undefined
                    ? null
                    : { memberFormattedAddressLines: v.memberFormattedAddressLines }),
                memberId: v.memberId,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.notificationPreferences === undefined
                    ? null
                    : { notificationPreferences: v.notificationPreferences }),
                ...(v.parentInvoiceId === undefined
                    ? null
                    : { parentInvoiceId: v.parentInvoiceId }),
                ...(v.paymentInfo === undefined ? null : { paymentInfo: v.paymentInfo }),
                ...(v.paymentMethodId === undefined
                    ? null
                    : { paymentMethodId: v.paymentMethodId }),
                payments: v.payments,
                ...(v.payoutDestinations === undefined
                    ? null
                    : { payoutDestinations: v.payoutDestinations }),
                ...(v.processingFees === undefined ? null : { processingFees: v.processingFees }),
                ...(v.refundDestinations === undefined
                    ? null
                    : { refundDestinations: v.refundDestinations }),
                ...(v.sourceId === undefined ? null : { sourceId: v.sourceId }),
                status: v.status,
                updatedAt: v.updatedAt,
                userRoles: v.userRoles,
                ...(v.withholdings === undefined ? null : { withholdings: v.withholdings }),
            };
        });
}
