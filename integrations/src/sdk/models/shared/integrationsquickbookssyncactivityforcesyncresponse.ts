/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum IntegrationsQuickbooksSyncActivityForceSyncResponseStatus {
    Success = "success",
    NotFound = "not_found",
    Error = "error",
}

export class IntegrationsQuickbooksSyncActivityForceSyncResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: IntegrationsQuickbooksSyncActivityForceSyncResponseStatus;
}
