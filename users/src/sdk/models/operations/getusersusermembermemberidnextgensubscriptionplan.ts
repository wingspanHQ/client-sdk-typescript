/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetUsersUserMemberMemberIdNextgenSubscriptionPlanRequest extends SpeakeasyBase {
    /**
     * member ident
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=memberId" })
    memberId: string;
}

export class GetUsersUserMemberMemberIdNextgenSubscriptionPlanResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * A list of Nextgen Subscription Plans
     */
    @SpeakeasyMetadata({ elemType: shared.NextgenSubscriptionPlan })
    nextgenSubscriptionPlans?: shared.NextgenSubscriptionPlan[];

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
