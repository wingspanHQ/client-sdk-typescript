/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Occupation = {
    category: string;
    jobs?: any | null | undefined;
    mccCode: string;
};

/** @internal */
export namespace Occupation$ {
    export type Inbound = {
        category: string;
        jobs?: any | null | undefined;
        mccCode: string;
    };

    export const inboundSchema: z.ZodType<Occupation, z.ZodTypeDef, Inbound> = z
        .object({
            category: z.string(),
            jobs: z.nullable(z.any()).optional(),
            mccCode: z.string(),
        })
        .transform((v) => {
            return {
                category: v.category,
                ...(v.jobs === undefined ? null : { jobs: v.jobs }),
                mccCode: v.mccCode,
            };
        });

    export type Outbound = {
        category: string;
        jobs?: any | null | undefined;
        mccCode: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Occupation> = z
        .object({
            category: z.string(),
            jobs: z.nullable(z.any()).optional(),
            mccCode: z.string(),
        })
        .transform((v) => {
            return {
                category: v.category,
                ...(v.jobs === undefined ? null : { jobs: v.jobs }),
                mccCode: v.mccCode,
            };
        });
}
