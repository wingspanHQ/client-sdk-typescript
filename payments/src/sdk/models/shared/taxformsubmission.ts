/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  TaxFormSubmissionData,
  TaxFormSubmissionData$inboundSchema,
  TaxFormSubmissionData$Outbound,
  TaxFormSubmissionData$outboundSchema,
} from "./taxformsubmissiondata.js";
import {
  TaxFormSubmissionEvents,
  TaxFormSubmissionEvents$inboundSchema,
  TaxFormSubmissionEvents$Outbound,
  TaxFormSubmissionEvents$outboundSchema,
} from "./taxformsubmissionevents.js";

export const CorrectionType = {
  None: "None",
  Type1: "Type1",
  Type2: "Type2",
} as const;
export type CorrectionType = ClosedEnum<typeof CorrectionType>;

export const TaxFormSubmissionDeliveryMethod = {
  Electronic: "Electronic",
  Mail: "Mail",
} as const;
export type TaxFormSubmissionDeliveryMethod = ClosedEnum<
  typeof TaxFormSubmissionDeliveryMethod
>;

export const TaxFormSubmissionStatus = {
  Pending: "Pending",
  ReadyToSubmitToIrs: "ReadyToSubmitToIrs",
  SubmittedToIrs: "SubmittedToIrs",
  AcceptedByIrs: "AcceptedByIrs",
  RejectedByIrs: "RejectedByIrs",
  PendingCorrection: "PendingCorrection",
  Excluded: "Excluded",
  Ineligible: "Ineligible",
} as const;
export type TaxFormSubmissionStatus = ClosedEnum<
  typeof TaxFormSubmissionStatus
>;

export type TaxFormSubmission = {
  correctionType: CorrectionType;
  deliveryMethod: TaxFormSubmissionDeliveryMethod;
  events?: TaxFormSubmissionEvents | null | undefined;
  externalDocumentId: string;
  externalMailingId?: string | null | undefined;
  isCorrected: boolean;
  previousExternalMailingIds?: any | null | undefined;
  status: TaxFormSubmissionStatus;
  submissionData: TaxFormSubmissionData;
  submissionId: string;
};

/** @internal */
export const CorrectionType$inboundSchema: z.ZodNativeEnum<
  typeof CorrectionType
> = z.nativeEnum(CorrectionType);

/** @internal */
export const CorrectionType$outboundSchema: z.ZodNativeEnum<
  typeof CorrectionType
> = CorrectionType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CorrectionType$ {
  /** @deprecated use `CorrectionType$inboundSchema` instead. */
  export const inboundSchema = CorrectionType$inboundSchema;
  /** @deprecated use `CorrectionType$outboundSchema` instead. */
  export const outboundSchema = CorrectionType$outboundSchema;
}

/** @internal */
export const TaxFormSubmissionDeliveryMethod$inboundSchema: z.ZodNativeEnum<
  typeof TaxFormSubmissionDeliveryMethod
> = z.nativeEnum(TaxFormSubmissionDeliveryMethod);

/** @internal */
export const TaxFormSubmissionDeliveryMethod$outboundSchema: z.ZodNativeEnum<
  typeof TaxFormSubmissionDeliveryMethod
> = TaxFormSubmissionDeliveryMethod$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaxFormSubmissionDeliveryMethod$ {
  /** @deprecated use `TaxFormSubmissionDeliveryMethod$inboundSchema` instead. */
  export const inboundSchema = TaxFormSubmissionDeliveryMethod$inboundSchema;
  /** @deprecated use `TaxFormSubmissionDeliveryMethod$outboundSchema` instead. */
  export const outboundSchema = TaxFormSubmissionDeliveryMethod$outboundSchema;
}

/** @internal */
export const TaxFormSubmissionStatus$inboundSchema: z.ZodNativeEnum<
  typeof TaxFormSubmissionStatus
> = z.nativeEnum(TaxFormSubmissionStatus);

/** @internal */
export const TaxFormSubmissionStatus$outboundSchema: z.ZodNativeEnum<
  typeof TaxFormSubmissionStatus
> = TaxFormSubmissionStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaxFormSubmissionStatus$ {
  /** @deprecated use `TaxFormSubmissionStatus$inboundSchema` instead. */
  export const inboundSchema = TaxFormSubmissionStatus$inboundSchema;
  /** @deprecated use `TaxFormSubmissionStatus$outboundSchema` instead. */
  export const outboundSchema = TaxFormSubmissionStatus$outboundSchema;
}

/** @internal */
export const TaxFormSubmission$inboundSchema: z.ZodType<
  TaxFormSubmission,
  z.ZodTypeDef,
  unknown
> = z.object({
  correctionType: CorrectionType$inboundSchema,
  deliveryMethod: TaxFormSubmissionDeliveryMethod$inboundSchema,
  events: z.nullable(TaxFormSubmissionEvents$inboundSchema).optional(),
  externalDocumentId: z.string(),
  externalMailingId: z.nullable(z.string()).optional(),
  isCorrected: z.boolean(),
  previousExternalMailingIds: z.nullable(z.any()).optional(),
  status: TaxFormSubmissionStatus$inboundSchema,
  submissionData: TaxFormSubmissionData$inboundSchema,
  submissionId: z.string(),
});

/** @internal */
export type TaxFormSubmission$Outbound = {
  correctionType: string;
  deliveryMethod: string;
  events?: TaxFormSubmissionEvents$Outbound | null | undefined;
  externalDocumentId: string;
  externalMailingId?: string | null | undefined;
  isCorrected: boolean;
  previousExternalMailingIds?: any | null | undefined;
  status: string;
  submissionData: TaxFormSubmissionData$Outbound;
  submissionId: string;
};

/** @internal */
export const TaxFormSubmission$outboundSchema: z.ZodType<
  TaxFormSubmission$Outbound,
  z.ZodTypeDef,
  TaxFormSubmission
> = z.object({
  correctionType: CorrectionType$outboundSchema,
  deliveryMethod: TaxFormSubmissionDeliveryMethod$outboundSchema,
  events: z.nullable(TaxFormSubmissionEvents$outboundSchema).optional(),
  externalDocumentId: z.string(),
  externalMailingId: z.nullable(z.string()).optional(),
  isCorrected: z.boolean(),
  previousExternalMailingIds: z.nullable(z.any()).optional(),
  status: TaxFormSubmissionStatus$outboundSchema,
  submissionData: TaxFormSubmissionData$outboundSchema,
  submissionId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaxFormSubmission$ {
  /** @deprecated use `TaxFormSubmission$inboundSchema` instead. */
  export const inboundSchema = TaxFormSubmission$inboundSchema;
  /** @deprecated use `TaxFormSubmission$outboundSchema` instead. */
  export const outboundSchema = TaxFormSubmission$outboundSchema;
  /** @deprecated use `TaxFormSubmission$Outbound` instead. */
  export type Outbound = TaxFormSubmission$Outbound;
}

export function taxFormSubmissionToJSON(
  taxFormSubmission: TaxFormSubmission,
): string {
  return JSON.stringify(
    TaxFormSubmission$outboundSchema.parse(taxFormSubmission),
  );
}

export function taxFormSubmissionFromJSON(
  jsonString: string,
): SafeParseResult<TaxFormSubmission, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TaxFormSubmission$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TaxFormSubmission' from JSON`,
  );
}
