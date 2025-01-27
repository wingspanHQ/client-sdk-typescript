/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type UpdatePaymentEligibilityRequirementRequest = {
  paymentEligibilityUpdateRequest?:
    | shared.PaymentEligibilityUpdateRequest
    | undefined;
  /**
   * Unique identifier
   */
  id: string;
};

export type UpdatePaymentEligibilityRequirementResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * See payment eligibility requirements on member
   */
  paymentEligibility?: shared.PaymentEligibility | undefined;
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
export const UpdatePaymentEligibilityRequirementRequest$inboundSchema:
  z.ZodType<UpdatePaymentEligibilityRequirementRequest, z.ZodTypeDef, unknown> =
    z.object({
      PaymentEligibilityUpdateRequest: shared
        .PaymentEligibilityUpdateRequest$inboundSchema.optional(),
      id: z.string(),
    }).transform((v) => {
      return remap$(v, {
        "PaymentEligibilityUpdateRequest": "paymentEligibilityUpdateRequest",
      });
    });

/** @internal */
export type UpdatePaymentEligibilityRequirementRequest$Outbound = {
  PaymentEligibilityUpdateRequest?:
    | shared.PaymentEligibilityUpdateRequest$Outbound
    | undefined;
  id: string;
};

/** @internal */
export const UpdatePaymentEligibilityRequirementRequest$outboundSchema:
  z.ZodType<
    UpdatePaymentEligibilityRequirementRequest$Outbound,
    z.ZodTypeDef,
    UpdatePaymentEligibilityRequirementRequest
  > = z.object({
    paymentEligibilityUpdateRequest: shared
      .PaymentEligibilityUpdateRequest$outboundSchema.optional(),
    id: z.string(),
  }).transform((v) => {
    return remap$(v, {
      paymentEligibilityUpdateRequest: "PaymentEligibilityUpdateRequest",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatePaymentEligibilityRequirementRequest$ {
  /** @deprecated use `UpdatePaymentEligibilityRequirementRequest$inboundSchema` instead. */
  export const inboundSchema =
    UpdatePaymentEligibilityRequirementRequest$inboundSchema;
  /** @deprecated use `UpdatePaymentEligibilityRequirementRequest$outboundSchema` instead. */
  export const outboundSchema =
    UpdatePaymentEligibilityRequirementRequest$outboundSchema;
  /** @deprecated use `UpdatePaymentEligibilityRequirementRequest$Outbound` instead. */
  export type Outbound = UpdatePaymentEligibilityRequirementRequest$Outbound;
}

export function updatePaymentEligibilityRequirementRequestToJSON(
  updatePaymentEligibilityRequirementRequest:
    UpdatePaymentEligibilityRequirementRequest,
): string {
  return JSON.stringify(
    UpdatePaymentEligibilityRequirementRequest$outboundSchema.parse(
      updatePaymentEligibilityRequirementRequest,
    ),
  );
}

export function updatePaymentEligibilityRequirementRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  UpdatePaymentEligibilityRequirementRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      UpdatePaymentEligibilityRequirementRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'UpdatePaymentEligibilityRequirementRequest' from JSON`,
  );
}

/** @internal */
export const UpdatePaymentEligibilityRequirementResponse$inboundSchema:
  z.ZodType<
    UpdatePaymentEligibilityRequirementResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    ContentType: z.string(),
    PaymentEligibility: shared.PaymentEligibility$inboundSchema.optional(),
    StatusCode: z.number().int(),
    RawResponse: z.instanceof(Response),
  }).transform((v) => {
    return remap$(v, {
      "ContentType": "contentType",
      "PaymentEligibility": "paymentEligibility",
      "StatusCode": "statusCode",
      "RawResponse": "rawResponse",
    });
  });

/** @internal */
export type UpdatePaymentEligibilityRequirementResponse$Outbound = {
  ContentType: string;
  PaymentEligibility?: shared.PaymentEligibility$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const UpdatePaymentEligibilityRequirementResponse$outboundSchema:
  z.ZodType<
    UpdatePaymentEligibilityRequirementResponse$Outbound,
    z.ZodTypeDef,
    UpdatePaymentEligibilityRequirementResponse
  > = z.object({
    contentType: z.string(),
    paymentEligibility: shared.PaymentEligibility$outboundSchema.optional(),
    statusCode: z.number().int(),
    rawResponse: z.instanceof(Response).transform(() => {
      throw new Error("Response cannot be serialized");
    }),
  }).transform((v) => {
    return remap$(v, {
      contentType: "ContentType",
      paymentEligibility: "PaymentEligibility",
      statusCode: "StatusCode",
      rawResponse: "RawResponse",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatePaymentEligibilityRequirementResponse$ {
  /** @deprecated use `UpdatePaymentEligibilityRequirementResponse$inboundSchema` instead. */
  export const inboundSchema =
    UpdatePaymentEligibilityRequirementResponse$inboundSchema;
  /** @deprecated use `UpdatePaymentEligibilityRequirementResponse$outboundSchema` instead. */
  export const outboundSchema =
    UpdatePaymentEligibilityRequirementResponse$outboundSchema;
  /** @deprecated use `UpdatePaymentEligibilityRequirementResponse$Outbound` instead. */
  export type Outbound = UpdatePaymentEligibilityRequirementResponse$Outbound;
}

export function updatePaymentEligibilityRequirementResponseToJSON(
  updatePaymentEligibilityRequirementResponse:
    UpdatePaymentEligibilityRequirementResponse,
): string {
  return JSON.stringify(
    UpdatePaymentEligibilityRequirementResponse$outboundSchema.parse(
      updatePaymentEligibilityRequirementResponse,
    ),
  );
}

export function updatePaymentEligibilityRequirementResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  UpdatePaymentEligibilityRequirementResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      UpdatePaymentEligibilityRequirementResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'UpdatePaymentEligibilityRequirementResponse' from JSON`,
  );
}
