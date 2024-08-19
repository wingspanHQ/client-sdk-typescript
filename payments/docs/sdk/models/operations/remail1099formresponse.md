# Remail1099FormResponse

## Example Usage

```typescript
import { Remail1099FormResponse } from "@wingspan/payments/sdk/models/operations";

let value: Remail1099FormResponse = {
    contentType: "<value>",
    statusCode: 799159,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `contentType`                                                                 | *string*                                                                      | :heavy_check_mark:                                                            | HTTP response content type for this operation                                 |
| `remail1099Response`                                                          | [shared.Remail1099Response](../../../sdk/models/shared/remail1099response.md) | :heavy_minus_sign:                                                            | Remail 1099 response                                                          |
| `statusCode`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | HTTP response status code for this operation                                  |
| `rawResponse`                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)         | :heavy_check_mark:                                                            | Raw HTTP response; suitable for custom response parsing                       |