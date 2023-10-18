/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FeeHandlingConfig } from "./feehandlingconfig";
import { Fees } from "./fees";
import { InvoiceCollaboratorUpdateRequest } from "./invoicecollaboratorupdaterequest";
import { InvoiceLineItemsCreateRequest } from "./invoicelineitemscreaterequest";
import { InvoiceMetadata } from "./invoicemetadata";
import { InvoiceNotificationPreferences } from "./invoicenotificationpreferences";
import { LateFeeConfigUpdate } from "./latefeeconfigupdate";
import { ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2 } from "./thirtysixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2";
import { ThreeBillionOneHundredAndNinetyMillionSixHundredAndEightyFiveThousandEightHundredAndThirtyTwoa4970525ea5b0803efff0b36a0202062e1fd8a0bc187acbe156461 } from "./threebilliononehundredandninetymillionsixhundredandeightyfivethousandeighthundredandthirtytwoa4970525ea5b0803efff0b36a0202062e1fd8a0bc187acbe156461";
import { Expose, Type } from "class-transformer";

export enum PayableUpdateRequestAcceptedPaymentMethods {
    Credit = "Credit",
    Ach = "ACH",
    Manual = "Manual",
}

export class PayableUpdateRequestClient extends SpeakeasyBase {}

export class PayableUpdateRequestMember extends SpeakeasyBase {}

export enum PayableUpdateRequestPaymentMethods {
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

export class PayableUpdateRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "acceptedPaymentMethods" })
    acceptedPaymentMethods?: PayableUpdateRequestAcceptedPaymentMethods[];

    @SpeakeasyMetadata()
    @Expose({ name: "attachments" })
    @Type(() => ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2)
    attachments?: ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2;

    @SpeakeasyMetadata()
    @Expose({ name: "chargedFees" })
    @Type(() => Fees)
    chargedFees?: Fees;

    @SpeakeasyMetadata()
    @Expose({ name: "client" })
    @Type(() => PayableUpdateRequestClient)
    client?: PayableUpdateRequestClient;

    @SpeakeasyMetadata({ elemType: InvoiceCollaboratorUpdateRequest })
    @Expose({ name: "collaborators" })
    @Type(() => InvoiceCollaboratorUpdateRequest)
    collaborators?: InvoiceCollaboratorUpdateRequest[];

    @SpeakeasyMetadata()
    @Expose({ name: "creditFeeHandling" })
    @Type(() => FeeHandlingConfig)
    creditFeeHandling?: FeeHandlingConfig;

    @SpeakeasyMetadata()
    @Expose({ name: "dueDate" })
    dueDate?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "integration" })
    @Type(
        () =>
            ThreeBillionOneHundredAndNinetyMillionSixHundredAndEightyFiveThousandEightHundredAndThirtyTwoa4970525ea5b0803efff0b36a0202062e1fd8a0bc187acbe156461
    )
    integration?: ThreeBillionOneHundredAndNinetyMillionSixHundredAndEightyFiveThousandEightHundredAndThirtyTwoa4970525ea5b0803efff0b36a0202062e1fd8a0bc187acbe156461;

    @SpeakeasyMetadata()
    @Expose({ name: "invoiceNotes" })
    invoiceNotes?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "labels" })
    labels?: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "lateFeeHandling" })
    @Type(() => LateFeeConfigUpdate)
    lateFeeHandling?: LateFeeConfigUpdate;

    @SpeakeasyMetadata({ elemType: InvoiceLineItemsCreateRequest })
    @Expose({ name: "lineItems" })
    @Type(() => InvoiceLineItemsCreateRequest)
    lineItems?: InvoiceLineItemsCreateRequest[];

    @SpeakeasyMetadata()
    @Expose({ name: "member" })
    @Type(() => PayableUpdateRequestMember)
    member?: PayableUpdateRequestMember;

    @SpeakeasyMetadata()
    @Expose({ name: "memberClientId" })
    memberClientId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => InvoiceMetadata)
    metadata?: InvoiceMetadata;

    @SpeakeasyMetadata()
    @Expose({ name: "notificationPreferences" })
    @Type(() => InvoiceNotificationPreferences)
    notificationPreferences?: InvoiceNotificationPreferences;

    @SpeakeasyMetadata()
    @Expose({ name: "paymentMethods" })
    paymentMethods?: PayableUpdateRequestPaymentMethods[];

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: PayableUpdateRequestStatus;
}