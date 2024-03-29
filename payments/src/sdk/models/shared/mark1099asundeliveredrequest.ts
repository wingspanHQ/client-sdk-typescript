/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type Mark1099AsUndeliveredRequest = {
    memberId: string;
    submissionIndex: number;
    year: number;
};

/** @internal */
export namespace Mark1099AsUndeliveredRequest$ {
    export type Inbound = {
        memberId: string;
        submissionIndex: number;
        year: number;
    };

    export const inboundSchema: z.ZodType<Mark1099AsUndeliveredRequest, z.ZodTypeDef, Inbound> = z
        .object({
            memberId: z.string(),
            submissionIndex: z.number(),
            year: z.number(),
        })
        .transform((v) => {
            return {
                memberId: v.memberId,
                submissionIndex: v.submissionIndex,
                year: v.year,
            };
        });

    export type Outbound = {
        memberId: string;
        submissionIndex: number;
        year: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Mark1099AsUndeliveredRequest> = z
        .object({
            memberId: z.string(),
            submissionIndex: z.number(),
            year: z.number(),
        })
        .transform((v) => {
            return {
                memberId: v.memberId,
                submissionIndex: v.submissionIndex,
                year: v.year,
            };
        });
}
