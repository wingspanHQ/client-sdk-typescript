/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type AuthorizationScopeGroup = {
    scopeGroupId: string;
};

/** @internal */
export namespace AuthorizationScopeGroup$ {
    export type Inbound = {
        scopeGroupId: string;
    };

    export const inboundSchema: z.ZodType<AuthorizationScopeGroup, z.ZodTypeDef, Inbound> = z
        .object({
            scopeGroupId: z.string(),
        })
        .transform((v) => {
            return {
                scopeGroupId: v.scopeGroupId,
            };
        });

    export type Outbound = {
        scopeGroupId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AuthorizationScopeGroup> = z
        .object({
            scopeGroupId: z.string(),
        })
        .transform((v) => {
            return {
                scopeGroupId: v.scopeGroupId,
            };
        });
}
