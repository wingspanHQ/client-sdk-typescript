# BulkPayableBatchCreate

## Example Usage

```typescript
import { BulkPayableBatchCreate } from "@wingspan/payments/sdk/models/shared";

let value: BulkPayableBatchCreate = {
  processingStrategy: "Merge",
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `labels`                                                                                                                  | Record<string, *string*>                                                                                                  | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `processingStrategy`                                                                                                      | [shared.BulkPayableBatchCreateProcessingStrategy](../../../sdk/models/shared/bulkpayablebatchcreateprocessingstrategy.md) | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |