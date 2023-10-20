/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum NewUserSettingsUserAccountType {
    Member = "member",
    Enterprise = "enterprise",
    LessThanNilGreaterThan = "<nil>",
}

export class NewUserSettings extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "userAccountType" })
    userAccountType?: NewUserSettingsUserAccountType;
}