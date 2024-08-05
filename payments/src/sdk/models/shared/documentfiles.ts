/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type DocumentFiles = {
    client?: string | null | undefined;
    member?: string | null | undefined;
};

/** @internal */
export const DocumentFiles$inboundSchema: z.ZodType<DocumentFiles, z.ZodTypeDef, unknown> =
    z.object({
        client: z.nullable(z.string()).optional(),
        member: z.nullable(z.string()).optional(),
    });

/** @internal */
export type DocumentFiles$Outbound = {
    client?: string | null | undefined;
    member?: string | null | undefined;
};

/** @internal */
export const DocumentFiles$outboundSchema: z.ZodType<
    DocumentFiles$Outbound,
    z.ZodTypeDef,
    DocumentFiles
> = z.object({
    client: z.nullable(z.string()).optional(),
    member: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentFiles$ {
    /** @deprecated use `DocumentFiles$inboundSchema` instead. */
    export const inboundSchema = DocumentFiles$inboundSchema;
    /** @deprecated use `DocumentFiles$outboundSchema` instead. */
    export const outboundSchema = DocumentFiles$outboundSchema;
    /** @deprecated use `DocumentFiles$Outbound` instead. */
    export type Outbound = DocumentFiles$Outbound;
}
