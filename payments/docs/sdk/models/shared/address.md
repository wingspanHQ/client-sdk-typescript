# Address

## Example Usage

```typescript
import { Address } from "@wingspan/payments/sdk/models/shared";

let value: Address = {
  addressLine1: "604 Leuschke Port",
  city: "East Gladys",
  postalCode: "19548-4739",
  state: "Ohio",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `addressLine1`     | *string*           | :heavy_check_mark: | N/A                |
| `addressLine2`     | *string*           | :heavy_minus_sign: | N/A                |
| `city`             | *string*           | :heavy_check_mark: | N/A                |
| `postalCode`       | *string*           | :heavy_check_mark: | N/A                |
| `state`            | *string*           | :heavy_check_mark: | N/A                |