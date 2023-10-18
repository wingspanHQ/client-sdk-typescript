/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum ServiceEnablementResponseServiceState {
    Disabled = "Disabled",
    Enabled = "Enabled",
    Pending = "Pending",
}

export class ServiceEnablementResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "enabled" })
    enabled: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "missingProperties" })
    missingProperties?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "serviceState" })
    serviceState: ServiceEnablementResponseServiceState;
}