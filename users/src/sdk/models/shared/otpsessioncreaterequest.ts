/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum OtpSessionCreateRequestChannel {
    Sms = "SMS",
    Email = "Email",
    LessThanNilGreaterThan = "<nil>",
}

export class OtpSessionCreateRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "appRedirectPath" })
    appRedirectPath?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "channel" })
    channel?: OtpSessionCreateRequestChannel;
}