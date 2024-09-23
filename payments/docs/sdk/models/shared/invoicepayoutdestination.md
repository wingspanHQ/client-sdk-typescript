# InvoicePayoutDestination

## Example Usage

```typescript
import { InvoicePayoutDestination } from "@wingspan/payments/sdk/models/shared";

let value: InvoicePayoutDestination = {
  amount: 9587.41,
  description: "Cross-group attitude-oriented matrices",
  destinationType: "PaperCheck",
  payoutMethod: "ECheck",
  percentage: 9358.32,
  transferId: "<value>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `amount`                                                                | *number*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `brand`                                                                 | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `description`                                                           | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `destinationId`                                                         | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `destinationType`                                                       | [shared.DestinationType](../../../sdk/models/shared/destinationtype.md) | :heavy_check_mark:                                                      | N/A                                                                     |
| `last4`                                                                 | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `payoutMethod`                                                          | [shared.PayoutMethod](../../../sdk/models/shared/payoutmethod.md)       | :heavy_check_mark:                                                      | N/A                                                                     |
| `percentage`                                                            | *number*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `transferId`                                                            | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |