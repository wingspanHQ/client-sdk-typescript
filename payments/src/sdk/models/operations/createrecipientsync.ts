/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type CreateRecipientSyncRequest = {
    /**
     * Unique tax Form Id
     */
    taxFormId: string;
};

export type CreateRecipientSyncResponse = {
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
     * 1099 Tax form object
     */
    taxFormResponse?: any | undefined;
};

/** @internal */
export namespace CreateRecipientSyncRequest$ {
    export type Inbound = {
        taxFormId: string;
    };

    export const inboundSchema: z.ZodType<CreateRecipientSyncRequest, z.ZodTypeDef, Inbound> = z
        .object({
            taxFormId: z.string(),
        })
        .transform((v) => {
            return {
                taxFormId: v.taxFormId,
            };
        });

    export type Outbound = {
        taxFormId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateRecipientSyncRequest> = z
        .object({
            taxFormId: z.string(),
        })
        .transform((v) => {
            return {
                taxFormId: v.taxFormId,
            };
        });
}

/** @internal */
export namespace CreateRecipientSyncResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        TaxFormResponse?: any | undefined;
    };

    export const inboundSchema: z.ZodType<CreateRecipientSyncResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            TaxFormResponse: z.any().optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.TaxFormResponse === undefined
                    ? null
                    : { taxFormResponse: v.TaxFormResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        TaxFormResponse?: any | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateRecipientSyncResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            taxFormResponse: z.any().optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.taxFormResponse === undefined
                    ? null
                    : { TaxFormResponse: v.taxFormResponse }),
            };
        });
}
