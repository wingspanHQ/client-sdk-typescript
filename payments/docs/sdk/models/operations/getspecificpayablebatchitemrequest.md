# GetSpecificPayableBatchItemRequest

## Example Usage

```typescript
import { GetSpecificPayableBatchItemRequest } from "@wingspan/payments/sdk/models/operations";

let value: GetSpecificPayableBatchItemRequest = {
  batchId: "<id>",
  batchItemId: "<id>",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `batchId`                                | *string*                                 | :heavy_check_mark:                       | Unique identifier for a batch            |
| `batchItemId`                            | *string*                                 | :heavy_check_mark:                       | Unique identifier for an item in a batch |