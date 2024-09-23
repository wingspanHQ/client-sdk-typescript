# ListCalculation1099BatchItemsResponse

## Example Usage

```typescript
import { ListCalculation1099BatchItemsResponse } from "@wingspan/payments/sdk/models/operations";

let value: ListCalculation1099BatchItemsResponse = {
  contentType: "<value>",
  statusCode: 681820,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `contentType`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | HTTP response content type for this operation                                             |
| `statusCode`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | HTTP response status code for this operation                                              |
| `rawResponse`                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                     | :heavy_check_mark:                                                                        | Raw HTTP response; suitable for custom response parsing                                   |
| `classes`                                                                                 | [shared.BulkCalculation1099Item](../../../sdk/models/shared/bulkcalculation1099item.md)[] | :heavy_minus_sign:                                                                        | A list of bulk calculation 1099 items                                                     |