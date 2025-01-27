/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Form1099CorrectionAddress = {};

export const Form1099CorrectionCompanyStructure = {
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
export type Form1099CorrectionCompanyStructure = ClosedEnum<
  typeof Form1099CorrectionCompanyStructure
>;

export type Form1099Correction = {
  address?: Form1099CorrectionAddress | null | undefined;
  companyStructure?: Form1099CorrectionCompanyStructure | null | undefined;
  ein?: string | null | undefined;
  firstName?: string | null | undefined;
  lastName?: string | null | undefined;
  legalBusinessName?: string | null | undefined;
  ssn?: string | null | undefined;
  totalAmount?: number | null | undefined;
};

/** @internal */
export const Form1099CorrectionAddress$inboundSchema: z.ZodType<
  Form1099CorrectionAddress,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type Form1099CorrectionAddress$Outbound = {};

/** @internal */
export const Form1099CorrectionAddress$outboundSchema: z.ZodType<
  Form1099CorrectionAddress$Outbound,
  z.ZodTypeDef,
  Form1099CorrectionAddress
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Form1099CorrectionAddress$ {
  /** @deprecated use `Form1099CorrectionAddress$inboundSchema` instead. */
  export const inboundSchema = Form1099CorrectionAddress$inboundSchema;
  /** @deprecated use `Form1099CorrectionAddress$outboundSchema` instead. */
  export const outboundSchema = Form1099CorrectionAddress$outboundSchema;
  /** @deprecated use `Form1099CorrectionAddress$Outbound` instead. */
  export type Outbound = Form1099CorrectionAddress$Outbound;
}

export function form1099CorrectionAddressToJSON(
  form1099CorrectionAddress: Form1099CorrectionAddress,
): string {
  return JSON.stringify(
    Form1099CorrectionAddress$outboundSchema.parse(form1099CorrectionAddress),
  );
}

export function form1099CorrectionAddressFromJSON(
  jsonString: string,
): SafeParseResult<Form1099CorrectionAddress, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Form1099CorrectionAddress$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Form1099CorrectionAddress' from JSON`,
  );
}

/** @internal */
export const Form1099CorrectionCompanyStructure$inboundSchema: z.ZodNativeEnum<
  typeof Form1099CorrectionCompanyStructure
> = z.nativeEnum(Form1099CorrectionCompanyStructure);

/** @internal */
export const Form1099CorrectionCompanyStructure$outboundSchema: z.ZodNativeEnum<
  typeof Form1099CorrectionCompanyStructure
> = Form1099CorrectionCompanyStructure$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Form1099CorrectionCompanyStructure$ {
  /** @deprecated use `Form1099CorrectionCompanyStructure$inboundSchema` instead. */
  export const inboundSchema = Form1099CorrectionCompanyStructure$inboundSchema;
  /** @deprecated use `Form1099CorrectionCompanyStructure$outboundSchema` instead. */
  export const outboundSchema =
    Form1099CorrectionCompanyStructure$outboundSchema;
}

/** @internal */
export const Form1099Correction$inboundSchema: z.ZodType<
  Form1099Correction,
  z.ZodTypeDef,
  unknown
> = z.object({
  address: z.nullable(z.lazy(() => Form1099CorrectionAddress$inboundSchema))
    .optional(),
  companyStructure: z.nullable(Form1099CorrectionCompanyStructure$inboundSchema)
    .optional(),
  ein: z.nullable(z.string()).optional(),
  firstName: z.nullable(z.string()).optional(),
  lastName: z.nullable(z.string()).optional(),
  legalBusinessName: z.nullable(z.string()).optional(),
  ssn: z.nullable(z.string()).optional(),
  totalAmount: z.nullable(z.number()).optional(),
});

/** @internal */
export type Form1099Correction$Outbound = {
  address?: Form1099CorrectionAddress$Outbound | null | undefined;
  companyStructure?: string | null | undefined;
  ein?: string | null | undefined;
  firstName?: string | null | undefined;
  lastName?: string | null | undefined;
  legalBusinessName?: string | null | undefined;
  ssn?: string | null | undefined;
  totalAmount?: number | null | undefined;
};

/** @internal */
export const Form1099Correction$outboundSchema: z.ZodType<
  Form1099Correction$Outbound,
  z.ZodTypeDef,
  Form1099Correction
> = z.object({
  address: z.nullable(z.lazy(() => Form1099CorrectionAddress$outboundSchema))
    .optional(),
  companyStructure: z.nullable(
    Form1099CorrectionCompanyStructure$outboundSchema,
  ).optional(),
  ein: z.nullable(z.string()).optional(),
  firstName: z.nullable(z.string()).optional(),
  lastName: z.nullable(z.string()).optional(),
  legalBusinessName: z.nullable(z.string()).optional(),
  ssn: z.nullable(z.string()).optional(),
  totalAmount: z.nullable(z.number()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Form1099Correction$ {
  /** @deprecated use `Form1099Correction$inboundSchema` instead. */
  export const inboundSchema = Form1099Correction$inboundSchema;
  /** @deprecated use `Form1099Correction$outboundSchema` instead. */
  export const outboundSchema = Form1099Correction$outboundSchema;
  /** @deprecated use `Form1099Correction$Outbound` instead. */
  export type Outbound = Form1099Correction$Outbound;
}

export function form1099CorrectionToJSON(
  form1099Correction: Form1099Correction,
): string {
  return JSON.stringify(
    Form1099Correction$outboundSchema.parse(form1099Correction),
  );
}

export function form1099CorrectionFromJSON(
  jsonString: string,
): SafeParseResult<Form1099Correction, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Form1099Correction$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Form1099Correction' from JSON`,
  );
}
