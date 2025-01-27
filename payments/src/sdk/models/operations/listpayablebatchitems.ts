/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type ListPayableBatchItemsRequest = {
  /**
   * Unique identifier for a batch
   */
  batchId: string;
};

export type ListPayableBatchItemsResponse = {
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
   * A list of bulk payable items
   */
  classes?: Array<shared.BulkPayableItem> | undefined;
};

/** @internal */
export const ListPayableBatchItemsRequest$inboundSchema: z.ZodType<
  ListPayableBatchItemsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  batchId: z.string(),
});

/** @internal */
export type ListPayableBatchItemsRequest$Outbound = {
  batchId: string;
};

/** @internal */
export const ListPayableBatchItemsRequest$outboundSchema: z.ZodType<
  ListPayableBatchItemsRequest$Outbound,
  z.ZodTypeDef,
  ListPayableBatchItemsRequest
> = z.object({
  batchId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPayableBatchItemsRequest$ {
  /** @deprecated use `ListPayableBatchItemsRequest$inboundSchema` instead. */
  export const inboundSchema = ListPayableBatchItemsRequest$inboundSchema;
  /** @deprecated use `ListPayableBatchItemsRequest$outboundSchema` instead. */
  export const outboundSchema = ListPayableBatchItemsRequest$outboundSchema;
  /** @deprecated use `ListPayableBatchItemsRequest$Outbound` instead. */
  export type Outbound = ListPayableBatchItemsRequest$Outbound;
}

export function listPayableBatchItemsRequestToJSON(
  listPayableBatchItemsRequest: ListPayableBatchItemsRequest,
): string {
  return JSON.stringify(
    ListPayableBatchItemsRequest$outboundSchema.parse(
      listPayableBatchItemsRequest,
    ),
  );
}

export function listPayableBatchItemsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListPayableBatchItemsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListPayableBatchItemsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListPayableBatchItemsRequest' from JSON`,
  );
}

/** @internal */
export const ListPayableBatchItemsResponse$inboundSchema: z.ZodType<
  ListPayableBatchItemsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  classes: z.array(shared.BulkPayableItem$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type ListPayableBatchItemsResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  classes?: Array<shared.BulkPayableItem$Outbound> | undefined;
};

/** @internal */
export const ListPayableBatchItemsResponse$outboundSchema: z.ZodType<
  ListPayableBatchItemsResponse$Outbound,
  z.ZodTypeDef,
  ListPayableBatchItemsResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  classes: z.array(shared.BulkPayableItem$outboundSchema).optional(),
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
export namespace ListPayableBatchItemsResponse$ {
  /** @deprecated use `ListPayableBatchItemsResponse$inboundSchema` instead. */
  export const inboundSchema = ListPayableBatchItemsResponse$inboundSchema;
  /** @deprecated use `ListPayableBatchItemsResponse$outboundSchema` instead. */
  export const outboundSchema = ListPayableBatchItemsResponse$outboundSchema;
  /** @deprecated use `ListPayableBatchItemsResponse$Outbound` instead. */
  export type Outbound = ListPayableBatchItemsResponse$Outbound;
}

export function listPayableBatchItemsResponseToJSON(
  listPayableBatchItemsResponse: ListPayableBatchItemsResponse,
): string {
  return JSON.stringify(
    ListPayableBatchItemsResponse$outboundSchema.parse(
      listPayableBatchItemsResponse,
    ),
  );
}

export function listPayableBatchItemsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListPayableBatchItemsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListPayableBatchItemsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListPayableBatchItemsResponse' from JSON`,
  );
}
