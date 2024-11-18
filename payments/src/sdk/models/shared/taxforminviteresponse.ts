/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type TaxFormInviteResponse = {
  success?: any | undefined;
};

/** @internal */
export const TaxFormInviteResponse$inboundSchema: z.ZodType<
  TaxFormInviteResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.any().optional(),
});

/** @internal */
export type TaxFormInviteResponse$Outbound = {
  success?: any | undefined;
};

/** @internal */
export const TaxFormInviteResponse$outboundSchema: z.ZodType<
  TaxFormInviteResponse$Outbound,
  z.ZodTypeDef,
  TaxFormInviteResponse
> = z.object({
  success: z.any().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaxFormInviteResponse$ {
  /** @deprecated use `TaxFormInviteResponse$inboundSchema` instead. */
  export const inboundSchema = TaxFormInviteResponse$inboundSchema;
  /** @deprecated use `TaxFormInviteResponse$outboundSchema` instead. */
  export const outboundSchema = TaxFormInviteResponse$outboundSchema;
  /** @deprecated use `TaxFormInviteResponse$Outbound` instead. */
  export type Outbound = TaxFormInviteResponse$Outbound;
}

export function taxFormInviteResponseToJSON(
  taxFormInviteResponse: TaxFormInviteResponse,
): string {
  return JSON.stringify(
    TaxFormInviteResponse$outboundSchema.parse(taxFormInviteResponse),
  );
}

export function taxFormInviteResponseFromJSON(
  jsonString: string,
): SafeParseResult<TaxFormInviteResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TaxFormInviteResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TaxFormInviteResponse' from JSON`,
  );
}
