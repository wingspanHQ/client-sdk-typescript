/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import {
  Frequency,
  Frequency$inboundSchema,
  Frequency$Outbound,
  Frequency$outboundSchema,
} from "./frequency.js";
import {
  InvoiceDataCreateRequest,
  InvoiceDataCreateRequest$inboundSchema,
  InvoiceDataCreateRequest$Outbound,
  InvoiceDataCreateRequest$outboundSchema,
} from "./invoicedatacreaterequest.js";
import {
  ScheduleDate,
  ScheduleDate$inboundSchema,
  ScheduleDate$Outbound,
  ScheduleDate$outboundSchema,
} from "./scheduledate.js";

export const InvoiceTemplateCreateRequestStatus = {
  Active: "Active",
  Draft: "Draft",
  Expired: "Expired",
  Cancelled: "Cancelled",
} as const;
export type InvoiceTemplateCreateRequestStatus = ClosedEnum<
  typeof InvoiceTemplateCreateRequestStatus
>;

export type InvoiceTemplateCreateRequest = {
  dueInDays?: number | null | undefined;
  frequency?: Frequency | null | undefined;
  invoiceData: InvoiceDataCreateRequest;
  isSchedulingOnly?: boolean | null | undefined;
  labels?: { [k: string]: string } | null | undefined;
  scheduleDates?: Array<ScheduleDate> | null | undefined;
  sendEmails?: boolean | null | undefined;
  status: InvoiceTemplateCreateRequestStatus;
};

/** @internal */
export const InvoiceTemplateCreateRequestStatus$inboundSchema: z.ZodNativeEnum<
  typeof InvoiceTemplateCreateRequestStatus
> = z.nativeEnum(InvoiceTemplateCreateRequestStatus);

/** @internal */
export const InvoiceTemplateCreateRequestStatus$outboundSchema: z.ZodNativeEnum<
  typeof InvoiceTemplateCreateRequestStatus
> = InvoiceTemplateCreateRequestStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvoiceTemplateCreateRequestStatus$ {
  /** @deprecated use `InvoiceTemplateCreateRequestStatus$inboundSchema` instead. */
  export const inboundSchema = InvoiceTemplateCreateRequestStatus$inboundSchema;
  /** @deprecated use `InvoiceTemplateCreateRequestStatus$outboundSchema` instead. */
  export const outboundSchema =
    InvoiceTemplateCreateRequestStatus$outboundSchema;
}

/** @internal */
export const InvoiceTemplateCreateRequest$inboundSchema: z.ZodType<
  InvoiceTemplateCreateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  dueInDays: z.nullable(z.number()).optional(),
  frequency: z.nullable(Frequency$inboundSchema).optional(),
  invoiceData: InvoiceDataCreateRequest$inboundSchema,
  isSchedulingOnly: z.nullable(z.boolean()).optional(),
  labels: z.nullable(z.record(z.string())).optional(),
  scheduleDates: z.nullable(z.array(ScheduleDate$inboundSchema)).optional(),
  sendEmails: z.nullable(z.boolean()).optional(),
  status: InvoiceTemplateCreateRequestStatus$inboundSchema,
});

/** @internal */
export type InvoiceTemplateCreateRequest$Outbound = {
  dueInDays?: number | null | undefined;
  frequency?: Frequency$Outbound | null | undefined;
  invoiceData: InvoiceDataCreateRequest$Outbound;
  isSchedulingOnly?: boolean | null | undefined;
  labels?: { [k: string]: string } | null | undefined;
  scheduleDates?: Array<ScheduleDate$Outbound> | null | undefined;
  sendEmails?: boolean | null | undefined;
  status: string;
};

/** @internal */
export const InvoiceTemplateCreateRequest$outboundSchema: z.ZodType<
  InvoiceTemplateCreateRequest$Outbound,
  z.ZodTypeDef,
  InvoiceTemplateCreateRequest
> = z.object({
  dueInDays: z.nullable(z.number()).optional(),
  frequency: z.nullable(Frequency$outboundSchema).optional(),
  invoiceData: InvoiceDataCreateRequest$outboundSchema,
  isSchedulingOnly: z.nullable(z.boolean()).optional(),
  labels: z.nullable(z.record(z.string())).optional(),
  scheduleDates: z.nullable(z.array(ScheduleDate$outboundSchema)).optional(),
  sendEmails: z.nullable(z.boolean()).optional(),
  status: InvoiceTemplateCreateRequestStatus$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvoiceTemplateCreateRequest$ {
  /** @deprecated use `InvoiceTemplateCreateRequest$inboundSchema` instead. */
  export const inboundSchema = InvoiceTemplateCreateRequest$inboundSchema;
  /** @deprecated use `InvoiceTemplateCreateRequest$outboundSchema` instead. */
  export const outboundSchema = InvoiceTemplateCreateRequest$outboundSchema;
  /** @deprecated use `InvoiceTemplateCreateRequest$Outbound` instead. */
  export type Outbound = InvoiceTemplateCreateRequest$Outbound;
}
