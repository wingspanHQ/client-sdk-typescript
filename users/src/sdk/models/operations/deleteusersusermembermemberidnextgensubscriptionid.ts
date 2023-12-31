/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class DeleteUsersUserMemberMemberIdNextgenSubscriptionIdRequest extends SpeakeasyBase {
    /**
     * Unique identifier
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;

    /**
     * member ident
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=memberId" })
    memberId: string;
}

export class DeleteUsersUserMemberMemberIdNextgenSubscriptionIdResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * A nextgen subscription object
     */
    @SpeakeasyMetadata()
    nextgenSubscriptionResponse?: shared.NextgenSubscriptionResponse;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
