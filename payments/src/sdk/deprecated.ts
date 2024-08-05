/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { encodeJSON as encodeJSON$, encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import { SDKError } from "./models/errors/sdkerror.js";
import { SDKValidationError } from "./models/errors/sdkvalidationerror.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrap as unwrap$ } from "./types/fp.js";

export class Deprecated extends ClientSDK {
    /**
     * Register New Custom Data for Collaborator-Member Relationship
     *
     * @remarks
     * [Deprecated - use /payments/custom-fields] Create custom fields that can be associated with the memberClient object to provide extra details about the relationship between a collaborator and a member.
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async create(
        request?: shared.AdditionalData | undefined,
        options?: RequestOptions
    ): Promise<operations.CreateCustomDataCollaboratorMemberResponse> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => shared.AdditionalData$outboundSchema.optional().parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ =
            payload$ === undefined ? null : encodeJSON$("body", payload$, { explode: true });

        const path$ = pathToFunc("/payments/collaborator-settings/additional-data")();

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const bearerAuth$ = await extractSecurity(this.options$.bearerAuth);
        const security$ = bearerAuth$ == null ? {} : { bearerAuth: bearerAuth$ };
        const context = {
            operationID: "createCustomDataCollaboratorMember",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerAuth,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );
        const request$ = unwrap$(requestRes$);

        const doResult = await this.do$(request$, {
            context,
            errorCodes: [],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });
        const response = unwrap$(doResult);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await m$.match<
            operations.CreateCustomDataCollaboratorMemberResponse,
            SDKError | SDKValidationError
        >(
            m$.json(200, operations.CreateCustomDataCollaboratorMemberResponse$inboundSchema, {
                key: "AdditionalData",
            })
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    /**
     * Erase a Specific Collaborator-Member Custom Data
     *
     * @remarks
     * [Deprecated - use /payments/custom-fields] Remove a specific custom data point, eliminating the additional details provided about a collaborator-member relationship.
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async delete(
        request: operations.DeleteCustomDataCollaboratorMemberRequest,
        options?: RequestOptions
    ): Promise<operations.DeleteCustomDataCollaboratorMemberResponse> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) =>
                operations.DeleteCustomDataCollaboratorMemberRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = pathToFunc("/payments/collaborator-settings/additional-data/{id}")(
            pathParams$
        );

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const bearerAuth$ = await extractSecurity(this.options$.bearerAuth);
        const security$ = bearerAuth$ == null ? {} : { bearerAuth: bearerAuth$ };
        const context = {
            operationID: "deleteCustomDataCollaboratorMember",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerAuth,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );
        const request$ = unwrap$(requestRes$);

        const doResult = await this.do$(request$, {
            context,
            errorCodes: [],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });
        const response = unwrap$(doResult);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await m$.match<
            operations.DeleteCustomDataCollaboratorMemberResponse,
            SDKError | SDKValidationError
        >(
            m$.json(200, operations.DeleteCustomDataCollaboratorMemberResponse$inboundSchema, {
                key: "AdditionalData",
            })
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    /**
     * Deprecated Remove Instant Payout Configuration
     *
     * @remarks
     * Delete the existing instant payout configuration, preventing any further instant payouts unless reconfigured.
     */
    async deleteInstantPayout(
        options?: RequestOptions
    ): Promise<operations.DeleteInstantPayoutInformationResponse> {
        const path$ = pathToFunc("/payments/banking/instant-payout")();

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const bearerAuth$ = await extractSecurity(this.options$.bearerAuth);
        const security$ = bearerAuth$ == null ? {} : { bearerAuth: bearerAuth$ };
        const context = {
            operationID: "deleteInstantPayoutInformation",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerAuth,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );
        const request$ = unwrap$(requestRes$);

        const doResult = await this.do$(request$, {
            context,
            errorCodes: [],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });
        const response = unwrap$(doResult);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await m$.match<
            operations.DeleteInstantPayoutInformationResponse,
            SDKError | SDKValidationError
        >(
            m$.json(200, operations.DeleteInstantPayoutInformationResponse$inboundSchema, {
                key: "InstantPayoutResponse",
            })
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    /**
     * Retrieve Specific Collaborator Custom Data
     *
     * @remarks
     * Deprecated - use /payments/custom-fields/:id
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async get(
        request: operations.GetCustomDataCollaboratorMemberRequest,
        options?: RequestOptions
    ): Promise<operations.GetCustomDataCollaboratorMemberResponse> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) =>
                operations.GetCustomDataCollaboratorMemberRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = pathToFunc("/payments/collaborator-settings/additional-data/{id}")(
            pathParams$
        );

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const bearerAuth$ = await extractSecurity(this.options$.bearerAuth);
        const security$ = bearerAuth$ == null ? {} : { bearerAuth: bearerAuth$ };
        const context = {
            operationID: "getCustomDataCollaboratorMember",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerAuth,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );
        const request$ = unwrap$(requestRes$);

        const doResult = await this.do$(request$, {
            context,
            errorCodes: [],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });
        const response = unwrap$(doResult);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await m$.match<
            operations.GetCustomDataCollaboratorMemberResponse,
            SDKError | SDKValidationError
        >(
            m$.json(200, operations.GetCustomDataCollaboratorMemberResponse$inboundSchema, {
                key: "AdditionalData",
            })
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    /**
     * Deprecated Retrieve Instant Payout Information
     *
     * @remarks
     * Fetch detailed information about the current status and details of instant payouts configured in the system.
     */
    async getInstantPayout(
        options?: RequestOptions
    ): Promise<operations.GetInstantPayoutInformationResponse> {
        const path$ = pathToFunc("/payments/banking/instant-payout")();

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const bearerAuth$ = await extractSecurity(this.options$.bearerAuth);
        const security$ = bearerAuth$ == null ? {} : { bearerAuth: bearerAuth$ };
        const context = {
            operationID: "getInstantPayoutInformation",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerAuth,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );
        const request$ = unwrap$(requestRes$);

        const doResult = await this.do$(request$, {
            context,
            errorCodes: [],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });
        const response = unwrap$(doResult);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await m$.match<
            operations.GetInstantPayoutInformationResponse,
            SDKError | SDKValidationError
        >(
            m$.json(200, operations.GetInstantPayoutInformationResponse$inboundSchema, {
                key: "InstantPayoutResponse",
            })
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    /**
     * Retrieve All Collaborator-Member Custom Data Points
     *
     * @remarks
     * [Deprecated - use /payments/custom-fields] Fetch all custom data fields that are associated with the memberClient objects, giving insight into additional details between collaborators and members.
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async list(
        options?: RequestOptions
    ): Promise<operations.ListCustomDataCollaboratorMembersResponse> {
        const path$ = pathToFunc("/payments/collaborator-settings/additional-data")();

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const bearerAuth$ = await extractSecurity(this.options$.bearerAuth);
        const security$ = bearerAuth$ == null ? {} : { bearerAuth: bearerAuth$ };
        const context = {
            operationID: "listCustomDataCollaboratorMembers",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerAuth,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );
        const request$ = unwrap$(requestRes$);

        const doResult = await this.do$(request$, {
            context,
            errorCodes: [],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });
        const response = unwrap$(doResult);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await m$.match<
            operations.ListCustomDataCollaboratorMembersResponse,
            SDKError | SDKValidationError
        >(
            m$.json(200, operations.ListCustomDataCollaboratorMembersResponse$inboundSchema, {
                key: "classes",
            })
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    /**
     * Modify a Specific Collaborator-Member Custom Data
     *
     * @remarks
     * [Deprecated - use /payments/custom-fields] Update details or attributes of an existing custom data point associated with the relationship between a collaborator and a member.
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async update(
        request: operations.UpdateCustomDataCollaboratorMemberRequest,
        options?: RequestOptions
    ): Promise<operations.UpdateCustomDataCollaboratorMemberResponse> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) =>
                operations.UpdateCustomDataCollaboratorMemberRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = encodeJSON$("body", payload$.AdditionalDataUpdateRequest, { explode: true });

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = pathToFunc("/payments/collaborator-settings/additional-data/{id}")(
            pathParams$
        );

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const bearerAuth$ = await extractSecurity(this.options$.bearerAuth);
        const security$ = bearerAuth$ == null ? {} : { bearerAuth: bearerAuth$ };
        const context = {
            operationID: "updateCustomDataCollaboratorMember",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerAuth,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "PATCH",
                path: path$,
                headers: headers$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );
        const request$ = unwrap$(requestRes$);

        const doResult = await this.do$(request$, {
            context,
            errorCodes: [],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });
        const response = unwrap$(doResult);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await m$.match<
            operations.UpdateCustomDataCollaboratorMemberResponse,
            SDKError | SDKValidationError
        >(
            m$.json(200, operations.UpdateCustomDataCollaboratorMemberResponse$inboundSchema, {
                key: "AdditionalData",
            })
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    /**
     * Deprecated Set Up Instant Payout Configuration
     *
     * @remarks
     * Configure a new instant payout setting, specifying details like amount, frequency, and destination.
     */
    async updateInstantPayout(
        request?: shared.InstantPayoutRequest | undefined,
        options?: RequestOptions
    ): Promise<operations.UpdateInstantPayoutInformationResponse> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => shared.InstantPayoutRequest$outboundSchema.optional().parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ =
            payload$ === undefined ? null : encodeJSON$("body", payload$, { explode: true });

        const path$ = pathToFunc("/payments/banking/instant-payout")();

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const bearerAuth$ = await extractSecurity(this.options$.bearerAuth);
        const security$ = bearerAuth$ == null ? {} : { bearerAuth: bearerAuth$ };
        const context = {
            operationID: "updateInstantPayoutInformation",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerAuth,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );
        const request$ = unwrap$(requestRes$);

        const doResult = await this.do$(request$, {
            context,
            errorCodes: [],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });
        const response = unwrap$(doResult);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await m$.match<
            operations.UpdateInstantPayoutInformationResponse,
            SDKError | SDKValidationError
        >(
            m$.json(200, operations.UpdateInstantPayoutInformationResponse$inboundSchema, {
                key: "InstantPayoutResponse",
            })
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }
}
