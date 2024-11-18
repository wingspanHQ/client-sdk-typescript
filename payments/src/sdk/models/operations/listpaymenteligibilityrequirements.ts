/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type ListPaymentEligibilityRequirementsResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * HTTP response status code for this operation
   */
  statusCode: number;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse: Response;
  /**
   * See payment eligibility requirements on member
   */
  classes?: Array<shared.PaymentEligibility> | undefined;
};

/** @internal */
export const ListPaymentEligibilityRequirementsResponse$inboundSchema:
  z.ZodType<ListPaymentEligibilityRequirementsResponse, z.ZodTypeDef, unknown> =
    z.object({
      ContentType: z.string(),
      StatusCode: z.number().int(),
      RawResponse: z.instanceof(Response),
      classes: z.array(shared.PaymentEligibility$inboundSchema).optional(),
    }).transform((v) => {
      return remap$(v, {
        "ContentType": "contentType",
        "StatusCode": "statusCode",
        "RawResponse": "rawResponse",
      });
    });

/** @internal */
export type ListPaymentEligibilityRequirementsResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  classes?: Array<shared.PaymentEligibility$Outbound> | undefined;
};

/** @internal */
export const ListPaymentEligibilityRequirementsResponse$outboundSchema:
  z.ZodType<
    ListPaymentEligibilityRequirementsResponse$Outbound,
    z.ZodTypeDef,
    ListPaymentEligibilityRequirementsResponse
  > = z.object({
    contentType: z.string(),
    statusCode: z.number().int(),
    rawResponse: z.instanceof(Response).transform(() => {
      throw new Error("Response cannot be serialized");
    }),
    classes: z.array(shared.PaymentEligibility$outboundSchema).optional(),
  }).transform((v) => {
    return remap$(v, {
      contentType: "ContentType",
      statusCode: "StatusCode",
      rawResponse: "RawResponse",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPaymentEligibilityRequirementsResponse$ {
  /** @deprecated use `ListPaymentEligibilityRequirementsResponse$inboundSchema` instead. */
  export const inboundSchema =
    ListPaymentEligibilityRequirementsResponse$inboundSchema;
  /** @deprecated use `ListPaymentEligibilityRequirementsResponse$outboundSchema` instead. */
  export const outboundSchema =
    ListPaymentEligibilityRequirementsResponse$outboundSchema;
  /** @deprecated use `ListPaymentEligibilityRequirementsResponse$Outbound` instead. */
  export type Outbound = ListPaymentEligibilityRequirementsResponse$Outbound;
}

export function listPaymentEligibilityRequirementsResponseToJSON(
  listPaymentEligibilityRequirementsResponse:
    ListPaymentEligibilityRequirementsResponse,
): string {
  return JSON.stringify(
    ListPaymentEligibilityRequirementsResponse$outboundSchema.parse(
      listPaymentEligibilityRequirementsResponse,
    ),
  );
}

export function listPaymentEligibilityRequirementsResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  ListPaymentEligibilityRequirementsResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ListPaymentEligibilityRequirementsResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ListPaymentEligibilityRequirementsResponse' from JSON`,
  );
}
