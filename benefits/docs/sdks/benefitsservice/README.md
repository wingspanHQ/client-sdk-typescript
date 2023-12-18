# BenefitsService
(*benefitsService*)

## Overview

Operations related to service management

### Available Operations

* [getBenefitsService](#getbenefitsservice) - Retrieve Current Benefits Service Status
* [patchBenefitsServiceId](#patchbenefitsserviceid) - Modify Benefits Service Status

## getBenefitsService

Fetches the current status indicating whether the benefits service is enabled or disabled.

### Example Usage

```typescript
import { Benefits } from "@wingspan/benefits";

async function run() {
  const sdk = new Benefits({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.benefitsService.getBenefitsService();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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

async function run() {
  const sdk = new Benefits({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.benefitsService.patchBenefitsServiceId({
    serviceEnablementUpdate: {
      enabled: false,
    },
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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
