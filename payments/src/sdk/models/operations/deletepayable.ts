/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type DeletePayableRequest = {
  /**
   * Unique identifier
   */
  id: string;
};

export type DeletePayableResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * A payable
   */
  payableSchema?: shared.PayableSchema | undefined;
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
export const DeletePayableRequest$inboundSchema: z.ZodType<
  DeletePayableRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type DeletePayableRequest$Outbound = {
  id: string;
};

/** @internal */
export const DeletePayableRequest$outboundSchema: z.ZodType<
  DeletePayableRequest$Outbound,
  z.ZodTypeDef,
  DeletePayableRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeletePayableRequest$ {
  /** @deprecated use `DeletePayableRequest$inboundSchema` instead. */
  export const inboundSchema = DeletePayableRequest$inboundSchema;
  /** @deprecated use `DeletePayableRequest$outboundSchema` instead. */
  export const outboundSchema = DeletePayableRequest$outboundSchema;
  /** @deprecated use `DeletePayableRequest$Outbound` instead. */
  export type Outbound = DeletePayableRequest$Outbound;
}

/** @internal */
export const DeletePayableResponse$inboundSchema: z.ZodType<
  DeletePayableResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  PayableSchema: shared.PayableSchema$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "PayableSchema": "payableSchema",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type DeletePayableResponse$Outbound = {
  ContentType: string;
  PayableSchema?: shared.PayableSchema$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const DeletePayableResponse$outboundSchema: z.ZodType<
  DeletePayableResponse$Outbound,
  z.ZodTypeDef,
  DeletePayableResponse
> = z.object({
  contentType: z.string(),
  payableSchema: shared.PayableSchema$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    payableSchema: "PayableSchema",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeletePayableResponse$ {
  /** @deprecated use `DeletePayableResponse$inboundSchema` instead. */
  export const inboundSchema = DeletePayableResponse$inboundSchema;
  /** @deprecated use `DeletePayableResponse$outboundSchema` instead. */
  export const outboundSchema = DeletePayableResponse$outboundSchema;
  /** @deprecated use `DeletePayableResponse$Outbound` instead. */
  export type Outbound = DeletePayableResponse$Outbound;
}
