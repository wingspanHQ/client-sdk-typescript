# UpdatePayableBatchRequest

## Example Usage

```typescript
import { UpdatePayableBatchRequest } from "@wingspan/payments/sdk/models/operations";

let value: UpdatePayableBatchRequest = {
  batchId: "<value>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `bulkPayableBatchUpdate`                                                              | [shared.BulkPayableBatchUpdate](../../../sdk/models/shared/bulkpayablebatchupdate.md) | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `batchId`                                                                             | *string*                                                                              | :heavy_check_mark:                                                                    | Unique identifier for a batch                                                         |