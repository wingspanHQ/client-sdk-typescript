/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class SignInWithGoogleRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "idToken" })
    idToken: string;
}
