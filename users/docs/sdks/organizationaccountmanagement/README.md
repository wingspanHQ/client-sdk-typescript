# OrganizationAccountManagement
(*organizationAccountManagement*)

## Overview

Endpoints for managing user accounts within an organizational context.

### Available Operations

* [getUsersOrganizationUser](#getusersorganizationuser) - Retrieve All Organization User Accounts
* [getUsersOrganizationUserUserId](#getusersorganizationuseruserid) - Retrieve Organization User Profile
* [getUsersOrganizationUserUserIdSession](#getusersorganizationuseruseridsession) - Initiate Session for Organization User
* [patchUsersOrganizationUserUserId](#patchusersorganizationuseruserid) - Modify Organization User Profile
* [patchUsersOrganizationUserUserIdAssociate](#patchusersorganizationuseruseridassociate) - Modify the Association of Child User to Parent Organization
* [postUsersOrganizationUser](#postusersorganizationuser) - Register New User within Organization
* [postUsersOrganizationUserUserIdAssociate](#postusersorganizationuseruseridassociate) - Link a Child User to a Parent Organization Account

## getUsersOrganizationUser

Provides a comprehensive list of all user accounts that are affiliated with or under the jurisdiction of the specified organization.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

async function run() {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.organizationAccountManagement.getUsersOrganizationUser();

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

**Promise<[operations.GetUsersOrganizationUserResponse](../../sdk/models/operations/getusersorganizationuserresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersOrganizationUserUserId

Fetches detailed profile information of a specific user associated with an organization using their unique user ID.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

async function run() {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.organizationAccountManagement.getUsersOrganizationUserUserId({
    userId: "string",
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
| `request`                                                                                                                | [operations.GetUsersOrganizationUserUserIdRequest](../../sdk/models/operations/getusersorganizationuseruseridrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.GetUsersOrganizationUserUserIdResponse](../../sdk/models/operations/getusersorganizationuseruseridresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersOrganizationUserUserIdSession

Initiates a session for an organization user, providing them access to authorized resources.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

async function run() {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.organizationAccountManagement.getUsersOrganizationUserUserIdSession({
    userId: "string",
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
| `request`                                                                                                                              | [operations.GetUsersOrganizationUserUserIdSessionRequest](../../sdk/models/operations/getusersorganizationuseruseridsessionrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.GetUsersOrganizationUserUserIdSessionResponse](../../sdk/models/operations/getusersorganizationuseruseridsessionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchUsersOrganizationUserUserId

Updates profile details of a user associated with an organization. Only modified fields need to be included in the request.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

async function run() {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.organizationAccountManagement.patchUsersOrganizationUserUserId({
    userId: "string",
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
| `request`                                                                                                                    | [operations.PatchUsersOrganizationUserUserIdRequest](../../sdk/models/operations/patchusersorganizationuseruseridrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.PatchUsersOrganizationUserUserIdResponse](../../sdk/models/operations/patchusersorganizationuseruseridresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchUsersOrganizationUserUserIdAssociate

Update the relationship details or permissions between a user and its parent organization account.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import {
  ExternalFinancialAccounts,
  FundingSource,
  PayoutSettings,
  WingspanAccount,
  WingspanFinancialSettings,
} from "@wingspan/users/dist/sdk/models/shared";

async function run() {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.organizationAccountManagement.patchUsersOrganizationUserUserIdAssociate({
    organizationUserAssociationUpdate: {
      inheritanceStrategy: {
        externalFinancialAccounts: ExternalFinancialAccounts.None,
        fundingSource: FundingSource.None,
        payoutSettings: PayoutSettings.None,
        wingspanAccount: WingspanAccount.Parent,
        wingspanFinancialSettings: WingspanFinancialSettings.Parent,
      },
    },
    userId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.PatchUsersOrganizationUserUserIdAssociateRequest](../../sdk/models/operations/patchusersorganizationuseruseridassociaterequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.PatchUsersOrganizationUserUserIdAssociateResponse](../../sdk/models/operations/patchusersorganizationuseruseridassociateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postUsersOrganizationUser

Enables the creation of a new user account that will be linked to the organization the current user belongs to.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import { Gender, UserAccountType, UserCreateRequestStatus } from "@wingspan/users/dist/sdk/models/shared";

async function run() {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.organizationAccountManagement.postUsersOrganizationUser({
    email: "Finn_Kunze32@hotmail.com",
    notificationSettings: {},
    profile: {},
    settings: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [shared.UserCreateRequest](../../sdk/models/shared/usercreaterequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.PostUsersOrganizationUserResponse](../../sdk/models/operations/postusersorganizationuserresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postUsersOrganizationUserUserIdAssociate

Associates a user (child account) to a specific parent organization account, enabling shared resources and permissions.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import {
  ExternalFinancialAccounts,
  FundingSource,
  PayoutSettings,
  WingspanAccount,
  WingspanFinancialSettings,
} from "@wingspan/users/dist/sdk/models/shared";

async function run() {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.organizationAccountManagement.postUsersOrganizationUserUserIdAssociate({
    organizationUserAssociation: {
      inheritanceStrategy: {
        externalFinancialAccounts: ExternalFinancialAccounts.None,
        fundingSource: FundingSource.Parent,
        payoutSettings: PayoutSettings.None,
        wingspanAccount: WingspanAccount.Parent,
        wingspanFinancialSettings: WingspanFinancialSettings.None,
      },
    },
    userId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.PostUsersOrganizationUserUserIdAssociateRequest](../../sdk/models/operations/postusersorganizationuseruseridassociaterequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.PostUsersOrganizationUserUserIdAssociateResponse](../../sdk/models/operations/postusersorganizationuseruseridassociateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |