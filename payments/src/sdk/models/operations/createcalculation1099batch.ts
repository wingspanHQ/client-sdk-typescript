/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type CreateCalculation1099BatchResponse = {
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
export const CreateCalculation1099BatchResponse$inboundSchema: z.ZodType<
  CreateCalculation1099BatchResponse,
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
export type CreateCalculation1099BatchResponse$Outbound = {
  BulkCalculation1099Batch?:
    | shared.BulkCalculation1099Batch$Outbound
    | undefined;
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const CreateCalculation1099BatchResponse$outboundSchema: z.ZodType<
  CreateCalculation1099BatchResponse$Outbound,
  z.ZodTypeDef,
  CreateCalculation1099BatchResponse
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
export namespace CreateCalculation1099BatchResponse$ {
  /** @deprecated use `CreateCalculation1099BatchResponse$inboundSchema` instead. */
  export const inboundSchema = CreateCalculation1099BatchResponse$inboundSchema;
  /** @deprecated use `CreateCalculation1099BatchResponse$outboundSchema` instead. */
  export const outboundSchema =
    CreateCalculation1099BatchResponse$outboundSchema;
  /** @deprecated use `CreateCalculation1099BatchResponse$Outbound` instead. */
  export type Outbound = CreateCalculation1099BatchResponse$Outbound;
}
