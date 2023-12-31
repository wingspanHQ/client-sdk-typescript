/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PlanEnrollmentCoverageMonth } from "./planenrollmentcoveragemonth";
import { UserRoles } from "./userroles";
import { Expose, Type } from "class-transformer";

export enum PlanEnrollmentPlanType {
    MeridioHealth = "MeridioHealth",
}

export enum PlanEnrollmentStatus {
    Pending = "Pending",
    Active = "Active",
    Terminated = "Terminated",
}

export class PlanEnrollment extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: PlanEnrollmentCoverageMonth })
    @Expose({ name: "coverageMonths" })
    @Type(() => PlanEnrollmentCoverageMonth)
    coverageMonths: PlanEnrollmentCoverageMonth[];

    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    createdAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency: any;

    @SpeakeasyMetadata()
    @Expose({ name: "effectiveDate" })
    effectiveDate: string;

    @SpeakeasyMetadata()
    @Expose({ name: "endDate" })
    endDate?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "eventActors" })
    eventActors: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "labels" })
    labels: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "memberId" })
    memberId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "monthlyPremium" })
    monthlyPremium: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "planEnrollmentId" })
    planEnrollmentId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "planType" })
    planType: PlanEnrollmentPlanType;

    @SpeakeasyMetadata()
    @Expose({ name: "sku" })
    sku: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: PlanEnrollmentStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "updatedAt" })
    updatedAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "userRoles" })
    @Type(() => UserRoles)
    userRoles: UserRoles;
}
