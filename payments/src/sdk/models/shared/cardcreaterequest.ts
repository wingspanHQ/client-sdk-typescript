/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Address } from "./address";
import { Expose, Type } from "class-transformer";

export class CardCreateRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "requestPhysicalCard" })
    requestPhysicalCard?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "shippingAddress" })
    @Type(() => Address)
    shippingAddress?: Address;
}
