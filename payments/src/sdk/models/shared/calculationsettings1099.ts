/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum CardProcessingFees {
    Include = "Include",
    Exclude = "Exclude",
    LessThanNilGreaterThan = "<nil>",
}

export enum OffPlatformPayments {
    Include = "Include",
    Exclude = "Exclude",
    LessThanNilGreaterThan = "<nil>",
}

export enum ReimbursableExpenses {
    Include = "Include",
    Exclude = "Exclude",
    LessThanNilGreaterThan = "<nil>",
}

export type CalculationSettings1099 = {
    cardProcessingFees?: CardProcessingFees | null | undefined;
    offPlatformPayments?: OffPlatformPayments | null | undefined;
    reimbursableExpenses?: ReimbursableExpenses | null | undefined;
    stateTaxId?: Record<string, string> | null | undefined;
    thresholdAmount?: number | null | undefined;
};

/** @internal */
export const CardProcessingFees$ = z.nativeEnum(CardProcessingFees);

/** @internal */
export const OffPlatformPayments$ = z.nativeEnum(OffPlatformPayments);

/** @internal */
export const ReimbursableExpenses$ = z.nativeEnum(ReimbursableExpenses);

/** @internal */
export namespace CalculationSettings1099$ {
    export type Inbound = {
        cardProcessingFees?: CardProcessingFees | null | undefined;
        offPlatformPayments?: OffPlatformPayments | null | undefined;
        reimbursableExpenses?: ReimbursableExpenses | null | undefined;
        stateTaxId?: Record<string, string> | null | undefined;
        thresholdAmount?: number | null | undefined;
    };

    export const inboundSchema: z.ZodType<CalculationSettings1099, z.ZodTypeDef, Inbound> = z
        .object({
            cardProcessingFees: z.nullable(CardProcessingFees$).optional(),
            offPlatformPayments: z.nullable(OffPlatformPayments$).optional(),
            reimbursableExpenses: z.nullable(ReimbursableExpenses$).optional(),
            stateTaxId: z.nullable(z.record(z.string())).optional(),
            thresholdAmount: z.nullable(z.number()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.cardProcessingFees === undefined
                    ? null
                    : { cardProcessingFees: v.cardProcessingFees }),
                ...(v.offPlatformPayments === undefined
                    ? null
                    : { offPlatformPayments: v.offPlatformPayments }),
                ...(v.reimbursableExpenses === undefined
                    ? null
                    : { reimbursableExpenses: v.reimbursableExpenses }),
                ...(v.stateTaxId === undefined ? null : { stateTaxId: v.stateTaxId }),
                ...(v.thresholdAmount === undefined
                    ? null
                    : { thresholdAmount: v.thresholdAmount }),
            };
        });

    export type Outbound = {
        cardProcessingFees?: CardProcessingFees | null | undefined;
        offPlatformPayments?: OffPlatformPayments | null | undefined;
        reimbursableExpenses?: ReimbursableExpenses | null | undefined;
        stateTaxId?: Record<string, string> | null | undefined;
        thresholdAmount?: number | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CalculationSettings1099> = z
        .object({
            cardProcessingFees: z.nullable(CardProcessingFees$).optional(),
            offPlatformPayments: z.nullable(OffPlatformPayments$).optional(),
            reimbursableExpenses: z.nullable(ReimbursableExpenses$).optional(),
            stateTaxId: z.nullable(z.record(z.string())).optional(),
            thresholdAmount: z.nullable(z.number()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.cardProcessingFees === undefined
                    ? null
                    : { cardProcessingFees: v.cardProcessingFees }),
                ...(v.offPlatformPayments === undefined
                    ? null
                    : { offPlatformPayments: v.offPlatformPayments }),
                ...(v.reimbursableExpenses === undefined
                    ? null
                    : { reimbursableExpenses: v.reimbursableExpenses }),
                ...(v.stateTaxId === undefined ? null : { stateTaxId: v.stateTaxId }),
                ...(v.thresholdAmount === undefined
                    ? null
                    : { thresholdAmount: v.thresholdAmount }),
            };
        });
}
