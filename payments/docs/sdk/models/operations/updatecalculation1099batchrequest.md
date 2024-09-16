# UpdateCalculation1099BatchRequest

## Example Usage

```typescript
import { UpdateCalculation1099BatchRequest } from "@wingspan/payments/sdk/models/operations";

let value: UpdateCalculation1099BatchRequest = {
  batchId: "<value>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `bulkBatchUpdate`                                                       | [shared.BulkBatchUpdate](../../../sdk/models/shared/bulkbatchupdate.md) | :heavy_minus_sign:                                                      | N/A                                                                     |
| `batchId`                                                               | *string*                                                                | :heavy_check_mark:                                                      | Unique identifier for a batch                                           |