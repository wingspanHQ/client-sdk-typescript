# GetClientBatchItemResponse

## Example Usage

```typescript
import { GetClientBatchItemResponse } from "@wingspan/payments/sdk/models/operations";

let value: GetClientBatchItemResponse = {
  contentType: "<value>",
  statusCode: 305,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `bulkClientItem`                                                      | [shared.BulkClientItem](../../../sdk/models/shared/bulkclientitem.md) | :heavy_minus_sign:                                                    | An item that will be converted into a client                          |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |