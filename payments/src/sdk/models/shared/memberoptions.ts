/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum PayoutPreferences {
    Standard = "Standard",
    Instant = "Instant",
    Expedited = "Expedited",
    Check = "Check",
    ECheck = "ECheck",
    LessThanNilGreaterThan = "<nil>",
}

export enum MemberOptionsWorkflowStatus {
    Disputed = "Disputed",
    Accepted = "Accepted",
    Resubmitted = "Resubmitted",
    LessThanNilGreaterThan = "<nil>",
}

export enum MemberOptionsWorkflowSubStatus {
    Submitted = "Submitted",
    LessThanNilGreaterThan = "<nil>",
}

export type MemberOptions = {
    comment?: string | null | undefined;
    payoutPreferences?: PayoutPreferences | null | undefined;
    workflowStatus?: MemberOptionsWorkflowStatus | null | undefined;
    workflowSubStatus?: MemberOptionsWorkflowSubStatus | null | undefined;
};

/** @internal */
export const PayoutPreferences$ = z.nativeEnum(PayoutPreferences);

/** @internal */
export const MemberOptionsWorkflowStatus$ = z.nativeEnum(MemberOptionsWorkflowStatus);

/** @internal */
export const MemberOptionsWorkflowSubStatus$ = z.nativeEnum(MemberOptionsWorkflowSubStatus);

/** @internal */
export namespace MemberOptions$ {
    export type Inbound = {
        comment?: string | null | undefined;
        payoutPreferences?: PayoutPreferences | null | undefined;
        workflowStatus?: MemberOptionsWorkflowStatus | null | undefined;
        workflowSubStatus?: MemberOptionsWorkflowSubStatus | null | undefined;
    };

    export const inboundSchema: z.ZodType<MemberOptions, z.ZodTypeDef, Inbound> = z
        .object({
            comment: z.nullable(z.string()).optional(),
            payoutPreferences: z.nullable(PayoutPreferences$).optional(),
            workflowStatus: z.nullable(MemberOptionsWorkflowStatus$).optional(),
            workflowSubStatus: z.nullable(MemberOptionsWorkflowSubStatus$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.comment === undefined ? null : { comment: v.comment }),
                ...(v.payoutPreferences === undefined
                    ? null
                    : { payoutPreferences: v.payoutPreferences }),
                ...(v.workflowStatus === undefined ? null : { workflowStatus: v.workflowStatus }),
                ...(v.workflowSubStatus === undefined
                    ? null
                    : { workflowSubStatus: v.workflowSubStatus }),
            };
        });

    export type Outbound = {
        comment?: string | null | undefined;
        payoutPreferences?: PayoutPreferences | null | undefined;
        workflowStatus?: MemberOptionsWorkflowStatus | null | undefined;
        workflowSubStatus?: MemberOptionsWorkflowSubStatus | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MemberOptions> = z
        .object({
            comment: z.nullable(z.string()).optional(),
            payoutPreferences: z.nullable(PayoutPreferences$).optional(),
            workflowStatus: z.nullable(MemberOptionsWorkflowStatus$).optional(),
            workflowSubStatus: z.nullable(MemberOptionsWorkflowSubStatus$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.comment === undefined ? null : { comment: v.comment }),
                ...(v.payoutPreferences === undefined
                    ? null
                    : { payoutPreferences: v.payoutPreferences }),
                ...(v.workflowStatus === undefined ? null : { workflowStatus: v.workflowStatus }),
                ...(v.workflowSubStatus === undefined
                    ? null
                    : { workflowSubStatus: v.workflowSubStatus }),
            };
        });
}
