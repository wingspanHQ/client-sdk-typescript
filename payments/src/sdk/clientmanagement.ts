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

export class ClientManagement extends ClientSDK {
    /**
     * Register a New Client Deduction
     *
     * @remarks
     * Allows for the creation of a new client deduction based on the provided details.
     */
    async create(
        request?: shared.DeductionCreateRequest | undefined,
        options?: RequestOptions
    ): Promise<operations.CreateClientDeductionResponse> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => shared.DeductionCreateRequest$outboundSchema.optional().parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ =
            payload$ === undefined ? null : encodeJSON$("body", payload$, { explode: true });

        const path$ = pathToFunc("/payments/client-deduction")();

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const bearerAuth$ = await extractSecurity(this.options$.bearerAuth);
        const security$ = bearerAuth$ == null ? {} : { bearerAuth: bearerAuth$ };
        const context = {
            operationID: "createClientDeduction",
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
            operations.CreateClientDeductionResponse,
            SDKError | SDKValidationError
        >(
            m$.json(200, operations.CreateClientDeductionResponse$inboundSchema, {
                key: "DeductionResponse",
            })
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    /**
     * Remove a specific member-client relationship from the system
     *
     * @remarks
     * Deletes the association between a member and a client using the provided unique identifier. Once deleted, this relationship data can't be recovered.
     */
    async deleteAssociation(
        request: operations.DeleteMemberClientAssociationRequest,
        options?: RequestOptions
    ): Promise<operations.DeleteMemberClientAssociationResponse> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) =>
                operations.DeleteMemberClientAssociationRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = pathToFunc("/payments/memberClient/{id}")(pathParams$);

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const bearerAuth$ = await extractSecurity(this.options$.bearerAuth);
        const security$ = bearerAuth$ == null ? {} : { bearerAuth: bearerAuth$ };
        const context = {
            operationID: "deleteMemberClientAssociation",
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
            operations.DeleteMemberClientAssociationResponse,
            SDKError | SDKValidationError
        >(
            m$.json(200, operations.DeleteMemberClientAssociationResponse$inboundSchema, {
                key: "MemberClientSchema",
            })
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    /**
     * Remove a Client Deduction
     *
     * @remarks
     * Allows for the deletion of a client deduction based on its unique identifier, removing it permanently from the system.
     */
    async deleteClientDeduction(
        request: operations.DeleteClientDeductionRequest,
        options?: RequestOptions
    ): Promise<operations.DeleteClientDeductionResponse> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.DeleteClientDeductionRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = pathToFunc("/payments/client-deduction/{id}")(pathParams$);

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const bearerAuth$ = await extractSecurity(this.options$.bearerAuth);
        const security$ = bearerAuth$ == null ? {} : { bearerAuth: bearerAuth$ };
        const context = {
            operationID: "deleteClientDeduction",
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
            operations.DeleteClientDeductionResponse,
            SDKError | SDKValidationError
        >(
            m$.json(200, operations.DeleteClientDeductionResponse$inboundSchema, {
                key: "DeductionResponse",
            })
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    /**
     * Establish a new association between a member and client
     *
     * @remarks
     * Use this endpoint to create a new linkage between a member and client in the system, allowing for better relationship management.
     */
    async establish(
        request?: shared.MemberClientCreateRequest | undefined,
        options?: RequestOptions
    ): Promise<operations.EstablishMemberClientAssociationResponse> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => shared.MemberClientCreateRequest$outboundSchema.optional().parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ =
            payload$ === undefined ? null : encodeJSON$("body", payload$, { explode: true });

        const path$ = pathToFunc("/payments/memberClient")();

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const bearerAuth$ = await extractSecurity(this.options$.bearerAuth);
        const security$ = bearerAuth$ == null ? {} : { bearerAuth: bearerAuth$ };
        const context = {
            operationID: "establishMemberClientAssociation",
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
            operations.EstablishMemberClientAssociationResponse,
            SDKError | SDKValidationError
        >(
            m$.json(200, operations.EstablishMemberClientAssociationResponse$inboundSchema, {
                key: "MemberClientSchema",
            })
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    /**
     * Retrieve detailed information of a specific member-client relationship
     *
     * @remarks
     * Fetches comprehensive details of the association between a member and a client using the provided unique identifier.
     */
    async getAssociation(
        request: operations.GetMemberClientAssociationRequest,
        options?: RequestOptions
    ): Promise<operations.GetMemberClientAssociationResponse> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.GetMemberClientAssociationRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = pathToFunc("/payments/memberClient/{id}")(pathParams$);

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const bearerAuth$ = await extractSecurity(this.options$.bearerAuth);
        const security$ = bearerAuth$ == null ? {} : { bearerAuth: bearerAuth$ };
        const context = {
            operationID: "getMemberClientAssociation",
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
            operations.GetMemberClientAssociationResponse,
            SDKError | SDKValidationError
        >(
            m$.json(200, operations.GetMemberClientAssociationResponse$inboundSchema, {
                key: "MemberClientSchema",
            })
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    /**
     * Fetch Specific Client Deduction Details
     *
     * @remarks
     * Provides detailed information for a client deduction based on its unique identifier.
     */
    async getClientDeduction(
        request: operations.GetClientDeductionRequest,
        options?: RequestOptions
    ): Promise<operations.GetClientDeductionResponse> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.GetClientDeductionRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = pathToFunc("/payments/client-deduction/{id}")(pathParams$);

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const bearerAuth$ = await extractSecurity(this.options$.bearerAuth);
        const security$ = bearerAuth$ == null ? {} : { bearerAuth: bearerAuth$ };
        const context = {
            operationID: "getClientDeduction",
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
            operations.GetClientDeductionResponse,
            SDKError | SDKValidationError
        >(
            m$.json(200, operations.GetClientDeductionResponse$inboundSchema, {
                key: "DeductionResponse",
            })
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    /**
     * Retrieve All Clients (Version 2)
     *
     * @remarks
     * Fetches a comprehensive list of clients formatted in the V2 standard, providing an overview of all client data.
     */
    async list(options?: RequestOptions): Promise<operations.ListClientsResponse> {
        const path$ = pathToFunc("/payments/v2/client")();

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const bearerAuth$ = await extractSecurity(this.options$.bearerAuth);
        const security$ = bearerAuth$ == null ? {} : { bearerAuth: bearerAuth$ };
        const context = {
            operationID: "listClients",
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
            operations.ListClientsResponse,
            SDKError | SDKValidationError
        >(m$.json(200, operations.ListClientsResponse$inboundSchema, { key: "classes" }))(
            response,
            { extraFields: responseFields$ }
        );

        return unwrap$(result$);
    }

    /**
     * Fetch a list of member and client associations
     *
     * @remarks
     * Retrieve a detailed list showcasing all the existing associations between members and clients in the system.
     */
    async listAssociations(
        options?: RequestOptions
    ): Promise<operations.ListMemberClientAssociationsResponse> {
        const path$ = pathToFunc("/payments/memberClient")();

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const bearerAuth$ = await extractSecurity(this.options$.bearerAuth);
        const security$ = bearerAuth$ == null ? {} : { bearerAuth: bearerAuth$ };
        const context = {
            operationID: "listMemberClientAssociations",
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
            operations.ListMemberClientAssociationsResponse,
            SDKError | SDKValidationError
        >(
            m$.json(200, operations.ListMemberClientAssociationsResponse$inboundSchema, {
                key: "classes",
            })
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    /**
     * Retrieve All Client Deductions
     *
     * @remarks
     * Fetches a comprehensive list of all client deductions present in the system.
     */
    async listClientDeduction(
        options?: RequestOptions
    ): Promise<operations.ListClientDeductionsResponse> {
        const path$ = pathToFunc("/payments/client-deduction")();

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const bearerAuth$ = await extractSecurity(this.options$.bearerAuth);
        const security$ = bearerAuth$ == null ? {} : { bearerAuth: bearerAuth$ };
        const context = {
            operationID: "listClientDeductions",
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
            operations.ListClientDeductionsResponse,
            SDKError | SDKValidationError
        >(m$.json(200, operations.ListClientDeductionsResponse$inboundSchema, { key: "classes" }))(
            response,
            { extraFields: responseFields$ }
        );

        return unwrap$(result$);
    }

    /**
     * Retrieve Specific Client Details (Version 2)
     *
     * @remarks
     * Fetches detailed information of a specific client, identified by the clientId, in the V2 format.
     */
    async listSpecificClientDetail(
        request: operations.ListSpecificClientDetailsRequest,
        options?: RequestOptions
    ): Promise<operations.ListSpecificClientDetailsResponse> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.ListSpecificClientDetailsRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = null;

        const pathParams$ = {
            clientId: encodeSimple$("clientId", payload$.clientId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = pathToFunc("/payments/v2/client/{clientId}")(pathParams$);

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const bearerAuth$ = await extractSecurity(this.options$.bearerAuth);
        const security$ = bearerAuth$ == null ? {} : { bearerAuth: bearerAuth$ };
        const context = {
            operationID: "listSpecificClientDetails",
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
            operations.ListSpecificClientDetailsResponse,
            SDKError | SDKValidationError
        >(
            m$.json(200, operations.ListSpecificClientDetailsResponse$inboundSchema, {
                key: "CollaboratorV2",
            })
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    /**
     * Update information of a specific member-client relationship
     *
     * @remarks
     * Modifies details of the association between a member and a client based on the provided data.
     */
    async updateAssociation(
        request: operations.UpdateMemberClientAssociationRequest,
        options?: RequestOptions
    ): Promise<operations.UpdateMemberClientAssociationResponse> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) =>
                operations.UpdateMemberClientAssociationRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = encodeJSON$("body", payload$.MemberClientUpdateRequest, { explode: true });

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = pathToFunc("/payments/memberClient/{id}")(pathParams$);

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const bearerAuth$ = await extractSecurity(this.options$.bearerAuth);
        const security$ = bearerAuth$ == null ? {} : { bearerAuth: bearerAuth$ };
        const context = {
            operationID: "updateMemberClientAssociation",
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
            operations.UpdateMemberClientAssociationResponse,
            SDKError | SDKValidationError
        >(
            m$.json(200, operations.UpdateMemberClientAssociationResponse$inboundSchema, {
                key: "MemberClientSchema",
            })
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    /**
     * Modify a Client Deduction
     *
     * @remarks
     * Allows for updating specific details or attributes of an existing client deduction.
     */
    async updateClientDeduction(
        request: operations.UpdateClientDeductionRequest,
        options?: RequestOptions
    ): Promise<operations.UpdateClientDeductionResponse> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.UpdateClientDeductionRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = encodeJSON$("body", payload$.DeductionUpdateRequest, { explode: true });

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = pathToFunc("/payments/client-deduction/{id}")(pathParams$);

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const bearerAuth$ = await extractSecurity(this.options$.bearerAuth);
        const security$ = bearerAuth$ == null ? {} : { bearerAuth: bearerAuth$ };
        const context = {
            operationID: "updateClientDeduction",
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
            operations.UpdateClientDeductionResponse,
            SDKError | SDKValidationError
        >(
            m$.json(200, operations.UpdateClientDeductionResponse$inboundSchema, {
                key: "DeductionResponse",
            })
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }
}
