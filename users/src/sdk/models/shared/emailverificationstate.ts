/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum EmailVerificationStateStatus {
    Pending = "Pending",
    Verified = "Verified",
}

export type EmailVerificationState = {
    emailPendingVerification?: string | null | undefined;
    status?: EmailVerificationStateStatus | null | undefined;
};

/** @internal */
export const EmailVerificationStateStatus$ = z.nativeEnum(EmailVerificationStateStatus);

/** @internal */
export namespace EmailVerificationState$ {
    export type Inbound = {
        emailPendingVerification?: string | null | undefined;
        status?: EmailVerificationStateStatus | null | undefined;
    };

    export const inboundSchema: z.ZodType<EmailVerificationState, z.ZodTypeDef, Inbound> = z
        .object({
            emailPendingVerification: z.nullable(z.string()).optional(),
            status: z.nullable(EmailVerificationStateStatus$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.emailPendingVerification === undefined
                    ? null
                    : { emailPendingVerification: v.emailPendingVerification }),
                ...(v.status === undefined ? null : { status: v.status }),
            };
        });

    export type Outbound = {
        emailPendingVerification?: string | null | undefined;
        status?: EmailVerificationStateStatus | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EmailVerificationState> = z
        .object({
            emailPendingVerification: z.nullable(z.string()).optional(),
            status: z.nullable(EmailVerificationStateStatus$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.emailPendingVerification === undefined
                    ? null
                    : { emailPendingVerification: v.emailPendingVerification }),
                ...(v.status === undefined ? null : { status: v.status }),
            };
        });
}
