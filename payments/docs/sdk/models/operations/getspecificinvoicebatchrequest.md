# GetSpecificInvoiceBatchRequest

## Example Usage

```typescript
import { GetSpecificInvoiceBatchRequest } from "@wingspan/payments/sdk/models/operations";

let value: GetSpecificInvoiceBatchRequest = {
    batchId: "<value>",
    batchItemId: "<value>",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `batchId`                                | *string*                                 | :heavy_check_mark:                       | Unique identifier for a batch            |
| `batchItemId`                            | *string*                                 | :heavy_check_mark:                       | Unique identifier for an item in a batch |