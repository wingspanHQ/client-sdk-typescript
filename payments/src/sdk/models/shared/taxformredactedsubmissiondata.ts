/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { RedactedTaxFormW9Info, RedactedTaxFormW9Info$ } from "./redactedtaxformw9info";
import { z } from "zod";

export enum TaxFormRedactedSubmissionDataDeliveryMethod {
    Electronic = "Electronic",
    Mail = "Mail",
}

export type TaxFormRedactedSubmissionData = {
    adjustments?: number | null | undefined;
    deliveryMethod?: TaxFormRedactedSubmissionDataDeliveryMethod | null | undefined;
    filingStateCode?: string | null | undefined;
    paymentProcessingFees?: number | null | undefined;
    platformIncome?: number | null | undefined;
    totalAmount?: number | null | undefined;
    w9Info?: RedactedTaxFormW9Info | null | undefined;
};

/** @internal */
export const TaxFormRedactedSubmissionDataDeliveryMethod$ = z.nativeEnum(
    TaxFormRedactedSubmissionDataDeliveryMethod
);

/** @internal */
export namespace TaxFormRedactedSubmissionData$ {
    export type Inbound = {
        adjustments?: number | null | undefined;
        deliveryMethod?: TaxFormRedactedSubmissionDataDeliveryMethod | null | undefined;
        filingStateCode?: string | null | undefined;
        paymentProcessingFees?: number | null | undefined;
        platformIncome?: number | null | undefined;
        totalAmount?: number | null | undefined;
        w9Info?: RedactedTaxFormW9Info$.Inbound | null | undefined;
    };

    export const inboundSchema: z.ZodType<TaxFormRedactedSubmissionData, z.ZodTypeDef, Inbound> = z
        .object({
            adjustments: z.nullable(z.number()).optional(),
            deliveryMethod: z.nullable(TaxFormRedactedSubmissionDataDeliveryMethod$).optional(),
            filingStateCode: z.nullable(z.string()).optional(),
            paymentProcessingFees: z.nullable(z.number()).optional(),
            platformIncome: z.nullable(z.number()).optional(),
            totalAmount: z.nullable(z.number()).optional(),
            w9Info: z.nullable(RedactedTaxFormW9Info$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.adjustments === undefined ? null : { adjustments: v.adjustments }),
                ...(v.deliveryMethod === undefined ? null : { deliveryMethod: v.deliveryMethod }),
                ...(v.filingStateCode === undefined
                    ? null
                    : { filingStateCode: v.filingStateCode }),
                ...(v.paymentProcessingFees === undefined
                    ? null
                    : { paymentProcessingFees: v.paymentProcessingFees }),
                ...(v.platformIncome === undefined ? null : { platformIncome: v.platformIncome }),
                ...(v.totalAmount === undefined ? null : { totalAmount: v.totalAmount }),
                ...(v.w9Info === undefined ? null : { w9Info: v.w9Info }),
            };
        });

    export type Outbound = {
        adjustments?: number | null | undefined;
        deliveryMethod?: TaxFormRedactedSubmissionDataDeliveryMethod | null | undefined;
        filingStateCode?: string | null | undefined;
        paymentProcessingFees?: number | null | undefined;
        platformIncome?: number | null | undefined;
        totalAmount?: number | null | undefined;
        w9Info?: RedactedTaxFormW9Info$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaxFormRedactedSubmissionData> =
        z
            .object({
                adjustments: z.nullable(z.number()).optional(),
                deliveryMethod: z.nullable(TaxFormRedactedSubmissionDataDeliveryMethod$).optional(),
                filingStateCode: z.nullable(z.string()).optional(),
                paymentProcessingFees: z.nullable(z.number()).optional(),
                platformIncome: z.nullable(z.number()).optional(),
                totalAmount: z.nullable(z.number()).optional(),
                w9Info: z.nullable(RedactedTaxFormW9Info$.outboundSchema).optional(),
            })
            .transform((v) => {
                return {
                    ...(v.adjustments === undefined ? null : { adjustments: v.adjustments }),
                    ...(v.deliveryMethod === undefined
                        ? null
                        : { deliveryMethod: v.deliveryMethod }),
                    ...(v.filingStateCode === undefined
                        ? null
                        : { filingStateCode: v.filingStateCode }),
                    ...(v.paymentProcessingFees === undefined
                        ? null
                        : { paymentProcessingFees: v.paymentProcessingFees }),
                    ...(v.platformIncome === undefined
                        ? null
                        : { platformIncome: v.platformIncome }),
                    ...(v.totalAmount === undefined ? null : { totalAmount: v.totalAmount }),
                    ...(v.w9Info === undefined ? null : { w9Info: v.w9Info }),
                };
            });
}