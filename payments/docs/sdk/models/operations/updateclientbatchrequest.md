# UpdateClientBatchRequest

## Example Usage

```typescript
import { UpdateClientBatchRequest } from "@wingspan/payments/sdk/models/operations";

let value: UpdateClientBatchRequest = {
  batchId: "<id>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `bulkBatchUpdate`                                                       | [shared.BulkBatchUpdate](../../../sdk/models/shared/bulkbatchupdate.md) | :heavy_minus_sign:                                                      | N/A                                                                     |
| `batchId`                                                               | *string*                                                                | :heavy_check_mark:                                                      | Unique identifier for a batch                                           |