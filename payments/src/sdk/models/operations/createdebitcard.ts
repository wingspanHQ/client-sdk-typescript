/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type CreateDebitCardRequest = {
  checkbookCardCreate?: shared.CheckbookCardCreate | undefined;
  /**
   * Unique identifier of a member
   */
  memberId: string;
};

export type CreateDebitCardResponse = {
  /**
   * A payout debit card
   */
  checkbookCard?: shared.CheckbookCard | undefined;
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
export const CreateDebitCardRequest$inboundSchema: z.ZodType<
  CreateDebitCardRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  CheckbookCardCreate: shared.CheckbookCardCreate$inboundSchema.optional(),
  memberId: z.string(),
}).transform((v) => {
  return remap$(v, {
    "CheckbookCardCreate": "checkbookCardCreate",
  });
});

/** @internal */
export type CreateDebitCardRequest$Outbound = {
  CheckbookCardCreate?: shared.CheckbookCardCreate$Outbound | undefined;
  memberId: string;
};

/** @internal */
export const CreateDebitCardRequest$outboundSchema: z.ZodType<
  CreateDebitCardRequest$Outbound,
  z.ZodTypeDef,
  CreateDebitCardRequest
> = z.object({
  checkbookCardCreate: shared.CheckbookCardCreate$outboundSchema.optional(),
  memberId: z.string(),
}).transform((v) => {
  return remap$(v, {
    checkbookCardCreate: "CheckbookCardCreate",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateDebitCardRequest$ {
  /** @deprecated use `CreateDebitCardRequest$inboundSchema` instead. */
  export const inboundSchema = CreateDebitCardRequest$inboundSchema;
  /** @deprecated use `CreateDebitCardRequest$outboundSchema` instead. */
  export const outboundSchema = CreateDebitCardRequest$outboundSchema;
  /** @deprecated use `CreateDebitCardRequest$Outbound` instead. */
  export type Outbound = CreateDebitCardRequest$Outbound;
}

/** @internal */
export const CreateDebitCardResponse$inboundSchema: z.ZodType<
  CreateDebitCardResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  CheckbookCard: shared.CheckbookCard$inboundSchema.optional(),
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "CheckbookCard": "checkbookCard",
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type CreateDebitCardResponse$Outbound = {
  CheckbookCard?: shared.CheckbookCard$Outbound | undefined;
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const CreateDebitCardResponse$outboundSchema: z.ZodType<
  CreateDebitCardResponse$Outbound,
  z.ZodTypeDef,
  CreateDebitCardResponse
> = z.object({
  checkbookCard: shared.CheckbookCard$outboundSchema.optional(),
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    checkbookCard: "CheckbookCard",
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateDebitCardResponse$ {
  /** @deprecated use `CreateDebitCardResponse$inboundSchema` instead. */
  export const inboundSchema = CreateDebitCardResponse$inboundSchema;
  /** @deprecated use `CreateDebitCardResponse$outboundSchema` instead. */
  export const outboundSchema = CreateDebitCardResponse$outboundSchema;
  /** @deprecated use `CreateDebitCardResponse$Outbound` instead. */
  export type Outbound = CreateDebitCardResponse$Outbound;
}
