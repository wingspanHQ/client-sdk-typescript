/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const RequirementType = {
  Signature: "Signature",
} as const;
export type RequirementType = ClosedEnum<typeof RequirementType>;

export type EligibilityRequirement = {
  clientId: string;
  eligibilityRequirementId: string;
  requirementType: RequirementType;
  templateId?: string | null | undefined;
  validFor?: number | null | undefined;
};

/** @internal */
export const RequirementType$inboundSchema: z.ZodNativeEnum<
  typeof RequirementType
> = z.nativeEnum(RequirementType);

/** @internal */
export const RequirementType$outboundSchema: z.ZodNativeEnum<
  typeof RequirementType
> = RequirementType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RequirementType$ {
  /** @deprecated use `RequirementType$inboundSchema` instead. */
  export const inboundSchema = RequirementType$inboundSchema;
  /** @deprecated use `RequirementType$outboundSchema` instead. */
  export const outboundSchema = RequirementType$outboundSchema;
}

/** @internal */
export const EligibilityRequirement$inboundSchema: z.ZodType<
  EligibilityRequirement,
  z.ZodTypeDef,
  unknown
> = z.object({
  clientId: z.string(),
  eligibilityRequirementId: z.string(),
  requirementType: RequirementType$inboundSchema,
  templateId: z.nullable(z.string()).optional(),
  validFor: z.nullable(z.number()).optional(),
});

/** @internal */
export type EligibilityRequirement$Outbound = {
  clientId: string;
  eligibilityRequirementId: string;
  requirementType: string;
  templateId?: string | null | undefined;
  validFor?: number | null | undefined;
};

/** @internal */
export const EligibilityRequirement$outboundSchema: z.ZodType<
  EligibilityRequirement$Outbound,
  z.ZodTypeDef,
  EligibilityRequirement
> = z.object({
  clientId: z.string(),
  eligibilityRequirementId: z.string(),
  requirementType: RequirementType$outboundSchema,
  templateId: z.nullable(z.string()).optional(),
  validFor: z.nullable(z.number()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EligibilityRequirement$ {
  /** @deprecated use `EligibilityRequirement$inboundSchema` instead. */
  export const inboundSchema = EligibilityRequirement$inboundSchema;
  /** @deprecated use `EligibilityRequirement$outboundSchema` instead. */
  export const outboundSchema = EligibilityRequirement$outboundSchema;
  /** @deprecated use `EligibilityRequirement$Outbound` instead. */
  export type Outbound = EligibilityRequirement$Outbound;
}

export function eligibilityRequirementToJSON(
  eligibilityRequirement: EligibilityRequirement,
): string {
  return JSON.stringify(
    EligibilityRequirement$outboundSchema.parse(eligibilityRequirement),
  );
}

export function eligibilityRequirementFromJSON(
  jsonString: string,
): SafeParseResult<EligibilityRequirement, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EligibilityRequirement$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EligibilityRequirement' from JSON`,
  );
}
