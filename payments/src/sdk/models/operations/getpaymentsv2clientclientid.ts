/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class GetPaymentsV2ClientClientIdRequest extends SpeakeasyBase {
    /**
     * Unique identifier of a client
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
    clientId: string;
}

export class GetPaymentsV2ClientClientIdResponse extends SpeakeasyBase {
    /**
     * A single V2 Collaborator
     */
    @SpeakeasyMetadata()
    collaboratorV2?: shared.CollaboratorV2;

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

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
