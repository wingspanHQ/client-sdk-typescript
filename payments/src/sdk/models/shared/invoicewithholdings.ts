/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Fourteenabbd45a54a2847207e8ddfaeb5d4bc82ffb855d63772d79e0c5fe04e9b9b01 } from "./fourteenabbd45a54a2847207e8ddfaeb5d4bc82ffb855d63772d79e0c5fe04e9b9b01";
import { Expose, Type } from "class-transformer";

export class InvoiceWithholdings extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "tax" })
    @Type(() => Fourteenabbd45a54a2847207e8ddfaeb5d4bc82ffb855d63772d79e0c5fe04e9b9b01)
    tax?: Fourteenabbd45a54a2847207e8ddfaeb5d4bc82ffb855d63772d79e0c5fe04e9b9b01;
}
