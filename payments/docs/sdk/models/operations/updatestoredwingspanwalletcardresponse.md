# UpdateStoredWingspanWalletCardResponse

## Example Usage

```typescript
import { UpdateStoredWingspanWalletCardResponse } from "@wingspan/payments/sdk/models/operations";

let value: UpdateStoredWingspanWalletCardResponse = {
  contentType: "<value>",
  statusCode: 544883,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `card`                                                                | [shared.Card](../../../sdk/models/shared/card.md)                     | :heavy_minus_sign:                                                    | A card summary                                                        |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |