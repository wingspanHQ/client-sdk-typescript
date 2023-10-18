/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum ActivityEventsAgreeToClientTermsToDoStatus {
    ToDo = "ToDo",
    InProgress = "InProgress",
    Completed = "Completed",
    LessThanNilGreaterThan = "<nil>",
}

export enum ActivityEventsFindFirstDeductibleExpenseToDoStatus {
    ToDo = "ToDo",
    InProgress = "InProgress",
    Completed = "Completed",
    LessThanNilGreaterThan = "<nil>",
}

export enum ActivityEventsKnowingCompanyStructureToDoStatus {
    ToDo = "ToDo",
    InProgress = "InProgress",
    Completed = "Completed",
    LessThanNilGreaterThan = "<nil>",
}

export enum ActivityEventsWatchTourVideoToDoStatus {
    ToDo = "ToDo",
    InProgress = "InProgress",
    Completed = "Completed",
    LessThanNilGreaterThan = "<nil>",
}

export class ActivityEvents extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "agreeToClientTermsToDoStatus" })
    agreeToClientTermsToDoStatus?: ActivityEventsAgreeToClientTermsToDoStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "benefitsOnlySignup" })
    benefitsOnlySignup?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "calendlyWidgedOpened" })
    calendlyWidgedOpened?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "debitCardTCAcceptedAt" })
    debitCardTCAcceptedAt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "eftpsEnrolledAt" })
    eftpsEnrolledAt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "electronic1099Consent" })
    electronic1099Consent?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "expensesReviewedAt" })
    expensesReviewedAt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "findFirstDeductibleExpenseToDoStatus" })
    findFirstDeductibleExpenseToDoStatus?: ActivityEventsFindFirstDeductibleExpenseToDoStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "incomeReviewedAt" })
    incomeReviewedAt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "internationalWaitListed" })
    internationalWaitListed?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "knowingCompanyStructureToDoStatus" })
    knowingCompanyStructureToDoStatus?: ActivityEventsKnowingCompanyStructureToDoStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "paymentsInfoBannerClosed" })
    paymentsInfoBannerClosed?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "paymentsTestInvoiceBannerClosed" })
    paymentsTestInvoiceBannerClosed?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "w8BenFormAcknowledged" })
    w8BenFormAcknowledged?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "w9FormAcknowledged" })
    w9FormAcknowledged?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "walletIncomePercent" })
    walletIncomePercent?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "watchTourVideoToDoStatus" })
    watchTourVideoToDoStatus?: ActivityEventsWatchTourVideoToDoStatus;
}
