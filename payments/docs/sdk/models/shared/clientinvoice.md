# ClientInvoice

## Example Usage

```typescript
import { ClientInvoice } from "@wingspan/payments/sdk/models/shared";

let value: ClientInvoice = {
  additionalRecipientEmails: [
    "<value>",
  ],
  amount: 1858.97,
  client: {},
  createdAt: "1728212943531",
  currency: "USD",
  dueDate: "<value>",
  events: {},
  invoiceId: "<id>",
  invoiceNumber: "<value>",
  lineItems: [
    {
      costPerUnit: 2646.49,
      createdAt: "1737156129397",
      labels: {
        "key": "<value>",
      },
      labelsBak2: {
        "key": "<value>",
      },
      quantity: 6394.63,
      reimbursableExpense: false,
      totalCost: 5206.78,
      unit: "joule",
      updatedAt: "1737922060644",
    },
  ],
  member: {},
  memberAcceptsPayments: false,
  memberAddress: {
    addressLine1: "98607 N Elm Street",
    city: "North Nicola",
    postalCode: "17096-5292",
    state: "Tennessee",
  },
  memberClient: {
    achCreditAccount: {
      accountNumber: "<value>",
      bankName: "<value>",
    },
    client: {
      user: {},
    },
    clientData: {},
    clientId: "<id>",
    clientUserAccountType: "enterprise",
    createdAt: "1731110740369",
    emailTo: "<value>",
    eventActors: {
      "key": "<value>",
    },
    events: {},
    externalIds: {},
    form1099Balances: {},
    formW9Data: {},
    internationalWireAccount: {
      accountNumber: "<value>",
      bankName: "<value>",
    },
    labels: {
      "key": "<value>",
    },
    member: {
      user: {},
    },
    memberClientId: "<id>",
    memberData: {},
    memberId: "<id>",
    parentMemberClientId: "<id>",
    payerPayeeId: "<id>",
    status: "Inactive",
    taxStatus: "Complete",
    updatedAt: "1737895960621",
    userRoles: {
      ownerIds: [
        "<value>",
      ],
      viewerIds: [
        "<value>",
      ],
    },
  },
  memberCompany: "<value>",
  memberEmail: "<value>",
  memberLogoUrl: "https://distorted-hierarchy.info/",
  memberName: "<value>",
  memberPaymentsVersion: 1636.84,
  memberStripeAccountId: "<id>",
  projectName: "<value>",
  status: "Cancelled",
  updatedAt: "1737877850197",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `acceptedPaymentMethods`                                                                                          | [shared.ClientInvoiceAcceptedPaymentMethods](../../../sdk/models/shared/clientinvoiceacceptedpaymentmethods.md)[] | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `accountId`                                                                                                       | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `additionalRecipientEmails`                                                                                       | *string*[]                                                                                                        | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `amount`                                                                                                          | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `attachments`                                                                                                     | [shared.InvoiceAttachments](../../../sdk/models/shared/invoiceattachments.md)                                     | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `bankTransferInfo`                                                                                                | [shared.BankAccount](../../../sdk/models/shared/bankaccount.md)                                                   | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `chargedFees`                                                                                                     | [shared.Fees](../../../sdk/models/shared/fees.md)                                                                 | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `client`                                                                                                          | [shared.ClientOptions](../../../sdk/models/shared/clientoptions.md)                                               | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `createdAt`                                                                                                       | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `creditFeeHandling`                                                                                               | [shared.FeeHandlingConfig](../../../sdk/models/shared/feehandlingconfig.md)                                       | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `currency`                                                                                                        | [shared.Currency](../../../sdk/models/shared/currency.md)                                                         | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `dueDate`                                                                                                         | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `events`                                                                                                          | [shared.InvoiceEvents](../../../sdk/models/shared/invoiceevents.md)                                               | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `integration`                                                                                                     | [shared.InvoiceIntegrations](../../../sdk/models/shared/invoiceintegrations.md)                                   | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `internationalBankTransferInfo`                                                                                   | [shared.BankAccount](../../../sdk/models/shared/bankaccount.md)                                                   | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `invoiceId`                                                                                                       | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `invoiceNotes`                                                                                                    | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `invoiceNumber`                                                                                                   | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `invoiceTemplateId`                                                                                               | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `lateFeeHandling`                                                                                                 | [shared.LateFeeConfig](../../../sdk/models/shared/latefeeconfig.md)                                               | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `lineItems`                                                                                                       | [shared.InvoiceLineItem](../../../sdk/models/shared/invoicelineitem.md)[]                                         | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `member`                                                                                                          | [shared.MemberOptions](../../../sdk/models/shared/memberoptions.md)                                               | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `memberAcceptsPayments`                                                                                           | *boolean*                                                                                                         | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `memberAddress`                                                                                                   | [shared.Address](../../../sdk/models/shared/address.md)                                                           | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `memberClient`                                                                                                    | [shared.MemberClient](../../../sdk/models/shared/memberclient.md)                                                 | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `memberCompany`                                                                                                   | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `memberEmail`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `memberFormattedAddressLines`                                                                                     | *string*[]                                                                                                        | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `memberLogoUrl`                                                                                                   | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `memberName`                                                                                                      | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `memberPaymentsVersion`                                                                                           | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `memberStripeAccountId`                                                                                           | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `metadata`                                                                                                        | [shared.InvoiceMetadata](../../../sdk/models/shared/invoicemetadata.md)                                           | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `paymentInfo`                                                                                                     | [shared.PaymentInfo](../../../sdk/models/shared/paymentinfo.md)                                                   | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `paymentMethodId`                                                                                                 | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `processingFees`                                                                                                  | [shared.ProcessingFees](../../../sdk/models/shared/processingfees.md)                                             | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `projectName`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `sourceId`                                                                                                        | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `status`                                                                                                          | [shared.ClientInvoiceStatus](../../../sdk/models/shared/clientinvoicestatus.md)                                   | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `updatedAt`                                                                                                       | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |