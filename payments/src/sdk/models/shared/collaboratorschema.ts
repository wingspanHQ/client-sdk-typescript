/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import {
  B9789f45f8c8070ff38a64d80c2e4a8732ddaf329e46546474400d26f84c0f1c,
  B9789f45f8c8070ff38a64d80c2e4a8732ddaf329e46546474400d26f84c0f1c$inboundSchema,
  B9789f45f8c8070ff38a64d80c2e4a8732ddaf329e46546474400d26f84c0f1c$Outbound,
  B9789f45f8c8070ff38a64d80c2e4a8732ddaf329e46546474400d26f84c0f1c$outboundSchema,
} from "./b9789f45f8c8070ff38a64d80c2e4a8732ddaf329e46546474400d26f84c0f1c.js";
import {
  ClientData,
  ClientData$inboundSchema,
  ClientData$Outbound,
  ClientData$outboundSchema,
} from "./clientdata.js";
import {
  MemberClientFormW9Info,
  MemberClientFormW9Info$inboundSchema,
  MemberClientFormW9Info$Outbound,
  MemberClientFormW9Info$outboundSchema,
} from "./memberclientformw9info.js";
import {
  MemberClientRequirementResponse,
  MemberClientRequirementResponse$inboundSchema,
  MemberClientRequirementResponse$Outbound,
  MemberClientRequirementResponse$outboundSchema,
} from "./memberclientrequirementresponse.js";
import {
  MemberClientWireAccount,
  MemberClientWireAccount$inboundSchema,
  MemberClientWireAccount$Outbound,
  MemberClientWireAccount$outboundSchema,
} from "./memberclientwireaccount.js";
import {
  MemberData,
  MemberData$inboundSchema,
  MemberData$Outbound,
  MemberData$outboundSchema,
} from "./memberdata.js";
import {
  RedactedMember,
  RedactedMember$inboundSchema,
  RedactedMember$Outbound,
  RedactedMember$outboundSchema,
} from "./redactedmember.js";
import {
  TwentySixe8ea23ccb1e007e7d6560175c7e75c768dac34727b7fe1d834ca24b8221ef4,
  TwentySixe8ea23ccb1e007e7d6560175c7e75c768dac34727b7fe1d834ca24b8221ef4$inboundSchema,
  TwentySixe8ea23ccb1e007e7d6560175c7e75c768dac34727b7fe1d834ca24b8221ef4$Outbound,
  TwentySixe8ea23ccb1e007e7d6560175c7e75c768dac34727b7fe1d834ca24b8221ef4$outboundSchema,
} from "./twentysixe8ea23ccb1e007e7d6560175c7e75c768dac34727b7fe1d834ca24b8221ef4.js";
import {
  UserRoles,
  UserRoles$inboundSchema,
  UserRoles$Outbound,
  UserRoles$outboundSchema,
} from "./userroles.js";

export const CollaboratorSchemaStatus = {
  Active: "Active",
  Inactive: "Inactive",
  Pending: "Pending",
} as const;
export type CollaboratorSchemaStatus = ClosedEnum<
  typeof CollaboratorSchemaStatus
>;

export const TaxStatus = {
  Complete: "Complete",
  Failed: "Failed",
  Pending: "Pending",
  Incomplete: "Incomplete",
} as const;
export type TaxStatus = ClosedEnum<typeof TaxStatus>;

export type CollaboratorSchema = {
  achCreditAccount: MemberClientWireAccount;
  clientData?: ClientData | null | undefined;
  clientId: string;
  collaboratorGroupIds?: Array<string> | null | undefined;
  collaboratorId: string;
  createdAt: string;
  eligibilityRequirements?:
    | Array<MemberClientRequirementResponse>
    | null
    | undefined;
  eventActors: { [k: string]: string };
  form1099Balances:
    B9789f45f8c8070ff38a64d80c2e4a8732ddaf329e46546474400d26f84c0f1c;
  formW9Data?: MemberClientFormW9Info | null | undefined;
  integration?:
    | TwentySixe8ea23ccb1e007e7d6560175c7e75c768dac34727b7fe1d834ca24b8221ef4
    | null
    | undefined;
  internationalWireAccount: MemberClientWireAccount;
  labels: { [k: string]: string };
  member: RedactedMember;
  memberData?: MemberData | null | undefined;
  memberId: string;
  status: CollaboratorSchemaStatus;
  taxStatus: TaxStatus;
  updatedAt: string;
  userRoles: UserRoles;
};

/** @internal */
export const CollaboratorSchemaStatus$inboundSchema: z.ZodNativeEnum<
  typeof CollaboratorSchemaStatus
> = z.nativeEnum(CollaboratorSchemaStatus);

/** @internal */
export const CollaboratorSchemaStatus$outboundSchema: z.ZodNativeEnum<
  typeof CollaboratorSchemaStatus
> = CollaboratorSchemaStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CollaboratorSchemaStatus$ {
  /** @deprecated use `CollaboratorSchemaStatus$inboundSchema` instead. */
  export const inboundSchema = CollaboratorSchemaStatus$inboundSchema;
  /** @deprecated use `CollaboratorSchemaStatus$outboundSchema` instead. */
  export const outboundSchema = CollaboratorSchemaStatus$outboundSchema;
}

/** @internal */
export const TaxStatus$inboundSchema: z.ZodNativeEnum<typeof TaxStatus> = z
  .nativeEnum(TaxStatus);

