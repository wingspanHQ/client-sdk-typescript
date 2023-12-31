/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class BankStatement extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "accountId" })
    accountId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "date" })
    date: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}
