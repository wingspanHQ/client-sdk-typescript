# GetBankingInstitutionResponse

## Example Usage

```typescript
import { GetBankingInstitutionResponse } from "@wingspan/payments/sdk/models/operations";

let value: GetBankingInstitutionResponse = {
  contentType: "<value>",
  statusCode: 461479,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `contentType`                                                                   | *string*                                                                        | :heavy_check_mark:                                                              | HTTP response content type for this operation                                   |
| `institutionResponse`                                                           | [shared.InstitutionResponse](../../../sdk/models/shared/institutionresponse.md) | :heavy_minus_sign:                                                              | Institution Response                                                            |
| `statusCode`                                                                    | *number*                                                                        | :heavy_check_mark:                                                              | HTTP response status code for this operation                                    |
| `rawResponse`                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)           | :heavy_check_mark:                                                              | Raw HTTP response; suitable for custom response parsing                         |