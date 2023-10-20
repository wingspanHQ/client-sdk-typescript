/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PostUsersUserMemberMemberIdNextgenSubscriptionRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    subscriptionCreateRequest?: shared.SubscriptionCreateRequest;

    /**
     * member ident
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=memberId" })
    memberId: string;
}

export class PostUsersUserMemberMemberIdNextgenSubscriptionResponse extends SpeakeasyBase {
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