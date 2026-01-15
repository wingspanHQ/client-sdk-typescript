# CheckbookCard

## Example Usage

```typescript
import { CheckbookCard } from "@wingspan/payments/sdk/models/shared";

let value: CheckbookCard = {
  address: {
    addressLine1: "172 Makayla Field",
    city: "Larsonview",
    postalCode: "27438-9023",
    state: "South Dakota",
  },
  brand: "JCB",
  cardId: "<id>",
  expirationMM: "<value>",
  expirationYYYY: "<value>",
  last4: "<value>",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `address`                                               | [shared.Address](../../../sdk/models/shared/address.md) | :heavy_check_mark:                                      | N/A                                                     |
| `brand`                                                 | [shared.Brand](../../../sdk/models/shared/brand.md)     | :heavy_check_mark:                                      | N/A                                                     |
| `cardId`                                                | *string*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `expirationMM`                                          | *string*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `expirationYYYY`                                        | *string*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `last4`                                                 | *string*                                                | :heavy_check_mark:                                      | N/A                                                     |