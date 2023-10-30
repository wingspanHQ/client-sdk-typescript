# Payments SDK


## Overview

Wingspan Payments API: Payments

### Available Operations

* [deletePaymentsBankingCardId](#deletepaymentsbankingcardid) - Remove a card using its unique ID
* [deletePaymentsBankingInstantPayout](#deletepaymentsbankinginstantpayout) - Deprecated Remove Instant Payout Configuration
* [deletePaymentsBulkCollaboratorBatchBatchId](#deletepaymentsbulkcollaboratorbatchbatchid) - Remove a Specific Collaborator Batch
* [deletePaymentsBulkPayableBatchBatchId](#deletepaymentsbulkpayablebatchbatchid) - Remove a Specific Bulk Payable Batch
* [deletePaymentsClientDeductionId](#deletepaymentsclientdeductionid) - Remove a Client Deduction
* [deletePaymentsCollaboratorDeductionId](#deletepaymentscollaboratordeductionid) - Erase a Specific Deduction Entry
* [deletePaymentsCollaboratorGroupIdEligibilityRequirementEligibilityRequirementId](#deletepaymentscollaboratorgroupideligibilityrequirementeligibilityrequirementid) - Remove Eligibility Requirement from Collaborator Group
* [~~deletePaymentsCollaboratorSettingsAdditionalDataId~~](#deletepaymentscollaboratorsettingsadditionaldataid) - Erase a Specific Collaborator-Member Custom Data :warning: **Deprecated**
* [deletePaymentsCollaboratorSettingsEligibilityRequirementId](#deletepaymentscollaboratorsettingseligibilityrequirementid) - Remove a Specific Eligibility Requirement
* [deletePaymentsCollaboratorSettingsPaymentEligibilityId](#deletepaymentscollaboratorsettingspaymenteligibilityid) - Remove a specific Payment Eligibility Requirement
* [deletePaymentsCollaboratorId](#deletepaymentscollaboratorid) - Remove a Specific Collaborator Record
* [deletePaymentsCustomFieldsId](#deletepaymentscustomfieldsid) - Remove a Specific Custom Field
* [deletePaymentsInvoiceTemplateId](#deletepaymentsinvoicetemplateid) - Remove a specific invoice template
* [deletePaymentsInvoiceId](#deletepaymentsinvoiceid) - Remove Invoice Record by ID
* [deletePaymentsMemberClientId](#deletepaymentsmemberclientid) - Remove a specific member-client relationship from the system
* [deletePaymentsPayableId](#deletepaymentspayableid) - Delete Client Payable by Payable ID
* [deletePaymentsPayoutSettingsMemberIdDebitCardId](#deletepaymentspayoutsettingsmemberiddebitcardid) - Unlink and delete a specific payout debit card from a member's profile
* [getPayments](#getpayments) - Check Service Status
* [getPaymentsBankingCard](#getpaymentsbankingcard) - List All Stored Wingspan Wallet Cards
* [getPaymentsBankingCardId](#getpaymentsbankingcardid) - Retrieve card details by its unique ID
* [getPaymentsBankingInstantPayout](#getpaymentsbankinginstantpayout) - Deprecated Retrieve Instant Payout Information
* [getPaymentsBankingInstitutionRoutingNumber](#getpaymentsbankinginstitutionroutingnumber) - Retrieve banking institution details by its routing number
* [getPaymentsBankingStatement](#getpaymentsbankingstatement) - Retrieve All Bank Statements
* [getPaymentsBankingStatementId](#getpaymentsbankingstatementid) - Retrieve Specific Bank Statement
* [getPaymentsBankingStatementIdDownload](#getpaymentsbankingstatementiddownload) - Download a specific bank statement as a PDF
* [getPaymentsBulkCalculation1099Batch](#getpaymentsbulkcalculation1099batch) - Retrieve all bulk calculation 1099 batches
* [getPaymentsBulkCalculation1099BatchBatchId](#getpaymentsbulkcalculation1099batchbatchid) - Retrieve specific details of a bulk calculation 1099 batch
* [getPaymentsBulkCalculation1099BatchBatchIdItem](#getpaymentsbulkcalculation1099batchbatchiditem) - Retrieve all items from a calculation 1099 batch
* [getPaymentsBulkCalculation1099BatchBatchIdItemBatchItemId](#getpaymentsbulkcalculation1099batchbatchiditembatchitemid) - Fetch details of a specific item from a calculation 1099 batch
* [getPaymentsBulkClientBatch](#getpaymentsbulkclientbatch) - Retrieve all bulk client batches
* [getPaymentsBulkClientBatchBatchId](#getpaymentsbulkclientbatchbatchid) - Fetch Details of a Specific Item from a Client Batch
* [getPaymentsBulkClientBatchBatchIdItem](#getpaymentsbulkclientbatchbatchiditem) - Retrieve All Items from a Client Batch
* [getPaymentsBulkClientBatchBatchIdItemBatchItemId](#getpaymentsbulkclientbatchbatchiditembatchitemid) - Fetch Details of a Specific Item from a Client Batch
* [getPaymentsBulkCollaboratorBatch](#getpaymentsbulkcollaboratorbatch) - Fetch all bulk collaborator batches
* [getPaymentsBulkCollaboratorBatchBatchId](#getpaymentsbulkcollaboratorbatchbatchid) - Retrieve Details of a Specific Collaborator Batch
* [getPaymentsBulkCollaboratorBatchBatchIdItem](#getpaymentsbulkcollaboratorbatchbatchiditem) - Retrieve all items from a specific collaborator batch
* [getPaymentsBulkCollaboratorBatchBatchIdItemBatchItemId](#getpaymentsbulkcollaboratorbatchbatchiditembatchitemid) - Retrieve details of a specific item from a collaborator batch
* [getPaymentsBulkInvoiceBatch](#getpaymentsbulkinvoicebatch) - Retrieve All Bulk Invoice Batches
* [getPaymentsBulkInvoiceBatchBatchId](#getpaymentsbulkinvoicebatchbatchid) - Retrieve details of a specific bulk invoice batch
* [getPaymentsBulkInvoiceBatchBatchIdItem](#getpaymentsbulkinvoicebatchbatchiditem) - Fetch all items from a specific bulk invoice batch
* [getPaymentsBulkInvoiceBatchBatchIdItemBatchItemId](#getpaymentsbulkinvoicebatchbatchiditembatchitemid) - Retrieve a specific item from a bulk invoice batch
* [getPaymentsBulkPayableBatch](#getpaymentsbulkpayablebatch) - Retrieve All Bulk Payable Batches
* [getPaymentsBulkPayableBatchBatchId](#getpaymentsbulkpayablebatchbatchid) - Retrieve Details of a Specific Bulk Payable Batch
* [getPaymentsBulkPayableBatchBatchIdImportSummary](#getpaymentsbulkpayablebatchbatchidimportsummary) - Fetch the import summary for a specific bulk payable batch
* [getPaymentsBulkPayableBatchBatchIdItem](#getpaymentsbulkpayablebatchbatchiditem) - Retrieve all items from a specific bulk payable batch
* [getPaymentsBulkPayableBatchBatchIdItemBatchItemId](#getpaymentsbulkpayablebatchbatchiditembatchitemid) - Retrieve a Specific Item from a Bulk Payable Batch
* [getPaymentsClientDeduction](#getpaymentsclientdeduction) - Retrieve All Client Deductions
* [getPaymentsClientDeductionId](#getpaymentsclientdeductionid) - Fetch Specific Client Deduction Details
* [getPaymentsClientInvoice](#getpaymentsclientinvoice) - Retrieve All Invoices Generated by a Client
* [getPaymentsClientInvoiceTemplate](#getpaymentsclientinvoicetemplate) - Retrieve all client-generated invoice templates
* [getPaymentsClientInvoiceTemplateId](#getpaymentsclientinvoicetemplateid) - Fetch a specific client-generated invoice template by ID
* [getPaymentsClientInvoiceId](#getpaymentsclientinvoiceid) - Fetch Specific Client-Generated Invoice by ID
* [getPaymentsClientInvoiceInvoiceIdFees](#getpaymentsclientinvoiceinvoiceidfees) - Retrieve Fees Associated with a Client's Invoice
* [getPaymentsCollaborator](#getpaymentscollaborator) - Retrieve All Registered Collaborators
* [getPaymentsCollaboratorDeduction](#getpaymentscollaboratordeduction) - Retrieve All Deductions for Collaborators
* [getPaymentsCollaboratorDeductionId](#getpaymentscollaboratordeductionid) - Retrieve Specific Deduction Details
* [getPaymentsCollaboratorGroup](#getpaymentscollaboratorgroup) - Retrieve All Collaborator Groups
* [getPaymentsCollaboratorGroupId](#getpaymentscollaboratorgroupid) - Retrieve Specific Collaborator Group Configuration
* [~~getPaymentsCollaboratorSettingsAdditionalData~~](#getpaymentscollaboratorsettingsadditionaldata) - Retrieve All Collaborator-Member Custom Data Points :warning: **Deprecated**
* [~~getPaymentsCollaboratorSettingsAdditionalDataId~~](#getpaymentscollaboratorsettingsadditionaldataid) - Retrieve Specific Collaborator Custom Data :warning: **Deprecated**
* [getPaymentsCollaboratorSettingsEligibilityRequirement](#getpaymentscollaboratorsettingseligibilityrequirement) - Retrieve all Eligibility Requirements
* [getPaymentsCollaboratorSettingsEligibilityRequirementId](#getpaymentscollaboratorsettingseligibilityrequirementid) - Retrieve a Specific Eligibility Requirement
* [getPaymentsCollaboratorSettingsPaymentEligibility](#getpaymentscollaboratorsettingspaymenteligibility) - Retrieve All Payment Eligibility Requirements
* [getPaymentsCollaboratorSettingsPaymentEligibilityId](#getpaymentscollaboratorsettingspaymenteligibilityid) - Retrieve details of a specific Payment Eligibility Requirement
* [getPaymentsCollaboratorId](#getpaymentscollaboratorid) - Retrieve Details of a Specific Collaborator
* [getPaymentsCollaboratorIdDownload1099YearIndex](#getpaymentscollaboratoriddownload1099yearindex) - Retrieve Form 1099 PDF for a Collaborator by Year and Index
* [getPaymentsCollaboratorIdDownloadW9](#getpaymentscollaboratoriddownloadw9) - Retrieve Form W9 PDF for a Collaborator
* [getPaymentsCollaboratorIdEvents](#getpaymentscollaboratoridevents) - Retrieve Events Associated with a Collaborator
* [getPaymentsCustomFields](#getpaymentscustomfields) - Retrieve All Custom Fields
* [getPaymentsCustomFieldsId](#getpaymentscustomfieldsid) - Fetch Details of a Specific Custom Field
* [getPaymentsInvoice](#getpaymentsinvoice) - Retrieve All Member Invoices
* [getPaymentsInvoiceTemplate](#getpaymentsinvoicetemplate) - Retrieve all available invoice templates
* [getPaymentsInvoiceTemplateId](#getpaymentsinvoicetemplateid) - Retrieve a specific invoice template by ID
* [getPaymentsInvoiceId](#getpaymentsinvoiceid) - Fetch Invoice by ID
* [getPaymentsMcc](#getpaymentsmcc) - Retrieve Merchant Category Codes (MCC)
* [getPaymentsMemberClient](#getpaymentsmemberclient) - Fetch a list of member and client associations
* [getPaymentsMemberClientId](#getpaymentsmemberclientid) - Retrieve detailed information of a specific member-client relationship
* [getPaymentsPayable](#getpaymentspayable) - List All Payables Associated with a Client
* [getPaymentsPayableId](#getpaymentspayableid) - Retrieve Payable Details by Payable ID
* [getPaymentsPayoutSettingsId](#getpaymentspayoutsettingsid) - Retrieve payout settings for a specific member
* [getPaymentsPayoutSettingsMemberIdDebitCard](#getpaymentspayoutsettingsmemberiddebitcard) - Fetch all registered payout debit cards for a member
* [getPaymentsPayoutSettingsMemberIdDebitCardId](#getpaymentspayoutsettingsmemberiddebitcardid) - Retrieve a specific payout debit card linked to a member
* [getPaymentsPayrollSettingsId](#getpaymentspayrollsettingsid) - Retrieve Individual Payroll Settings
* [getPaymentsPayrollImmediatePayable](#getpaymentspayrollimmediatepayable) - Retrieve Approved Payables Ready for Immediate Payroll
* [getPaymentsReportsAgingLineItems](#getpaymentsreportsaginglineitems) - Obtain Aging Report for Line Items
* [getPaymentsReportsAgingPayables](#getpaymentsreportsagingpayables) - Retrieve Aging Report for Payables
* [getPaymentsReportsCollaborators](#getpaymentsreportscollaborators) - Retrieve detailed information on all collaborators
* [getPaymentsReportsCollaboratorsPayablesSummary](#getpaymentsreportscollaboratorspayablessummary) - Obtain a summarized report of payable amounts for each collaborator
* [getPaymentsReportsPayrollPayrollId](#getpaymentsreportspayrollpayrollid) - Extract detailed report of payables associated with a particular payroll run
* [getPaymentsServiceBankingMemberIdApplication](#getpaymentsservicebankingmemberidapplication) - Fetch the application link for setting up a clearing bank account
* [getPaymentsSummaryPayables](#getpaymentssummarypayables) - Retrieve Summary of All Payables
* [getPaymentsV2Client](#getpaymentsv2client) - Retrieve All Clients (Version 2)
* [getPaymentsV2ClientClientId](#getpaymentsv2clientclientid) - Retrieve Specific Client Details (Version 2)
* [getPaymentsV2Collaborator](#getpaymentsv2collaborator) - Retrieve All Collaborators (Version 2)
* [getPaymentsV2CollaboratorMemberId](#getpaymentsv2collaboratormemberid) - Retrieve Specific Collaborator Details (Version 2)
* [patchPaymentsBankingCardId](#patchpaymentsbankingcardid) - Modify card details by its unique ID
* [patchPaymentsBankingCardIdToken](#patchpaymentsbankingcardidtoken) - Validate verification code to receive a token
* [patchPaymentsBulkCalculation1099BatchBatchId](#patchpaymentsbulkcalculation1099batchbatchid) - Modify the details of a specific bulk calculation 1099 batch
* [patchPaymentsBulkCalculation1099BatchBatchIdItemBatchItemId](#patchpaymentsbulkcalculation1099batchbatchiditembatchitemid) - Revise the attributes of an item in a calculation 1099 batch
* [patchPaymentsBulkClientBatchBatchId](#patchpaymentsbulkclientbatchbatchid) - Modify Details of a Specific Item in a Client Batch
* [patchPaymentsBulkClientBatchBatchIdItemBatchItemId](#patchpaymentsbulkclientbatchbatchiditembatchitemid) - Modify Details of a Specific Item in a Client Batch
* [patchPaymentsBulkCollaboratorBatchBatchId](#patchpaymentsbulkcollaboratorbatchbatchid) - Modify Details of a Bulk Collaborator Batch
* [patchPaymentsBulkCollaboratorBatchBatchIdItemBatchItemId](#patchpaymentsbulkcollaboratorbatchbatchiditembatchitemid) - Modify the details of a specific item within a collaborator batch
* [patchPaymentsBulkInvoiceBatchBatchId](#patchpaymentsbulkinvoicebatchbatchid) - Modify the details of a specific bulk invoice batch
* [patchPaymentsBulkInvoiceBatchBatchIdItemBatchItemId](#patchpaymentsbulkinvoicebatchbatchiditembatchitemid) - Modify a specific item within a bulk invoice batch
* [patchPaymentsBulkPayableBatchBatchId](#patchpaymentsbulkpayablebatchbatchid) - Modify a Specific Bulk Payable Batch
* [patchPaymentsBulkPayableBatchBatchIdItemBatchItemId](#patchpaymentsbulkpayablebatchbatchiditembatchitemid) - Modify a Specific Item in a Bulk Payable Batch
* [patchPaymentsClientDeductionId](#patchpaymentsclientdeductionid) - Modify a Client Deduction
* [patchPaymentsClientInvoiceTemplateId](#patchpaymentsclientinvoicetemplateid) - Modify a client-generated invoice template
* [patchPaymentsClientInvoiceId](#patchpaymentsclientinvoiceid) - Modify an Existing Client-Generated Invoice
* [patchPaymentsCollaboratorDeductionId](#patchpaymentscollaboratordeductionid) - Modify Details of a Specific Deduction
* [patchPaymentsCollaboratorGroupId](#patchpaymentscollaboratorgroupid) - Modify Collaborator Group Configuration
* [patchPaymentsCollaboratorGroupIdEligibilityRequirementEligibilityRequirementId](#patchpaymentscollaboratorgroupideligibilityrequirementeligibilityrequirementid) - Modify Eligibility Requirement for Collaborator Group
* [~~patchPaymentsCollaboratorSettingsAdditionalDataId~~](#patchpaymentscollaboratorsettingsadditionaldataid) - Modify a Specific Collaborator-Member Custom Data :warning: **Deprecated**
* [patchPaymentsCollaboratorSettingsEligibilityRequirementId](#patchpaymentscollaboratorsettingseligibilityrequirementid) - Modify a Specific Eligibility Requirement
* [patchPaymentsCollaboratorSettingsPaymentEligibilityId](#patchpaymentscollaboratorsettingspaymenteligibilityid) - Modify a specific Payment Eligibility Requirement
* [patchPaymentsCollaboratorId](#patchpaymentscollaboratorid) - Modify Collaborator Details
* [patchPaymentsCollaboratorIdAddGroupGroupId](#patchpaymentscollaboratoridaddgroupgroupid) - Associate Collaborator with a Specific Group
* [patchPaymentsCollaboratorIdRemoveGroupGroupId](#patchpaymentscollaboratoridremovegroupgroupid) - Disassociate Collaborator from a Specific Group
* [patchPaymentsCustomFieldsId](#patchpaymentscustomfieldsid) - Modify Details of a Specific Custom Field
* [patchPaymentsInvoiceTemplateId](#patchpaymentsinvoicetemplateid) - Modify details of an existing invoice template
* [patchPaymentsInvoiceId](#patchpaymentsinvoiceid) - Modify Existing Invoice Details
* [patchPaymentsMemberClientId](#patchpaymentsmemberclientid) - Update information of a specific member-client relationship
* [patchPaymentsPayableId](#patchpaymentspayableid) - Update Client Payable Information by Payable ID
* [patchPaymentsPayoutSettingsId](#patchpaymentspayoutsettingsid) - Modify and update payout settings for a specific member
* [patchPaymentsPayrollSettingsId](#patchpaymentspayrollsettingsid) - Modify Existing Payroll Settings
* [postPaymentsBankingCard](#postpaymentsbankingcard) - Register a New  Wingspan Wallet Card
* [postPaymentsBankingCardIdToken](#postpaymentsbankingcardidtoken) - Request a verification code for card authentication
* [postPaymentsBankingInstantPayout](#postpaymentsbankinginstantpayout) - Deprecated Set Up Instant Payout Configuration
* [postPaymentsBulkCalculation1099Batch](#postpaymentsbulkcalculation1099batch) - Initialize a new batch for bulk calculation 1099
* [postPaymentsBulkCalculation1099BatchBatchIdItem](#postpaymentsbulkcalculation1099batchbatchiditem) - Add a new item to a calculation 1099 batch
* [postPaymentsBulkClientBatch](#postpaymentsbulkclientbatch) - Create a new bulk client batch
* [postPaymentsBulkClientBatchBatchIdItem](#postpaymentsbulkclientbatchbatchiditem) - Add a New Item to a Client Batch
* [postPaymentsBulkCollaboratorBatch](#postpaymentsbulkcollaboratorbatch) - Initiate a new bulk collaborator batch.
* [postPaymentsBulkCollaboratorBatchBatchIdItem](#postpaymentsbulkcollaboratorbatchbatchiditem) - Append a new item to a specific collaborator batch
* [postPaymentsBulkInvoiceBatch](#postpaymentsbulkinvoicebatch) - Initiate a New Bulk Invoice Batch
* [postPaymentsBulkInvoiceBatchBatchIdItem](#postpaymentsbulkinvoicebatchbatchiditem) - Add a new item to a specific bulk invoice batch
* [postPaymentsBulkPayableBatch](#postpaymentsbulkpayablebatch) - Initiate a New Bulk Payable Batch
* [postPaymentsBulkPayableBatchBatchIdItem](#postpaymentsbulkpayablebatchbatchiditem) - Add a new item to a specific bulk payable batch
* [postPaymentsClientDeduction](#postpaymentsclientdeduction) - Register a New Client Deduction
* [postPaymentsClientInvoice](#postpaymentsclientinvoice) - Generate a New Invoice on Behalf of the Client
* [postPaymentsClientInvoiceTemplate](#postpaymentsclientinvoicetemplate) - Create a new client-generated invoice template
* [postPaymentsClientInvoiceInvoiceIdPay](#postpaymentsclientinvoiceinvoiceidpay) - Execute Payment for a Client-Generated Invoice
* [postPaymentsCollaborator](#postpaymentscollaborator) - Register a New Collaborator
* [postPaymentsCollaboratorDeduction](#postpaymentscollaboratordeduction) - Register a New Deduction for a Collaborator
* [postPaymentsCollaboratorGroup](#postpaymentscollaboratorgroup) - Generate New Collaborator Group
* [~~postPaymentsCollaboratorSettingsAdditionalData~~](#postpaymentscollaboratorsettingsadditionaldata) - Register New Custom Data for Collaborator-Member Relationship :warning: **Deprecated**
* [postPaymentsCollaboratorSettingsEligibilityRequirement](#postpaymentscollaboratorsettingseligibilityrequirement) - Establish a new Eligibility Requirement
* [postPaymentsCollaboratorSettingsPaymentEligibility](#postpaymentscollaboratorsettingspaymenteligibility) - Add a New Payment Eligibility Requirement
* [postPaymentsCollaborator1099Calculate](#postpaymentscollaborator1099calculate) - Determine 1099 Amounts for Collaborators
* [postPaymentsCollaborator1099MarkUndelivered](#postpaymentscollaborator1099markundelivered) - Indicate a collaborator's 1099 form was returned undelivered
* [postPaymentsCollaborator1099Remail](#postpaymentscollaborator1099remail) - Request a new mailing of the 1099 form for a collaborator
* [postPaymentsCustomFields](#postpaymentscustomfields) - Add a New Custom Field
* [postPaymentsInvoice](#postpaymentsinvoice) - Initiate New Invoice for a Member
* [postPaymentsInvoiceTemplate](#postpaymentsinvoicetemplate) - Create a new invoice template
* [postPaymentsInvoiceTestCreate](#postpaymentsinvoicetestcreate) - Generate Test Invoice for a Client
* [postPaymentsInvoiceInvoiceIdGenerate](#postpaymentsinvoiceinvoiceidgenerate) - Generate a PDF for a specific invoice
* [postPaymentsInvoiceInvoiceIdSend](#postpaymentsinvoiceinvoiceidsend) - Send an invoice by email
* [postPaymentsMemberClient](#postpaymentsmemberclient) - Establish a new association between a member and client
* [postPaymentsPayApproved](#postpaymentspayapproved) - Execute Approved Payroll Transactions
* [postPaymentsPayable](#postpaymentspayable) - Create a New Payable for a Member on Behalf of a Client
* [postPaymentsPayoutSettingsMemberIdDebitCard](#postpaymentspayoutsettingsmemberiddebitcard) - Register a new payout debit card for a member

## deletePaymentsBankingCardId

Deletes a card from the system based on its unique identifier. This action is irreversible.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.deletePaymentsBankingCardId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.DeletePaymentsBankingCardIdRequest](../../models/operations/deletepaymentsbankingcardidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.DeletePaymentsBankingCardIdResponse](../../models/operations/deletepaymentsbankingcardidresponse.md)>**


## deletePaymentsBankingInstantPayout

Delete the existing instant payout configuration, preventing any further instant payouts unless reconfigured.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.deletePaymentsBankingInstantPayout();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeletePaymentsBankingInstantPayoutResponse](../../models/operations/deletepaymentsbankinginstantpayoutresponse.md)>**


## deletePaymentsBulkCollaboratorBatchBatchId

Deletes a specific bulk collaborator batch using its unique identifier. Once deleted, the batch cannot be recovered.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.deletePaymentsBulkCollaboratorBatchBatchId({
    batchId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.DeletePaymentsBulkCollaboratorBatchBatchIdRequest](../../models/operations/deletepaymentsbulkcollaboratorbatchbatchidrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.DeletePaymentsBulkCollaboratorBatchBatchIdResponse](../../models/operations/deletepaymentsbulkcollaboratorbatchbatchidresponse.md)>**


## deletePaymentsBulkPayableBatchBatchId

Deletes a specific batch for bulk payables, using the provided batch ID, preventing any further operations on it.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.deletePaymentsBulkPayableBatchBatchId({
    batchId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.DeletePaymentsBulkPayableBatchBatchIdRequest](../../models/operations/deletepaymentsbulkpayablebatchbatchidrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.DeletePaymentsBulkPayableBatchBatchIdResponse](../../models/operations/deletepaymentsbulkpayablebatchbatchidresponse.md)>**


## deletePaymentsClientDeductionId

Allows for the deletion of a client deduction based on its unique identifier, removing it permanently from the system.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.deletePaymentsClientDeductionId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.DeletePaymentsClientDeductionIdRequest](../../models/operations/deletepaymentsclientdeductionidrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.DeletePaymentsClientDeductionIdResponse](../../models/operations/deletepaymentsclientdeductionidresponse.md)>**


## deletePaymentsCollaboratorDeductionId

Delete a specific deduction entry, eliminating its record from the system.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.deletePaymentsCollaboratorDeductionId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.DeletePaymentsCollaboratorDeductionIdRequest](../../models/operations/deletepaymentscollaboratordeductionidrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.DeletePaymentsCollaboratorDeductionIdResponse](../../models/operations/deletepaymentscollaboratordeductionidresponse.md)>**


## deletePaymentsCollaboratorGroupIdEligibilityRequirementEligibilityRequirementId

Delete a specific eligibility requirement from the designated collaborator group.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.deletePaymentsCollaboratorGroupIdEligibilityRequirementEligibilityRequirementId({
    eligibilityRequirementId: "string",
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                                                              | Type                                                                                                                                                                                                                   | Required                                                                                                                                                                                                               | Description                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                              | [operations.DeletePaymentsCollaboratorGroupIdEligibilityRequirementEligibilityRequirementIdRequest](../../models/operations/deletepaymentscollaboratorgroupideligibilityrequirementeligibilityrequirementidrequest.md) | :heavy_check_mark:                                                                                                                                                                                                     | The request object to use for the request.                                                                                                                                                                             |
| `config`                                                                                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                     | Available config options for making requests.                                                                                                                                                                          |


### Response

**Promise<[operations.DeletePaymentsCollaboratorGroupIdEligibilityRequirementEligibilityRequirementIdResponse](../../models/operations/deletepaymentscollaboratorgroupideligibilityrequirementeligibilityrequirementidresponse.md)>**


## ~~deletePaymentsCollaboratorSettingsAdditionalDataId~~

[Deprecated - use /payments/custom-fields] Remove a specific custom data point, eliminating the additional details provided about a collaborator-member relationship.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.deletePaymentsCollaboratorSettingsAdditionalDataId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                    | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                    | [operations.DeletePaymentsCollaboratorSettingsAdditionalDataIdRequest](../../models/operations/deletepaymentscollaboratorsettingsadditionaldataidrequest.md) | :heavy_check_mark:                                                                                                                                           | The request object to use for the request.                                                                                                                   |
| `config`                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                 | :heavy_minus_sign:                                                                                                                                           | Available config options for making requests.                                                                                                                |


### Response

**Promise<[operations.DeletePaymentsCollaboratorSettingsAdditionalDataIdResponse](../../models/operations/deletepaymentscollaboratorsettingsadditionaldataidresponse.md)>**


## deletePaymentsCollaboratorSettingsEligibilityRequirementId

Delete an eligibility requirement from the system based on its unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.deletePaymentsCollaboratorSettingsEligibilityRequirementId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                    | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                    | [operations.DeletePaymentsCollaboratorSettingsEligibilityRequirementIdRequest](../../models/operations/deletepaymentscollaboratorsettingseligibilityrequirementidrequest.md) | :heavy_check_mark:                                                                                                                                                           | The request object to use for the request.                                                                                                                                   |
| `config`                                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                 | :heavy_minus_sign:                                                                                                                                                           | Available config options for making requests.                                                                                                                                |


### Response

**Promise<[operations.DeletePaymentsCollaboratorSettingsEligibilityRequirementIdResponse](../../models/operations/deletepaymentscollaboratorsettingseligibilityrequirementidresponse.md)>**


## deletePaymentsCollaboratorSettingsPaymentEligibilityId

Delete an existing payment eligibility requirement based on its unique identifier, removing associated criteria for a member's payment eligibility.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.deletePaymentsCollaboratorSettingsPaymentEligibilityId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                            | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                            | [operations.DeletePaymentsCollaboratorSettingsPaymentEligibilityIdRequest](../../models/operations/deletepaymentscollaboratorsettingspaymenteligibilityidrequest.md) | :heavy_check_mark:                                                                                                                                                   | The request object to use for the request.                                                                                                                           |
| `config`                                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                         | :heavy_minus_sign:                                                                                                                                                   | Available config options for making requests.                                                                                                                        |


### Response

**Promise<[operations.DeletePaymentsCollaboratorSettingsPaymentEligibilityIdResponse](../../models/operations/deletepaymentscollaboratorsettingspaymenteligibilityidresponse.md)>**


## deletePaymentsCollaboratorId

Permanently delete the record of a specific collaborator from the system.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.deletePaymentsCollaboratorId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.DeletePaymentsCollaboratorIdRequest](../../models/operations/deletepaymentscollaboratoridrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.DeletePaymentsCollaboratorIdResponse](../../models/operations/deletepaymentscollaboratoridresponse.md)>**


## deletePaymentsCustomFieldsId

Permanently delete a custom field from the system based on its unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.deletePaymentsCustomFieldsId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.DeletePaymentsCustomFieldsIdRequest](../../models/operations/deletepaymentscustomfieldsidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.DeletePaymentsCustomFieldsIdResponse](../../models/operations/deletepaymentscustomfieldsidresponse.md)>**


## deletePaymentsInvoiceTemplateId

Deletes the invoice template associated with the provided unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.deletePaymentsInvoiceTemplateId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.DeletePaymentsInvoiceTemplateIdRequest](../../models/operations/deletepaymentsinvoicetemplateidrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.DeletePaymentsInvoiceTemplateIdResponse](../../models/operations/deletepaymentsinvoicetemplateidresponse.md)>**


## deletePaymentsInvoiceId

Enables the deletion of a specific member's invoice using its unique ID, helping in maintaining accurate billing records.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.deletePaymentsInvoiceId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.DeletePaymentsInvoiceIdRequest](../../models/operations/deletepaymentsinvoiceidrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.DeletePaymentsInvoiceIdResponse](../../models/operations/deletepaymentsinvoiceidresponse.md)>**


## deletePaymentsMemberClientId

Deletes the association between a member and a client using the provided unique identifier. Once deleted, this relationship data can't be recovered.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.deletePaymentsMemberClientId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.DeletePaymentsMemberClientIdRequest](../../models/operations/deletepaymentsmemberclientidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.DeletePaymentsMemberClientIdResponse](../../models/operations/deletepaymentsmemberclientidresponse.md)>**


## deletePaymentsPayableId

This API endpoint is designed to remove the payable information related to a client using a unique Payable ID.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.deletePaymentsPayableId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.DeletePaymentsPayableIdRequest](../../models/operations/deletepaymentspayableidrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.DeletePaymentsPayableIdResponse](../../models/operations/deletepaymentspayableidresponse.md)>**


## deletePaymentsPayoutSettingsMemberIdDebitCardId

Initiates a process to remove and permanently delete a specific debit card from a member's payout settings.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.deletePaymentsPayoutSettingsMemberIdDebitCardId({
    id: "<ID>",
    memberId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                              | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                              | [operations.DeletePaymentsPayoutSettingsMemberIdDebitCardIdRequest](../../models/operations/deletepaymentspayoutsettingsmemberiddebitcardidrequest.md) | :heavy_check_mark:                                                                                                                                     | The request object to use for the request.                                                                                                             |
| `config`                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                           | :heavy_minus_sign:                                                                                                                                     | Available config options for making requests.                                                                                                          |


### Response

**Promise<[operations.DeletePaymentsPayoutSettingsMemberIdDebitCardIdResponse](../../models/operations/deletepaymentspayoutsettingsmemberiddebitcardidresponse.md)>**


## getPayments

Use this endpoint to determine the operational status of the payment service by obtaining the current timestamp and service name.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPayments();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentsResponse](../../models/operations/getpaymentsresponse.md)>**


## getPaymentsBankingCard

Retrieve a comprehensive list of all stored  Wingspan Wallet cards within the system. This includes both active and deactivated cards.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsBankingCard();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentsBankingCardResponse](../../models/operations/getpaymentsbankingcardresponse.md)>**


## getPaymentsBankingCardId

Fetches detailed information about a card associated with the given unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsBankingCardId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetPaymentsBankingCardIdRequest](../../models/operations/getpaymentsbankingcardidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetPaymentsBankingCardIdResponse](../../models/operations/getpaymentsbankingcardidresponse.md)>**


## getPaymentsBankingInstantPayout

Fetch detailed information about the current status and details of instant payouts configured in the system.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsBankingInstantPayout();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentsBankingInstantPayoutResponse](../../models/operations/getpaymentsbankinginstantpayoutresponse.md)>**


## getPaymentsBankingInstitutionRoutingNumber

Fetches comprehensive information about a banking institution based on the provided routing number.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsBankingInstitutionRoutingNumber({
    routingNumber: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.GetPaymentsBankingInstitutionRoutingNumberRequest](../../models/operations/getpaymentsbankinginstitutionroutingnumberrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.GetPaymentsBankingInstitutionRoutingNumberResponse](../../models/operations/getpaymentsbankinginstitutionroutingnumberresponse.md)>**


## getPaymentsBankingStatement

Fetch a comprehensive list of all bank statements available in the system, providing an overview of financial transactions.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsBankingStatement();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentsBankingStatementResponse](../../models/operations/getpaymentsbankingstatementresponse.md)>**


## getPaymentsBankingStatementId

Fetch details of a specific bank statement using its unique identifier, providing a detailed view of its transactions.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsBankingStatementId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.GetPaymentsBankingStatementIdRequest](../../models/operations/getpaymentsbankingstatementidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.GetPaymentsBankingStatementIdResponse](../../models/operations/getpaymentsbankingstatementidresponse.md)>**


## getPaymentsBankingStatementIdDownload

Retrieve and download the specified bank statement in PDF format using the provided unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsBankingStatementIdDownload({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.GetPaymentsBankingStatementIdDownloadRequest](../../models/operations/getpaymentsbankingstatementiddownloadrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.GetPaymentsBankingStatementIdDownloadResponse](../../models/operations/getpaymentsbankingstatementiddownloadresponse.md)>**


## getPaymentsBulkCalculation1099Batch

Fetches a comprehensive list of all batches created for bulk 1099 calculations.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsBulkCalculation1099Batch();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentsBulkCalculation1099BatchResponse](../../models/operations/getpaymentsbulkcalculation1099batchresponse.md)>**


## getPaymentsBulkCalculation1099BatchBatchId

Fetches detailed information about a specific batch meant for bulk 1099 calculations using its unique batch identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsBulkCalculation1099BatchBatchId({
    batchId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.GetPaymentsBulkCalculation1099BatchBatchIdRequest](../../models/operations/getpaymentsbulkcalculation1099batchbatchidrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.GetPaymentsBulkCalculation1099BatchBatchIdResponse](../../models/operations/getpaymentsbulkcalculation1099batchbatchidresponse.md)>**


## getPaymentsBulkCalculation1099BatchBatchIdItem

Access a comprehensive list of items contained within a specified calculation 1099 batch, useful for verifying or inspecting batch contents.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsBulkCalculation1099BatchBatchIdItem({
    batchId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                            | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                            | [operations.GetPaymentsBulkCalculation1099BatchBatchIdItemRequest](../../models/operations/getpaymentsbulkcalculation1099batchbatchiditemrequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.GetPaymentsBulkCalculation1099BatchBatchIdItemResponse](../../models/operations/getpaymentsbulkcalculation1099batchbatchiditemresponse.md)>**


## getPaymentsBulkCalculation1099BatchBatchIdItemBatchItemId

Gain insights into a particular item's attributes and data stored within a calculation 1099 batch, enhancing data management and verification.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsBulkCalculation1099BatchBatchIdItemBatchItemId({
    batchId: "string",
    batchItemId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                  | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                  | [operations.GetPaymentsBulkCalculation1099BatchBatchIdItemBatchItemIdRequest](../../models/operations/getpaymentsbulkcalculation1099batchbatchiditembatchitemidrequest.md) | :heavy_check_mark:                                                                                                                                                         | The request object to use for the request.                                                                                                                                 |
| `config`                                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                               | :heavy_minus_sign:                                                                                                                                                         | Available config options for making requests.                                                                                                                              |


### Response

**Promise<[operations.GetPaymentsBulkCalculation1099BatchBatchIdItemBatchItemIdResponse](../../models/operations/getpaymentsbulkcalculation1099batchbatchiditembatchitemidresponse.md)>**


## getPaymentsBulkClientBatch

Provides an overview of all existing bulk client batches, allowing users to quickly ascertain and manage batches created for the purpose of client onboarding or import.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsBulkClientBatch();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentsBulkClientBatchResponse](../../models/operations/getpaymentsbulkclientbatchresponse.md)>**


## getPaymentsBulkClientBatchBatchId

Retrieves the detailed information of a specific item within the bulk client batch using both batch and item unique identifiers.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsBulkClientBatchBatchId({
    batchId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.GetPaymentsBulkClientBatchBatchIdRequest](../../models/operations/getpaymentsbulkclientbatchbatchidrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetPaymentsBulkClientBatchBatchIdResponse](../../models/operations/getpaymentsbulkclientbatchbatchidresponse.md)>**


## getPaymentsBulkClientBatchBatchIdItem

Fetches all items present in the specified bulk client batch, providing a comprehensive view of all client data in the batch.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsBulkClientBatchBatchIdItem({
    batchId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.GetPaymentsBulkClientBatchBatchIdItemRequest](../../models/operations/getpaymentsbulkclientbatchbatchiditemrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.GetPaymentsBulkClientBatchBatchIdItemResponse](../../models/operations/getpaymentsbulkclientbatchbatchiditemresponse.md)>**


## getPaymentsBulkClientBatchBatchIdItemBatchItemId

Retrieves the detailed information of a specific item within the bulk client batch using both batch and item unique identifiers.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsBulkClientBatchBatchIdItemBatchItemId({
    batchId: "string",
    batchItemId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                | [operations.GetPaymentsBulkClientBatchBatchIdItemBatchItemIdRequest](../../models/operations/getpaymentsbulkclientbatchbatchiditembatchitemidrequest.md) | :heavy_check_mark:                                                                                                                                       | The request object to use for the request.                                                                                                               |
| `config`                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                             | :heavy_minus_sign:                                                                                                                                       | Available config options for making requests.                                                                                                            |


### Response

**Promise<[operations.GetPaymentsBulkClientBatchBatchIdItemBatchItemIdResponse](../../models/operations/getpaymentsbulkclientbatchbatchiditembatchitemidresponse.md)>**


## getPaymentsBulkCollaboratorBatch

Provides a list of all existing bulk collaborator batches, allowing users to view and manage batches that have been created for collaboration purposes.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsBulkCollaboratorBatch();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentsBulkCollaboratorBatchResponse](../../models/operations/getpaymentsbulkcollaboratorbatchresponse.md)>**


## getPaymentsBulkCollaboratorBatchBatchId

Fetches detailed information of a specific bulk collaborator batch, using the provided batch ID.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsBulkCollaboratorBatchBatchId({
    batchId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.GetPaymentsBulkCollaboratorBatchBatchIdRequest](../../models/operations/getpaymentsbulkcollaboratorbatchbatchidrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.GetPaymentsBulkCollaboratorBatchBatchIdResponse](../../models/operations/getpaymentsbulkcollaboratorbatchbatchidresponse.md)>**


## getPaymentsBulkCollaboratorBatchBatchIdItem

Provides a comprehensive list of items present within a specified batch of collaborators, identifiable through its unique batch identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsBulkCollaboratorBatchBatchIdItem({
    batchId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.GetPaymentsBulkCollaboratorBatchBatchIdItemRequest](../../models/operations/getpaymentsbulkcollaboratorbatchbatchiditemrequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.GetPaymentsBulkCollaboratorBatchBatchIdItemResponse](../../models/operations/getpaymentsbulkcollaboratorbatchbatchiditemresponse.md)>**


## getPaymentsBulkCollaboratorBatchBatchIdItemBatchItemId

Enables fetching of detailed information about an individual item from a specified batch of collaborators using both the batch and item unique identifiers.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsBulkCollaboratorBatchBatchIdItemBatchItemId({
    batchId: "string",
    batchItemId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                            | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                            | [operations.GetPaymentsBulkCollaboratorBatchBatchIdItemBatchItemIdRequest](../../models/operations/getpaymentsbulkcollaboratorbatchbatchiditembatchitemidrequest.md) | :heavy_check_mark:                                                                                                                                                   | The request object to use for the request.                                                                                                                           |
| `config`                                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                         | :heavy_minus_sign:                                                                                                                                                   | Available config options for making requests.                                                                                                                        |


### Response

**Promise<[operations.GetPaymentsBulkCollaboratorBatchBatchIdItemBatchItemIdResponse](../../models/operations/getpaymentsbulkcollaboratorbatchbatchiditembatchitemidresponse.md)>**


## getPaymentsBulkInvoiceBatch

Fetches a list of all the batches created for bulk invoices, providing an overview of the bulk invoicing operations.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsBulkInvoiceBatch();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentsBulkInvoiceBatchResponse](../../models/operations/getpaymentsbulkinvoicebatchresponse.md)>**


## getPaymentsBulkInvoiceBatchBatchId

Allows for the retrieval of a specified batch of bulk invoices by providing its unique batch identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsBulkInvoiceBatchBatchId({
    batchId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.GetPaymentsBulkInvoiceBatchBatchIdRequest](../../models/operations/getpaymentsbulkinvoicebatchbatchidrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.GetPaymentsBulkInvoiceBatchBatchIdResponse](../../models/operations/getpaymentsbulkinvoicebatchbatchidresponse.md)>**


## getPaymentsBulkInvoiceBatchBatchIdItem

Provides a list of all the items within a specified batch of bulk invoices, identified by its unique batch identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsBulkInvoiceBatchBatchIdItem({
    batchId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.GetPaymentsBulkInvoiceBatchBatchIdItemRequest](../../models/operations/getpaymentsbulkinvoicebatchbatchiditemrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.GetPaymentsBulkInvoiceBatchBatchIdItemResponse](../../models/operations/getpaymentsbulkinvoicebatchbatchiditemresponse.md)>**


## getPaymentsBulkInvoiceBatchBatchIdItemBatchItemId

Fetches detailed information about a specific item located within a designated bulk invoice batch. Useful for obtaining particular item data without browsing the entire batch.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsBulkInvoiceBatchBatchIdItemBatchItemId({
    batchId: "string",
    batchItemId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                  | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                  | [operations.GetPaymentsBulkInvoiceBatchBatchIdItemBatchItemIdRequest](../../models/operations/getpaymentsbulkinvoicebatchbatchiditembatchitemidrequest.md) | :heavy_check_mark:                                                                                                                                         | The request object to use for the request.                                                                                                                 |
| `config`                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                               | :heavy_minus_sign:                                                                                                                                         | Available config options for making requests.                                                                                                              |


### Response

**Promise<[operations.GetPaymentsBulkInvoiceBatchBatchIdItemBatchItemIdResponse](../../models/operations/getpaymentsbulkinvoicebatchbatchiditembatchitemidresponse.md)>**


## getPaymentsBulkPayableBatch

Fetches a list of all the batches created for bulk payables, providing an overview of the bulk payment operations.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsBulkPayableBatch();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentsBulkPayableBatchResponse](../../models/operations/getpaymentsbulkpayablebatchresponse.md)>**


## getPaymentsBulkPayableBatchBatchId

Fetches detailed information of a specific batch created for bulk payables, using the provided batch ID.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsBulkPayableBatchBatchId({
    batchId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.GetPaymentsBulkPayableBatchBatchIdRequest](../../models/operations/getpaymentsbulkpayablebatchbatchidrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.GetPaymentsBulkPayableBatchBatchIdResponse](../../models/operations/getpaymentsbulkpayablebatchbatchidresponse.md)>**


## getPaymentsBulkPayableBatchBatchIdImportSummary

Provides an overview and summary of the import process for a given bulk payable batch, allowing for tracking of imported items, errors, and other relevant batch statistics.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsBulkPayableBatchBatchIdImportSummary({
    batchId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                              | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                              | [operations.GetPaymentsBulkPayableBatchBatchIdImportSummaryRequest](../../models/operations/getpaymentsbulkpayablebatchbatchidimportsummaryrequest.md) | :heavy_check_mark:                                                                                                                                     | The request object to use for the request.                                                                                                             |
| `config`                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                           | :heavy_minus_sign:                                                                                                                                     | Available config options for making requests.                                                                                                          |


### Response

**Promise<[operations.GetPaymentsBulkPayableBatchBatchIdImportSummaryResponse](../../models/operations/getpaymentsbulkpayablebatchbatchidimportsummaryresponse.md)>**


## getPaymentsBulkPayableBatchBatchIdItem

Fetches and lists all individual payable items associated with a specified bulk payable batch. Useful for tracking and verifying batch details.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsBulkPayableBatchBatchIdItem({
    batchId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.GetPaymentsBulkPayableBatchBatchIdItemRequest](../../models/operations/getpaymentsbulkpayablebatchbatchiditemrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.GetPaymentsBulkPayableBatchBatchIdItemResponse](../../models/operations/getpaymentsbulkpayablebatchbatchiditemresponse.md)>**


## getPaymentsBulkPayableBatchBatchIdItemBatchItemId

Fetches detailed information of a specific item within a bulk payable batch, using both the batch ID and the item ID.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsBulkPayableBatchBatchIdItemBatchItemId({
    batchId: "string",
    batchItemId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                  | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                  | [operations.GetPaymentsBulkPayableBatchBatchIdItemBatchItemIdRequest](../../models/operations/getpaymentsbulkpayablebatchbatchiditembatchitemidrequest.md) | :heavy_check_mark:                                                                                                                                         | The request object to use for the request.                                                                                                                 |
| `config`                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                               | :heavy_minus_sign:                                                                                                                                         | Available config options for making requests.                                                                                                              |


### Response

**Promise<[operations.GetPaymentsBulkPayableBatchBatchIdItemBatchItemIdResponse](../../models/operations/getpaymentsbulkpayablebatchbatchiditembatchitemidresponse.md)>**


## getPaymentsClientDeduction

Fetches a comprehensive list of all client deductions present in the system.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsClientDeduction();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentsClientDeductionResponse](../../models/operations/getpaymentsclientdeductionresponse.md)>**


## getPaymentsClientDeductionId

Provides detailed information for a client deduction based on its unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsClientDeductionId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.GetPaymentsClientDeductionIdRequest](../../models/operations/getpaymentsclientdeductionidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.GetPaymentsClientDeductionIdResponse](../../models/operations/getpaymentsclientdeductionidresponse.md)>**


## getPaymentsClientInvoice

Fetch a comprehensive list of invoices that have been generated by a client, offering an overview of all client-related billing records.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsClientInvoice();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentsClientInvoiceResponse](../../models/operations/getpaymentsclientinvoiceresponse.md)>**


## getPaymentsClientInvoiceTemplate

Fetches a comprehensive list of all invoice templates created by clients in the system.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsClientInvoiceTemplate();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentsClientInvoiceTemplateResponse](../../models/operations/getpaymentsclientinvoicetemplateresponse.md)>**


## getPaymentsClientInvoiceTemplateId

Provides details of the client-generated invoice template associated with the provided unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsClientInvoiceTemplateId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.GetPaymentsClientInvoiceTemplateIdRequest](../../models/operations/getpaymentsclientinvoicetemplateidrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.GetPaymentsClientInvoiceTemplateIdResponse](../../models/operations/getpaymentsclientinvoicetemplateidresponse.md)>**


## getPaymentsClientInvoiceId

Retrieve detailed information of an individual invoice created by a client using its unique ID for in-depth billing analysis.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsClientInvoiceId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.GetPaymentsClientInvoiceIdRequest](../../models/operations/getpaymentsclientinvoiceidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.GetPaymentsClientInvoiceIdResponse](../../models/operations/getpaymentsclientinvoiceidresponse.md)>**


## getPaymentsClientInvoiceInvoiceIdFees

Obtain a detailed breakdown of all the fees associated with a specific client's invoice, identified by its unique ID.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsClientInvoiceInvoiceIdFees({
    invoiceId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.GetPaymentsClientInvoiceInvoiceIdFeesRequest](../../models/operations/getpaymentsclientinvoiceinvoiceidfeesrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.GetPaymentsClientInvoiceInvoiceIdFeesResponse](../../models/operations/getpaymentsclientinvoiceinvoiceidfeesresponse.md)>**


## getPaymentsCollaborator

Fetch a comprehensive list of all collaborators currently registered in the system.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsCollaborator();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentsCollaboratorResponse](../../models/operations/getpaymentscollaboratorresponse.md)>**


## getPaymentsCollaboratorDeduction

Fetch a list of all deduction entries currently registered for collaborators.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsCollaboratorDeduction();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentsCollaboratorDeductionResponse](../../models/operations/getpaymentscollaboratordeductionresponse.md)>**


## getPaymentsCollaboratorDeductionId

Fetch details of a specific deduction entry for a collaborator based on its unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsCollaboratorDeductionId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.GetPaymentsCollaboratorDeductionIdRequest](../../models/operations/getpaymentscollaboratordeductionidrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.GetPaymentsCollaboratorDeductionIdResponse](../../models/operations/getpaymentscollaboratordeductionidresponse.md)>**


## getPaymentsCollaboratorGroup

Fetch a comprehensive list of all collaborator groups created by the client, showcasing configurations and member details.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsCollaboratorGroup();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentsCollaboratorGroupResponse](../../models/operations/getpaymentscollaboratorgroupresponse.md)>**


## getPaymentsCollaboratorGroupId

Fetch detailed configuration and attributes associated with a specific collaborator group.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsCollaboratorGroupId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.GetPaymentsCollaboratorGroupIdRequest](../../models/operations/getpaymentscollaboratorgroupidrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.GetPaymentsCollaboratorGroupIdResponse](../../models/operations/getpaymentscollaboratorgroupidresponse.md)>**


## ~~getPaymentsCollaboratorSettingsAdditionalData~~

[Deprecated - use /payments/custom-fields] Fetch all custom data fields that are associated with the memberClient objects, giving insight into additional details between collaborators and members.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsCollaboratorSettingsAdditionalData();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentsCollaboratorSettingsAdditionalDataResponse](../../models/operations/getpaymentscollaboratorsettingsadditionaldataresponse.md)>**


## ~~getPaymentsCollaboratorSettingsAdditionalDataId~~

Deprecated - use /payments/custom-fields/:id

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsCollaboratorSettingsAdditionalDataId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                              | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                              | [operations.GetPaymentsCollaboratorSettingsAdditionalDataIdRequest](../../models/operations/getpaymentscollaboratorsettingsadditionaldataidrequest.md) | :heavy_check_mark:                                                                                                                                     | The request object to use for the request.                                                                                                             |
| `config`                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                           | :heavy_minus_sign:                                                                                                                                     | Available config options for making requests.                                                                                                          |


### Response

**Promise<[operations.GetPaymentsCollaboratorSettingsAdditionalDataIdResponse](../../models/operations/getpaymentscollaboratorsettingsadditionaldataidresponse.md)>**


## getPaymentsCollaboratorSettingsEligibilityRequirement

List and display all the set eligibility requirements for collaborators.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsCollaboratorSettingsEligibilityRequirement();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentsCollaboratorSettingsEligibilityRequirementResponse](../../models/operations/getpaymentscollaboratorsettingseligibilityrequirementresponse.md)>**


## getPaymentsCollaboratorSettingsEligibilityRequirementId

Fetch details for a given eligibility requirement based on its unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsCollaboratorSettingsEligibilityRequirementId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                              | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                              | [operations.GetPaymentsCollaboratorSettingsEligibilityRequirementIdRequest](../../models/operations/getpaymentscollaboratorsettingseligibilityrequirementidrequest.md) | :heavy_check_mark:                                                                                                                                                     | The request object to use for the request.                                                                                                                             |
| `config`                                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                           | :heavy_minus_sign:                                                                                                                                                     | Available config options for making requests.                                                                                                                          |


### Response

**Promise<[operations.GetPaymentsCollaboratorSettingsEligibilityRequirementIdResponse](../../models/operations/getpaymentscollaboratorsettingseligibilityrequirementidresponse.md)>**


## getPaymentsCollaboratorSettingsPaymentEligibility

Obtain a list of all payment eligibility requirements configured for collaborators.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsCollaboratorSettingsPaymentEligibility();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentsCollaboratorSettingsPaymentEligibilityResponse](../../models/operations/getpaymentscollaboratorsettingspaymenteligibilityresponse.md)>**


## getPaymentsCollaboratorSettingsPaymentEligibilityId

Fetch detailed information about a particular payment eligibility requirement using its unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsCollaboratorSettingsPaymentEligibilityId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                      | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                      | [operations.GetPaymentsCollaboratorSettingsPaymentEligibilityIdRequest](../../models/operations/getpaymentscollaboratorsettingspaymenteligibilityidrequest.md) | :heavy_check_mark:                                                                                                                                             | The request object to use for the request.                                                                                                                     |
| `config`                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                   | :heavy_minus_sign:                                                                                                                                             | Available config options for making requests.                                                                                                                  |


### Response

**Promise<[operations.GetPaymentsCollaboratorSettingsPaymentEligibilityIdResponse](../../models/operations/getpaymentscollaboratorsettingspaymenteligibilityidresponse.md)>**


## getPaymentsCollaboratorId

Fetch detailed information about a specific collaborator using its unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsCollaboratorId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetPaymentsCollaboratorIdRequest](../../models/operations/getpaymentscollaboratoridrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetPaymentsCollaboratorIdResponse](../../models/operations/getpaymentscollaboratoridresponse.md)>**


## getPaymentsCollaboratorIdDownload1099YearIndex

Facilitates downloading of the specified 1099 form for a given collaborator, corresponding to the provided year and index.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsCollaboratorIdDownload1099YearIndex({
    id: "<ID>",
    index: "string",
    year: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                            | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                            | [operations.GetPaymentsCollaboratorIdDownload1099YearIndexRequest](../../models/operations/getpaymentscollaboratoriddownload1099yearindexrequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.GetPaymentsCollaboratorIdDownload1099YearIndexResponse](../../models/operations/getpaymentscollaboratoriddownload1099yearindexresponse.md)>**


## getPaymentsCollaboratorIdDownloadW9

Enables the downloading of the W9 form for the specified collaborator, ensuring compliance and streamlined financial procedures.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsCollaboratorIdDownloadW9({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.GetPaymentsCollaboratorIdDownloadW9Request](../../models/operations/getpaymentscollaboratoriddownloadw9request.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.GetPaymentsCollaboratorIdDownloadW9Response](../../models/operations/getpaymentscollaboratoriddownloadw9response.md)>**


## getPaymentsCollaboratorIdEvents

Fetch a list of all events linked to a collaborator based on the provided collaborator ID.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsCollaboratorIdEvents({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.GetPaymentsCollaboratorIdEventsRequest](../../models/operations/getpaymentscollaboratorideventsrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.GetPaymentsCollaboratorIdEventsResponse](../../models/operations/getpaymentscollaboratorideventsresponse.md)>**


## getPaymentsCustomFields

Obtain a list of all user-defined custom fields associated with payments.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsCustomFields();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentsCustomFieldsResponse](../../models/operations/getpaymentscustomfieldsresponse.md)>**


## getPaymentsCustomFieldsId

Retrieve detailed information for a custom field based on its unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsCustomFieldsId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetPaymentsCustomFieldsIdRequest](../../models/operations/getpaymentscustomfieldsidrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetPaymentsCustomFieldsIdResponse](../../models/operations/getpaymentscustomfieldsidresponse.md)>**


## getPaymentsInvoice

Fetch a complete list of invoices associated with members, providing a comprehensive overview of all member-related billing details.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsInvoice();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentsInvoiceResponse](../../models/operations/getpaymentsinvoiceresponse.md)>**


## getPaymentsInvoiceTemplate

Fetches a comprehensive list of all invoice templates in the system.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsInvoiceTemplate();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentsInvoiceTemplateResponse](../../models/operations/getpaymentsinvoicetemplateresponse.md)>**


## getPaymentsInvoiceTemplateId

Fetches details of the invoice template corresponding to the provided unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsInvoiceTemplateId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.GetPaymentsInvoiceTemplateIdRequest](../../models/operations/getpaymentsinvoicetemplateidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.GetPaymentsInvoiceTemplateIdResponse](../../models/operations/getpaymentsinvoicetemplateidresponse.md)>**


## getPaymentsInvoiceId

Retrieve the specifics of an individual invoice associated with a member using its unique ID. Ideal for diving into invoice details.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsInvoiceId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetPaymentsInvoiceIdRequest](../../models/operations/getpaymentsinvoiceidrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetPaymentsInvoiceIdResponse](../../models/operations/getpaymentsinvoiceidresponse.md)>**


## getPaymentsMcc

This endpoint provides a comprehensive list of available Merchant Category Codes (MCC) which are used to classify businesses by the type of services or goods they provide.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsMcc();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentsMccResponse](../../models/operations/getpaymentsmccresponse.md)>**


## getPaymentsMemberClient

Retrieve a detailed list showcasing all the existing associations between members and clients in the system.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsMemberClient();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentsMemberClientResponse](../../models/operations/getpaymentsmemberclientresponse.md)>**


## getPaymentsMemberClientId

Fetches comprehensive details of the association between a member and a client using the provided unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsMemberClientId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetPaymentsMemberClientIdRequest](../../models/operations/getpaymentsmemberclientidrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetPaymentsMemberClientIdResponse](../../models/operations/getpaymentsmemberclientidresponse.md)>**


## getPaymentsPayable

Provides an list of all Payables associated with a specific client, facilitating easier management and overview of the client's financial obligations.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsPayable();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentsPayableResponse](../../models/operations/getpaymentspayableresponse.md)>**


## getPaymentsPayableId

This API endpoint is designed to fetch the detailed Payable information of a member using a unique Payable ID.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsPayableId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetPaymentsPayableIdRequest](../../models/operations/getpaymentspayableidrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetPaymentsPayableIdResponse](../../models/operations/getpaymentspayableidresponse.md)>**


## getPaymentsPayoutSettingsId

Fetches the payout configuration, including linked debit cards and payout preferences, for a specific member.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsPayoutSettingsId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetPaymentsPayoutSettingsIdRequest](../../models/operations/getpaymentspayoutsettingsidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetPaymentsPayoutSettingsIdResponse](../../models/operations/getpaymentspayoutsettingsidresponse.md)>**


## getPaymentsPayoutSettingsMemberIdDebitCard

Retrieves a list of all debit cards linked to a member's profile for payout purposes.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsPayoutSettingsMemberIdDebitCard({
    memberId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.GetPaymentsPayoutSettingsMemberIdDebitCardRequest](../../models/operations/getpaymentspayoutsettingsmemberiddebitcardrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.GetPaymentsPayoutSettingsMemberIdDebitCardResponse](../../models/operations/getpaymentspayoutsettingsmemberiddebitcardresponse.md)>**


## getPaymentsPayoutSettingsMemberIdDebitCardId

Fetches detailed information of a specific debit card linked to a member's profile for payout purposes.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsPayoutSettingsMemberIdDebitCardId({
    id: "<ID>",
    memberId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.GetPaymentsPayoutSettingsMemberIdDebitCardIdRequest](../../models/operations/getpaymentspayoutsettingsmemberiddebitcardidrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.GetPaymentsPayoutSettingsMemberIdDebitCardIdResponse](../../models/operations/getpaymentspayoutsettingsmemberiddebitcardidresponse.md)>**


## getPaymentsPayrollSettingsId

Fetch the detailed payroll settings associated with the provided unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsPayrollSettingsId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.GetPaymentsPayrollSettingsIdRequest](../../models/operations/getpaymentspayrollsettingsidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.GetPaymentsPayrollSettingsIdResponse](../../models/operations/getpaymentspayrollsettingsidresponse.md)>**


## getPaymentsPayrollImmediatePayable

Fetches all payables that have been approved and are awaiting immediate payroll processing. This provides a quick view of all payments that are due for immediate payroll execution.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsPayrollImmediatePayable();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentsPayrollImmediatePayableResponse](../../models/operations/getpaymentspayrollimmediatepayableresponse.md)>**


## getPaymentsReportsAgingLineItems

Retrieve a comprehensive report detailing line items that have been open for a set number of days.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsReportsAgingLineItems();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentsReportsAgingLineItemsResponse](../../models/operations/getpaymentsreportsaginglineitemsresponse.md)>**


## getPaymentsReportsAgingPayables

Access a detailed report that showcases the list of payables categorized by age.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsReportsAgingPayables();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentsReportsAgingPayablesResponse](../../models/operations/getpaymentsreportsagingpayablesresponse.md)>**


## getPaymentsReportsCollaborators

Fetches comprehensive data on all collaborators, including their activities and current status, as listed in the reports.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsReportsCollaborators();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentsReportsCollaboratorsResponse](../../models/operations/getpaymentsreportscollaboratorsresponse.md)>**


## getPaymentsReportsCollaboratorsPayablesSummary

Gathers and presents a concise summary showcasing the payable amounts due to each collaborator, helping in financial planning and payout strategies.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsReportsCollaboratorsPayablesSummary();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentsReportsCollaboratorsPayablesSummaryResponse](../../models/operations/getpaymentsreportscollaboratorspayablessummaryresponse.md)>**


## getPaymentsReportsPayrollPayrollId

Offers a deep dive into the payables connected to a specific payroll run, facilitating better management and reconciliation of payroll-related finances.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsReportsPayrollPayrollId({
    payrollId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.GetPaymentsReportsPayrollPayrollIdRequest](../../models/operations/getpaymentsreportspayrollpayrollidrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.GetPaymentsReportsPayrollPayrollIdResponse](../../models/operations/getpaymentsreportspayrollpayrollidresponse.md)>**


## getPaymentsServiceBankingMemberIdApplication

Get the application link required for a member to initiate the creation of a clearing bank account.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsServiceBankingMemberIdApplication({
    memberId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.GetPaymentsServiceBankingMemberIdApplicationRequest](../../models/operations/getpaymentsservicebankingmemberidapplicationrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.GetPaymentsServiceBankingMemberIdApplicationResponse](../../models/operations/getpaymentsservicebankingmemberidapplicationresponse.md)>**


## getPaymentsSummaryPayables

This endpoint provides a comprehensive summary of all the payables, offering insights into the current state of pending and completed payments. Ideal for clients and financial departments looking for a snapshot view of their payment obligations.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsSummaryPayables();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentsSummaryPayablesResponse](../../models/operations/getpaymentssummarypayablesresponse.md)>**


## getPaymentsV2Client

Fetches a comprehensive list of clients formatted in the V2 standard, providing an overview of all client data.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsV2Client();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentsV2ClientResponse](../../models/operations/getpaymentsv2clientresponse.md)>**


## getPaymentsV2ClientClientId

Fetches detailed information of a specific client, identified by the clientId, in the V2 format.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsV2ClientClientId({
    clientId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetPaymentsV2ClientClientIdRequest](../../models/operations/getpaymentsv2clientclientidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetPaymentsV2ClientClientIdResponse](../../models/operations/getpaymentsv2clientclientidresponse.md)>**


## getPaymentsV2Collaborator

Fetches a comprehensive list of collaborators formatted in the V2 standard, providing an overview of all collaborator data.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsV2Collaborator();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentsV2CollaboratorResponse](../../models/operations/getpaymentsv2collaboratorresponse.md)>**


## getPaymentsV2CollaboratorMemberId

Fetches detailed information of a specific collaborator, identified by the memberId, in the V2 format.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.getPaymentsV2CollaboratorMemberId({
    memberId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.GetPaymentsV2CollaboratorMemberIdRequest](../../models/operations/getpaymentsv2collaboratormemberidrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetPaymentsV2CollaboratorMemberIdResponse](../../models/operations/getpaymentsv2collaboratormemberidresponse.md)>**


## patchPaymentsBankingCardId

Updates specific information about a card using the provided data.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { CardUpdateRequestStatus } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.patchPaymentsBankingCardId({
    cardUpdateRequest: {
      status: CardUpdateRequestStatus.Active,
    },
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.PatchPaymentsBankingCardIdRequest](../../models/operations/patchpaymentsbankingcardidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PatchPaymentsBankingCardIdResponse](../../models/operations/patchpaymentsbankingcardidresponse.md)>**


## patchPaymentsBankingCardIdToken

Validates the received verification code and, if correct, returns a token for card operations.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.patchPaymentsBankingCardIdToken({
    cardTokenRequest: {
      verificationCode: "string",
      verificationToken: "string",
    },
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.PatchPaymentsBankingCardIdTokenRequest](../../models/operations/patchpaymentsbankingcardidtokenrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.PatchPaymentsBankingCardIdTokenResponse](../../models/operations/patchpaymentsbankingcardidtokenresponse.md)>**


## patchPaymentsBulkCalculation1099BatchBatchId

Provides the ability to update or alter attributes of a given batch for bulk 1099 calculations by using its unique batch identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkBatchUpdateStatus } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.patchPaymentsBulkCalculation1099BatchBatchId({
    bulkBatchUpdate: {
      labels: {
        "key": "string",
      },
    },
    batchId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.PatchPaymentsBulkCalculation1099BatchBatchIdRequest](../../models/operations/patchpaymentsbulkcalculation1099batchbatchidrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.PatchPaymentsBulkCalculation1099BatchBatchIdResponse](../../models/operations/patchpaymentsbulkcalculation1099batchbatchidresponse.md)>**


## patchPaymentsBulkCalculation1099BatchBatchIdItemBatchItemId

Make alterations or updates to a specific item within the calculation 1099 batch, ensuring accurate and up-to-date record-keeping.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkCalculation1099ItemUpdateCalculationType } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.patchPaymentsBulkCalculation1099BatchBatchIdItemBatchItemId({
    bulkCalculation1099ItemUpdate: {
      labels: {
        "key": "string",
      },
    },
    batchId: "string",
    batchItemId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchPaymentsBulkCalculation1099BatchBatchIdItemBatchItemIdRequest](../../models/operations/patchpaymentsbulkcalculation1099batchbatchiditembatchitemidrequest.md) | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `config`                                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                   | :heavy_minus_sign:                                                                                                                                                             | Available config options for making requests.                                                                                                                                  |


### Response

**Promise<[operations.PatchPaymentsBulkCalculation1099BatchBatchIdItemBatchItemIdResponse](../../models/operations/patchpaymentsbulkcalculation1099batchbatchiditembatchitemidresponse.md)>**


## patchPaymentsBulkClientBatchBatchId

Allows modification of the details of a specific item within the bulk client batch, using the provided item and batch identifiers.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkBatchUpdateStatus } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.patchPaymentsBulkClientBatchBatchId({
    bulkBatchUpdate: {
      labels: {
        "key": "string",
      },
    },
    batchId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.PatchPaymentsBulkClientBatchBatchIdRequest](../../models/operations/patchpaymentsbulkclientbatchbatchidrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.PatchPaymentsBulkClientBatchBatchIdResponse](../../models/operations/patchpaymentsbulkclientbatchbatchidresponse.md)>**


## patchPaymentsBulkClientBatchBatchIdItemBatchItemId

Allows modification of the details of a specific item within the bulk client batch, using the provided item and batch identifiers.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  BulkClientItemUpdateClientStatus,
  MemberDataAutoPayRequirement,
  MemberDataShareTaxDocument,
} from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.patchPaymentsBulkClientBatchBatchIdItemBatchItemId({
    bulkClientItemUpdate: {
      integration: {
        quickbooks: {},
      },
      labels: {
        "key": "string",
      },
      memberData: {},
    },
    batchId: "string",
    batchItemId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                    | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                    | [operations.PatchPaymentsBulkClientBatchBatchIdItemBatchItemIdRequest](../../models/operations/patchpaymentsbulkclientbatchbatchiditembatchitemidrequest.md) | :heavy_check_mark:                                                                                                                                           | The request object to use for the request.                                                                                                                   |
| `config`                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                 | :heavy_minus_sign:                                                                                                                                           | Available config options for making requests.                                                                                                                |


### Response

**Promise<[operations.PatchPaymentsBulkClientBatchBatchIdItemBatchItemIdResponse](../../models/operations/patchpaymentsbulkclientbatchbatchiditembatchitemidresponse.md)>**


## patchPaymentsBulkCollaboratorBatchBatchId

Allows for updating or altering the details and items within a specific bulk collaborator batch using the given batch ID.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkBatchUpdateStatus } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.patchPaymentsBulkCollaboratorBatchBatchId({
    bulkBatchUpdate: {
      labels: {
        "key": "string",
      },
    },
    batchId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.PatchPaymentsBulkCollaboratorBatchBatchIdRequest](../../models/operations/patchpaymentsbulkcollaboratorbatchbatchidrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.PatchPaymentsBulkCollaboratorBatchBatchIdResponse](../../models/operations/patchpaymentsbulkcollaboratorbatchbatchidresponse.md)>**


## patchPaymentsBulkCollaboratorBatchBatchIdItemBatchItemId

Provides the functionality to update or alter the attributes of an item present in a given collaborator batch using the unique identifiers for both the batch and the item.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  BulkCollaboratorItemUpdateCollaboratorStatus,
  MemberClientFormW9InfoCompanyStructure,
} from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.patchPaymentsBulkCollaboratorBatchBatchIdItemBatchItemId({
    bulkCollaboratorItemUpdate: {
      formW9Data: {
        addressLine1: "string",
        city: "Port Pat",
        companyStructure: MemberClientFormW9InfoCompanyStructure.LlcMultiMember,
        country: "Bolivia",
        postalCode: "48036",
        state: "string",
      },
      labels: {
        "key": "string",
      },
    },
    batchId: "string",
    batchItemId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                | [operations.PatchPaymentsBulkCollaboratorBatchBatchIdItemBatchItemIdRequest](../../models/operations/patchpaymentsbulkcollaboratorbatchbatchiditembatchitemidrequest.md) | :heavy_check_mark:                                                                                                                                                       | The request object to use for the request.                                                                                                                               |
| `config`                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                             | :heavy_minus_sign:                                                                                                                                                       | Available config options for making requests.                                                                                                                            |


### Response

**Promise<[operations.PatchPaymentsBulkCollaboratorBatchBatchIdItemBatchItemIdResponse](../../models/operations/patchpaymentsbulkcollaboratorbatchbatchiditembatchitemidresponse.md)>**


## patchPaymentsBulkInvoiceBatchBatchId

Enables the user to update or modify the attributes of a given batch of bulk invoices by specifying its unique batch identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkInvoiceBatchUpdateStatus } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.patchPaymentsBulkInvoiceBatchBatchId({
    bulkInvoiceBatchUpdate: {
      labels: {
        "key": "string",
      },
    },
    batchId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.PatchPaymentsBulkInvoiceBatchBatchIdRequest](../../models/operations/patchpaymentsbulkinvoicebatchbatchidrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.PatchPaymentsBulkInvoiceBatchBatchIdResponse](../../models/operations/patchpaymentsbulkinvoicebatchbatchidresponse.md)>**


## patchPaymentsBulkInvoiceBatchBatchIdItemBatchItemId

Allows for updates or edits to be made to a specific items details within an existing bulk invoice batch. Enhances the flexibility and management of invoice data.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkInvoiceItemUpdateAcceptedPaymentMethods, BulkInvoiceItemUpdateInvoiceStatus } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.patchPaymentsBulkInvoiceBatchBatchIdItemBatchItemId({
    bulkInvoiceItemUpdate: {
      acceptedPaymentMethods: [
        BulkInvoiceItemUpdateAcceptedPaymentMethods.Manual,
      ],
      creditFeeHandling: {},
      labels: {
        "key": "string",
      },
    },
    batchId: "string",
    batchItemId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                      | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                      | [operations.PatchPaymentsBulkInvoiceBatchBatchIdItemBatchItemIdRequest](../../models/operations/patchpaymentsbulkinvoicebatchbatchiditembatchitemidrequest.md) | :heavy_check_mark:                                                                                                                                             | The request object to use for the request.                                                                                                                     |
| `config`                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                   | :heavy_minus_sign:                                                                                                                                             | Available config options for making requests.                                                                                                                  |


### Response

**Promise<[operations.PatchPaymentsBulkInvoiceBatchBatchIdItemBatchItemIdResponse](../../models/operations/patchpaymentsbulkinvoicebatchbatchiditembatchitemidresponse.md)>**


## patchPaymentsBulkPayableBatchBatchId

Updates the information or items of a specific bulk payable batch, given its unique batch ID.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkPayableBatchUpdateStatus } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.patchPaymentsBulkPayableBatchBatchId({
    bulkPayableBatchUpdate: {
      labels: {
        "key": "string",
      },
    },
    batchId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.PatchPaymentsBulkPayableBatchBatchIdRequest](../../models/operations/patchpaymentsbulkpayablebatchbatchidrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.PatchPaymentsBulkPayableBatchBatchIdResponse](../../models/operations/patchpaymentsbulkpayablebatchbatchidresponse.md)>**


## patchPaymentsBulkPayableBatchBatchIdItemBatchItemId

Updates the details or status of a specific item within a bulk payable batch, given both the batch ID and the item ID.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkPayableItemUpdatePayableStatus, BulkPayableItemUpdateWorkflowSubStatus } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.patchPaymentsBulkPayableBatchBatchIdItemBatchItemId({
    bulkPayableItemUpdate: {
      labels: {
        "key": "string",
      },
    },
    batchId: "string",
    batchItemId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                      | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                      | [operations.PatchPaymentsBulkPayableBatchBatchIdItemBatchItemIdRequest](../../models/operations/patchpaymentsbulkpayablebatchbatchiditembatchitemidrequest.md) | :heavy_check_mark:                                                                                                                                             | The request object to use for the request.                                                                                                                     |
| `config`                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                   | :heavy_minus_sign:                                                                                                                                             | Available config options for making requests.                                                                                                                  |


### Response

**Promise<[operations.PatchPaymentsBulkPayableBatchBatchIdItemBatchItemIdResponse](../../models/operations/patchpaymentsbulkpayablebatchbatchiditembatchitemidresponse.md)>**


## patchPaymentsClientDeductionId

Allows for updating specific details or attributes of an existing client deduction.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { DeductionUpdateRequestCurrency, DeductionUpdateRequestType } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.patchPaymentsClientDeductionId({
    deductionUpdateRequest: {},
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.PatchPaymentsClientDeductionIdRequest](../../models/operations/patchpaymentsclientdeductionidrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.PatchPaymentsClientDeductionIdResponse](../../models/operations/patchpaymentsclientdeductionidresponse.md)>**


## patchPaymentsClientInvoiceTemplateId

Updates the specified client-generated invoice template with the provided modifications.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.patchPaymentsClientInvoiceTemplateId({
    clientInvoiceTemplateUpdateRequest: {
      clientId: "string",
    },
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.PatchPaymentsClientInvoiceTemplateIdRequest](../../models/operations/patchpaymentsclientinvoicetemplateidrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.PatchPaymentsClientInvoiceTemplateIdResponse](../../models/operations/patchpaymentsclientinvoicetemplateidresponse.md)>**


## patchPaymentsClientInvoiceId

Allows for modifications to a client-generated invoice using its unique ID, ensuring billing details remain current and accurate.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { ClientInvoiceUpdateRequestStatus } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.patchPaymentsClientInvoiceId({
    clientInvoiceUpdateRequest: {
      creditFeeHandling: {},
    },
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.PatchPaymentsClientInvoiceIdRequest](../../models/operations/patchpaymentsclientinvoiceidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.PatchPaymentsClientInvoiceIdResponse](../../models/operations/patchpaymentsclientinvoiceidresponse.md)>**


## patchPaymentsCollaboratorDeductionId

Update attributes or data related to an existing deduction entry for a collaborator.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { DeductionUpdateRequestCurrency, DeductionUpdateRequestType } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.patchPaymentsCollaboratorDeductionId({
    deductionUpdateRequest: {},
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.PatchPaymentsCollaboratorDeductionIdRequest](../../models/operations/patchpaymentscollaboratordeductionidrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.PatchPaymentsCollaboratorDeductionIdResponse](../../models/operations/patchpaymentscollaboratordeductionidresponse.md)>**


## patchPaymentsCollaboratorGroupId

Update specific attributes or configuration details of an existing collaborator group.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.patchPaymentsCollaboratorGroupId({
    collaboratorGroupUpdateRequest: {
      collaboratorSettings: {
        "key": "string",
      },
      eligibilityRequirements: [
        {},
      ],
    },
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.PatchPaymentsCollaboratorGroupIdRequest](../../models/operations/patchpaymentscollaboratorgroupidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.PatchPaymentsCollaboratorGroupIdResponse](../../models/operations/patchpaymentscollaboratorgroupidresponse.md)>**


## patchPaymentsCollaboratorGroupIdEligibilityRequirementEligibilityRequirementId

Update details or attributes of a specific eligibility requirement linked to a collaborator group.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.patchPaymentsCollaboratorGroupIdEligibilityRequirementEligibilityRequirementId({
    collaboratorGroupRequirementUpdate: {
      newEligibilityRequirementId: "string",
    },
    eligibilityRequirementId: "string",
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                                                            | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                            | [operations.PatchPaymentsCollaboratorGroupIdEligibilityRequirementEligibilityRequirementIdRequest](../../models/operations/patchpaymentscollaboratorgroupideligibilityrequirementeligibilityrequirementidrequest.md) | :heavy_check_mark:                                                                                                                                                                                                   | The request object to use for the request.                                                                                                                                                                           |
| `config`                                                                                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                   | Available config options for making requests.                                                                                                                                                                        |


### Response

**Promise<[operations.PatchPaymentsCollaboratorGroupIdEligibilityRequirementEligibilityRequirementIdResponse](../../models/operations/patchpaymentscollaboratorgroupideligibilityrequirementeligibilityrequirementidresponse.md)>**


## ~~patchPaymentsCollaboratorSettingsAdditionalDataId~~

[Deprecated - use /payments/custom-fields] Update details or attributes of an existing custom data point associated with the relationship between a collaborator and a member.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { AdditionalDataUpdateRequestResourceType, AdditionalDataUpdateRequestType } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.patchPaymentsCollaboratorSettingsAdditionalDataId({
    additionalDataUpdateRequest: {},
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                  | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                  | [operations.PatchPaymentsCollaboratorSettingsAdditionalDataIdRequest](../../models/operations/patchpaymentscollaboratorsettingsadditionaldataidrequest.md) | :heavy_check_mark:                                                                                                                                         | The request object to use for the request.                                                                                                                 |
| `config`                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                               | :heavy_minus_sign:                                                                                                                                         | Available config options for making requests.                                                                                                              |


### Response

**Promise<[operations.PatchPaymentsCollaboratorSettingsAdditionalDataIdResponse](../../models/operations/patchpaymentscollaboratorsettingsadditionaldataidresponse.md)>**


## patchPaymentsCollaboratorSettingsEligibilityRequirementId

Update specific details or attributes of an existing eligibility requirement.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { EligibilityRequirementUpdateRequestRequirementType } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.patchPaymentsCollaboratorSettingsEligibilityRequirementId({
    eligibilityRequirementUpdateRequest: {
      requirementType: EligibilityRequirementUpdateRequestRequirementType.Signature,
    },
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                  | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                  | [operations.PatchPaymentsCollaboratorSettingsEligibilityRequirementIdRequest](../../models/operations/patchpaymentscollaboratorsettingseligibilityrequirementidrequest.md) | :heavy_check_mark:                                                                                                                                                         | The request object to use for the request.                                                                                                                                 |
| `config`                                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                               | :heavy_minus_sign:                                                                                                                                                         | Available config options for making requests.                                                                                                                              |


### Response

**Promise<[operations.PatchPaymentsCollaboratorSettingsEligibilityRequirementIdResponse](../../models/operations/patchpaymentscollaboratorsettingseligibilityrequirementidresponse.md)>**


## patchPaymentsCollaboratorSettingsPaymentEligibilityId

Update attributes or criteria of an existing payment eligibility requirement using its unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.patchPaymentsCollaboratorSettingsPaymentEligibilityId({
    paymentEligibilityUpdateRequest: {
      value: {},
    },
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                          | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                          | [operations.PatchPaymentsCollaboratorSettingsPaymentEligibilityIdRequest](../../models/operations/patchpaymentscollaboratorsettingspaymenteligibilityidrequest.md) | :heavy_check_mark:                                                                                                                                                 | The request object to use for the request.                                                                                                                         |
| `config`                                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                       | :heavy_minus_sign:                                                                                                                                                 | Available config options for making requests.                                                                                                                      |


### Response

**Promise<[operations.PatchPaymentsCollaboratorSettingsPaymentEligibilityIdResponse](../../models/operations/patchpaymentscollaboratorsettingspaymenteligibilityidresponse.md)>**


## patchPaymentsCollaboratorId

Update specific details or attributes related to an existing collaborator.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  Ce853dbef33b2b91880690c84bc5314340c1301fd7b3503dd6ce79c844e2a481CompanyStructure,
  ClientDataAutoPayStrategy,
  ClientDataVerificationStratgy,
  CollaboratorForm1099BalancesUpdateRequestDeliveryMethod,
  CollaboratorForm1099BalancesUpdateRequestStatus,
  CollaboratorUpdateRequestStatus,
  Eighta9c6cb49482a98cdd603ff09858cdc3e5ef6ad9807c876c4161d925a96694a5Status,
} from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.patchPaymentsCollaboratorId({
    collaboratorUpdateRequest: {
      clientData: {},
      form1099Balances: {
        twoThousandAndTwentyOne: {
          correction: {
            address: {},
          },
          dispute: {},
          events: {},
        },
        twoThousandAndTwentyTwo: {
          correction: {
            address: {},
          },
          dispute: {},
          events: {},
        },
      },
      formW9Data: {},
      integration: {
        quickbooks: {},
      },
      labels: {
        "key": "string",
      },
    },
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.PatchPaymentsCollaboratorIdRequest](../../models/operations/patchpaymentscollaboratoridrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.PatchPaymentsCollaboratorIdResponse](../../models/operations/patchpaymentscollaboratoridresponse.md)>**


## patchPaymentsCollaboratorIdAddGroupGroupId

Add the specified collaborator to the designated group, allowing group-specific configurations and permissions.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.patchPaymentsCollaboratorIdAddGroupGroupId({
    groupId: "string",
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.PatchPaymentsCollaboratorIdAddGroupGroupIdRequest](../../models/operations/patchpaymentscollaboratoridaddgroupgroupidrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.PatchPaymentsCollaboratorIdAddGroupGroupIdResponse](../../models/operations/patchpaymentscollaboratoridaddgroupgroupidresponse.md)>**


## patchPaymentsCollaboratorIdRemoveGroupGroupId

Remove the collaborator from the designated group, revoking any group-specific configurations and permissions.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.patchPaymentsCollaboratorIdRemoveGroupGroupId({
    groupId: "string",
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                          | [operations.PatchPaymentsCollaboratorIdRemoveGroupGroupIdRequest](../../models/operations/patchpaymentscollaboratoridremovegroupgroupidrequest.md) | :heavy_check_mark:                                                                                                                                 | The request object to use for the request.                                                                                                         |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.PatchPaymentsCollaboratorIdRemoveGroupGroupIdResponse](../../models/operations/patchpaymentscollaboratoridremovegroupgroupidresponse.md)>**


## patchPaymentsCustomFieldsId

Update specific attributes or data for an existing custom field.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { AdditionalDataUpdateRequestResourceType, AdditionalDataUpdateRequestType } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.patchPaymentsCustomFieldsId({
    additionalDataUpdateRequest: {},
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.PatchPaymentsCustomFieldsIdRequest](../../models/operations/patchpaymentscustomfieldsidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.PatchPaymentsCustomFieldsIdResponse](../../models/operations/patchpaymentscustomfieldsidresponse.md)>**


## patchPaymentsInvoiceTemplateId

Updates details of the specified invoice template based on the provided information.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  FrequencyUpdateInterval,
  InvoiceMetadataPayoutPendingReason,
  InvoiceMetadataPendingStatusReason,
  InvoiceTemplateUpdateRequestStatus,
  InvoiceUpdateRequestAcceptedPaymentMethods,
  InvoiceUpdateRequestStatus,
  ScheduleDateUpdateStatus,
} from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.patchPaymentsInvoiceTemplateId({
    invoiceTemplateUpdateRequest: {
      frequency: {},
      invoiceData: {
        acceptedPaymentMethods: [
          InvoiceUpdateRequestAcceptedPaymentMethods.Ach,
        ],
        attachments: {
          customAttachmentIds: [
            "string",
          ],
        },
        chargedFees: {
          lateFee: {
            amount: 8590.88,
          },
          processingFee: {
            amount: 5723.72,
          },
        },
        client: {},
        collaborators: [
          {},
        ],
        creditFeeHandling: {},
        integration: {
          quickbooks: {},
        },
        labels: {
          "key": "string",
        },
        lateFeeHandling: {
          frequency: {},
        },
        lineItems: [
          {
            discount: {},
            integration: {
              quickbooks: {},
            },
            labels: {
              "key": "string",
            },
          },
        ],
        member: {},
        metadata: {},
        notificationPreferences: {
          sendReminders: false,
        },
      },
      labels: {
        "key": "string",
      },
      scheduleDates: [
        {},
      ],
    },
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.PatchPaymentsInvoiceTemplateIdRequest](../../models/operations/patchpaymentsinvoicetemplateidrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.PatchPaymentsInvoiceTemplateIdResponse](../../models/operations/patchpaymentsinvoicetemplateidresponse.md)>**


## patchPaymentsInvoiceId

Allows updates to the details of an existing member invoice using its unique ID. Useful for making corrections or updates to billing records.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  FrequencyUpdateInterval,
  InvoiceMetadataPayoutPendingReason,
  InvoiceMetadataPendingStatusReason,
  InvoiceUpdateRequestAcceptedPaymentMethods,
  InvoiceUpdateRequestStatus,
} from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.patchPaymentsInvoiceId({
    invoiceUpdateRequest: {
      acceptedPaymentMethods: [
        InvoiceUpdateRequestAcceptedPaymentMethods.LessThanNilGreaterThan,
      ],
      attachments: {
        customAttachmentIds: [
          "string",
        ],
      },
      chargedFees: {
        lateFee: {
          amount: 3936.39,
        },
        processingFee: {
          amount: 5581.87,
        },
      },
      client: {},
      collaborators: [
        {},
      ],
      creditFeeHandling: {},
      integration: {
        quickbooks: {},
      },
      labels: {
        "key": "string",
      },
      lateFeeHandling: {
        frequency: {},
      },
      lineItems: [
        {
          discount: {},
          integration: {
            quickbooks: {},
          },
          labels: {
            "key": "string",
          },
        },
      ],
      member: {},
      metadata: {},
      notificationPreferences: {
        sendReminders: false,
      },
    },
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.PatchPaymentsInvoiceIdRequest](../../models/operations/patchpaymentsinvoiceidrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.PatchPaymentsInvoiceIdResponse](../../models/operations/patchpaymentsinvoiceidresponse.md)>**


## patchPaymentsMemberClientId

Modifies details of the association between a member and a client based on the provided data.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  Ce853dbef33b2b91880690c84bc5314340c1301fd7b3503dd6ce79c844e2a481CompanyStructure,
  ClientDataAutoPayStrategy,
  ClientDataVerificationStratgy,
  CollaboratorForm1099BalancesUpdateRequestDeliveryMethod,
  CollaboratorForm1099BalancesUpdateRequestStatus,
  Eighta9c6cb49482a98cdd603ff09858cdc3e5ef6ad9807c876c4161d925a96694a5Status,
  MemberClientUpdateRequestStatus,
  MemberDataAutoPayRequirement,
  MemberDataShareTaxDocument,
} from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.patchPaymentsMemberClientId({
    memberClientUpdateRequest: {
      clientData: {},
      emailCC: [
        "string",
      ],
      form1099Balances: {
        twoThousandAndTwentyOne: {
          correction: {
            address: {},
          },
          dispute: {},
          events: {},
        },
        twoThousandAndTwentyTwo: {
          correction: {
            address: {},
          },
          dispute: {},
          events: {},
        },
      },
      formW9Data: {},
      integration: {
        quickbooks: {},
      },
      labels: {
        "key": "string",
      },
      memberData: {},
    },
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.PatchPaymentsMemberClientIdRequest](../../models/operations/patchpaymentsmemberclientidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.PatchPaymentsMemberClientIdResponse](../../models/operations/patchpaymentsmemberclientidresponse.md)>**


## patchPaymentsPayableId

This API endpoint facilitates the updating of existing payable details related to a client using a unique Payable ID.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  FrequencyUpdateInterval,
  InvoiceMetadataPayoutPendingReason,
  InvoiceMetadataPendingStatusReason,
  PayableUpdateRequestAcceptedPaymentMethods,
  PayableUpdateRequestPaymentMethods,
  PayableUpdateRequestStatus,
} from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.patchPaymentsPayableId({
    payableUpdateRequest: {
      acceptedPaymentMethods: [
        PayableUpdateRequestAcceptedPaymentMethods.Manual,
      ],
      attachments: {
        customAttachmentIds: [
          "string",
        ],
      },
      chargedFees: {
        lateFee: {
          amount: 3849.35,
        },
        processingFee: {
          amount: 4578.3,
        },
      },
      client: {},
      collaborators: [
        {},
      ],
      creditFeeHandling: {},
      integration: {
        quickbooks: {},
      },
      labels: {
        "key": "string",
      },
      lateFeeHandling: {
        frequency: {},
      },
      lineItems: [
        {
          discount: {},
          integration: {
            quickbooks: {},
          },
          labels: {
            "key": "string",
          },
        },
      ],
      member: {},
      metadata: {},
      notificationPreferences: {
        sendReminders: false,
      },
      paymentMethods: [
        PayableUpdateRequestPaymentMethods.Ach,
      ],
    },
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.PatchPaymentsPayableIdRequest](../../models/operations/patchpaymentspayableidrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.PatchPaymentsPayableIdResponse](../../models/operations/patchpaymentspayableidresponse.md)>**


## patchPaymentsPayoutSettingsId

Allows adjustments and updates to a member's payout configuration, including changing linked debit cards and adjusting payout preferences.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  PayoutDestinationUpdateDestinationType,
  PayoutDestinationUpdatePayoutMethod,
  PayoutSettingsUpdatePayoutPreferences,
} from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.patchPaymentsPayoutSettingsId({
    payoutSettingsUpdate: {
      payoutDestinations: [
        {},
      ],
    },
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.PatchPaymentsPayoutSettingsIdRequest](../../models/operations/patchpaymentspayoutsettingsidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.PatchPaymentsPayoutSettingsIdResponse](../../models/operations/patchpaymentspayoutsettingsidresponse.md)>**


## patchPaymentsPayrollSettingsId

Update certain attributes or details of payroll settings associated with the provided identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  CalculationSettings1099CardProcessingFees,
  CalculationSettings1099OffPlatformPayments,
  CalculationSettings1099ReimbursableExpenses,
  FrequencyUpdateInterval,
  FundingSourceFundingSourceCurrency,
  FundingSourceFundingSourceType,
  PayrollSettingsUpdateStatus,
  PayrollSettingsUpdateWorkflow,
  ScheduleDateUpdateStatus,
} from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.patchPaymentsPayrollSettingsId({
    payrollSettingsUpdate: {
      calculationSettings1099: {
        stateTaxId: {
          "key": "string",
        },
      },
      frequency: {},
      fundingSource: {
        fundingSourceCurrency: FundingSourceFundingSourceCurrency.Cad,
        fundingSourceId: "string",
        fundingSourceType: FundingSourceFundingSourceType.Account,
      },
      scheduleDates: [
        {},
      ],
    },
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.PatchPaymentsPayrollSettingsIdRequest](../../models/operations/patchpaymentspayrollsettingsidrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.PatchPaymentsPayrollSettingsIdResponse](../../models/operations/patchpaymentspayrollsettingsidresponse.md)>**


## postPaymentsBankingCard

Add a new  Wingspan Wallet card to the system, allowing it to be used for future transactions.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsBankingCard({
    shippingAddress: {
      addressLine1: "string",
      city: "Tamarafield",
      postalCode: "57982",
      state: "string",
    },
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.CardCreateRequest](../../models/shared/cardcreaterequest.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.PostPaymentsBankingCardResponse](../../models/operations/postpaymentsbankingcardresponse.md)>**


## postPaymentsBankingCardIdToken

Sends a verification code to the users registered contact method for additional card authentication.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsBankingCardIdToken({
    cardCodeRequest: {
      channel: "string",
    },
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.PostPaymentsBankingCardIdTokenRequest](../../models/operations/postpaymentsbankingcardidtokenrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.PostPaymentsBankingCardIdTokenResponse](../../models/operations/postpaymentsbankingcardidtokenresponse.md)>**


## postPaymentsBankingInstantPayout

Configure a new instant payout setting, specifying details like amount, frequency, and destination.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsBankingInstantPayout({
    externalPayoutAccountToken: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.InstantPayoutRequest](../../models/shared/instantpayoutrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.PostPaymentsBankingInstantPayoutResponse](../../models/operations/postpaymentsbankinginstantpayoutresponse.md)>**


## postPaymentsBulkCalculation1099Batch

Allows users to create a new batch for facilitating bulk 1099 calculations by providing necessary batch details.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsBulkCalculation1099Batch({
    labels: {
      "key": "string",
    },
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `request`                                                        | [shared.BulkBatchCreate](../../models/shared/bulkbatchcreate.md) | :heavy_check_mark:                                               | The request object to use for the request.                       |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.PostPaymentsBulkCalculation1099BatchResponse](../../models/operations/postpaymentsbulkcalculation1099batchresponse.md)>**


## postPaymentsBulkCalculation1099BatchBatchIdItem

Facilitates the incorporation of a new item into the specified calculation 1099 batch, streamlining the process of batch expansion.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkCalculation1099ItemCreateCalculationType } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsBulkCalculation1099BatchBatchIdItem({
    bulkCalculation1099ItemCreate: {
      clientId: "string",
      labels: {
        "key": "string",
      },
      year: 5509.83,
    },
    batchId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                              | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                              | [operations.PostPaymentsBulkCalculation1099BatchBatchIdItemRequest](../../models/operations/postpaymentsbulkcalculation1099batchbatchiditemrequest.md) | :heavy_check_mark:                                                                                                                                     | The request object to use for the request.                                                                                                             |
| `config`                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                           | :heavy_minus_sign:                                                                                                                                     | Available config options for making requests.                                                                                                          |


### Response

**Promise<[operations.PostPaymentsBulkCalculation1099BatchBatchIdItemResponse](../../models/operations/postpaymentsbulkcalculation1099batchbatchiditemresponse.md)>**


## postPaymentsBulkClientBatch

Initiates the creation of a fresh bulk client batch, streamlining the process of adding multiple clients in one go.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsBulkClientBatch({
    labels: {
      "key": "string",
    },
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `request`                                                        | [shared.BulkBatchCreate](../../models/shared/bulkbatchcreate.md) | :heavy_check_mark:                                               | The request object to use for the request.                       |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.PostPaymentsBulkClientBatchResponse](../../models/operations/postpaymentsbulkclientbatchresponse.md)>**


## postPaymentsBulkClientBatchBatchIdItem

Inserts a new item into the specified bulk client batch, allowing for further expansion of client data within the batch.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  BulkClientItemCreateClientStatus,
  MemberDataAutoPayRequirement,
  MemberDataShareTaxDocument,
} from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsBulkClientBatchBatchIdItem({
    bulkClientItemCreate: {
      integration: {
        quickbooks: {},
      },
      labels: {
        "key": "string",
      },
      memberData: {},
    },
    batchId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.PostPaymentsBulkClientBatchBatchIdItemRequest](../../models/operations/postpaymentsbulkclientbatchbatchiditemrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.PostPaymentsBulkClientBatchBatchIdItemResponse](../../models/operations/postpaymentsbulkclientbatchbatchiditemresponse.md)>**


## postPaymentsBulkCollaboratorBatch

Enables the creation of a new bulk collaborator batch, facilitating the bulk management and addition of collaborators for various projects or tasks.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsBulkCollaboratorBatch({
    labels: {
      "key": "string",
    },
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `request`                                                        | [shared.BulkBatchCreate](../../models/shared/bulkbatchcreate.md) | :heavy_check_mark:                                               | The request object to use for the request.                       |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.PostPaymentsBulkCollaboratorBatchResponse](../../models/operations/postpaymentsbulkcollaboratorbatchresponse.md)>**


## postPaymentsBulkCollaboratorBatchBatchIdItem

Allows for the addition of a new item to an existing batch of collaborators by providing the batchs unique identifier and item details.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  BulkCollaboratorItemCreateCollaboratorStatus,
  MemberClientFormW9InfoCompanyStructure,
} from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsBulkCollaboratorBatchBatchIdItem({
    bulkCollaboratorItemCreate: {
      formW9Data: {
        addressLine1: "string",
        city: "West Kaleb",
        companyStructure: MemberClientFormW9InfoCompanyStructure.Partnership,
        country: "Gambia",
        postalCode: "85065",
        state: "string",
      },
      labels: {
        "key": "string",
      },
    },
    batchId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.PostPaymentsBulkCollaboratorBatchBatchIdItemRequest](../../models/operations/postpaymentsbulkcollaboratorbatchbatchiditemrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.PostPaymentsBulkCollaboratorBatchBatchIdItemResponse](../../models/operations/postpaymentsbulkcollaboratorbatchbatchiditemresponse.md)>**


## postPaymentsBulkInvoiceBatch

Creates a new batch for importing multiple invoices at once, streamlining the bulk invoicing operations.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkInvoiceBatchCreateProcessingStrategy } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsBulkInvoiceBatch({
    labels: {
      "key": "string",
    },
    processingStrategy: BulkInvoiceBatchCreateProcessingStrategy.Single,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.BulkInvoiceBatchCreate](../../models/shared/bulkinvoicebatchcreate.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.PostPaymentsBulkInvoiceBatchResponse](../../models/operations/postpaymentsbulkinvoicebatchresponse.md)>**


## postPaymentsBulkInvoiceBatchBatchIdItem

Allows users to append a new item to a given batch of bulk invoices by supplying its unique batch identifier and the details of the new item.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkInvoiceItemCreateAcceptedPaymentMethods, BulkInvoiceItemCreateInvoiceStatus } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsBulkInvoiceBatchBatchIdItem({
    bulkInvoiceItemCreate: {
      acceptedPaymentMethods: [
        BulkInvoiceItemCreateAcceptedPaymentMethods.Credit,
      ],
      amount: 425.31,
      bulkInvoiceBatchId: "string",
      creditFeeHandling: {},
      dueDate: "string",
      invoiceStatus: BulkInvoiceItemCreateInvoiceStatus.Paid,
      labels: {
        "key": "string",
      },
      lineItemDescription: "string",
    },
    batchId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.PostPaymentsBulkInvoiceBatchBatchIdItemRequest](../../models/operations/postpaymentsbulkinvoicebatchbatchiditemrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.PostPaymentsBulkInvoiceBatchBatchIdItemResponse](../../models/operations/postpaymentsbulkinvoicebatchbatchiditemresponse.md)>**


## postPaymentsBulkPayableBatch

Creates a new batch for importing multiple payables at once, streamlining the bulk payment operations.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkPayableBatchCreateProcessingStrategy } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsBulkPayableBatch({
    labels: {
      "key": "string",
    },
    processingStrategy: BulkPayableBatchCreateProcessingStrategy.Single,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.BulkPayableBatchCreate](../../models/shared/bulkpayablebatchcreate.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.PostPaymentsBulkPayableBatchResponse](../../models/operations/postpaymentsbulkpayablebatchresponse.md)>**


## postPaymentsBulkPayableBatchBatchIdItem

Allows for the creation and addition of a new individual payable item into an existing bulk payable batch. This enhances batch management and payable tracking.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkPayableItemCreatePayableStatus, BulkPayableItemCreateWorkflowSubStatus } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsBulkPayableBatchBatchIdItem({
    bulkPayableItemCreate: {
      amount: 5083.09,
      bulkPayableBatchId: "string",
      dueDate: "string",
      labels: {
        "key": "string",
      },
      lineItemDescription: "string",
      payableStatus: BulkPayableItemCreatePayableStatus.Open,
    },
    batchId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.PostPaymentsBulkPayableBatchBatchIdItemRequest](../../models/operations/postpaymentsbulkpayablebatchbatchiditemrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.PostPaymentsBulkPayableBatchBatchIdItemResponse](../../models/operations/postpaymentsbulkpayablebatchbatchiditemresponse.md)>**


## postPaymentsClientDeduction

Allows for the creation of a new client deduction based on the provided details.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { DeductionCreateRequestCurrency, DeductionCreateRequestType } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsClientDeduction({
    amount: 7904.18,
    clientId: "string",
    currency: DeductionCreateRequestCurrency.Cad,
    memberId: "string",
    name: "string",
    type: DeductionCreateRequestType.PostPayment,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.DeductionCreateRequest](../../models/shared/deductioncreaterequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.PostPaymentsClientDeductionResponse](../../models/operations/postpaymentsclientdeductionresponse.md)>**


## postPaymentsClientInvoice

Enables the creation of a new invoice on behalf of a client using the provided details, facilitating new billing records.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { ClientInvoiceCreateRequestCurrency } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsClientInvoice({
    clientEmail: "string",
    clientEmailCC: [
      "string",
    ],
    creditFeeHandling: {},
    dueDate: "string",
    lineItems: [
      {
        discount: {},
        integration: {
          quickbooks: {},
        },
        labels: {
          "key": "string",
        },
      },
    ],
    memberId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [shared.ClientInvoiceCreateRequest](../../models/shared/clientinvoicecreaterequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.PostPaymentsClientInvoiceResponse](../../models/operations/postpaymentsclientinvoiceresponse.md)>**


## postPaymentsClientInvoiceTemplate

Allows clients to create a new invoice template based on the provided details.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  ClientInvoiceDataCreateRequestCurrency,
  ClientInvoiceTemplateCreateRequestStatus,
  FrequencyInterval,
  ScheduleDateStatus,
} from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsClientInvoiceTemplate({
    clientEmail: "string",
    clientEmailCC: [
      "string",
    ],
    frequency: {
      startDate: "string",
    },
    invoiceData: {
      creditFeeHandling: {},
      lineItems: [
        {
          discount: {},
          integration: {
            quickbooks: {},
          },
          labels: {
            "key": "string",
          },
        },
      ],
    },
    memberId: "string",
    scheduleDates: [
      {
        date: "string",
        status: ScheduleDateStatus.Pending,
      },
    ],
    status: ClientInvoiceTemplateCreateRequestStatus.Expired,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [shared.ClientInvoiceTemplateCreateRequest](../../models/shared/clientinvoicetemplatecreaterequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PostPaymentsClientInvoiceTemplateResponse](../../models/operations/postpaymentsclientinvoicetemplateresponse.md)>**


## postPaymentsClientInvoiceInvoiceIdPay

Process a payment for a specific client-generated invoice using the provided details, ensuring the invoice is marked as settled.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsClientInvoiceInvoiceIdPay({
    payRequest: {},
    invoiceId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.PostPaymentsClientInvoiceInvoiceIdPayRequest](../../models/operations/postpaymentsclientinvoiceinvoiceidpayrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.PostPaymentsClientInvoiceInvoiceIdPayResponse](../../models/operations/postpaymentsclientinvoiceinvoiceidpayresponse.md)>**


## postPaymentsCollaborator

Add a new collaborator to the system, allowing them to be eligible for payments.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  ClientDataAutoPayStrategy,
  ClientDataVerificationStratgy,
  CollaboratorCreateRequestStatus,
  MemberClientFormW9InfoCompanyStructure,
} from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsCollaborator({
    clientData: {},
    clientId: "string",
    formW9Data: {
      addressLine1: "string",
      city: "Silver Spring",
      companyStructure: MemberClientFormW9InfoCompanyStructure.LLCCorporationC,
      country: "Saudi Arabia",
      postalCode: "93152-2756",
      state: "string",
    },
    integration: {
      quickbooks: {},
    },
    labels: {
      "key": "string",
    },
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [shared.CollaboratorCreateRequest](../../models/shared/collaboratorcreaterequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.PostPaymentsCollaboratorResponse](../../models/operations/postpaymentscollaboratorresponse.md)>**


## postPaymentsCollaboratorDeduction

Create and add a new deduction entry for a collaborator based on the provided data.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { DeductionCreateRequestCurrency, DeductionCreateRequestType } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsCollaboratorDeduction({
    amount: 2103.26,
    clientId: "string",
    currency: DeductionCreateRequestCurrency.Cad,
    memberId: "string",
    name: "string",
    type: DeductionCreateRequestType.PrePayment,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.DeductionCreateRequest](../../models/shared/deductioncreaterequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.PostPaymentsCollaboratorDeductionResponse](../../models/operations/postpaymentscollaboratordeductionresponse.md)>**


## postPaymentsCollaboratorGroup

Create a new collaborator group with specific configurations and permissions as defined by the client.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsCollaboratorGroup({
    collaboratorSettings: {
      "key": "string",
    },
    description: "Triple-buffered multi-tasking synergy",
    eligibilityRequirements: [
      {},
    ],
    name: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [shared.CollaboratorGroupCreateRequest](../../models/shared/collaboratorgroupcreaterequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.PostPaymentsCollaboratorGroupResponse](../../models/operations/postpaymentscollaboratorgroupresponse.md)>**


## ~~postPaymentsCollaboratorSettingsAdditionalData~~

[Deprecated - use /payments/custom-fields] Create custom fields that can be associated with the memberClient object to provide extra details about the relationship between a collaborator and a member.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { AdditionalDataResourceType, AdditionalDataType } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsCollaboratorSettingsAdditionalData({
    key: "<key>",
    name: "string",
    required: false,
    resourceType: AdditionalDataResourceType.LineItem,
    type: AdditionalDataType.String,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                      | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `request`                                                      | [shared.AdditionalData](../../models/shared/additionaldata.md) | :heavy_check_mark:                                             | The request object to use for the request.                     |
| `config`                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)   | :heavy_minus_sign:                                             | Available config options for making requests.                  |


### Response

**Promise<[operations.PostPaymentsCollaboratorSettingsAdditionalDataResponse](../../models/operations/postpaymentscollaboratorsettingsadditionaldataresponse.md)>**


## postPaymentsCollaboratorSettingsEligibilityRequirement

Define and create a new eligibility requirement for collaborators.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { EligibilityRequirementCreateRequestRequirementType } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsCollaboratorSettingsEligibilityRequirement({
    requirementType: EligibilityRequirementCreateRequestRequirementType.Signature,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [shared.EligibilityRequirementCreateRequest](../../models/shared/eligibilityrequirementcreaterequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PostPaymentsCollaboratorSettingsEligibilityRequirementResponse](../../models/operations/postpaymentscollaboratorsettingseligibilityrequirementresponse.md)>**


## postPaymentsCollaboratorSettingsPaymentEligibility

Define a new payment eligibility requirement for collaborators in the system.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsCollaboratorSettingsPaymentEligibility({
    field: "string",
    value: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [shared.PaymentEligibility](../../models/shared/paymenteligibility.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.PostPaymentsCollaboratorSettingsPaymentEligibilityResponse](../../models/operations/postpaymentscollaboratorsettingspaymenteligibilityresponse.md)>**


## postPaymentsCollaborator1099Calculate

Analyzes and calculates the appropriate 1099 amounts for collaborators based on provided data and relevant financial parameters.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsCollaborator1099Calculate({
    memberClientId: "string",
    year: 7927.08,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.Calculate1099Request](../../models/shared/calculate1099request.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.PostPaymentsCollaborator1099CalculateResponse](../../models/operations/postpaymentscollaborator1099calculateresponse.md)>**


## postPaymentsCollaborator1099MarkUndelivered

Mark a specific 1099 submission for a collaborator as undelivered, typically due to mail return or incorrect address details.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsCollaborator1099MarkUndelivered({
    memberId: "string",
    submissionIndex: 2792.15,
    year: 7049.25,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [shared.Mark1099AsUndeliveredRequest](../../models/shared/mark1099asundeliveredrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.PostPaymentsCollaborator1099MarkUndeliveredResponse](../../models/operations/postpaymentscollaborator1099markundeliveredresponse.md)>**


## postPaymentsCollaborator1099Remail

Initiates a process to resend the 1099 form to a collaborator in the event of a previous failed delivery or at the request of the collaborator.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsCollaborator1099Remail({
    address: {
      addressLine1: "string",
      city: "Johnstonfield",
      postalCode: "98762",
      state: "string",
    },
    memberId: "string",
    year: 1958.97,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.Remail1099Request](../../models/shared/remail1099request.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.PostPaymentsCollaborator1099RemailResponse](../../models/operations/postpaymentscollaborator1099remailresponse.md)>**


## postPaymentsCustomFields

Define a new custom field for payments using additional data provided.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { AdditionalDataResourceType, AdditionalDataType } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsCustomFields({
    key: "<key>",
    name: "string",
    required: false,
    resourceType: AdditionalDataResourceType.LineItem,
    type: AdditionalDataType.String,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                      | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `request`                                                      | [shared.AdditionalData](../../models/shared/additionaldata.md) | :heavy_check_mark:                                             | The request object to use for the request.                     |
| `config`                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)   | :heavy_minus_sign:                                             | Available config options for making requests.                  |


### Response

**Promise<[operations.PostPaymentsCustomFieldsResponse](../../models/operations/postpaymentscustomfieldsresponse.md)>**


## postPaymentsInvoice

Facilitates the creation of a new invoice for a member using the provided invoice details. Useful for adding new billing records.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  FrequencyUpdateInterval,
  InvoiceCollaboratorCreateRequestCurrency,
  InvoiceCreateRequestAcceptedPaymentMethods,
  InvoiceCreateRequestCurrency,
  InvoiceCreateRequestStatus,
  InvoiceMetadataPayoutPendingReason,
  InvoiceMetadataPendingStatusReason,
} from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsInvoice({
    acceptedPaymentMethods: [
      InvoiceCreateRequestAcceptedPaymentMethods.Manual,
    ],
    attachments: {
      customAttachmentIds: [
        "string",
      ],
    },
    client: {},
    collaborators: [
      {
        amount: 6965.06,
        currency: InvoiceCollaboratorCreateRequestCurrency.Cad,
        description: "Synergistic 6th generation moderator",
        memberClientId: "string",
      },
    ],
    creditFeeHandling: {},
    dueDate: "string",
    integration: {
      quickbooks: {},
    },
    labels: {
      "key": "string",
    },
    lateFeeHandling: {
      frequency: {},
    },
    lineItems: [
      {
        discount: {},
        integration: {
          quickbooks: {},
        },
        labels: {
          "key": "string",
        },
      },
    ],
    member: {},
    memberClientId: "string",
    metadata: {},
    notificationPreferences: {
      sendReminders: false,
    },
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.InvoiceCreateRequest](../../models/shared/invoicecreaterequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.PostPaymentsInvoiceResponse](../../models/operations/postpaymentsinvoiceresponse.md)>**


## postPaymentsInvoiceTemplate

Creates a new invoice template based on the provided details.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  FrequencyInterval,
  InvoiceCollaboratorCreateRequestCurrency,
  InvoiceDataCreateRequestAcceptedPaymentMethods,
  InvoiceDataCreateRequestCurrency,
  InvoiceDataCreateRequestStatus,
  InvoiceTemplateCreateRequestStatus,
  ScheduleDateStatus,
} from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsInvoiceTemplate({
    frequency: {
      startDate: "string",
    },
    invoiceData: {
      acceptedPaymentMethods: [
        InvoiceDataCreateRequestAcceptedPaymentMethods.LessThanNilGreaterThan,
      ],
      attachments: {
        customAttachmentIds: [
          "string",
        ],
      },
      collaborators: [
        {
          amount: 333.85,
          currency: InvoiceCollaboratorCreateRequestCurrency.Cad,
          description: "Operative maximized policy",
          memberClientId: "string",
        },
      ],
      creditFeeHandling: {},
      labels: {
        "key": "string",
      },
      lateFeeHandling: {
        frequency: {
          startDate: "string",
        },
      },
      lineItems: [
        {
          discount: {},
          integration: {
            quickbooks: {},
          },
          labels: {
            "key": "string",
          },
        },
      ],
      memberClientId: "string",
      notificationPreferences: {
        sendReminders: false,
      },
    },
    labels: {
      "key": "string",
    },
    scheduleDates: [
      {
        date: "string",
        status: ScheduleDateStatus.Modified,
      },
    ],
    status: InvoiceTemplateCreateRequestStatus.Cancelled,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [shared.InvoiceTemplateCreateRequest](../../models/shared/invoicetemplatecreaterequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.PostPaymentsInvoiceTemplateResponse](../../models/operations/postpaymentsinvoicetemplateresponse.md)>**


## postPaymentsInvoiceTestCreate

Use this endpoint to create a test invoice for testing and validation purposes. This invoice will mimic a client's real invoice.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsInvoiceTestCreate({
    contactName: "string",
    email: "Zechariah.Bradtke36@yahoo.com",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.TestInvoiceCreate](../../models/shared/testinvoicecreate.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.PostPaymentsInvoiceTestCreateResponse](../../models/operations/postpaymentsinvoicetestcreateresponse.md)>**


## postPaymentsInvoiceInvoiceIdGenerate

This endpoint allows for the dynamic generation of a PDF document for a given invoice, identified by its unique ID.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsInvoiceInvoiceIdGenerate({
    invoiceId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.PostPaymentsInvoiceInvoiceIdGenerateRequest](../../models/operations/postpaymentsinvoiceinvoiceidgeneraterequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.PostPaymentsInvoiceInvoiceIdGenerateResponse](../../models/operations/postpaymentsinvoiceinvoiceidgenerateresponse.md)>**


## postPaymentsInvoiceInvoiceIdSend

Use this endpoint to send an invoice by email using its unique ID for identification.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsInvoiceInvoiceIdSend({
    invoiceId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.PostPaymentsInvoiceInvoiceIdSendRequest](../../models/operations/postpaymentsinvoiceinvoiceidsendrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.PostPaymentsInvoiceInvoiceIdSendResponse](../../models/operations/postpaymentsinvoiceinvoiceidsendresponse.md)>**


## postPaymentsMemberClient

Use this endpoint to create a new linkage between a member and client in the system, allowing for better relationship management.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  MemberClientCreateRequestStatus,
  MemberDataAutoPayRequirement,
  MemberDataShareTaxDocument,
} from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsMemberClient({
    emailCC: [
      "string",
    ],
    integration: {
      quickbooks: {},
    },
    labels: {
      "key": "string",
    },
    memberData: {},
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [shared.MemberClientCreateRequest](../../models/shared/memberclientcreaterequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.PostPaymentsMemberClientResponse](../../models/operations/postpaymentsmemberclientresponse.md)>**


## postPaymentsPayApproved

Processes all approved payroll transactions, ensuring employees and vendors are compensated as per their respective invoices.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsPayApproved();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PostPaymentsPayApprovedResponse](../../models/operations/postpaymentspayapprovedresponse.md)>**


## postPaymentsPayable

Allows for the generation of a new Payables for a specific member on behalf of a client. This ensures streamlined billing and effective financial tracking between clients and members.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  FrequencyUpdateInterval,
  InvoiceMetadataPayoutPendingReason,
  InvoiceMetadataPendingStatusReason,
  PayableCreateRequestAcceptedPaymentMethods,
  PayableCreateRequestCurrency,
  PayableCreateRequestStatus,
} from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsPayable({
    acceptedPaymentMethods: [
      PayableCreateRequestAcceptedPaymentMethods.Credit,
    ],
    attachments: {
      customAttachmentIds: [
        "string",
      ],
    },
    client: {},
    collaboratorId: "string",
    creditFeeHandling: {},
    dueDate: "string",
    integration: {
      quickbooks: {},
    },
    labels: {
      "key": "string",
    },
    lateFeeHandling: {
      frequency: {},
    },
    lineItems: [
      {
        discount: {},
        integration: {
          quickbooks: {},
        },
        labels: {
          "key": "string",
        },
      },
    ],
    member: {},
    metadata: {},
    notificationPreferences: {
      sendReminders: false,
    },
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.PayableCreateRequest](../../models/shared/payablecreaterequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.PostPaymentsPayableResponse](../../models/operations/postpaymentspayableresponse.md)>**


## postPaymentsPayoutSettingsMemberIdDebitCard

Allows the addition of a new debit card to a member's profile for payout transactions.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.postPaymentsPayoutSettingsMemberIdDebitCard({
    checkbookCardCreate: {
      address: {
        addressLine1: "string",
        city: "Lake Alvenaview",
        postalCode: "60430",
        state: "string",
      },
      cardNumber: "string",
      expMM: "string",
      expYYYY: "string",
      name: "string",
    },
    memberId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.PostPaymentsPayoutSettingsMemberIdDebitCardRequest](../../models/operations/postpaymentspayoutsettingsmemberiddebitcardrequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.PostPaymentsPayoutSettingsMemberIdDebitCardResponse](../../models/operations/postpaymentspayoutsettingsmemberiddebitcardresponse.md)>**

