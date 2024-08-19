# CreateCalculation1099BatchResponse

## Example Usage

```typescript
import { CreateCalculation1099BatchResponse } from "@wingspan/payments/sdk/models/operations";

let value: CreateCalculation1099BatchResponse = {
    contentType: "<value>",
    statusCode: 337396,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `bulkCalculation1099Batch`                                                                | [shared.BulkCalculation1099Batch](../../../sdk/models/shared/bulkcalculation1099batch.md) | :heavy_minus_sign:                                                                        | A batch of items for importing as calculation 1099s                                       |
| `contentType`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | HTTP response content type for this operation                                             |
| `statusCode`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | HTTP response status code for this operation                                              |
| `rawResponse`                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                     | :heavy_check_mark:                                                                        | Raw HTTP response; suitable for custom response parsing                                   |