/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type ListDetailedInformationCollaboratorsResponse = {
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
   * Collaborators list in the report
   */
  classes?: Array<shared.CollaboratorsReportResponse> | undefined;
};

/** @internal */
export const ListDetailedInformationCollaboratorsResponse$inboundSchema:
  z.ZodType<
    ListDetailedInformationCollaboratorsResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    ContentType: z.string(),
    StatusCode: z.number().int(),
    RawResponse: z.instanceof(Response),
    classes: z.array(shared.CollaboratorsReportResponse$inboundSchema)
      .optional(),
  }).transform((v) => {
    return remap$(v, {
      "ContentType": "contentType",
      "StatusCode": "statusCode",
      "RawResponse": "rawResponse",
    });
  });

/** @internal */
export type ListDetailedInformationCollaboratorsResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  classes?: Array<shared.CollaboratorsReportResponse$Outbound> | undefined;
};

/** @internal */
export const ListDetailedInformationCollaboratorsResponse$outboundSchema:
  z.ZodType<
    ListDetailedInformationCollaboratorsResponse$Outbound,
    z.ZodTypeDef,
    ListDetailedInformationCollaboratorsResponse
  > = z.object({
    contentType: z.string(),
    statusCode: z.number().int(),
    rawResponse: z.instanceof(Response).transform(() => {
      throw new Error("Response cannot be serialized");
    }),
    classes: z.array(shared.CollaboratorsReportResponse$outboundSchema)
      .optional(),
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
export namespace ListDetailedInformationCollaboratorsResponse$ {
  /** @deprecated use `ListDetailedInformationCollaboratorsResponse$inboundSchema` instead. */
  export const inboundSchema =
    ListDetailedInformationCollaboratorsResponse$inboundSchema;
  /** @deprecated use `ListDetailedInformationCollaboratorsResponse$outboundSchema` instead. */
  export const outboundSchema =
    ListDetailedInformationCollaboratorsResponse$outboundSchema;
  /** @deprecated use `ListDetailedInformationCollaboratorsResponse$Outbound` instead. */
  export type Outbound = ListDetailedInformationCollaboratorsResponse$Outbound;
}

export function listDetailedInformationCollaboratorsResponseToJSON(
  listDetailedInformationCollaboratorsResponse:
    ListDetailedInformationCollaboratorsResponse,
): string {
  return JSON.stringify(
    ListDetailedInformationCollaboratorsResponse$outboundSchema.parse(
      listDetailedInformationCollaboratorsResponse,
    ),
  );
}

export function listDetailedInformationCollaboratorsResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  ListDetailedInformationCollaboratorsResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ListDetailedInformationCollaboratorsResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ListDetailedInformationCollaboratorsResponse' from JSON`,
  );
}
