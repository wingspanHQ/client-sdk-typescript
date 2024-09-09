# PayoutDestinationResponse

## Example Usage

```typescript
import { PayoutDestinationResponse } from "@wingspan/payments/sdk/models/shared";

let value: PayoutDestinationResponse = {
    destinationId: "<value>",
    destinationType: "Account",
    name: "<value>",
    payoutMethod: "ECheck",
    percentage: 3523.12,
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `destinationId`                                                                                                           | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `destinationType`                                                                                                         | [shared.PayoutDestinationResponseDestinationType](../../../sdk/models/shared/payoutdestinationresponsedestinationtype.md) | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `last4`                                                                                                                   | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `name`                                                                                                                    | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `payoutMethod`                                                                                                            | [shared.PayoutDestinationResponsePayoutMethod](../../../sdk/models/shared/payoutdestinationresponsepayoutmethod.md)       | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `percentage`                                                                                                              | *number*                                                                                                                  | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |