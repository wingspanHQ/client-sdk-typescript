# UpdateClientInvoiceTemplateResponse

## Example Usage

```typescript
import { UpdateClientInvoiceTemplateResponse } from "@wingspan/payments/sdk/models/operations";

let value: UpdateClientInvoiceTemplateResponse = {
  contentType: "<value>",
  statusCode: 581273,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `clientInvoiceTemplate`                                                             | [shared.ClientInvoiceTemplate](../../../sdk/models/shared/clientinvoicetemplate.md) | :heavy_minus_sign:                                                                  | A client created invoiceTemplate (recurring Invoice)                                |
| `contentType`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | HTTP response content type for this operation                                       |
| `statusCode`                                                                        | *number*                                                                            | :heavy_check_mark:                                                                  | HTTP response status code for this operation                                        |
| `rawResponse`                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)               | :heavy_check_mark:                                                                  | Raw HTTP response; suitable for custom response parsing                             |