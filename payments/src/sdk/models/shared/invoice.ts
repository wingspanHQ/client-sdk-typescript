/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Address } from "./address";
import { BankAccount } from "./bankaccount";
import { ClientOptions } from "./clientoptions";
import { ExternalIds } from "./externalids";
import { FeeHandlingConfig } from "./feehandlingconfig";
import { Fees } from "./fees";
import { InvoiceAmountDetails } from "./invoiceamountdetails";
import { InvoiceAppliedDeductions } from "./invoiceapplieddeductions";
import { InvoiceAttachments } from "./invoiceattachments";
import { InvoiceCollaborator } from "./invoicecollaborator";
import { InvoiceEvents } from "./invoiceevents";
import { InvoiceIntegrations } from "./invoiceintegrations";
import { InvoiceLineItem } from "./invoicelineitem";
import { InvoiceMetadata } from "./invoicemetadata";
import { InvoiceNotificationPreferences } from "./invoicenotificationpreferences";
import { InvoicePayment } from "./invoicepayment";
import { InvoicePayoutDestination } from "./invoicepayoutdestination";
import { InvoiceRefundDestination } from "./invoicerefunddestination";
import { InvoiceWithholdings } from "./invoicewithholdings";
import { LateFeeConfig } from "./latefeeconfig";
import { MemberOptions } from "./memberoptions";
import { PaymentInfo } from "./paymentinfo";
import { ProcessingFees } from "./processingfees";
import { UserRoles } from "./userroles";
import { Expose, Type } from "class-transformer";

export enum InvoiceAcceptedPaymentMethods {
    Credit = "Credit",
    Ach = "ACH",
    Manual = "Manual",
    LessThanNilGreaterThan = "<nil>",
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

export class Invoice extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "acceptedPaymentMethods" })
    acceptedPaymentMethods?: InvoiceAcceptedPaymentMethods[];

    @SpeakeasyMetadata()
    @Expose({ name: "accountId" })
    accountId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "amountDetails" })
    @Type(() => InvoiceAmountDetails)
    amountDetails?: InvoiceAmountDetails;

    @SpeakeasyMetadata()
    @Expose({ name: "attachments" })
    @Type(() => InvoiceAttachments)
    attachments?: InvoiceAttachments;

    @SpeakeasyMetadata()
    @Expose({ name: "bankTransferInfo" })
    @Type(() => BankAccount)
    bankTransferInfo?: BankAccount;

    @SpeakeasyMetadata()
    @Expose({ name: "chargedFees" })
    @Type(() => Fees)
    chargedFees?: Fees;

    @SpeakeasyMetadata()
    @Expose({ name: "client" })
    @Type(() => ClientOptions)
    client: ClientOptions;

    @SpeakeasyMetadata()
    @Expose({ name: "clientId" })
    clientId?: string;

    @SpeakeasyMetadata({ elemType: InvoiceCollaborator })
    @Expose({ name: "collaborators" })
    @Type(() => InvoiceCollaborator)
    collaborators?: InvoiceCollaborator[];

    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    createdAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "creditFeeHandling" })
    @Type(() => FeeHandlingConfig)
    creditFeeHandling?: FeeHandlingConfig;

    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency: InvoiceCurrency;

    @SpeakeasyMetadata({ elemType: InvoiceAppliedDeductions })
    @Expose({ name: "deductions" })
    @Type(() => InvoiceAppliedDeductions)
    deductions?: InvoiceAppliedDeductions[];

    @SpeakeasyMetadata()
    @Expose({ name: "dueDate" })
    dueDate: string;

    @SpeakeasyMetadata()
    @Expose({ name: "eventActors" })
    eventActors: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "events" })
    @Type(() => InvoiceEvents)
    events: InvoiceEvents;

    @SpeakeasyMetadata()
    @Expose({ name: "externalIds" })
    @Type(() => ExternalIds)
    externalIds: ExternalIds;

    @SpeakeasyMetadata()
    @Expose({ name: "integration" })
    @Type(() => InvoiceIntegrations)
    integration?: InvoiceIntegrations;

    @SpeakeasyMetadata()
    @Expose({ name: "internationalBankTransferInfo" })
    @Type(() => BankAccount)
    internationalBankTransferInfo?: BankAccount;

    @SpeakeasyMetadata()
    @Expose({ name: "invoiceId" })
    invoiceId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "invoiceNotes" })
    invoiceNotes?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "invoiceNumber" })
    invoiceNumber: string;

    @SpeakeasyMetadata()
    @Expose({ name: "invoiceTemplateId" })
    invoiceTemplateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "labels" })
    labels: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "lateFeeHandling" })
    @Type(() => LateFeeConfig)
    lateFeeHandling?: LateFeeConfig;

    @SpeakeasyMetadata({ elemType: InvoiceLineItem })
    @Expose({ name: "lineItems" })
    @Type(() => InvoiceLineItem)
    lineItems: InvoiceLineItem[];

    @SpeakeasyMetadata()
    @Expose({ name: "member" })
    @Type(() => MemberOptions)
    member: MemberOptions;

    @SpeakeasyMetadata()
    @Expose({ name: "memberAddress" })
    @Type(() => Address)
    memberAddress: Address;

    @SpeakeasyMetadata()
    @Expose({ name: "memberClientId" })
    memberClientId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "memberFormattedAddressLines" })
    memberFormattedAddressLines?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "memberId" })
    memberId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => InvoiceMetadata)
    metadata?: InvoiceMetadata;

    @SpeakeasyMetadata()
    @Expose({ name: "notificationPreferences" })
    @Type(() => InvoiceNotificationPreferences)
    notificationPreferences?: InvoiceNotificationPreferences;

    @SpeakeasyMetadata()
    @Expose({ name: "parentInvoiceId" })
    parentInvoiceId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "paymentInfo" })
    @Type(() => PaymentInfo)
    paymentInfo?: PaymentInfo;

    @SpeakeasyMetadata()
    @Expose({ name: "paymentMethodId" })
    paymentMethodId?: string;

    @SpeakeasyMetadata({ elemType: InvoicePayment })
    @Expose({ name: "payments" })
    @Type(() => InvoicePayment)
    payments: InvoicePayment[];

    @SpeakeasyMetadata({ elemType: InvoicePayoutDestination })
    @Expose({ name: "payoutDestinations" })
    @Type(() => InvoicePayoutDestination)
    payoutDestinations?: InvoicePayoutDestination[];

    @SpeakeasyMetadata()
    @Expose({ name: "processingFees" })
    @Type(() => ProcessingFees)
    processingFees?: ProcessingFees;

    @SpeakeasyMetadata({ elemType: InvoiceRefundDestination })
    @Expose({ name: "refundDestinations" })
    @Type(() => InvoiceRefundDestination)
    refundDestinations?: InvoiceRefundDestination[];

    @SpeakeasyMetadata()
    @Expose({ name: "sourceId" })
    sourceId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: InvoiceSchemasStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "updatedAt" })
    updatedAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "userRoles" })
    @Type(() => UserRoles)
    userRoles: UserRoles;

    @SpeakeasyMetadata()
    @Expose({ name: "withholdings" })
    @Type(() => InvoiceWithholdings)
    withholdings?: InvoiceWithholdings;
}
