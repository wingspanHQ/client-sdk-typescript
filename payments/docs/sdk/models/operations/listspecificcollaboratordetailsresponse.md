# ListSpecificCollaboratorDetailsResponse

## Example Usage

```typescript
import { ListSpecificCollaboratorDetailsResponse } from "@wingspan/payments/sdk/models/operations";

let value: ListSpecificCollaboratorDetailsResponse = {
    contentType: "<value>",
    statusCode: 97101,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `collaboratorV2`                                                      | [shared.CollaboratorV2](../../../sdk/models/shared/collaboratorv2.md) | :heavy_minus_sign:                                                    | A single V2 Collaborator                                              |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |