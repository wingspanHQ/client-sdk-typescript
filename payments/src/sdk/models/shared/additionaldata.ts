/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const ResourceType = {
  Collaborator: "Collaborator",
  LineItem: "LineItem",
} as const;
export type ResourceType = ClosedEnum<typeof ResourceType>;

export const Type = {
  Boolean: "Boolean",
  String: "String",
} as const;
export type Type = ClosedEnum<typeof Type>;

export type AdditionalData = {
  key: string;
  name: string;
  required: boolean;
  resourceType: ResourceType;
  type: Type;
};

/** @internal */
export const ResourceType$inboundSchema: z.ZodNativeEnum<typeof ResourceType> =
  z.nativeEnum(ResourceType);

/** @internal */
export const ResourceType$outboundSchema: z.ZodNativeEnum<typeof ResourceType> =
  ResourceType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResourceType$ {
  /** @deprecated use `ResourceType$inboundSchema` instead. */
  export const inboundSchema = ResourceType$inboundSchema;
  /** @deprecated use `ResourceType$outboundSchema` instead. */
  export const outboundSchema = ResourceType$outboundSchema;
}

/** @internal */
export const Type$inboundSchema: z.ZodNativeEnum<typeof Type> = z.nativeEnum(
  Type,
);

/** @internal */
export const Type$outboundSchema: z.ZodNativeEnum<typeof Type> =
  Type$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Type$ {
  /** @deprecated use `Type$inboundSchema` instead. */
  export const inboundSchema = Type$inboundSchema;
  /** @deprecated use `Type$outboundSchema` instead. */
  export const outboundSchema = Type$outboundSchema;
}

/** @internal */
export const AdditionalData$inboundSchema: z.ZodType<
  AdditionalData,
  z.ZodTypeDef,
  unknown
> = z.object({
  key: z.string(),
  name: z.string(),
  required: z.boolean(),
  resourceType: ResourceType$inboundSchema,
  type: Type$inboundSchema,
});

/** @internal */
export type AdditionalData$Outbound = {
  key: string;
  name: string;
  required: boolean;
  resourceType: string;
  type: string;
};

/** @internal */
export const AdditionalData$outboundSchema: z.ZodType<
  AdditionalData$Outbound,
  z.ZodTypeDef,
  AdditionalData
> = z.object({
  key: z.string(),
  name: z.string(),
  required: z.boolean(),
  resourceType: ResourceType$outboundSchema,
  type: Type$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AdditionalData$ {
  /** @deprecated use `AdditionalData$inboundSchema` instead. */
  export const inboundSchema = AdditionalData$inboundSchema;
  /** @deprecated use `AdditionalData$outboundSchema` instead. */
  export const outboundSchema = AdditionalData$outboundSchema;
  /** @deprecated use `AdditionalData$Outbound` instead. */
  export type Outbound = AdditionalData$Outbound;
}
