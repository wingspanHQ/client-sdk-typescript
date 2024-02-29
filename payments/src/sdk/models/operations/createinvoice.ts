/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type CreateInvoiceResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * An invoice
     */
    invoice?: shared.Invoice | undefined;
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
export namespace CreateInvoiceResponse$ {
    export type Inbound = {
        ContentType: string;
        Invoice?: shared.Invoice$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<CreateInvoiceResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Invoice: shared.Invoice$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.Invoice === undefined ? null : { invoice: v.Invoice }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        Invoice?: shared.Invoice$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateInvoiceResponse> = z
        .object({
            contentType: z.string(),
            invoice: shared.Invoice$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.invoice === undefined ? null : { Invoice: v.invoice }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
