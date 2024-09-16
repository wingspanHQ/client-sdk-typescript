# ListCollaboratorGroupsResponse

## Example Usage

```typescript
import { ListCollaboratorGroupsResponse } from "@wingspan/payments/sdk/models/operations";

let value: ListCollaboratorGroupsResponse = {
  contentType: "<value>",
  statusCode: 820994,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP response content type for this operation                                                 |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP response status code for this operation                                                  |
| `rawResponse`                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                         | :heavy_check_mark:                                                                            | Raw HTTP response; suitable for custom response parsing                                       |
| `classes`                                                                                     | [shared.CollaboratorGroupResponse](../../../sdk/models/shared/collaboratorgroupresponse.md)[] | :heavy_minus_sign:                                                                            | A list of Collaborator Configurations created by client                                       |