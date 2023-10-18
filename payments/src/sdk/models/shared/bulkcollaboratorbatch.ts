/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RedactedMember } from "./redactedmember";
import { SevenHundredAndFiftySevenf4961b94334fd41cedc27262be7b14583377703cda6490b996969bd4e66c2 } from "./sevenhundredandfiftysevenf4961b94334fd41cedc27262be7b14583377703cda6490b996969bd4e66c2";
import { UserRoles } from "./userroles";
import { Expose, Type } from "class-transformer";

export enum BulkCollaboratorBatchStatus {
    Open = "Open",
    Pending = "Pending",
    Processing = "Processing",
    Complete = "Complete",
    Failed = "Failed",
}

export class BulkCollaboratorBatch extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "bulkCollaboratorBatchId" })
    bulkCollaboratorBatchId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "client" })
    @Type(() => RedactedMember)
    client: RedactedMember;

    @SpeakeasyMetadata()
    @Expose({ name: "clientId" })
    clientId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    createdAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "eventActors" })
    eventActors: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "labels" })
    labels: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "statistics" })
    @Type(
        () => SevenHundredAndFiftySevenf4961b94334fd41cedc27262be7b14583377703cda6490b996969bd4e66c2
    )
    statistics?: SevenHundredAndFiftySevenf4961b94334fd41cedc27262be7b14583377703cda6490b996969bd4e66c2;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: BulkCollaboratorBatchStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "updatedAt" })
    updatedAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "userRoles" })
    @Type(() => UserRoles)
    userRoles: UserRoles;
}