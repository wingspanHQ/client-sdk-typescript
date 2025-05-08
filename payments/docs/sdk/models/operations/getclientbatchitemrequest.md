# GetClientBatchItemRequest

## Example Usage

```typescript
import { GetClientBatchItemRequest } from "@wingspan/payments/sdk/models/operations";

let value: GetClientBatchItemRequest = {
  batchId: "<id>",
  batchItemId: "<id>",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `batchId`                                | *string*                                 | :heavy_check_mark:                       | Unique identifier for a batch            |
| `batchItemId`                            | *string*                                 | :heavy_check_mark:                       | Unique identifier for an item in a batch |