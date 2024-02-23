/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PatchPaymentsCollaboratorIdRemoveGroupGroupIdRequest extends SpeakeasyBase {
    /**
     * Unique group Id
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
    groupId: string;

    /**
     * Unique identifier
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;
}

export class PatchPaymentsCollaboratorIdRemoveGroupGroupIdResponse extends SpeakeasyBase {
    /**
     * A collaborator is a contractor that can receive payments
     */
    @SpeakeasyMetadata()
    collaboratorSchema?: shared.CollaboratorSchema;

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