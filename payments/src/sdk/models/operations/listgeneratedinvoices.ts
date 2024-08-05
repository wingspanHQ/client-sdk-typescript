/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type ListGeneratedInvoicesResponse = {
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
     * A list of Client Created Invoices
     */
    classes?: Array<shared.ClientInvoice> | undefined;
};

/** @internal */
export const ListGeneratedInvoicesResponse$inboundSchema: z.ZodType<
    ListGeneratedInvoicesResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        classes: z.array(shared.ClientInvoice$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type ListGeneratedInvoicesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    classes?: Array<shared.ClientInvoice$Outbound> | undefined;
};

/** @internal */
export const ListGeneratedInvoicesResponse$outboundSchema: z.ZodType<
    ListGeneratedInvoicesResponse$Outbound,
    z.ZodTypeDef,
    ListGeneratedInvoicesResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        classes: z.array(shared.ClientInvoice$outboundSchema).optional(),
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
export namespace ListGeneratedInvoicesResponse$ {
    /** @deprecated use `ListGeneratedInvoicesResponse$inboundSchema` instead. */
    export const inboundSchema = ListGeneratedInvoicesResponse$inboundSchema;
    /** @deprecated use `ListGeneratedInvoicesResponse$outboundSchema` instead. */
    export const outboundSchema = ListGeneratedInvoicesResponse$outboundSchema;
    /** @deprecated use `ListGeneratedInvoicesResponse$Outbound` instead. */
    export type Outbound = ListGeneratedInvoicesResponse$Outbound;
}
