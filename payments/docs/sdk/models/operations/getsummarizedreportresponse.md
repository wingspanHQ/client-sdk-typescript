# GetSummarizedReportResponse

## Example Usage

```typescript
import { GetSummarizedReportResponse } from "@wingspan/payments/sdk/models/operations";

let value: GetSummarizedReportResponse = {
  contentType: "<value>",
  statusCode: 565189,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                 | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | HTTP response content type for this operation                                                                                 |
| `statusCode`                                                                                                                  | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | HTTP response status code for this operation                                                                                  |
| `rawResponse`                                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                         | :heavy_check_mark:                                                                                                            | Raw HTTP response; suitable for custom response parsing                                                                       |
| `classes`                                                                                                                     | [shared.CollaboratorsPayoutsSummaryReportResponse](../../../sdk/models/shared/collaboratorspayoutssummaryreportresponse.md)[] | :heavy_minus_sign:                                                                                                            | Collaborators payouts summary report                                                                                          |