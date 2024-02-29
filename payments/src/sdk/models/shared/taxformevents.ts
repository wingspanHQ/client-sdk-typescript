/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type TaxFormEvents = {
    createdAt?: string | null | undefined;
    updatedAt?: string | null | undefined;
};

/** @internal */
export namespace TaxFormEvents$ {
    export type Inbound = {
        createdAt?: string | null | undefined;
        updatedAt?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<TaxFormEvents, z.ZodTypeDef, Inbound> = z
        .object({
            createdAt: z.nullable(z.string()).optional(),
            updatedAt: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
            };
        });

    export type Outbound = {
        createdAt?: string | null | undefined;
        updatedAt?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaxFormEvents> = z
        .object({
            createdAt: z.nullable(z.string()).optional(),
            updatedAt: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
            };
        });
}
