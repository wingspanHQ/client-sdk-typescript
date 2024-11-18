/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type EstablishEligibilityRequirementResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * Eligibility Requirement
   */
  eligibilityRequirement?: shared.EligibilityRequirement | undefined;
  /**
   * HTTP response status code for this operation
   */
  statusCode: number;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse: Response;
};

/** @internal */
export const EstablishEligibilityRequirementResponse$inboundSchema: z.ZodType<
  EstablishEligibilityRequirementResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  EligibilityRequirement: shared.EligibilityRequirement$inboundSchema
    .optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "EligibilityRequirement": "eligibilityRequirement",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type EstablishEligibilityRequirementResponse$Outbound = {
  ContentType: string;
  EligibilityRequirement?: shared.EligibilityRequirement$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const EstablishEligibilityRequirementResponse$outboundSchema: z.ZodType<
  EstablishEligibilityRequirementResponse$Outbound,
  z.ZodTypeDef,
  EstablishEligibilityRequirementResponse
> = z.object({
  contentType: z.string(),
  eligibilityRequirement: shared.EligibilityRequirement$outboundSchema
    .optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    eligibilityRequirement: "EligibilityRequirement",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EstablishEligibilityRequirementResponse$ {
  /** @deprecated use `EstablishEligibilityRequirementResponse$inboundSchema` instead. */
  export const inboundSchema =
    EstablishEligibilityRequirementResponse$inboundSchema;
  /** @deprecated use `EstablishEligibilityRequirementResponse$outboundSchema` instead. */
  export const outboundSchema =
    EstablishEligibilityRequirementResponse$outboundSchema;
  /** @deprecated use `EstablishEligibilityRequirementResponse$Outbound` instead. */
  export type Outbound = EstablishEligibilityRequirementResponse$Outbound;
}

export function establishEligibilityRequirementResponseToJSON(
  establishEligibilityRequirementResponse:
    EstablishEligibilityRequirementResponse,
): string {
  return JSON.stringify(
    EstablishEligibilityRequirementResponse$outboundSchema.parse(
      establishEligibilityRequirementResponse,
    ),
  );
}

export function establishEligibilityRequirementResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  EstablishEligibilityRequirementResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      EstablishEligibilityRequirementResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'EstablishEligibilityRequirementResponse' from JSON`,
  );
}
