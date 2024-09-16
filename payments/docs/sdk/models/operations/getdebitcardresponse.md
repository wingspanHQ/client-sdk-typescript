# GetDebitCardResponse

## Example Usage

```typescript
import { GetDebitCardResponse } from "@wingspan/payments/sdk/models/operations";

let value: GetDebitCardResponse = {
  contentType: "<value>",
  statusCode: 812169,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `checkbookCard`                                                       | [shared.CheckbookCard](../../../sdk/models/shared/checkbookcard.md)   | :heavy_minus_sign:                                                    | A payout debit card                                                   |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |