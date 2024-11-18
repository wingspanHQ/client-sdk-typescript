/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type ListBankStatementsResponse = {
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
   * A list of bank statements
   */
  classes?: Array<shared.BankStatement> | undefined;
};

/** @internal */
export const ListBankStatementsResponse$inboundSchema: z.ZodType<
  ListBankStatementsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  classes: z.array(shared.BankStatement$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type ListBankStatementsResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  classes?: Array<shared.BankStatement$Outbound> | undefined;
};

/** @internal */
export const ListBankStatementsResponse$outboundSchema: z.ZodType<
  ListBankStatementsResponse$Outbound,
  z.ZodTypeDef,
  ListBankStatementsResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  classes: z.array(shared.BankStatement$outboundSchema).optional(),
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
export namespace ListBankStatementsResponse$ {
  /** @deprecated use `ListBankStatementsResponse$inboundSchema` instead. */
  export const inboundSchema = ListBankStatementsResponse$inboundSchema;
  /** @deprecated use `ListBankStatementsResponse$outboundSchema` instead. */
  export const outboundSchema = ListBankStatementsResponse$outboundSchema;
  /** @deprecated use `ListBankStatementsResponse$Outbound` instead. */
  export type Outbound = ListBankStatementsResponse$Outbound;
}

export function listBankStatementsResponseToJSON(
  listBankStatementsResponse: ListBankStatementsResponse,
): string {
  return JSON.stringify(
    ListBankStatementsResponse$outboundSchema.parse(listBankStatementsResponse),
  );
}

export function listBankStatementsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListBankStatementsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListBankStatementsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListBankStatementsResponse' from JSON`,
  );
}
