/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type UpdatePayrollSettingRequest = {
  payrollSettingsUpdate?: shared.PayrollSettingsUpdate | undefined;
  /**
   * Unique identifier
   */
  id: string;
};

export type UpdatePayrollSettingResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The payroll settings for a member
   */
  payrollSettings?: shared.PayrollSettings | undefined;
  /**
   * HTTP response status code for this operation
   */
  statusCode: number;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse: Response;
};

/** @internal */
export const UpdatePayrollSettingRequest$inboundSchema: z.ZodType<
  UpdatePayrollSettingRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  PayrollSettingsUpdate: shared.PayrollSettingsUpdate$inboundSchema.optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "PayrollSettingsUpdate": "payrollSettingsUpdate",
  });
});

/** @internal */
export type UpdatePayrollSettingRequest$Outbound = {
  PayrollSettingsUpdate?: shared.PayrollSettingsUpdate$Outbound | undefined;
  id: string;
};

/** @internal */
export const UpdatePayrollSettingRequest$outboundSchema: z.ZodType<
  UpdatePayrollSettingRequest$Outbound,
  z.ZodTypeDef,
  UpdatePayrollSettingRequest
> = z.object({
  payrollSettingsUpdate: shared.PayrollSettingsUpdate$outboundSchema.optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    payrollSettingsUpdate: "PayrollSettingsUpdate",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatePayrollSettingRequest$ {
  /** @deprecated use `UpdatePayrollSettingRequest$inboundSchema` instead. */
  export const inboundSchema = UpdatePayrollSettingRequest$inboundSchema;
  /** @deprecated use `UpdatePayrollSettingRequest$outboundSchema` instead. */
  export const outboundSchema = UpdatePayrollSettingRequest$outboundSchema;
  /** @deprecated use `UpdatePayrollSettingRequest$Outbound` instead. */
  export type Outbound = UpdatePayrollSettingRequest$Outbound;
}

/** @internal */
export const UpdatePayrollSettingResponse$inboundSchema: z.ZodType<
  UpdatePayrollSettingResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  PayrollSettings: shared.PayrollSettings$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "PayrollSettings": "payrollSettings",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type UpdatePayrollSettingResponse$Outbound = {
  ContentType: string;
  PayrollSettings?: shared.PayrollSettings$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const UpdatePayrollSettingResponse$outboundSchema: z.ZodType<
  UpdatePayrollSettingResponse$Outbound,
  z.ZodTypeDef,
  UpdatePayrollSettingResponse
> = z.object({
  contentType: z.string(),
  payrollSettings: shared.PayrollSettings$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    payrollSettings: "PayrollSettings",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatePayrollSettingResponse$ {
  /** @deprecated use `UpdatePayrollSettingResponse$inboundSchema` instead. */
  export const inboundSchema = UpdatePayrollSettingResponse$inboundSchema;
  /** @deprecated use `UpdatePayrollSettingResponse$outboundSchema` instead. */
  export const outboundSchema = UpdatePayrollSettingResponse$outboundSchema;
  /** @deprecated use `UpdatePayrollSettingResponse$Outbound` instead. */
  export type Outbound = UpdatePayrollSettingResponse$Outbound;
}
