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

  const res = await sdk.getBenefitsEnrollmentId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetBenefitsEnrollmentIdRequest](../../sdk/models/operations/getbenefitsenrollmentidrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetBenefitsEnrollmentIdResponse](../../sdk/models/operations/getbenefitsenrollmentidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getBenefitsPlanEnrollment

List all plan enrollments

### Example Usage

```typescript
import { Benefits } from "@wingspan/benefits";

(async() => {
  const sdk = new Benefits();

  const res = await sdk.getBenefitsPlanEnrollment();

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

**Promise<[operations.GetBenefitsPlanEnrollmentResponse](../../sdk/models/operations/getbenefitsplanenrollmentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getBenefitsPlanEnrollmentId

Get a particular plan enrollment by ID

### Example Usage

```typescript
import { Benefits } from "@wingspan/benefits";

(async() => {
  const sdk = new Benefits();

  const res = await sdk.getBenefitsPlanEnrollmentId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.GetBenefitsPlanEnrollmentIdRequest](../../sdk/models/operations/getbenefitsplanenrollmentidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.GetBenefitsPlanEnrollmentIdResponse](../../sdk/models/operations/getbenefitsplanenrollmentidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getBenefitsService

Fetches the current status indicating whether the benefits service is enabled or disabled.

### Example Usage

```typescript
import { Benefits } from "@wingspan/benefits";

(async() => {
  const sdk = new Benefits();

  const res = await sdk.getBenefitsService();

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

**Promise<[operations.GetBenefitsServiceResponse](../../sdk/models/operations/getbenefitsserviceresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchBenefitsServiceId

Allows users to change the enablement status of a specified benefits service.

### Example Usage

```typescript
import { Benefits } from "@wingspan/benefits";

(async() => {
  const sdk = new Benefits();

  const res = await sdk.patchBenefitsServiceId({
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

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.PatchBenefitsServiceIdRequest](../../sdk/models/operations/patchbenefitsserviceidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PatchBenefitsServiceIdResponse](../../sdk/models/operations/patchbenefitsserviceidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
