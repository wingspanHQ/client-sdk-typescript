# RefundDepositedInvoiceResponse

## Example Usage

```typescript
import { RefundDepositedInvoiceResponse } from "@wingspan/payments/sdk/models/operations";

let value: RefundDepositedInvoiceResponse = {
  contentType: "<value>",
  statusCode: 508,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `invoice`                                                             | [shared.Invoice](../../../sdk/models/shared/invoice.md)               | :heavy_minus_sign:                                                    | An invoice                                                            |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |