/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type AuthorizationScopes = {
    read?: Array<string> | null | undefined;
    write?: Array<string> | null | undefined;
};

/** @internal */
export namespace AuthorizationScopes$ {
    export type Inbound = {
        Read?: Array<string> | null | undefined;
        Write?: Array<string> | null | undefined;
    };

    export const inboundSchema: z.ZodType<AuthorizationScopes, z.ZodTypeDef, Inbound> = z
        .object({
            Read: z.nullable(z.array(z.string())).optional(),
            Write: z.nullable(z.array(z.string())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.Read === undefined ? null : { read: v.Read }),
                ...(v.Write === undefined ? null : { write: v.Write }),
            };
        });

    export type Outbound = {
        Read?: Array<string> | null | undefined;
        Write?: Array<string> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AuthorizationScopes> = z
        .object({
            read: z.nullable(z.array(z.string())).optional(),
            write: z.nullable(z.array(z.string())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.read === undefined ? null : { Read: v.read }),
                ...(v.write === undefined ? null : { Write: v.write }),
            };
        });
}
