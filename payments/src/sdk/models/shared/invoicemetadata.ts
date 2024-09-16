/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const PayoutPendingReason = {
  Admin: "Admin",
  PaymentNotClearedCard: "PaymentNotClearedCard",
  PaymentNotCleared: "PaymentNotCleared",
  PaymentNotClearedCollaborator: "PaymentNotClearedCollaborator",
  PaymentNotClearedFuture: "PaymentNotClearedFuture",
  PlatformErrorCard: "PlatformErrorCard",
  PlatformErrorGeneric: "PlatformErrorGeneric",
  PayoutNotEligibleYet: "PayoutNotEligibleYet",
  PayoutMethodNotSelected: "PayoutMethodNotSelected",
  PayoutMethodError: "PayoutMethodError",
  PlatformErrorGiftCard: "PlatformErrorGiftCard",
  PayoutGiftCardLinkPending: "PayoutGiftCardLinkPending",
  InstantPayoutMethodNotSelected: "InstantPayoutMethodNotSelected",
  PlatformErrorInstantPayout: "PlatformErrorInstantPayout",
  InstantPayoutNotEligibleYet: "InstantPayoutNotEligibleYet",
  PlatformErrorCurrencyCloud: "PlatformErrorCurrencyCloud",
} as const;
export type PayoutPendingReason = ClosedEnum<typeof PayoutPendingReason>;

export const PendingStatusReason = {
  CollaboratorMissingCustomEligibilityRequirement:
    "CollaboratorMissingCustomEligibilityRequirement",
  CollaboratorMissingEligibilityRequirement:
    "CollaboratorMissingEligibilityRequirement",
  MemberPayoutMethodNotSelected: "MemberPayoutMethodNotSelected",
  MemberTaxDocumentationNotVerified: "MemberTaxDocumentationNotVerified",
} as const;
export type PendingStatusReason = ClosedEnum<typeof PendingStatusReason>;

export type InvoiceMetadata = {
  depositNote?: string | null | undefined;
  invoiceDate?: string | null | undefined;
  payoutPendingReason?: PayoutPendingReason | null | undefined;
  pendingStatusReason?: PendingStatusReason | null | undefined;
  purchaseOrderNumber?: string | null | undefined;
};

/** @internal */
export const PayoutPendingReason$inboundSchema: z.ZodNativeEnum<
  typeof PayoutPendingReason
> = z.nativeEnum(PayoutPendingReason);

/** @internal */
export const PayoutPendingReason$outboundSchema: z.ZodNativeEnum<
  typeof PayoutPendingReason
> = PayoutPendingReason$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PayoutPendingReason$ {
  /** @deprecated use `PayoutPendingReason$inboundSchema` instead. */
  export const inboundSchema = PayoutPendingReason$inboundSchema;
  /** @deprecated use `PayoutPendingReason$outboundSchema` instead. */
  export const outboundSchema = PayoutPendingReason$outboundSchema;
}

/** @internal */
export const PendingStatusReason$inboundSchema: z.ZodNativeEnum<
  typeof PendingStatusReason
> = z.nativeEnum(PendingStatusReason);

/** @internal */
export const PendingStatusReason$outboundSchema: z.ZodNativeEnum<
  typeof PendingStatusReason
> = PendingStatusReason$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PendingStatusReason$ {
  /** @deprecated use `PendingStatusReason$inboundSchema` instead. */
  export const inboundSchema = PendingStatusReason$inboundSchema;
  /** @deprecated use `PendingStatusReason$outboundSchema` instead. */
  export const outboundSchema = PendingStatusReason$outboundSchema;
}

/** @internal */
export const InvoiceMetadata$inboundSchema: z.ZodType<
  InvoiceMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  depositNote: z.nullable(z.string()).optional(),
  invoiceDate: z.nullable(z.string()).optional(),
  payoutPendingReason: z.nullable(PayoutPendingReason$inboundSchema).optional(),
  pendingStatusReason: z.nullable(PendingStatusReason$inboundSchema).optional(),
  purchaseOrderNumber: z.nullable(z.string()).optional(),
});

/** @internal */
export type InvoiceMetadata$Outbound = {
  depositNote?: string | null | undefined;
  invoiceDate?: string | null | undefined;
  payoutPendingReason?: string | null | undefined;
  pendingStatusReason?: string | null | undefined;
  purchaseOrderNumber?: string | null | undefined;
};

/** @internal */
export const InvoiceMetadata$outboundSchema: z.ZodType<
  InvoiceMetadata$Outbound,
  z.ZodTypeDef,
  InvoiceMetadata
> = z.object({
  depositNote: z.nullable(z.string()).optional(),
  invoiceDate: z.nullable(z.string()).optional(),
  payoutPendingReason: z.nullable(PayoutPendingReason$outboundSchema)
    .optional(),
  pendingStatusReason: z.nullable(PendingStatusReason$outboundSchema)
    .optional(),
  purchaseOrderNumber: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvoiceMetadata$ {
  /** @deprecated use `InvoiceMetadata$inboundSchema` instead. */
  export const inboundSchema = InvoiceMetadata$inboundSchema;
  /** @deprecated use `InvoiceMetadata$outboundSchema` instead. */
  export const outboundSchema = InvoiceMetadata$outboundSchema;
  /** @deprecated use `InvoiceMetadata$Outbound` instead. */
  export type Outbound = InvoiceMetadata$Outbound;
}
