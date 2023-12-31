/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { IntegrationsQuickbooksDefaults } from "./integrationsquickbooksdefaults";
import { Expose, Type } from "class-transformer";

export enum IntegrationsQuickbooksResponseAuthStatus {
    NeverConnected = "NeverConnected",
    Connected = "Connected",
    RetryingConnection = "RetryingConnection",
    Disconnected = "Disconnected",
}

export enum IntegrationsQuickbooksResponseSyncStatus {
    NeverSynced = "NeverSynced",
    PendingSync = "PendingSync",
    Synced = "Synced",
    OutOfSync = "OutOfSync",
}

export class IntegrationsQuickbooksResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "authRetryCount" })
    authRetryCount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "authStatus" })
    authStatus: IntegrationsQuickbooksResponseAuthStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "authorizeUrl" })
    authorizeUrl?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "defaults" })
    @Type(() => IntegrationsQuickbooksDefaults)
    defaults?: IntegrationsQuickbooksDefaults;

    @SpeakeasyMetadata()
    @Expose({ name: "integrationsId" })
    integrationsId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "syncStartedAt" })
    syncStartedAt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "syncStatus" })
    syncStatus: IntegrationsQuickbooksResponseSyncStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "userId" })
    userId: string;
}
