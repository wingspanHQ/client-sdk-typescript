# GetPaymentsCollaboratorIdEventsResponse


## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `collaboratorEvents`                                                   | [shared.CollaboratorEvents](../../models/shared/collaboratorevents.md) | :heavy_minus_sign:                                                     | List of events on collaborator                                         |
| `contentType`                                                          | *string*                                                               | :heavy_check_mark:                                                     | HTTP response content type for this operation                          |
| `statusCode`                                                           | *number*                                                               | :heavy_check_mark:                                                     | HTTP response status code for this operation                           |
| `rawResponse`                                                          | [AxiosResponse](https://axios-http.com/docs/res_schema)                | :heavy_minus_sign:                                                     | Raw HTTP response; suitable for custom response parsing                |