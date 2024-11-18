/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type ListPayableBatchesResponse = {
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
   * A list of bulk payable batches
   */
  classes?: Array<shared.BulkPayableBatch> | undefined;
};

/** @internal */
export const ListPayableBatchesResponse$inboundSchema: z.ZodType<
  ListPayableBatchesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  classes: z.array(shared.BulkPayableBatch$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type ListPayableBatchesResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  classes?: Array<shared.BulkPayableBatch$Outbound> | undefined;
};

/** @internal */
export const ListPayableBatchesResponse$outboundSchema: z.ZodType<
  ListPayableBatchesResponse$Outbound,
  z.ZodTypeDef,
  ListPayableBatchesResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  classes: z.array(shared.BulkPayableBatch$outboundSchema).optional(),
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
export namespace ListPayableBatchesResponse$ {
  /** @deprecated use `ListPayableBatchesResponse$inboundSchema` instead. */
  export const inboundSchema = ListPayableBatchesResponse$inboundSchema;
  /** @deprecated use `ListPayableBatchesResponse$outboundSchema` instead. */
  export const outboundSchema = ListPayableBatchesResponse$outboundSchema;
  /** @deprecated use `ListPayableBatchesResponse$Outbound` instead. */
  export type Outbound = ListPayableBatchesResponse$Outbound;
}

export function listPayableBatchesResponseToJSON(
  listPayableBatchesResponse: ListPayableBatchesResponse,
): string {
  return JSON.stringify(
    ListPayableBatchesResponse$outboundSchema.parse(listPayableBatchesResponse),
  );
}

export function listPayableBatchesResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListPayableBatchesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListPayableBatchesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListPayableBatchesResponse' from JSON`,
  );
}
