/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type ListDebitCardsRequest = {
  /**
   * Unique identifier of a member
   */
  memberId: string;
};

export type ListDebitCardsResponse = {
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
   * A list of payout debit cards
   */
  classes?: Array<shared.CheckbookCard> | undefined;
};

/** @internal */
export const ListDebitCardsRequest$inboundSchema: z.ZodType<
  ListDebitCardsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  memberId: z.string(),
});

/** @internal */
export type ListDebitCardsRequest$Outbound = {
  memberId: string;
};

/** @internal */
export const ListDebitCardsRequest$outboundSchema: z.ZodType<
  ListDebitCardsRequest$Outbound,
  z.ZodTypeDef,
  ListDebitCardsRequest
> = z.object({
  memberId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListDebitCardsRequest$ {
  /** @deprecated use `ListDebitCardsRequest$inboundSchema` instead. */
  export const inboundSchema = ListDebitCardsRequest$inboundSchema;
  /** @deprecated use `ListDebitCardsRequest$outboundSchema` instead. */
  export const outboundSchema = ListDebitCardsRequest$outboundSchema;
  /** @deprecated use `ListDebitCardsRequest$Outbound` instead. */
  export type Outbound = ListDebitCardsRequest$Outbound;
}

export function listDebitCardsRequestToJSON(
  listDebitCardsRequest: ListDebitCardsRequest,
): string {
  return JSON.stringify(
    ListDebitCardsRequest$outboundSchema.parse(listDebitCardsRequest),
  );
}

export function listDebitCardsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListDebitCardsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListDebitCardsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListDebitCardsRequest' from JSON`,
  );
}

/** @internal */
export const ListDebitCardsResponse$inboundSchema: z.ZodType<
  ListDebitCardsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  classes: z.array(shared.CheckbookCard$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type ListDebitCardsResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  classes?: Array<shared.CheckbookCard$Outbound> | undefined;
};

/** @internal */
export const ListDebitCardsResponse$outboundSchema: z.ZodType<
  ListDebitCardsResponse$Outbound,
  z.ZodTypeDef,
  ListDebitCardsResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  classes: z.array(shared.CheckbookCard$outboundSchema).optional(),
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
export namespace ListDebitCardsResponse$ {
  /** @deprecated use `ListDebitCardsResponse$inboundSchema` instead. */
  export const inboundSchema = ListDebitCardsResponse$inboundSchema;
  /** @deprecated use `ListDebitCardsResponse$outboundSchema` instead. */
  export const outboundSchema = ListDebitCardsResponse$outboundSchema;
  /** @deprecated use `ListDebitCardsResponse$Outbound` instead. */
  export type Outbound = ListDebitCardsResponse$Outbound;
}

export function listDebitCardsResponseToJSON(
  listDebitCardsResponse: ListDebitCardsResponse,
): string {
  return JSON.stringify(
    ListDebitCardsResponse$outboundSchema.parse(listDebitCardsResponse),
  );
}

export function listDebitCardsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListDebitCardsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListDebitCardsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListDebitCardsResponse' from JSON`,
  );
}
