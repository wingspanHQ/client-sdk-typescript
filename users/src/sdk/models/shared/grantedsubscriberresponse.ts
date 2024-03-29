/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum Package {
    None = "None",
    Benefits = "Benefits",
    Essentials = "Essentials",
    Professional = "Professional",
    Corporate = "Corporate",
}

export enum PackageTier {
    Basic = "Basic",
    Premium = "Premium",
}

export enum GrantedSubscriberResponseStatus {
    Pending = "Pending",
    Active = "Active",
    Canceled = "Canceled",
}

export type GrantedSubscriberResponse = {
    id: string;
    grantorId: string;
    memberId: string;
    package: Package;
    packageTier: PackageTier;
    status: GrantedSubscriberResponseStatus;
    subscriptionGrantId: string;
};

/** @internal */
export const Package$ = z.nativeEnum(Package);

/** @internal */
export const PackageTier$ = z.nativeEnum(PackageTier);

/** @internal */
export const GrantedSubscriberResponseStatus$ = z.nativeEnum(GrantedSubscriberResponseStatus);

/** @internal */
export namespace GrantedSubscriberResponse$ {
    export type Inbound = {
        _id: string;
        grantorId: string;
        memberId: string;
        package: Package;
        packageTier: PackageTier;
        status: GrantedSubscriberResponseStatus;
        subscriptionGrantId: string;
    };

    export const inboundSchema: z.ZodType<GrantedSubscriberResponse, z.ZodTypeDef, Inbound> = z
        .object({
            _id: z.string(),
            grantorId: z.string(),
            memberId: z.string(),
            package: Package$,
            packageTier: PackageTier$,
            status: GrantedSubscriberResponseStatus$,
            subscriptionGrantId: z.string(),
        })
        .transform((v) => {
            return {
                id: v._id,
                grantorId: v.grantorId,
                memberId: v.memberId,
                package: v.package,
                packageTier: v.packageTier,
                status: v.status,
                subscriptionGrantId: v.subscriptionGrantId,
            };
        });

    export type Outbound = {
        _id: string;
        grantorId: string;
        memberId: string;
        package: Package;
        packageTier: PackageTier;
        status: GrantedSubscriberResponseStatus;
        subscriptionGrantId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GrantedSubscriberResponse> = z
        .object({
            id: z.string(),
            grantorId: z.string(),
            memberId: z.string(),
            package: Package$,
            packageTier: PackageTier$,
            status: GrantedSubscriberResponseStatus$,
            subscriptionGrantId: z.string(),
        })
        .transform((v) => {
            return {
                _id: v.id,
                grantorId: v.grantorId,
                memberId: v.memberId,
                package: v.package,
                packageTier: v.packageTier,
                status: v.status,
                subscriptionGrantId: v.subscriptionGrantId,
            };
        });
}
