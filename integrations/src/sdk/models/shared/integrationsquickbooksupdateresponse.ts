/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { IntegrationsQuickbooksDefaults } from "./integrationsquickbooksdefaults";
import { Expose, Type } from "class-transformer";

export enum IntegrationsQuickbooksUpdateResponseAuthStatus {
    NeverConnected = "NeverConnected",
    Connected = "Connected",
    RetryingConnection = "RetryingConnection",
    Disconnected = "Disconnected",
    LessThanNilGreaterThan = "<nil>",
}

export enum IntegrationsQuickbooksUpdateResponseSyncStatus {
    NeverSynced = "NeverSynced",
    PendingSync = "PendingSync",
    Synced = "Synced",
    OutOfSync = "OutOfSync",
    LessThanNilGreaterThan = "<nil>",
}

export class IntegrationsQuickbooksUpdateResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "authStatus" })
    authStatus?: IntegrationsQuickbooksUpdateResponseAuthStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "defaults" })
    @Type(() => IntegrationsQuickbooksDefaults)
    defaults?: IntegrationsQuickbooksDefaults;

    @SpeakeasyMetadata()
    @Expose({ name: "syncStatus" })
    syncStatus?: IntegrationsQuickbooksUpdateResponseSyncStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "userId" })
    userId: string;
}
