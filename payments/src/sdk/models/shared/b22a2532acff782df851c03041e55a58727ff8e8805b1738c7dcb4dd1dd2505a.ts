/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type B22a2532acff782df851c03041e55a58727ff8e8805b1738c7dcb4dd1dd2505a = {
    incomeAndExpenses: boolean;
    taxWithholdings: boolean;
};

/** @internal */
export namespace B22a2532acff782df851c03041e55a58727ff8e8805b1738c7dcb4dd1dd2505a$ {
    export type Inbound = {
        incomeAndExpenses: boolean;
        taxWithholdings: boolean;
    };

    export const inboundSchema: z.ZodType<
        B22a2532acff782df851c03041e55a58727ff8e8805b1738c7dcb4dd1dd2505a,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            incomeAndExpenses: z.boolean(),
            taxWithholdings: z.boolean(),
        })
        .transform((v) => {
            return {
                incomeAndExpenses: v.incomeAndExpenses,
                taxWithholdings: v.taxWithholdings,
            };
        });

    export type Outbound = {
        incomeAndExpenses: boolean;
        taxWithholdings: boolean;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        B22a2532acff782df851c03041e55a58727ff8e8805b1738c7dcb4dd1dd2505a
    > = z
        .object({
            incomeAndExpenses: z.boolean(),
            taxWithholdings: z.boolean(),
        })
        .transform((v) => {
            return {
                incomeAndExpenses: v.incomeAndExpenses,
                taxWithholdings: v.taxWithholdings,
            };
        });
}
