/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Address, Address$ } from "./address";
import { BankAccount, BankAccount$ } from "./bankaccount";
import { ClientOptions, ClientOptions$ } from "./clientoptions";
import { FeeHandlingConfig, FeeHandlingConfig$ } from "./feehandlingconfig";
import { Fees, Fees$ } from "./fees";
import { InvoiceAttachments, InvoiceAttachments$ } from "./invoiceattachments";
import { InvoiceEvents, InvoiceEvents$ } from "./invoiceevents";
import { InvoiceIntegrations, InvoiceIntegrations$ } from "./invoiceintegrations";
import { InvoiceLineItem, InvoiceLineItem$ } from "./invoicelineitem";
import { InvoiceMetadata, InvoiceMetadata$ } from "./invoicemetadata";
import { LateFeeConfig, LateFeeConfig$ } from "./latefeeconfig";
import { MemberClient, MemberClient$ } from "./memberclient";
import { MemberOptions, MemberOptions$ } from "./memberoptions";
import { PaymentInfo, PaymentInfo$ } from "./paymentinfo";
import { ProcessingFees, ProcessingFees$ } from "./processingfees";
import { z } from "zod";

export enum ClientInvoiceAcceptedPaymentMethods {
    Credit = "Credit",
    Ach = "ACH",
    Manual = "Manual",
}

export enum Currency {
    Usd = "USD",
    Cad = "CAD",
}

export enum ClientInvoiceStatus {
    Draft = "Draft",
    Open = "Open",
    Overdue = "Overdue",
    Cancelled = "Cancelled",
    Pending = "Pending",
    PaymentInTransit = "PaymentInTransit",
    Paid = "Paid",
}

export type ClientInvoice = {
    acceptedPaymentMethods?: Array<ClientInvoiceAcceptedPaymentMethods> | null | undefined;
    accountId?: string | null | undefined;
    additionalRecipientEmails: Array<string>;
    amount: number;
    attachments?: InvoiceAttachments | null | undefined;
    bankTransferInfo?: BankAccount | null | undefined;
    chargedFees?: Fees | null | undefined;
    client: ClientOptions;
    createdAt: string;
    creditFeeHandling?: FeeHandlingConfig | null | undefined;
    currency: Currency;
    dueDate: string;
    events: InvoiceEvents;
    integration?: InvoiceIntegrations | null | undefined;
    internationalBankTransferInfo?: BankAccount | null | undefined;
    invoiceId: string;
    invoiceNotes?: string | null | undefined;
    invoiceNumber: string;
    invoiceTemplateId?: string | null | undefined;
    lateFeeHandling?: LateFeeConfig | null | undefined;
    lineItems: Array<InvoiceLineItem>;
    member: MemberOptions;
    memberAcceptsPayments: boolean;
    memberAddress: Address;
    memberClient: MemberClient;
    memberCompany: string;
    memberEmail: string;
    memberFormattedAddressLines?: Array<string> | null | undefined;
    memberLogoUrl: string;
    memberName: string;
    memberPaymentsVersion: number;
    memberStripeAccountId: string;
    metadata?: InvoiceMetadata | null | undefined;
    paymentInfo?: PaymentInfo | null | undefined;
    paymentMethodId?: string | null | undefined;
    processingFees?: ProcessingFees | null | undefined;
    projectName: string;
    sourceId?: string | null | undefined;
    status: ClientInvoiceStatus;
    updatedAt: string;
};

/** @internal */
export const ClientInvoiceAcceptedPaymentMethods$ = z.nativeEnum(
    ClientInvoiceAcceptedPaymentMethods
);

/** @internal */
export const Currency$ = z.nativeEnum(Currency);

/** @internal */
export const ClientInvoiceStatus$ = z.nativeEnum(ClientInvoiceStatus);

