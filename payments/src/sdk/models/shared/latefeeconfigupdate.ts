/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { FrequencyUpdate, FrequencyUpdate$ } from "./frequencyupdate";
import { z } from "zod";

export type LateFeeConfigUpdate = {
    frequency?: FrequencyUpdate | null | undefined;
    lateFeeAmount?: number | null | undefined;
    lateFeePercentage?: number | null | undefined;
};

/** @internal */
export namespace LateFeeConfigUpdate$ {
    export type Inbound = {
        frequency?: FrequencyUpdate$.Inbound | null | undefined;
        lateFeeAmount?: number | null | undefined;
        lateFeePercentage?: number | null | undefined;
    };

    export const inboundSchema: z.ZodType<LateFeeConfigUpdate, z.ZodTypeDef, Inbound> = z
        .object({
            frequency: FrequencyUpdate$.inboundSchema.nullable().optional(),
            lateFeeAmount: z.number().nullable().optional(),
            lateFeePercentage: z.number().nullable().optional(),
        })
        .transform((v) => {
            return {
                ...(v.frequency === undefined ? null : { frequency: v.frequency }),
                ...(v.lateFeeAmount === undefined ? null : { lateFeeAmount: v.lateFeeAmount }),
                ...(v.lateFeePercentage === undefined
                    ? null
                    : { lateFeePercentage: v.lateFeePercentage }),
            };
        });

    export type Outbound = {
        frequency?: FrequencyUpdate$.Outbound | null | undefined;
        lateFeeAmount?: number | null | undefined;
        lateFeePercentage?: number | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LateFeeConfigUpdate> = z
        .object({
            frequency: FrequencyUpdate$.outboundSchema.nullable().optional(),
            lateFeeAmount: z.number().nullable().optional(),
            lateFeePercentage: z.number().nullable().optional(),
        })
        .transform((v) => {
            return {
                ...(v.frequency === undefined ? null : { frequency: v.frequency }),
                ...(v.lateFeeAmount === undefined ? null : { lateFeeAmount: v.lateFeeAmount }),
                ...(v.lateFeePercentage === undefined
                    ? null
                    : { lateFeePercentage: v.lateFeePercentage }),
            };
        });
}
