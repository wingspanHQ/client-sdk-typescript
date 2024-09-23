# GetPayableBatchItemResponse

## Example Usage

```typescript
import { GetPayableBatchItemResponse } from "@wingspan/payments/sdk/models/operations";

let value: GetPayableBatchItemResponse = {
  contentType: "<value>",
  statusCode: 158969,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `bulkPayableImportSummary`                                                                | [shared.BulkPayableImportSummary](../../../sdk/models/shared/bulkpayableimportsummary.md) | :heavy_minus_sign:                                                                        | Summary of the bulk payable import                                                        |
| `contentType`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | HTTP response content type for this operation                                             |
| `statusCode`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | HTTP response status code for this operation                                              |
| `rawResponse`                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                     | :heavy_check_mark:                                                                        | Raw HTTP response; suitable for custom response parsing                                   |