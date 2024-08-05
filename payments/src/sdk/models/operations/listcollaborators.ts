/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type ListCollaboratorsResponse = {
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
     * List of V2 Collaborators
     */
    classes?: Array<shared.CollaboratorV2> | undefined;
};

/** @internal */
export const ListCollaboratorsResponse$inboundSchema: z.ZodType<
    ListCollaboratorsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        classes: z.array(shared.CollaboratorV2$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type ListCollaboratorsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    classes?: Array<shared.CollaboratorV2$Outbound> | undefined;
};

/** @internal */
export const ListCollaboratorsResponse$outboundSchema: z.ZodType<
    ListCollaboratorsResponse$Outbound,
    z.ZodTypeDef,
    ListCollaboratorsResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        classes: z.array(shared.CollaboratorV2$outboundSchema).optional(),
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
export namespace ListCollaboratorsResponse$ {
    /** @deprecated use `ListCollaboratorsResponse$inboundSchema` instead. */
    export const inboundSchema = ListCollaboratorsResponse$inboundSchema;
    /** @deprecated use `ListCollaboratorsResponse$outboundSchema` instead. */
    export const outboundSchema = ListCollaboratorsResponse$outboundSchema;
    /** @deprecated use `ListCollaboratorsResponse$Outbound` instead. */
    export type Outbound = ListCollaboratorsResponse$Outbound;
}
