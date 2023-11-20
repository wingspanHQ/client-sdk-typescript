/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class PostPaymentsBulkCollaboratorBatchBatchIdItemRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    bulkCollaboratorItemCreate?: shared.BulkCollaboratorItemCreate;

    /**
     * Unique identifier for a batch
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=batchId" })
    batchId: string;
}

export class PostPaymentsBulkCollaboratorBatchBatchIdItemResponse extends SpeakeasyBase {
    /**
     * An item that will be converted into a collaborator
     */
    @SpeakeasyMetadata()
    bulkCollaboratorItem?: shared.BulkCollaboratorItem;

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
    rawResponse: AxiosResponse;
}
