# Benefits SDK


## Overview

Wingspan Benefits API: Benefits

### Available Operations

* [getBenefitsEnrollmentId](#getbenefitsenrollmentid) - Retrieve Enrollment Details for a Specific Member
* [getBenefitsPlanEnrollment](#getbenefitsplanenrollment) - List all plan enrollments
* [getBenefitsPlanEnrollmentId](#getbenefitsplanenrollmentid) - Get a particular plan enrollment by ID
* [getBenefitsService](#getbenefitsservice) - Retrieve Current Benefits Service Status
* [patchBenefitsServiceId](#patchbenefitsserviceid) - Modify Benefits Service Status

## getBenefitsEnrollmentId

Fetches the enrollment status and details for a member identified by the provided unique identifier.

### Example Usage

```typescript
import { Benefits } from "@wingspan/benefits";

(async() => {
  const sdk = new Benefits();

  const res = await sdk.benefits.getBenefitsEnrollmentId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetBenefitsEnrollmentIdRequest](../../models/operations/getbenefitsenrollmentidrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetBenefitsEnrollmentIdResponse](../../models/operations/getbenefitsenrollmentidresponse.md)>**


## getBenefitsPlanEnrollment

List all plan enrollments

### Example Usage

```typescript
import { Benefits } from "@wingspan/benefits";

(async() => {
  const sdk = new Benefits();

  const res = await sdk.benefits.getBenefitsPlanEnrollment();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetBenefitsPlanEnrollmentResponse](../../models/operations/getbenefitsplanenrollmentresponse.md)>**


## getBenefitsPlanEnrollmentId

Get a particular plan enrollment by ID

### Example Usage

```typescript
import { Benefits } from "@wingspan/benefits";

(async() => {
  const sdk = new Benefits();

  const res = await sdk.benefits.getBenefitsPlanEnrollmentId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetBenefitsPlanEnrollmentIdRequest](../../models/operations/getbenefitsplanenrollmentidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetBenefitsPlanEnrollmentIdResponse](../../models/operations/getbenefitsplanenrollmentidresponse.md)>**


## getBenefitsService

Fetches the current status indicating whether the benefits service is enabled or disabled.

### Example Usage

```typescript
import { Benefits } from "@wingspan/benefits";

(async() => {
  const sdk = new Benefits();

  const res = await sdk.benefits.getBenefitsService();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetBenefitsServiceResponse](../../models/operations/getbenefitsserviceresponse.md)>**


## patchBenefitsServiceId

Allows users to change the enablement status of a specified benefits service.

### Example Usage

```typescript
import { Benefits } from "@wingspan/benefits";

(async() => {
  const sdk = new Benefits();

  const res = await sdk.benefits.patchBenefitsServiceId({
    serviceEnablementUpdate: {
      enabled: false,
    },
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.PatchBenefitsServiceIdRequest](../../models/operations/patchbenefitsserviceidrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.PatchBenefitsServiceIdResponse](../../models/operations/patchbenefitsserviceidresponse.md)>**

