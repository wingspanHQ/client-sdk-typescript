/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { RedactedMember, RedactedMember$ } from "./redactedmember";
import { z } from "zod";

export type Fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c = {
    approvedBy?: RedactedMember | null | undefined;
    preApprovedBy?: RedactedMember | null | undefined;
};

/** @internal */
export namespace Fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c$ {
    export type Inbound = {
        approvedBy?: RedactedMember$.Inbound | null | undefined;
        preApprovedBy?: RedactedMember$.Inbound | null | undefined;
    };

    export const inboundSchema: z.ZodType<
        Fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            approvedBy: z.nullable(RedactedMember$.inboundSchema).optional(),
            preApprovedBy: z.nullable(RedactedMember$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.approvedBy === undefined ? null : { approvedBy: v.approvedBy }),
                ...(v.preApprovedBy === undefined ? null : { preApprovedBy: v.preApprovedBy }),
            };
        });

    export type Outbound = {
        approvedBy?: RedactedMember$.Outbound | null | undefined;
        preApprovedBy?: RedactedMember$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        Fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c
    > = z
        .object({
            approvedBy: z.nullable(RedactedMember$.outboundSchema).optional(),
            preApprovedBy: z.nullable(RedactedMember$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.approvedBy === undefined ? null : { approvedBy: v.approvedBy }),
                ...(v.preApprovedBy === undefined ? null : { preApprovedBy: v.preApprovedBy }),
            };
        });
}
