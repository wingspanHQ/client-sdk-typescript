/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetPaymentsBulkCollaboratorBatchResponse extends SpeakeasyBase {
    /**
     * A list of bulk collaborator batches
     */
    @SpeakeasyMetadata({ elemType: shared.BulkCollaboratorBatch })
    bulkCollaboratorBatches?: shared.BulkCollaboratorBatch[];

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