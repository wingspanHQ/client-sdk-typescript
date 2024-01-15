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
import { InvoiceLineItem, InvoiceLineItem$ } from "./invoicelineitem";
import { InvoiceMetadata, InvoiceMetadata$ } from "./invoicemetadata";
import {
    InvoiceNotificationPreferences,
    InvoiceNotificationPreferences$,
} from "./invoicenotificationpreferences";
import { LateFeeConfig, LateFeeConfig$ } from "./latefeeconfig";
import { MemberOptions, MemberOptions$ } from "./memberoptions";
import { ScheduleDate, ScheduleDate$ } from "./scheduledate";
import {
    Sixb94b58d661f3eabc1444a7a43ac4b99580f0d050123b7bf38184e2f0d7bd66e,
    Sixb94b58d661f3eabc1444a7a43ac4b99580f0d050123b7bf38184e2f0d7bd66e$,
} from "./sixb94b58d661f3eabc1444a7a43ac4b99580f0d050123b7bf38184e2f0d7bd66e";
import { UserRoles, UserRoles$ } from "./userroles";
import { z } from "zod";

export enum PayableSchemaAcceptedPaymentMethods {
    Credit = "Credit",
    Ach = "ACH",
    Manual = "Manual",
    LessThanNilGreaterThan = "<nil>",
}

export enum PayableSchemaCurrency {
    Usd = "USD",
    Cad = "CAD",
}

export enum PayableSchemaStatus {
    Draft = "Draft",
    Open = "Open",
    Overdue = "Overdue",
    Cancelled = "Cancelled",
    Pending = "Pending",
    PaymentInTransit = "PaymentInTransit",
    Paid = "Paid",
}

