# CardDetails

## Example Usage

```typescript
import { CardDetails } from "@wingspan/payments/sdk/models/shared";

let value: CardDetails = {
  address: {
    addressLine1: "621 West View",
    city: "Landenhaven",
    postalCode: "95898",
    state: "Delaware",
  },
  brand: "<value>",
  createdAt: "<value>",
  expirationDate: "<value>",
  last4Digits: "<value>",
  name: "<value>",
  status: "Frozen",
  type: "businessDebitCard",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `address`                                                                   | [shared.Address](../../../sdk/models/shared/address.md)                     | :heavy_check_mark:                                                          | N/A                                                                         |
| `brand`                                                                     | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `createdAt`                                                                 | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `expirationDate`                                                            | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `last4Digits`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `name`                                                                      | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `pinSet`                                                                    | *boolean*                                                                   | :heavy_minus_sign:                                                          | N/A                                                                         |
| `status`                                                                    | [shared.CardDetailsStatus](../../../sdk/models/shared/carddetailsstatus.md) | :heavy_check_mark:                                                          | N/A                                                                         |
| `type`                                                                      | [shared.CardDetailsType](../../../sdk/models/shared/carddetailstype.md)     | :heavy_check_mark:                                                          | N/A                                                                         |