/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const PayoutDestinationUpdateDestinationType = {
  Account: "Account",
  Card: "Card",
  WeGift: "WeGift",
} as const;
export type PayoutDestinationUpdateDestinationType = ClosedEnum<
  typeof PayoutDestinationUpdateDestinationType
>;

export const PayoutDestinationUpdatePayoutMethod = {
  Standard: "Standard",
  Instant: "Instant",
  Expedited: "Expedited",
  Check: "Check",
  ECheck: "ECheck",
} as const;
export type PayoutDestinationUpdatePayoutMethod = ClosedEnum<
  typeof PayoutDestinationUpdatePayoutMethod
>;

export type PayoutDestinationUpdate = {
  destinationId?: string | null | undefined;
  destinationType?: PayoutDestinationUpdateDestinationType | null | undefined;
  payoutMethod?: PayoutDestinationUpdatePayoutMethod | null | undefined;
  percentage?: number | null | undefined;
};

/** @internal */
export const PayoutDestinationUpdateDestinationType$inboundSchema:
  z.ZodNativeEnum<typeof PayoutDestinationUpdateDestinationType> = z.nativeEnum(
    PayoutDestinationUpdateDestinationType,
  );

/** @internal */
export const PayoutDestinationUpdateDestinationType$outboundSchema:
  z.ZodNativeEnum<typeof PayoutDestinationUpdateDestinationType> =
    PayoutDestinationUpdateDestinationType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PayoutDestinationUpdateDestinationType$ {
  /** @deprecated use `PayoutDestinationUpdateDestinationType$inboundSchema` instead. */
  export const inboundSchema =
    PayoutDestinationUpdateDestinationType$inboundSchema;
  /** @deprecated use `PayoutDestinationUpdateDestinationType$outboundSchema` instead. */
  export const outboundSchema =
    PayoutDestinationUpdateDestinationType$outboundSchema;
}

/** @internal */
export const PayoutDestinationUpdatePayoutMethod$inboundSchema: z.ZodNativeEnum<
  typeof PayoutDestinationUpdatePayoutMethod
> = z.nativeEnum(PayoutDestinationUpdatePayoutMethod);

/** @internal */
export const PayoutDestinationUpdatePayoutMethod$outboundSchema:
  z.ZodNativeEnum<typeof PayoutDestinationUpdatePayoutMethod> =
    PayoutDestinationUpdatePayoutMethod$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PayoutDestinationUpdatePayoutMethod$ {
  /** @deprecated use `PayoutDestinationUpdatePayoutMethod$inboundSchema` instead. */
  export const inboundSchema =
    PayoutDestinationUpdatePayoutMethod$inboundSchema;
  /** @deprecated use `PayoutDestinationUpdatePayoutMethod$outboundSchema` instead. */
  export const outboundSchema =
    PayoutDestinationUpdatePayoutMethod$outboundSchema;
}

/** @internal */
export const PayoutDestinationUpdate$inboundSchema: z.ZodType<
  PayoutDestinationUpdate,
  z.ZodTypeDef,
  unknown
> = z.object({
  destinationId: z.nullable(z.string()).optional(),
  destinationType: z.nullable(
    PayoutDestinationUpdateDestinationType$inboundSchema,
  ).optional(),
  payoutMethod: z.nullable(PayoutDestinationUpdatePayoutMethod$inboundSchema)
    .optional(),
  percentage: z.nullable(z.number()).optional(),
});

/** @internal */
export type PayoutDestinationUpdate$Outbound = {
  destinationId?: string | null | undefined;
  destinationType?: string | null | undefined;
  payoutMethod?: string | null | undefined;
  percentage?: number | null | undefined;
};

/** @internal */
export const PayoutDestinationUpdate$outboundSchema: z.ZodType<
  PayoutDestinationUpdate$Outbound,
  z.ZodTypeDef,
  PayoutDestinationUpdate
> = z.object({
  destinationId: z.nullable(z.string()).optional(),
  destinationType: z.nullable(
    PayoutDestinationUpdateDestinationType$outboundSchema,
  ).optional(),
  payoutMethod: z.nullable(PayoutDestinationUpdatePayoutMethod$outboundSchema)
    .optional(),
  percentage: z.nullable(z.number()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PayoutDestinationUpdate$ {
  /** @deprecated use `PayoutDestinationUpdate$inboundSchema` instead. */
  export const inboundSchema = PayoutDestinationUpdate$inboundSchema;
  /** @deprecated use `PayoutDestinationUpdate$outboundSchema` instead. */
  export const outboundSchema = PayoutDestinationUpdate$outboundSchema;
  /** @deprecated use `PayoutDestinationUpdate$Outbound` instead. */
  export type Outbound = PayoutDestinationUpdate$Outbound;
}
