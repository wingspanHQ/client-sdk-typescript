/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class MemberClientEvents extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "activeAt" })
    activeAt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "pendingAt" })
    pendingAt?: string;
}