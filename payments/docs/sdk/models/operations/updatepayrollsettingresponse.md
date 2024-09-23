# UpdatePayrollSettingResponse

## Example Usage

```typescript
import { UpdatePayrollSettingResponse } from "@wingspan/payments/sdk/models/operations";

let value: UpdatePayrollSettingResponse = {
  contentType: "<value>",
  statusCode: 11714,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `contentType`                                                           | *string*                                                                | :heavy_check_mark:                                                      | HTTP response content type for this operation                           |
| `payrollSettings`                                                       | [shared.PayrollSettings](../../../sdk/models/shared/payrollsettings.md) | :heavy_minus_sign:                                                      | The payroll settings for a member                                       |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP response status code for this operation                            |
| `rawResponse`                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)   | :heavy_check_mark:                                                      | Raw HTTP response; suitable for custom response parsing                 |