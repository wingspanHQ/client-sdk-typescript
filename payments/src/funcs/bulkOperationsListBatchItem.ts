/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { PaymentsCore } from "../core.js";
import { encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
    ConnectionError,
    InvalidRequestError,
    RequestAbortedError,
    RequestTimeoutError,
    UnexpectedClientError,
} from "../sdk/models/errors/httpclienterrors.js";
import { SDKError } from "../sdk/models/errors/sdkerror.js";
import { SDKValidationError } from "../sdk/models/errors/sdkvalidationerror.js";
import * as operations from "../sdk/models/operations/index.js";
import { Result } from "../sdk/types/fp.js";

/**
 * Retrieve all items from a specific bulk payable batch
 *
 * @remarks
 * Fetches and lists all individual payable items associated with a specified bulk payable batch. Useful for tracking and verifying batch details.
 */
export async function bulkOperationsListBatchItem(
    client$: PaymentsCore,
    request: operations.ListPayableBatchItemsRequest,
    options?: RequestOptions
): Promise<
    Result<
        operations.ListPayableBatchItemsResponse,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$ = request;

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => operations.ListPayableBatchItemsRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = null;

    const pathParams$ = {
        batchId: encodeSimple$("batchId", payload$.batchId, {
            explode: false,
            charEncoding: "percent",
        }),
    };

    const path$ = pathToFunc("/payments/bulk/payable/batch/{batchId}/item")(pathParams$);

    const headers$ = new Headers({
        Accept: "application/json",
    });

    const bearerAuth$ = await extractSecurity(client$.options$.bearerAuth);
    const security$ = bearerAuth$ == null ? {} : { bearerAuth: bearerAuth$ };
    const context = {
        operationID: "listPayableBatchItems",
        oAuth2Scopes: [],
        securitySource: client$.options$.bearerAuth,
    };
    const securitySettings$ = resolveGlobalSecurity(security$);

    const requestRes = client$.createRequest$(
        context,
        {
            security: securitySettings$,
            method: "GET",
            path: path$,
            headers: headers$,
            body: body$,
            timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
        },
        options
    );
    if (!requestRes.ok) {
        return requestRes;
    }
    const request$ = requestRes.value;

    const doResult = await client$.do$(request$, {
        context,
        errorCodes: [],
        retryConfig: options?.retries || client$.options$.retryConfig,
        retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    });
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;

    const responseFields$ = {
        ContentType: response.headers.get("content-type") ?? "application/octet-stream",
        StatusCode: response.status,
        RawResponse: response,
        Headers: {},
    };

    const [result$] = await m$.match<
        operations.ListPayableBatchItemsResponse,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(m$.json(200, operations.ListPayableBatchItemsResponse$inboundSchema, { key: "classes" }))(
        response,
        { extraFields: responseFields$ }
    );
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
