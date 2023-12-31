/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum ScheduledChangePackage {
    None = "None",
    Benefits = "Benefits",
    Essentials = "Essentials",
    Professional = "Professional",
    Corporate = "Corporate",
    LessThanNilGreaterThan = "<nil>",
}

export enum ScheduledChangePackageTier {
    Basic = "Basic",
    Premium = "Premium",
    LessThanNilGreaterThan = "<nil>",
}

export enum ScheduledChangeStatus {
    Incomplete = "incomplete",
    IncompleteExpired = "incomplete_expired",
    Trialing = "trialing",
    Active = "active",
    PastDue = "past_due",
    Canceled = "canceled",
    Unpaid = "unpaid",
    LessThanNilGreaterThan = "<nil>",
}

export enum ScheduledChangeTerm {
    Yearly = "Yearly",
    Monthly = "Monthly",
    LessThanNilGreaterThan = "<nil>",
}

export class ScheduledChange extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "effectiveDate" })
    effectiveDate: string;

    @SpeakeasyMetadata()
    @Expose({ name: "package" })
    package?: ScheduledChangePackage;

    @SpeakeasyMetadata()
    @Expose({ name: "packageTier" })
    packageTier?: ScheduledChangePackageTier;

    @SpeakeasyMetadata()
    @Expose({ name: "planId" })
    planId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: ScheduledChangeStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "term" })
    term?: ScheduledChangeTerm;
}
