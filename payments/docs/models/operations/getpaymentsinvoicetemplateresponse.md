# GetPaymentsInvoiceTemplateResponse


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `contentType`                                                      | *string*                                                           | :heavy_check_mark:                                                 | HTTP response content type for this operation                      |
| `invoiceTemplates`                                                 | [shared.InvoiceTemplate](../../models/shared/invoicetemplate.md)[] | :heavy_minus_sign:                                                 | At list of invoice templates                                       |
| `statusCode`                                                       | *number*                                                           | :heavy_check_mark:                                                 | HTTP response status code for this operation                       |
| `rawResponse`                                                      | [AxiosResponse](https://axios-http.com/docs/res_schema)            | :heavy_minus_sign:                                                 | Raw HTTP response; suitable for custom response parsing            |