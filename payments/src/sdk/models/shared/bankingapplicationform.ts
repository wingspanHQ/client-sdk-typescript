/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class BankingApplicationForm extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "applicationLink" })
    applicationLink: string;

    @SpeakeasyMetadata()
    @Expose({ name: "memberId" })
    memberId: string;
}
