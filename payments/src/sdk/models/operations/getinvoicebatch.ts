/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type GetInvoiceBatchRequest = {
  /**
   * Unique identifier for a batch
   */
  batchId: string;
};

export type GetInvoiceBatchResponse = {
  /**
   * A batch of items for importing as invoices
   */
  bulkInvoiceBatch?: shared.BulkInvoiceBatch | undefined;
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
};

/** @internal */
export const GetInvoiceBatchRequest$inboundSchema: z.ZodType<
  GetInvoiceBatchRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  batchId: z.string(),
});

/** @internal */
export type GetInvoiceBatchRequest$Outbound = {
  batchId: string;
};

/** @internal */
export const GetInvoiceBatchRequest$outboundSchema: z.ZodType<
  GetInvoiceBatchRequest$Outbound,
  z.ZodTypeDef,
  GetInvoiceBatchRequest
> = z.object({
  batchId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetInvoiceBatchRequest$ {
  /** @deprecated use `GetInvoiceBatchRequest$inboundSchema` instead. */
  export const inboundSchema = GetInvoiceBatchRequest$inboundSchema;
  /** @deprecated use `GetInvoiceBatchRequest$outboundSchema` instead. */
  export const outboundSchema = GetInvoiceBatchRequest$outboundSchema;
  /** @deprecated use `GetInvoiceBatchRequest$Outbound` instead. */
  export type Outbound = GetInvoiceBatchRequest$Outbound;
}

export function getInvoiceBatchRequestToJSON(
  getInvoiceBatchRequest: GetInvoiceBatchRequest,
): string {
  return JSON.stringify(
    GetInvoiceBatchRequest$outboundSchema.parse(getInvoiceBatchRequest),
  );
}

export function getInvoiceBatchRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetInvoiceBatchRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetInvoiceBatchRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetInvoiceBatchRequest' from JSON`,
  );
}

/** @internal */
export const GetInvoiceBatchResponse$inboundSchema: z.ZodType<
  GetInvoiceBatchResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  BulkInvoiceBatch: shared.BulkInvoiceBatch$inboundSchema.optional(),
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "BulkInvoiceBatch": "bulkInvoiceBatch",
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetInvoiceBatchResponse$Outbound = {
  BulkInvoiceBatch?: shared.BulkInvoiceBatch$Outbound | undefined;
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const GetInvoiceBatchResponse$outboundSchema: z.ZodType<
  GetInvoiceBatchResponse$Outbound,
  z.ZodTypeDef,
  GetInvoiceBatchResponse
> = z.object({
  bulkInvoiceBatch: shared.BulkInvoiceBatch$outboundSchema.optional(),
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    bulkInvoiceBatch: "BulkInvoiceBatch",
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetInvoiceBatchResponse$ {
  /** @deprecated use `GetInvoiceBatchResponse$inboundSchema` instead. */
  export const inboundSchema = GetInvoiceBatchResponse$inboundSchema;
  /** @deprecated use `GetInvoiceBatchResponse$outboundSchema` instead. */
  export const outboundSchema = GetInvoiceBatchResponse$outboundSchema;
  /** @deprecated use `GetInvoiceBatchResponse$Outbound` instead. */
  export type Outbound = GetInvoiceBatchResponse$Outbound;
}

export function getInvoiceBatchResponseToJSON(
  getInvoiceBatchResponse: GetInvoiceBatchResponse,
): string {
  return JSON.stringify(
    GetInvoiceBatchResponse$outboundSchema.parse(getInvoiceBatchResponse),
  );
}

export function getInvoiceBatchResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetInvoiceBatchResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetInvoiceBatchResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetInvoiceBatchResponse' from JSON`,
  );
}
