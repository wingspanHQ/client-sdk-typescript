/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DocumentEvents } from "./documentevents";
import { DocumentFiles } from "./documentfiles";
import { DocumentSigningUrls } from "./documentsigningurls";
import { UserRoles } from "./userroles";
import { Expose, Type } from "class-transformer";

export enum DocumentSigningUrlsResponseStatus {
    New = "New",
    Sent = "Sent",
    Pending = "Pending",
    Complete = "Complete",
}

export class DocumentSigningUrlsResponse extends SpeakeasyBase {
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
    @Expose({ name: "signingUrls" })
    @Type(() => DocumentSigningUrls)
    signingUrls?: DocumentSigningUrls;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: DocumentSigningUrlsResponseStatus;

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