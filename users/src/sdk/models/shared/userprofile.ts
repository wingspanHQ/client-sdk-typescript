/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum UserProfileGender {
    Male = "Male",
    Female = "Female",
    Other = "Other",
    LessThanNilGreaterThan = "<nil>",
}

export class UserProfile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "dob" })
    dob?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "firstName" })
    firstName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "gender" })
    gender?: UserProfileGender;

    @SpeakeasyMetadata()
    @Expose({ name: "lastName" })
    lastName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "photo" })
    photo?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "preferredName" })
    preferredName?: string;
}