/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const CustomFieldResourceType = {
    Collaborator: "Collaborator",
    LineItem: "LineItem",
} as const;
export type CustomFieldResourceType = ClosedEnum<typeof CustomFieldResourceType>;

export const CustomFieldType = {
    Boolean: "Boolean",
    String: "String",
} as const;
export type CustomFieldType = ClosedEnum<typeof CustomFieldType>;

export type CustomField = {
    id: string;
    key: string;
    name: string;
    required: boolean;
    resourceType: CustomFieldResourceType;
    type: CustomFieldType;
};

/** @internal */
export const CustomFieldResourceType$inboundSchema: z.ZodNativeEnum<
    typeof CustomFieldResourceType
> = z.nativeEnum(CustomFieldResourceType);

/** @internal */
export const CustomFieldResourceType$outboundSchema: z.ZodNativeEnum<
    typeof CustomFieldResourceType
> = CustomFieldResourceType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomFieldResourceType$ {
    /** @deprecated use `CustomFieldResourceType$inboundSchema` instead. */
    export const inboundSchema = CustomFieldResourceType$inboundSchema;
    /** @deprecated use `CustomFieldResourceType$outboundSchema` instead. */
    export const outboundSchema = CustomFieldResourceType$outboundSchema;
}

/** @internal */
export const CustomFieldType$inboundSchema: z.ZodNativeEnum<typeof CustomFieldType> =
    z.nativeEnum(CustomFieldType);

/** @internal */
export const CustomFieldType$outboundSchema: z.ZodNativeEnum<typeof CustomFieldType> =
    CustomFieldType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomFieldType$ {
    /** @deprecated use `CustomFieldType$inboundSchema` instead. */
    export const inboundSchema = CustomFieldType$inboundSchema;
    /** @deprecated use `CustomFieldType$outboundSchema` instead. */
    export const outboundSchema = CustomFieldType$outboundSchema;
}

/** @internal */
export const CustomField$inboundSchema: z.ZodType<CustomField, z.ZodTypeDef, unknown> = z.object({
    id: z.string(),
    key: z.string(),
    name: z.string(),
    required: z.boolean(),
    resourceType: CustomFieldResourceType$inboundSchema,
    type: CustomFieldType$inboundSchema,
});

/** @internal */
export type CustomField$Outbound = {
    id: string;
    key: string;
    name: string;
    required: boolean;
    resourceType: string;
    type: string;
};

/** @internal */
export const CustomField$outboundSchema: z.ZodType<
    CustomField$Outbound,
    z.ZodTypeDef,
    CustomField
> = z.object({
    id: z.string(),
    key: z.string(),
    name: z.string(),
    required: z.boolean(),
    resourceType: CustomFieldResourceType$outboundSchema,
    type: CustomFieldType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomField$ {
    /** @deprecated use `CustomField$inboundSchema` instead. */
    export const inboundSchema = CustomField$inboundSchema;
    /** @deprecated use `CustomField$outboundSchema` instead. */
    export const outboundSchema = CustomField$outboundSchema;
    /** @deprecated use `CustomField$Outbound` instead. */
    export type Outbound = CustomField$Outbound;
}
