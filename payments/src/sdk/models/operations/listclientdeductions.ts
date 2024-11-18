/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type ListClientDeductionsResponse = {
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
   * A list of deductions
   */
  classes?: Array<shared.DeductionResponse> | undefined;
};

/** @internal */
export const ListClientDeductionsResponse$inboundSchema: z.ZodType<
  ListClientDeductionsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  classes: z.array(shared.DeductionResponse$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type ListClientDeductionsResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  classes?: Array<shared.DeductionResponse$Outbound> | undefined;
};

/** @internal */
export const ListClientDeductionsResponse$outboundSchema: z.ZodType<
  ListClientDeductionsResponse$Outbound,
  z.ZodTypeDef,
  ListClientDeductionsResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  classes: z.array(shared.DeductionResponse$outboundSchema).optional(),
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
export namespace ListClientDeductionsResponse$ {
  /** @deprecated use `ListClientDeductionsResponse$inboundSchema` instead. */
  export const inboundSchema = ListClientDeductionsResponse$inboundSchema;
  /** @deprecated use `ListClientDeductionsResponse$outboundSchema` instead. */
  export const outboundSchema = ListClientDeductionsResponse$outboundSchema;
  /** @deprecated use `ListClientDeductionsResponse$Outbound` instead. */
  export type Outbound = ListClientDeductionsResponse$Outbound;
}

export function listClientDeductionsResponseToJSON(
  listClientDeductionsResponse: ListClientDeductionsResponse,
): string {
  return JSON.stringify(
    ListClientDeductionsResponse$outboundSchema.parse(
      listClientDeductionsResponse,
    ),
  );
}

export function listClientDeductionsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListClientDeductionsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListClientDeductionsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListClientDeductionsResponse' from JSON`,
  );
}
