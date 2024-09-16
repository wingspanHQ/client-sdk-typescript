# Address

## Example Usage

```typescript
import { Address } from "@wingspan/payments/sdk/models/shared";

let value: Address = {
  addressLine1: "92306 Cole Place",
  city: "Spencerboro",
  postalCode: "13550",
  state: "Florida",
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