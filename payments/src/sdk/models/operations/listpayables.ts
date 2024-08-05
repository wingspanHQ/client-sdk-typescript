/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type ListPayablesResponse = {
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
     * A list of payables
     */
    classes?: Array<shared.PayableSchema> | undefined;
};

/** @internal */
export const ListPayablesResponse$inboundSchema: z.ZodType<
    ListPayablesResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        classes: z.array(shared.PayableSchema$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type ListPayablesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    classes?: Array<shared.PayableSchema$Outbound> | undefined;
};

/** @internal */
export const ListPayablesResponse$outboundSchema: z.ZodType<
    ListPayablesResponse$Outbound,
    z.ZodTypeDef,
    ListPayablesResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        classes: z.array(shared.PayableSchema$outboundSchema).optional(),
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
export namespace ListPayablesResponse$ {
    /** @deprecated use `ListPayablesResponse$inboundSchema` instead. */
    export const inboundSchema = ListPayablesResponse$inboundSchema;
    /** @deprecated use `ListPayablesResponse$outboundSchema` instead. */
    export const outboundSchema = ListPayablesResponse$outboundSchema;
    /** @deprecated use `ListPayablesResponse$Outbound` instead. */
    export type Outbound = ListPayablesResponse$Outbound;
}
