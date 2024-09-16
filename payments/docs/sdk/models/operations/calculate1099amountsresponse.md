# Calculate1099AmountsResponse

## Example Usage

```typescript
import { Calculate1099AmountsResponse } from "@wingspan/payments/sdk/models/operations";

let value: Calculate1099AmountsResponse = {
  contentType: "<value>",
  statusCode: 836079,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `calculate1099Response`                                                             | [shared.Calculate1099Response](../../../sdk/models/shared/calculate1099response.md) | :heavy_minus_sign:                                                                  | Calculate 1099 amounts response                                                     |
| `contentType`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | HTTP response content type for this operation                                       |
| `statusCode`                                                                        | *number*                                                                            | :heavy_check_mark:                                                                  | HTTP response status code for this operation                                        |
| `rawResponse`                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)               | :heavy_check_mark:                                                                  | Raw HTTP response; suitable for custom response parsing                             |