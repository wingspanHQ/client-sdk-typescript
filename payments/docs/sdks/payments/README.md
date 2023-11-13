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

  const res = await sdk.deletePaymentsBankingCardId({
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
| `request`                                                                                                          | [operations.DeletePaymentsBankingCardIdRequest](../../sdk/models/operations/deletepaymentsbankingcardidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.DeletePaymentsBankingCardIdResponse](../../sdk/models/operations/deletepaymentsbankingcardidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deletePaymentsBankingInstantPayout

Delete the existing instant payout configuration, preventing any further instant payouts unless reconfigured.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.deletePaymentsBankingInstantPayout();

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

**Promise<[operations.DeletePaymentsBankingInstantPayoutResponse](../../sdk/models/operations/deletepaymentsbankinginstantpayoutresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deletePaymentsBulkCollaboratorBatchBatchId

Deletes a specific bulk collaborator batch using its unique identifier. Once deleted, the batch cannot be recovered.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.deletePaymentsBulkCollaboratorBatchBatchId({
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
| `request`                                                                                                                                        | [operations.DeletePaymentsBulkCollaboratorBatchBatchIdRequest](../../sdk/models/operations/deletepaymentsbulkcollaboratorbatchbatchidrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.DeletePaymentsBulkCollaboratorBatchBatchIdResponse](../../sdk/models/operations/deletepaymentsbulkcollaboratorbatchbatchidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deletePaymentsBulkPayableBatchBatchId

Deletes a specific batch for bulk payables, using the provided batch ID, preventing any further operations on it.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.deletePaymentsBulkPayableBatchBatchId({
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
| `request`                                                                                                                              | [operations.DeletePaymentsBulkPayableBatchBatchIdRequest](../../sdk/models/operations/deletepaymentsbulkpayablebatchbatchidrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.DeletePaymentsBulkPayableBatchBatchIdResponse](../../sdk/models/operations/deletepaymentsbulkpayablebatchbatchidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deletePaymentsClientDeductionId

Allows for the deletion of a client deduction based on its unique identifier, removing it permanently from the system.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.deletePaymentsClientDeductionId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.DeletePaymentsClientDeductionIdRequest](../../sdk/models/operations/deletepaymentsclientdeductionidrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.DeletePaymentsClientDeductionIdResponse](../../sdk/models/operations/deletepaymentsclientdeductionidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deletePaymentsCollaboratorDeductionId

Delete a specific deduction entry, eliminating its record from the system.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.deletePaymentsCollaboratorDeductionId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.DeletePaymentsCollaboratorDeductionIdRequest](../../sdk/models/operations/deletepaymentscollaboratordeductionidrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.DeletePaymentsCollaboratorDeductionIdResponse](../../sdk/models/operations/deletepaymentscollaboratordeductionidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deletePaymentsCollaboratorGroupIdEligibilityRequirementEligibilityRequirementId

Delete a specific eligibility requirement from the designated collaborator group.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.deletePaymentsCollaboratorGroupIdEligibilityRequirementEligibilityRequirementId({
    eligibilityRequirementId: "string",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                  | [operations.DeletePaymentsCollaboratorGroupIdEligibilityRequirementEligibilityRequirementIdRequest](../../sdk/models/operations/deletepaymentscollaboratorgroupideligibilityrequirementeligibilityrequirementidrequest.md) | :heavy_check_mark:                                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                                 |
| `config`                                                                                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                         | Available config options for making requests.                                                                                                                                                                              |


### Response

**Promise<[operations.DeletePaymentsCollaboratorGroupIdEligibilityRequirementEligibilityRequirementIdResponse](../../sdk/models/operations/deletepaymentscollaboratorgroupideligibilityrequirementeligibilityrequirementidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## ~~deletePaymentsCollaboratorSettingsAdditionalDataId~~

[Deprecated - use /payments/custom-fields] Remove a specific custom data point, eliminating the additional details provided about a collaborator-member relationship.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.deletePaymentsCollaboratorSettingsAdditionalDataId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                        | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                        | [operations.DeletePaymentsCollaboratorSettingsAdditionalDataIdRequest](../../sdk/models/operations/deletepaymentscollaboratorsettingsadditionaldataidrequest.md) | :heavy_check_mark:                                                                                                                                               | The request object to use for the request.                                                                                                                       |
| `config`                                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                     | :heavy_minus_sign:                                                                                                                                               | Available config options for making requests.                                                                                                                    |


### Response

**Promise<[operations.DeletePaymentsCollaboratorSettingsAdditionalDataIdResponse](../../sdk/models/operations/deletepaymentscollaboratorsettingsadditionaldataidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deletePaymentsCollaboratorSettingsEligibilityRequirementId

Delete an eligibility requirement from the system based on its unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.deletePaymentsCollaboratorSettingsEligibilityRequirementId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                        | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                        | [operations.DeletePaymentsCollaboratorSettingsEligibilityRequirementIdRequest](../../sdk/models/operations/deletepaymentscollaboratorsettingseligibilityrequirementidrequest.md) | :heavy_check_mark:                                                                                                                                                               | The request object to use for the request.                                                                                                                                       |
| `config`                                                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                     | :heavy_minus_sign:                                                                                                                                                               | Available config options for making requests.                                                                                                                                    |


### Response

**Promise<[operations.DeletePaymentsCollaboratorSettingsEligibilityRequirementIdResponse](../../sdk/models/operations/deletepaymentscollaboratorsettingseligibilityrequirementidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deletePaymentsCollaboratorSettingsPaymentEligibilityId

Delete an existing payment eligibility requirement based on its unique identifier, removing associated criteria for a member's payment eligibility.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.deletePaymentsCollaboratorSettingsPaymentEligibilityId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                | [operations.DeletePaymentsCollaboratorSettingsPaymentEligibilityIdRequest](../../sdk/models/operations/deletepaymentscollaboratorsettingspaymenteligibilityidrequest.md) | :heavy_check_mark:                                                                                                                                                       | The request object to use for the request.                                                                                                                               |
| `config`                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                             | :heavy_minus_sign:                                                                                                                                                       | Available config options for making requests.                                                                                                                            |


### Response

**Promise<[operations.DeletePaymentsCollaboratorSettingsPaymentEligibilityIdResponse](../../sdk/models/operations/deletepaymentscollaboratorsettingspaymenteligibilityidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deletePaymentsCollaboratorId

Permanently delete the record of a specific collaborator from the system.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.deletePaymentsCollaboratorId({
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
| `request`                                                                                                            | [operations.DeletePaymentsCollaboratorIdRequest](../../sdk/models/operations/deletepaymentscollaboratoridrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.DeletePaymentsCollaboratorIdResponse](../../sdk/models/operations/deletepaymentscollaboratoridresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deletePaymentsCustomFieldsId

Permanently delete a custom field from the system based on its unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.deletePaymentsCustomFieldsId({
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
| `request`                                                                                                            | [operations.DeletePaymentsCustomFieldsIdRequest](../../sdk/models/operations/deletepaymentscustomfieldsidrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.DeletePaymentsCustomFieldsIdResponse](../../sdk/models/operations/deletepaymentscustomfieldsidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deletePaymentsInvoiceTemplateId

Deletes the invoice template associated with the provided unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.deletePaymentsInvoiceTemplateId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.DeletePaymentsInvoiceTemplateIdRequest](../../sdk/models/operations/deletepaymentsinvoicetemplateidrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.DeletePaymentsInvoiceTemplateIdResponse](../../sdk/models/operations/deletepaymentsinvoicetemplateidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deletePaymentsInvoiceId

Enables the deletion of a specific member's invoice using its unique ID, helping in maintaining accurate billing records.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.deletePaymentsInvoiceId({
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
| `request`                                                                                                  | [operations.DeletePaymentsInvoiceIdRequest](../../sdk/models/operations/deletepaymentsinvoiceidrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.DeletePaymentsInvoiceIdResponse](../../sdk/models/operations/deletepaymentsinvoiceidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deletePaymentsMemberClientId

Deletes the association between a member and a client using the provided unique identifier. Once deleted, this relationship data can't be recovered.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.deletePaymentsMemberClientId({
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
| `request`                                                                                                            | [operations.DeletePaymentsMemberClientIdRequest](../../sdk/models/operations/deletepaymentsmemberclientidrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.DeletePaymentsMemberClientIdResponse](../../sdk/models/operations/deletepaymentsmemberclientidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deletePaymentsPayableId

This API endpoint is designed to remove the payable information related to a client using a unique Payable ID.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.deletePaymentsPayableId({
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
| `request`                                                                                                  | [operations.DeletePaymentsPayableIdRequest](../../sdk/models/operations/deletepaymentspayableidrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.DeletePaymentsPayableIdResponse](../../sdk/models/operations/deletepaymentspayableidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deletePaymentsPayoutSettingsMemberIdDebitCardId

Initiates a process to remove and permanently delete a specific debit card from a member's payout settings.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.deletePaymentsPayoutSettingsMemberIdDebitCardId({
    id: "<ID>",
    memberId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                  | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                  | [operations.DeletePaymentsPayoutSettingsMemberIdDebitCardIdRequest](../../sdk/models/operations/deletepaymentspayoutsettingsmemberiddebitcardidrequest.md) | :heavy_check_mark:                                                                                                                                         | The request object to use for the request.                                                                                                                 |
| `config`                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                               | :heavy_minus_sign:                                                                                                                                         | Available config options for making requests.                                                                                                              |


### Response

**Promise<[operations.DeletePaymentsPayoutSettingsMemberIdDebitCardIdResponse](../../sdk/models/operations/deletepaymentspayoutsettingsmemberiddebitcardidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPayments

Use this endpoint to determine the operational status of the payment service by obtaining the current timestamp and service name.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPayments();

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

**Promise<[operations.GetPaymentsResponse](../../sdk/models/operations/getpaymentsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBankingCard

Retrieve a comprehensive list of all stored  Wingspan Wallet cards within the system. This includes both active and deactivated cards.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsBankingCard();

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

**Promise<[operations.GetPaymentsBankingCardResponse](../../sdk/models/operations/getpaymentsbankingcardresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBankingCardId

Fetches detailed information about a card associated with the given unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsBankingCardId({
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
| `request`                                                                                                    | [operations.GetPaymentsBankingCardIdRequest](../../sdk/models/operations/getpaymentsbankingcardidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.GetPaymentsBankingCardIdResponse](../../sdk/models/operations/getpaymentsbankingcardidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBankingInstantPayout

Fetch detailed information about the current status and details of instant payouts configured in the system.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsBankingInstantPayout();

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

**Promise<[operations.GetPaymentsBankingInstantPayoutResponse](../../sdk/models/operations/getpaymentsbankinginstantpayoutresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBankingInstitutionRoutingNumber

Fetches comprehensive information about a banking institution based on the provided routing number.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsBankingInstitutionRoutingNumber({
    routingNumber: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.GetPaymentsBankingInstitutionRoutingNumberRequest](../../sdk/models/operations/getpaymentsbankinginstitutionroutingnumberrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.GetPaymentsBankingInstitutionRoutingNumberResponse](../../sdk/models/operations/getpaymentsbankinginstitutionroutingnumberresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBankingStatement

Fetch a comprehensive list of all bank statements available in the system, providing an overview of financial transactions.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsBankingStatement();

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

**Promise<[operations.GetPaymentsBankingStatementResponse](../../sdk/models/operations/getpaymentsbankingstatementresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBankingStatementId

Fetch details of a specific bank statement using its unique identifier, providing a detailed view of its transactions.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsBankingStatementId({
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
| `request`                                                                                                              | [operations.GetPaymentsBankingStatementIdRequest](../../sdk/models/operations/getpaymentsbankingstatementidrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.GetPaymentsBankingStatementIdResponse](../../sdk/models/operations/getpaymentsbankingstatementidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBankingStatementIdDownload

Retrieve and download the specified bank statement in PDF format using the provided unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsBankingStatementIdDownload({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.GetPaymentsBankingStatementIdDownloadRequest](../../sdk/models/operations/getpaymentsbankingstatementiddownloadrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.GetPaymentsBankingStatementIdDownloadResponse](../../sdk/models/operations/getpaymentsbankingstatementiddownloadresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkCalculation1099Batch

Fetches a comprehensive list of all batches created for bulk 1099 calculations.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsBulkCalculation1099Batch();

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

**Promise<[operations.GetPaymentsBulkCalculation1099BatchResponse](../../sdk/models/operations/getpaymentsbulkcalculation1099batchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkCalculation1099BatchBatchId

Fetches detailed information about a specific batch meant for bulk 1099 calculations using its unique batch identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsBulkCalculation1099BatchBatchId({
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
| `request`                                                                                                                                        | [operations.GetPaymentsBulkCalculation1099BatchBatchIdRequest](../../sdk/models/operations/getpaymentsbulkcalculation1099batchbatchidrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.GetPaymentsBulkCalculation1099BatchBatchIdResponse](../../sdk/models/operations/getpaymentsbulkcalculation1099batchbatchidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkCalculation1099BatchBatchIdItem

Access a comprehensive list of items contained within a specified calculation 1099 batch, useful for verifying or inspecting batch contents.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsBulkCalculation1099BatchBatchIdItem({
    batchId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                | [operations.GetPaymentsBulkCalculation1099BatchBatchIdItemRequest](../../sdk/models/operations/getpaymentsbulkcalculation1099batchbatchiditemrequest.md) | :heavy_check_mark:                                                                                                                                       | The request object to use for the request.                                                                                                               |
| `config`                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                             | :heavy_minus_sign:                                                                                                                                       | Available config options for making requests.                                                                                                            |


### Response

**Promise<[operations.GetPaymentsBulkCalculation1099BatchBatchIdItemResponse](../../sdk/models/operations/getpaymentsbulkcalculation1099batchbatchiditemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkCalculation1099BatchBatchIdItemBatchItemId

Gain insights into a particular item's attributes and data stored within a calculation 1099 batch, enhancing data management and verification.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsBulkCalculation1099BatchBatchIdItemBatchItemId({
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
| `request`                                                                                                                                                                      | [operations.GetPaymentsBulkCalculation1099BatchBatchIdItemBatchItemIdRequest](../../sdk/models/operations/getpaymentsbulkcalculation1099batchbatchiditembatchitemidrequest.md) | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `config`                                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                   | :heavy_minus_sign:                                                                                                                                                             | Available config options for making requests.                                                                                                                                  |


### Response

**Promise<[operations.GetPaymentsBulkCalculation1099BatchBatchIdItemBatchItemIdResponse](../../sdk/models/operations/getpaymentsbulkcalculation1099batchbatchiditembatchitemidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkClientBatch

Provides an overview of all existing bulk client batches, allowing users to quickly ascertain and manage batches created for the purpose of client onboarding or import.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsBulkClientBatch();

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

**Promise<[operations.GetPaymentsBulkClientBatchResponse](../../sdk/models/operations/getpaymentsbulkclientbatchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkClientBatchBatchId

Retrieves the detailed information of a specific item within the bulk client batch using both batch and item unique identifiers.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsBulkClientBatchBatchId({
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
| `request`                                                                                                                      | [operations.GetPaymentsBulkClientBatchBatchIdRequest](../../sdk/models/operations/getpaymentsbulkclientbatchbatchidrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.GetPaymentsBulkClientBatchBatchIdResponse](../../sdk/models/operations/getpaymentsbulkclientbatchbatchidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkClientBatchBatchIdItem

Fetches all items present in the specified bulk client batch, providing a comprehensive view of all client data in the batch.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsBulkClientBatchBatchIdItem({
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
| `request`                                                                                                                              | [operations.GetPaymentsBulkClientBatchBatchIdItemRequest](../../sdk/models/operations/getpaymentsbulkclientbatchbatchiditemrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.GetPaymentsBulkClientBatchBatchIdItemResponse](../../sdk/models/operations/getpaymentsbulkclientbatchbatchiditemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkClientBatchBatchIdItemBatchItemId

Retrieves the detailed information of a specific item within the bulk client batch using both batch and item unique identifiers.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsBulkClientBatchBatchIdItemBatchItemId({
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
| `request`                                                                                                                                                    | [operations.GetPaymentsBulkClientBatchBatchIdItemBatchItemIdRequest](../../sdk/models/operations/getpaymentsbulkclientbatchbatchiditembatchitemidrequest.md) | :heavy_check_mark:                                                                                                                                           | The request object to use for the request.                                                                                                                   |
| `config`                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                 | :heavy_minus_sign:                                                                                                                                           | Available config options for making requests.                                                                                                                |


### Response

**Promise<[operations.GetPaymentsBulkClientBatchBatchIdItemBatchItemIdResponse](../../sdk/models/operations/getpaymentsbulkclientbatchbatchiditembatchitemidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkCollaboratorBatch

Provides a list of all existing bulk collaborator batches, allowing users to view and manage batches that have been created for collaboration purposes.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsBulkCollaboratorBatch();

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

**Promise<[operations.GetPaymentsBulkCollaboratorBatchResponse](../../sdk/models/operations/getpaymentsbulkcollaboratorbatchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkCollaboratorBatchBatchId

Fetches detailed information of a specific bulk collaborator batch, using the provided batch ID.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsBulkCollaboratorBatchBatchId({
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
| `request`                                                                                                                                  | [operations.GetPaymentsBulkCollaboratorBatchBatchIdRequest](../../sdk/models/operations/getpaymentsbulkcollaboratorbatchbatchidrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.GetPaymentsBulkCollaboratorBatchBatchIdResponse](../../sdk/models/operations/getpaymentsbulkcollaboratorbatchbatchidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkCollaboratorBatchBatchIdItem

Provides a comprehensive list of items present within a specified batch of collaborators, identifiable through its unique batch identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsBulkCollaboratorBatchBatchIdItem({
    batchId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                          | [operations.GetPaymentsBulkCollaboratorBatchBatchIdItemRequest](../../sdk/models/operations/getpaymentsbulkcollaboratorbatchbatchiditemrequest.md) | :heavy_check_mark:                                                                                                                                 | The request object to use for the request.                                                                                                         |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.GetPaymentsBulkCollaboratorBatchBatchIdItemResponse](../../sdk/models/operations/getpaymentsbulkcollaboratorbatchbatchiditemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkCollaboratorBatchBatchIdItemBatchItemId

Enables fetching of detailed information about an individual item from a specified batch of collaborators using both the batch and item unique identifiers.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsBulkCollaboratorBatchBatchIdItemBatchItemId({
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
| `request`                                                                                                                                                                | [operations.GetPaymentsBulkCollaboratorBatchBatchIdItemBatchItemIdRequest](../../sdk/models/operations/getpaymentsbulkcollaboratorbatchbatchiditembatchitemidrequest.md) | :heavy_check_mark:                                                                                                                                                       | The request object to use for the request.                                                                                                                               |
| `config`                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                             | :heavy_minus_sign:                                                                                                                                                       | Available config options for making requests.                                                                                                                            |


### Response

**Promise<[operations.GetPaymentsBulkCollaboratorBatchBatchIdItemBatchItemIdResponse](../../sdk/models/operations/getpaymentsbulkcollaboratorbatchbatchiditembatchitemidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkInvoiceBatch

Fetches a list of all the batches created for bulk invoices, providing an overview of the bulk invoicing operations.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsBulkInvoiceBatch();

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

**Promise<[operations.GetPaymentsBulkInvoiceBatchResponse](../../sdk/models/operations/getpaymentsbulkinvoicebatchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkInvoiceBatchBatchId

Allows for the retrieval of a specified batch of bulk invoices by providing its unique batch identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsBulkInvoiceBatchBatchId({
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
| `request`                                                                                                                        | [operations.GetPaymentsBulkInvoiceBatchBatchIdRequest](../../sdk/models/operations/getpaymentsbulkinvoicebatchbatchidrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.GetPaymentsBulkInvoiceBatchBatchIdResponse](../../sdk/models/operations/getpaymentsbulkinvoicebatchbatchidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkInvoiceBatchBatchIdItem

Provides a list of all the items within a specified batch of bulk invoices, identified by its unique batch identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsBulkInvoiceBatchBatchIdItem({
    batchId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.GetPaymentsBulkInvoiceBatchBatchIdItemRequest](../../sdk/models/operations/getpaymentsbulkinvoicebatchbatchiditemrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.GetPaymentsBulkInvoiceBatchBatchIdItemResponse](../../sdk/models/operations/getpaymentsbulkinvoicebatchbatchiditemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkInvoiceBatchBatchIdItemBatchItemId

Fetches detailed information about a specific item located within a designated bulk invoice batch. Useful for obtaining particular item data without browsing the entire batch.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsBulkInvoiceBatchBatchIdItemBatchItemId({
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
| `request`                                                                                                                                                      | [operations.GetPaymentsBulkInvoiceBatchBatchIdItemBatchItemIdRequest](../../sdk/models/operations/getpaymentsbulkinvoicebatchbatchiditembatchitemidrequest.md) | :heavy_check_mark:                                                                                                                                             | The request object to use for the request.                                                                                                                     |
| `config`                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                   | :heavy_minus_sign:                                                                                                                                             | Available config options for making requests.                                                                                                                  |


### Response

**Promise<[operations.GetPaymentsBulkInvoiceBatchBatchIdItemBatchItemIdResponse](../../sdk/models/operations/getpaymentsbulkinvoicebatchbatchiditembatchitemidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkPayableBatch

Fetches a list of all the batches created for bulk payables, providing an overview of the bulk payment operations.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsBulkPayableBatch();

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

**Promise<[operations.GetPaymentsBulkPayableBatchResponse](../../sdk/models/operations/getpaymentsbulkpayablebatchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkPayableBatchBatchId

Fetches detailed information of a specific batch created for bulk payables, using the provided batch ID.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsBulkPayableBatchBatchId({
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
| `request`                                                                                                                        | [operations.GetPaymentsBulkPayableBatchBatchIdRequest](../../sdk/models/operations/getpaymentsbulkpayablebatchbatchidrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.GetPaymentsBulkPayableBatchBatchIdResponse](../../sdk/models/operations/getpaymentsbulkpayablebatchbatchidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkPayableBatchBatchIdImportSummary

Provides an overview and summary of the import process for a given bulk payable batch, allowing for tracking of imported items, errors, and other relevant batch statistics.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsBulkPayableBatchBatchIdImportSummary({
    batchId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                  | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                  | [operations.GetPaymentsBulkPayableBatchBatchIdImportSummaryRequest](../../sdk/models/operations/getpaymentsbulkpayablebatchbatchidimportsummaryrequest.md) | :heavy_check_mark:                                                                                                                                         | The request object to use for the request.                                                                                                                 |
| `config`                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                               | :heavy_minus_sign:                                                                                                                                         | Available config options for making requests.                                                                                                              |


### Response

**Promise<[operations.GetPaymentsBulkPayableBatchBatchIdImportSummaryResponse](../../sdk/models/operations/getpaymentsbulkpayablebatchbatchidimportsummaryresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkPayableBatchBatchIdItem

Fetches and lists all individual payable items associated with a specified bulk payable batch. Useful for tracking and verifying batch details.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsBulkPayableBatchBatchIdItem({
    batchId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.GetPaymentsBulkPayableBatchBatchIdItemRequest](../../sdk/models/operations/getpaymentsbulkpayablebatchbatchiditemrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.GetPaymentsBulkPayableBatchBatchIdItemResponse](../../sdk/models/operations/getpaymentsbulkpayablebatchbatchiditemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkPayableBatchBatchIdItemBatchItemId

Fetches detailed information of a specific item within a bulk payable batch, using both the batch ID and the item ID.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsBulkPayableBatchBatchIdItemBatchItemId({
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
| `request`                                                                                                                                                      | [operations.GetPaymentsBulkPayableBatchBatchIdItemBatchItemIdRequest](../../sdk/models/operations/getpaymentsbulkpayablebatchbatchiditembatchitemidrequest.md) | :heavy_check_mark:                                                                                                                                             | The request object to use for the request.                                                                                                                     |
| `config`                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                   | :heavy_minus_sign:                                                                                                                                             | Available config options for making requests.                                                                                                                  |


### Response

**Promise<[operations.GetPaymentsBulkPayableBatchBatchIdItemBatchItemIdResponse](../../sdk/models/operations/getpaymentsbulkpayablebatchbatchiditembatchitemidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsClientDeduction

Fetches a comprehensive list of all client deductions present in the system.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsClientDeduction();

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

**Promise<[operations.GetPaymentsClientDeductionResponse](../../sdk/models/operations/getpaymentsclientdeductionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsClientDeductionId

Provides detailed information for a client deduction based on its unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsClientDeductionId({
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
| `request`                                                                                                            | [operations.GetPaymentsClientDeductionIdRequest](../../sdk/models/operations/getpaymentsclientdeductionidrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.GetPaymentsClientDeductionIdResponse](../../sdk/models/operations/getpaymentsclientdeductionidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsClientInvoice

Fetch a comprehensive list of invoices that have been generated by a client, offering an overview of all client-related billing records.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsClientInvoice();

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

**Promise<[operations.GetPaymentsClientInvoiceResponse](../../sdk/models/operations/getpaymentsclientinvoiceresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsClientInvoiceTemplate

Fetches a comprehensive list of all invoice templates created by clients in the system.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsClientInvoiceTemplate();

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

**Promise<[operations.GetPaymentsClientInvoiceTemplateResponse](../../sdk/models/operations/getpaymentsclientinvoicetemplateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsClientInvoiceTemplateId

Provides details of the client-generated invoice template associated with the provided unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsClientInvoiceTemplateId({
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
| `request`                                                                                                                        | [operations.GetPaymentsClientInvoiceTemplateIdRequest](../../sdk/models/operations/getpaymentsclientinvoicetemplateidrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.GetPaymentsClientInvoiceTemplateIdResponse](../../sdk/models/operations/getpaymentsclientinvoicetemplateidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsClientInvoiceId

Retrieve detailed information of an individual invoice created by a client using its unique ID for in-depth billing analysis.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsClientInvoiceId({
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
| `request`                                                                                                        | [operations.GetPaymentsClientInvoiceIdRequest](../../sdk/models/operations/getpaymentsclientinvoiceidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.GetPaymentsClientInvoiceIdResponse](../../sdk/models/operations/getpaymentsclientinvoiceidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsClientInvoiceInvoiceIdFees

Obtain a detailed breakdown of all the fees associated with a specific client's invoice, identified by its unique ID.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsClientInvoiceInvoiceIdFees({
    invoiceId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.GetPaymentsClientInvoiceInvoiceIdFeesRequest](../../sdk/models/operations/getpaymentsclientinvoiceinvoiceidfeesrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.GetPaymentsClientInvoiceInvoiceIdFeesResponse](../../sdk/models/operations/getpaymentsclientinvoiceinvoiceidfeesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsCollaborator

Fetch a comprehensive list of all collaborators currently registered in the system.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsCollaborator();

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

**Promise<[operations.GetPaymentsCollaboratorResponse](../../sdk/models/operations/getpaymentscollaboratorresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsCollaboratorDeduction

Fetch a list of all deduction entries currently registered for collaborators.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsCollaboratorDeduction();

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

**Promise<[operations.GetPaymentsCollaboratorDeductionResponse](../../sdk/models/operations/getpaymentscollaboratordeductionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsCollaboratorDeductionId

Fetch details of a specific deduction entry for a collaborator based on its unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsCollaboratorDeductionId({
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
| `request`                                                                                                                        | [operations.GetPaymentsCollaboratorDeductionIdRequest](../../sdk/models/operations/getpaymentscollaboratordeductionidrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.GetPaymentsCollaboratorDeductionIdResponse](../../sdk/models/operations/getpaymentscollaboratordeductionidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsCollaboratorGroup

Fetch a comprehensive list of all collaborator groups created by the client, showcasing configurations and member details.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsCollaboratorGroup();

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

**Promise<[operations.GetPaymentsCollaboratorGroupResponse](../../sdk/models/operations/getpaymentscollaboratorgroupresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsCollaboratorGroupId

Fetch detailed configuration and attributes associated with a specific collaborator group.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsCollaboratorGroupId({
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
| `request`                                                                                                                | [operations.GetPaymentsCollaboratorGroupIdRequest](../../sdk/models/operations/getpaymentscollaboratorgroupidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.GetPaymentsCollaboratorGroupIdResponse](../../sdk/models/operations/getpaymentscollaboratorgroupidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## ~~getPaymentsCollaboratorSettingsAdditionalData~~

[Deprecated - use /payments/custom-fields] Fetch all custom data fields that are associated with the memberClient objects, giving insight into additional details between collaborators and members.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsCollaboratorSettingsAdditionalData();

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

**Promise<[operations.GetPaymentsCollaboratorSettingsAdditionalDataResponse](../../sdk/models/operations/getpaymentscollaboratorsettingsadditionaldataresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## ~~getPaymentsCollaboratorSettingsAdditionalDataId~~

Deprecated - use /payments/custom-fields/:id

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsCollaboratorSettingsAdditionalDataId({
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
| `request`                                                                                                                                                  | [operations.GetPaymentsCollaboratorSettingsAdditionalDataIdRequest](../../sdk/models/operations/getpaymentscollaboratorsettingsadditionaldataidrequest.md) | :heavy_check_mark:                                                                                                                                         | The request object to use for the request.                                                                                                                 |
| `config`                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                               | :heavy_minus_sign:                                                                                                                                         | Available config options for making requests.                                                                                                              |


### Response

**Promise<[operations.GetPaymentsCollaboratorSettingsAdditionalDataIdResponse](../../sdk/models/operations/getpaymentscollaboratorsettingsadditionaldataidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsCollaboratorSettingsEligibilityRequirement

List and display all the set eligibility requirements for collaborators.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsCollaboratorSettingsEligibilityRequirement();

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

**Promise<[operations.GetPaymentsCollaboratorSettingsEligibilityRequirementResponse](../../sdk/models/operations/getpaymentscollaboratorsettingseligibilityrequirementresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsCollaboratorSettingsEligibilityRequirementId

Fetch details for a given eligibility requirement based on its unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsCollaboratorSettingsEligibilityRequirementId({
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
| `request`                                                                                                                                                                  | [operations.GetPaymentsCollaboratorSettingsEligibilityRequirementIdRequest](../../sdk/models/operations/getpaymentscollaboratorsettingseligibilityrequirementidrequest.md) | :heavy_check_mark:                                                                                                                                                         | The request object to use for the request.                                                                                                                                 |
| `config`                                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                               | :heavy_minus_sign:                                                                                                                                                         | Available config options for making requests.                                                                                                                              |


### Response

**Promise<[operations.GetPaymentsCollaboratorSettingsEligibilityRequirementIdResponse](../../sdk/models/operations/getpaymentscollaboratorsettingseligibilityrequirementidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsCollaboratorSettingsPaymentEligibility

Obtain a list of all payment eligibility requirements configured for collaborators.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsCollaboratorSettingsPaymentEligibility();

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

**Promise<[operations.GetPaymentsCollaboratorSettingsPaymentEligibilityResponse](../../sdk/models/operations/getpaymentscollaboratorsettingspaymenteligibilityresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsCollaboratorSettingsPaymentEligibilityId

Fetch detailed information about a particular payment eligibility requirement using its unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsCollaboratorSettingsPaymentEligibilityId({
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
| `request`                                                                                                                                                          | [operations.GetPaymentsCollaboratorSettingsPaymentEligibilityIdRequest](../../sdk/models/operations/getpaymentscollaboratorsettingspaymenteligibilityidrequest.md) | :heavy_check_mark:                                                                                                                                                 | The request object to use for the request.                                                                                                                         |
| `config`                                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                       | :heavy_minus_sign:                                                                                                                                                 | Available config options for making requests.                                                                                                                      |


### Response

**Promise<[operations.GetPaymentsCollaboratorSettingsPaymentEligibilityIdResponse](../../sdk/models/operations/getpaymentscollaboratorsettingspaymenteligibilityidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsCollaboratorId

Fetch detailed information about a specific collaborator using its unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsCollaboratorId({
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
| `request`                                                                                                      | [operations.GetPaymentsCollaboratorIdRequest](../../sdk/models/operations/getpaymentscollaboratoridrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetPaymentsCollaboratorIdResponse](../../sdk/models/operations/getpaymentscollaboratoridresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsCollaboratorIdDownload1099YearIndex

Facilitates downloading of the specified 1099 form for a given collaborator, corresponding to the provided year and index.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsCollaboratorIdDownload1099YearIndex({
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

| Parameter                                                                                                                                                | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                | [operations.GetPaymentsCollaboratorIdDownload1099YearIndexRequest](../../sdk/models/operations/getpaymentscollaboratoriddownload1099yearindexrequest.md) | :heavy_check_mark:                                                                                                                                       | The request object to use for the request.                                                                                                               |
| `config`                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                             | :heavy_minus_sign:                                                                                                                                       | Available config options for making requests.                                                                                                            |


### Response

**Promise<[operations.GetPaymentsCollaboratorIdDownload1099YearIndexResponse](../../sdk/models/operations/getpaymentscollaboratoriddownload1099yearindexresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsCollaboratorIdDownloadW9

Enables the downloading of the W9 form for the specified collaborator, ensuring compliance and streamlined financial procedures.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsCollaboratorIdDownloadW9({
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
| `request`                                                                                                                          | [operations.GetPaymentsCollaboratorIdDownloadW9Request](../../sdk/models/operations/getpaymentscollaboratoriddownloadw9request.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.GetPaymentsCollaboratorIdDownloadW9Response](../../sdk/models/operations/getpaymentscollaboratoriddownloadw9response.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsCollaboratorIdEvents

Fetch a list of all events linked to a collaborator based on the provided collaborator ID.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsCollaboratorIdEvents({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.GetPaymentsCollaboratorIdEventsRequest](../../sdk/models/operations/getpaymentscollaboratorideventsrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetPaymentsCollaboratorIdEventsResponse](../../sdk/models/operations/getpaymentscollaboratorideventsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsCustomFields

Obtain a list of all user-defined custom fields associated with payments.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsCustomFields();

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

**Promise<[operations.GetPaymentsCustomFieldsResponse](../../sdk/models/operations/getpaymentscustomfieldsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsCustomFieldsId

Retrieve detailed information for a custom field based on its unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsCustomFieldsId({
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
| `request`                                                                                                      | [operations.GetPaymentsCustomFieldsIdRequest](../../sdk/models/operations/getpaymentscustomfieldsidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetPaymentsCustomFieldsIdResponse](../../sdk/models/operations/getpaymentscustomfieldsidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsInvoice

Fetch a complete list of invoices associated with members, providing a comprehensive overview of all member-related billing details.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsInvoice();

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

**Promise<[operations.GetPaymentsInvoiceResponse](../../sdk/models/operations/getpaymentsinvoiceresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsInvoiceTemplate

Fetches a comprehensive list of all invoice templates in the system.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsInvoiceTemplate();

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

**Promise<[operations.GetPaymentsInvoiceTemplateResponse](../../sdk/models/operations/getpaymentsinvoicetemplateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsInvoiceTemplateId

Fetches details of the invoice template corresponding to the provided unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsInvoiceTemplateId({
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
| `request`                                                                                                            | [operations.GetPaymentsInvoiceTemplateIdRequest](../../sdk/models/operations/getpaymentsinvoicetemplateidrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.GetPaymentsInvoiceTemplateIdResponse](../../sdk/models/operations/getpaymentsinvoicetemplateidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsInvoiceId

Retrieve the specifics of an individual invoice associated with a member using its unique ID. Ideal for diving into invoice details.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsInvoiceId({
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
| `request`                                                                                            | [operations.GetPaymentsInvoiceIdRequest](../../sdk/models/operations/getpaymentsinvoiceidrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetPaymentsInvoiceIdResponse](../../sdk/models/operations/getpaymentsinvoiceidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsMcc

This endpoint provides a comprehensive list of available Merchant Category Codes (MCC) which are used to classify businesses by the type of services or goods they provide.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsMcc();

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

**Promise<[operations.GetPaymentsMccResponse](../../sdk/models/operations/getpaymentsmccresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsMemberClient

Retrieve a detailed list showcasing all the existing associations between members and clients in the system.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsMemberClient();

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

**Promise<[operations.GetPaymentsMemberClientResponse](../../sdk/models/operations/getpaymentsmemberclientresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsMemberClientId

Fetches comprehensive details of the association between a member and a client using the provided unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsMemberClientId({
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
| `request`                                                                                                      | [operations.GetPaymentsMemberClientIdRequest](../../sdk/models/operations/getpaymentsmemberclientidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetPaymentsMemberClientIdResponse](../../sdk/models/operations/getpaymentsmemberclientidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsPayable

Provides an list of all Payables associated with a specific client, facilitating easier management and overview of the client's financial obligations.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsPayable();

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

**Promise<[operations.GetPaymentsPayableResponse](../../sdk/models/operations/getpaymentspayableresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsPayableId

This API endpoint is designed to fetch the detailed Payable information of a member using a unique Payable ID.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsPayableId({
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
| `request`                                                                                            | [operations.GetPaymentsPayableIdRequest](../../sdk/models/operations/getpaymentspayableidrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetPaymentsPayableIdResponse](../../sdk/models/operations/getpaymentspayableidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsPayoutSettingsId

Fetches the payout configuration, including linked debit cards and payout preferences, for a specific member.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsPayoutSettingsId({
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
| `request`                                                                                                          | [operations.GetPaymentsPayoutSettingsIdRequest](../../sdk/models/operations/getpaymentspayoutsettingsidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.GetPaymentsPayoutSettingsIdResponse](../../sdk/models/operations/getpaymentspayoutsettingsidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsPayoutSettingsMemberIdDebitCard

Retrieves a list of all debit cards linked to a member's profile for payout purposes.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsPayoutSettingsMemberIdDebitCard({
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
| `request`                                                                                                                                        | [operations.GetPaymentsPayoutSettingsMemberIdDebitCardRequest](../../sdk/models/operations/getpaymentspayoutsettingsmemberiddebitcardrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.GetPaymentsPayoutSettingsMemberIdDebitCardResponse](../../sdk/models/operations/getpaymentspayoutsettingsmemberiddebitcardresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsPayoutSettingsMemberIdDebitCardId

Fetches detailed information of a specific debit card linked to a member's profile for payout purposes.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsPayoutSettingsMemberIdDebitCardId({
    id: "<ID>",
    memberId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                            | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                            | [operations.GetPaymentsPayoutSettingsMemberIdDebitCardIdRequest](../../sdk/models/operations/getpaymentspayoutsettingsmemberiddebitcardidrequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.GetPaymentsPayoutSettingsMemberIdDebitCardIdResponse](../../sdk/models/operations/getpaymentspayoutsettingsmemberiddebitcardidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsPayrollSettingsId

Fetch the detailed payroll settings associated with the provided unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsPayrollSettingsId({
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
| `request`                                                                                                            | [operations.GetPaymentsPayrollSettingsIdRequest](../../sdk/models/operations/getpaymentspayrollsettingsidrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.GetPaymentsPayrollSettingsIdResponse](../../sdk/models/operations/getpaymentspayrollsettingsidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsPayrollImmediatePayable

Fetches all payables that have been approved and are awaiting immediate payroll processing. This provides a quick view of all payments that are due for immediate payroll execution.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsPayrollImmediatePayable();

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

**Promise<[operations.GetPaymentsPayrollImmediatePayableResponse](../../sdk/models/operations/getpaymentspayrollimmediatepayableresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsReportsAgingLineItems

Retrieve a comprehensive report detailing line items that have been open for a set number of days.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsReportsAgingLineItems();

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

**Promise<[operations.GetPaymentsReportsAgingLineItemsResponse](../../sdk/models/operations/getpaymentsreportsaginglineitemsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsReportsAgingPayables

Access a detailed report that showcases the list of payables categorized by age.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsReportsAgingPayables();

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

**Promise<[operations.GetPaymentsReportsAgingPayablesResponse](../../sdk/models/operations/getpaymentsreportsagingpayablesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsReportsCollaborators

Fetches comprehensive data on all collaborators, including their activities and current status, as listed in the reports.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsReportsCollaborators();

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

**Promise<[operations.GetPaymentsReportsCollaboratorsResponse](../../sdk/models/operations/getpaymentsreportscollaboratorsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsReportsCollaboratorsPayablesSummary

Gathers and presents a concise summary showcasing the payable amounts due to each collaborator, helping in financial planning and payout strategies.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsReportsCollaboratorsPayablesSummary();

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

**Promise<[operations.GetPaymentsReportsCollaboratorsPayablesSummaryResponse](../../sdk/models/operations/getpaymentsreportscollaboratorspayablessummaryresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsReportsPayrollPayrollId

Offers a deep dive into the payables connected to a specific payroll run, facilitating better management and reconciliation of payroll-related finances.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsReportsPayrollPayrollId({
    payrollId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.GetPaymentsReportsPayrollPayrollIdRequest](../../sdk/models/operations/getpaymentsreportspayrollpayrollidrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.GetPaymentsReportsPayrollPayrollIdResponse](../../sdk/models/operations/getpaymentsreportspayrollpayrollidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsServiceBankingMemberIdApplication

Get the application link required for a member to initiate the creation of a clearing bank account.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsServiceBankingMemberIdApplication({
    memberId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                            | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                            | [operations.GetPaymentsServiceBankingMemberIdApplicationRequest](../../sdk/models/operations/getpaymentsservicebankingmemberidapplicationrequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.GetPaymentsServiceBankingMemberIdApplicationResponse](../../sdk/models/operations/getpaymentsservicebankingmemberidapplicationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsSummaryPayables

This endpoint provides a comprehensive summary of all the payables, offering insights into the current state of pending and completed payments. Ideal for clients and financial departments looking for a snapshot view of their payment obligations.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsSummaryPayables();

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

**Promise<[operations.GetPaymentsSummaryPayablesResponse](../../sdk/models/operations/getpaymentssummarypayablesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsV2Client

Fetches a comprehensive list of clients formatted in the V2 standard, providing an overview of all client data.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsV2Client();

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

**Promise<[operations.GetPaymentsV2ClientResponse](../../sdk/models/operations/getpaymentsv2clientresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsV2ClientClientId

Fetches detailed information of a specific client, identified by the clientId, in the V2 format.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsV2ClientClientId({
    clientId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.GetPaymentsV2ClientClientIdRequest](../../sdk/models/operations/getpaymentsv2clientclientidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.GetPaymentsV2ClientClientIdResponse](../../sdk/models/operations/getpaymentsv2clientclientidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsV2Collaborator

Fetches a comprehensive list of collaborators formatted in the V2 standard, providing an overview of all collaborator data.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsV2Collaborator();

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

**Promise<[operations.GetPaymentsV2CollaboratorResponse](../../sdk/models/operations/getpaymentsv2collaboratorresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsV2CollaboratorMemberId

Fetches detailed information of a specific collaborator, identified by the memberId, in the V2 format.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.getPaymentsV2CollaboratorMemberId({
    memberId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.GetPaymentsV2CollaboratorMemberIdRequest](../../sdk/models/operations/getpaymentsv2collaboratormemberidrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.GetPaymentsV2CollaboratorMemberIdResponse](../../sdk/models/operations/getpaymentsv2collaboratormemberidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsBankingCardId

Updates specific information about a card using the provided data.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { CardUpdateRequestStatus } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.patchPaymentsBankingCardId({
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

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.PatchPaymentsBankingCardIdRequest](../../sdk/models/operations/patchpaymentsbankingcardidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.PatchPaymentsBankingCardIdResponse](../../sdk/models/operations/patchpaymentsbankingcardidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsBankingCardIdToken

Validates the received verification code and, if correct, returns a token for card operations.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.patchPaymentsBankingCardIdToken({
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

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.PatchPaymentsBankingCardIdTokenRequest](../../sdk/models/operations/patchpaymentsbankingcardidtokenrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.PatchPaymentsBankingCardIdTokenResponse](../../sdk/models/operations/patchpaymentsbankingcardidtokenresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsBulkCalculation1099BatchBatchId

Provides the ability to update or alter attributes of a given batch for bulk 1099 calculations by using its unique batch identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkBatchUpdateStatus } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.patchPaymentsBulkCalculation1099BatchBatchId({
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

| Parameter                                                                                                                                            | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                            | [operations.PatchPaymentsBulkCalculation1099BatchBatchIdRequest](../../sdk/models/operations/patchpaymentsbulkcalculation1099batchbatchidrequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.PatchPaymentsBulkCalculation1099BatchBatchIdResponse](../../sdk/models/operations/patchpaymentsbulkcalculation1099batchbatchidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsBulkCalculation1099BatchBatchIdItemBatchItemId

Make alterations or updates to a specific item within the calculation 1099 batch, ensuring accurate and up-to-date record-keeping.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkCalculation1099ItemUpdateCalculationType } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.patchPaymentsBulkCalculation1099BatchBatchIdItemBatchItemId({
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

| Parameter                                                                                                                                                                          | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                          | [operations.PatchPaymentsBulkCalculation1099BatchBatchIdItemBatchItemIdRequest](../../sdk/models/operations/patchpaymentsbulkcalculation1099batchbatchiditembatchitemidrequest.md) | :heavy_check_mark:                                                                                                                                                                 | The request object to use for the request.                                                                                                                                         |
| `config`                                                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                 | Available config options for making requests.                                                                                                                                      |


### Response

**Promise<[operations.PatchPaymentsBulkCalculation1099BatchBatchIdItemBatchItemIdResponse](../../sdk/models/operations/patchpaymentsbulkcalculation1099batchbatchiditembatchitemidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsBulkClientBatchBatchId

Allows modification of the details of a specific item within the bulk client batch, using the provided item and batch identifiers.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkBatchUpdateStatus } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.patchPaymentsBulkClientBatchBatchId({
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

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.PatchPaymentsBulkClientBatchBatchIdRequest](../../sdk/models/operations/patchpaymentsbulkclientbatchbatchidrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.PatchPaymentsBulkClientBatchBatchIdResponse](../../sdk/models/operations/patchpaymentsbulkclientbatchbatchidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsBulkClientBatchBatchIdItemBatchItemId

Allows modification of the details of a specific item within the bulk client batch, using the provided item and batch identifiers.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { AutoPayRequirement, BulkClientItemUpdateClientStatus, ShareTaxDocument } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.patchPaymentsBulkClientBatchBatchIdItemBatchItemId({
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

| Parameter                                                                                                                                                        | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                        | [operations.PatchPaymentsBulkClientBatchBatchIdItemBatchItemIdRequest](../../sdk/models/operations/patchpaymentsbulkclientbatchbatchiditembatchitemidrequest.md) | :heavy_check_mark:                                                                                                                                               | The request object to use for the request.                                                                                                                       |
| `config`                                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                     | :heavy_minus_sign:                                                                                                                                               | Available config options for making requests.                                                                                                                    |


### Response

**Promise<[operations.PatchPaymentsBulkClientBatchBatchIdItemBatchItemIdResponse](../../sdk/models/operations/patchpaymentsbulkclientbatchbatchiditembatchitemidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsBulkCollaboratorBatchBatchId

Allows for updating or altering the details and items within a specific bulk collaborator batch using the given batch ID.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkBatchUpdateStatus } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.patchPaymentsBulkCollaboratorBatchBatchId({
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

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.PatchPaymentsBulkCollaboratorBatchBatchIdRequest](../../sdk/models/operations/patchpaymentsbulkcollaboratorbatchbatchidrequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.PatchPaymentsBulkCollaboratorBatchBatchIdResponse](../../sdk/models/operations/patchpaymentsbulkcollaboratorbatchbatchidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

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

  const res = await sdk.patchPaymentsBulkCollaboratorBatchBatchIdItemBatchItemId({
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

| Parameter                                                                                                                                                                    | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                    | [operations.PatchPaymentsBulkCollaboratorBatchBatchIdItemBatchItemIdRequest](../../sdk/models/operations/patchpaymentsbulkcollaboratorbatchbatchiditembatchitemidrequest.md) | :heavy_check_mark:                                                                                                                                                           | The request object to use for the request.                                                                                                                                   |
| `config`                                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                 | :heavy_minus_sign:                                                                                                                                                           | Available config options for making requests.                                                                                                                                |


### Response

**Promise<[operations.PatchPaymentsBulkCollaboratorBatchBatchIdItemBatchItemIdResponse](../../sdk/models/operations/patchpaymentsbulkcollaboratorbatchbatchiditembatchitemidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsBulkInvoiceBatchBatchId

Enables the user to update or modify the attributes of a given batch of bulk invoices by specifying its unique batch identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkInvoiceBatchUpdateStatus } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.patchPaymentsBulkInvoiceBatchBatchId({
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

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.PatchPaymentsBulkInvoiceBatchBatchIdRequest](../../sdk/models/operations/patchpaymentsbulkinvoicebatchbatchidrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.PatchPaymentsBulkInvoiceBatchBatchIdResponse](../../sdk/models/operations/patchpaymentsbulkinvoicebatchbatchidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsBulkInvoiceBatchBatchIdItemBatchItemId

Allows for updates or edits to be made to a specific items details within an existing bulk invoice batch. Enhances the flexibility and management of invoice data.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkInvoiceItemUpdateAcceptedPaymentMethods, BulkInvoiceItemUpdateInvoiceStatus } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.patchPaymentsBulkInvoiceBatchBatchIdItemBatchItemId({
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

| Parameter                                                                                                                                                          | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                          | [operations.PatchPaymentsBulkInvoiceBatchBatchIdItemBatchItemIdRequest](../../sdk/models/operations/patchpaymentsbulkinvoicebatchbatchiditembatchitemidrequest.md) | :heavy_check_mark:                                                                                                                                                 | The request object to use for the request.                                                                                                                         |
| `config`                                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                       | :heavy_minus_sign:                                                                                                                                                 | Available config options for making requests.                                                                                                                      |


### Response

**Promise<[operations.PatchPaymentsBulkInvoiceBatchBatchIdItemBatchItemIdResponse](../../sdk/models/operations/patchpaymentsbulkinvoicebatchbatchiditembatchitemidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsBulkPayableBatchBatchId

Updates the information or items of a specific bulk payable batch, given its unique batch ID.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkPayableBatchUpdateStatus } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.patchPaymentsBulkPayableBatchBatchId({
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

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.PatchPaymentsBulkPayableBatchBatchIdRequest](../../sdk/models/operations/patchpaymentsbulkpayablebatchbatchidrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.PatchPaymentsBulkPayableBatchBatchIdResponse](../../sdk/models/operations/patchpaymentsbulkpayablebatchbatchidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsBulkPayableBatchBatchIdItemBatchItemId

Updates the details or status of a specific item within a bulk payable batch, given both the batch ID and the item ID.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkPayableItemUpdatePayableStatus, BulkPayableItemUpdateWorkflowSubStatus } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.patchPaymentsBulkPayableBatchBatchIdItemBatchItemId({
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

| Parameter                                                                                                                                                          | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                          | [operations.PatchPaymentsBulkPayableBatchBatchIdItemBatchItemIdRequest](../../sdk/models/operations/patchpaymentsbulkpayablebatchbatchiditembatchitemidrequest.md) | :heavy_check_mark:                                                                                                                                                 | The request object to use for the request.                                                                                                                         |
| `config`                                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                       | :heavy_minus_sign:                                                                                                                                                 | Available config options for making requests.                                                                                                                      |


### Response

**Promise<[operations.PatchPaymentsBulkPayableBatchBatchIdItemBatchItemIdResponse](../../sdk/models/operations/patchpaymentsbulkpayablebatchbatchiditembatchitemidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsClientDeductionId

Allows for updating specific details or attributes of an existing client deduction.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { DeductionUpdateRequestCurrency, DeductionUpdateRequestType } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.patchPaymentsClientDeductionId({
    deductionUpdateRequest: {},
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
| `request`                                                                                                                | [operations.PatchPaymentsClientDeductionIdRequest](../../sdk/models/operations/patchpaymentsclientdeductionidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.PatchPaymentsClientDeductionIdResponse](../../sdk/models/operations/patchpaymentsclientdeductionidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsClientInvoiceTemplateId

Updates the specified client-generated invoice template with the provided modifications.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.patchPaymentsClientInvoiceTemplateId({
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

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.PatchPaymentsClientInvoiceTemplateIdRequest](../../sdk/models/operations/patchpaymentsclientinvoicetemplateidrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.PatchPaymentsClientInvoiceTemplateIdResponse](../../sdk/models/operations/patchpaymentsclientinvoicetemplateidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsClientInvoiceId

Allows for modifications to a client-generated invoice using its unique ID, ensuring billing details remain current and accurate.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { ClientInvoiceUpdateRequestStatus } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.patchPaymentsClientInvoiceId({
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

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.PatchPaymentsClientInvoiceIdRequest](../../sdk/models/operations/patchpaymentsclientinvoiceidrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.PatchPaymentsClientInvoiceIdResponse](../../sdk/models/operations/patchpaymentsclientinvoiceidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsCollaboratorDeductionId

Update attributes or data related to an existing deduction entry for a collaborator.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { DeductionUpdateRequestCurrency, DeductionUpdateRequestType } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.patchPaymentsCollaboratorDeductionId({
    deductionUpdateRequest: {},
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.PatchPaymentsCollaboratorDeductionIdRequest](../../sdk/models/operations/patchpaymentscollaboratordeductionidrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.PatchPaymentsCollaboratorDeductionIdResponse](../../sdk/models/operations/patchpaymentscollaboratordeductionidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsCollaboratorGroupId

Update specific attributes or configuration details of an existing collaborator group.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.patchPaymentsCollaboratorGroupId({
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

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.PatchPaymentsCollaboratorGroupIdRequest](../../sdk/models/operations/patchpaymentscollaboratorgroupidrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.PatchPaymentsCollaboratorGroupIdResponse](../../sdk/models/operations/patchpaymentscollaboratorgroupidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsCollaboratorGroupIdEligibilityRequirementEligibilityRequirementId

Update details or attributes of a specific eligibility requirement linked to a collaborator group.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.patchPaymentsCollaboratorGroupIdEligibilityRequirementEligibilityRequirementId({
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

| Parameter                                                                                                                                                                                                                | Type                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                 | Description                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                | [operations.PatchPaymentsCollaboratorGroupIdEligibilityRequirementEligibilityRequirementIdRequest](../../sdk/models/operations/patchpaymentscollaboratorgroupideligibilityrequirementeligibilityrequirementidrequest.md) | :heavy_check_mark:                                                                                                                                                                                                       | The request object to use for the request.                                                                                                                                                                               |
| `config`                                                                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                       | Available config options for making requests.                                                                                                                                                                            |


### Response

**Promise<[operations.PatchPaymentsCollaboratorGroupIdEligibilityRequirementEligibilityRequirementIdResponse](../../sdk/models/operations/patchpaymentscollaboratorgroupideligibilityrequirementeligibilityrequirementidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## ~~patchPaymentsCollaboratorSettingsAdditionalDataId~~

[Deprecated - use /payments/custom-fields] Update details or attributes of an existing custom data point associated with the relationship between a collaborator and a member.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { AdditionalDataUpdateRequestResourceType, AdditionalDataUpdateRequestType } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.patchPaymentsCollaboratorSettingsAdditionalDataId({
    additionalDataUpdateRequest: {},
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
| `request`                                                                                                                                                      | [operations.PatchPaymentsCollaboratorSettingsAdditionalDataIdRequest](../../sdk/models/operations/patchpaymentscollaboratorsettingsadditionaldataidrequest.md) | :heavy_check_mark:                                                                                                                                             | The request object to use for the request.                                                                                                                     |
| `config`                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                   | :heavy_minus_sign:                                                                                                                                             | Available config options for making requests.                                                                                                                  |


### Response

**Promise<[operations.PatchPaymentsCollaboratorSettingsAdditionalDataIdResponse](../../sdk/models/operations/patchpaymentscollaboratorsettingsadditionaldataidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsCollaboratorSettingsEligibilityRequirementId

Update specific details or attributes of an existing eligibility requirement.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { EligibilityRequirementUpdateRequestRequirementType } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.patchPaymentsCollaboratorSettingsEligibilityRequirementId({
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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchPaymentsCollaboratorSettingsEligibilityRequirementIdRequest](../../sdk/models/operations/patchpaymentscollaboratorsettingseligibilityrequirementidrequest.md) | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `config`                                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                   | :heavy_minus_sign:                                                                                                                                                             | Available config options for making requests.                                                                                                                                  |


### Response

**Promise<[operations.PatchPaymentsCollaboratorSettingsEligibilityRequirementIdResponse](../../sdk/models/operations/patchpaymentscollaboratorsettingseligibilityrequirementidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsCollaboratorSettingsPaymentEligibilityId

Update attributes or criteria of an existing payment eligibility requirement using its unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.patchPaymentsCollaboratorSettingsPaymentEligibilityId({
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

| Parameter                                                                                                                                                              | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                              | [operations.PatchPaymentsCollaboratorSettingsPaymentEligibilityIdRequest](../../sdk/models/operations/patchpaymentscollaboratorsettingspaymenteligibilityidrequest.md) | :heavy_check_mark:                                                                                                                                                     | The request object to use for the request.                                                                                                                             |
| `config`                                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                           | :heavy_minus_sign:                                                                                                                                                     | Available config options for making requests.                                                                                                                          |


### Response

**Promise<[operations.PatchPaymentsCollaboratorSettingsPaymentEligibilityIdResponse](../../sdk/models/operations/patchpaymentscollaboratorsettingspaymenteligibilityidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsCollaboratorId

Update specific details or attributes related to an existing collaborator.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  AutoPayStrategy,
  Ce853dbef33b2b91880690c84bc5314340c1301fd7b3503dd6ce79c844e2a481CompanyStructure,
  CollaboratorForm1099BalancesUpdateRequestStatus,
  CollaboratorUpdateRequestStatus,
  DeliveryMethod,
  Eighta9c6cb49482a98cdd603ff09858cdc3e5ef6ad9807c876c4161d925a96694a5Status,
  VerificationStratgy,
} from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.patchPaymentsCollaboratorId({
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

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.PatchPaymentsCollaboratorIdRequest](../../sdk/models/operations/patchpaymentscollaboratoridrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.PatchPaymentsCollaboratorIdResponse](../../sdk/models/operations/patchpaymentscollaboratoridresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsCollaboratorIdAddGroupGroupId

Add the specified collaborator to the designated group, allowing group-specific configurations and permissions.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.patchPaymentsCollaboratorIdAddGroupGroupId({
    groupId: "string",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.PatchPaymentsCollaboratorIdAddGroupGroupIdRequest](../../sdk/models/operations/patchpaymentscollaboratoridaddgroupgroupidrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.PatchPaymentsCollaboratorIdAddGroupGroupIdResponse](../../sdk/models/operations/patchpaymentscollaboratoridaddgroupgroupidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsCollaboratorIdRemoveGroupGroupId

Remove the collaborator from the designated group, revoking any group-specific configurations and permissions.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.patchPaymentsCollaboratorIdRemoveGroupGroupId({
    groupId: "string",
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
| `request`                                                                                                                                              | [operations.PatchPaymentsCollaboratorIdRemoveGroupGroupIdRequest](../../sdk/models/operations/patchpaymentscollaboratoridremovegroupgroupidrequest.md) | :heavy_check_mark:                                                                                                                                     | The request object to use for the request.                                                                                                             |
| `config`                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                           | :heavy_minus_sign:                                                                                                                                     | Available config options for making requests.                                                                                                          |


### Response

**Promise<[operations.PatchPaymentsCollaboratorIdRemoveGroupGroupIdResponse](../../sdk/models/operations/patchpaymentscollaboratoridremovegroupgroupidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsCustomFieldsId

Update specific attributes or data for an existing custom field.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { AdditionalDataUpdateRequestResourceType, AdditionalDataUpdateRequestType } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.patchPaymentsCustomFieldsId({
    additionalDataUpdateRequest: {},
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
| `request`                                                                                                          | [operations.PatchPaymentsCustomFieldsIdRequest](../../sdk/models/operations/patchpaymentscustomfieldsidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.PatchPaymentsCustomFieldsIdResponse](../../sdk/models/operations/patchpaymentscustomfieldsidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsInvoiceTemplateId

Updates details of the specified invoice template based on the provided information.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  FrequencyUpdateInterval,
  InvoiceTemplateUpdateRequestStatus,
  InvoiceUpdateRequestAcceptedPaymentMethods,
  InvoiceUpdateRequestStatus,
  PayoutPendingReason,
  PendingStatusReason,
  ScheduleDateUpdateStatus,
} from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.patchPaymentsInvoiceTemplateId({
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

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.PatchPaymentsInvoiceTemplateIdRequest](../../sdk/models/operations/patchpaymentsinvoicetemplateidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.PatchPaymentsInvoiceTemplateIdResponse](../../sdk/models/operations/patchpaymentsinvoicetemplateidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsInvoiceId

Allows updates to the details of an existing member invoice using its unique ID. Useful for making corrections or updates to billing records.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  FrequencyUpdateInterval,
  InvoiceUpdateRequestAcceptedPaymentMethods,
  InvoiceUpdateRequestStatus,
  PayoutPendingReason,
  PendingStatusReason,
} from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.patchPaymentsInvoiceId({
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

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.PatchPaymentsInvoiceIdRequest](../../sdk/models/operations/patchpaymentsinvoiceidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PatchPaymentsInvoiceIdResponse](../../sdk/models/operations/patchpaymentsinvoiceidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsMemberClientId

Modifies details of the association between a member and a client based on the provided data.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  AutoPayRequirement,
  AutoPayStrategy,
  Ce853dbef33b2b91880690c84bc5314340c1301fd7b3503dd6ce79c844e2a481CompanyStructure,
  CollaboratorForm1099BalancesUpdateRequestStatus,
  DeliveryMethod,
  Eighta9c6cb49482a98cdd603ff09858cdc3e5ef6ad9807c876c4161d925a96694a5Status,
  MemberClientUpdateRequestStatus,
  ShareTaxDocument,
  VerificationStratgy,
} from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.patchPaymentsMemberClientId({
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

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.PatchPaymentsMemberClientIdRequest](../../sdk/models/operations/patchpaymentsmemberclientidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.PatchPaymentsMemberClientIdResponse](../../sdk/models/operations/patchpaymentsmemberclientidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsPayableId

This API endpoint facilitates the updating of existing payable details related to a client using a unique Payable ID.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  FrequencyUpdateInterval,
  PayableUpdateRequestAcceptedPaymentMethods,
  PayableUpdateRequestStatus,
  PaymentMethods,
  PayoutPendingReason,
  PendingStatusReason,
} from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.patchPaymentsPayableId({
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
        PaymentMethods.Ach,
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

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.PatchPaymentsPayableIdRequest](../../sdk/models/operations/patchpaymentspayableidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PatchPaymentsPayableIdResponse](../../sdk/models/operations/patchpaymentspayableidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

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

  const res = await sdk.patchPaymentsPayoutSettingsId({
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

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.PatchPaymentsPayoutSettingsIdRequest](../../sdk/models/operations/patchpaymentspayoutsettingsidrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.PatchPaymentsPayoutSettingsIdResponse](../../sdk/models/operations/patchpaymentspayoutsettingsidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsPayrollSettingsId

Update certain attributes or details of payroll settings associated with the provided identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  CardProcessingFees,
  FrequencyUpdateInterval,
  FundingSourceCurrency,
  FundingSourceType,
  OffPlatformPayments,
  PayrollSettingsUpdateStatus,
  PayrollSettingsUpdateWorkflow,
  ReimbursableExpenses,
  ScheduleDateUpdateStatus,
} from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.patchPaymentsPayrollSettingsId({
    payrollSettingsUpdate: {
      calculationSettings1099: {
        stateTaxId: {
          "key": "string",
        },
      },
      frequency: {},
      fundingSource: {
        fundingSourceCurrency: FundingSourceCurrency.Cad,
        fundingSourceId: "string",
        fundingSourceType: FundingSourceType.Account,
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

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.PatchPaymentsPayrollSettingsIdRequest](../../sdk/models/operations/patchpaymentspayrollsettingsidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.PatchPaymentsPayrollSettingsIdResponse](../../sdk/models/operations/patchpaymentspayrollsettingsidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsBankingCard

Add a new  Wingspan Wallet card to the system, allowing it to be used for future transactions.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsBankingCard({
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

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [shared.CardCreateRequest](../../sdk/models/shared/cardcreaterequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.PostPaymentsBankingCardResponse](../../sdk/models/operations/postpaymentsbankingcardresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsBankingCardIdToken

Sends a verification code to the users registered contact method for additional card authentication.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsBankingCardIdToken({
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

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.PostPaymentsBankingCardIdTokenRequest](../../sdk/models/operations/postpaymentsbankingcardidtokenrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.PostPaymentsBankingCardIdTokenResponse](../../sdk/models/operations/postpaymentsbankingcardidtokenresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsBankingInstantPayout

Configure a new instant payout setting, specifying details like amount, frequency, and destination.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsBankingInstantPayout({
    externalPayoutAccountToken: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.InstantPayoutRequest](../../sdk/models/shared/instantpayoutrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.PostPaymentsBankingInstantPayoutResponse](../../sdk/models/operations/postpaymentsbankinginstantpayoutresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsBulkCalculation1099Batch

Allows users to create a new batch for facilitating bulk 1099 calculations by providing necessary batch details.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsBulkCalculation1099Batch({
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

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.BulkBatchCreate](../../sdk/models/shared/bulkbatchcreate.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.PostPaymentsBulkCalculation1099BatchResponse](../../sdk/models/operations/postpaymentsbulkcalculation1099batchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsBulkCalculation1099BatchBatchIdItem

Facilitates the incorporation of a new item into the specified calculation 1099 batch, streamlining the process of batch expansion.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkCalculation1099ItemCreateCalculationType } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsBulkCalculation1099BatchBatchIdItem({
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

| Parameter                                                                                                                                                  | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                  | [operations.PostPaymentsBulkCalculation1099BatchBatchIdItemRequest](../../sdk/models/operations/postpaymentsbulkcalculation1099batchbatchiditemrequest.md) | :heavy_check_mark:                                                                                                                                         | The request object to use for the request.                                                                                                                 |
| `config`                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                               | :heavy_minus_sign:                                                                                                                                         | Available config options for making requests.                                                                                                              |


### Response

**Promise<[operations.PostPaymentsBulkCalculation1099BatchBatchIdItemResponse](../../sdk/models/operations/postpaymentsbulkcalculation1099batchbatchiditemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsBulkClientBatch

Initiates the creation of a fresh bulk client batch, streamlining the process of adding multiple clients in one go.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsBulkClientBatch({
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

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.BulkBatchCreate](../../sdk/models/shared/bulkbatchcreate.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.PostPaymentsBulkClientBatchResponse](../../sdk/models/operations/postpaymentsbulkclientbatchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsBulkClientBatchBatchIdItem

Inserts a new item into the specified bulk client batch, allowing for further expansion of client data within the batch.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { AutoPayRequirement, BulkClientItemCreateClientStatus, ShareTaxDocument } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsBulkClientBatchBatchIdItem({
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

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.PostPaymentsBulkClientBatchBatchIdItemRequest](../../sdk/models/operations/postpaymentsbulkclientbatchbatchiditemrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.PostPaymentsBulkClientBatchBatchIdItemResponse](../../sdk/models/operations/postpaymentsbulkclientbatchbatchiditemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsBulkCollaboratorBatch

Enables the creation of a new bulk collaborator batch, facilitating the bulk management and addition of collaborators for various projects or tasks.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsBulkCollaboratorBatch({
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

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.BulkBatchCreate](../../sdk/models/shared/bulkbatchcreate.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.PostPaymentsBulkCollaboratorBatchResponse](../../sdk/models/operations/postpaymentsbulkcollaboratorbatchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

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

  const res = await sdk.postPaymentsBulkCollaboratorBatchBatchIdItem({
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

| Parameter                                                                                                                                            | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                            | [operations.PostPaymentsBulkCollaboratorBatchBatchIdItemRequest](../../sdk/models/operations/postpaymentsbulkcollaboratorbatchbatchiditemrequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.PostPaymentsBulkCollaboratorBatchBatchIdItemResponse](../../sdk/models/operations/postpaymentsbulkcollaboratorbatchbatchiditemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsBulkInvoiceBatch

Creates a new batch for importing multiple invoices at once, streamlining the bulk invoicing operations.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkInvoiceBatchCreateProcessingStrategy } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsBulkInvoiceBatch({
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

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.BulkInvoiceBatchCreate](../../sdk/models/shared/bulkinvoicebatchcreate.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.PostPaymentsBulkInvoiceBatchResponse](../../sdk/models/operations/postpaymentsbulkinvoicebatchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsBulkInvoiceBatchBatchIdItem

Allows users to append a new item to a given batch of bulk invoices by supplying its unique batch identifier and the details of the new item.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkInvoiceItemCreateAcceptedPaymentMethods, BulkInvoiceItemCreateInvoiceStatus } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsBulkInvoiceBatchBatchIdItem({
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

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.PostPaymentsBulkInvoiceBatchBatchIdItemRequest](../../sdk/models/operations/postpaymentsbulkinvoicebatchbatchiditemrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.PostPaymentsBulkInvoiceBatchBatchIdItemResponse](../../sdk/models/operations/postpaymentsbulkinvoicebatchbatchiditemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsBulkPayableBatch

Creates a new batch for importing multiple payables at once, streamlining the bulk payment operations.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkPayableBatchCreateProcessingStrategy } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsBulkPayableBatch({
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

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.BulkPayableBatchCreate](../../sdk/models/shared/bulkpayablebatchcreate.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.PostPaymentsBulkPayableBatchResponse](../../sdk/models/operations/postpaymentsbulkpayablebatchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsBulkPayableBatchBatchIdItem

Allows for the creation and addition of a new individual payable item into an existing bulk payable batch. This enhances batch management and payable tracking.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkPayableItemCreatePayableStatus, BulkPayableItemCreateWorkflowSubStatus } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsBulkPayableBatchBatchIdItem({
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

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.PostPaymentsBulkPayableBatchBatchIdItemRequest](../../sdk/models/operations/postpaymentsbulkpayablebatchbatchiditemrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.PostPaymentsBulkPayableBatchBatchIdItemResponse](../../sdk/models/operations/postpaymentsbulkpayablebatchbatchiditemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsClientDeduction

Allows for the creation of a new client deduction based on the provided details.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { DeductionCreateRequestCurrency, DeductionCreateRequestType } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsClientDeduction({
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

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.DeductionCreateRequest](../../sdk/models/shared/deductioncreaterequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.PostPaymentsClientDeductionResponse](../../sdk/models/operations/postpaymentsclientdeductionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsClientInvoice

Enables the creation of a new invoice on behalf of a client using the provided details, facilitating new billing records.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { ClientInvoiceCreateRequestCurrency } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsClientInvoice({
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

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [shared.ClientInvoiceCreateRequest](../../sdk/models/shared/clientinvoicecreaterequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.PostPaymentsClientInvoiceResponse](../../sdk/models/operations/postpaymentsclientinvoiceresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsClientInvoiceTemplate

Allows clients to create a new invoice template based on the provided details.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  ClientInvoiceDataCreateRequestCurrency,
  ClientInvoiceTemplateCreateRequestStatus,
  Interval,
  ScheduleDateStatus,
} from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsClientInvoiceTemplate({
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

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [shared.ClientInvoiceTemplateCreateRequest](../../sdk/models/shared/clientinvoicetemplatecreaterequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.PostPaymentsClientInvoiceTemplateResponse](../../sdk/models/operations/postpaymentsclientinvoicetemplateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsClientInvoiceInvoiceIdPay

Process a payment for a specific client-generated invoice using the provided details, ensuring the invoice is marked as settled.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsClientInvoiceInvoiceIdPay({
    payRequest: {},
    invoiceId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.PostPaymentsClientInvoiceInvoiceIdPayRequest](../../sdk/models/operations/postpaymentsclientinvoiceinvoiceidpayrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.PostPaymentsClientInvoiceInvoiceIdPayResponse](../../sdk/models/operations/postpaymentsclientinvoiceinvoiceidpayresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsCollaborator

Add a new collaborator to the system, allowing them to be eligible for payments.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  AutoPayStrategy,
  CollaboratorCreateRequestStatus,
  MemberClientFormW9InfoCompanyStructure,
  VerificationStratgy,
} from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsCollaborator({
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

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [shared.CollaboratorCreateRequest](../../sdk/models/shared/collaboratorcreaterequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.PostPaymentsCollaboratorResponse](../../sdk/models/operations/postpaymentscollaboratorresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsCollaboratorDeduction

Create and add a new deduction entry for a collaborator based on the provided data.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { DeductionCreateRequestCurrency, DeductionCreateRequestType } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsCollaboratorDeduction({
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

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.DeductionCreateRequest](../../sdk/models/shared/deductioncreaterequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.PostPaymentsCollaboratorDeductionResponse](../../sdk/models/operations/postpaymentscollaboratordeductionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsCollaboratorGroup

Create a new collaborator group with specific configurations and permissions as defined by the client.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsCollaboratorGroup({
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

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [shared.CollaboratorGroupCreateRequest](../../sdk/models/shared/collaboratorgroupcreaterequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.PostPaymentsCollaboratorGroupResponse](../../sdk/models/operations/postpaymentscollaboratorgroupresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## ~~postPaymentsCollaboratorSettingsAdditionalData~~

[Deprecated - use /payments/custom-fields] Create custom fields that can be associated with the memberClient object to provide extra details about the relationship between a collaborator and a member.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { ResourceType, TypeT } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsCollaboratorSettingsAdditionalData({
    key: "<key>",
    name: "string",
    required: false,
    resourceType: ResourceType.LineItem,
    type: TypeT.String,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `request`                                                          | [shared.AdditionalData](../../sdk/models/shared/additionaldata.md) | :heavy_check_mark:                                                 | The request object to use for the request.                         |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.PostPaymentsCollaboratorSettingsAdditionalDataResponse](../../sdk/models/operations/postpaymentscollaboratorsettingsadditionaldataresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsCollaboratorSettingsEligibilityRequirement

Define and create a new eligibility requirement for collaborators.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { EligibilityRequirementCreateRequestRequirementType } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsCollaboratorSettingsEligibilityRequirement({
    requirementType: EligibilityRequirementCreateRequestRequirementType.Signature,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [shared.EligibilityRequirementCreateRequest](../../sdk/models/shared/eligibilityrequirementcreaterequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PostPaymentsCollaboratorSettingsEligibilityRequirementResponse](../../sdk/models/operations/postpaymentscollaboratorsettingseligibilityrequirementresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsCollaboratorSettingsPaymentEligibility

Define a new payment eligibility requirement for collaborators in the system.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsCollaboratorSettingsPaymentEligibility({
    field: "string",
    value: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.PaymentEligibility](../../sdk/models/shared/paymenteligibility.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.PostPaymentsCollaboratorSettingsPaymentEligibilityResponse](../../sdk/models/operations/postpaymentscollaboratorsettingspaymenteligibilityresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsCollaborator1099Calculate

Analyzes and calculates the appropriate 1099 amounts for collaborators based on provided data and relevant financial parameters.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsCollaborator1099Calculate({
    memberClientId: "string",
    year: 7927.08,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.Calculate1099Request](../../sdk/models/shared/calculate1099request.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.PostPaymentsCollaborator1099CalculateResponse](../../sdk/models/operations/postpaymentscollaborator1099calculateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsCollaborator1099MarkUndelivered

Mark a specific 1099 submission for a collaborator as undelivered, typically due to mail return or incorrect address details.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsCollaborator1099MarkUndelivered({
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

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [shared.Mark1099AsUndeliveredRequest](../../sdk/models/shared/mark1099asundeliveredrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.PostPaymentsCollaborator1099MarkUndeliveredResponse](../../sdk/models/operations/postpaymentscollaborator1099markundeliveredresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsCollaborator1099Remail

Initiates a process to resend the 1099 form to a collaborator in the event of a previous failed delivery or at the request of the collaborator.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsCollaborator1099Remail({
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

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [shared.Remail1099Request](../../sdk/models/shared/remail1099request.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.PostPaymentsCollaborator1099RemailResponse](../../sdk/models/operations/postpaymentscollaborator1099remailresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsCustomFields

Define a new custom field for payments using additional data provided.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { ResourceType, TypeT } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsCustomFields({
    key: "<key>",
    name: "string",
    required: false,
    resourceType: ResourceType.LineItem,
    type: TypeT.String,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `request`                                                          | [shared.AdditionalData](../../sdk/models/shared/additionaldata.md) | :heavy_check_mark:                                                 | The request object to use for the request.                         |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.PostPaymentsCustomFieldsResponse](../../sdk/models/operations/postpaymentscustomfieldsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

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
  PayoutPendingReason,
  PendingStatusReason,
} from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsInvoice({
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

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.InvoiceCreateRequest](../../sdk/models/shared/invoicecreaterequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.PostPaymentsInvoiceResponse](../../sdk/models/operations/postpaymentsinvoiceresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsInvoiceTemplate

Creates a new invoice template based on the provided details.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  Interval,
  InvoiceCollaboratorCreateRequestCurrency,
  InvoiceDataCreateRequestAcceptedPaymentMethods,
  InvoiceDataCreateRequestCurrency,
  InvoiceDataCreateRequestStatus,
  InvoiceTemplateCreateRequestStatus,
  ScheduleDateStatus,
} from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsInvoiceTemplate({
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

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [shared.InvoiceTemplateCreateRequest](../../sdk/models/shared/invoicetemplatecreaterequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.PostPaymentsInvoiceTemplateResponse](../../sdk/models/operations/postpaymentsinvoicetemplateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsInvoiceTestCreate

Use this endpoint to create a test invoice for testing and validation purposes. This invoice will mimic a client's real invoice.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsInvoiceTestCreate({
    contactName: "string",
    email: "Zechariah.Bradtke36@yahoo.com",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [shared.TestInvoiceCreate](../../sdk/models/shared/testinvoicecreate.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.PostPaymentsInvoiceTestCreateResponse](../../sdk/models/operations/postpaymentsinvoicetestcreateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsInvoiceInvoiceIdGenerate

This endpoint allows for the dynamic generation of a PDF document for a given invoice, identified by its unique ID.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsInvoiceInvoiceIdGenerate({
    invoiceId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.PostPaymentsInvoiceInvoiceIdGenerateRequest](../../sdk/models/operations/postpaymentsinvoiceinvoiceidgeneraterequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.PostPaymentsInvoiceInvoiceIdGenerateResponse](../../sdk/models/operations/postpaymentsinvoiceinvoiceidgenerateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsInvoiceInvoiceIdSend

Use this endpoint to send an invoice by email using its unique ID for identification.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsInvoiceInvoiceIdSend({
    invoiceId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.PostPaymentsInvoiceInvoiceIdSendRequest](../../sdk/models/operations/postpaymentsinvoiceinvoiceidsendrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.PostPaymentsInvoiceInvoiceIdSendResponse](../../sdk/models/operations/postpaymentsinvoiceinvoiceidsendresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsMemberClient

Use this endpoint to create a new linkage between a member and client in the system, allowing for better relationship management.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { AutoPayRequirement, MemberClientCreateRequestStatus, ShareTaxDocument } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsMemberClient({
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

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [shared.MemberClientCreateRequest](../../sdk/models/shared/memberclientcreaterequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.PostPaymentsMemberClientResponse](../../sdk/models/operations/postpaymentsmemberclientresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsPayApproved

Processes all approved payroll transactions, ensuring employees and vendors are compensated as per their respective invoices.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsPayApproved();

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

**Promise<[operations.PostPaymentsPayApprovedResponse](../../sdk/models/operations/postpaymentspayapprovedresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsPayable

Allows for the generation of a new Payables for a specific member on behalf of a client. This ensures streamlined billing and effective financial tracking between clients and members.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  FrequencyUpdateInterval,
  PayableCreateRequestAcceptedPaymentMethods,
  PayableCreateRequestCurrency,
  PayableCreateRequestStatus,
  PayoutPendingReason,
  PendingStatusReason,
} from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsPayable({
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

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.PayableCreateRequest](../../sdk/models/shared/payablecreaterequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.PostPaymentsPayableResponse](../../sdk/models/operations/postpaymentspayableresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsPayoutSettingsMemberIdDebitCard

Allows the addition of a new debit card to a member's profile for payout transactions.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments();

  const res = await sdk.postPaymentsPayoutSettingsMemberIdDebitCard({
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

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                          | [operations.PostPaymentsPayoutSettingsMemberIdDebitCardRequest](../../sdk/models/operations/postpaymentspayoutsettingsmemberiddebitcardrequest.md) | :heavy_check_mark:                                                                                                                                 | The request object to use for the request.                                                                                                         |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.PostPaymentsPayoutSettingsMemberIdDebitCardResponse](../../sdk/models/operations/postpaymentspayoutsettingsmemberiddebitcardresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
