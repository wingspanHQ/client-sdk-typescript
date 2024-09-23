# GetCalculation1099BatchItemResponse

## Example Usage

```typescript
import { GetCalculation1099BatchItemResponse } from "@wingspan/payments/sdk/models/operations";

let value: GetCalculation1099BatchItemResponse = {
  contentType: "<value>",
  statusCode: 616934,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `bulkCalculation1099Item`                                                               | [shared.BulkCalculation1099Item](../../../sdk/models/shared/bulkcalculation1099item.md) | :heavy_minus_sign:                                                                      | An item that will be converted into a calculation 1099                                  |
| `contentType`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | HTTP response content type for this operation                                           |
| `statusCode`                                                                            | *number*                                                                                | :heavy_check_mark:                                                                      | HTTP response status code for this operation                                            |
| `rawResponse`                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                   | :heavy_check_mark:                                                                      | Raw HTTP response; suitable for custom response parsing                                 |