/** @internal */
export const TaxStatus$outboundSchema: z.ZodNativeEnum<typeof TaxStatus> =
  TaxStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaxStatus$ {
  /** @deprecated use `TaxStatus$inboundSchema` instead. */
  export const inboundSchema = TaxStatus$inboundSchema;
  /** @deprecated use `TaxStatus$outboundSchema` instead. */
  export const outboundSchema = TaxStatus$outboundSchema;
}

/** @internal */
export const CollaboratorSchema$inboundSchema: z.ZodType<
  CollaboratorSchema,
  z.ZodTypeDef,
  unknown
> = z.object({
  achCreditAccount: MemberClientWireAccount$inboundSchema,
  clientData: z.nullable(ClientData$inboundSchema).optional(),
  clientId: z.string(),
  collaboratorGroupIds: z.nullable(z.array(z.string())).optional(),
  collaboratorId: z.string(),
  createdAt: z.string(),
  eligibilityRequirements: z.nullable(
    z.array(MemberClientRequirementResponse$inboundSchema),
  ).optional(),
  eventActors: z.record(z.string()),
  form1099Balances:
    B9789f45f8c8070ff38a64d80c2e4a8732ddaf329e46546474400d26f84c0f1c$inboundSchema,
  formW9Data: z.nullable(MemberClientFormW9Info$inboundSchema).optional(),
  integration: z.nullable(
    TwentySixe8ea23ccb1e007e7d6560175c7e75c768dac34727b7fe1d834ca24b8221ef4$inboundSchema,
  ).optional(),
  internationalWireAccount: MemberClientWireAccount$inboundSchema,
  labels: z.record(z.string()),
  member: RedactedMember$inboundSchema,
  memberData: z.nullable(MemberData$inboundSchema).optional(),
  memberId: z.string(),
  status: CollaboratorSchemaStatus$inboundSchema,
  taxStatus: TaxStatus$inboundSchema,
  updatedAt: z.string(),
  userRoles: UserRoles$inboundSchema,
});

/** @internal */
export type CollaboratorSchema$Outbound = {
  achCreditAccount: MemberClientWireAccount$Outbound;
  clientData?: ClientData$Outbound | null | undefined;
  clientId: string;
  collaboratorGroupIds?: Array<string> | null | undefined;
  collaboratorId: string;
  createdAt: string;
  eligibilityRequirements?:
    | Array<MemberClientRequirementResponse$Outbound>
    | null
    | undefined;
  eventActors: { [k: string]: string };
  form1099Balances:
    B9789f45f8c8070ff38a64d80c2e4a8732ddaf329e46546474400d26f84c0f1c$Outbound;
  formW9Data?: MemberClientFormW9Info$Outbound | null | undefined;
  integration?:
    | TwentySixe8ea23ccb1e007e7d6560175c7e75c768dac34727b7fe1d834ca24b8221ef4$Outbound
    | null
    | undefined;
  internationalWireAccount: MemberClientWireAccount$Outbound;
  labels: { [k: string]: string };
  member: RedactedMember$Outbound;
  memberData?: MemberData$Outbound | null | undefined;
  memberId: string;
  status: string;
  taxStatus: string;
  updatedAt: string;
  userRoles: UserRoles$Outbound;
};

/** @internal */
export const CollaboratorSchema$outboundSchema: z.ZodType<
  CollaboratorSchema$Outbound,
  z.ZodTypeDef,
  CollaboratorSchema
> = z.object({
  achCreditAccount: MemberClientWireAccount$outboundSchema,
  clientData: z.nullable(ClientData$outboundSchema).optional(),
  clientId: z.string(),
  collaboratorGroupIds: z.nullable(z.array(z.string())).optional(),
  collaboratorId: z.string(),
  createdAt: z.string(),
  eligibilityRequirements: z.nullable(
    z.array(MemberClientRequirementResponse$outboundSchema),
  ).optional(),
  eventActors: z.record(z.string()),
  form1099Balances:
    B9789f45f8c8070ff38a64d80c2e4a8732ddaf329e46546474400d26f84c0f1c$outboundSchema,
  formW9Data: z.nullable(MemberClientFormW9Info$outboundSchema).optional(),
  integration: z.nullable(
    TwentySixe8ea23ccb1e007e7d6560175c7e75c768dac34727b7fe1d834ca24b8221ef4$outboundSchema,
  ).optional(),
  internationalWireAccount: MemberClientWireAccount$outboundSchema,
  labels: z.record(z.string()),
  member: RedactedMember$outboundSchema,
  memberData: z.nullable(MemberData$outboundSchema).optional(),
  memberId: z.string(),
  status: CollaboratorSchemaStatus$outboundSchema,
  taxStatus: TaxStatus$outboundSchema,
  updatedAt: z.string(),
  userRoles: UserRoles$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CollaboratorSchema$ {
  /** @deprecated use `CollaboratorSchema$inboundSchema` instead. */
  export const inboundSchema = CollaboratorSchema$inboundSchema;
  /** @deprecated use `CollaboratorSchema$outboundSchema` instead. */
  export const outboundSchema = CollaboratorSchema$outboundSchema;
  /** @deprecated use `CollaboratorSchema$Outbound` instead. */
  export type Outbound = CollaboratorSchema$Outbound;
}
