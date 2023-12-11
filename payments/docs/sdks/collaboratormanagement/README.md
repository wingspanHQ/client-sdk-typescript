# CollaboratorManagement
(*collaboratorManagement*)

## Overview

This category includes endpoints that manage relationships and interactions with collaborators. This includes collaborator settings, and various operations related to collaborators.

### Available Operations

* [deletePaymentsCollaboratorDeductionId](#deletepaymentscollaboratordeductionid) - Erase a Specific Deduction Entry
* [deletePaymentsCollaboratorId](#deletepaymentscollaboratorid) - Remove a Specific Collaborator Record
* [getPaymentsCollaborator](#getpaymentscollaborator) - Retrieve All Registered Collaborators
* [getPaymentsCollaboratorDeduction](#getpaymentscollaboratordeduction) - Retrieve All Deductions for Collaborators
* [getPaymentsCollaboratorDeductionId](#getpaymentscollaboratordeductionid) - Retrieve Specific Deduction Details
* [getPaymentsCollaboratorGroup](#getpaymentscollaboratorgroup) - Retrieve All Collaborator Groups
* [getPaymentsCollaboratorId](#getpaymentscollaboratorid) - Retrieve Details of a Specific Collaborator
* [getPaymentsCollaboratorIdEvents](#getpaymentscollaboratoridevents) - Retrieve Events Associated with a Collaborator
* [getPaymentsV2Collaborator](#getpaymentsv2collaborator) - Retrieve All Collaborators (Version 2)
* [getPaymentsV2CollaboratorMemberId](#getpaymentsv2collaboratormemberid) - Retrieve Specific Collaborator Details (Version 2)
* [patchPaymentsCollaboratorDeductionId](#patchpaymentscollaboratordeductionid) - Modify Details of a Specific Deduction
* [patchPaymentsCollaboratorId](#patchpaymentscollaboratorid) - Modify Collaborator Details
* [patchPaymentsCollaboratorIdAddGroupGroupId](#patchpaymentscollaboratoridaddgroupgroupid) - Associate Collaborator with a Specific Group
* [patchPaymentsCollaboratorIdRemoveGroupGroupId](#patchpaymentscollaboratoridremovegroupgroupid) - Disassociate Collaborator from a Specific Group
* [postPaymentsCollaborator](#postpaymentscollaborator) - Register a New Collaborator
* [postPaymentsCollaboratorDeduction](#postpaymentscollaboratordeduction) - Register a New Deduction for a Collaborator
* [postPaymentsCollaboratorGroup](#postpaymentscollaboratorgroup) - Generate New Collaborator Group

## deletePaymentsCollaboratorDeductionId

Delete a specific deduction entry, eliminating its record from the system.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.collaboratorManagement.deletePaymentsCollaboratorDeductionId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.DeletePaymentsCollaboratorDeductionIdRequest](../../sdk/models/operations/deletepaymentscollaboratordeductionidrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.DeletePaymentsCollaboratorDeductionIdResponse](../../sdk/models/operations/deletepaymentscollaboratordeductionidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deletePaymentsCollaboratorId

Permanently delete the record of a specific collaborator from the system.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.collaboratorManagement.deletePaymentsCollaboratorId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.DeletePaymentsCollaboratorIdRequest](../../sdk/models/operations/deletepaymentscollaboratoridrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.DeletePaymentsCollaboratorIdResponse](../../sdk/models/operations/deletepaymentscollaboratoridresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsCollaborator

Fetch a comprehensive list of all collaborators currently registered in the system.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.collaboratorManagement.getPaymentsCollaborator();

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

**Promise<[operations.GetPaymentsCollaboratorResponse](../../sdk/models/operations/getpaymentscollaboratorresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsCollaboratorDeduction

Fetch a list of all deduction entries currently registered for collaborators.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.collaboratorManagement.getPaymentsCollaboratorDeduction();

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

**Promise<[operations.GetPaymentsCollaboratorDeductionResponse](../../sdk/models/operations/getpaymentscollaboratordeductionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsCollaboratorDeductionId

Fetch details of a specific deduction entry for a collaborator based on its unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.collaboratorManagement.getPaymentsCollaboratorDeductionId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.GetPaymentsCollaboratorDeductionIdRequest](../../sdk/models/operations/getpaymentscollaboratordeductionidrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.GetPaymentsCollaboratorDeductionIdResponse](../../sdk/models/operations/getpaymentscollaboratordeductionidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsCollaboratorGroup

Fetch a comprehensive list of all collaborator groups created by the client, showcasing configurations and member details.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.collaboratorManagement.getPaymentsCollaboratorGroup();

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

**Promise<[operations.GetPaymentsCollaboratorGroupResponse](../../sdk/models/operations/getpaymentscollaboratorgroupresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsCollaboratorId

Fetch detailed information about a specific collaborator using its unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.collaboratorManagement.getPaymentsCollaboratorId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetPaymentsCollaboratorIdRequest](../../sdk/models/operations/getpaymentscollaboratoridrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetPaymentsCollaboratorIdResponse](../../sdk/models/operations/getpaymentscollaboratoridresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsCollaboratorIdEvents

Fetch a list of all events linked to a collaborator based on the provided collaborator ID.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.collaboratorManagement.getPaymentsCollaboratorIdEvents({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.GetPaymentsCollaboratorIdEventsRequest](../../sdk/models/operations/getpaymentscollaboratorideventsrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetPaymentsCollaboratorIdEventsResponse](../../sdk/models/operations/getpaymentscollaboratorideventsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsV2Collaborator

Fetches a comprehensive list of collaborators formatted in the V2 standard, providing an overview of all collaborator data.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.collaboratorManagement.getPaymentsV2Collaborator();

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

**Promise<[operations.GetPaymentsV2CollaboratorResponse](../../sdk/models/operations/getpaymentsv2collaboratorresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsV2CollaboratorMemberId

Fetches detailed information of a specific collaborator, identified by the memberId, in the V2 format.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.collaboratorManagement.getPaymentsV2CollaboratorMemberId({
    memberId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.GetPaymentsV2CollaboratorMemberIdRequest](../../sdk/models/operations/getpaymentsv2collaboratormemberidrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.GetPaymentsV2CollaboratorMemberIdResponse](../../sdk/models/operations/getpaymentsv2collaboratormemberidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsCollaboratorDeductionId

Update attributes or data related to an existing deduction entry for a collaborator.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { DeductionUpdateRequestCurrency, DeductionUpdateRequestType } from "@wingspan/payments/dist/sdk/models/shared";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.collaboratorManagement.patchPaymentsCollaboratorDeductionId({
    deductionUpdateRequest: {},
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.PatchPaymentsCollaboratorDeductionIdRequest](../../sdk/models/operations/patchpaymentscollaboratordeductionidrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.PatchPaymentsCollaboratorDeductionIdResponse](../../sdk/models/operations/patchpaymentscollaboratordeductionidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsCollaboratorId

Update specific details or attributes related to an existing collaborator.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  AutoPayStrategy,
  Ce853dbef33b2b91880690c84bc5314340c1301fd7b3503dd6ce79c844e2a481CompanyStructure,
  CollaboratorForm1099BalancesUpdateRequestStatus,
  CollaboratorUpdateRequestStatus,
  DeliveryMethod,
  Eighta9c6cb49482a98cdd603ff09858cdc3e5ef6ad9807c876c4161d925a96694a5Status,
  VerificationStratgy,
} from "@wingspan/payments/dist/sdk/models/shared";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.collaboratorManagement.patchPaymentsCollaboratorId({
    collaboratorUpdateRequest: {
      clientData: {},
      form1099Balances: {
        twoThousandAndTwentyOne: {
          correction: {
            address: {},
          },
          dispute: {},
          events: {},
        },
        twoThousandAndTwentyTwo: {
          correction: {
            address: {},
          },
          dispute: {},
          events: {},
        },
      },
      formW9Data: {},
      integration: {
        quickbooks: {},
      },
      labels: {
        "key": "string",
      },
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

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.PatchPaymentsCollaboratorIdRequest](../../sdk/models/operations/patchpaymentscollaboratoridrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.PatchPaymentsCollaboratorIdResponse](../../sdk/models/operations/patchpaymentscollaboratoridresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsCollaboratorIdAddGroupGroupId

Add the specified collaborator to the designated group, allowing group-specific configurations and permissions.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.collaboratorManagement.patchPaymentsCollaboratorIdAddGroupGroupId({
    groupId: "string",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.PatchPaymentsCollaboratorIdAddGroupGroupIdRequest](../../sdk/models/operations/patchpaymentscollaboratoridaddgroupgroupidrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.PatchPaymentsCollaboratorIdAddGroupGroupIdResponse](../../sdk/models/operations/patchpaymentscollaboratoridaddgroupgroupidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsCollaboratorIdRemoveGroupGroupId

Remove the collaborator from the designated group, revoking any group-specific configurations and permissions.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.collaboratorManagement.patchPaymentsCollaboratorIdRemoveGroupGroupId({
    groupId: "string",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                              | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                              | [operations.PatchPaymentsCollaboratorIdRemoveGroupGroupIdRequest](../../sdk/models/operations/patchpaymentscollaboratoridremovegroupgroupidrequest.md) | :heavy_check_mark:                                                                                                                                     | The request object to use for the request.                                                                                                             |
| `config`                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                           | :heavy_minus_sign:                                                                                                                                     | Available config options for making requests.                                                                                                          |


### Response

**Promise<[operations.PatchPaymentsCollaboratorIdRemoveGroupGroupIdResponse](../../sdk/models/operations/patchpaymentscollaboratoridremovegroupgroupidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsCollaborator

Add a new collaborator to the system, allowing them to be eligible for payments.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  AutoPayStrategy,
  CollaboratorCreateRequestStatus,
  MemberClientFormW9InfoCompanyStructure,
  VerificationStratgy,
} from "@wingspan/payments/dist/sdk/models/shared";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.collaboratorManagement.postPaymentsCollaborator({
    clientData: {},
    clientId: "string",
    formW9Data: {},
    integration: {
      quickbooks: {},
    },
    labels: {
      "key": "string",
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [shared.CollaboratorCreateRequest](../../sdk/models/shared/collaboratorcreaterequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.PostPaymentsCollaboratorResponse](../../sdk/models/operations/postpaymentscollaboratorresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsCollaboratorDeduction

Create and add a new deduction entry for a collaborator based on the provided data.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { DeductionCreateRequestCurrency, DeductionCreateRequestType } from "@wingspan/payments/dist/sdk/models/shared";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.collaboratorManagement.postPaymentsCollaboratorDeduction({
    amount: 2103.26,
    clientId: "string",
    currency: DeductionCreateRequestCurrency.Cad,
    memberId: "string",
    name: "string",
    type: DeductionCreateRequestType.PrePayment,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.DeductionCreateRequest](../../sdk/models/shared/deductioncreaterequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.PostPaymentsCollaboratorDeductionResponse](../../sdk/models/operations/postpaymentscollaboratordeductionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsCollaboratorGroup

Create a new collaborator group with specific configurations and permissions as defined by the client.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.collaboratorManagement.postPaymentsCollaboratorGroup({
    collaboratorSettings: {
      "key": "string",
    },
    description: "Triple-buffered multi-tasking synergy",
    eligibilityRequirements: [
      {},
    ],
    name: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [shared.CollaboratorGroupCreateRequest](../../sdk/models/shared/collaboratorgroupcreaterequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.PostPaymentsCollaboratorGroupResponse](../../sdk/models/operations/postpaymentscollaboratorgroupresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
