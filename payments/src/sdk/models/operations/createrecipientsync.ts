/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type CreateRecipientSyncRequest = {
  /**
   * Unique tax Form Id
   */
  taxFormId: string;
};

export type CreateRecipientSyncResponse = {
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
   * 1099 Tax form object
   */
  taxFormResponse?: shared.TaxFormResponse | undefined;
};

/** @internal */
export const CreateRecipientSyncRequest$inboundSchema: z.ZodType<
  CreateRecipientSyncRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  taxFormId: z.string(),
});

/** @internal */
export type CreateRecipientSyncRequest$Outbound = {
  taxFormId: string;
};

/** @internal */
export const CreateRecipientSyncRequest$outboundSchema: z.ZodType<
  CreateRecipientSyncRequest$Outbound,
  z.ZodTypeDef,
  CreateRecipientSyncRequest
> = z.object({
  taxFormId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateRecipientSyncRequest$ {
  /** @deprecated use `CreateRecipientSyncRequest$inboundSchema` instead. */
  export const inboundSchema = CreateRecipientSyncRequest$inboundSchema;
  /** @deprecated use `CreateRecipientSyncRequest$outboundSchema` instead. */
  export const outboundSchema = CreateRecipientSyncRequest$outboundSchema;
  /** @deprecated use `CreateRecipientSyncRequest$Outbound` instead. */
  export type Outbound = CreateRecipientSyncRequest$Outbound;
}

/** @internal */
export const CreateRecipientSyncResponse$inboundSchema: z.ZodType<
  CreateRecipientSyncResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  TaxFormResponse: shared.TaxFormResponse$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "TaxFormResponse": "taxFormResponse",
  });
});

/** @internal */
export type CreateRecipientSyncResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  TaxFormResponse?: shared.TaxFormResponse$Outbound | undefined;
};

/** @internal */
export const CreateRecipientSyncResponse$outboundSchema: z.ZodType<
  CreateRecipientSyncResponse$Outbound,
  z.ZodTypeDef,
  CreateRecipientSyncResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  taxFormResponse: shared.TaxFormResponse$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    taxFormResponse: "TaxFormResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateRecipientSyncResponse$ {
  /** @deprecated use `CreateRecipientSyncResponse$inboundSchema` instead. */
  export const inboundSchema = CreateRecipientSyncResponse$inboundSchema;
  /** @deprecated use `CreateRecipientSyncResponse$outboundSchema` instead. */
  export const outboundSchema = CreateRecipientSyncResponse$outboundSchema;
  /** @deprecated use `CreateRecipientSyncResponse$Outbound` instead. */
  export type Outbound = CreateRecipientSyncResponse$Outbound;
}
