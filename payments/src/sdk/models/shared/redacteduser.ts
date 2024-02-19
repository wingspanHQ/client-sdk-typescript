/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    F6f2bd1a2fc7bad4e0d8f22345fc5f6699d096b7797b93575869c544a4fc5cef,
    F6f2bd1a2fc7bad4e0d8f22345fc5f6699d096b7797b93575869c544a4fc5cef$,
} from "./f6f2bd1a2fc7bad4e0d8f22345fc5f6699d096b7797b93575869c544a4fc5cef";
import {
    Ninee97e63e736df301658ebeeab7f4fe84f3aeaa73800d3e4863801a3eb026df4b,
    Ninee97e63e736df301658ebeeab7f4fe84f3aeaa73800d3e4863801a3eb026df4b$,
} from "./ninee97e63e736df301658ebeeab7f4fe84f3aeaa73800d3e4863801a3eb026df4b";
import {
    SevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051,
    SevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051$,
} from "./seventhousandninehundredandninetysixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051";
import { z } from "zod";

export enum RedactedUserStatus {
    Pending = "Pending",
    Active = "Active",
    Disabled = "Disabled",
}

export type RedactedUser = {
    email?: string | null | undefined;
    phone?:
        | SevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051
        | null
        | undefined;
    profile?: F6f2bd1a2fc7bad4e0d8f22345fc5f6699d096b7797b93575869c544a4fc5cef | null | undefined;
    settings?:
        | Ninee97e63e736df301658ebeeab7f4fe84f3aeaa73800d3e4863801a3eb026df4b
        | null
        | undefined;
    status?: RedactedUserStatus | null | undefined;
    tag?: string | null | undefined;
};

/** @internal */
export const RedactedUserStatus$ = z.nativeEnum(RedactedUserStatus);

/** @internal */
export namespace RedactedUser$ {
    export type Inbound = {
        email?: string | null | undefined;
        phone?:
            | SevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051$.Inbound
            | null
            | undefined;
        profile?:
            | F6f2bd1a2fc7bad4e0d8f22345fc5f6699d096b7797b93575869c544a4fc5cef$.Inbound
            | null
            | undefined;
        settings?:
            | Ninee97e63e736df301658ebeeab7f4fe84f3aeaa73800d3e4863801a3eb026df4b$.Inbound
            | null
            | undefined;
        status?: RedactedUserStatus | null | undefined;
        tag?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<RedactedUser, z.ZodTypeDef, Inbound> = z
        .object({
            email: z.nullable(z.string()).optional(),
            phone: z
                .nullable(
                    SevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051$.inboundSchema
                )
                .optional(),
            profile: z
                .nullable(
                    F6f2bd1a2fc7bad4e0d8f22345fc5f6699d096b7797b93575869c544a4fc5cef$.inboundSchema
                )
                .optional(),
            settings: z
                .nullable(
                    Ninee97e63e736df301658ebeeab7f4fe84f3aeaa73800d3e4863801a3eb026df4b$.inboundSchema
                )
                .optional(),
            status: z.nullable(RedactedUserStatus$).optional(),
            tag: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.phone === undefined ? null : { phone: v.phone }),
                ...(v.profile === undefined ? null : { profile: v.profile }),
                ...(v.settings === undefined ? null : { settings: v.settings }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.tag === undefined ? null : { tag: v.tag }),
            };
        });

    export type Outbound = {
        email?: string | null | undefined;
        phone?:
            | SevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051$.Outbound
            | null
            | undefined;
        profile?:
            | F6f2bd1a2fc7bad4e0d8f22345fc5f6699d096b7797b93575869c544a4fc5cef$.Outbound
            | null
            | undefined;
        settings?:
            | Ninee97e63e736df301658ebeeab7f4fe84f3aeaa73800d3e4863801a3eb026df4b$.Outbound
            | null
            | undefined;
        status?: RedactedUserStatus | null | undefined;
        tag?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RedactedUser> = z
        .object({
            email: z.nullable(z.string()).optional(),
            phone: z
                .nullable(
                    SevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051$.outboundSchema
                )
                .optional(),
            profile: z
                .nullable(
                    F6f2bd1a2fc7bad4e0d8f22345fc5f6699d096b7797b93575869c544a4fc5cef$.outboundSchema
                )
                .optional(),
            settings: z
                .nullable(
                    Ninee97e63e736df301658ebeeab7f4fe84f3aeaa73800d3e4863801a3eb026df4b$.outboundSchema
                )
                .optional(),
            status: z.nullable(RedactedUserStatus$).optional(),
            tag: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.phone === undefined ? null : { phone: v.phone }),
                ...(v.profile === undefined ? null : { profile: v.profile }),
                ...(v.settings === undefined ? null : { settings: v.settings }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.tag === undefined ? null : { tag: v.tag }),
            };
        });
}
