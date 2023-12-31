/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CalculationSettings1099 } from "./calculationsettings1099";
import { FrequencyUpdate } from "./frequencyupdate";
import { FundingSource } from "./fundingsource";
import { ScheduleDateUpdate } from "./scheduledateupdate";
import { Expose, Type } from "class-transformer";

export enum PayrollSettingsUpdateStatus {
    Active = "Active",
    Draft = "Draft",
    Expired = "Expired",
    Cancelled = "Cancelled",
    LessThanNilGreaterThan = "<nil>",
}

export enum PayrollSettingsUpdateWorkflow {
    SingleStage = "SingleStage",
    DualStage = "DualStage",
    LessThanNilGreaterThan = "<nil>",
}

export class PayrollSettingsUpdate extends SpeakeasyBase {
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
    @Type(() => FrequencyUpdate)
    frequency?: FrequencyUpdate;

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

    @SpeakeasyMetadata({ elemType: ScheduleDateUpdate })
    @Expose({ name: "scheduleDates" })
    @Type(() => ScheduleDateUpdate)
    scheduleDates?: ScheduleDateUpdate[];

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: PayrollSettingsUpdateStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "workflow" })
    workflow?: PayrollSettingsUpdateWorkflow;
}
