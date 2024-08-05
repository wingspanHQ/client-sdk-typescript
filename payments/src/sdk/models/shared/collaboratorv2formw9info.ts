/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const CompanyStructure = {
    None: "None",
    SoleProprietorship: "SoleProprietorship",
    LlcSingleMember: "LlcSingleMember",
    LlcMultiMember: "LlcMultiMember",
    CorporationS: "CorporationS",
    LLCCorporationS: "LLCCorporationS",
    LLCCorporationC: "LLCCorporationC",
    LLCPartnership: "LLCPartnership",
    CorporationC: "CorporationC",
    Partnership: "Partnership",
} as const;
export type CompanyStructure = ClosedEnum<typeof CompanyStructure>;

export type CollaboratorV2FormW9Info = {
    addressLine1: string;
    addressLine2?: string | null | undefined;
    city: string;
    companyStructure: CompanyStructure;
    country: string;
    dob?: string | null | undefined;
    ein?: string | null | undefined;
    firstName?: string | null | undefined;
    lastName?: string | null | undefined;
    legalBusinessName?: string | null | undefined;
    postalCode: string;
    ssnLastFour?: string | null | undefined;
    state: string;
};

/** @internal */
export const CompanyStructure$inboundSchema: z.ZodNativeEnum<typeof CompanyStructure> =
    z.nativeEnum(CompanyStructure);

/** @internal */
export const CompanyStructure$outboundSchema: z.ZodNativeEnum<typeof CompanyStructure> =
    CompanyStructure$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompanyStructure$ {
    /** @deprecated use `CompanyStructure$inboundSchema` instead. */
    export const inboundSchema = CompanyStructure$inboundSchema;
    /** @deprecated use `CompanyStructure$outboundSchema` instead. */
    export const outboundSchema = CompanyStructure$outboundSchema;
}

/** @internal */
export const CollaboratorV2FormW9Info$inboundSchema: z.ZodType<
    CollaboratorV2FormW9Info,
    z.ZodTypeDef,
    unknown
> = z.object({
    addressLine1: z.string(),
    addressLine2: z.nullable(z.string()).optional(),
    city: z.string(),
    companyStructure: CompanyStructure$inboundSchema,
    country: z.string(),
    dob: z.nullable(z.string()).optional(),
    ein: z.nullable(z.string()).optional(),
    firstName: z.nullable(z.string()).optional(),
    lastName: z.nullable(z.string()).optional(),
    legalBusinessName: z.nullable(z.string()).optional(),
    postalCode: z.string(),
    ssnLastFour: z.nullable(z.string()).optional(),
    state: z.string(),
});

/** @internal */
export type CollaboratorV2FormW9Info$Outbound = {
    addressLine1: string;
    addressLine2?: string | null | undefined;
    city: string;
    companyStructure: string;
    country: string;
    dob?: string | null | undefined;
    ein?: string | null | undefined;
    firstName?: string | null | undefined;
    lastName?: string | null | undefined;
    legalBusinessName?: string | null | undefined;
    postalCode: string;
    ssnLastFour?: string | null | undefined;
    state: string;
};

/** @internal */
export const CollaboratorV2FormW9Info$outboundSchema: z.ZodType<
    CollaboratorV2FormW9Info$Outbound,
    z.ZodTypeDef,
    CollaboratorV2FormW9Info
> = z.object({
    addressLine1: z.string(),
    addressLine2: z.nullable(z.string()).optional(),
    city: z.string(),
    companyStructure: CompanyStructure$outboundSchema,
    country: z.string(),
    dob: z.nullable(z.string()).optional(),
    ein: z.nullable(z.string()).optional(),
    firstName: z.nullable(z.string()).optional(),
    lastName: z.nullable(z.string()).optional(),
    legalBusinessName: z.nullable(z.string()).optional(),
    postalCode: z.string(),
    ssnLastFour: z.nullable(z.string()).optional(),
    state: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CollaboratorV2FormW9Info$ {
    /** @deprecated use `CollaboratorV2FormW9Info$inboundSchema` instead. */
    export const inboundSchema = CollaboratorV2FormW9Info$inboundSchema;
    /** @deprecated use `CollaboratorV2FormW9Info$outboundSchema` instead. */
    export const outboundSchema = CollaboratorV2FormW9Info$outboundSchema;
    /** @deprecated use `CollaboratorV2FormW9Info$Outbound` instead. */
    export type Outbound = CollaboratorV2FormW9Info$Outbound;
}
