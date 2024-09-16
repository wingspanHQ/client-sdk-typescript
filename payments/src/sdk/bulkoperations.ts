/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { bulkOperationsCreate } from "../funcs/bulkOperationsCreate.js";
import { bulkOperationsCreateBatchItem } from "../funcs/bulkOperationsCreateBatchItem.js";
import { bulkOperationsCreateClient } from "../funcs/bulkOperationsCreateClient.js";
import { bulkOperationsCreateClientItem } from "../funcs/bulkOperationsCreateClientItem.js";
import { bulkOperationsCreateCollaborator } from "../funcs/bulkOperationsCreateCollaborator.js";
import { bulkOperationsCreatePayable } from "../funcs/bulkOperationsCreatePayable.js";
import { bulkOperationsCreateSpecificCollaboratorItem } from "../funcs/bulkOperationsCreateSpecificCollaboratorItem.js";
import { bulkOperationsCreateSpecificInvoice } from "../funcs/bulkOperationsCreateSpecificInvoice.js";
import { bulkOperationsDeleteCollaborator } from "../funcs/bulkOperationsDeleteCollaborator.js";
import { bulkOperationsDeletePayable } from "../funcs/bulkOperationsDeletePayable.js";
import { bulkOperationsGet } from "../funcs/bulkOperationsGet.js";
import { bulkOperationsGetBatchItem } from "../funcs/bulkOperationsGetBatchItem.js";
import { bulkOperationsGetClient } from "../funcs/bulkOperationsGetClient.js";
import { bulkOperationsGetClientItem } from "../funcs/bulkOperationsGetClientItem.js";
import { bulkOperationsGetCollaborator } from "../funcs/bulkOperationsGetCollaborator.js";
import { bulkOperationsGetPayable } from "../funcs/bulkOperationsGetPayable.js";
import { bulkOperationsGetSpecific } from "../funcs/bulkOperationsGetSpecific.js";
import { bulkOperationsGetSpecificCollaboratorItem } from "../funcs/bulkOperationsGetSpecificCollaboratorItem.js";
import { bulkOperationsGetSpecificInvoice } from "../funcs/bulkOperationsGetSpecificInvoice.js";
import { bulkOperationsList } from "../funcs/bulkOperationsList.js";
import { bulkOperationsListBatchItem } from "../funcs/bulkOperationsListBatchItem.js";
import { bulkOperationsListClient } from "../funcs/bulkOperationsListClient.js";
import { bulkOperationsListClientItem } from "../funcs/bulkOperationsListClientItem.js";
import { bulkOperationsListCollaborator } from "../funcs/bulkOperationsListCollaborator.js";
import { bulkOperationsListPayable } from "../funcs/bulkOperationsListPayable.js";
import { bulkOperationsListSpecificCollaboratorItem } from "../funcs/bulkOperationsListSpecificCollaboratorItem.js";
import { bulkOperationsListSpecificInvoice } from "../funcs/bulkOperationsListSpecificInvoice.js";
import { bulkOperationsUpdate } from "../funcs/bulkOperationsUpdate.js";
import { bulkOperationsUpdateClient } from "../funcs/bulkOperationsUpdateClient.js";
import { bulkOperationsUpdateClientItem } from "../funcs/bulkOperationsUpdateClientItem.js";
import { bulkOperationsUpdateCollaborator } from "../funcs/bulkOperationsUpdateCollaborator.js";
import { bulkOperationsUpdatePayable } from "../funcs/bulkOperationsUpdatePayable.js";
import { bulkOperationsUpdateSpecific } from "../funcs/bulkOperationsUpdateSpecific.js";
import { bulkOperationsUpdateSpecificCollaboratorItem } from "../funcs/bulkOperationsUpdateSpecificCollaboratorItem.js";
import { bulkOperationsUpdateSpecificInvoice } from "../funcs/bulkOperationsUpdateSpecificInvoice.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class BulkOperations extends ClientSDK {
  /**
   * Initiate a New Bulk Invoice Batch
   *
   * @remarks
   * Creates a new batch for importing multiple invoices at once, streamlining the bulk invoicing operations.
   */
  async create(
    request?: shared.BulkInvoiceBatchCreate | undefined,
    options?: RequestOptions,
  ): Promise<operations.CreateInvoiceBatchResponse> {
    return unwrapAsync(bulkOperationsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Add a new item to a specific bulk payable batch
   *
   * @remarks
   * Allows for the creation and addition of a new individual payable item into an existing bulk payable batch. This enhances batch management and payable tracking.
   */
  async createBatchItem(
    request: operations.CreatePayableBatchItemRequest,
    options?: RequestOptions,
  ): Promise<operations.CreatePayableBatchItemResponse> {
    return unwrapAsync(bulkOperationsCreateBatchItem(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a new bulk client batch
   *
   * @remarks
   * Initiates the creation of a fresh bulk client batch, streamlining the process of adding multiple clients in one go.
   */
  async createClient(
    request?: shared.BulkBatchCreate | undefined,
    options?: RequestOptions,
  ): Promise<operations.CreateClientBatchResponse> {
    return unwrapAsync(bulkOperationsCreateClient(
      this,
      request,
      options,
    ));
  }

  /**
   * Add a New Item to a Client Batch
   *
   * @remarks
   * Inserts a new item into the specified bulk client batch, allowing for further expansion of client data within the batch.
   */
  async createClientItem(
    request: operations.CreateClientBatchItemRequest,
    options?: RequestOptions,
  ): Promise<operations.CreateClientBatchItemResponse> {
    return unwrapAsync(bulkOperationsCreateClientItem(
      this,
      request,
      options,
    ));
  }

  /**
   * Initiate a new bulk collaborator batch.
   *
   * @remarks
   * Enables the creation of a new bulk collaborator batch, facilitating the bulk management and addition of collaborators for various projects or tasks.
   */
  async createCollaborator(
    request?: shared.BulkBatchCreate | undefined,
    options?: RequestOptions,
  ): Promise<operations.CreateCollaboratorBatchResponse> {
    return unwrapAsync(bulkOperationsCreateCollaborator(
      this,
      request,
      options,
    ));
  }

  /**
   * Initiate a New Bulk Payable Batch
   *
   * @remarks
   * Creates a new batch for importing multiple payables at once, streamlining the bulk payment operations.
   */
  async createPayable(
    request?: shared.BulkPayableBatchCreate | undefined,
    options?: RequestOptions,
  ): Promise<operations.CreatePayableBatchResponse> {
    return unwrapAsync(bulkOperationsCreatePayable(
      this,
      request,
      options,
    ));
  }

  /**
   * Append a new item to a specific collaborator batch
   *
   * @remarks
   * Allows for the addition of a new item to an existing batch of collaborators by providing the batchs unique identifier and item details.
   */
  async createSpecificCollaboratorItem(
    request: operations.CreateSpecificCollaboratorBatchItemRequest,
    options?: RequestOptions,
  ): Promise<operations.CreateSpecificCollaboratorBatchItemResponse> {
    return unwrapAsync(bulkOperationsCreateSpecificCollaboratorItem(
      this,
      request,
      options,
    ));
  }

  /**
   * Add a new item to a specific bulk invoice batch
   *
   * @remarks
   * Allows users to append a new item to a given batch of bulk invoices by supplying its unique batch identifier and the details of the new item.
   */
  async createSpecificInvoice(
    request: operations.CreateSpecificInvoiceBatchRequest,
    options?: RequestOptions,
  ): Promise<operations.CreateSpecificInvoiceBatchResponse> {
    return unwrapAsync(bulkOperationsCreateSpecificInvoice(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove a Specific Collaborator Batch
   *
   * @remarks
   * Deletes a specific bulk collaborator batch using its unique identifier. Once deleted, the batch cannot be recovered.
   */
  async deleteCollaborator(
    request: operations.DeleteCollaboratorBatchRequest,
    options?: RequestOptions,
  ): Promise<operations.DeleteCollaboratorBatchResponse> {
    return unwrapAsync(bulkOperationsDeleteCollaborator(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove a Specific Bulk Payable Batch
   *
   * @remarks
   * Deletes a specific batch for bulk payables, using the provided batch ID, preventing any further operations on it.
   */
  async deletePayable(
    request: operations.DeletePayableBatchRequest,
    options?: RequestOptions,
  ): Promise<operations.DeletePayableBatchResponse> {
    return unwrapAsync(bulkOperationsDeletePayable(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve details of a specific bulk invoice batch
   *
   * @remarks
   * Allows for the retrieval of a specified batch of bulk invoices by providing its unique batch identifier.
   */
  async get(
    request: operations.GetInvoiceBatchRequest,
    options?: RequestOptions,
  ): Promise<operations.GetInvoiceBatchResponse> {
    return unwrapAsync(bulkOperationsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Fetch the import summary for a specific bulk payable batch
   *
   * @remarks
   * Provides an overview and summary of the import process for a given bulk payable batch, allowing for tracking of imported items, errors, and other relevant batch statistics.
   */
  async getBatchItem(
    request: operations.GetPayableBatchItemRequest,
    options?: RequestOptions,
  ): Promise<operations.GetPayableBatchItemResponse> {
    return unwrapAsync(bulkOperationsGetBatchItem(
      this,
      request,
      options,
    ));
  }

  /**
   * Fetch Details of a Specific Item from a Client Batch
   *
   * @remarks
   * Retrieves the detailed information of a specific item within the bulk client batch using both batch and item unique identifiers.
   */
  async getClient(
    request: operations.GetClientBatchRequest,
    options?: RequestOptions,
  ): Promise<operations.GetClientBatchResponse> {
    return unwrapAsync(bulkOperationsGetClient(
      this,
      request,
      options,
    ));
  }

  /**
   * Fetch Details of a Specific Item from a Client Batch
   *
   * @remarks
   * Retrieves the detailed information of a specific item within the bulk client batch using both batch and item unique identifiers.
   */
  async getClientItem(
    request: operations.GetClientBatchItemRequest,
    options?: RequestOptions,
  ): Promise<operations.GetClientBatchItemResponse> {
    return unwrapAsync(bulkOperationsGetClientItem(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve Details of a Specific Collaborator Batch
   *
   * @remarks
   * Fetches detailed information of a specific bulk collaborator batch, using the provided batch ID.
   */
  async getCollaborator(
    request: operations.GetCollaboratorBatchRequest,
    options?: RequestOptions,
  ): Promise<operations.GetCollaboratorBatchResponse> {
    return unwrapAsync(bulkOperationsGetCollaborator(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve Details of a Specific Bulk Payable Batch
   *
   * @remarks
   * Fetches detailed information of a specific batch created for bulk payables, using the provided batch ID.
   */
  async getPayable(
    request: operations.GetPayableBatchRequest,
    options?: RequestOptions,
  ): Promise<operations.GetPayableBatchResponse> {
    return unwrapAsync(bulkOperationsGetPayable(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a Specific Item from a Bulk Payable Batch
   *
   * @remarks
   * Fetches detailed information of a specific item within a bulk payable batch, using both the batch ID and the item ID.
   */
  async getSpecific(
    request: operations.GetSpecificPayableBatchItemRequest,
    options?: RequestOptions,
  ): Promise<operations.GetSpecificPayableBatchItemResponse> {
    return unwrapAsync(bulkOperationsGetSpecific(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve details of a specific item from a collaborator batch
   *
   * @remarks
   * Enables fetching of detailed information about an individual item from a specified batch of collaborators using both the batch and item unique identifiers.
   */
  async getSpecificCollaboratorItem(
    request: operations.GetSpecificCollaboratorBatchItemRequest,
    options?: RequestOptions,
  ): Promise<operations.GetSpecificCollaboratorBatchItemResponse> {
    return unwrapAsync(bulkOperationsGetSpecificCollaboratorItem(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a specific item from a bulk invoice batch
   *
   * @remarks
   * Fetches detailed information about a specific item located within a designated bulk invoice batch. Useful for obtaining particular item data without browsing the entire batch.
   */
  async getSpecificInvoice(
    request: operations.GetSpecificInvoiceBatchRequest,
    options?: RequestOptions,
  ): Promise<operations.GetSpecificInvoiceBatchResponse> {
    return unwrapAsync(bulkOperationsGetSpecificInvoice(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve All Bulk Invoice Batches
   *
   * @remarks
   * Fetches a list of all the batches created for bulk invoices, providing an overview of the bulk invoicing operations.
   */
  async list(
    options?: RequestOptions,
  ): Promise<operations.ListInvoiceBatchesResponse> {
    return unwrapAsync(bulkOperationsList(
      this,
      options,
    ));
  }

  /**
   * Retrieve all items from a specific bulk payable batch
   *
   * @remarks
   * Fetches and lists all individual payable items associated with a specified bulk payable batch. Useful for tracking and verifying batch details.
   */
  async listBatchItem(
    request: operations.ListPayableBatchItemsRequest,
    options?: RequestOptions,
  ): Promise<operations.ListPayableBatchItemsResponse> {
    return unwrapAsync(bulkOperationsListBatchItem(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve all bulk client batches
   *
   * @remarks
   * Provides an overview of all existing bulk client batches, allowing users to quickly ascertain and manage batches created for the purpose of client onboarding or import.
   */
  async listClient(
    options?: RequestOptions,
  ): Promise<operations.ListClientBatchesResponse> {
    return unwrapAsync(bulkOperationsListClient(
      this,
      options,
    ));
  }

  /**
   * Retrieve All Items from a Client Batch
   *
   * @remarks
   * Fetches all items present in the specified bulk client batch, providing a comprehensive view of all client data in the batch.
   */
  async listClientItem(
    request: operations.ListClientBatchItemsRequest,
    options?: RequestOptions,
  ): Promise<operations.ListClientBatchItemsResponse> {
    return unwrapAsync(bulkOperationsListClientItem(
      this,
      request,
      options,
    ));
  }

  /**
   * Fetch all bulk collaborator batches
   *
   * @remarks
   * Provides a list of all existing bulk collaborator batches, allowing users to view and manage batches that have been created for collaboration purposes.
   */
  async listCollaborator(
    options?: RequestOptions,
  ): Promise<operations.ListCollaboratorBatchesResponse> {
    return unwrapAsync(bulkOperationsListCollaborator(
      this,
      options,
    ));
  }

  /**
   * Retrieve All Bulk Payable Batches
   *
   * @remarks
   * Fetches a list of all the batches created for bulk payables, providing an overview of the bulk payment operations.
   */
  async listPayable(
    options?: RequestOptions,
  ): Promise<operations.ListPayableBatchesResponse> {
    return unwrapAsync(bulkOperationsListPayable(
      this,
      options,
    ));
  }

  /**
   * Retrieve all items from a specific collaborator batch
   *
   * @remarks
   * Provides a comprehensive list of items present within a specified batch of collaborators, identifiable through its unique batch identifier.
   */
  async listSpecificCollaboratorItem(
    request: operations.ListSpecificCollaboratorBatchItemsRequest,
    options?: RequestOptions,
  ): Promise<operations.ListSpecificCollaboratorBatchItemsResponse> {
    return unwrapAsync(bulkOperationsListSpecificCollaboratorItem(
      this,
      request,
      options,
    ));
  }

  /**
   * Fetch all items from a specific bulk invoice batch
   *
   * @remarks
   * Provides a list of all the items within a specified batch of bulk invoices, identified by its unique batch identifier.
   */
  async listSpecificInvoice(
    request: operations.ListSpecificInvoiceBatchesRequest,
    options?: RequestOptions,
  ): Promise<operations.ListSpecificInvoiceBatchesResponse> {
    return unwrapAsync(bulkOperationsListSpecificInvoice(
      this,
      request,
      options,
    ));
  }

  /**
   * Modify the details of a specific bulk invoice batch
   *
   * @remarks
   * Enables the user to update or modify the attributes of a given batch of bulk invoices by specifying its unique batch identifier.
   */
  async update(
    request: operations.UpdateInvoiceBatchRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdateInvoiceBatchResponse> {
    return unwrapAsync(bulkOperationsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Modify Details of a Specific Item in a Client Batch
   *
   * @remarks
   * Allows modification of the details of a specific item within the bulk client batch, using the provided item and batch identifiers.
   */
  async updateClient(
    request: operations.UpdateClientBatchRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdateClientBatchResponse> {
    return unwrapAsync(bulkOperationsUpdateClient(
      this,
      request,
      options,
    ));
  }

  /**
   * Modify Details of a Specific Item in a Client Batch
   *
   * @remarks
   * Allows modification of the details of a specific item within the bulk client batch, using the provided item and batch identifiers.
   */
  async updateClientItem(
    request: operations.UpdateClientBatchItemRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdateClientBatchItemResponse> {
    return unwrapAsync(bulkOperationsUpdateClientItem(
      this,
      request,
      options,
    ));
  }

  /**
   * Modify Details of a Bulk Collaborator Batch
   *
   * @remarks
   * Allows for updating or altering the details and items within a specific bulk collaborator batch using the given batch ID.
   */
  async updateCollaborator(
    request: operations.UpdateCollaboratorBatchRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdateCollaboratorBatchResponse> {
    return unwrapAsync(bulkOperationsUpdateCollaborator(
      this,
      request,
      options,
    ));
  }

  /**
   * Modify a Specific Bulk Payable Batch
   *
   * @remarks
   * Updates the information or items of a specific bulk payable batch, given its unique batch ID.
   */
  async updatePayable(
    request: operations.UpdatePayableBatchRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdatePayableBatchResponse> {
    return unwrapAsync(bulkOperationsUpdatePayable(
      this,
      request,
      options,
    ));
  }

  /**
   * Modify a Specific Item in a Bulk Payable Batch
   *
   * @remarks
   * Updates the details or status of a specific item within a bulk payable batch, given both the batch ID and the item ID.
   */
  async updateSpecific(
    request: operations.UpdateSpecificPayableBatchItemRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdateSpecificPayableBatchItemResponse> {
    return unwrapAsync(bulkOperationsUpdateSpecific(
      this,
      request,
      options,
    ));
  }

  /**
   * Modify the details of a specific item within a collaborator batch
   *
   * @remarks
   * Provides the functionality to update or alter the attributes of an item present in a given collaborator batch using the unique identifiers for both the batch and the item.
   */
  async updateSpecificCollaboratorItem(
    request: operations.UpdateSpecificCollaboratorBatchItemRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdateSpecificCollaboratorBatchItemResponse> {
    return unwrapAsync(bulkOperationsUpdateSpecificCollaboratorItem(
      this,
      request,
      options,
    ));
  }

  /**
   * Modify a specific item within a bulk invoice batch
   *
   * @remarks
   * Allows for updates or edits to be made to a specific items details within an existing bulk invoice batch. Enhances the flexibility and management of invoice data.
   */
  async updateSpecificInvoice(
    request: operations.UpdateSpecificInvoiceBatchRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdateSpecificInvoiceBatchResponse> {
    return unwrapAsync(bulkOperationsUpdateSpecificInvoice(
      this,
      request,
      options,
    ));
  }
}
