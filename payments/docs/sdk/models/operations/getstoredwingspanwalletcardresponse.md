# GetStoredWingspanWalletCardResponse

## Example Usage

```typescript
import { GetStoredWingspanWalletCardResponse } from "@wingspan/payments/sdk/models/operations";

let value: GetStoredWingspanWalletCardResponse = {
    contentType: "<value>",
    statusCode: 844266,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `cardDetails`                                                         | [shared.CardDetails](../../../sdk/models/shared/carddetails.md)       | :heavy_minus_sign:                                                    | A card summary with additional details                                |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |