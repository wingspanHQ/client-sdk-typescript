/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { VerificationState, VerificationState$ } from "./verificationstate";
import { z } from "zod";

export type TinVerification = {
    ein?: VerificationState | null | undefined;
    ssn?: VerificationState | null | undefined;
};

/** @internal */
export namespace TinVerification$ {
    export type Inbound = {
        ein?: VerificationState$.Inbound | null | undefined;
        ssn?: VerificationState$.Inbound | null | undefined;
    };

    export const inboundSchema: z.ZodType<TinVerification, z.ZodTypeDef, Inbound> = z
        .object({
            ein: z.nullable(VerificationState$.inboundSchema).optional(),
            ssn: z.nullable(VerificationState$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.ein === undefined ? null : { ein: v.ein }),
                ...(v.ssn === undefined ? null : { ssn: v.ssn }),
            };
        });

    export type Outbound = {
        ein?: VerificationState$.Outbound | null | undefined;
        ssn?: VerificationState$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TinVerification> = z
        .object({
            ein: z.nullable(VerificationState$.outboundSchema).optional(),
            ssn: z.nullable(VerificationState$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.ein === undefined ? null : { ein: v.ein }),
                ...(v.ssn === undefined ? null : { ssn: v.ssn }),
            };
        });
}
