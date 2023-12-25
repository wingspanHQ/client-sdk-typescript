# DocumentSigningAndEligibility
(*documentSigningAndEligibility*)

### Available Operations

* [deletePaymentsCollaboratorGroupIdEligibilityRequirementEligibilityRequirementId](#deletepaymentscollaboratorgroupideligibilityrequirementeligibilityrequirementid) - Remove Eligibility Requirement from Collaborator Group
* [deletePaymentsCollaboratorSettingsEligibilityRequirementId](#deletepaymentscollaboratorsettingseligibilityrequirementid) - Remove a Specific Eligibility Requirement
* [deletePaymentsCollaboratorSettingsPaymentEligibilityId](#deletepaymentscollaboratorsettingspaymenteligibilityid) - Remove a specific Payment Eligibility Requirement
* [getPaymentsCollaboratorGroupId](#getpaymentscollaboratorgroupid) - Retrieve Specific Collaborator Group Configuration
* [getPaymentsCollaboratorSettingsEligibilityRequirement](#getpaymentscollaboratorsettingseligibilityrequirement) - Retrieve all Eligibility Requirements
* [getPaymentsCollaboratorSettingsEligibilityRequirementId](#getpaymentscollaboratorsettingseligibilityrequirementid) - Retrieve a Specific Eligibility Requirement
* [getPaymentsCollaboratorSettingsPaymentEligibility](#getpaymentscollaboratorsettingspaymenteligibility) - Retrieve All Payment Eligibility Requirements
* [getPaymentsCollaboratorSettingsPaymentEligibilityId](#getpaymentscollaboratorsettingspaymenteligibilityid) - Retrieve details of a specific Payment Eligibility Requirement
* [patchPaymentsCollaboratorGroupId](#patchpaymentscollaboratorgroupid) - Modify Collaborator Group Configuration
* [patchPaymentsCollaboratorGroupIdEligibilityRequirementEligibilityRequirementId](#patchpaymentscollaboratorgroupideligibilityrequirementeligibilityrequirementid) - Modify Eligibility Requirement for Collaborator Group
* [patchPaymentsCollaboratorSettingsEligibilityRequirementId](#patchpaymentscollaboratorsettingseligibilityrequirementid) - Modify a Specific Eligibility Requirement
* [patchPaymentsCollaboratorSettingsPaymentEligibilityId](#patchpaymentscollaboratorsettingspaymenteligibilityid) - Modify a specific Payment Eligibility Requirement
* [postPaymentsCollaboratorSettingsEligibilityRequirement](#postpaymentscollaboratorsettingseligibilityrequirement) - Establish a new Eligibility Requirement
* [postPaymentsCollaboratorSettingsPaymentEligibility](#postpaymentscollaboratorsettingspaymenteligibility) - Add a New Payment Eligibility Requirement

## deletePaymentsCollaboratorGroupIdEligibilityRequirementEligibilityRequirementId

Delete a specific eligibility requirement from the designated collaborator group.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.documentSigningAndEligibility.deletePaymentsCollaboratorGroupIdEligibilityRequirementEligibilityRequirementId({
    eligibilityRequirementId: "string",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                  | [operations.DeletePaymentsCollaboratorGroupIdEligibilityRequirementEligibilityRequirementIdRequest](../../sdk/models/operations/deletepaymentscollaboratorgroupideligibilityrequirementeligibilityrequirementidrequest.md) | :heavy_check_mark:                                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                                 |
| `config`                                                                                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                         | Available config options for making requests.                                                                                                                                                                              |


### Response

**Promise<[operations.DeletePaymentsCollaboratorGroupIdEligibilityRequirementEligibilityRequirementIdResponse](../../sdk/models/operations/deletepaymentscollaboratorgroupideligibilityrequirementeligibilityrequirementidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deletePaymentsCollaboratorSettingsEligibilityRequirementId

Delete an eligibility requirement from the system based on its unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.documentSigningAndEligibility.deletePaymentsCollaboratorSettingsEligibilityRequirementId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                        | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                        | [operations.DeletePaymentsCollaboratorSettingsEligibilityRequirementIdRequest](../../sdk/models/operations/deletepaymentscollaboratorsettingseligibilityrequirementidrequest.md) | :heavy_check_mark:                                                                                                                                                               | The request object to use for the request.                                                                                                                                       |
| `config`                                                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                     | :heavy_minus_sign:                                                                                                                                                               | Available config options for making requests.                                                                                                                                    |


### Response

**Promise<[operations.DeletePaymentsCollaboratorSettingsEligibilityRequirementIdResponse](../../sdk/models/operations/deletepaymentscollaboratorsettingseligibilityrequirementidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deletePaymentsCollaboratorSettingsPaymentEligibilityId

Delete an existing payment eligibility requirement based on its unique identifier, removing associated criteria for a member's payment eligibility.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.documentSigningAndEligibility.deletePaymentsCollaboratorSettingsPaymentEligibilityId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                | [operations.DeletePaymentsCollaboratorSettingsPaymentEligibilityIdRequest](../../sdk/models/operations/deletepaymentscollaboratorsettingspaymenteligibilityidrequest.md) | :heavy_check_mark:                                                                                                                                                       | The request object to use for the request.                                                                                                                               |
| `config`                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                             | :heavy_minus_sign:                                                                                                                                                       | Available config options for making requests.                                                                                                                            |


### Response

**Promise<[operations.DeletePaymentsCollaboratorSettingsPaymentEligibilityIdResponse](../../sdk/models/operations/deletepaymentscollaboratorsettingspaymenteligibilityidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getPaymentsCollaboratorGroupId

Fetch detailed configuration and attributes associated with a specific collaborator group.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.documentSigningAndEligibility.getPaymentsCollaboratorGroupId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.GetPaymentsCollaboratorGroupIdRequest](../../sdk/models/operations/getpaymentscollaboratorgroupidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.GetPaymentsCollaboratorGroupIdResponse](../../sdk/models/operations/getpaymentscollaboratorgroupidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getPaymentsCollaboratorSettingsEligibilityRequirement

List and display all the set eligibility requirements for collaborators.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.documentSigningAndEligibility.getPaymentsCollaboratorSettingsEligibilityRequirement();

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

**Promise<[operations.GetPaymentsCollaboratorSettingsEligibilityRequirementResponse](../../sdk/models/operations/getpaymentscollaboratorsettingseligibilityrequirementresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getPaymentsCollaboratorSettingsEligibilityRequirementId

Fetch details for a given eligibility requirement based on its unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.documentSigningAndEligibility.getPaymentsCollaboratorSettingsEligibilityRequirementId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                  | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                  | [operations.GetPaymentsCollaboratorSettingsEligibilityRequirementIdRequest](../../sdk/models/operations/getpaymentscollaboratorsettingseligibilityrequirementidrequest.md) | :heavy_check_mark:                                                                                                                                                         | The request object to use for the request.                                                                                                                                 |
| `config`                                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                               | :heavy_minus_sign:                                                                                                                                                         | Available config options for making requests.                                                                                                                              |


### Response

**Promise<[operations.GetPaymentsCollaboratorSettingsEligibilityRequirementIdResponse](../../sdk/models/operations/getpaymentscollaboratorsettingseligibilityrequirementidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getPaymentsCollaboratorSettingsPaymentEligibility

Obtain a list of all payment eligibility requirements configured for collaborators.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.documentSigningAndEligibility.getPaymentsCollaboratorSettingsPaymentEligibility();

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

**Promise<[operations.GetPaymentsCollaboratorSettingsPaymentEligibilityResponse](../../sdk/models/operations/getpaymentscollaboratorsettingspaymenteligibilityresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getPaymentsCollaboratorSettingsPaymentEligibilityId

Fetch detailed information about a particular payment eligibility requirement using its unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.documentSigningAndEligibility.getPaymentsCollaboratorSettingsPaymentEligibilityId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                          | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                          | [operations.GetPaymentsCollaboratorSettingsPaymentEligibilityIdRequest](../../sdk/models/operations/getpaymentscollaboratorsettingspaymenteligibilityidrequest.md) | :heavy_check_mark:                                                                                                                                                 | The request object to use for the request.                                                                                                                         |
| `config`                                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                       | :heavy_minus_sign:                                                                                                                                                 | Available config options for making requests.                                                                                                                      |


### Response

**Promise<[operations.GetPaymentsCollaboratorSettingsPaymentEligibilityIdResponse](../../sdk/models/operations/getpaymentscollaboratorsettingspaymenteligibilityidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchPaymentsCollaboratorGroupId

Update specific attributes or configuration details of an existing collaborator group.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.documentSigningAndEligibility.patchPaymentsCollaboratorGroupId({
    collaboratorGroupUpdateRequest: {
      collaboratorSettings: {
        "key": "string",
      },
      eligibilityRequirements: [
        {},
      ],
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

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.PatchPaymentsCollaboratorGroupIdRequest](../../sdk/models/operations/patchpaymentscollaboratorgroupidrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.PatchPaymentsCollaboratorGroupIdResponse](../../sdk/models/operations/patchpaymentscollaboratorgroupidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchPaymentsCollaboratorGroupIdEligibilityRequirementEligibilityRequirementId

Update details or attributes of a specific eligibility requirement linked to a collaborator group.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.documentSigningAndEligibility.patchPaymentsCollaboratorGroupIdEligibilityRequirementEligibilityRequirementId({
    collaboratorGroupRequirementUpdate: {
      newEligibilityRequirementId: "string",
    },
    eligibilityRequirementId: "string",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                | Type                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                 | Description                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                | [operations.PatchPaymentsCollaboratorGroupIdEligibilityRequirementEligibilityRequirementIdRequest](../../sdk/models/operations/patchpaymentscollaboratorgroupideligibilityrequirementeligibilityrequirementidrequest.md) | :heavy_check_mark:                                                                                                                                                                                                       | The request object to use for the request.                                                                                                                                                                               |
| `config`                                                                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                       | Available config options for making requests.                                                                                                                                                                            |


### Response

**Promise<[operations.PatchPaymentsCollaboratorGroupIdEligibilityRequirementEligibilityRequirementIdResponse](../../sdk/models/operations/patchpaymentscollaboratorgroupideligibilityrequirementeligibilityrequirementidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchPaymentsCollaboratorSettingsEligibilityRequirementId

Update specific details or attributes of an existing eligibility requirement.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { EligibilityRequirementUpdateRequestRequirementType } from "@wingspan/payments/dist/sdk/models/shared";

async function run() {
  const sdk = new Payments({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.documentSigningAndEligibility.patchPaymentsCollaboratorSettingsEligibilityRequirementId({
    eligibilityRequirementUpdateRequest: {
      requirementType: EligibilityRequirementUpdateRequestRequirementType.Signature,
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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchPaymentsCollaboratorSettingsEligibilityRequirementIdRequest](../../sdk/models/operations/patchpaymentscollaboratorsettingseligibilityrequirementidrequest.md) | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `config`                                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                   | :heavy_minus_sign:                                                                                                                                                             | Available config options for making requests.                                                                                                                                  |


### Response

**Promise<[operations.PatchPaymentsCollaboratorSettingsEligibilityRequirementIdResponse](../../sdk/models/operations/patchpaymentscollaboratorsettingseligibilityrequirementidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchPaymentsCollaboratorSettingsPaymentEligibilityId

Update attributes or criteria of an existing payment eligibility requirement using its unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.documentSigningAndEligibility.patchPaymentsCollaboratorSettingsPaymentEligibilityId({
    paymentEligibilityUpdateRequest: {
      value: {},
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

| Parameter                                                                                                                                                              | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                              | [operations.PatchPaymentsCollaboratorSettingsPaymentEligibilityIdRequest](../../sdk/models/operations/patchpaymentscollaboratorsettingspaymenteligibilityidrequest.md) | :heavy_check_mark:                                                                                                                                                     | The request object to use for the request.                                                                                                                             |
| `config`                                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                           | :heavy_minus_sign:                                                                                                                                                     | Available config options for making requests.                                                                                                                          |


### Response

**Promise<[operations.PatchPaymentsCollaboratorSettingsPaymentEligibilityIdResponse](../../sdk/models/operations/patchpaymentscollaboratorsettingspaymenteligibilityidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## postPaymentsCollaboratorSettingsEligibilityRequirement

Define and create a new eligibility requirement for collaborators.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { EligibilityRequirementCreateRequestRequirementType } from "@wingspan/payments/dist/sdk/models/shared";

async function run() {
  const sdk = new Payments({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.documentSigningAndEligibility.postPaymentsCollaboratorSettingsEligibilityRequirement({
    requirementType: EligibilityRequirementCreateRequestRequirementType.Signature,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [shared.EligibilityRequirementCreateRequest](../../sdk/models/shared/eligibilityrequirementcreaterequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PostPaymentsCollaboratorSettingsEligibilityRequirementResponse](../../sdk/models/operations/postpaymentscollaboratorsettingseligibilityrequirementresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## postPaymentsCollaboratorSettingsPaymentEligibility

Define a new payment eligibility requirement for collaborators in the system.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.documentSigningAndEligibility.postPaymentsCollaboratorSettingsPaymentEligibility({
    field: "string",
    value: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.PaymentEligibility](../../sdk/models/shared/paymenteligibility.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.PostPaymentsCollaboratorSettingsPaymentEligibilityResponse](../../sdk/models/operations/postpaymentscollaboratorsettingspaymenteligibilityresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
