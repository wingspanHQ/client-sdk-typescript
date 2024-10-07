# ScheduleDate

## Example Usage

```typescript
import { ScheduleDate } from "@wingspan/payments/sdk/models/shared";

let value: ScheduleDate = {
  date: "2024-09-18",
  status: "Modified",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `cutOffDate`                                                                  | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `date`                                                                        | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `invoiceId`                                                                   | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `invoiceTemplateId`                                                           | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `status`                                                                      | [shared.ScheduleDateStatus](../../../sdk/models/shared/scheduledatestatus.md) | :heavy_check_mark:                                                            | N/A                                                                           |