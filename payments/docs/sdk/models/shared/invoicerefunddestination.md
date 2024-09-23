# InvoiceRefundDestination

## Example Usage

```typescript
import { InvoiceRefundDestination } from "@wingspan/payments/sdk/models/shared";

let value: InvoiceRefundDestination = {
  amount: 1476.86,
  createdAt: "<value>",
  destinationType: "Account",
  events: {},
  labels: {
    "key": "<value>",
  },
  refundType: "Account",
  updatedAt: "<value>",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `createdAt`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `destinationId`                                                                                                         | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `destinationType`                                                                                                       | [shared.InvoiceRefundDestinationDestinationType](../../../sdk/models/shared/invoicerefunddestinationdestinationtype.md) | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `events`                                                                                                                | [shared.InvoiceRefundEvents](../../../sdk/models/shared/invoicerefundevents.md)                                         | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `labels`                                                                                                                | Record<string, *string*>                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `refundType`                                                                                                            | [shared.RefundType](../../../sdk/models/shared/refundtype.md)                                                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `stripeTransferId`                                                                                                      | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `transactionId`                                                                                                         | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `transferId`                                                                                                            | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `updatedAt`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |