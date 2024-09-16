/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type GetCalculation1099BatchRequest = {
  /**
   * Unique identifier for a batch
   */
  batchId: string;
};

export type GetCalculation1099BatchResponse = {
  /**
   * A batch of items for importing as calculation 1099s
   */
  bulkCalculation1099Batch?: shared.BulkCalculation1099Batch | undefined;
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
export const GetCalculation1099BatchRequest$inboundSchema: z.ZodType<
  GetCalculation1099BatchRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  batchId: z.string(),
});

/** @internal */
export type GetCalculation1099BatchRequest$Outbound = {
  batchId: string;
};

/** @internal */
export const GetCalculation1099BatchRequest$outboundSchema: z.ZodType<
  GetCalculation1099BatchRequest$Outbound,
  z.ZodTypeDef,
  GetCalculation1099BatchRequest
> = z.object({
  batchId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCalculation1099BatchRequest$ {
  /** @deprecated use `GetCalculation1099BatchRequest$inboundSchema` instead. */
  export const inboundSchema = GetCalculation1099BatchRequest$inboundSchema;
  /** @deprecated use `GetCalculation1099BatchRequest$outboundSchema` instead. */
  export const outboundSchema = GetCalculation1099BatchRequest$outboundSchema;
  /** @deprecated use `GetCalculation1099BatchRequest$Outbound` instead. */
  export type Outbound = GetCalculation1099BatchRequest$Outbound;
}

/** @internal */
export const GetCalculation1099BatchResponse$inboundSchema: z.ZodType<
  GetCalculation1099BatchResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  BulkCalculation1099Batch: shared.BulkCalculation1099Batch$inboundSchema
    .optional(),
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "BulkCalculation1099Batch": "bulkCalculation1099Batch",
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetCalculation1099BatchResponse$Outbound = {
  BulkCalculation1099Batch?:
    | shared.BulkCalculation1099Batch$Outbound
    | undefined;
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const GetCalculation1099BatchResponse$outboundSchema: z.ZodType<
  GetCalculation1099BatchResponse$Outbound,
  z.ZodTypeDef,
  GetCalculation1099BatchResponse
> = z.object({
  bulkCalculation1099Batch: shared.BulkCalculation1099Batch$outboundSchema
    .optional(),
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    bulkCalculation1099Batch: "BulkCalculation1099Batch",
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCalculation1099BatchResponse$ {
  /** @deprecated use `GetCalculation1099BatchResponse$inboundSchema` instead. */
  export const inboundSchema = GetCalculation1099BatchResponse$inboundSchema;
  /** @deprecated use `GetCalculation1099BatchResponse$outboundSchema` instead. */
  export const outboundSchema = GetCalculation1099BatchResponse$outboundSchema;
  /** @deprecated use `GetCalculation1099BatchResponse$Outbound` instead. */
  export type Outbound = GetCalculation1099BatchResponse$Outbound;
}
