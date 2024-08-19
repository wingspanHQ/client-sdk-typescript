# CreateInvoiceBatchResponse

## Example Usage

```typescript
import { CreateInvoiceBatchResponse } from "@wingspan/payments/sdk/models/operations";

let value: CreateInvoiceBatchResponse = {
    contentType: "<value>",
    statusCode: 720633,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `bulkInvoiceBatch`                                                        | [shared.BulkInvoiceBatch](../../../sdk/models/shared/bulkinvoicebatch.md) | :heavy_minus_sign:                                                        | A batch of items for importing as invoices                                |
| `contentType`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | HTTP response content type for this operation                             |
| `statusCode`                                                              | *number*                                                                  | :heavy_check_mark:                                                        | HTTP response status code for this operation                              |
| `rawResponse`                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)     | :heavy_check_mark:                                                        | Raw HTTP response; suitable for custom response parsing                   |