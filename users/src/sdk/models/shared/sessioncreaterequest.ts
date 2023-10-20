/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class SessionCreateRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "expiration" })
    expiration?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "otpExpiration" })
    otpExpiration?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "password" })
    password?: string;
}
