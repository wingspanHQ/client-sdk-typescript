/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  FundsTransferAccount,
  FundsTransferAccount$inboundSchema,
  FundsTransferAccount$Outbound,
  FundsTransferAccount$outboundSchema,
} from "./fundstransferaccount.js";

export type InstantPayoutResponse = {
  instantPayoutAccount: FundsTransferAccount;
  instantPayoutAccountId: string;
};

/** @internal */
export const InstantPayoutResponse$inboundSchema: z.ZodType<
  InstantPayoutResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  instantPayoutAccount: FundsTransferAccount$inboundSchema,
  instantPayoutAccountId: z.string(),
});

/** @internal */
export type InstantPayoutResponse$Outbound = {
  instantPayoutAccount: FundsTransferAccount$Outbound;
  instantPayoutAccountId: string;
};

/** @internal */
export const InstantPayoutResponse$outboundSchema: z.ZodType<
  InstantPayoutResponse$Outbound,
  z.ZodTypeDef,
  InstantPayoutResponse
> = z.object({
  instantPayoutAccount: FundsTransferAccount$outboundSchema,
  instantPayoutAccountId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InstantPayoutResponse$ {
  /** @deprecated use `InstantPayoutResponse$inboundSchema` instead. */
  export const inboundSchema = InstantPayoutResponse$inboundSchema;
  /** @deprecated use `InstantPayoutResponse$outboundSchema` instead. */
  export const outboundSchema = InstantPayoutResponse$outboundSchema;
  /** @deprecated use `InstantPayoutResponse$Outbound` instead. */
  export type Outbound = InstantPayoutResponse$Outbound;
}

export function instantPayoutResponseToJSON(
  instantPayoutResponse: InstantPayoutResponse,
): string {
  return JSON.stringify(
    InstantPayoutResponse$outboundSchema.parse(instantPayoutResponse),
  );
}

export function instantPayoutResponseFromJSON(
  jsonString: string,
): SafeParseResult<InstantPayoutResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InstantPayoutResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InstantPayoutResponse' from JSON`,
  );
}
