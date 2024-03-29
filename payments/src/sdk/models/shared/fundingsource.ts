/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum FundingSourceCurrency {
    Usd = "USD",
    Cad = "CAD",
}

export enum FundingSourceType {
    InternalAccount = "InternalAccount",
    Account = "Account",
    PaymentCard = "PaymentCard",
}

export type FundingSource = {
    fundingSourceCurrency: FundingSourceCurrency;
    fundingSourceId: string;
    fundingSourceType: FundingSourceType;
};

/** @internal */
export const FundingSourceCurrency$ = z.nativeEnum(FundingSourceCurrency);

/** @internal */
export const FundingSourceType$ = z.nativeEnum(FundingSourceType);

/** @internal */
export namespace FundingSource$ {
    export type Inbound = {
        fundingSourceCurrency: FundingSourceCurrency;
        fundingSourceId: string;
        fundingSourceType: FundingSourceType;
    };

    export const inboundSchema: z.ZodType<FundingSource, z.ZodTypeDef, Inbound> = z
        .object({
            fundingSourceCurrency: FundingSourceCurrency$,
            fundingSourceId: z.string(),
            fundingSourceType: FundingSourceType$,
        })
        .transform((v) => {
            return {
                fundingSourceCurrency: v.fundingSourceCurrency,
                fundingSourceId: v.fundingSourceId,
                fundingSourceType: v.fundingSourceType,
            };
        });

    export type Outbound = {
        fundingSourceCurrency: FundingSourceCurrency;
        fundingSourceId: string;
        fundingSourceType: FundingSourceType;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FundingSource> = z
        .object({
            fundingSourceCurrency: FundingSourceCurrency$,
            fundingSourceId: z.string(),
            fundingSourceType: FundingSourceType$,
        })
        .transform((v) => {
            return {
                fundingSourceCurrency: v.fundingSourceCurrency,
                fundingSourceId: v.fundingSourceId,
                fundingSourceType: v.fundingSourceType,
            };
        });
}
