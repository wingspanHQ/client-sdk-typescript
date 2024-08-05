/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const CardProcessingFees = {
    Include: "Include",
    Exclude: "Exclude",
} as const;
export type CardProcessingFees = ClosedEnum<typeof CardProcessingFees>;

export const OffPlatformPayments = {
    Include: "Include",
    Exclude: "Exclude",
} as const;
export type OffPlatformPayments = ClosedEnum<typeof OffPlatformPayments>;

export const ReimbursableExpenses = {
    Include: "Include",
    Exclude: "Exclude",
} as const;
export type ReimbursableExpenses = ClosedEnum<typeof ReimbursableExpenses>;

export type CalculationSettings1099 = {
    cardProcessingFees?: CardProcessingFees | null | undefined;
    offPlatformPayments?: OffPlatformPayments | null | undefined;
    reimbursableExpenses?: ReimbursableExpenses | null | undefined;
    stateTaxId?: { [k: string]: string } | null | undefined;
    thresholdAmount?: number | null | undefined;
};

/** @internal */
export const CardProcessingFees$inboundSchema: z.ZodNativeEnum<typeof CardProcessingFees> =
    z.nativeEnum(CardProcessingFees);

/** @internal */
export const CardProcessingFees$outboundSchema: z.ZodNativeEnum<typeof CardProcessingFees> =
    CardProcessingFees$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CardProcessingFees$ {
    /** @deprecated use `CardProcessingFees$inboundSchema` instead. */
    export const inboundSchema = CardProcessingFees$inboundSchema;
    /** @deprecated use `CardProcessingFees$outboundSchema` instead. */
    export const outboundSchema = CardProcessingFees$outboundSchema;
}

/** @internal */
export const OffPlatformPayments$inboundSchema: z.ZodNativeEnum<typeof OffPlatformPayments> =
    z.nativeEnum(OffPlatformPayments);

/** @internal */
export const OffPlatformPayments$outboundSchema: z.ZodNativeEnum<typeof OffPlatformPayments> =
    OffPlatformPayments$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OffPlatformPayments$ {
    /** @deprecated use `OffPlatformPayments$inboundSchema` instead. */
    export const inboundSchema = OffPlatformPayments$inboundSchema;
    /** @deprecated use `OffPlatformPayments$outboundSchema` instead. */
    export const outboundSchema = OffPlatformPayments$outboundSchema;
}

/** @internal */
export const ReimbursableExpenses$inboundSchema: z.ZodNativeEnum<typeof ReimbursableExpenses> =
    z.nativeEnum(ReimbursableExpenses);

/** @internal */
export const ReimbursableExpenses$outboundSchema: z.ZodNativeEnum<typeof ReimbursableExpenses> =
    ReimbursableExpenses$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReimbursableExpenses$ {
    /** @deprecated use `ReimbursableExpenses$inboundSchema` instead. */
    export const inboundSchema = ReimbursableExpenses$inboundSchema;
    /** @deprecated use `ReimbursableExpenses$outboundSchema` instead. */
    export const outboundSchema = ReimbursableExpenses$outboundSchema;
}

/** @internal */
export const CalculationSettings1099$inboundSchema: z.ZodType<
    CalculationSettings1099,
    z.ZodTypeDef,
    unknown
> = z.object({
    cardProcessingFees: z.nullable(CardProcessingFees$inboundSchema).optional(),
    offPlatformPayments: z.nullable(OffPlatformPayments$inboundSchema).optional(),
    reimbursableExpenses: z.nullable(ReimbursableExpenses$inboundSchema).optional(),
    stateTaxId: z.nullable(z.record(z.string())).optional(),
    thresholdAmount: z.nullable(z.number()).optional(),
});

/** @internal */
export type CalculationSettings1099$Outbound = {
    cardProcessingFees?: string | null | undefined;
    offPlatformPayments?: string | null | undefined;
    reimbursableExpenses?: string | null | undefined;
    stateTaxId?: { [k: string]: string } | null | undefined;
    thresholdAmount?: number | null | undefined;
};

/** @internal */
export const CalculationSettings1099$outboundSchema: z.ZodType<
    CalculationSettings1099$Outbound,
    z.ZodTypeDef,
    CalculationSettings1099
> = z.object({
    cardProcessingFees: z.nullable(CardProcessingFees$outboundSchema).optional(),
    offPlatformPayments: z.nullable(OffPlatformPayments$outboundSchema).optional(),
    reimbursableExpenses: z.nullable(ReimbursableExpenses$outboundSchema).optional(),
    stateTaxId: z.nullable(z.record(z.string())).optional(),
    thresholdAmount: z.nullable(z.number()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CalculationSettings1099$ {
    /** @deprecated use `CalculationSettings1099$inboundSchema` instead. */
    export const inboundSchema = CalculationSettings1099$inboundSchema;
    /** @deprecated use `CalculationSettings1099$outboundSchema` instead. */
    export const outboundSchema = CalculationSettings1099$outboundSchema;
    /** @deprecated use `CalculationSettings1099$Outbound` instead. */
    export type Outbound = CalculationSettings1099$Outbound;
}
