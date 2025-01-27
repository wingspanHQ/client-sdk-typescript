/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PostPaymentDeductionDisbursement = {
  inputs: { [k: string]: string };
  strategy: string;
};

/** @internal */
export const PostPaymentDeductionDisbursement$inboundSchema: z.ZodType<
  PostPaymentDeductionDisbursement,
  z.ZodTypeDef,
  unknown
> = z.object({
  inputs: z.record(z.string()),
  strategy: z.string(),
});

/** @internal */
export type PostPaymentDeductionDisbursement$Outbound = {
  inputs: { [k: string]: string };
  strategy: string;
};

/** @internal */
export const PostPaymentDeductionDisbursement$outboundSchema: z.ZodType<
  PostPaymentDeductionDisbursement$Outbound,
  z.ZodTypeDef,
  PostPaymentDeductionDisbursement
> = z.object({
  inputs: z.record(z.string()),
  strategy: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostPaymentDeductionDisbursement$ {
  /** @deprecated use `PostPaymentDeductionDisbursement$inboundSchema` instead. */
  export const inboundSchema = PostPaymentDeductionDisbursement$inboundSchema;
  /** @deprecated use `PostPaymentDeductionDisbursement$outboundSchema` instead. */
  export const outboundSchema = PostPaymentDeductionDisbursement$outboundSchema;
  /** @deprecated use `PostPaymentDeductionDisbursement$Outbound` instead. */
  export type Outbound = PostPaymentDeductionDisbursement$Outbound;
}

export function postPaymentDeductionDisbursementToJSON(
  postPaymentDeductionDisbursement: PostPaymentDeductionDisbursement,
): string {
  return JSON.stringify(
    PostPaymentDeductionDisbursement$outboundSchema.parse(
      postPaymentDeductionDisbursement,
    ),
  );
}

export function postPaymentDeductionDisbursementFromJSON(
  jsonString: string,
): SafeParseResult<PostPaymentDeductionDisbursement, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostPaymentDeductionDisbursement$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostPaymentDeductionDisbursement' from JSON`,
  );
}
