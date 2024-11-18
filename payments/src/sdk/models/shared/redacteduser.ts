/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  F6f2bd1a2fc7bad4e0d8f22345fc5f6699d096b7797b93575869c544a4fc5cef,
  F6f2bd1a2fc7bad4e0d8f22345fc5f6699d096b7797b93575869c544a4fc5cef$inboundSchema,
  F6f2bd1a2fc7bad4e0d8f22345fc5f6699d096b7797b93575869c544a4fc5cef$Outbound,
  F6f2bd1a2fc7bad4e0d8f22345fc5f6699d096b7797b93575869c544a4fc5cef$outboundSchema,
} from "./f6f2bd1a2fc7bad4e0d8f22345fc5f6699d096b7797b93575869c544a4fc5cef.js";
import {
  Ninee97e63e736df301658ebeeab7f4fe84f3aeaa73800d3e4863801a3eb026df4b,
  Ninee97e63e736df301658ebeeab7f4fe84f3aeaa73800d3e4863801a3eb026df4b$inboundSchema,
  Ninee97e63e736df301658ebeeab7f4fe84f3aeaa73800d3e4863801a3eb026df4b$Outbound,
  Ninee97e63e736df301658ebeeab7f4fe84f3aeaa73800d3e4863801a3eb026df4b$outboundSchema,
} from "./ninee97e63e736df301658ebeeab7f4fe84f3aeaa73800d3e4863801a3eb026df4b.js";
import {
  SevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051,
  SevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051$inboundSchema,
  SevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051$Outbound,
  SevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051$outboundSchema,
} from "./seventhousandninehundredandninetysixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051.js";

export const RedactedUserStatus = {
  Pending: "Pending",
  Active: "Active",
  Disabled: "Disabled",
} as const;
export type RedactedUserStatus = ClosedEnum<typeof RedactedUserStatus>;

export type RedactedUser = {
  email?: string | null | undefined;
  phone?:
    | SevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051
    | null
    | undefined;
  profile?:
    | F6f2bd1a2fc7bad4e0d8f22345fc5f6699d096b7797b93575869c544a4fc5cef
    | null
    | undefined;
  settings?:
    | Ninee97e63e736df301658ebeeab7f4fe84f3aeaa73800d3e4863801a3eb026df4b
    | null
    | undefined;
  status?: RedactedUserStatus | null | undefined;
  tag?: string | null | undefined;
};

/** @internal */
export const RedactedUserStatus$inboundSchema: z.ZodNativeEnum<
  typeof RedactedUserStatus
> = z.nativeEnum(RedactedUserStatus);

/** @internal */
export const RedactedUserStatus$outboundSchema: z.ZodNativeEnum<
  typeof RedactedUserStatus
> = RedactedUserStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RedactedUserStatus$ {
  /** @deprecated use `RedactedUserStatus$inboundSchema` instead. */
  export const inboundSchema = RedactedUserStatus$inboundSchema;
  /** @deprecated use `RedactedUserStatus$outboundSchema` instead. */
  export const outboundSchema = RedactedUserStatus$outboundSchema;
}

/** @internal */
export const RedactedUser$inboundSchema: z.ZodType<
  RedactedUser,
  z.ZodTypeDef,
  unknown
> = z.object({
  email: z.nullable(z.string()).optional(),
  phone: z.nullable(
    SevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051$inboundSchema,
  ).optional(),
  profile: z.nullable(
    F6f2bd1a2fc7bad4e0d8f22345fc5f6699d096b7797b93575869c544a4fc5cef$inboundSchema,
  ).optional(),
  settings: z.nullable(
    Ninee97e63e736df301658ebeeab7f4fe84f3aeaa73800d3e4863801a3eb026df4b$inboundSchema,
  ).optional(),
  status: z.nullable(RedactedUserStatus$inboundSchema).optional(),
  tag: z.nullable(z.string()).optional(),
});

/** @internal */
export type RedactedUser$Outbound = {
  email?: string | null | undefined;
  phone?:
    | SevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051$Outbound
    | null
    | undefined;
  profile?:
    | F6f2bd1a2fc7bad4e0d8f22345fc5f6699d096b7797b93575869c544a4fc5cef$Outbound
    | null
    | undefined;
  settings?:
    | Ninee97e63e736df301658ebeeab7f4fe84f3aeaa73800d3e4863801a3eb026df4b$Outbound
    | null
    | undefined;
  status?: string | null | undefined;
  tag?: string | null | undefined;
};

/** @internal */
export const RedactedUser$outboundSchema: z.ZodType<
  RedactedUser$Outbound,
  z.ZodTypeDef,
  RedactedUser
> = z.object({
  email: z.nullable(z.string()).optional(),
  phone: z.nullable(
    SevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051$outboundSchema,
  ).optional(),
  profile: z.nullable(
    F6f2bd1a2fc7bad4e0d8f22345fc5f6699d096b7797b93575869c544a4fc5cef$outboundSchema,
  ).optional(),
  settings: z.nullable(
    Ninee97e63e736df301658ebeeab7f4fe84f3aeaa73800d3e4863801a3eb026df4b$outboundSchema,
  ).optional(),
  status: z.nullable(RedactedUserStatus$outboundSchema).optional(),
  tag: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RedactedUser$ {
  /** @deprecated use `RedactedUser$inboundSchema` instead. */
  export const inboundSchema = RedactedUser$inboundSchema;
  /** @deprecated use `RedactedUser$outboundSchema` instead. */
  export const outboundSchema = RedactedUser$outboundSchema;
  /** @deprecated use `RedactedUser$Outbound` instead. */
  export type Outbound = RedactedUser$Outbound;
}

export function redactedUserToJSON(redactedUser: RedactedUser): string {
  return JSON.stringify(RedactedUser$outboundSchema.parse(redactedUser));
}

export function redactedUserFromJSON(
  jsonString: string,
): SafeParseResult<RedactedUser, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RedactedUser$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RedactedUser' from JSON`,
  );
}
