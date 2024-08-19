# Card

## Example Usage

```typescript
import { Card } from "@wingspan/payments/sdk/models/shared";

let value: Card = {
    brand: "<value>",
    createdAt: "<value>",
    expirationDate: "<value>",
    last4Digits: "<value>",
    status: "SuspectedFraud",
    type: "individualVirtualDebitCard",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `brand`                                                       | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `createdAt`                                                   | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `expirationDate`                                              | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `last4Digits`                                                 | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `status`                                                      | [shared.CardStatus](../../../sdk/models/shared/cardstatus.md) | :heavy_check_mark:                                            | N/A                                                           |
| `type`                                                        | [shared.CardType](../../../sdk/models/shared/cardtype.md)     | :heavy_check_mark:                                            | N/A                                                           |