/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import {
  ClientData,
  ClientData$inboundSchema,
  ClientData$Outbound,
  ClientData$outboundSchema,
} from "./clientdata.js";
import {
  MemberClientRequirementResponse,
  MemberClientRequirementResponse$inboundSchema,
  MemberClientRequirementResponse$Outbound,
  MemberClientRequirementResponse$outboundSchema,
} from "./memberclientrequirementresponse.js";
import {
  TwentySixe8ea23ccb1e007e7d6560175c7e75c768dac34727b7fe1d834ca24b8221ef4,
  TwentySixe8ea23ccb1e007e7d6560175c7e75c768dac34727b7fe1d834ca24b8221ef4$inboundSchema,
  TwentySixe8ea23ccb1e007e7d6560175c7e75c768dac34727b7fe1d834ca24b8221ef4$Outbound,
  TwentySixe8ea23ccb1e007e7d6560175c7e75c768dac34727b7fe1d834ca24b8221ef4$outboundSchema,
} from "./twentysixe8ea23ccb1e007e7d6560175c7e75c768dac34727b7fe1d834ca24b8221ef4.js";

export const CollaborationStatus = {
  Active: "Active",
  Inactive: "Inactive",
  Pending: "Pending",
} as const;
export type CollaborationStatus = ClosedEnum<typeof CollaborationStatus>;

export type Collaboration = {
  clientData?: ClientData | null | undefined;
  collaboratorGroupIds?: Array<string> | null | undefined;
  collaboratorId: string;
  eligibilityRequirements?:
    | Array<MemberClientRequirementResponse>
    | null
    | undefined;
  integration?:
    | TwentySixe8ea23ccb1e007e7d6560175c7e75c768dac34727b7fe1d834ca24b8221ef4
    | null
    | undefined;
  status: CollaborationStatus;
};

/** @internal */
export const CollaborationStatus$inboundSchema: z.ZodNativeEnum<
  typeof CollaborationStatus
> = z.nativeEnum(CollaborationStatus);

/** @internal */
export const CollaborationStatus$outboundSchema: z.ZodNativeEnum<
  typeof CollaborationStatus
> = CollaborationStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CollaborationStatus$ {
  /** @deprecated use `CollaborationStatus$inboundSchema` instead. */
  export const inboundSchema = CollaborationStatus$inboundSchema;
  /** @deprecated use `CollaborationStatus$outboundSchema` instead. */
  export const outboundSchema = CollaborationStatus$outboundSchema;
}

/** @internal */
export const Collaboration$inboundSchema: z.ZodType<
  Collaboration,
  z.ZodTypeDef,
  unknown
> = z.object({
  clientData: z.nullable(ClientData$inboundSchema).optional(),
  collaboratorGroupIds: z.nullable(z.array(z.string())).optional(),
  collaboratorId: z.string(),
  eligibilityRequirements: z.nullable(
    z.array(MemberClientRequirementResponse$inboundSchema),
  ).optional(),
  integration: z.nullable(
    TwentySixe8ea23ccb1e007e7d6560175c7e75c768dac34727b7fe1d834ca24b8221ef4$inboundSchema,
  ).optional(),
  status: CollaborationStatus$inboundSchema,
});

/** @internal */
export type Collaboration$Outbound = {
  clientData?: ClientData$Outbound | null | undefined;
  collaboratorGroupIds?: Array<string> | null | undefined;
  collaboratorId: string;
  eligibilityRequirements?:
    | Array<MemberClientRequirementResponse$Outbound>
    | null
    | undefined;
  integration?:
    | TwentySixe8ea23ccb1e007e7d6560175c7e75c768dac34727b7fe1d834ca24b8221ef4$Outbound
    | null
    | undefined;
  status: string;
};

/** @internal */
export const Collaboration$outboundSchema: z.ZodType<
  Collaboration$Outbound,
  z.ZodTypeDef,
  Collaboration
> = z.object({
  clientData: z.nullable(ClientData$outboundSchema).optional(),
  collaboratorGroupIds: z.nullable(z.array(z.string())).optional(),
  collaboratorId: z.string(),
  eligibilityRequirements: z.nullable(
    z.array(MemberClientRequirementResponse$outboundSchema),
  ).optional(),
  integration: z.nullable(
    TwentySixe8ea23ccb1e007e7d6560175c7e75c768dac34727b7fe1d834ca24b8221ef4$outboundSchema,
  ).optional(),
  status: CollaborationStatus$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Collaboration$ {
  /** @deprecated use `Collaboration$inboundSchema` instead. */
  export const inboundSchema = Collaboration$inboundSchema;
  /** @deprecated use `Collaboration$outboundSchema` instead. */
  export const outboundSchema = Collaboration$outboundSchema;
  /** @deprecated use `Collaboration$Outbound` instead. */
  export type Outbound = Collaboration$Outbound;
}
