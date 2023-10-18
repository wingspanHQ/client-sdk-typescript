/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RedactedMember } from "./redactedmember";
import { RedactedUser } from "./redacteduser";
import { Expose, Type } from "class-transformer";

export class AuthorizedAccount extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "accessibleMember" })
    @Type(() => RedactedMember)
    accessibleMember: RedactedMember;

    @SpeakeasyMetadata()
    @Expose({ name: "accessibleUser" })
    @Type(() => RedactedUser)
    accessibleUser: RedactedUser;

    @SpeakeasyMetadata()
    @Expose({ name: "allowedScopeGroupIds" })
    allowedScopeGroupIds: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "userId" })
    userId: string;
}
