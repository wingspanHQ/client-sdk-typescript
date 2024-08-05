/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const AutoPayStrategy = {
    All: "All",
    None: "None",
} as const;
export type AutoPayStrategy = ClosedEnum<typeof AutoPayStrategy>;

export const VerificationStratgy = {
    None: "None",
    All: "All",
} as const;
export type VerificationStratgy = ClosedEnum<typeof VerificationStratgy>;

export type ClientData = {
    autoPayStrategy?: AutoPayStrategy | null | undefined;
    externalId?: string | null | undefined;
    verificationStratgy?: VerificationStratgy | null | undefined;
};

/** @internal */
export const AutoPayStrategy$inboundSchema: z.ZodNativeEnum<typeof AutoPayStrategy> =
    z.nativeEnum(AutoPayStrategy);

/** @internal */
export const AutoPayStrategy$outboundSchema: z.ZodNativeEnum<typeof AutoPayStrategy> =
    AutoPayStrategy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AutoPayStrategy$ {
    /** @deprecated use `AutoPayStrategy$inboundSchema` instead. */
    export const inboundSchema = AutoPayStrategy$inboundSchema;
    /** @deprecated use `AutoPayStrategy$outboundSchema` instead. */
    export const outboundSchema = AutoPayStrategy$outboundSchema;
}

/** @internal */
export const VerificationStratgy$inboundSchema: z.ZodNativeEnum<typeof VerificationStratgy> =
    z.nativeEnum(VerificationStratgy);

/** @internal */
export const VerificationStratgy$outboundSchema: z.ZodNativeEnum<typeof VerificationStratgy> =
    VerificationStratgy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VerificationStratgy$ {
    /** @deprecated use `VerificationStratgy$inboundSchema` instead. */
    export const inboundSchema = VerificationStratgy$inboundSchema;
    /** @deprecated use `VerificationStratgy$outboundSchema` instead. */
    export const outboundSchema = VerificationStratgy$outboundSchema;
}

/** @internal */
export const ClientData$inboundSchema: z.ZodType<ClientData, z.ZodTypeDef, unknown> = z.object({
    autoPayStrategy: z.nullable(AutoPayStrategy$inboundSchema).optional(),
    externalId: z.nullable(z.string()).optional(),
    verificationStratgy: z.nullable(VerificationStratgy$inboundSchema).optional(),
});

/** @internal */
export type ClientData$Outbound = {
    autoPayStrategy?: string | null | undefined;
    externalId?: string | null | undefined;
    verificationStratgy?: string | null | undefined;
};

/** @internal */
export const ClientData$outboundSchema: z.ZodType<ClientData$Outbound, z.ZodTypeDef, ClientData> =
    z.object({
        autoPayStrategy: z.nullable(AutoPayStrategy$outboundSchema).optional(),
        externalId: z.nullable(z.string()).optional(),
        verificationStratgy: z.nullable(VerificationStratgy$outboundSchema).optional(),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ClientData$ {
    /** @deprecated use `ClientData$inboundSchema` instead. */
    export const inboundSchema = ClientData$inboundSchema;
    /** @deprecated use `ClientData$outboundSchema` instead. */
    export const outboundSchema = ClientData$outboundSchema;
    /** @deprecated use `ClientData$Outbound` instead. */
    export type Outbound = ClientData$Outbound;
}
