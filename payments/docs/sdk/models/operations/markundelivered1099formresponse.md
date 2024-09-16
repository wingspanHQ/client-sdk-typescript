# MarkUndelivered1099FormResponse

## Example Usage

```typescript
import { MarkUndelivered1099FormResponse } from "@wingspan/payments/sdk/models/operations";

let value: MarkUndelivered1099FormResponse = {
  contentType: "<value>",
  statusCode: 473608,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response content type for this operation                                                       |
| `mark1099AsUndeliveredResponse`                                                                     | [shared.Mark1099AsUndeliveredResponse](../../../sdk/models/shared/mark1099asundeliveredresponse.md) | :heavy_minus_sign:                                                                                  | Mark 1099 as undelivered response                                                                   |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response status code for this operation                                                        |
| `rawResponse`                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                               | :heavy_check_mark:                                                                                  | Raw HTTP response; suitable for custom response parsing                                             |