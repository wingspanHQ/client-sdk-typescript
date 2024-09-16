/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import {
  MemberClientFormW9Info,
  MemberClientFormW9Info$inboundSchema,
  MemberClientFormW9Info$Outbound,
  MemberClientFormW9Info$outboundSchema,
} from "./memberclientformw9info.js";

export const BulkCollaboratorItemCreateCollaboratorStatus = {
  Active: "Active",
  Inactive: "Inactive",
  Pending: "Pending",
} as const;
export type BulkCollaboratorItemCreateCollaboratorStatus = ClosedEnum<
  typeof BulkCollaboratorItemCreateCollaboratorStatus
>;

export type BulkCollaboratorItemCreate = {
  collaboratorGroupId?: string | null | undefined;
  collaboratorId?: string | null | undefined;
  collaboratorStatus?:
    | BulkCollaboratorItemCreateCollaboratorStatus
    | null
    | undefined;
  company?: string | null | undefined;
  email?: string | null | undefined;
  externalId?: string | null | undefined;
  firstLastName?: string | null | undefined;
  formW9Data?: MemberClientFormW9Info | null | undefined;
  labels?: { [k: string]: string } | null | undefined;
  orgSubAccountId?: string | null | undefined;
};

/** @internal */
export const BulkCollaboratorItemCreateCollaboratorStatus$inboundSchema:
  z.ZodNativeEnum<typeof BulkCollaboratorItemCreateCollaboratorStatus> = z
    .nativeEnum(BulkCollaboratorItemCreateCollaboratorStatus);

/** @internal */
export const BulkCollaboratorItemCreateCollaboratorStatus$outboundSchema:
  z.ZodNativeEnum<typeof BulkCollaboratorItemCreateCollaboratorStatus> =
    BulkCollaboratorItemCreateCollaboratorStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BulkCollaboratorItemCreateCollaboratorStatus$ {
  /** @deprecated use `BulkCollaboratorItemCreateCollaboratorStatus$inboundSchema` instead. */
  export const inboundSchema =
    BulkCollaboratorItemCreateCollaboratorStatus$inboundSchema;
  /** @deprecated use `BulkCollaboratorItemCreateCollaboratorStatus$outboundSchema` instead. */
  export const outboundSchema =
    BulkCollaboratorItemCreateCollaboratorStatus$outboundSchema;
}

/** @internal */
export const BulkCollaboratorItemCreate$inboundSchema: z.ZodType<
  BulkCollaboratorItemCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  collaboratorGroupId: z.nullable(z.string()).optional(),
  collaboratorId: z.nullable(z.string()).optional(),
  collaboratorStatus: z.nullable(
    BulkCollaboratorItemCreateCollaboratorStatus$inboundSchema,
  ).optional(),
  company: z.nullable(z.string()).optional(),
  email: z.nullable(z.string()).optional(),
  externalId: z.nullable(z.string()).optional(),
  firstLastName: z.nullable(z.string()).optional(),
  formW9Data: z.nullable(MemberClientFormW9Info$inboundSchema).optional(),
  labels: z.nullable(z.record(z.string())).optional(),
  orgSubAccountId: z.nullable(z.string()).optional(),
});

/** @internal */
export type BulkCollaboratorItemCreate$Outbound = {
  collaboratorGroupId?: string | null | undefined;
  collaboratorId?: string | null | undefined;
  collaboratorStatus?: string | null | undefined;
  company?: string | null | undefined;
  email?: string | null | undefined;
  externalId?: string | null | undefined;
  firstLastName?: string | null | undefined;
  formW9Data?: MemberClientFormW9Info$Outbound | null | undefined;
  labels?: { [k: string]: string } | null | undefined;
  orgSubAccountId?: string | null | undefined;
};

/** @internal */
export const BulkCollaboratorItemCreate$outboundSchema: z.ZodType<
  BulkCollaboratorItemCreate$Outbound,
  z.ZodTypeDef,
  BulkCollaboratorItemCreate
> = z.object({
  collaboratorGroupId: z.nullable(z.string()).optional(),
  collaboratorId: z.nullable(z.string()).optional(),
  collaboratorStatus: z.nullable(
    BulkCollaboratorItemCreateCollaboratorStatus$outboundSchema,
  ).optional(),
  company: z.nullable(z.string()).optional(),
  email: z.nullable(z.string()).optional(),
  externalId: z.nullable(z.string()).optional(),
  firstLastName: z.nullable(z.string()).optional(),
  formW9Data: z.nullable(MemberClientFormW9Info$outboundSchema).optional(),
  labels: z.nullable(z.record(z.string())).optional(),
  orgSubAccountId: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BulkCollaboratorItemCreate$ {
  /** @deprecated use `BulkCollaboratorItemCreate$inboundSchema` instead. */
  export const inboundSchema = BulkCollaboratorItemCreate$inboundSchema;
  /** @deprecated use `BulkCollaboratorItemCreate$outboundSchema` instead. */
  export const outboundSchema = BulkCollaboratorItemCreate$outboundSchema;
  /** @deprecated use `BulkCollaboratorItemCreate$Outbound` instead. */
  export type Outbound = BulkCollaboratorItemCreate$Outbound;
}
