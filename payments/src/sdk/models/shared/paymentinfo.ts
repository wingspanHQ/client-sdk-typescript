/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const MeansType = {
  Card: "Card",
  Account: "Account",
  InternalAccount: "InternalAccount",
} as const;
export type MeansType = ClosedEnum<typeof MeansType>;

export type PaymentInfo = {
  brandImageUrl?: string | null | undefined;
  cardBrand?: string | null | undefined;
  meansDescription?: string | null | undefined;
  meansLast4?: string | null | undefined;
  meansType: MeansType;
};

/** @internal */
export const MeansType$inboundSchema: z.ZodNativeEnum<typeof MeansType> = z
  .nativeEnum(MeansType);

/** @internal */
export const MeansType$outboundSchema: z.ZodNativeEnum<typeof MeansType> =
  MeansType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MeansType$ {
  /** @deprecated use `MeansType$inboundSchema` instead. */
  export const inboundSchema = MeansType$inboundSchema;
  /** @deprecated use `MeansType$outboundSchema` instead. */
  export const outboundSchema = MeansType$outboundSchema;
}

/** @internal */
export const PaymentInfo$inboundSchema: z.ZodType<
  PaymentInfo,
  z.ZodTypeDef,
  unknown
> = z.object({
  brandImageUrl: z.nullable(z.string()).optional(),
  cardBrand: z.nullable(z.string()).optional(),
  meansDescription: z.nullable(z.string()).optional(),
  meansLast4: z.nullable(z.string()).optional(),
  meansType: MeansType$inboundSchema,
});

/** @internal */
export type PaymentInfo$Outbound = {
  brandImageUrl?: string | null | undefined;
  cardBrand?: string | null | undefined;
  meansDescription?: string | null | undefined;
  meansLast4?: string | null | undefined;
  meansType: string;
};

/** @internal */
export const PaymentInfo$outboundSchema: z.ZodType<
  PaymentInfo$Outbound,
  z.ZodTypeDef,
  PaymentInfo
> = z.object({
  brandImageUrl: z.nullable(z.string()).optional(),
  cardBrand: z.nullable(z.string()).optional(),
  meansDescription: z.nullable(z.string()).optional(),
  meansLast4: z.nullable(z.string()).optional(),
  meansType: MeansType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentInfo$ {
  /** @deprecated use `PaymentInfo$inboundSchema` instead. */
  export const inboundSchema = PaymentInfo$inboundSchema;
  /** @deprecated use `PaymentInfo$outboundSchema` instead. */
  export const outboundSchema = PaymentInfo$outboundSchema;
  /** @deprecated use `PaymentInfo$Outbound` instead. */
  export type Outbound = PaymentInfo$Outbound;
}

export function paymentInfoToJSON(paymentInfo: PaymentInfo): string {
  return JSON.stringify(PaymentInfo$outboundSchema.parse(paymentInfo));
}

export function paymentInfoFromJSON(
  jsonString: string,
): SafeParseResult<PaymentInfo, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PaymentInfo$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PaymentInfo' from JSON`,
  );
}
