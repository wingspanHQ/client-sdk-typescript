/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DocumentEvents = {
  clientSignedAt?: string | null | undefined;
  memberSignedAt?: string | null | undefined;
};

/** @internal */
export const DocumentEvents$inboundSchema: z.ZodType<
  DocumentEvents,
  z.ZodTypeDef,
  unknown
> = z.object({
  clientSignedAt: z.nullable(z.string()).optional(),
  memberSignedAt: z.nullable(z.string()).optional(),
});

/** @internal */
export type DocumentEvents$Outbound = {
  clientSignedAt?: string | null | undefined;
  memberSignedAt?: string | null | undefined;
};

/** @internal */
export const DocumentEvents$outboundSchema: z.ZodType<
  DocumentEvents$Outbound,
  z.ZodTypeDef,
  DocumentEvents
> = z.object({
  clientSignedAt: z.nullable(z.string()).optional(),
  memberSignedAt: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentEvents$ {
  /** @deprecated use `DocumentEvents$inboundSchema` instead. */
  export const inboundSchema = DocumentEvents$inboundSchema;
  /** @deprecated use `DocumentEvents$outboundSchema` instead. */
  export const outboundSchema = DocumentEvents$outboundSchema;
  /** @deprecated use `DocumentEvents$Outbound` instead. */
  export type Outbound = DocumentEvents$Outbound;
}

export function documentEventsToJSON(documentEvents: DocumentEvents): string {
  return JSON.stringify(DocumentEvents$outboundSchema.parse(documentEvents));
}

export function documentEventsFromJSON(
  jsonString: string,
): SafeParseResult<DocumentEvents, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DocumentEvents$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DocumentEvents' from JSON`,
  );
}
