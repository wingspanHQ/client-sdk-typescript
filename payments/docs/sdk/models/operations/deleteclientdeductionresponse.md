# DeleteClientDeductionResponse

## Example Usage

```typescript
import { DeleteClientDeductionResponse } from "@wingspan/payments/sdk/models/operations";

let value: DeleteClientDeductionResponse = {
    contentType: "<value>",
    statusCode: 60225,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `contentType`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | HTTP response content type for this operation                               |
| `deductionResponse`                                                         | [shared.DeductionResponse](../../../sdk/models/shared/deductionresponse.md) | :heavy_minus_sign:                                                          | A deduction                                                                 |
| `statusCode`                                                                | *number*                                                                    | :heavy_check_mark:                                                          | HTTP response status code for this operation                                |
| `rawResponse`                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)       | :heavy_check_mark:                                                          | Raw HTTP response; suitable for custom response parsing                     |