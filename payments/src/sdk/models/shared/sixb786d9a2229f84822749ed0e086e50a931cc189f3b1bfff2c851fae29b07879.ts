/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type Sixb786d9a2229f84822749ed0e086e50a931cc189f3b1bfff2c851fae29b07879 = {
    expenseAccountId?: string | null | undefined;
};

/** @internal */
export namespace Sixb786d9a2229f84822749ed0e086e50a931cc189f3b1bfff2c851fae29b07879$ {
    export type Inbound = {
        expenseAccountId?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<
        Sixb786d9a2229f84822749ed0e086e50a931cc189f3b1bfff2c851fae29b07879,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            expenseAccountId: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.expenseAccountId === undefined
                    ? null
                    : { expenseAccountId: v.expenseAccountId }),
            };
        });

    export type Outbound = {
        expenseAccountId?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        Sixb786d9a2229f84822749ed0e086e50a931cc189f3b1bfff2c851fae29b07879
    > = z
        .object({
            expenseAccountId: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.expenseAccountId === undefined
                    ? null
                    : { expenseAccountId: v.expenseAccountId }),
            };
        });
}
