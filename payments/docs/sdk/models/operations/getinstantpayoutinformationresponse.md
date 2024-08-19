# GetInstantPayoutInformationResponse

## Example Usage

```typescript
import { GetInstantPayoutInformationResponse } from "@wingspan/payments/sdk/models/operations";

let value: GetInstantPayoutInformationResponse = {
    contentType: "<value>",
    statusCode: 437587,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `contentType`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | HTTP response content type for this operation                                       |
| `instantPayoutResponse`                                                             | [shared.InstantPayoutResponse](../../../sdk/models/shared/instantpayoutresponse.md) | :heavy_minus_sign:                                                                  | Instant Payout details                                                              |
| `statusCode`                                                                        | *number*                                                                            | :heavy_check_mark:                                                                  | HTTP response status code for this operation                                        |
| `rawResponse`                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)               | :heavy_check_mark:                                                                  | Raw HTTP response; suitable for custom response parsing                             |