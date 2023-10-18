/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RedactedUser } from "./redacteduser";
import { TwentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb } from "./twentythreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb";
import { Expose, Type } from "class-transformer";

export class RedactedMember extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "profile" })
    @Type(() => TwentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb)
    profile?: TwentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb;

    @SpeakeasyMetadata()
    @Expose({ name: "user" })
    @Type(() => RedactedUser)
    user: RedactedUser;
}
