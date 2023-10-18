/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { MemberClientFormW9Info } from "./memberclientformw9info";
import { Expose, Type } from "class-transformer";

export enum BulkCollaboratorItemUpdateCollaboratorStatus {
    Active = "Active",
    Inactive = "Inactive",
    Pending = "Pending",
}

export class BulkCollaboratorItemUpdate extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "collaboratorGroupId" })
    collaboratorGroupId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "collaboratorId" })
    collaboratorId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "collaboratorStatus" })
    collaboratorStatus?: BulkCollaboratorItemUpdateCollaboratorStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "company" })
    company?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "externalId" })
    externalId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "firstLastName" })
    firstLastName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "formW9Data" })
    @Type(() => MemberClientFormW9Info)
    formW9Data?: MemberClientFormW9Info;

    @SpeakeasyMetadata()
    @Expose({ name: "labels" })
    labels?: Record<string, string>;
}
