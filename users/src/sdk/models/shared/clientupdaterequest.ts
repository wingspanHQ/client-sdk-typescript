/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClientProfileUpdate, ClientProfileUpdate$ } from "./clientprofileupdate";
import * as z from "zod";

export type ClientUpdateRequest = {
    clientId: string;
    profile?: ClientProfileUpdate | null | undefined;
};

/** @internal */
export namespace ClientUpdateRequest$ {
    export type Inbound = {
        clientId: string;
        profile?: ClientProfileUpdate$.Inbound | null | undefined;
    };

    export const inboundSchema: z.ZodType<ClientUpdateRequest, z.ZodTypeDef, Inbound> = z
        .object({
            clientId: z.string(),
            profile: z.nullable(ClientProfileUpdate$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                clientId: v.clientId,
                ...(v.profile === undefined ? null : { profile: v.profile }),
            };
        });

    export type Outbound = {
        clientId: string;
        profile?: ClientProfileUpdate$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ClientUpdateRequest> = z
        .object({
            clientId: z.string(),
            profile: z.nullable(ClientProfileUpdate$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                clientId: v.clientId,
                ...(v.profile === undefined ? null : { profile: v.profile }),
            };
        });
}
