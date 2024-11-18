/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  InvoiceRefundEvents,
  InvoiceRefundEvents$inboundSchema,
  InvoiceRefundEvents$Outbound,
  InvoiceRefundEvents$outboundSchema,
} from "./invoicerefundevents.js";

export const InvoiceRefundDestinationDestinationType = {
  Account: "Account",
  Card: "Card",
  InternalAccount: "InternalAccount",
  PaperCheck: "PaperCheck",
  WeGift: "WeGift",
} as const;
export type InvoiceRefundDestinationDestinationType = ClosedEnum<
  typeof InvoiceRefundDestinationDestinationType
>;

export const RefundType = {
  Account: "Account",
  TaxWithholding: "TaxWithholding",
  Wallet: "Wallet",
  Card: "Card",
} as const;
export type RefundType = ClosedEnum<typeof RefundType>;

export type InvoiceRefundDestination = {
  amount: number;
  createdAt: string;
  destinationId?: string | null | undefined;
  destinationType: InvoiceRefundDestinationDestinationType;
  events: InvoiceRefundEvents;
  labels: { [k: string]: string };
  refundType: RefundType;
  stripeTransferId?: string | null | undefined;
  transactionId?: string | null | undefined;
  transferId?: string | null | undefined;
  updatedAt: string;
};

/** @internal */
export const InvoiceRefundDestinationDestinationType$inboundSchema:
  z.ZodNativeEnum<typeof InvoiceRefundDestinationDestinationType> = z
    .nativeEnum(InvoiceRefundDestinationDestinationType);

/** @internal */
export const InvoiceRefundDestinationDestinationType$outboundSchema:
  z.ZodNativeEnum<typeof InvoiceRefundDestinationDestinationType> =
    InvoiceRefundDestinationDestinationType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvoiceRefundDestinationDestinationType$ {
  /** @deprecated use `InvoiceRefundDestinationDestinationType$inboundSchema` instead. */
  export const inboundSchema =
    InvoiceRefundDestinationDestinationType$inboundSchema;
  /** @deprecated use `InvoiceRefundDestinationDestinationType$outboundSchema` instead. */
  export const outboundSchema =
    InvoiceRefundDestinationDestinationType$outboundSchema;
}

/** @internal */
export const RefundType$inboundSchema: z.ZodNativeEnum<typeof RefundType> = z
  .nativeEnum(RefundType);

/** @internal */
export const RefundType$outboundSchema: z.ZodNativeEnum<typeof RefundType> =
  RefundType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RefundType$ {
  /** @deprecated use `RefundType$inboundSchema` instead. */
  export const inboundSchema = RefundType$inboundSchema;
  /** @deprecated use `RefundType$outboundSchema` instead. */
  export const outboundSchema = RefundType$outboundSchema;
}

/** @internal */
export const InvoiceRefundDestination$inboundSchema: z.ZodType<
  InvoiceRefundDestination,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: z.number(),
  createdAt: z.string(),
  destinationId: z.nullable(z.string()).optional(),
  destinationType: InvoiceRefundDestinationDestinationType$inboundSchema,
  events: InvoiceRefundEvents$inboundSchema,
  labels: z.record(z.string()),
  refundType: RefundType$inboundSchema,
  stripeTransferId: z.nullable(z.string()).optional(),
  transactionId: z.nullable(z.string()).optional(),
  transferId: z.nullable(z.string()).optional(),
  updatedAt: z.string(),
});

/** @internal */
export type InvoiceRefundDestination$Outbound = {
  amount: number;
  createdAt: string;
  destinationId?: string | null | undefined;
  destinationType: string;
  events: InvoiceRefundEvents$Outbound;
  labels: { [k: string]: string };
  refundType: string;
  stripeTransferId?: string | null | undefined;
  transactionId?: string | null | undefined;
  transferId?: string | null | undefined;
  updatedAt: string;
};

/** @internal */
export const InvoiceRefundDestination$outboundSchema: z.ZodType<
  InvoiceRefundDestination$Outbound,
  z.ZodTypeDef,
  InvoiceRefundDestination
> = z.object({
  amount: z.number(),
  createdAt: z.string(),
  destinationId: z.nullable(z.string()).optional(),
  destinationType: InvoiceRefundDestinationDestinationType$outboundSchema,
  events: InvoiceRefundEvents$outboundSchema,
  labels: z.record(z.string()),
  refundType: RefundType$outboundSchema,
  stripeTransferId: z.nullable(z.string()).optional(),
  transactionId: z.nullable(z.string()).optional(),
  transferId: z.nullable(z.string()).optional(),
  updatedAt: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvoiceRefundDestination$ {
  /** @deprecated use `InvoiceRefundDestination$inboundSchema` instead. */
  export const inboundSchema = InvoiceRefundDestination$inboundSchema;
  /** @deprecated use `InvoiceRefundDestination$outboundSchema` instead. */
  export const outboundSchema = InvoiceRefundDestination$outboundSchema;
  /** @deprecated use `InvoiceRefundDestination$Outbound` instead. */
  export type Outbound = InvoiceRefundDestination$Outbound;
}

export function invoiceRefundDestinationToJSON(
  invoiceRefundDestination: InvoiceRefundDestination,
): string {
  return JSON.stringify(
    InvoiceRefundDestination$outboundSchema.parse(invoiceRefundDestination),
  );
}

export function invoiceRefundDestinationFromJSON(
  jsonString: string,
): SafeParseResult<InvoiceRefundDestination, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InvoiceRefundDestination$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InvoiceRefundDestination' from JSON`,
  );
}
