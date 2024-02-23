/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { MemberOccupation, MemberOccupation$ } from "./memberoccupation";
import { z } from "zod";

export enum FilingCode {
    S = "S",
    M = "M",
    H = "H",
    Ms = "MS",
    Qw = "QW",
}

export enum FilingType {
    Personal = "Personal",
    Business = "Business",
}

export type MemberTaxInfo = {
    expensesEstimateForYear?: number | null | undefined;
    filingCode?: FilingCode | null | undefined;
    filingType?: FilingType | null | undefined;
    incomeEstimateForYear?: number | null | undefined;
    numExemptions?: number | null | undefined;
    occupations?: Array<MemberOccupation> | null | undefined;
    stateOfResidence?: string | null | undefined;
};

/** @internal */
export const FilingCode$ = z.nativeEnum(FilingCode);

/** @internal */
export const FilingType$ = z.nativeEnum(FilingType);

/** @internal */
export namespace MemberTaxInfo$ {
    export type Inbound = {
        expensesEstimateForYear?: number | null | undefined;
        filingCode?: FilingCode | null | undefined;
        filingType?: FilingType | null | undefined;
        incomeEstimateForYear?: number | null | undefined;
        numExemptions?: number | null | undefined;
        occupations?: Array<MemberOccupation$.Inbound> | null | undefined;
        stateOfResidence?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<MemberTaxInfo, z.ZodTypeDef, Inbound> = z
        .object({
            expensesEstimateForYear: z.nullable(z.number()).optional(),
            filingCode: z.nullable(FilingCode$).optional(),
            filingType: z.nullable(FilingType$).optional(),
            incomeEstimateForYear: z.nullable(z.number()).optional(),
            numExemptions: z.nullable(z.number()).optional(),
            occupations: z.nullable(z.array(MemberOccupation$.inboundSchema)).optional(),
            stateOfResidence: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.expensesEstimateForYear === undefined
                    ? null
                    : { expensesEstimateForYear: v.expensesEstimateForYear }),
                ...(v.filingCode === undefined ? null : { filingCode: v.filingCode }),
                ...(v.filingType === undefined ? null : { filingType: v.filingType }),
                ...(v.incomeEstimateForYear === undefined
                    ? null
                    : { incomeEstimateForYear: v.incomeEstimateForYear }),
                ...(v.numExemptions === undefined ? null : { numExemptions: v.numExemptions }),
                ...(v.occupations === undefined ? null : { occupations: v.occupations }),
                ...(v.stateOfResidence === undefined
                    ? null
                    : { stateOfResidence: v.stateOfResidence }),
            };
        });

    export type Outbound = {
        expensesEstimateForYear?: number | null | undefined;
        filingCode?: FilingCode | null | undefined;
        filingType?: FilingType | null | undefined;
        incomeEstimateForYear?: number | null | undefined;
        numExemptions?: number | null | undefined;
        occupations?: Array<MemberOccupation$.Outbound> | null | undefined;
        stateOfResidence?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MemberTaxInfo> = z
        .object({
            expensesEstimateForYear: z.nullable(z.number()).optional(),
            filingCode: z.nullable(FilingCode$).optional(),
            filingType: z.nullable(FilingType$).optional(),
            incomeEstimateForYear: z.nullable(z.number()).optional(),
            numExemptions: z.nullable(z.number()).optional(),
            occupations: z.nullable(z.array(MemberOccupation$.outboundSchema)).optional(),
            stateOfResidence: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.expensesEstimateForYear === undefined
                    ? null
                    : { expensesEstimateForYear: v.expensesEstimateForYear }),
                ...(v.filingCode === undefined ? null : { filingCode: v.filingCode }),
                ...(v.filingType === undefined ? null : { filingType: v.filingType }),
                ...(v.incomeEstimateForYear === undefined
                    ? null
                    : { incomeEstimateForYear: v.incomeEstimateForYear }),
                ...(v.numExemptions === undefined ? null : { numExemptions: v.numExemptions }),
                ...(v.occupations === undefined ? null : { occupations: v.occupations }),
                ...(v.stateOfResidence === undefined
                    ? null
                    : { stateOfResidence: v.stateOfResidence }),
            };
        });
}
