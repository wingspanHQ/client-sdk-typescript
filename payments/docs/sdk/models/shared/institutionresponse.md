# InstitutionResponse

## Example Usage

```typescript
import { InstitutionResponse } from "@wingspan/payments/sdk/models/shared";

let value: InstitutionResponse = {
  address: "252 Sage Walks",
  isACHSupported: false,
  isRTPSupported: false,
  isWireSupported: false,
  name: "<value>",
  routingNumber: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `address`          | *string*           | :heavy_check_mark: | N/A                |
| `isACHSupported`   | *boolean*          | :heavy_check_mark: | N/A                |
| `isRTPSupported`   | *boolean*          | :heavy_check_mark: | N/A                |
| `isWireSupported`  | *boolean*          | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `routingNumber`    | *string*           | :heavy_check_mark: | N/A                |