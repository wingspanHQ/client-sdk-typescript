# UpdateCollaboratorBatchResponse

## Example Usage

```typescript
import { UpdateCollaboratorBatchResponse } from "@wingspan/payments/sdk/models/operations";

let value: UpdateCollaboratorBatchResponse = {
    contentType: "<value>",
    statusCode: 449950,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `bulkCollaboratorBatch`                                                             | [shared.BulkCollaboratorBatch](../../../sdk/models/shared/bulkcollaboratorbatch.md) | :heavy_minus_sign:                                                                  | A batch of items for importing as collaborators                                     |
| `contentType`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | HTTP response content type for this operation                                       |
| `statusCode`                                                                        | *number*                                                                            | :heavy_check_mark:                                                                  | HTTP response status code for this operation                                        |
| `rawResponse`                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)               | :heavy_check_mark:                                                                  | Raw HTTP response; suitable for custom response parsing                             |