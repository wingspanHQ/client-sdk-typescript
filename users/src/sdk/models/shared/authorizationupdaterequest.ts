/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum AuthorizationUpdateRequestAllowedAction {
    Read = "Read",
    Write = "Write",
    LessThanNilGreaterThan = "<nil>",
}

export class AuthorizationUpdateRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "allowedAction" })
    allowedAction?: AuthorizationUpdateRequestAllowedAction;

    @SpeakeasyMetadata()
    @Expose({ name: "allowedScope" })
    allowedScope?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "allowedScopeGroupId" })
    allowedScopeGroupId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "requestingUserId" })
    requestingUserId?: string;
}
