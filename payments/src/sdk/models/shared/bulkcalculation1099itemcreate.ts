/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum BulkCalculation1099ItemCreateCalculationType {
    Balances = "Balances",
    Submissions = "Submissions",
    LessThanNilGreaterThan = "<nil>",
}

export type BulkCalculation1099ItemCreate = {
    calculationType?: BulkCalculation1099ItemCreateCalculationType | null | undefined;
    clientId: string;
    labels?: Record<string, string> | null | undefined;
    year: number;
};

/** @internal */
export const BulkCalculation1099ItemCreateCalculationType$ = z.nativeEnum(
    BulkCalculation1099ItemCreateCalculationType
);

/** @internal */
export namespace BulkCalculation1099ItemCreate$ {
    export type Inbound = {
        calculationType?: BulkCalculation1099ItemCreateCalculationType | null | undefined;
        clientId: string;
        labels?: Record<string, string> | null | undefined;
        year: number;
    };

    export const inboundSchema: z.ZodType<BulkCalculation1099ItemCreate, z.ZodTypeDef, Inbound> = z
        .object({
            calculationType: z.nullable(BulkCalculation1099ItemCreateCalculationType$).optional(),
            clientId: z.string(),
            labels: z.nullable(z.record(z.string())).optional(),
            year: z.number(),
        })
        .transform((v) => {
            return {
                ...(v.calculationType === undefined
                    ? null
                    : { calculationType: v.calculationType }),
                clientId: v.clientId,
                ...(v.labels === undefined ? null : { labels: v.labels }),
                year: v.year,
            };
        });

    export type Outbound = {
        calculationType?: BulkCalculation1099ItemCreateCalculationType | null | undefined;
        clientId: string;
        labels?: Record<string, string> | null | undefined;
        year: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BulkCalculation1099ItemCreate> =
        z
            .object({
                calculationType: z
                    .nullable(BulkCalculation1099ItemCreateCalculationType$)
                    .optional(),
                clientId: z.string(),
                labels: z.nullable(z.record(z.string())).optional(),
                year: z.number(),
            })
            .transform((v) => {
                return {
                    ...(v.calculationType === undefined
                        ? null
                        : { calculationType: v.calculationType }),
                    clientId: v.clientId,
                    ...(v.labels === undefined ? null : { labels: v.labels }),
                    year: v.year,
                };
            });
}
