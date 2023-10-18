/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { B9789f45f8c8070ff38a64d80c2e4a8732ddaf329e46546474400d26f84c0f1c } from "./b9789f45f8c8070ff38a64d80c2e4a8732ddaf329e46546474400d26f84c0f1c";
import { ClientData } from "./clientdata";
import { MemberClientFormW9Info } from "./memberclientformw9info";
import { MemberClientRequirementResponse } from "./memberclientrequirementresponse";
import { MemberClientWireAccount } from "./memberclientwireaccount";
import { MemberData } from "./memberdata";
import { RedactedMember } from "./redactedmember";
import { TwentySixe8ea23ccb1e007e7d6560175c7e75c768dac34727b7fe1d834ca24b8221ef4 } from "./twentysixe8ea23ccb1e007e7d6560175c7e75c768dac34727b7fe1d834ca24b8221ef4";
import { UserRoles } from "./userroles";
import { Expose, Type } from "class-transformer";

export enum CollaboratorSchemaStatus {
    Active = "Active",
    Inactive = "Inactive",
    Pending = "Pending",
}

export enum CollaboratorSchemaTaxStatus {
    Complete = "Complete",
    Failed = "Failed",
    Pending = "Pending",
    Incomplete = "Incomplete",
}

export class CollaboratorSchema extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "achCreditAccount" })
    @Type(() => MemberClientWireAccount)
    achCreditAccount: MemberClientWireAccount;

    @SpeakeasyMetadata()
    @Expose({ name: "clientData" })
    @Type(() => ClientData)
    clientData?: ClientData;

    @SpeakeasyMetadata()
    @Expose({ name: "clientId" })
    clientId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "collaboratorGroupIds" })
    collaboratorGroupIds?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "collaboratorId" })
    collaboratorId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    createdAt: string;

    @SpeakeasyMetadata({ elemType: MemberClientRequirementResponse })
    @Expose({ name: "eligibilityRequirements" })
    @Type(() => MemberClientRequirementResponse)
    eligibilityRequirements?: MemberClientRequirementResponse[];

    @SpeakeasyMetadata()
    @Expose({ name: "eventActors" })
    eventActors: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "form1099Balances" })
    @Type(() => B9789f45f8c8070ff38a64d80c2e4a8732ddaf329e46546474400d26f84c0f1c)
    form1099Balances: B9789f45f8c8070ff38a64d80c2e4a8732ddaf329e46546474400d26f84c0f1c;

    @SpeakeasyMetadata()
    @Expose({ name: "formW9Data" })
    @Type(() => MemberClientFormW9Info)
    formW9Data?: MemberClientFormW9Info;

    @SpeakeasyMetadata()
    @Expose({ name: "integration" })
    @Type(() => TwentySixe8ea23ccb1e007e7d6560175c7e75c768dac34727b7fe1d834ca24b8221ef4)
    integration?: TwentySixe8ea23ccb1e007e7d6560175c7e75c768dac34727b7fe1d834ca24b8221ef4;

    @SpeakeasyMetadata()
    @Expose({ name: "internationalWireAccount" })
    @Type(() => MemberClientWireAccount)
    internationalWireAccount: MemberClientWireAccount;

    @SpeakeasyMetadata()
    @Expose({ name: "labels" })
    labels: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "member" })
    @Type(() => RedactedMember)
    member: RedactedMember;

    @SpeakeasyMetadata()
    @Expose({ name: "memberData" })
    @Type(() => MemberData)
    memberData?: MemberData;

    @SpeakeasyMetadata()
    @Expose({ name: "memberId" })
    memberId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: CollaboratorSchemaStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "taxStatus" })
    taxStatus: CollaboratorSchemaTaxStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "updatedAt" })
    updatedAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "userRoles" })
    @Type(() => UserRoles)
    userRoles: UserRoles;
}
