# GetServiceStatusResponse

## Example Usage

```typescript
import { GetServiceStatusResponse } from "@wingspan/payments/sdk/models/operations";

let value: GetServiceStatusResponse = {
  contentType: "<value>",
  statusCode: 548814,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `ping`                                                                | [shared.Ping](../../../sdk/models/shared/ping.md)                     | :heavy_minus_sign:                                                    | timestamp and name of service being pinged                            |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |