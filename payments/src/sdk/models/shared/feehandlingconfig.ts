/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type FeeHandlingConfig = {
    clientAbsolutePercentage?: number | null | undefined;
    clientPays?: number | null | undefined;
    memberPays?: number | null | undefined;
};

/** @internal */
export namespace FeeHandlingConfig$ {
    export type Inbound = {
        clientAbsolutePercentage?: number | null | undefined;
        clientPays?: number | null | undefined;
        memberPays?: number | null | undefined;
    };

    export const inboundSchema: z.ZodType<FeeHandlingConfig, z.ZodTypeDef, Inbound> = z
        .object({
            clientAbsolutePercentage: z.number().nullable().optional(),
            clientPays: z.number().nullable().optional(),
            memberPays: z.number().nullable().optional(),
        })
        .transform((v) => {
            return {
                ...(v.clientAbsolutePercentage === undefined
                    ? null
                    : { clientAbsolutePercentage: v.clientAbsolutePercentage }),
                ...(v.clientPays === undefined ? null : { clientPays: v.clientPays }),
                ...(v.memberPays === undefined ? null : { memberPays: v.memberPays }),
            };
        });

    export type Outbound = {
        clientAbsolutePercentage?: number | null | undefined;
        clientPays?: number | null | undefined;
        memberPays?: number | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FeeHandlingConfig> = z
        .object({
            clientAbsolutePercentage: z.number().nullable().optional(),
            clientPays: z.number().nullable().optional(),
            memberPays: z.number().nullable().optional(),
        })
        .transform((v) => {
            return {
                ...(v.clientAbsolutePercentage === undefined
                    ? null
                    : { clientAbsolutePercentage: v.clientAbsolutePercentage }),
                ...(v.clientPays === undefined ? null : { clientPays: v.clientPays }),
                ...(v.memberPays === undefined ? null : { memberPays: v.memberPays }),
            };
        });
}
