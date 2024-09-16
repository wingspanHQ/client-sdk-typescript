# GetInvoiceFeesResponse

## Example Usage

```typescript
import { GetInvoiceFeesResponse } from "@wingspan/payments/sdk/models/operations";

let value: GetInvoiceFeesResponse = {
  contentType: "<value>",
  statusCode: 652790,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `contentType`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | HTTP response content type for this operation                                       |
| `invoiceFeeCalculation`                                                             | [shared.InvoiceFeeCalculation](../../../sdk/models/shared/invoicefeecalculation.md) | :heavy_minus_sign:                                                                  | Fees on Invoice                                                                     |
| `statusCode`                                                                        | *number*                                                                            | :heavy_check_mark:                                                                  | HTTP response status code for this operation                                        |
| `rawResponse`                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)               | :heavy_check_mark:                                                                  | Raw HTTP response; suitable for custom response parsing                             |