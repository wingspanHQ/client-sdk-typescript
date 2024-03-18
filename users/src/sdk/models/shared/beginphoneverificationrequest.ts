/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum Channel {
    PhoneCall = "PhoneCall",
    Sms = "SMS",
}

export type BeginPhoneVerificationRequest = {
    channel?: Channel | null | undefined;
    phone: string;
};

/** @internal */
export const Channel$ = z.nativeEnum(Channel);

/** @internal */
export namespace BeginPhoneVerificationRequest$ {
    export type Inbound = {
        channel?: Channel | null | undefined;
        phone: string;
    };

    export const inboundSchema: z.ZodType<BeginPhoneVerificationRequest, z.ZodTypeDef, Inbound> = z
        .object({
            channel: z.nullable(Channel$).optional(),
            phone: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.channel === undefined ? null : { channel: v.channel }),
                phone: v.phone,
            };
        });

    export type Outbound = {
        channel?: Channel | null | undefined;
        phone: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BeginPhoneVerificationRequest> =
        z
            .object({
                channel: z.nullable(Channel$).optional(),
                phone: z.string(),
            })
            .transform((v) => {
                return {
                    ...(v.channel === undefined ? null : { channel: v.channel }),
                    phone: v.phone,
                };
            });
}
