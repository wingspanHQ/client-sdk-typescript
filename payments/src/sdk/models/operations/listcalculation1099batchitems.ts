/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type ListCalculation1099BatchItemsRequest = {
  /**
   * Unique identifier for a batch
   */
  batchId: string;
};

export type ListCalculation1099BatchItemsResponse = {
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
   * A list of bulk calculation 1099 items
   */
  classes?: Array<shared.BulkCalculation1099Item> | undefined;
};

/** @internal */
export const ListCalculation1099BatchItemsRequest$inboundSchema: z.ZodType<
  ListCalculation1099BatchItemsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  batchId: z.string(),
});

/** @internal */
export type ListCalculation1099BatchItemsRequest$Outbound = {
  batchId: string;
};

/** @internal */
export const ListCalculation1099BatchItemsRequest$outboundSchema: z.ZodType<
  ListCalculation1099BatchItemsRequest$Outbound,
  z.ZodTypeDef,
  ListCalculation1099BatchItemsRequest
> = z.object({
  batchId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCalculation1099BatchItemsRequest$ {
  /** @deprecated use `ListCalculation1099BatchItemsRequest$inboundSchema` instead. */
  export const inboundSchema =
    ListCalculation1099BatchItemsRequest$inboundSchema;
  /** @deprecated use `ListCalculation1099BatchItemsRequest$outboundSchema` instead. */
  export const outboundSchema =
    ListCalculation1099BatchItemsRequest$outboundSchema;
  /** @deprecated use `ListCalculation1099BatchItemsRequest$Outbound` instead. */
  export type Outbound = ListCalculation1099BatchItemsRequest$Outbound;
}

/** @internal */
export const ListCalculation1099BatchItemsResponse$inboundSchema: z.ZodType<
  ListCalculation1099BatchItemsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  classes: z.array(shared.BulkCalculation1099Item$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type ListCalculation1099BatchItemsResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  classes?: Array<shared.BulkCalculation1099Item$Outbound> | undefined;
};

/** @internal */
export const ListCalculation1099BatchItemsResponse$outboundSchema: z.ZodType<
  ListCalculation1099BatchItemsResponse$Outbound,
  z.ZodTypeDef,
  ListCalculation1099BatchItemsResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  classes: z.array(shared.BulkCalculation1099Item$outboundSchema).optional(),
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
export namespace ListCalculation1099BatchItemsResponse$ {
  /** @deprecated use `ListCalculation1099BatchItemsResponse$inboundSchema` instead. */
  export const inboundSchema =
    ListCalculation1099BatchItemsResponse$inboundSchema;
  /** @deprecated use `ListCalculation1099BatchItemsResponse$outboundSchema` instead. */
  export const outboundSchema =
    ListCalculation1099BatchItemsResponse$outboundSchema;
  /** @deprecated use `ListCalculation1099BatchItemsResponse$Outbound` instead. */
  export type Outbound = ListCalculation1099BatchItemsResponse$Outbound;
}