/** @internal */
export namespace ClientInvoice$ {
    export type Inbound = {
        acceptedPaymentMethods?: Array<ClientInvoiceAcceptedPaymentMethods> | null | undefined;
        accountId?: string | null | undefined;
        additionalRecipientEmails: Array<string>;
        amount: number;
        attachments?: InvoiceAttachments$.Inbound | null | undefined;
        bankTransferInfo?: BankAccount$.Inbound | null | undefined;
        chargedFees?: Fees$.Inbound | null | undefined;
        client: ClientOptions$.Inbound;
        createdAt: string;
        creditFeeHandling?: FeeHandlingConfig$.Inbound | null | undefined;
        currency: Currency;
        dueDate: string;
        events: InvoiceEvents$.Inbound;
        integration?: InvoiceIntegrations$.Inbound | null | undefined;
        internationalBankTransferInfo?: BankAccount$.Inbound | null | undefined;
        invoiceId: string;
        invoiceNotes?: string | null | undefined;
        invoiceNumber: string;
        invoiceTemplateId?: string | null | undefined;
        lateFeeHandling?: LateFeeConfig$.Inbound | null | undefined;
        lineItems: Array<InvoiceLineItem$.Inbound>;
        member: MemberOptions$.Inbound;
        memberAcceptsPayments: boolean;
        memberAddress: Address$.Inbound;
        memberClient: MemberClient$.Inbound;
        memberCompany: string;
        memberEmail: string;
        memberFormattedAddressLines?: Array<string> | null | undefined;
        memberLogoUrl: string;
        memberName: string;
        memberPaymentsVersion: number;
        memberStripeAccountId: string;
        metadata?: InvoiceMetadata$.Inbound | null | undefined;
        paymentInfo?: PaymentInfo$.Inbound | null | undefined;
        paymentMethodId?: string | null | undefined;
        processingFees?: ProcessingFees$.Inbound | null | undefined;
        projectName: string;
        sourceId?: string | null | undefined;
        status: ClientInvoiceStatus;
        updatedAt: string;
    };

