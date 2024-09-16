/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type GetSummarizedReportResponse = {
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
   * Collaborators payouts summary report
   */
  classes?: Array<shared.CollaboratorsPayoutsSummaryReportResponse> | undefined;
};

/** @internal */
export const GetSummarizedReportResponse$inboundSchema: z.ZodType<
  GetSummarizedReportResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  classes: z.array(
    shared.CollaboratorsPayoutsSummaryReportResponse$inboundSchema,
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetSummarizedReportResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  classes?:
    | Array<shared.CollaboratorsPayoutsSummaryReportResponse$Outbound>
    | undefined;
};

/** @internal */
export const GetSummarizedReportResponse$outboundSchema: z.ZodType<
  GetSummarizedReportResponse$Outbound,
  z.ZodTypeDef,
  GetSummarizedReportResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  classes: z.array(
    shared.CollaboratorsPayoutsSummaryReportResponse$outboundSchema,
  ).optional(),
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
export namespace GetSummarizedReportResponse$ {
  /** @deprecated use `GetSummarizedReportResponse$inboundSchema` instead. */
  export const inboundSchema = GetSummarizedReportResponse$inboundSchema;
  /** @deprecated use `GetSummarizedReportResponse$outboundSchema` instead. */
  export const outboundSchema = GetSummarizedReportResponse$outboundSchema;
  /** @deprecated use `GetSummarizedReportResponse$Outbound` instead. */
  export type Outbound = GetSummarizedReportResponse$Outbound;
}
