/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PostIntegrationsQuickbooksServiceSyncActivityIdForceSyncRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    integrationsQuickbooksSyncActivityForceSyncRequest?: shared.IntegrationsQuickbooksSyncActivityForceSyncRequest;

    /**
     * Unique identifier
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;
}

export class PostIntegrationsQuickbooksServiceSyncActivityIdForceSyncResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * a response to a force sync request
     */
    @SpeakeasyMetadata()
    integrationsQuickbooksSyncActivityForceSyncResponse?: shared.IntegrationsQuickbooksSyncActivityForceSyncResponse;

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