    export const inboundSchema: z.ZodType<ClientInvoice, z.ZodTypeDef, Inbound> = z
        .object({
            acceptedPaymentMethods: z
                .nullable(z.array(ClientInvoiceAcceptedPaymentMethods$))
                .optional(),
            accountId: z.nullable(z.string()).optional(),
            additionalRecipientEmails: z.array(z.string()),
            amount: z.number(),
            attachments: z.nullable(InvoiceAttachments$.inboundSchema).optional(),
            bankTransferInfo: z.nullable(BankAccount$.inboundSchema).optional(),
            chargedFees: z.nullable(Fees$.inboundSchema).optional(),
            client: ClientOptions$.inboundSchema,
            createdAt: z.string(),
            creditFeeHandling: z.nullable(FeeHandlingConfig$.inboundSchema).optional(),
            currency: Currency$,
            dueDate: z.string(),
            events: InvoiceEvents$.inboundSchema,
            integration: z.nullable(InvoiceIntegrations$.inboundSchema).optional(),
            internationalBankTransferInfo: z.nullable(BankAccount$.inboundSchema).optional(),
            invoiceId: z.string(),
            invoiceNotes: z.nullable(z.string()).optional(),
            invoiceNumber: z.string(),
            invoiceTemplateId: z.nullable(z.string()).optional(),
            lateFeeHandling: z.nullable(LateFeeConfig$.inboundSchema).optional(),
            lineItems: z.array(InvoiceLineItem$.inboundSchema),
            member: MemberOptions$.inboundSchema,
            memberAcceptsPayments: z.boolean(),
            memberAddress: Address$.inboundSchema,
            memberClient: MemberClient$.inboundSchema,
            memberCompany: z.string(),
            memberEmail: z.string(),
            memberFormattedAddressLines: z.nullable(z.array(z.string())).optional(),
            memberLogoUrl: z.string(),
            memberName: z.string(),
            memberPaymentsVersion: z.number(),
            memberStripeAccountId: z.string(),
            metadata: z.nullable(InvoiceMetadata$.inboundSchema).optional(),
            paymentInfo: z.nullable(PaymentInfo$.inboundSchema).optional(),
            paymentMethodId: z.nullable(z.string()).optional(),
            processingFees: z.nullable(ProcessingFees$.inboundSchema).optional(),
            projectName: z.string(),
            sourceId: z.nullable(z.string()).optional(),
            status: ClientInvoiceStatus$,
            updatedAt: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.acceptedPaymentMethods === undefined
                    ? null
                    : { acceptedPaymentMethods: v.acceptedPaymentMethods }),
                ...(v.accountId === undefined ? null : { accountId: v.accountId }),
                additionalRecipientEmails: v.additionalRecipientEmails,
                amount: v.amount,
                ...(v.attachments === undefined ? null : { attachments: v.attachments }),
                ...(v.bankTransferInfo === undefined
                    ? null
                    : { bankTransferInfo: v.bankTransferInfo }),
                ...(v.chargedFees === undefined ? null : { chargedFees: v.chargedFees }),
                client: v.client,
                createdAt: v.createdAt,
                ...(v.creditFeeHandling === undefined
                    ? null
                    : { creditFeeHandling: v.creditFeeHandling }),
                currency: v.currency,
                dueDate: v.dueDate,
                events: v.events,
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
                ...(v.lateFeeHandling === undefined
                    ? null
                    : { lateFeeHandling: v.lateFeeHandling }),
                lineItems: v.lineItems,
                member: v.member,
                memberAcceptsPayments: v.memberAcceptsPayments,
                memberAddress: v.memberAddress,
                memberClient: v.memberClient,
                memberCompany: v.memberCompany,
                memberEmail: v.memberEmail,
                ...(v.memberFormattedAddressLines === undefined
                    ? null
                    : { memberFormattedAddressLines: v.memberFormattedAddressLines }),
                memberLogoUrl: v.memberLogoUrl,
                memberName: v.memberName,
                memberPaymentsVersion: v.memberPaymentsVersion,
                memberStripeAccountId: v.memberStripeAccountId,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.paymentInfo === undefined ? null : { paymentInfo: v.paymentInfo }),
                ...(v.paymentMethodId === undefined
                    ? null
                    : { paymentMethodId: v.paymentMethodId }),
                ...(v.processingFees === undefined ? null : { processingFees: v.processingFees }),
                projectName: v.projectName,
                ...(v.sourceId === undefined ? null : { sourceId: v.sourceId }),
                status: v.status,
                updatedAt: v.updatedAt,
            };
        });

    export type Outbound = {
        acceptedPaymentMethods?: Array<ClientInvoiceAcceptedPaymentMethods> | null | undefined;
        accountId?: string | null | undefined;
        additionalRecipientEmails: Array<string>;
        amount: number;
        attachments?: InvoiceAttachments$.Outbound | null | undefined;
        bankTransferInfo?: BankAccount$.Outbound | null | undefined;
        chargedFees?: Fees$.Outbound | null | undefined;
        client: ClientOptions$.Outbound;
        createdAt: string;
        creditFeeHandling?: FeeHandlingConfig$.Outbound | null | undefined;
        currency: Currency;
        dueDate: string;
        events: InvoiceEvents$.Outbound;
        integration?: InvoiceIntegrations$.Outbound | null | undefined;
        internationalBankTransferInfo?: BankAccount$.Outbound | null | undefined;
        invoiceId: string;
        invoiceNotes?: string | null | undefined;
        invoiceNumber: string;
        invoiceTemplateId?: string | null | undefined;
        lateFeeHandling?: LateFeeConfig$.Outbound | null | undefined;
        lineItems: Array<InvoiceLineItem$.Outbound>;
        member: MemberOptions$.Outbound;
        memberAcceptsPayments: boolean;
        memberAddress: Address$.Outbound;
        memberClient: MemberClient$.Outbound;
        memberCompany: string;
        memberEmail: string;
        memberFormattedAddressLines?: Array<string> | null | undefined;
        memberLogoUrl: string;
        memberName: string;
        memberPaymentsVersion: number;
        memberStripeAccountId: string;
        metadata?: InvoiceMetadata$.Outbound | null | undefined;
        paymentInfo?: PaymentInfo$.Outbound | null | undefined;
        paymentMethodId?: string | null | undefined;
        processingFees?: ProcessingFees$.Outbound | null | undefined;
        projectName: string;
        sourceId?: string | null | undefined;
        status: ClientInvoiceStatus;
        updatedAt: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ClientInvoice> = z
        .object({
            acceptedPaymentMethods: z
                .nullable(z.array(ClientInvoiceAcceptedPaymentMethods$))
                .optional(),
            accountId: z.nullable(z.string()).optional(),
            additionalRecipientEmails: z.array(z.string()),
            amount: z.number(),
            attachments: z.nullable(InvoiceAttachments$.outboundSchema).optional(),
            bankTransferInfo: z.nullable(BankAccount$.outboundSchema).optional(),
            chargedFees: z.nullable(Fees$.outboundSchema).optional(),
            client: ClientOptions$.outboundSchema,
            createdAt: z.string(),
            creditFeeHandling: z.nullable(FeeHandlingConfig$.outboundSchema).optional(),
            currency: Currency$,
            dueDate: z.string(),
            events: InvoiceEvents$.outboundSchema,
            integration: z.nullable(InvoiceIntegrations$.outboundSchema).optional(),
            internationalBankTransferInfo: z.nullable(BankAccount$.outboundSchema).optional(),
            invoiceId: z.string(),
            invoiceNotes: z.nullable(z.string()).optional(),
            invoiceNumber: z.string(),
            invoiceTemplateId: z.nullable(z.string()).optional(),
            lateFeeHandling: z.nullable(LateFeeConfig$.outboundSchema).optional(),
            lineItems: z.array(InvoiceLineItem$.outboundSchema),
            member: MemberOptions$.outboundSchema,
            memberAcceptsPayments: z.boolean(),
            memberAddress: Address$.outboundSchema,
            memberClient: MemberClient$.outboundSchema,
            memberCompany: z.string(),
            memberEmail: z.string(),
            memberFormattedAddressLines: z.nullable(z.array(z.string())).optional(),
            memberLogoUrl: z.string(),
            memberName: z.string(),
            memberPaymentsVersion: z.number(),
            memberStripeAccountId: z.string(),
            metadata: z.nullable(InvoiceMetadata$.outboundSchema).optional(),
            paymentInfo: z.nullable(PaymentInfo$.outboundSchema).optional(),
            paymentMethodId: z.nullable(z.string()).optional(),
            processingFees: z.nullable(ProcessingFees$.outboundSchema).optional(),
            projectName: z.string(),
            sourceId: z.nullable(z.string()).optional(),
            status: ClientInvoiceStatus$,
            updatedAt: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.acceptedPaymentMethods === undefined
                    ? null
                    : { acceptedPaymentMethods: v.acceptedPaymentMethods }),
                ...(v.accountId === undefined ? null : { accountId: v.accountId }),
                additionalRecipientEmails: v.additionalRecipientEmails,
                amount: v.amount,
                ...(v.attachments === undefined ? null : { attachments: v.attachments }),
                ...(v.bankTransferInfo === undefined
                    ? null
                    : { bankTransferInfo: v.bankTransferInfo }),
                ...(v.chargedFees === undefined ? null : { chargedFees: v.chargedFees }),
                client: v.client,
                createdAt: v.createdAt,
                ...(v.creditFeeHandling === undefined
                    ? null
                    : { creditFeeHandling: v.creditFeeHandling }),
                currency: v.currency,
                dueDate: v.dueDate,
                events: v.events,
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
                ...(v.lateFeeHandling === undefined
                    ? null
                    : { lateFeeHandling: v.lateFeeHandling }),
                lineItems: v.lineItems,
                member: v.member,
                memberAcceptsPayments: v.memberAcceptsPayments,
                memberAddress: v.memberAddress,
                memberClient: v.memberClient,
                memberCompany: v.memberCompany,
                memberEmail: v.memberEmail,
                ...(v.memberFormattedAddressLines === undefined
                    ? null
                    : { memberFormattedAddressLines: v.memberFormattedAddressLines }),
                memberLogoUrl: v.memberLogoUrl,
                memberName: v.memberName,
                memberPaymentsVersion: v.memberPaymentsVersion,
                memberStripeAccountId: v.memberStripeAccountId,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.paymentInfo === undefined ? null : { paymentInfo: v.paymentInfo }),
                ...(v.paymentMethodId === undefined
                    ? null
                    : { paymentMethodId: v.paymentMethodId }),
                ...(v.processingFees === undefined ? null : { processingFees: v.processingFees }),
                projectName: v.projectName,
                ...(v.sourceId === undefined ? null : { sourceId: v.sourceId }),
                status: v.status,
                updatedAt: v.updatedAt,
            };
        });
}
