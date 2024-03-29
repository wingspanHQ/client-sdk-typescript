/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type A71f30be878693b235f8c5f1650be03c9920ca9821526545760476436104c9dc = {
    deductionIds?: any | undefined;
};

/** @internal */
export namespace A71f30be878693b235f8c5f1650be03c9920ca9821526545760476436104c9dc$ {
    export type Inbound = {
        deductionIds?: any | undefined;
    };

    export const inboundSchema: z.ZodType<
        A71f30be878693b235f8c5f1650be03c9920ca9821526545760476436104c9dc,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            deductionIds: z.any().optional(),
        })
        .transform((v) => {
            return {
                ...(v.deductionIds === undefined ? null : { deductionIds: v.deductionIds }),
            };
        });

    export type Outbound = {
        deductionIds?: any | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        A71f30be878693b235f8c5f1650be03c9920ca9821526545760476436104c9dc
    > = z
        .object({
            deductionIds: z.any().optional(),
        })
        .transform((v) => {
            return {
                ...(v.deductionIds === undefined ? null : { deductionIds: v.deductionIds }),
            };
        });
}
