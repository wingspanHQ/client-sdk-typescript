/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type Fourafb8b96a33dad0e93c635638ea44eb6117d8f72c867558efb847ad635a79193 = {
    payeeExternalId?: string | null | undefined;
};

/** @internal */
export const Fourafb8b96a33dad0e93c635638ea44eb6117d8f72c867558efb847ad635a79193$inboundSchema: z.ZodType<
    Fourafb8b96a33dad0e93c635638ea44eb6117d8f72c867558efb847ad635a79193,
    z.ZodTypeDef,
    unknown
> = z.object({
    payeeExternalId: z.nullable(z.string()).optional(),
});

/** @internal */
export type Fourafb8b96a33dad0e93c635638ea44eb6117d8f72c867558efb847ad635a79193$Outbound = {
    payeeExternalId?: string | null | undefined;
};

/** @internal */
export const Fourafb8b96a33dad0e93c635638ea44eb6117d8f72c867558efb847ad635a79193$outboundSchema: z.ZodType<
    Fourafb8b96a33dad0e93c635638ea44eb6117d8f72c867558efb847ad635a79193$Outbound,
    z.ZodTypeDef,
    Fourafb8b96a33dad0e93c635638ea44eb6117d8f72c867558efb847ad635a79193
> = z.object({
    payeeExternalId: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Fourafb8b96a33dad0e93c635638ea44eb6117d8f72c867558efb847ad635a79193$ {
    /** @deprecated use `Fourafb8b96a33dad0e93c635638ea44eb6117d8f72c867558efb847ad635a79193$inboundSchema` instead. */
    export const inboundSchema =
        Fourafb8b96a33dad0e93c635638ea44eb6117d8f72c867558efb847ad635a79193$inboundSchema;
    /** @deprecated use `Fourafb8b96a33dad0e93c635638ea44eb6117d8f72c867558efb847ad635a79193$outboundSchema` instead. */
    export const outboundSchema =
        Fourafb8b96a33dad0e93c635638ea44eb6117d8f72c867558efb847ad635a79193$outboundSchema;
    /** @deprecated use `Fourafb8b96a33dad0e93c635638ea44eb6117d8f72c867558efb847ad635a79193$Outbound` instead. */
    export type Outbound =
        Fourafb8b96a33dad0e93c635638ea44eb6117d8f72c867558efb847ad635a79193$Outbound;
}
