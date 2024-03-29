/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type FlowProgress = {
    complete: boolean;
    currentStep: number;
    totalSteps: number;
    version: number;
};

/** @internal */
export namespace FlowProgress$ {
    export type Inbound = {
        complete: boolean;
        currentStep: number;
        totalSteps: number;
        version: number;
    };

    export const inboundSchema: z.ZodType<FlowProgress, z.ZodTypeDef, Inbound> = z
        .object({
            complete: z.boolean(),
            currentStep: z.number(),
            totalSteps: z.number(),
            version: z.number(),
        })
        .transform((v) => {
            return {
                complete: v.complete,
                currentStep: v.currentStep,
                totalSteps: v.totalSteps,
                version: v.version,
            };
        });

    export type Outbound = {
        complete: boolean;
        currentStep: number;
        totalSteps: number;
        version: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FlowProgress> = z
        .object({
            complete: z.boolean(),
            currentStep: z.number(),
            totalSteps: z.number(),
            version: z.number(),
        })
        .transform((v) => {
            return {
                complete: v.complete,
                currentStep: v.currentStep,
                totalSteps: v.totalSteps,
                version: v.version,
            };
        });
}
