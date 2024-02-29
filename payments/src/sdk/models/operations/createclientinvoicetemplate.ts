/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type CreateClientInvoiceTemplateResponse = {
    /**
     * A client created invoiceTemplate (recurring Invoice)
     */
    clientInvoiceTemplate?: shared.ClientInvoiceTemplate | undefined;
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
};

/** @internal */
export namespace CreateClientInvoiceTemplateResponse$ {
    export type Inbound = {
        ClientInvoiceTemplate?: shared.ClientInvoiceTemplate$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        CreateClientInvoiceTemplateResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ClientInvoiceTemplate: shared.ClientInvoiceTemplate$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.ClientInvoiceTemplate === undefined
                    ? null
                    : { clientInvoiceTemplate: v.ClientInvoiceTemplate }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ClientInvoiceTemplate?: shared.ClientInvoiceTemplate$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CreateClientInvoiceTemplateResponse
    > = z
        .object({
            clientInvoiceTemplate: shared.ClientInvoiceTemplate$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.clientInvoiceTemplate === undefined
                    ? null
                    : { ClientInvoiceTemplate: v.clientInvoiceTemplate }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}