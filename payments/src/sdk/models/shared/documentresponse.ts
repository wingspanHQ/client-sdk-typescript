/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DocumentEvents } from "./documentevents";
import { DocumentFiles } from "./documentfiles";
import { UserRoles } from "./userroles";
import { Expose, Type } from "class-transformer";

export enum DocumentResponseStatus {
    Required = "Required",
    Approved = "Approved",
    Invalid = "Invalid",
    ReceivedFront = "ReceivedFront",
    ReceivedBack = "ReceivedBack",
    PendingReview = "PendingReview",
}

export class DocumentResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "clientId" })
    clientId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "documentId" })
    documentId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "events" })
    @Type(() => DocumentEvents)
    events?: DocumentEvents;

    @SpeakeasyMetadata()
    @Expose({ name: "files" })
    @Type(() => DocumentFiles)
    files?: DocumentFiles;

    @SpeakeasyMetadata()
    @Expose({ name: "memberId" })
    memberId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: DocumentResponseStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "templateId" })
    templateId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title: string;

    @SpeakeasyMetadata()
    @Expose({ name: "userRoles" })
    @Type(() => UserRoles)
    userRoles: UserRoles;
}