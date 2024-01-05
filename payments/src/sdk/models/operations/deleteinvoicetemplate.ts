/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type DeleteInvoiceTemplateRequest = {
    /**
     * Unique identifier
     */
    id: string;
};

export type DeleteInvoiceTemplateResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * A recurring invoice
     */
    invoiceTemplate?: shared.InvoiceTemplate | undefined;
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
export namespace DeleteInvoiceTemplateRequest$ {
    export type Inbound = {
        id: string;
    };

    export const inboundSchema: z.ZodType<DeleteInvoiceTemplateRequest, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteInvoiceTemplateRequest> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });
}

/** @internal */
export namespace DeleteInvoiceTemplateResponse$ {
    export type Inbound = {
        ContentType: string;
        InvoiceTemplate?: shared.InvoiceTemplate$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<DeleteInvoiceTemplateResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            InvoiceTemplate: shared.InvoiceTemplate$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.InvoiceTemplate === undefined
                    ? null
                    : { invoiceTemplate: v.InvoiceTemplate }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        InvoiceTemplate?: shared.InvoiceTemplate$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteInvoiceTemplateResponse> =
        z
            .object({
                contentType: z.string(),
                invoiceTemplate: shared.InvoiceTemplate$.outboundSchema.optional(),
                statusCode: z.number().int(),
                rawResponse: z.instanceof(Response).transform(() => {
                    throw new Error("Response cannot be serialized");
                }),
            })
            .transform((v) => {
                return {
                    ContentType: v.contentType,
                    ...(v.invoiceTemplate === undefined
                        ? null
                        : { InvoiceTemplate: v.invoiceTemplate }),
                    StatusCode: v.statusCode,
                    RawResponse: v.rawResponse,
                };
            });
}