/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum ScheduledChangePackage {
    None = "None",
    Benefits = "Benefits",
    Essentials = "Essentials",
    Professional = "Professional",
    Corporate = "Corporate",
}

export enum ScheduledChangePackageTier {
    Basic = "Basic",
    Premium = "Premium",
}

export enum ScheduledChangeStatus {
    Incomplete = "incomplete",
    IncompleteExpired = "incomplete_expired",
    Trialing = "trialing",
    Active = "active",
    PastDue = "past_due",
    Canceled = "canceled",
    Unpaid = "unpaid",
}

export enum ScheduledChangeTerm {
    Yearly = "Yearly",
    Monthly = "Monthly",
}

export type ScheduledChange = {
    effectiveDate: string;
    package?: ScheduledChangePackage | null | undefined;
    packageTier?: ScheduledChangePackageTier | null | undefined;
    planId?: string | null | undefined;
    status?: ScheduledChangeStatus | null | undefined;
    term?: ScheduledChangeTerm | null | undefined;
};

/** @internal */
export const ScheduledChangePackage$ = z.nativeEnum(ScheduledChangePackage);

/** @internal */
export const ScheduledChangePackageTier$ = z.nativeEnum(ScheduledChangePackageTier);

/** @internal */
export const ScheduledChangeStatus$ = z.nativeEnum(ScheduledChangeStatus);

/** @internal */
export const ScheduledChangeTerm$ = z.nativeEnum(ScheduledChangeTerm);

/** @internal */
export namespace ScheduledChange$ {
    export type Inbound = {
        effectiveDate: string;
        package?: ScheduledChangePackage | null | undefined;
        packageTier?: ScheduledChangePackageTier | null | undefined;
        planId?: string | null | undefined;
        status?: ScheduledChangeStatus | null | undefined;
        term?: ScheduledChangeTerm | null | undefined;
    };

    export const inboundSchema: z.ZodType<ScheduledChange, z.ZodTypeDef, Inbound> = z
        .object({
            effectiveDate: z.string(),
            package: z.nullable(ScheduledChangePackage$).optional(),
            packageTier: z.nullable(ScheduledChangePackageTier$).optional(),
            planId: z.nullable(z.string()).optional(),
            status: z.nullable(ScheduledChangeStatus$).optional(),
            term: z.nullable(ScheduledChangeTerm$).optional(),
        })
        .transform((v) => {
            return {
                effectiveDate: v.effectiveDate,
                ...(v.package === undefined ? null : { package: v.package }),
                ...(v.packageTier === undefined ? null : { packageTier: v.packageTier }),
                ...(v.planId === undefined ? null : { planId: v.planId }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.term === undefined ? null : { term: v.term }),
            };
        });

    export type Outbound = {
        effectiveDate: string;
        package?: ScheduledChangePackage | null | undefined;
        packageTier?: ScheduledChangePackageTier | null | undefined;
        planId?: string | null | undefined;
        status?: ScheduledChangeStatus | null | undefined;
        term?: ScheduledChangeTerm | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ScheduledChange> = z
        .object({
            effectiveDate: z.string(),
            package: z.nullable(ScheduledChangePackage$).optional(),
            packageTier: z.nullable(ScheduledChangePackageTier$).optional(),
            planId: z.nullable(z.string()).optional(),
            status: z.nullable(ScheduledChangeStatus$).optional(),
            term: z.nullable(ScheduledChangeTerm$).optional(),
        })
        .transform((v) => {
            return {
                effectiveDate: v.effectiveDate,
                ...(v.package === undefined ? null : { package: v.package }),
                ...(v.packageTier === undefined ? null : { packageTier: v.packageTier }),
                ...(v.planId === undefined ? null : { planId: v.planId }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.term === undefined ? null : { term: v.term }),
            };
        });
}
