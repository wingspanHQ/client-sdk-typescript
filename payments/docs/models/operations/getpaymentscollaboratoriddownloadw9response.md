# GetPaymentsCollaboratorIdDownloadW9Response


## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `contentType`                                                          | *string*                                                               | :heavy_check_mark:                                                     | HTTP response content type for this operation                          |
| `downloadW9Response`                                                   | [shared.DownloadW9Response](../../models/shared/downloadw9response.md) | :heavy_minus_sign:                                                     | A file stream for a W9 PDF download.                                   |
| `statusCode`                                                           | *number*                                                               | :heavy_check_mark:                                                     | HTTP response status code for this operation                           |
| `rawResponse`                                                          | [AxiosResponse](https://axios-http.com/docs/res_schema)                | :heavy_minus_sign:                                                     | Raw HTTP response; suitable for custom response parsing                |