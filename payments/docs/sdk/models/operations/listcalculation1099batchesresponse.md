# ListCalculation1099BatchesResponse

## Example Usage

```typescript
import { ListCalculation1099BatchesResponse } from "@wingspan/payments/sdk/models/operations";

let value: ListCalculation1099BatchesResponse = {
    contentType: "<value>",
    statusCode: 870013,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `contentType`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | HTTP response content type for this operation                                               |
| `statusCode`                                                                                | *number*                                                                                    | :heavy_check_mark:                                                                          | HTTP response status code for this operation                                                |
| `rawResponse`                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                       | :heavy_check_mark:                                                                          | Raw HTTP response; suitable for custom response parsing                                     |
| `classes`                                                                                   | [shared.BulkCalculation1099Batch](../../../sdk/models/shared/bulkcalculation1099batch.md)[] | :heavy_minus_sign:                                                                          | A list of bulk calculation 1099 batches                                                     |