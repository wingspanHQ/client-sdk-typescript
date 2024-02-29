/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type PostPaymentDeductionDisbursement = {
    inputs: Record<string, string>;
    strategy: string;
};

/** @internal */
export namespace PostPaymentDeductionDisbursement$ {
    export type Inbound = {
        inputs: Record<string, string>;
        strategy: string;
    };

    export const inboundSchema: z.ZodType<PostPaymentDeductionDisbursement, z.ZodTypeDef, Inbound> =
        z
            .object({
                inputs: z.record(z.string()),
                strategy: z.string(),
            })
            .transform((v) => {
                return {
                    inputs: v.inputs,
                    strategy: v.strategy,
                };
            });

    export type Outbound = {
        inputs: Record<string, string>;
        strategy: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostPaymentDeductionDisbursement
    > = z
        .object({
            inputs: z.record(z.string()),
            strategy: z.string(),
        })
        .transform((v) => {
            return {
                inputs: v.inputs,
                strategy: v.strategy,
            };
        });
}
