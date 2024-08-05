/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const FrequencyUpdateInterval = {
    Week: "Week",
    Month: "Month",
} as const;
export type FrequencyUpdateInterval = ClosedEnum<typeof FrequencyUpdateInterval>;

export type FrequencyUpdate = {
    daily?: boolean | null | undefined;
    dayInInterval?: number | null | undefined;
    endDate?: string | null | undefined;
    every?: number | null | undefined;
    interval?: FrequencyUpdateInterval | null | undefined;
    startDate?: string | null | undefined;
    twicePerMonth?: boolean | null | undefined;
};

/** @internal */
export const FrequencyUpdateInterval$inboundSchema: z.ZodNativeEnum<
    typeof FrequencyUpdateInterval
> = z.nativeEnum(FrequencyUpdateInterval);

/** @internal */
export const FrequencyUpdateInterval$outboundSchema: z.ZodNativeEnum<
    typeof FrequencyUpdateInterval
> = FrequencyUpdateInterval$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FrequencyUpdateInterval$ {
    /** @deprecated use `FrequencyUpdateInterval$inboundSchema` instead. */
    export const inboundSchema = FrequencyUpdateInterval$inboundSchema;
    /** @deprecated use `FrequencyUpdateInterval$outboundSchema` instead. */
    export const outboundSchema = FrequencyUpdateInterval$outboundSchema;
}

/** @internal */
export const FrequencyUpdate$inboundSchema: z.ZodType<FrequencyUpdate, z.ZodTypeDef, unknown> =
    z.object({
        daily: z.nullable(z.boolean()).optional(),
        dayInInterval: z.nullable(z.number()).optional(),
        endDate: z.nullable(z.string()).optional(),
        every: z.nullable(z.number()).optional(),
        interval: z.nullable(FrequencyUpdateInterval$inboundSchema).optional(),
        startDate: z.nullable(z.string()).optional(),
        twicePerMonth: z.nullable(z.boolean()).optional(),
    });

/** @internal */
export type FrequencyUpdate$Outbound = {
    daily?: boolean | null | undefined;
    dayInInterval?: number | null | undefined;
    endDate?: string | null | undefined;
    every?: number | null | undefined;
    interval?: string | null | undefined;
    startDate?: string | null | undefined;
    twicePerMonth?: boolean | null | undefined;
};

/** @internal */
export const FrequencyUpdate$outboundSchema: z.ZodType<
    FrequencyUpdate$Outbound,
    z.ZodTypeDef,
    FrequencyUpdate
> = z.object({
    daily: z.nullable(z.boolean()).optional(),
    dayInInterval: z.nullable(z.number()).optional(),
    endDate: z.nullable(z.string()).optional(),
    every: z.nullable(z.number()).optional(),
    interval: z.nullable(FrequencyUpdateInterval$outboundSchema).optional(),
    startDate: z.nullable(z.string()).optional(),
    twicePerMonth: z.nullable(z.boolean()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FrequencyUpdate$ {
    /** @deprecated use `FrequencyUpdate$inboundSchema` instead. */
    export const inboundSchema = FrequencyUpdate$inboundSchema;
    /** @deprecated use `FrequencyUpdate$outboundSchema` instead. */
    export const outboundSchema = FrequencyUpdate$outboundSchema;
    /** @deprecated use `FrequencyUpdate$Outbound` instead. */
    export type Outbound = FrequencyUpdate$Outbound;
}
