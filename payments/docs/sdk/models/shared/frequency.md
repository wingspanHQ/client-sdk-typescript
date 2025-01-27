# Frequency

## Example Usage

```typescript
import { Frequency } from "@wingspan/payments/sdk/models/shared";

let value: Frequency = {
  startDate: "<value>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `daily`                                                   | *boolean*                                                 | :heavy_minus_sign:                                        | N/A                                                       |
| `dayInInterval`                                           | *number*                                                  | :heavy_minus_sign:                                        | N/A                                                       |
| `endDate`                                                 | *string*                                                  | :heavy_minus_sign:                                        | N/A                                                       |
| `every`                                                   | *number*                                                  | :heavy_minus_sign:                                        | N/A                                                       |
| `interval`                                                | [shared.Interval](../../../sdk/models/shared/interval.md) | :heavy_minus_sign:                                        | N/A                                                       |
| `startDate`                                               | *string*                                                  | :heavy_check_mark:                                        | N/A                                                       |
| `twicePerMonth`                                           | *boolean*                                                 | :heavy_minus_sign:                                        | N/A                                                       |