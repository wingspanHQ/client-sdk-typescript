/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    Address,
    Address$inboundSchema,
    Address$Outbound,
    Address$outboundSchema,
} from "./address.js";
import * as z from "zod";

export type CheckbookCardCreate = {
    address?: Address | null | undefined;
    cardNumber: string;
    cvv?: string | null | undefined;
    expMM: string;
    expYYYY: string;
    name: string;
};

/** @internal */
export const CheckbookCardCreate$inboundSchema: z.ZodType<
    CheckbookCardCreate,
    z.ZodTypeDef,
    unknown
> = z.object({
    address: z.nullable(Address$inboundSchema).optional(),
    cardNumber: z.string(),
    cvv: z.nullable(z.string()).optional(),
    expMM: z.string(),
    expYYYY: z.string(),
    name: z.string(),
});

/** @internal */
export type CheckbookCardCreate$Outbound = {
    address?: Address$Outbound | null | undefined;
    cardNumber: string;
    cvv?: string | null | undefined;
    expMM: string;
    expYYYY: string;
    name: string;
};

/** @internal */
export const CheckbookCardCreate$outboundSchema: z.ZodType<
    CheckbookCardCreate$Outbound,
    z.ZodTypeDef,
    CheckbookCardCreate
> = z.object({
    address: z.nullable(Address$outboundSchema).optional(),
    cardNumber: z.string(),
    cvv: z.nullable(z.string()).optional(),
    expMM: z.string(),
    expYYYY: z.string(),
    name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckbookCardCreate$ {
    /** @deprecated use `CheckbookCardCreate$inboundSchema` instead. */
    export const inboundSchema = CheckbookCardCreate$inboundSchema;
    /** @deprecated use `CheckbookCardCreate$outboundSchema` instead. */
    export const outboundSchema = CheckbookCardCreate$outboundSchema;
    /** @deprecated use `CheckbookCardCreate$Outbound` instead. */
    export type Outbound = CheckbookCardCreate$Outbound;
}
