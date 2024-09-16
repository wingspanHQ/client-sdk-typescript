# CreateRecipientProofResponse

## Example Usage

```typescript
import { CreateRecipientProofResponse } from "@wingspan/payments/sdk/models/operations";

let value: CreateRecipientProofResponse = {
  contentType: "<value>",
  statusCode: 648172,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `taxFormResponse`                                                     | *shared.TaxFormResponse*                                              | :heavy_minus_sign:                                                    | 1099 Tax form object                                                  |