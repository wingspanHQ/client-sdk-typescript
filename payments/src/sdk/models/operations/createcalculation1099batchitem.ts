/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type CreateCalculation1099BatchItemRequest = {
  bulkCalculation1099ItemCreate?:
    | shared.BulkCalculation1099ItemCreate
    | undefined;
  /**
   * Unique identifier for a batch
   */
  batchId: string;
};

export type CreateCalculation1099BatchItemResponse = {
  /**
   * An item that will be converted into a calculation 1099
   */
  bulkCalculation1099Item?: shared.BulkCalculation1099Item | undefined;
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
export const CreateCalculation1099BatchItemRequest$inboundSchema: z.ZodType<
  CreateCalculation1099BatchItemRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  BulkCalculation1099ItemCreate: shared
    .BulkCalculation1099ItemCreate$inboundSchema.optional(),
  batchId: z.string(),
}).transform((v) => {
  return remap$(v, {
    "BulkCalculation1099ItemCreate": "bulkCalculation1099ItemCreate",
  });
});

/** @internal */
export type CreateCalculation1099BatchItemRequest$Outbound = {
  BulkCalculation1099ItemCreate?:
    | shared.BulkCalculation1099ItemCreate$Outbound
    | undefined;
  batchId: string;
};

/** @internal */
export const CreateCalculation1099BatchItemRequest$outboundSchema: z.ZodType<
  CreateCalculation1099BatchItemRequest$Outbound,
  z.ZodTypeDef,
  CreateCalculation1099BatchItemRequest
> = z.object({
  bulkCalculation1099ItemCreate: shared
    .BulkCalculation1099ItemCreate$outboundSchema.optional(),
  batchId: z.string(),
}).transform((v) => {
  return remap$(v, {
    bulkCalculation1099ItemCreate: "BulkCalculation1099ItemCreate",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCalculation1099BatchItemRequest$ {
  /** @deprecated use `CreateCalculation1099BatchItemRequest$inboundSchema` instead. */
  export const inboundSchema =
    CreateCalculation1099BatchItemRequest$inboundSchema;
  /** @deprecated use `CreateCalculation1099BatchItemRequest$outboundSchema` instead. */
  export const outboundSchema =
    CreateCalculation1099BatchItemRequest$outboundSchema;
  /** @deprecated use `CreateCalculation1099BatchItemRequest$Outbound` instead. */
  export type Outbound = CreateCalculation1099BatchItemRequest$Outbound;
}

/** @internal */
export const CreateCalculation1099BatchItemResponse$inboundSchema: z.ZodType<
  CreateCalculation1099BatchItemResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  BulkCalculation1099Item: shared.BulkCalculation1099Item$inboundSchema
    .optional(),
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "BulkCalculation1099Item": "bulkCalculation1099Item",
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type CreateCalculation1099BatchItemResponse$Outbound = {
  BulkCalculation1099Item?: shared.BulkCalculation1099Item$Outbound | undefined;
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const CreateCalculation1099BatchItemResponse$outboundSchema: z.ZodType<
  CreateCalculation1099BatchItemResponse$Outbound,
  z.ZodTypeDef,
  CreateCalculation1099BatchItemResponse
> = z.object({
  bulkCalculation1099Item: shared.BulkCalculation1099Item$outboundSchema
    .optional(),
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    bulkCalculation1099Item: "BulkCalculation1099Item",
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCalculation1099BatchItemResponse$ {
  /** @deprecated use `CreateCalculation1099BatchItemResponse$inboundSchema` instead. */
  export const inboundSchema =
    CreateCalculation1099BatchItemResponse$inboundSchema;
  /** @deprecated use `CreateCalculation1099BatchItemResponse$outboundSchema` instead. */
  export const outboundSchema =
    CreateCalculation1099BatchItemResponse$outboundSchema;
  /** @deprecated use `CreateCalculation1099BatchItemResponse$Outbound` instead. */
  export type Outbound = CreateCalculation1099BatchItemResponse$Outbound;
}
