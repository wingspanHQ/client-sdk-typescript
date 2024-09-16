/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const TinType = {
  Individual: "Individual",
  Business: "Business",
} as const;
export type TinType = ClosedEnum<typeof TinType>;

export type RecipientVerification = {
  failureCount: number;
  tinType: TinType;
  verified: boolean;
};

/** @internal */
export const TinType$inboundSchema: z.ZodNativeEnum<typeof TinType> = z
  .nativeEnum(TinType);

/** @internal */
export const TinType$outboundSchema: z.ZodNativeEnum<typeof TinType> =
  TinType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TinType$ {
  /** @deprecated use `TinType$inboundSchema` instead. */
  export const inboundSchema = TinType$inboundSchema;
  /** @deprecated use `TinType$outboundSchema` instead. */
  export const outboundSchema = TinType$outboundSchema;
}

/** @internal */
export const RecipientVerification$inboundSchema: z.ZodType<
  RecipientVerification,
  z.ZodTypeDef,
  unknown
> = z.object({
  failureCount: z.number(),
  tinType: TinType$inboundSchema,
  verified: z.boolean(),
});

/** @internal */
export type RecipientVerification$Outbound = {
  failureCount: number;
  tinType: string;
  verified: boolean;
};

/** @internal */
export const RecipientVerification$outboundSchema: z.ZodType<
  RecipientVerification$Outbound,
  z.ZodTypeDef,
  RecipientVerification
> = z.object({
  failureCount: z.number(),
  tinType: TinType$outboundSchema,
  verified: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientVerification$ {
  /** @deprecated use `RecipientVerification$inboundSchema` instead. */
  export const inboundSchema = RecipientVerification$inboundSchema;
  /** @deprecated use `RecipientVerification$outboundSchema` instead. */
  export const outboundSchema = RecipientVerification$outboundSchema;
  /** @deprecated use `RecipientVerification$Outbound` instead. */
  export type Outbound = RecipientVerification$Outbound;
}
