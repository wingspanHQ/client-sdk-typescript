# InvoiceTemplateCreateRequest

## Example Usage

```typescript
import { InvoiceTemplateCreateRequest } from "@wingspan/payments/sdk/models/shared";

let value: InvoiceTemplateCreateRequest = {
    invoiceData: {
        lineItems: [{}],
        memberClientId: "<value>",
    },
    status: "Draft",
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `dueInDays`                                                                                                   | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `frequency`                                                                                                   | [shared.Frequency](../../../sdk/models/shared/frequency.md)                                                   | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `invoiceData`                                                                                                 | [shared.InvoiceDataCreateRequest](../../../sdk/models/shared/invoicedatacreaterequest.md)                     | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `isSchedulingOnly`                                                                                            | *boolean*                                                                                                     | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `labels`                                                                                                      | Record<string, *string*>                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `scheduleDates`                                                                                               | [shared.ScheduleDate](../../../sdk/models/shared/scheduledate.md)[]                                           | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `sendEmails`                                                                                                  | *boolean*                                                                                                     | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `status`                                                                                                      | [shared.InvoiceTemplateCreateRequestStatus](../../../sdk/models/shared/invoicetemplatecreaterequeststatus.md) | :heavy_check_mark:                                                                                            | N/A                                                                                                           |