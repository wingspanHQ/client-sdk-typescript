/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type ListCalculation1099BatchesResponse = {
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
   * A list of bulk calculation 1099 batches
   */
  classes?: Array<shared.BulkCalculation1099Batch> | undefined;
};

/** @internal */
export const ListCalculation1099BatchesResponse$inboundSchema: z.ZodType<
  ListCalculation1099BatchesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  classes: z.array(shared.BulkCalculation1099Batch$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type ListCalculation1099BatchesResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  classes?: Array<shared.BulkCalculation1099Batch$Outbound> | undefined;
};

/** @internal */
export const ListCalculation1099BatchesResponse$outboundSchema: z.ZodType<
  ListCalculation1099BatchesResponse$Outbound,
  z.ZodTypeDef,
  ListCalculation1099BatchesResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  classes: z.array(shared.BulkCalculation1099Batch$outboundSchema).optional(),
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
export namespace ListCalculation1099BatchesResponse$ {
  /** @deprecated use `ListCalculation1099BatchesResponse$inboundSchema` instead. */
  export const inboundSchema = ListCalculation1099BatchesResponse$inboundSchema;
  /** @deprecated use `ListCalculation1099BatchesResponse$outboundSchema` instead. */
  export const outboundSchema =
    ListCalculation1099BatchesResponse$outboundSchema;
  /** @deprecated use `ListCalculation1099BatchesResponse$Outbound` instead. */
  export type Outbound = ListCalculation1099BatchesResponse$Outbound;
}
