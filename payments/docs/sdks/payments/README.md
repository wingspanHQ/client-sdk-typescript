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

Remove a card using its unique ID

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

Deprecated Remove Instant Payout Configuration

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

Remove a Specific Collaborator Batch

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

Remove a Specific Bulk Payable Batch

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

Remove a Client Deduction

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

Erase a Specific Deduction Entry

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

Remove Eligibility Requirement from Collaborator Group

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

Erase a Specific Collaborator-Member Custom Data

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

Remove a Specific Eligibility Requirement

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

Remove a specific Payment Eligibility Requirement

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

Remove a Specific Collaborator Record

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

Remove a Specific Custom Field

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

Remove a specific invoice template

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

Remove Invoice Record by ID

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

Remove a specific member-client relationship from the system

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

Delete Client Payable by Payable ID

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

Unlink and delete a specific payout debit card from a member's profile

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

Check Service Status

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

List All Stored Wingspan Wallet Cards

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

Retrieve card details by its unique ID

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

Deprecated Retrieve Instant Payout Information

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

Retrieve banking institution details by its routing number

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

Retrieve All Bank Statements

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

Retrieve Specific Bank Statement

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

Download a specific bank statement as a PDF

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

Retrieve all bulk calculation 1099 batches

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

Retrieve specific details of a bulk calculation 1099 batch

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

Retrieve all items from a calculation 1099 batch

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

Fetch details of a specific item from a calculation 1099 batch

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

Retrieve all bulk client batches

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

Fetch Details of a Specific Item from a Client Batch

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

Retrieve All Items from a Client Batch

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

Fetch Details of a Specific Item from a Client Batch

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

Fetch all bulk collaborator batches

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

Retrieve Details of a Specific Collaborator Batch

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

Retrieve all items from a specific collaborator batch

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

Retrieve details of a specific item from a collaborator batch

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

Retrieve All Bulk Invoice Batches

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

Retrieve details of a specific bulk invoice batch

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

Fetch all items from a specific bulk invoice batch

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

Retrieve a specific item from a bulk invoice batch

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

Retrieve All Bulk Payable Batches

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

Retrieve Details of a Specific Bulk Payable Batch

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

Fetch the import summary for a specific bulk payable batch

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

Retrieve all items from a specific bulk payable batch

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

Retrieve a Specific Item from a Bulk Payable Batch

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

Retrieve All Client Deductions

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

Fetch Specific Client Deduction Details

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

Retrieve All Invoices Generated by a Client

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

Retrieve all client-generated invoice templates

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

Fetch a specific client-generated invoice template by ID

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

Fetch Specific Client-Generated Invoice by ID

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

Retrieve Fees Associated with a Client's Invoice

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

Retrieve All Registered Collaborators

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

Retrieve All Deductions for Collaborators

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

Retrieve Specific Deduction Details

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

Retrieve All Collaborator Groups

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

Retrieve Specific Collaborator Group Configuration

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

Retrieve All Collaborator-Member Custom Data Points

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

Retrieve Specific Collaborator Custom Data

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

Retrieve all Eligibility Requirements

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

Retrieve a Specific Eligibility Requirement

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

Retrieve All Payment Eligibility Requirements

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

Retrieve details of a specific Payment Eligibility Requirement

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

Retrieve Details of a Specific Collaborator

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

Retrieve Form 1099 PDF for a Collaborator by Year and Index

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

Retrieve Form W9 PDF for a Collaborator

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

Retrieve Events Associated with a Collaborator

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

Retrieve All Custom Fields

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

Fetch Details of a Specific Custom Field

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

Retrieve All Member Invoices

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

Retrieve all available invoice templates

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

Retrieve a specific invoice template by ID

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

Fetch Invoice by ID

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

Retrieve Merchant Category Codes (MCC)

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

Fetch a list of member and client associations

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

Retrieve detailed information of a specific member-client relationship

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

List All Payables Associated with a Client

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

Retrieve Payable Details by Payable ID

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

Retrieve payout settings for a specific member

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

Fetch all registered payout debit cards for a member

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

Retrieve a specific payout debit card linked to a member

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

Retrieve Individual Payroll Settings

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

Retrieve Approved Payables Ready for Immediate Payroll

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

Obtain Aging Report for Line Items

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

