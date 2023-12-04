/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Sevena01613108052d8f7b4782efc42c1c6198c318ddee48446943e5402df03118c4 } from "./sevena01613108052d8f7b4782efc42c1c6198c318ddee48446943e5402df03118c4";
import { Expose, Type } from "class-transformer";

export enum AccountVerifyRequestType {
    MicroDeposit = "MicroDeposit",
}

export class AccountVerifyRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: AccountVerifyRequestType;

    @SpeakeasyMetadata()
    @Expose({ name: "verifications" })
    @Type(() => Sevena01613108052d8f7b4782efc42c1c6198c318ddee48446943e5402df03118c4)
    verifications: Sevena01613108052d8f7b4782efc42c1c6198c318ddee48446943e5402df03118c4;
}