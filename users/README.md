# @wingspan/users

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/wingspanHQ/client-sdk-typescript.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/wingspanHQ/client-sdk-typescript/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add @wingspan/users
```

### Yarn

```bash
yarn add @wingspan/users
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Users } from "@wingspan/users";

async function run() {
    const sdk = new Users({
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.userAndMemberManagement.getUsers();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [userAndMemberManagement](docs/sdks/userandmembermanagement/README.md)

* [getUsers](docs/sdks/userandmembermanagement/README.md#getusers) - Health Check for User Service
* [getUsersUserClientId](docs/sdks/userandmembermanagement/README.md#getusersuserclientid) - Retrieve Client Details by ID
* [getUsersUserEmailEmail](docs/sdks/userandmembermanagement/README.md#getusersuseremailemail) - Retrieve User by Email Address
* [getUsersUserLocation](docs/sdks/userandmembermanagement/README.md#getusersuserlocation) - Retrieve User's Location
* [getUsersUserMemberSubscriptionPaymentHistory](docs/sdks/userandmembermanagement/README.md#getusersusermembersubscriptionpaymenthistory) - Retrieve payment history for membership
* [getUsersUserMemberId](docs/sdks/userandmembermanagement/README.md#getusersusermemberid) - Retrieve Subscription Details by ID
* [getUsersUserMemberIdAdvocate](docs/sdks/userandmembermanagement/README.md#getusersusermemberidadvocate) - Retrieve Advocate Information for the Specified Member
* [getUsersUserOccupation](docs/sdks/userandmembermanagement/README.md#getusersuseroccupation) - Retrieve User's Occupation Details
* [getUsersUserPublicId](docs/sdks/userandmembermanagement/README.md#getusersuserpublicid) - Retrieve Public User Profile by ID
* [getUsersUserTagId](docs/sdks/userandmembermanagement/README.md#getusersusertagid) - Retrieve User by Tag ID
* [getUsersUserId](docs/sdks/userandmembermanagement/README.md#getusersuserid) - Fetch user profile details using user ID
* [patchUsersUserClientId](docs/sdks/userandmembermanagement/README.md#patchusersuserclientid) - Modify Existing Client Details by ID
* [patchUsersUserMemberId](docs/sdks/userandmembermanagement/README.md#patchusersusermemberid) - Modify Subscription Details for Member
* [patchUsersUserId](docs/sdks/userandmembermanagement/README.md#patchusersuserid) - Modify user account details using user ID
* [postUsersPendingUser](docs/sdks/userandmembermanagement/README.md#postuserspendinguser) - Register a new user with pending status
* [postUsersUser](docs/sdks/userandmembermanagement/README.md#postusersuser) - Register a new user
* [postUsersUserClientId](docs/sdks/userandmembermanagement/README.md#postusersuserclientid) - Register a New Client with Specific ID
* [postUsersUserMemberId](docs/sdks/userandmembermanagement/README.md#postusersusermemberid) - Register a New Subscription for Member
* [postUsersUserPasswordReset](docs/sdks/userandmembermanagement/README.md#postusersuserpasswordreset) - Initiate User Password Reset Process

### [accountAndBankingOperations](docs/sdks/accountandbankingoperations/README.md)

* [deleteUsersAccountId](docs/sdks/accountandbankingoperations/README.md#deleteusersaccountid) - Unlink Bank Account
* [getUsersAccount](docs/sdks/accountandbankingoperations/README.md#getusersaccount) - Retrieve All Linked Bank Accounts
* [getUsersAccountId](docs/sdks/accountandbankingoperations/README.md#getusersaccountid) - Fetch Specific Bank Account Details
* [patchUsersAccountId](docs/sdks/accountandbankingoperations/README.md#patchusersaccountid) - Modify Bank Account Details
* [postUsersAccount](docs/sdks/accountandbankingoperations/README.md#postusersaccount) - Add New Bank Account
* [postUsersAccountLink](docs/sdks/accountandbankingoperations/README.md#postusersaccountlink) - Generate Plaid Link Token for Account Integration
* [postUsersAccountRequirements](docs/sdks/accountandbankingoperations/README.md#postusersaccountrequirements) - Fetch Necessary Account Details
* [postUsersAccountAccountIdVerify](docs/sdks/accountandbankingoperations/README.md#postusersaccountaccountidverify) - Verify an account for payments
* [postUsersGuestAccountNumbers](docs/sdks/accountandbankingoperations/README.md#postusersguestaccountnumbers) - Retrieve Account Numbers for Guests

### [activityAndUsageTracking](docs/sdks/activityandusagetracking/README.md)

* [deleteUsersActivityId](docs/sdks/activityandusagetracking/README.md#deleteusersactivityid) - Remove Specific Activity Record for a Member
* [getUsersActivity](docs/sdks/activityandusagetracking/README.md#getusersactivity) - Retrieve All Activities of a Member
* [getUsersActivityId](docs/sdks/activityandusagetracking/README.md#getusersactivityid) - Retrieve Specific Activity Details for a Member
* [patchUsersActivityId](docs/sdks/activityandusagetracking/README.md#patchusersactivityid) - Modify Specific Activity Details for a Member
* [postUsersActivity](docs/sdks/activityandusagetracking/README.md#postusersactivity) - Log New Activity for Member

### [sessionAndAuthentication](docs/sdks/sessionandauthentication/README.md)

* [deleteUsersSessionApiId](docs/sdks/sessionandauthentication/README.md#deleteuserssessionapiid) - Terminate a Specific API Session
* [deleteUsersSessionTokenId](docs/sdks/sessionandauthentication/README.md#deleteuserssessiontokenid) - Terminate a user session using token ID
* [getUsersGrantedSubscriberSubscriptionGrant](docs/sdks/sessionandauthentication/README.md#getusersgrantedsubscribersubscriptiongrant) - Retrieve Subscription Grants for a Granted Subscriber
* [getUsersSessionApi](docs/sdks/sessionandauthentication/README.md#getuserssessionapi) - Retrieve All API Sessions Created by the Current User
* [getUsersSessionApiId](docs/sdks/sessionandauthentication/README.md#getuserssessionapiid) - Fetch Details of a Specific API Session
* [getUsersSessionTokenId](docs/sdks/sessionandauthentication/README.md#getuserssessiontokenid) - Retrieve session details using token ID
* [patchUsersSessionApiId](docs/sdks/sessionandauthentication/README.md#patchuserssessionapiid) - Modify a Specific API Session
* [patchUsersSessionOtp](docs/sdks/sessionandauthentication/README.md#patchuserssessionotp) - Confirm OTP/2FA Verification
* [patchUsersUserIdVerificationEmail](docs/sdks/sessionandauthentication/README.md#patchusersuseridverificationemail) - Confirm Email Verification Status
* [patchUsersUserIdVerificationPhone](docs/sdks/sessionandauthentication/README.md#patchusersuseridverificationphone) - Validate Phone Verification Status
* [postUsersAuthentication](docs/sdks/sessionandauthentication/README.md#postusersauthentication) - Authenticate User Request
* [postUsersPendingSession](docs/sdks/sessionandauthentication/README.md#postuserspendingsession) - Initiate a new session with pending status
* [postUsersSession](docs/sdks/sessionandauthentication/README.md#postuserssession) - Initiate a New User Session
* [postUsersSessionApi](docs/sdks/sessionandauthentication/README.md#postuserssessionapi) - Create a New API Session
* [postUsersSessionOtp](docs/sdks/sessionandauthentication/README.md#postuserssessionotp) - Initiate OTP/2FA Verification Process
* [postUsersSessionRequestingUser](docs/sdks/sessionandauthentication/README.md#postuserssessionrequestinguser) - Request to Sign-In on Behalf of Another User
* [postUsersSessionSingleSignOn](docs/sdks/sessionandauthentication/README.md#postuserssessionsinglesignon) - Create a Single Sign-On (SSO) Session
* [postUsersSessionSocialAuthGoogle](docs/sdks/sessionandauthentication/README.md#postuserssessionsocialauthgoogle) - Authenticate using Google
* [postUsersUserIdVerificationEmail](docs/sdks/sessionandauthentication/README.md#postusersuseridverificationemail) - Initiate Email Verification Process for User
* [postUsersUserIdVerificationExistingEmail](docs/sdks/sessionandauthentication/README.md#postusersuseridverificationexistingemail) - Initiate verification for an existing email address
* [postUsersUserIdVerificationPhone](docs/sdks/sessionandauthentication/README.md#postusersuseridverificationphone) - Start Phone Verification Process for User

### [authorizationAndPermissions](docs/sdks/authorizationandpermissions/README.md)

* [deleteUsersAuthorizationAuthorizationId](docs/sdks/authorizationandpermissions/README.md#deleteusersauthorizationauthorizationid) - Revoke and Remove Authorization Record
* [getUsersAuthorization](docs/sdks/authorizationandpermissions/README.md#getusersauthorization) - Retrieve All User Authorizations
* [getUsersAuthorizationAccountsUserId](docs/sdks/authorizationandpermissions/README.md#getusersauthorizationaccountsuserid) - Retrieve Accounts Authorized by User
* [getUsersAuthorizationAuthorizationId](docs/sdks/authorizationandpermissions/README.md#getusersauthorizationauthorizationid) - Retrieve Authorization Details by ID
* [getUsersAuthorizedScopeGroups](docs/sdks/authorizationandpermissions/README.md#getusersauthorizedscopegroups) - Obtain all authorized scope-groups
* [getUsersAuthorizedScopeGroupsRequestingUserId](docs/sdks/authorizationandpermissions/README.md#getusersauthorizedscopegroupsrequestinguserid) - Retrieve authorized scope-groups specific to a user
* [getUsersAuthorizedScopes](docs/sdks/authorizationandpermissions/README.md#getusersauthorizedscopes) - Retrieve all authorized scopes
* [getUsersAuthorizedScopesRequestingUserId](docs/sdks/authorizationandpermissions/README.md#getusersauthorizedscopesrequestinguserid) - Obtain authorized scopes specific to a user
* [patchUsersAuthorizationAuthorizationId](docs/sdks/authorizationandpermissions/README.md#patchusersauthorizationauthorizationid) - Modify Existing Authorization Details
* [postUsersAuthorization](docs/sdks/authorizationandpermissions/README.md#postusersauthorization) - Request User Authorization
* [postUsersFlatfileAuthToken](docs/sdks/authorizationandpermissions/README.md#postusersflatfileauthtoken) - Retrieve Authentication Token for Flatfile

### [organizationAccountManagement](docs/sdks/organizationaccountmanagement/README.md)

* [getUsersOrganizationUser](docs/sdks/organizationaccountmanagement/README.md#getusersorganizationuser) - Retrieve All Organization User Accounts
* [getUsersOrganizationUserUserId](docs/sdks/organizationaccountmanagement/README.md#getusersorganizationuseruserid) - Retrieve Organization User Profile
* [getUsersOrganizationUserUserIdSession](docs/sdks/organizationaccountmanagement/README.md#getusersorganizationuseruseridsession) - Initiate Session for Organization User
* [patchUsersOrganizationUserUserId](docs/sdks/organizationaccountmanagement/README.md#patchusersorganizationuseruserid) - Modify Organization User Profile
* [patchUsersOrganizationUserUserIdAssociate](docs/sdks/organizationaccountmanagement/README.md#patchusersorganizationuseruseridassociate) - Modify the Association of Child User to Parent Organization
* [postUsersOrganizationUser](docs/sdks/organizationaccountmanagement/README.md#postusersorganizationuser) - Register New User within Organization
* [postUsersOrganizationUserUserIdAssociate](docs/sdks/organizationaccountmanagement/README.md#postusersorganizationuseruseridassociate) - Link a Child User to a Parent Organization Account

### [subscriptionAndGrantsManagement](docs/sdks/subscriptionandgrantsmanagement/README.md)

* [deleteUsersSubscriptionGrantId](docs/sdks/subscriptionandgrantsmanagement/README.md#deleteuserssubscriptiongrantid) - Terminate a specific subscription grant by ID
* [deleteUsersUserMemberIdSubscription](docs/sdks/subscriptionandgrantsmanagement/README.md#deleteusersusermemberidsubscription) - Remove Subscription for Member
* [getUsersSubscriptionGrant](docs/sdks/subscriptionandgrantsmanagement/README.md#getuserssubscriptiongrant) - Fetch All Subscription Grants
* [getUsersSubscriptionGrantId](docs/sdks/subscriptionandgrantsmanagement/README.md#getuserssubscriptiongrantid) - Retrieve subscription grant details by ID
* [getUsersUserMemberIdSubscription](docs/sdks/subscriptionandgrantsmanagement/README.md#getusersusermemberidsubscription) - Retrieve Subscription Details by ID
* [patchUsersSubscriptionGrantId](docs/sdks/subscriptionandgrantsmanagement/README.md#patchuserssubscriptiongrantid) - Modify subscription grant details
* [patchUsersUserMemberIdSubscription](docs/sdks/subscriptionandgrantsmanagement/README.md#patchusersusermemberidsubscription) - Modify Subscription Details for Member
* [postUsersSubscriptionGrant](docs/sdks/subscriptionandgrantsmanagement/README.md#postuserssubscriptiongrant) - New Subscription Grant
* [postUsersUserMemberIdSubscription](docs/sdks/subscriptionandgrantsmanagement/README.md#postusersusermemberidsubscription) - Register a New Subscription for Member

### [deprecated](docs/sdks/deprecated/README.md)

* [deleteUsersUserMemberSubscriptionId](docs/sdks/deprecated/README.md#deleteusersusermembersubscriptionid) - DEPRECATEDdeleteSubscription
* [getUsersUserMemberSubscriptionPaymentMethod](docs/sdks/deprecated/README.md#getusersusermembersubscriptionpaymentmethod) - DEPRECATED Get Payment Method
* [getUsersUserMemberSubscriptionPlan](docs/sdks/deprecated/README.md#getusersusermembersubscriptionplan) - DEPRECATEDlist membership plans
* [getUsersUserMemberSubscriptionPlanId](docs/sdks/deprecated/README.md#getusersusermembersubscriptionplanid) - DEPRECATEDget membership plan
* [getUsersUserMemberSubscriptionId](docs/sdks/deprecated/README.md#getusersusermembersubscriptionid) - DEPRECATEDgetSubscription
* [patchUsersUserMemberSubscriptionPaymentMethod](docs/sdks/deprecated/README.md#patchusersusermembersubscriptionpaymentmethod) - DEPRECATED Update Payment Method
* [patchUsersUserMemberSubscriptionId](docs/sdks/deprecated/README.md#patchusersusermembersubscriptionid) - DEPRECATEDupdateSubscription
* [postUsersUserMemberSubscriptionPaymentMethod](docs/sdks/deprecated/README.md#postusersusermembersubscriptionpaymentmethod) - DEPRECATED create Payment Method

### [subscriptionManagement](docs/sdks/subscriptionmanagement/README.md)

* [deleteUsersUserMemberMemberIdNextgenSubscriptionId](docs/sdks/subscriptionmanagement/README.md#deleteusersusermembermemberidnextgensubscriptionid) - Revoke a Nextgen Subscription for Member
* [getUsersUserMemberMemberIdNextgenSubscription](docs/sdks/subscriptionmanagement/README.md#getusersusermembermemberidnextgensubscription) - Fetch All Nextgen Subscriptions for Member
* [getUsersUserMemberMemberIdNextgenSubscriptionPlan](docs/sdks/subscriptionmanagement/README.md#getusersusermembermemberidnextgensubscriptionplan) - Browse Available Nextgen Subscription Plans
* [getUsersUserMemberMemberIdNextgenSubscriptionPlanId](docs/sdks/subscriptionmanagement/README.md#getusersusermembermemberidnextgensubscriptionplanid) - Retrieve Specific Nextgen Subscription Plan
* [getUsersUserMemberMemberIdNextgenSubscriptionId](docs/sdks/subscriptionmanagement/README.md#getusersusermembermemberidnextgensubscriptionid) - Retrieve Details of a Specific Nextgen Subscription
* [patchUsersUserMemberMemberIdNextgenSubscriptionId](docs/sdks/subscriptionmanagement/README.md#patchusersusermembermemberidnextgensubscriptionid) - Modify an Existing Nextgen Subscription for Member
* [postUsersUserMemberMemberIdNextgenSubscription](docs/sdks/subscriptionmanagement/README.md#postusersusermembermemberidnextgensubscription) - Initiate a New Nextgen Subscription for a Member
<!-- End Available Resources and Operations [operations] -->



<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { Users } from "@wingspan/users";
import * as errors from "@wingspan/users/sdk/models/errors";

async function run() {
    const sdk = new Users({
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    let result;
    try {
        result = await sdk.userAndMemberManagement.getUsers();
    } catch (err) {
        switch (true) {
            case err instanceof errors.SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->



<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.wingspan.app` | None |
| 1 | `https://stagingapi.wingspan.app` | None |

```typescript
import { Users } from "@wingspan/users";

async function run() {
    const sdk = new Users({
        serverIdx: 1,
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.userAndMemberManagement.getUsers();

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Users } from "@wingspan/users";

async function run() {
    const sdk = new Users({
        serverURL: "https://api.wingspan.app",
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.userAndMemberManagement.getUsers();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Server Selection [server] -->



<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Users } from "@wingspan/users";
import { HTTPClient } from "@wingspan/users/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000);
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Users({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `bearerAuth` | http         | HTTP Bearer  |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Users } from "@wingspan/users";

async function run() {
    const sdk = new Users({
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.userAndMemberManagement.getUsers();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
