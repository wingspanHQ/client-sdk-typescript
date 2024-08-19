# GetForm1099PDFResponse

## Example Usage

```typescript
import { GetForm1099PDFResponse } from "@wingspan/payments/sdk/models/operations";

let value: GetForm1099PDFResponse = {
    contentType: "<value>",
    statusCode: 957156,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `contentType`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | HTTP response content type for this operation                                     |
| `download1099Response`                                                            | [shared.Download1099Response](../../../sdk/models/shared/download1099response.md) | :heavy_minus_sign:                                                                | Download1099Response                                                              |
| `statusCode`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | HTTP response status code for this operation                                      |
| `rawResponse`                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)             | :heavy_check_mark:                                                                | Raw HTTP response; suitable for custom response parsing                           |