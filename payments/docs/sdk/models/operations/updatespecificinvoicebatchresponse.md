# UpdateSpecificInvoiceBatchResponse

## Example Usage

```typescript
import { UpdateSpecificInvoiceBatchResponse } from "@wingspan/payments/sdk/models/operations";

let value: UpdateSpecificInvoiceBatchResponse = {
  contentType: "<value>",
  statusCode: 692472,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `bulkInvoiceItem`                                                       | [shared.BulkInvoiceItem](../../../sdk/models/shared/bulkinvoiceitem.md) | :heavy_minus_sign:                                                      | An item that will be converted into a invoice                           |
| `contentType`                                                           | *string*                                                                | :heavy_check_mark:                                                      | HTTP response content type for this operation                           |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP response status code for this operation                            |
| `rawResponse`                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)   | :heavy_check_mark:                                                      | Raw HTTP response; suitable for custom response parsing                 |