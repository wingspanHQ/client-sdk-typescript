/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    PlanEnrollmentCoverageMonth,
    PlanEnrollmentCoverageMonth$,
} from "./planenrollmentcoveragemonth";
import { UserRoles, UserRoles$ } from "./userroles";
import { z } from "zod";

export enum PlanType {
    MeridioHealth = "MeridioHealth",
}

export enum Status {
    Pending = "Pending",
    Active = "Active",
    Terminated = "Terminated",
}

export type PlanEnrollment = {
    coverageMonths: Array<PlanEnrollmentCoverageMonth>;
    createdAt: string;
    currency?: any | undefined;
    effectiveDate: string;
    endDate?: string | null | undefined;
    eventActors: Record<string, string>;
    labels: Record<string, string>;
    memberId: string;
    monthlyPremium: number;
    name: string;
    planEnrollmentId: string;
    planType: PlanType;
    sku: string;
    status: Status;
    updatedAt: string;
    userRoles: UserRoles;
};

/** @internal */
export const PlanType$ = z.nativeEnum(PlanType);

/** @internal */
export const Status$ = z.nativeEnum(Status);

/** @internal */
export namespace PlanEnrollment$ {
    export type Inbound = {
        coverageMonths: Array<PlanEnrollmentCoverageMonth$.Inbound>;
        createdAt: string;
        currency?: any | undefined;
        effectiveDate: string;
        endDate?: string | null | undefined;
        eventActors: Record<string, string>;
        labels: Record<string, string>;
        memberId: string;
        monthlyPremium: number;
        name: string;
        planEnrollmentId: string;
        planType: PlanType;
        sku: string;
        status: Status;
        updatedAt: string;
        userRoles: UserRoles$.Inbound;
    };

    export const inboundSchema: z.ZodType<PlanEnrollment, z.ZodTypeDef, Inbound> = z
        .object({
            coverageMonths: z.array(PlanEnrollmentCoverageMonth$.inboundSchema),
            createdAt: z.string(),
            currency: z.any().optional(),
            effectiveDate: z.string(),
            endDate: z.nullable(z.string()).optional(),
            eventActors: z.record(z.string()),
            labels: z.record(z.string()),
            memberId: z.string(),
            monthlyPremium: z.number(),
            name: z.string(),
            planEnrollmentId: z.string(),
            planType: PlanType$,
            sku: z.string(),
            status: Status$,
            updatedAt: z.string(),
            userRoles: UserRoles$.inboundSchema,
        })
        .transform((v) => {
            return {
                coverageMonths: v.coverageMonths,
                createdAt: v.createdAt,
                ...(v.currency === undefined ? null : { currency: v.currency }),
                effectiveDate: v.effectiveDate,
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                eventActors: v.eventActors,
                labels: v.labels,
                memberId: v.memberId,
                monthlyPremium: v.monthlyPremium,
                name: v.name,
                planEnrollmentId: v.planEnrollmentId,
                planType: v.planType,
                sku: v.sku,
                status: v.status,
                updatedAt: v.updatedAt,
                userRoles: v.userRoles,
            };
        });

    export type Outbound = {
        coverageMonths: Array<PlanEnrollmentCoverageMonth$.Outbound>;
        createdAt: string;
        currency?: any | undefined;
        effectiveDate: string;
        endDate?: string | null | undefined;
        eventActors: Record<string, string>;
        labels: Record<string, string>;
        memberId: string;
        monthlyPremium: number;
        name: string;
        planEnrollmentId: string;
        planType: PlanType;
        sku: string;
        status: Status;
        updatedAt: string;
        userRoles: UserRoles$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PlanEnrollment> = z
        .object({
            coverageMonths: z.array(PlanEnrollmentCoverageMonth$.outboundSchema),
            createdAt: z.string(),
            currency: z.any().optional(),
            effectiveDate: z.string(),
            endDate: z.nullable(z.string()).optional(),
            eventActors: z.record(z.string()),
            labels: z.record(z.string()),
            memberId: z.string(),
            monthlyPremium: z.number(),
            name: z.string(),
            planEnrollmentId: z.string(),
            planType: PlanType$,
            sku: z.string(),
            status: Status$,
            updatedAt: z.string(),
            userRoles: UserRoles$.outboundSchema,
        })
        .transform((v) => {
            return {
                coverageMonths: v.coverageMonths,
                createdAt: v.createdAt,
                ...(v.currency === undefined ? null : { currency: v.currency }),
                effectiveDate: v.effectiveDate,
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                eventActors: v.eventActors,
                labels: v.labels,
                memberId: v.memberId,
                monthlyPremium: v.monthlyPremium,
                name: v.name,
                planEnrollmentId: v.planEnrollmentId,
                planType: v.planType,
                sku: v.sku,
                status: v.status,
                updatedAt: v.updatedAt,
                userRoles: v.userRoles,
            };
        });
}