Retrieve Aging Report for Payables

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

Retrieve detailed information on all collaborators

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

Obtain a summarized report of payable amounts for each collaborator

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

Extract detailed report of payables associated with a particular payroll run

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

Fetch the application link for setting up a clearing bank account

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

Retrieve Summary of All Payables

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

Retrieve All Clients (Version 2)

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

Retrieve Specific Client Details (Version 2)

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

Retrieve All Collaborators (Version 2)

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

Retrieve Specific Collaborator Details (Version 2)

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

Modify card details by its unique ID

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

Validate verification code to receive a token

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

Modify the details of a specific bulk calculation 1099 batch

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

Revise the attributes of an item in a calculation 1099 batch

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

Modify Details of a Specific Item in a Client Batch

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

Modify Details of a Specific Item in a Client Batch

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

Modify Details of a Bulk Collaborator Batch

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

Modify the details of a specific item within a collaborator batch

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

Modify the details of a specific bulk invoice batch

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

Modify a specific item within a bulk invoice batch

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkInvoiceItemUpdateAcceptedPaymentMethods, BulkInvoiceItemUpdateInvoiceStatus } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments();

  const res = await sdk.payments.patchPaymentsBulkInvoiceBatchBatchIdItemBatchItemId({
    bulkInvoiceItemUpdate: {
      acceptedPaymentMethods: [
        BulkInvoiceItemUpdateAcceptedPaymentMethods.Ach,
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

Modify a Specific Bulk Payable Batch

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

Modify a Specific Item in a Bulk Payable Batch

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

Modify a Client Deduction

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

Modify a client-generated invoice template

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

Modify an Existing Client-Generated Invoice

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

Modify Details of a Specific Deduction

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

Modify Collaborator Group Configuration

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

Modify Eligibility Requirement for Collaborator Group

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

Modify a Specific Collaborator-Member Custom Data

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

Modify a Specific Eligibility Requirement

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

Modify a specific Payment Eligibility Requirement

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

Modify Collaborator Details

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

Associate Collaborator with a Specific Group

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

Disassociate Collaborator from a Specific Group

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

Modify Details of a Specific Custom Field

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

Modify details of an existing invoice template

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

Modify Existing Invoice Details

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
        InvoiceUpdateRequestAcceptedPaymentMethods.Manual,
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

Update information of a specific member-client relationship

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

Update Client Payable Information by Payable ID

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
        PayableUpdateRequestAcceptedPaymentMethods.Ach,
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

Modify and update payout settings for a specific member

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

Modify Existing Payroll Settings

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

Register a New  Wingspan Wallet Card

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

Request a verification code for card authentication

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

Deprecated Set Up Instant Payout Configuration

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

Initialize a new batch for bulk calculation 1099

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

Add a new item to a calculation 1099 batch

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

Create a new bulk client batch

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

Add a New Item to a Client Batch

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

Initiate a new bulk collaborator batch.

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

Append a new item to a specific collaborator batch

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

Initiate a New Bulk Invoice Batch

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

Add a new item to a specific bulk invoice batch

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

Initiate a New Bulk Payable Batch

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

Add a new item to a specific bulk payable batch

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

Register a New Client Deduction

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

Generate a New Invoice on Behalf of the Client

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

Create a new client-generated invoice template

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

Execute Payment for a Client-Generated Invoice

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

Register a New Collaborator

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

Register a New Deduction for a Collaborator

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

Generate New Collaborator Group

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

Register New Custom Data for Collaborator-Member Relationship

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

Establish a new Eligibility Requirement

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

Add a New Payment Eligibility Requirement

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

Determine 1099 Amounts for Collaborators

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

Indicate a collaborator's 1099 form was returned undelivered

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

Request a new mailing of the 1099 form for a collaborator

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

Add a New Custom Field

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

Initiate New Invoice for a Member

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

Create a new invoice template

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
        InvoiceDataCreateRequestAcceptedPaymentMethods.Manual,
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

Generate Test Invoice for a Client

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

Generate a PDF for a specific invoice

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

Send an invoice by email

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

Establish a new association between a member and client

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

Execute Approved Payroll Transactions

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

Create a New Payable for a Member on Behalf of a Client

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

Register a new payout debit card for a member

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

