/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type ListInvoiceTemplatesResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * At list of invoice templates
     */
    classes?: Array<shared.InvoiceTemplate> | undefined;
};

/** @internal */
export const ListInvoiceTemplatesResponse$inboundSchema: z.ZodType<
    ListInvoiceTemplatesResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        classes: z.array(shared.InvoiceTemplate$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type ListInvoiceTemplatesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    classes?: Array<shared.InvoiceTemplate$Outbound> | undefined;
};

/** @internal */
export const ListInvoiceTemplatesResponse$outboundSchema: z.ZodType<
    ListInvoiceTemplatesResponse$Outbound,
    z.ZodTypeDef,
    ListInvoiceTemplatesResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        classes: z.array(shared.InvoiceTemplate$outboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListInvoiceTemplatesResponse$ {
    /** @deprecated use `ListInvoiceTemplatesResponse$inboundSchema` instead. */
    export const inboundSchema = ListInvoiceTemplatesResponse$inboundSchema;
    /** @deprecated use `ListInvoiceTemplatesResponse$outboundSchema` instead. */
    export const outboundSchema = ListInvoiceTemplatesResponse$outboundSchema;
    /** @deprecated use `ListInvoiceTemplatesResponse$Outbound` instead. */
    export type Outbound = ListInvoiceTemplatesResponse$Outbound;
}
