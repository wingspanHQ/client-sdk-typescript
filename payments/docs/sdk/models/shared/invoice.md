# Invoice

## Example Usage

```typescript
import { Invoice } from "@wingspan/payments/sdk/models/shared";

let value: Invoice = {
  amount: 4030.26,
  client: {},
  createdAt: "1726883214858",
  currency: "CAD",
  dueDate: "<value>",
  eventActors: {
    "key": "<value>",
  },
  events: {},
  externalIds: {},
  invoiceId: "<id>",
  invoiceNumber: "<value>",
  labels: {
    "key": "<value>",
  },
  lineItems: [
    {
      costPerUnit: 4876.76,
      createdAt: "1703398766525",
      labels: {
        "key": "<value>",
      },
      labelsBak2: {
        "key": "<value>",
      },
      quantity: 4254.02,
      reimbursableExpense: false,
      totalCost: 635.54,
      unit: "kilogram",
      updatedAt: "1734911706882",
    },
  ],
  member: {},
  memberAddress: {
    addressLine1: "88161 Prospect Road",
    city: "Las Cruces",
    postalCode: "02741-1848",
    state: "Oregon",
  },
  memberClientId: "<id>",
  memberId: "<id>",
  payments: [
    {
      amount: 4097.26,
      createdAt: "1715160591949",
      events: {},
      labels: {
        "key": "<value>",
      },
      paymentId: "<id>",
      sourceId: "<id>",
      sourceMetadata: {},
      sourceType: "Card",
      status: "Returned",
      updatedAt: "1734894849113",
    },
  ],
  status: "Draft",
  updatedAt: "1734891123525",
  userRoles: {
    ownerIds: [
      "<value>",
    ],
    viewerIds: [
      "<value>",
    ],
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `acceptedPaymentMethods`                                                                              | [shared.InvoiceAcceptedPaymentMethods](../../../sdk/models/shared/invoiceacceptedpaymentmethods.md)[] | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `accountId`                                                                                           | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `amount`                                                                                              | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `amountDetails`                                                                                       | [shared.InvoiceAmountDetails](../../../sdk/models/shared/invoiceamountdetails.md)                     | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `attachments`                                                                                         | [shared.InvoiceAttachments](../../../sdk/models/shared/invoiceattachments.md)                         | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `bankTransferInfo`                                                                                    | [shared.BankAccount](../../../sdk/models/shared/bankaccount.md)                                       | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `chargedFees`                                                                                         | [shared.Fees](../../../sdk/models/shared/fees.md)                                                     | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `client`                                                                                              | [shared.ClientOptions](../../../sdk/models/shared/clientoptions.md)                                   | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `clientId`                                                                                            | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `collaborators`                                                                                       | [shared.InvoiceCollaborator](../../../sdk/models/shared/invoicecollaborator.md)[]                     | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `createdAt`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `creditFeeHandling`                                                                                   | [shared.FeeHandlingConfig](../../../sdk/models/shared/feehandlingconfig.md)                           | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `currency`                                                                                            | [shared.InvoiceCurrency](../../../sdk/models/shared/invoicecurrency.md)                               | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `deductions`                                                                                          | [shared.InvoiceAppliedDeductions](../../../sdk/models/shared/invoiceapplieddeductions.md)[]           | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `dueDate`                                                                                             | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `eventActors`                                                                                         | Record<string, *string*>                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `events`                                                                                              | [shared.InvoiceEvents](../../../sdk/models/shared/invoiceevents.md)                                   | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `externalIds`                                                                                         | [shared.ExternalIds](../../../sdk/models/shared/externalids.md)                                       | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `integration`                                                                                         | [shared.InvoiceIntegrations](../../../sdk/models/shared/invoiceintegrations.md)                       | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `internationalBankTransferInfo`                                                                       | [shared.BankAccount](../../../sdk/models/shared/bankaccount.md)                                       | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `invoiceId`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `invoiceNotes`                                                                                        | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `invoiceNumber`                                                                                       | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `invoiceTemplateId`                                                                                   | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `labels`                                                                                              | Record<string, *string*>                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `lateFeeHandling`                                                                                     | [shared.LateFeeConfig](../../../sdk/models/shared/latefeeconfig.md)                                   | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `lineItems`                                                                                           | [shared.InvoiceLineItem](../../../sdk/models/shared/invoicelineitem.md)[]                             | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `member`                                                                                              | [shared.MemberOptions](../../../sdk/models/shared/memberoptions.md)                                   | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `memberAddress`                                                                                       | [shared.Address](../../../sdk/models/shared/address.md)                                               | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `memberClientId`                                                                                      | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `memberFormattedAddressLines`                                                                         | *string*[]                                                                                            | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `memberId`                                                                                            | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `metadata`                                                                                            | [shared.InvoiceMetadata](../../../sdk/models/shared/invoicemetadata.md)                               | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `notificationPreferences`                                                                             | [shared.InvoiceNotificationPreferences](../../../sdk/models/shared/invoicenotificationpreferences.md) | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `parentInvoiceId`                                                                                     | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `paymentInfo`                                                                                         | [shared.PaymentInfo](../../../sdk/models/shared/paymentinfo.md)                                       | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `paymentMethodId`                                                                                     | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `payments`                                                                                            | [shared.InvoicePayment](../../../sdk/models/shared/invoicepayment.md)[]                               | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `payoutDestinations`                                                                                  | [shared.InvoicePayoutDestination](../../../sdk/models/shared/invoicepayoutdestination.md)[]           | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `processingFees`                                                                                      | [shared.ProcessingFees](../../../sdk/models/shared/processingfees.md)                                 | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `refundDestinations`                                                                                  | [shared.InvoiceRefundDestination](../../../sdk/models/shared/invoicerefunddestination.md)[]           | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `sourceId`                                                                                            | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `status`                                                                                              | [shared.InvoiceSchemasStatus](../../../sdk/models/shared/invoiceschemasstatus.md)                     | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `updatedAt`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `userRoles`                                                                                           | [shared.UserRoles](../../../sdk/models/shared/userroles.md)                                           | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `withholdings`                                                                                        | [shared.InvoiceWithholdings](../../../sdk/models/shared/invoicewithholdings.md)                       | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |