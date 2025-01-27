/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  InvoiceAttachmentFile,
  InvoiceAttachmentFile$inboundSchema,
  InvoiceAttachmentFile$Outbound,
  InvoiceAttachmentFile$outboundSchema,
} from "./invoiceattachmentfile.js";

export type InvoiceAttachments = {
  customAttachmentIds?: Array<string> | null | undefined;
  customAttachmentInfo?: Array<InvoiceAttachmentFile> | null | undefined;
  invoiceLink?: string | null | undefined;
  invoicePdf?: string | null | undefined;
  receiptPdf?: string | null | undefined;
};

/** @internal */
export const InvoiceAttachments$inboundSchema: z.ZodType<
  InvoiceAttachments,
  z.ZodTypeDef,
  unknown
> = z.object({
  customAttachmentIds: z.nullable(z.array(z.string())).optional(),
  customAttachmentInfo: z.nullable(z.array(InvoiceAttachmentFile$inboundSchema))
    .optional(),
  invoiceLink: z.nullable(z.string()).optional(),
  invoicePdf: z.nullable(z.string()).optional(),
  receiptPdf: z.nullable(z.string()).optional(),
});

/** @internal */
export type InvoiceAttachments$Outbound = {
  customAttachmentIds?: Array<string> | null | undefined;
  customAttachmentInfo?:
    | Array<InvoiceAttachmentFile$Outbound>
    | null
    | undefined;
  invoiceLink?: string | null | undefined;
  invoicePdf?: string | null | undefined;
  receiptPdf?: string | null | undefined;
};

/** @internal */
export const InvoiceAttachments$outboundSchema: z.ZodType<
  InvoiceAttachments$Outbound,
  z.ZodTypeDef,
  InvoiceAttachments
> = z.object({
  customAttachmentIds: z.nullable(z.array(z.string())).optional(),
  customAttachmentInfo: z.nullable(
    z.array(InvoiceAttachmentFile$outboundSchema),
  ).optional(),
  invoiceLink: z.nullable(z.string()).optional(),
  invoicePdf: z.nullable(z.string()).optional(),
  receiptPdf: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvoiceAttachments$ {
  /** @deprecated use `InvoiceAttachments$inboundSchema` instead. */
  export const inboundSchema = InvoiceAttachments$inboundSchema;
  /** @deprecated use `InvoiceAttachments$outboundSchema` instead. */
  export const outboundSchema = InvoiceAttachments$outboundSchema;
  /** @deprecated use `InvoiceAttachments$Outbound` instead. */
  export type Outbound = InvoiceAttachments$Outbound;
}

export function invoiceAttachmentsToJSON(
  invoiceAttachments: InvoiceAttachments,
): string {
  return JSON.stringify(
    InvoiceAttachments$outboundSchema.parse(invoiceAttachments),
  );
}

export function invoiceAttachmentsFromJSON(
  jsonString: string,
): SafeParseResult<InvoiceAttachments, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InvoiceAttachments$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InvoiceAttachments' from JSON`,
  );
}
