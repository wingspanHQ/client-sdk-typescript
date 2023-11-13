# GetPaymentsV2ClientClientIdResponse


## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `collaboratorV2`                                                      | [shared.CollaboratorV2](../../../sdk/models/shared/collaboratorv2.md) | :heavy_minus_sign:                                                    | A single V2 Collaborator                                              |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [AxiosResponse](https://axios-http.com/docs/res_schema)               | :heavy_minus_sign:                                                    | Raw HTTP response; suitable for custom response parsing               |