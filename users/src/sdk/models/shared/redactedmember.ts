/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { RedactedUser, RedactedUser$ } from "./redacteduser";
import {
    TwentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb,
    TwentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb$,
} from "./twentythreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb";
import * as z from "zod";

export type RedactedMember = {
    profile?:
        | TwentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb
        | null
        | undefined;
    user: RedactedUser;
};

/** @internal */
export namespace RedactedMember$ {
    export type Inbound = {
        profile?:
            | TwentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb$.Inbound
            | null
            | undefined;
        user: RedactedUser$.Inbound;
    };

    export const inboundSchema: z.ZodType<RedactedMember, z.ZodTypeDef, Inbound> = z
        .object({
            profile: z
                .nullable(
                    TwentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb$.inboundSchema
                )
                .optional(),
            user: RedactedUser$.inboundSchema,
        })
        .transform((v) => {
            return {
                ...(v.profile === undefined ? null : { profile: v.profile }),
                user: v.user,
            };
        });

    export type Outbound = {
        profile?:
            | TwentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb$.Outbound
            | null
            | undefined;
        user: RedactedUser$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RedactedMember> = z
        .object({
            profile: z
                .nullable(
                    TwentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb$.outboundSchema
                )
                .optional(),
            user: RedactedUser$.outboundSchema,
        })
        .transform((v) => {
            return {
                ...(v.profile === undefined ? null : { profile: v.profile }),
                user: v.user,
            };
        });
}
