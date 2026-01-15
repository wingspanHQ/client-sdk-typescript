# ListInvoiceTemplatesResponse

## Example Usage

```typescript
import { ListInvoiceTemplatesResponse } from "@wingspan/payments/sdk/models/operations";

let value: ListInvoiceTemplatesResponse = {
  contentType: "<value>",
  statusCode: 406,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `contentType`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | HTTP response content type for this operation                             |
| `statusCode`                                                              | *number*                                                                  | :heavy_check_mark:                                                        | HTTP response status code for this operation                              |
| `rawResponse`                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)     | :heavy_check_mark:                                                        | Raw HTTP response; suitable for custom response parsing                   |
| `classes`                                                                 | [shared.InvoiceTemplate](../../../sdk/models/shared/invoicetemplate.md)[] | :heavy_minus_sign:                                                        | At list of invoice templates                                              |