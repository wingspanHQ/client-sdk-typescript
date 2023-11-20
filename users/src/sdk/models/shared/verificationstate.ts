/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum VerificationStateStatus {
    None = "None",
    Pending = "Pending",
    Failed = "Failed",
    Verified = "Verified",
}

export class VerificationState extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "externalTinFingerprint" })
    externalTinFingerprint: string;

    @SpeakeasyMetadata()
    @Expose({ name: "requestedAt" })
    requestedAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: VerificationStateStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "tinFingerprint" })
    tinFingerprint: string;
}
