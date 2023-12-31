/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PostUsersOrganizationUserUserIdAssociateRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    organizationUserAssociation?: shared.OrganizationUserAssociation;

    /**
     * User Id
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
    userId: string;
}

export class PostUsersOrganizationUserUserIdAssociateResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Association between a child user account and its parent
     */
    @SpeakeasyMetadata()
    organizationAccount?: shared.OrganizationAccount;

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
