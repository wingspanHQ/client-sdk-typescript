/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class CardTokenResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "cardId" })
    cardId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "token" })
    token: string;
}
