# Invoice

## Example Usage

```typescript
import { Invoice } from "@wingspan/payments/sdk/models/shared";

let value: Invoice = {
  amount: 9227.57,
  client: {},
  createdAt: "<value>",
  currency: "USD",
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
      costPerUnit: 4530.94,
      createdAt: "<value>",
      labels: {
        "key": "<value>",
      },
      labelsBak2: {
        "key": "<value>",
      },
      quantity: 4939.58,
      reimbursableExpense: false,
      totalCost: 7781.72,
      unit: "siemens",
      updatedAt: "<value>",
    },
  ],
  member: {},
  memberAddress: {
    addressLine1: "48811 Arch Junctions",
    city: "New Delbertstead",
    postalCode: "99322",
    state: "Missouri",
  },
  memberClientId: "<id>",
  memberId: "<id>",
  payments: [
    {
      amount: 399.93,
      createdAt: "<value>",
      events: {},
      labels: {
        "key": "<value>",
      },
      paymentId: "<id>",
      sourceId: "<id>",
      sourceMetadata: {},
      sourceType: "Card",
      status: "Pending",
      updatedAt: "<value>",
    },
  ],
  status: "Overdue",
  updatedAt: "<value>",
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