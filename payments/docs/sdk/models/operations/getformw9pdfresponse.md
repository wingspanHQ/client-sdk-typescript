# GetFormW9PDFResponse

## Example Usage

```typescript
import { GetFormW9PDFResponse } from "@wingspan/payments/sdk/models/operations";

let value: GetFormW9PDFResponse = {
  contentType: "<value>",
  statusCode: 778157,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `contentType`                                                                 | *string*                                                                      | :heavy_check_mark:                                                            | HTTP response content type for this operation                                 |
| `downloadW9Response`                                                          | [shared.DownloadW9Response](../../../sdk/models/shared/downloadw9response.md) | :heavy_minus_sign:                                                            | A file stream for a W9 PDF download.                                          |
| `statusCode`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | HTTP response status code for this operation                                  |
| `rawResponse`                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)         | :heavy_check_mark:                                                            | Raw HTTP response; suitable for custom response parsing                       |