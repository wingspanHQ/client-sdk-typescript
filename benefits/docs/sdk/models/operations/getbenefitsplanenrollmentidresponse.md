# GetBenefitsPlanEnrollmentIdResponse


## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `planEnrollment`                                                      | [shared.PlanEnrollment](../../../sdk/models/shared/planenrollment.md) | :heavy_minus_sign:                                                    | An enrollment into a plan                                             |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [AxiosResponse](https://axios-http.com/docs/res_schema)               | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |