# UserAndMemberManagement
(*userAndMemberManagement*)

## Overview

Endpoints dealing with user accounts, member subscriptions, and profile information.

### Available Operations

* [getUsers](#getusers) - Health Check for User Service
* [getUsersUserClientId](#getusersuserclientid) - Retrieve Client Details by ID
* [getUsersUserEmailEmail](#getusersuseremailemail) - Retrieve User by Email Address
* [getUsersUserLocation](#getusersuserlocation) - Retrieve User's Location
* [getUsersUserMemberSubscriptionPaymentHistory](#getusersusermembersubscriptionpaymenthistory) - Retrieve payment history for membership
* [getUsersUserMemberId](#getusersusermemberid) - Retrieve Subscription Details by ID
* [getUsersUserMemberIdAdvocate](#getusersusermemberidadvocate) - Retrieve Advocate Information for the Specified Member
* [getUsersUserOccupation](#getusersuseroccupation) - Retrieve User's Occupation Details
* [getUsersUserPublicId](#getusersuserpublicid) - Retrieve Public User Profile by ID
* [getUsersUserTagId](#getusersusertagid) - Retrieve User by Tag ID
* [getUsersUserId](#getusersuserid) - Fetch user profile details using user ID
* [patchUsersUserClientId](#patchusersuserclientid) - Modify Existing Client Details by ID
* [patchUsersUserMemberId](#patchusersusermemberid) - Modify Subscription Details for Member
* [patchUsersUserId](#patchusersuserid) - Modify user account details using user ID
* [postUsersPendingUser](#postuserspendinguser) - Register a new user with pending status
* [postUsersUser](#postusersuser) - Register a new user
* [postUsersUserClientId](#postusersuserclientid) - Register a New Client with Specific ID
* [postUsersUserMemberId](#postusersusermemberid) - Register a New Subscription for Member
* [postUsersUserPasswordReset](#postusersuserpasswordreset) - Initiate User Password Reset Process

## getUsers

Verifies the connectivity and health status of the User Service by sending a ping request. Useful for monitoring and ensuring the service is up and running.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

async function run() {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.userAndMemberManagement.getUsers();

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

**Promise<[operations.GetUsersResponse](../../sdk/models/operations/getusersresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersUserClientId

Fetches the comprehensive details of a specific client using the given unique identifier.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

async function run() {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.userAndMemberManagement.getUsersUserClientId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetUsersUserClientIdRequest](../../sdk/models/operations/getusersuserclientidrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetUsersUserClientIdResponse](../../sdk/models/operations/getusersuserclientidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersUserEmailEmail

Fetches user details based on the provided email address. Useful for situations where the email is known, and user specifics are required.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

async function run() {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.userAndMemberManagement.getUsersUserEmailEmail({
    email: "Vincenzo19@gmail.com",
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
| `request`                                                                                                | [operations.GetUsersUserEmailEmailRequest](../../sdk/models/operations/getusersuseremailemailrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetUsersUserEmailEmailResponse](../../sdk/models/operations/getusersuseremailemailresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersUserLocation

Fetches the geographical location information associated with the user, such as city, state, and country details.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

async function run() {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.userAndMemberManagement.getUsersUserLocation();

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

**Promise<[operations.GetUsersUserLocationResponse](../../sdk/models/operations/getusersuserlocationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersUserMemberSubscriptionPaymentHistory

Fetches a history of payments made for the user's membership subscription.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

async function run() {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.userAndMemberManagement.getUsersUserMemberSubscriptionPaymentHistory();

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

**Promise<[operations.GetUsersUserMemberSubscriptionPaymentHistoryResponse](../../sdk/models/operations/getusersusermembersubscriptionpaymenthistoryresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersUserMemberId

Fetches the details of the subscription associated with the specified member.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

async function run() {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.userAndMemberManagement.getUsersUserMemberId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetUsersUserMemberIdRequest](../../sdk/models/operations/getusersusermemberidrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetUsersUserMemberIdResponse](../../sdk/models/operations/getusersusermemberidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersUserMemberIdAdvocate

Fetches the advocate details associated with the specified member. An advocate often refers to a person who supports or recommends a particular cause or policy, in this context, related to the member.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

async function run() {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.userAndMemberManagement.getUsersUserMemberIdAdvocate({
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
| `request`                                                                                                            | [operations.GetUsersUserMemberIdAdvocateRequest](../../sdk/models/operations/getusersusermemberidadvocaterequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.GetUsersUserMemberIdAdvocateResponse](../../sdk/models/operations/getusersusermemberidadvocateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersUserOccupation

Fetches a comprehensive list of occupations that users can associate with their profiles. This provides insight into the user's profession or field of expertise.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

async function run() {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.userAndMemberManagement.getUsersUserOccupation();

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

**Promise<[operations.GetUsersUserOccupationResponse](../../sdk/models/operations/getusersuseroccupationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersUserPublicId

Obtains the public profile details of a user using their unique identifier. This is useful when only non-sensitive, public-facing user details are required.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

async function run() {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.userAndMemberManagement.getUsersUserPublicId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetUsersUserPublicIdRequest](../../sdk/models/operations/getusersuserpublicidrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetUsersUserPublicIdResponse](../../sdk/models/operations/getusersuserpublicidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersUserTagId

Fetches the user details associated with a specific tag identifier. Useful for querying users based on custom tags or categories.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

async function run() {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.userAndMemberManagement.getUsersUserTagId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetUsersUserTagIdRequest](../../sdk/models/operations/getusersusertagidrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetUsersUserTagIdResponse](../../sdk/models/operations/getusersusertagidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersUserId

Retrieves comprehensive details of a user account using the provided unique user ID.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

async function run() {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.userAndMemberManagement.getUsersUserId({
    id: "<ID>",
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
| `request`                                                                                | [operations.GetUsersUserIdRequest](../../sdk/models/operations/getusersuseridrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetUsersUserIdResponse](../../sdk/models/operations/getusersuseridresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchUsersUserClientId

Updates the details of an existing client using the given unique identifier based on the provided modifications.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import { Structure } from "@wingspan/users/dist/sdk/models/shared";

async function run() {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.userAndMemberManagement.patchUsersUserClientId({
    clientUpdateRequest: {
      clientId: "string",
      profile: {
        address: {
          country: "Aruba",
        },
        company: {
          companyOwners: [
            {
              memberId: "string",
            },
          ],
          links: {},
        },
        defaultPaymentMethod: {},
        savedPaymentMethods: [
          {},
        ],
        subscriptionPaymentMethod: {},
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

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.PatchUsersUserClientIdRequest](../../sdk/models/operations/patchusersuserclientidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PatchUsersUserClientIdResponse](../../sdk/models/operations/patchusersuserclientidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchUsersUserMemberId

Updates the details of an existing subscription for the specified member based on the provided modifications.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import {
  CompanyWriteStructure,
  FilingCode,
  FilingType,
  MemberProfileVisibilityMapAddress,
  MemberProfileVisibilityMapPhone,
  MemberProfileWriteBookkeepingProductsUsed,
  MemberProfileWriteFreelanceDuration,
  MemberProfileWriteFreelanceType,
  MemberProfileWriteIndustry,
  MemberProfileWriteInterests,
  MemberProfileWriteProductAspectImportance,
  MemberProfileWriteProductImportance,
  Status,
  TinPreference,
  VerificationStateStatus,
} from "@wingspan/users/dist/sdk/models/shared";

async function run() {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.userAndMemberManagement.patchUsersUserMemberId({
    memberUpdateRequest: {
      memberId: "string",
      profile: {
        address: {
          country: "Guadeloupe",
        },
        bookkeepingProductsUsed: [
          MemberProfileWriteBookkeepingProductsUsed.AccountingSoftware,
        ],
        company: {
          companyOwners: [
            {
              email: "Jonas_Harber4@gmail.com",
              member: {},
              memberId: "string",
            },
          ],
          links: {},
        },
        formW9Options: {},
        homeAddress: {
          country: "Bosnia and Herzegovina",
        },
        interests: [
          MemberProfileWriteInterests.Invoicing,
        ],
        productAspectImportance: [
          MemberProfileWriteProductAspectImportance.HealthInsurance,
        ],
        productImportance: [
          MemberProfileWriteProductImportance.LessThanNilGreaterThan,
        ],
        taxInfo: {
          occupations: [
            {
              category: "string",
            },
          ],
        },
        tinVerification: {
          ein: {
            manuallyVerified: false,
            requestedAt: "string",
            status: VerificationStateStatus.Failed,
            tinFingerprint: "string",
          },
          ssn: {
            manuallyVerified: false,
            requestedAt: "string",
            status: VerificationStateStatus.Failed,
            tinFingerprint: "string",
          },
        },
        visibilityMap: {},
        withholdings: {
          tax: {},
        },
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

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.PatchUsersUserMemberIdRequest](../../sdk/models/operations/patchusersusermemberidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PatchUsersUserMemberIdResponse](../../sdk/models/operations/patchusersusermemberidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchUsersUserId

Enables modifications to the existing user account information using the specified user ID.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import { Gender } from "@wingspan/users/dist/sdk/models/shared";

async function run() {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.userAndMemberManagement.patchUsersUserId({
    userUpdateRequest: {
      notificationSettings: {},
      profile: {},
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

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.PatchUsersUserIdRequest](../../sdk/models/operations/patchusersuseridrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.PatchUsersUserIdResponse](../../sdk/models/operations/patchusersuseridresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postUsersPendingUser

Allows the creation of a new user with a "pending" status. This can be utilized when the user registration process requires a confirmation step before fully activating the user.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import { Gender, UserAccountType, UserCreateRequestStatus } from "@wingspan/users/dist/sdk/models/shared";

async function run() {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.userAndMemberManagement.postUsersPendingUser({
    email: "Vicente11@hotmail.com",
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

**Promise<[operations.PostUsersPendingUserResponse](../../sdk/models/operations/postuserspendinguserresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postUsersUser

Allows the creation of a new user account by providing necessary details.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import { Gender, UserAccountType, UserCreateRequestStatus } from "@wingspan/users/dist/sdk/models/shared";

async function run() {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.userAndMemberManagement.postUsersUser({
    email: "Juana_Balistreri@gmail.com",
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

**Promise<[operations.PostUsersUserResponse](../../sdk/models/operations/postusersuserresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postUsersUserClientId

Creates a new client entry using the provided details and the specified identifier.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import { Structure } from "@wingspan/users/dist/sdk/models/shared";

async function run() {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.userAndMemberManagement.postUsersUserClientId({
    clientCreateRequest: {
      profile: {
        address: {
          country: "Guam",
        },
        company: {
          companyOwners: [
            {
              memberId: "string",
            },
          ],
          links: {},
        },
        defaultPaymentMethod: {},
        savedPaymentMethods: [
          {},
        ],
        subscriptionPaymentMethod: {},
      },
      userId: "string",
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

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.PostUsersUserClientIdRequest](../../sdk/models/operations/postusersuserclientidrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PostUsersUserClientIdResponse](../../sdk/models/operations/postusersuserclientidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postUsersUserMemberId

Creates a new subscription for the specified member based on the provided details.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import {
  CompanyWriteStructure,
  FilingCode,
  FilingType,
  MemberProfileVisibilityMapAddress,
  MemberProfileVisibilityMapPhone,
  MemberProfileWriteBookkeepingProductsUsed,
  MemberProfileWriteFreelanceDuration,
  MemberProfileWriteFreelanceType,
  MemberProfileWriteIndustry,
  MemberProfileWriteInterests,
  MemberProfileWriteProductAspectImportance,
  MemberProfileWriteProductImportance,
  Status,
  TinPreference,
  VerificationStateStatus,
} from "@wingspan/users/dist/sdk/models/shared";

async function run() {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.userAndMemberManagement.postUsersUserMemberId({
    memberCreateRequest: {
      profile: {
        address: {
          country: "Saudi Arabia",
        },
        bookkeepingProductsUsed: [
          MemberProfileWriteBookkeepingProductsUsed.PenAndPaper,
        ],
        company: {
          companyOwners: [
            {
              email: "Roderick50@gmail.com",
              member: {},
              memberId: "string",
            },
          ],
          links: {},
        },
        formW9Options: {},
        homeAddress: {
          country: "Tanzania",
        },
        interests: [
          MemberProfileWriteInterests.Marketing,
        ],
        productAspectImportance: [
          MemberProfileWriteProductAspectImportance.LessThanNilGreaterThan,
        ],
        productImportance: [
          MemberProfileWriteProductImportance.Benefits,
        ],
        taxInfo: {
          occupations: [
            {
              category: "string",
            },
          ],
        },
        tinVerification: {
          ein: {
            manuallyVerified: false,
            requestedAt: "string",
            status: VerificationStateStatus.Verified,
            tinFingerprint: "string",
          },
          ssn: {
            manuallyVerified: false,
            requestedAt: "string",
            status: VerificationStateStatus.Failed,
            tinFingerprint: "string",
          },
        },
        visibilityMap: {},
        withholdings: {
          tax: {},
        },
      },
      userId: "string",
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

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.PostUsersUserMemberIdRequest](../../sdk/models/operations/postusersusermemberidrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PostUsersUserMemberIdResponse](../../sdk/models/operations/postusersusermemberidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postUsersUserPasswordReset

Request to start the password reset process for a user. Upon successful request, the user will receive instructions on how to reset their password.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import { UserType } from "@wingspan/users/dist/sdk/models/shared";

async function run() {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.userAndMemberManagement.postUsersUserPasswordReset({
    email: "Corrine44@yahoo.com",
    userType: UserType.Member,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.PasswordResetRequest](../../sdk/models/shared/passwordresetrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.PostUsersUserPasswordResetResponse](../../sdk/models/operations/postusersuserpasswordresetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
