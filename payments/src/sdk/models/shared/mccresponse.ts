/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type MccResponse = {
    code: string;
    title: string;
};

/** @internal */
export const MccResponse$inboundSchema: z.ZodType<MccResponse, z.ZodTypeDef, unknown> = z.object({
    code: z.string(),
    title: z.string(),
});

/** @internal */
export type MccResponse$Outbound = {
    code: string;
    title: string;
};

/** @internal */
export const MccResponse$outboundSchema: z.ZodType<
    MccResponse$Outbound,
    z.ZodTypeDef,
    MccResponse
> = z.object({
    code: z.string(),
    title: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MccResponse$ {
    /** @deprecated use `MccResponse$inboundSchema` instead. */
    export const inboundSchema = MccResponse$inboundSchema;
    /** @deprecated use `MccResponse$outboundSchema` instead. */
    export const outboundSchema = MccResponse$outboundSchema;
    /** @deprecated use `MccResponse$Outbound` instead. */
    export type Outbound = MccResponse$Outbound;
}
