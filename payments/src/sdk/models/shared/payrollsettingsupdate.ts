/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { CalculationSettings1099, CalculationSettings1099$ } from "./calculationsettings1099";
import { FrequencyUpdate, FrequencyUpdate$ } from "./frequencyupdate";
import { FundingSource, FundingSource$ } from "./fundingsource";
import { ScheduleDateUpdate, ScheduleDateUpdate$ } from "./scheduledateupdate";
import { z } from "zod";

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

export type PayrollSettingsUpdate = {
    calculationSettings1099?: CalculationSettings1099 | null | undefined;
    enablePlannedPayroll?: boolean | null | undefined;
    enableProcessDaysBeforeDue?: boolean | null | undefined;
    frequency?: FrequencyUpdate | null | undefined;
    fundingSource?: FundingSource | null | undefined;
    issue1099s?: boolean | null | undefined;
    processDaysBeforeDue?: number | null | undefined;
    scheduleDates?: Array<ScheduleDateUpdate> | null | undefined;
    status?: PayrollSettingsUpdateStatus | null | undefined;
    workflow?: PayrollSettingsUpdateWorkflow | null | undefined;
};

/** @internal */
export const PayrollSettingsUpdateStatus$ = z.nativeEnum(PayrollSettingsUpdateStatus);

/** @internal */
export const PayrollSettingsUpdateWorkflow$ = z.nativeEnum(PayrollSettingsUpdateWorkflow);

/** @internal */
export namespace PayrollSettingsUpdate$ {
    export type Inbound = {
        calculationSettings1099?: CalculationSettings1099$.Inbound | null | undefined;
        enablePlannedPayroll?: boolean | null | undefined;
        enableProcessDaysBeforeDue?: boolean | null | undefined;
        frequency?: FrequencyUpdate$.Inbound | null | undefined;
        fundingSource?: FundingSource$.Inbound | null | undefined;
        issue1099s?: boolean | null | undefined;
        processDaysBeforeDue?: number | null | undefined;
        scheduleDates?: Array<ScheduleDateUpdate$.Inbound> | null | undefined;
        status?: PayrollSettingsUpdateStatus | null | undefined;
        workflow?: PayrollSettingsUpdateWorkflow | null | undefined;
    };

    export const inboundSchema: z.ZodType<PayrollSettingsUpdate, z.ZodTypeDef, Inbound> = z
        .object({
            calculationSettings1099: CalculationSettings1099$.inboundSchema.nullable().optional(),
            enablePlannedPayroll: z.boolean().nullable().optional(),
            enableProcessDaysBeforeDue: z.boolean().nullable().optional(),
            frequency: FrequencyUpdate$.inboundSchema.nullable().optional(),
            fundingSource: FundingSource$.inboundSchema.nullable().optional(),
            issue1099s: z.boolean().nullable().optional(),
            processDaysBeforeDue: z.number().nullable().optional(),
            scheduleDates: z.array(ScheduleDateUpdate$.inboundSchema).nullable().optional(),
            status: PayrollSettingsUpdateStatus$.nullable().optional(),
            workflow: PayrollSettingsUpdateWorkflow$.nullable().optional(),
        })
        .transform((v) => {
            return {
                ...(v.calculationSettings1099 === undefined
                    ? null
                    : { calculationSettings1099: v.calculationSettings1099 }),
                ...(v.enablePlannedPayroll === undefined
                    ? null
                    : { enablePlannedPayroll: v.enablePlannedPayroll }),
                ...(v.enableProcessDaysBeforeDue === undefined
                    ? null
                    : { enableProcessDaysBeforeDue: v.enableProcessDaysBeforeDue }),
                ...(v.frequency === undefined ? null : { frequency: v.frequency }),
                ...(v.fundingSource === undefined ? null : { fundingSource: v.fundingSource }),
                ...(v.issue1099s === undefined ? null : { issue1099s: v.issue1099s }),
                ...(v.processDaysBeforeDue === undefined
                    ? null
                    : { processDaysBeforeDue: v.processDaysBeforeDue }),
                ...(v.scheduleDates === undefined ? null : { scheduleDates: v.scheduleDates }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.workflow === undefined ? null : { workflow: v.workflow }),
            };
        });

    export type Outbound = {
        calculationSettings1099?: CalculationSettings1099$.Outbound | null | undefined;
        enablePlannedPayroll?: boolean | null | undefined;
        enableProcessDaysBeforeDue?: boolean | null | undefined;
        frequency?: FrequencyUpdate$.Outbound | null | undefined;
        fundingSource?: FundingSource$.Outbound | null | undefined;
        issue1099s?: boolean | null | undefined;
        processDaysBeforeDue?: number | null | undefined;
        scheduleDates?: Array<ScheduleDateUpdate$.Outbound> | null | undefined;
        status?: PayrollSettingsUpdateStatus | null | undefined;
        workflow?: PayrollSettingsUpdateWorkflow | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PayrollSettingsUpdate> = z
        .object({
            calculationSettings1099: CalculationSettings1099$.outboundSchema.nullable().optional(),
            enablePlannedPayroll: z.boolean().nullable().optional(),
            enableProcessDaysBeforeDue: z.boolean().nullable().optional(),
            frequency: FrequencyUpdate$.outboundSchema.nullable().optional(),
            fundingSource: FundingSource$.outboundSchema.nullable().optional(),
            issue1099s: z.boolean().nullable().optional(),
            processDaysBeforeDue: z.number().nullable().optional(),
            scheduleDates: z.array(ScheduleDateUpdate$.outboundSchema).nullable().optional(),
            status: PayrollSettingsUpdateStatus$.nullable().optional(),
            workflow: PayrollSettingsUpdateWorkflow$.nullable().optional(),
        })
        .transform((v) => {
            return {
                ...(v.calculationSettings1099 === undefined
                    ? null
                    : { calculationSettings1099: v.calculationSettings1099 }),
                ...(v.enablePlannedPayroll === undefined
                    ? null
                    : { enablePlannedPayroll: v.enablePlannedPayroll }),
                ...(v.enableProcessDaysBeforeDue === undefined
                    ? null
                    : { enableProcessDaysBeforeDue: v.enableProcessDaysBeforeDue }),
                ...(v.frequency === undefined ? null : { frequency: v.frequency }),
                ...(v.fundingSource === undefined ? null : { fundingSource: v.fundingSource }),
                ...(v.issue1099s === undefined ? null : { issue1099s: v.issue1099s }),
                ...(v.processDaysBeforeDue === undefined
                    ? null
                    : { processDaysBeforeDue: v.processDaysBeforeDue }),
                ...(v.scheduleDates === undefined ? null : { scheduleDates: v.scheduleDates }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.workflow === undefined ? null : { workflow: v.workflow }),
            };
        });
}
