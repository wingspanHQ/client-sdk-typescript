/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CalculationSettings1099 } from "./calculationsettings1099";
import { Frequency } from "./frequency";
import { FundingSource } from "./fundingsource";
import { ScheduleDate } from "./scheduledate";
import { Expose, Type } from "class-transformer";

export enum PayrollSettingsStatus {
    Active = "Active",
    Draft = "Draft",
    Expired = "Expired",
    Cancelled = "Cancelled",
}

export enum PayrollSettingsWorkflow {
    SingleStage = "SingleStage",
    DualStage = "DualStage",
}

export class PayrollSettings extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "calculationSettings1099" })
    @Type(() => CalculationSettings1099)
    calculationSettings1099?: CalculationSettings1099;

    @SpeakeasyMetadata()
    @Expose({ name: "enablePlannedPayroll" })
    enablePlannedPayroll?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "enableProcessDaysBeforeDue" })
    enableProcessDaysBeforeDue?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "frequency" })
    @Type(() => Frequency)
    frequency?: Frequency;

    @SpeakeasyMetadata()
    @Expose({ name: "fundingSource" })
    @Type(() => FundingSource)
    fundingSource?: FundingSource;

    @SpeakeasyMetadata()
    @Expose({ name: "issue1099s" })
    issue1099s?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "processDaysBeforeDue" })
    processDaysBeforeDue?: number;

    @SpeakeasyMetadata({ elemType: ScheduleDate })
    @Expose({ name: "scheduleDates" })
    @Type(() => ScheduleDate)
    scheduleDates?: ScheduleDate[];

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: PayrollSettingsStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "workflow" })
    workflow?: PayrollSettingsWorkflow;
}
