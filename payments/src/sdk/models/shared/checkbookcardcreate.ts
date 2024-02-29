/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Address, Address$ } from "./address";
import { z } from "zod";

export type CheckbookCardCreate = {
    address?: Address | null | undefined;
    cardNumber: string;
    cvv?: string | null | undefined;
    expMM: string;
    expYYYY: string;
    name: string;
};

/** @internal */
export namespace CheckbookCardCreate$ {
    export type Inbound = {
        address?: Address$.Inbound | null | undefined;
        cardNumber: string;
        cvv?: string | null | undefined;
        expMM: string;
        expYYYY: string;
        name: string;
    };

    export const inboundSchema: z.ZodType<CheckbookCardCreate, z.ZodTypeDef, Inbound> = z
        .object({
            address: z.nullable(Address$.inboundSchema).optional(),
            cardNumber: z.string(),
            cvv: z.nullable(z.string()).optional(),
            expMM: z.string(),
            expYYYY: z.string(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.address === undefined ? null : { address: v.address }),
                cardNumber: v.cardNumber,
                ...(v.cvv === undefined ? null : { cvv: v.cvv }),
                expMM: v.expMM,
                expYYYY: v.expYYYY,
                name: v.name,
            };
        });

    export type Outbound = {
        address?: Address$.Outbound | null | undefined;
        cardNumber: string;
        cvv?: string | null | undefined;
        expMM: string;
        expYYYY: string;
        name: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CheckbookCardCreate> = z
        .object({
            address: z.nullable(Address$.outboundSchema).optional(),
            cardNumber: z.string(),
            cvv: z.nullable(z.string()).optional(),
            expMM: z.string(),
            expYYYY: z.string(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.address === undefined ? null : { address: v.address }),
                cardNumber: v.cardNumber,
                ...(v.cvv === undefined ? null : { cvv: v.cvv }),
                expMM: v.expMM,
                expYYYY: v.expYYYY,
                name: v.name,
            };
        });
}
