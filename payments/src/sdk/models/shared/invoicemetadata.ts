/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum InvoiceMetadataPayoutPendingReason {
    Admin = "Admin",
    PaymentNotClearedCard = "PaymentNotClearedCard",
    PaymentNotCleared = "PaymentNotCleared",
    PaymentNotClearedCollaborator = "PaymentNotClearedCollaborator",
    PaymentNotClearedFuture = "PaymentNotClearedFuture",
    PlatformErrorCard = "PlatformErrorCard",
    PlatformErrorGeneric = "PlatformErrorGeneric",
    PayoutNotEligibleYet = "PayoutNotEligibleYet",
    PayoutMethodNotSelected = "PayoutMethodNotSelected",
    PayoutMethodError = "PayoutMethodError",
    PlatformErrorGiftCard = "PlatformErrorGiftCard",
    PayoutGiftCardLinkPending = "PayoutGiftCardLinkPending",
    InstantPayoutMethodNotSelected = "InstantPayoutMethodNotSelected",
    PlatformErrorInstantPayout = "PlatformErrorInstantPayout",
    InstantPayoutNotEligibleYet = "InstantPayoutNotEligibleYet",
}

export enum InvoiceMetadataPendingStatusReason {
    CollaboratorMissingCustomEligibilityRequirement = "CollaboratorMissingCustomEligibilityRequirement",
    CollaboratorMissingEligibilityRequirement = "CollaboratorMissingEligibilityRequirement",
    MemberPayoutMethodNotSelected = "MemberPayoutMethodNotSelected",
    MemberTaxDocumentationNotVerified = "MemberTaxDocumentationNotVerified",
}

export class InvoiceMetadata extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "depositNote" })
    depositNote?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "invoiceDate" })
    invoiceDate?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "payoutPendingReason" })
    payoutPendingReason?: InvoiceMetadataPayoutPendingReason;

    @SpeakeasyMetadata()
    @Expose({ name: "pendingStatusReason" })
    pendingStatusReason?: InvoiceMetadataPendingStatusReason;

    @SpeakeasyMetadata()
    @Expose({ name: "purchaseOrderNumber" })
    purchaseOrderNumber?: string;
}
