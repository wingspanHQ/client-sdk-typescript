# BulkInvoiceBatchCreate

## Example Usage

```typescript
import { BulkInvoiceBatchCreate } from "@wingspan/payments/sdk/models/shared";

let value: BulkInvoiceBatchCreate = {
  processingStrategy: "Merge",
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `labels`                                                                                                                  | Record<string, *string*>                                                                                                  | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `processingStrategy`                                                                                                      | [shared.BulkInvoiceBatchCreateProcessingStrategy](../../../sdk/models/shared/bulkinvoicebatchcreateprocessingstrategy.md) | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |