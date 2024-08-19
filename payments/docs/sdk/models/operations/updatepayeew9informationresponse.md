# UpdatePayeeW9InformationResponse

## Example Usage

```typescript
import { UpdatePayeeW9InformationResponse } from "@wingspan/payments/sdk/models/operations";

let value: UpdatePayeeW9InformationResponse = {
    contentType: "<value>",
    statusCode: 118274,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `unions`                                                              | *shared.TaxFormResponse*[]                                            | :heavy_minus_sign:                                                    | List of 1099 Tax form objects                                         |