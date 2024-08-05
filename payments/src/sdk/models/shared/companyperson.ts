/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type CompanyPerson = {
    memberId: string;
    ownershipPercentage?: number | null | undefined;
};

/** @internal */
export const CompanyPerson$inboundSchema: z.ZodType<CompanyPerson, z.ZodTypeDef, unknown> =
    z.object({
        memberId: z.string(),
        ownershipPercentage: z.nullable(z.number()).optional(),
    });

/** @internal */
export type CompanyPerson$Outbound = {
    memberId: string;
    ownershipPercentage?: number | null | undefined;
};

/** @internal */
export const CompanyPerson$outboundSchema: z.ZodType<
    CompanyPerson$Outbound,
    z.ZodTypeDef,
    CompanyPerson
> = z.object({
    memberId: z.string(),
    ownershipPercentage: z.nullable(z.number()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompanyPerson$ {
    /** @deprecated use `CompanyPerson$inboundSchema` instead. */
    export const inboundSchema = CompanyPerson$inboundSchema;
    /** @deprecated use `CompanyPerson$outboundSchema` instead. */
    export const outboundSchema = CompanyPerson$outboundSchema;
    /** @deprecated use `CompanyPerson$Outbound` instead. */
    export type Outbound = CompanyPerson$Outbound;
}
