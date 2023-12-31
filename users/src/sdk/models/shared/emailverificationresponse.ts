/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum EmailVerificationResponseStatus {
    Pending = "Pending",
    Verified = "Verified",
}

export class EmailVerificationResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: EmailVerificationResponseStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "userId" })
    userId: string;
}
