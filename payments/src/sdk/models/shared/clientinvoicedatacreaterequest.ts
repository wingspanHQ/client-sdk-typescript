/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import {
  FeeHandlingConfig,
  FeeHandlingConfig$inboundSchema,
  FeeHandlingConfig$Outbound,
  FeeHandlingConfig$outboundSchema,
} from "./feehandlingconfig.js";
import {
  InvoiceLineItemsCreateRequest,
  InvoiceLineItemsCreateRequest$inboundSchema,
  InvoiceLineItemsCreateRequest$Outbound,
  InvoiceLineItemsCreateRequest$outboundSchema,
} from "./invoicelineitemscreaterequest.js";

export const ClientInvoiceDataCreateRequestCurrency = {
  Usd: "USD",
  Cad: "CAD",
} as const;
export type ClientInvoiceDataCreateRequestCurrency = ClosedEnum<
  typeof ClientInvoiceDataCreateRequestCurrency
>;

export type ClientInvoiceDataCreateRequest = {
  creditFeeHandling?: FeeHandlingConfig | null | undefined;
  currency?: ClientInvoiceDataCreateRequestCurrency | null | undefined;
  dueDate?: string | null | undefined;
  lineItems: Array<InvoiceLineItemsCreateRequest>;
};

/** @internal */
export const ClientInvoiceDataCreateRequestCurrency$inboundSchema:
  z.ZodNativeEnum<typeof ClientInvoiceDataCreateRequestCurrency> = z.nativeEnum(
    ClientInvoiceDataCreateRequestCurrency,
  );

/** @internal */
export const ClientInvoiceDataCreateRequestCurrency$outboundSchema:
  z.ZodNativeEnum<typeof ClientInvoiceDataCreateRequestCurrency> =
    ClientInvoiceDataCreateRequestCurrency$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ClientInvoiceDataCreateRequestCurrency$ {
  /** @deprecated use `ClientInvoiceDataCreateRequestCurrency$inboundSchema` instead. */
  export const inboundSchema =
    ClientInvoiceDataCreateRequestCurrency$inboundSchema;
  /** @deprecated use `ClientInvoiceDataCreateRequestCurrency$outboundSchema` instead. */
  export const outboundSchema =
    ClientInvoiceDataCreateRequestCurrency$outboundSchema;
}

/** @internal */
export const ClientInvoiceDataCreateRequest$inboundSchema: z.ZodType<
  ClientInvoiceDataCreateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  creditFeeHandling: z.nullable(FeeHandlingConfig$inboundSchema).optional(),
  currency: z.nullable(ClientInvoiceDataCreateRequestCurrency$inboundSchema)
    .optional(),
  dueDate: z.nullable(z.string()).optional(),
  lineItems: z.array(InvoiceLineItemsCreateRequest$inboundSchema),
});

/** @internal */
export type ClientInvoiceDataCreateRequest$Outbound = {
  creditFeeHandling?: FeeHandlingConfig$Outbound | null | undefined;
  currency?: string | null | undefined;
  dueDate?: string | null | undefined;
  lineItems: Array<InvoiceLineItemsCreateRequest$Outbound>;
};

/** @internal */
export const ClientInvoiceDataCreateRequest$outboundSchema: z.ZodType<
  ClientInvoiceDataCreateRequest$Outbound,
  z.ZodTypeDef,
  ClientInvoiceDataCreateRequest
> = z.object({
  creditFeeHandling: z.nullable(FeeHandlingConfig$outboundSchema).optional(),
  currency: z.nullable(ClientInvoiceDataCreateRequestCurrency$outboundSchema)
    .optional(),
  dueDate: z.nullable(z.string()).optional(),
  lineItems: z.array(InvoiceLineItemsCreateRequest$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ClientInvoiceDataCreateRequest$ {
  /** @deprecated use `ClientInvoiceDataCreateRequest$inboundSchema` instead. */
  export const inboundSchema = ClientInvoiceDataCreateRequest$inboundSchema;
  /** @deprecated use `ClientInvoiceDataCreateRequest$outboundSchema` instead. */
  export const outboundSchema = ClientInvoiceDataCreateRequest$outboundSchema;
  /** @deprecated use `ClientInvoiceDataCreateRequest$Outbound` instead. */
  export type Outbound = ClientInvoiceDataCreateRequest$Outbound;
}