export type PayableSchema = {
    acceptedPaymentMethods?: Array<PayableSchemaAcceptedPaymentMethods> | null | undefined;
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
    eventActors: Record<string, string>;
    events: InvoiceEvents;
    integration: Sixb94b58d661f3eabc1444a7a43ac4b99580f0d050123b7bf38184e2f0d7bd66e;
    internationalBankTransferInfo?: BankAccount | null | undefined;
    invoiceNotes: string;
    invoiceNumber: string;
    invoiceTemplateId: string;
    labels: Record<string, string>;
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
export const PayableSchemaAcceptedPaymentMethods$ = z.nativeEnum(
    PayableSchemaAcceptedPaymentMethods
);

/** @internal */
export const PayableSchemaCurrency$ = z.nativeEnum(PayableSchemaCurrency);

/** @internal */
export const PayableSchemaStatus$ = z.nativeEnum(PayableSchemaStatus);

/** @internal */
export namespace PayableSchema$ {
    export type Inbound = {
        acceptedPaymentMethods?: Array<PayableSchemaAcceptedPaymentMethods> | null | undefined;
        accountId?: string | null | undefined;
        amount: number;
        attachments: InvoiceAttachments$.Inbound;
        bankTransferInfo?: BankAccount$.Inbound | null | undefined;
        chargedFees?: Fees$.Inbound | null | undefined;
        client: ClientOptions$.Inbound;
        clientId: string;
        collaboratorId: string;
        createdAt: string;
        creditFeeHandling: FeeHandlingConfig$.Inbound;
        currency: PayableSchemaCurrency;
        dueDate: string;
        eventActors: Record<string, string>;
        events: InvoiceEvents$.Inbound;
        integration: Sixb94b58d661f3eabc1444a7a43ac4b99580f0d050123b7bf38184e2f0d7bd66e$.Inbound;
        internationalBankTransferInfo?: BankAccount$.Inbound | null | undefined;
        invoiceNotes: string;
        invoiceNumber: string;
        invoiceTemplateId: string;
        labels: Record<string, string>;
        lateFeeHandling: LateFeeConfig$.Inbound;
        lineItems: Array<InvoiceLineItem$.Inbound>;
        member: MemberOptions$.Inbound;
        memberAddress: Address$.Inbound;
        memberFormattedAddressLines?: Array<string> | null | undefined;
        memberId: string;
        metadata?: InvoiceMetadata$.Inbound | null | undefined;
        nextPayrollExecutionDate?: ScheduleDate$.Inbound | null | undefined;
        notificationPreferences: InvoiceNotificationPreferences$.Inbound;
        payableId: string;
        paymentMethodId?: string | null | undefined;
        sourceId?: string | null | undefined;
        status: PayableSchemaStatus;
        updatedAt: string;
        userRoles: UserRoles$.Inbound;
    };

    export const inboundSchema: z.ZodType<PayableSchema, z.ZodTypeDef, Inbound> = z
        .object({
            acceptedPaymentMethods: z
                .nullable(z.array(PayableSchemaAcceptedPaymentMethods$))
                .optional(),
            accountId: z.nullable(z.string()).optional(),
            amount: z.number(),
            attachments: InvoiceAttachments$.inboundSchema,
            bankTransferInfo: z.nullable(BankAccount$.inboundSchema).optional(),
            chargedFees: z.nullable(Fees$.inboundSchema).optional(),
            client: ClientOptions$.inboundSchema,
            clientId: z.string(),
            collaboratorId: z.string(),
            createdAt: z.string(),
            creditFeeHandling: FeeHandlingConfig$.inboundSchema,
            currency: PayableSchemaCurrency$,
            dueDate: z.string(),
            eventActors: z.record(z.string()),
            events: InvoiceEvents$.inboundSchema,
            integration:
                Sixb94b58d661f3eabc1444a7a43ac4b99580f0d050123b7bf38184e2f0d7bd66e$.inboundSchema,
            internationalBankTransferInfo: z.nullable(BankAccount$.inboundSchema).optional(),
            invoiceNotes: z.string(),
            invoiceNumber: z.string(),
            invoiceTemplateId: z.string(),
            labels: z.record(z.string()),
            lateFeeHandling: LateFeeConfig$.inboundSchema,
            lineItems: z.array(InvoiceLineItem$.inboundSchema),
            member: MemberOptions$.inboundSchema,
            memberAddress: Address$.inboundSchema,
            memberFormattedAddressLines: z.nullable(z.array(z.string())).optional(),
            memberId: z.string(),
            metadata: z.nullable(InvoiceMetadata$.inboundSchema).optional(),
            nextPayrollExecutionDate: z.nullable(ScheduleDate$.inboundSchema).optional(),
            notificationPreferences: InvoiceNotificationPreferences$.inboundSchema,
            payableId: z.string(),
            paymentMethodId: z.nullable(z.string()).optional(),
            sourceId: z.nullable(z.string()).optional(),
            status: PayableSchemaStatus$,
            updatedAt: z.string(),
            userRoles: UserRoles$.inboundSchema,
        })
        .transform((v) => {
            return {
                ...(v.acceptedPaymentMethods === undefined
                    ? null
                    : { acceptedPaymentMethods: v.acceptedPaymentMethods }),
                ...(v.accountId === undefined ? null : { accountId: v.accountId }),
                amount: v.amount,
                attachments: v.attachments,
                ...(v.bankTransferInfo === undefined
                    ? null
                    : { bankTransferInfo: v.bankTransferInfo }),
                ...(v.chargedFees === undefined ? null : { chargedFees: v.chargedFees }),
                client: v.client,
                clientId: v.clientId,
                collaboratorId: v.collaboratorId,
                createdAt: v.createdAt,
                creditFeeHandling: v.creditFeeHandling,
                currency: v.currency,
                dueDate: v.dueDate,
                eventActors: v.eventActors,
                events: v.events,
                integration: v.integration,
                ...(v.internationalBankTransferInfo === undefined
                    ? null
                    : { internationalBankTransferInfo: v.internationalBankTransferInfo }),
                invoiceNotes: v.invoiceNotes,
                invoiceNumber: v.invoiceNumber,
                invoiceTemplateId: v.invoiceTemplateId,
                labels: v.labels,
                lateFeeHandling: v.lateFeeHandling,
                lineItems: v.lineItems,
                member: v.member,
                memberAddress: v.memberAddress,
                ...(v.memberFormattedAddressLines === undefined
                    ? null
                    : { memberFormattedAddressLines: v.memberFormattedAddressLines }),
                memberId: v.memberId,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.nextPayrollExecutionDate === undefined
                    ? null
                    : { nextPayrollExecutionDate: v.nextPayrollExecutionDate }),
                notificationPreferences: v.notificationPreferences,
                payableId: v.payableId,
                ...(v.paymentMethodId === undefined
                    ? null
                    : { paymentMethodId: v.paymentMethodId }),
                ...(v.sourceId === undefined ? null : { sourceId: v.sourceId }),
                status: v.status,
                updatedAt: v.updatedAt,
                userRoles: v.userRoles,
            };
        });

    export type Outbound = {
        acceptedPaymentMethods?: Array<PayableSchemaAcceptedPaymentMethods> | null | undefined;
        accountId?: string | null | undefined;
        amount: number;
        attachments: InvoiceAttachments$.Outbound;
        bankTransferInfo?: BankAccount$.Outbound | null | undefined;
        chargedFees?: Fees$.Outbound | null | undefined;
        client: ClientOptions$.Outbound;
        clientId: string;
        collaboratorId: string;
        createdAt: string;
        creditFeeHandling: FeeHandlingConfig$.Outbound;
        currency: PayableSchemaCurrency;
        dueDate: string;
        eventActors: Record<string, string>;
        events: InvoiceEvents$.Outbound;
        integration: Sixb94b58d661f3eabc1444a7a43ac4b99580f0d050123b7bf38184e2f0d7bd66e$.Outbound;
        internationalBankTransferInfo?: BankAccount$.Outbound | null | undefined;
        invoiceNotes: string;
        invoiceNumber: string;
        invoiceTemplateId: string;
        labels: Record<string, string>;
        lateFeeHandling: LateFeeConfig$.Outbound;
        lineItems: Array<InvoiceLineItem$.Outbound>;
        member: MemberOptions$.Outbound;
        memberAddress: Address$.Outbound;
        memberFormattedAddressLines?: Array<string> | null | undefined;
        memberId: string;
        metadata?: InvoiceMetadata$.Outbound | null | undefined;
        nextPayrollExecutionDate?: ScheduleDate$.Outbound | null | undefined;
        notificationPreferences: InvoiceNotificationPreferences$.Outbound;
        payableId: string;
        paymentMethodId?: string | null | undefined;
        sourceId?: string | null | undefined;
        status: PayableSchemaStatus;
        updatedAt: string;
        userRoles: UserRoles$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PayableSchema> = z
        .object({
            acceptedPaymentMethods: z
                .nullable(z.array(PayableSchemaAcceptedPaymentMethods$))
                .optional(),
            accountId: z.nullable(z.string()).optional(),
            amount: z.number(),
            attachments: InvoiceAttachments$.outboundSchema,
            bankTransferInfo: z.nullable(BankAccount$.outboundSchema).optional(),
            chargedFees: z.nullable(Fees$.outboundSchema).optional(),
            client: ClientOptions$.outboundSchema,
            clientId: z.string(),
            collaboratorId: z.string(),
            createdAt: z.string(),
            creditFeeHandling: FeeHandlingConfig$.outboundSchema,
            currency: PayableSchemaCurrency$,
            dueDate: z.string(),
            eventActors: z.record(z.string()),
            events: InvoiceEvents$.outboundSchema,
            integration:
                Sixb94b58d661f3eabc1444a7a43ac4b99580f0d050123b7bf38184e2f0d7bd66e$.outboundSchema,
            internationalBankTransferInfo: z.nullable(BankAccount$.outboundSchema).optional(),
            invoiceNotes: z.string(),
            invoiceNumber: z.string(),
            invoiceTemplateId: z.string(),
            labels: z.record(z.string()),
            lateFeeHandling: LateFeeConfig$.outboundSchema,
            lineItems: z.array(InvoiceLineItem$.outboundSchema),
            member: MemberOptions$.outboundSchema,
            memberAddress: Address$.outboundSchema,
            memberFormattedAddressLines: z.nullable(z.array(z.string())).optional(),
            memberId: z.string(),
            metadata: z.nullable(InvoiceMetadata$.outboundSchema).optional(),
            nextPayrollExecutionDate: z.nullable(ScheduleDate$.outboundSchema).optional(),
            notificationPreferences: InvoiceNotificationPreferences$.outboundSchema,
            payableId: z.string(),
            paymentMethodId: z.nullable(z.string()).optional(),
            sourceId: z.nullable(z.string()).optional(),
            status: PayableSchemaStatus$,
            updatedAt: z.string(),
            userRoles: UserRoles$.outboundSchema,
        })
        .transform((v) => {
            return {
                ...(v.acceptedPaymentMethods === undefined
                    ? null
                    : { acceptedPaymentMethods: v.acceptedPaymentMethods }),
                ...(v.accountId === undefined ? null : { accountId: v.accountId }),
                amount: v.amount,
                attachments: v.attachments,
                ...(v.bankTransferInfo === undefined
                    ? null
                    : { bankTransferInfo: v.bankTransferInfo }),
                ...(v.chargedFees === undefined ? null : { chargedFees: v.chargedFees }),
                client: v.client,
                clientId: v.clientId,
                collaboratorId: v.collaboratorId,
                createdAt: v.createdAt,
                creditFeeHandling: v.creditFeeHandling,
                currency: v.currency,
                dueDate: v.dueDate,
                eventActors: v.eventActors,
                events: v.events,
                integration: v.integration,
                ...(v.internationalBankTransferInfo === undefined
                    ? null
                    : { internationalBankTransferInfo: v.internationalBankTransferInfo }),
                invoiceNotes: v.invoiceNotes,
                invoiceNumber: v.invoiceNumber,
                invoiceTemplateId: v.invoiceTemplateId,
                labels: v.labels,
                lateFeeHandling: v.lateFeeHandling,
                lineItems: v.lineItems,
                member: v.member,
                memberAddress: v.memberAddress,
                ...(v.memberFormattedAddressLines === undefined
                    ? null
                    : { memberFormattedAddressLines: v.memberFormattedAddressLines }),
                memberId: v.memberId,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.nextPayrollExecutionDate === undefined
                    ? null
                    : { nextPayrollExecutionDate: v.nextPayrollExecutionDate }),
                notificationPreferences: v.notificationPreferences,
                payableId: v.payableId,
                ...(v.paymentMethodId === undefined
                    ? null
                    : { paymentMethodId: v.paymentMethodId }),
                ...(v.sourceId === undefined ? null : { sourceId: v.sourceId }),
                status: v.status,
                updatedAt: v.updatedAt,
                userRoles: v.userRoles,
            };
        });
}
