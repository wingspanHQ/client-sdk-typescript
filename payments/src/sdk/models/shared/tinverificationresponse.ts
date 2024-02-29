/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum VerificationStatus {
    None = "None",
    Pending = "Pending",
    Failed = "Failed",
    Verified = "Verified",
}

export type TinVerificationResponse = {
    verificationStatus: VerificationStatus;
};

/** @internal */
export const VerificationStatus$ = z.nativeEnum(VerificationStatus);

/** @internal */
export namespace TinVerificationResponse$ {
    export type Inbound = {
        verificationStatus: VerificationStatus;
    };

    export const inboundSchema: z.ZodType<TinVerificationResponse, z.ZodTypeDef, Inbound> = z
        .object({
            verificationStatus: VerificationStatus$,
        })
        .transform((v) => {
            return {
                verificationStatus: v.verificationStatus,
            };
        });

    export type Outbound = {
        verificationStatus: VerificationStatus;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TinVerificationResponse> = z
        .object({
            verificationStatus: VerificationStatus$,
        })
        .transform((v) => {
            return {
                verificationStatus: v.verificationStatus,
            };
        });
}