/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type UpdatePayeeW9InformationResponse = {
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
   * List of 1099 Tax form objects
   */
  unions?: Array<shared.TaxFormResponse> | undefined;
};

/** @internal */
export const UpdatePayeeW9InformationResponse$inboundSchema: z.ZodType<
  UpdatePayeeW9InformationResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  unions: z.array(shared.TaxFormResponse$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type UpdatePayeeW9InformationResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  unions?: Array<shared.TaxFormResponse$Outbound> | undefined;
};

/** @internal */
export const UpdatePayeeW9InformationResponse$outboundSchema: z.ZodType<
  UpdatePayeeW9InformationResponse$Outbound,
  z.ZodTypeDef,
  UpdatePayeeW9InformationResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  unions: z.array(shared.TaxFormResponse$outboundSchema).optional(),
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
export namespace UpdatePayeeW9InformationResponse$ {
  /** @deprecated use `UpdatePayeeW9InformationResponse$inboundSchema` instead. */
  export const inboundSchema = UpdatePayeeW9InformationResponse$inboundSchema;
  /** @deprecated use `UpdatePayeeW9InformationResponse$outboundSchema` instead. */
  export const outboundSchema = UpdatePayeeW9InformationResponse$outboundSchema;
  /** @deprecated use `UpdatePayeeW9InformationResponse$Outbound` instead. */
  export type Outbound = UpdatePayeeW9InformationResponse$Outbound;
}

export function updatePayeeW9InformationResponseToJSON(
  updatePayeeW9InformationResponse: UpdatePayeeW9InformationResponse,
): string {
  return JSON.stringify(
    UpdatePayeeW9InformationResponse$outboundSchema.parse(
      updatePayeeW9InformationResponse,
    ),
  );
}

export function updatePayeeW9InformationResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdatePayeeW9InformationResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdatePayeeW9InformationResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdatePayeeW9InformationResponse' from JSON`,
  );
}
