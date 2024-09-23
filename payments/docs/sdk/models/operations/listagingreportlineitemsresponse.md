# ListAgingReportLineItemsResponse

## Example Usage

```typescript
import { ListAgingReportLineItemsResponse } from "@wingspan/payments/sdk/models/operations";

let value: ListAgingReportLineItemsResponse = {
  contentType: "<value>",
  statusCode: 521037,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response content type for this operation                                                       |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response status code for this operation                                                        |
| `rawResponse`                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                               | :heavy_check_mark:                                                                                  | Raw HTTP response; suitable for custom response parsing                                             |
| `classes`                                                                                           | [shared.LineItemsAgingReportResponse](../../../sdk/models/shared/lineitemsagingreportresponse.md)[] | :heavy_minus_sign:                                                                                  | Line items list grouped by age                                                                      |