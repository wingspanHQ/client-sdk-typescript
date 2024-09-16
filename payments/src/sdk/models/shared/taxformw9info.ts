/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const TaxFormW9InfoCompanyStructure = {
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
export type TaxFormW9InfoCompanyStructure = ClosedEnum<
  typeof TaxFormW9InfoCompanyStructure
>;

export const TaxFormW9InfoTinType = {
  Individual: "Individual",
  Business: "Business",
} as const;
export type TaxFormW9InfoTinType = ClosedEnum<typeof TaxFormW9InfoTinType>;

export type TaxFormW9Info = {
  addressLine1?: string | null | undefined;
  addressLine2?: string | null | undefined;
  city?: string | null | undefined;
  companyStructure?: TaxFormW9InfoCompanyStructure | null | undefined;
  country?: string | null | undefined;
  disregardedEntityName?: string | null | undefined;
  dob?: string | null | undefined;
  ein?: string | null | undefined;
  einLastFour?: string | null | undefined;
  exemptFatcaCode?: string | null | undefined;
  exemptPayeeCode?: string | null | undefined;
  firstName?: string | null | undefined;
  lastName?: string | null | undefined;
  legalBusinessName?: string | null | undefined;
  postalCode?: string | null | undefined;
  ssn?: string | null | undefined;
  ssnLastFour?: string | null | undefined;
  state?: string | null | undefined;
  tinType?: TaxFormW9InfoTinType | null | undefined;
};

/** @internal */
export const TaxFormW9InfoCompanyStructure$inboundSchema: z.ZodNativeEnum<
  typeof TaxFormW9InfoCompanyStructure
> = z.nativeEnum(TaxFormW9InfoCompanyStructure);

/** @internal */
export const TaxFormW9InfoCompanyStructure$outboundSchema: z.ZodNativeEnum<
  typeof TaxFormW9InfoCompanyStructure
> = TaxFormW9InfoCompanyStructure$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaxFormW9InfoCompanyStructure$ {
  /** @deprecated use `TaxFormW9InfoCompanyStructure$inboundSchema` instead. */
  export const inboundSchema = TaxFormW9InfoCompanyStructure$inboundSchema;
  /** @deprecated use `TaxFormW9InfoCompanyStructure$outboundSchema` instead. */
  export const outboundSchema = TaxFormW9InfoCompanyStructure$outboundSchema;
}

/** @internal */
export const TaxFormW9InfoTinType$inboundSchema: z.ZodNativeEnum<
  typeof TaxFormW9InfoTinType
> = z.nativeEnum(TaxFormW9InfoTinType);

/** @internal */
export const TaxFormW9InfoTinType$outboundSchema: z.ZodNativeEnum<
  typeof TaxFormW9InfoTinType
> = TaxFormW9InfoTinType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaxFormW9InfoTinType$ {
  /** @deprecated use `TaxFormW9InfoTinType$inboundSchema` instead. */
  export const inboundSchema = TaxFormW9InfoTinType$inboundSchema;
  /** @deprecated use `TaxFormW9InfoTinType$outboundSchema` instead. */
  export const outboundSchema = TaxFormW9InfoTinType$outboundSchema;
}

/** @internal */
export const TaxFormW9Info$inboundSchema: z.ZodType<
  TaxFormW9Info,
  z.ZodTypeDef,
  unknown
> = z.object({
  addressLine1: z.nullable(z.string()).optional(),
  addressLine2: z.nullable(z.string()).optional(),
  city: z.nullable(z.string()).optional(),
  companyStructure: z.nullable(TaxFormW9InfoCompanyStructure$inboundSchema)
    .optional(),
  country: z.nullable(z.string()).optional(),
  disregardedEntityName: z.nullable(z.string()).optional(),
  dob: z.nullable(z.string()).optional(),
  ein: z.nullable(z.string()).optional(),
  einLastFour: z.nullable(z.string()).optional(),
  exemptFatcaCode: z.nullable(z.string()).optional(),
  exemptPayeeCode: z.nullable(z.string()).optional(),
  firstName: z.nullable(z.string()).optional(),
  lastName: z.nullable(z.string()).optional(),
  legalBusinessName: z.nullable(z.string()).optional(),
  postalCode: z.nullable(z.string()).optional(),
  ssn: z.nullable(z.string()).optional(),
  ssnLastFour: z.nullable(z.string()).optional(),
  state: z.nullable(z.string()).optional(),
  tinType: z.nullable(TaxFormW9InfoTinType$inboundSchema).optional(),
});

/** @internal */
export type TaxFormW9Info$Outbound = {
  addressLine1?: string | null | undefined;
  addressLine2?: string | null | undefined;
  city?: string | null | undefined;
  companyStructure?: string | null | undefined;
  country?: string | null | undefined;
  disregardedEntityName?: string | null | undefined;
  dob?: string | null | undefined;
  ein?: string | null | undefined;
  einLastFour?: string | null | undefined;
  exemptFatcaCode?: string | null | undefined;
  exemptPayeeCode?: string | null | undefined;
  firstName?: string | null | undefined;
  lastName?: string | null | undefined;
  legalBusinessName?: string | null | undefined;
  postalCode?: string | null | undefined;
  ssn?: string | null | undefined;
  ssnLastFour?: string | null | undefined;
  state?: string | null | undefined;
  tinType?: string | null | undefined;
};

/** @internal */
export const TaxFormW9Info$outboundSchema: z.ZodType<
  TaxFormW9Info$Outbound,
  z.ZodTypeDef,
  TaxFormW9Info
> = z.object({
  addressLine1: z.nullable(z.string()).optional(),
  addressLine2: z.nullable(z.string()).optional(),
  city: z.nullable(z.string()).optional(),
  companyStructure: z.nullable(TaxFormW9InfoCompanyStructure$outboundSchema)
    .optional(),
  country: z.nullable(z.string()).optional(),
  disregardedEntityName: z.nullable(z.string()).optional(),
  dob: z.nullable(z.string()).optional(),
  ein: z.nullable(z.string()).optional(),
  einLastFour: z.nullable(z.string()).optional(),
  exemptFatcaCode: z.nullable(z.string()).optional(),
  exemptPayeeCode: z.nullable(z.string()).optional(),
  firstName: z.nullable(z.string()).optional(),
  lastName: z.nullable(z.string()).optional(),
  legalBusinessName: z.nullable(z.string()).optional(),
  postalCode: z.nullable(z.string()).optional(),
  ssn: z.nullable(z.string()).optional(),
  ssnLastFour: z.nullable(z.string()).optional(),
  state: z.nullable(z.string()).optional(),
  tinType: z.nullable(TaxFormW9InfoTinType$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaxFormW9Info$ {
  /** @deprecated use `TaxFormW9Info$inboundSchema` instead. */
  export const inboundSchema = TaxFormW9Info$inboundSchema;
  /** @deprecated use `TaxFormW9Info$outboundSchema` instead. */
  export const outboundSchema = TaxFormW9Info$outboundSchema;
  /** @deprecated use `TaxFormW9Info$Outbound` instead. */
  export type Outbound = TaxFormW9Info$Outbound;
}
