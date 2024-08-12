/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { clientManagementCreate } from "../funcs/clientManagementCreate.js";
import { clientManagementDeleteAssociation } from "../funcs/clientManagementDeleteAssociation.js";
import { clientManagementDeleteClientDeduction } from "../funcs/clientManagementDeleteClientDeduction.js";
import { clientManagementEstablish } from "../funcs/clientManagementEstablish.js";
import { clientManagementGetAssociation } from "../funcs/clientManagementGetAssociation.js";
import { clientManagementGetClientDeduction } from "../funcs/clientManagementGetClientDeduction.js";
import { clientManagementList } from "../funcs/clientManagementList.js";
import { clientManagementListAssociations } from "../funcs/clientManagementListAssociations.js";
import { clientManagementListClientDeduction } from "../funcs/clientManagementListClientDeduction.js";
import { clientManagementListSpecificClientDetail } from "../funcs/clientManagementListSpecificClientDetail.js";
import { clientManagementUpdateAssociation } from "../funcs/clientManagementUpdateAssociation.js";
import { clientManagementUpdateClientDeduction } from "../funcs/clientManagementUpdateClientDeduction.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

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
        return unwrapAsync(clientManagementCreate(this, request, options));
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
        return unwrapAsync(clientManagementDeleteAssociation(this, request, options));
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
        return unwrapAsync(clientManagementDeleteClientDeduction(this, request, options));
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
        return unwrapAsync(clientManagementEstablish(this, request, options));
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
        return unwrapAsync(clientManagementGetAssociation(this, request, options));
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
        return unwrapAsync(clientManagementGetClientDeduction(this, request, options));
    }

    /**
     * Retrieve All Clients (Version 2)
     *
     * @remarks
     * Fetches a comprehensive list of clients formatted in the V2 standard, providing an overview of all client data.
     */
    async list(options?: RequestOptions): Promise<operations.ListClientsResponse> {
        return unwrapAsync(clientManagementList(this, options));
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
        return unwrapAsync(clientManagementListAssociations(this, options));
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
        return unwrapAsync(clientManagementListClientDeduction(this, options));
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
        return unwrapAsync(clientManagementListSpecificClientDetail(this, request, options));
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
        return unwrapAsync(clientManagementUpdateAssociation(this, request, options));
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
        return unwrapAsync(clientManagementUpdateClientDeduction(this, request, options));
    }
}
