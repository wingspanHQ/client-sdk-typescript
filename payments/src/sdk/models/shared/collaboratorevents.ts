/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class CollaboratorEvents extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "knowYourCustomerVerifiedAt" })
    knowYourCustomerVerifiedAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "payoutMethodFirstAddedAt" })
    payoutMethodFirstAddedAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "signedUpAt" })
    signedUpAt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "taxDocumentationVerifiedAt" })
    taxDocumentationVerifiedAt: string;
}
