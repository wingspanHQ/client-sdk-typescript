# CreateGeneratedInvoiceResponse

## Example Usage

```typescript
import { CreateGeneratedInvoiceResponse } from "@wingspan/payments/sdk/models/operations";

let value: CreateGeneratedInvoiceResponse = {
  contentType: "<value>",
  statusCode: 363711,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `clientInvoice`                                                       | [shared.ClientInvoice](../../../sdk/models/shared/clientinvoice.md)   | :heavy_minus_sign:                                                    | A client created invoice                                              |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |