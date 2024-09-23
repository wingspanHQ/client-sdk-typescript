# CheckbookCardCreate

## Example Usage

```typescript
import { CheckbookCardCreate } from "@wingspan/payments/sdk/models/shared";

let value: CheckbookCardCreate = {
  cardNumber: "4860319446319",
  expMM: "<value>",
  expYYYY: "<value>",
  name: "<value>",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `address`                                               | [shared.Address](../../../sdk/models/shared/address.md) | :heavy_minus_sign:                                      | N/A                                                     |
| `cardNumber`                                            | *string*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `cvv`                                                   | *string*                                                | :heavy_minus_sign:                                      | N/A                                                     |
| `expMM`                                                 | *string*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `expYYYY`                                               | *string*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `name`                                                  | *string*                                                | :heavy_check_mark:                                      | N/A                                                     |