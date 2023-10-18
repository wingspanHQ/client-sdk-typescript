/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum ClientDataAutoPayStrategy {
    All = "All",
    None = "None",
}

export enum ClientDataVerificationStratgy {
    None = "None",
    All = "All",
}

export class ClientData extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "autoPayStrategy" })
    autoPayStrategy?: ClientDataAutoPayStrategy;

    @SpeakeasyMetadata()
    @Expose({ name: "externalId" })
    externalId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "verificationStratgy" })
    verificationStratgy?: ClientDataVerificationStratgy;
}
