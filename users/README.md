# @wingspan/users

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/wingspanHQ/client-sdk-typescript.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/wingspanHQ/client-sdk-typescript/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @wingspan/users
```

### Yarn

```bash
yarn add @wingspan/users
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
### Example

```typescript
import { Users } from "@wingspan/users";

(async () => {
    const sdk = new Users({
        bearerAuth: "",
    });

    const res = await sdk.userAndMemberManagement.getUsers();

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
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
<!-- End SDK Available Operations -->

<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Error Handling -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

Example

```typescript
import { Users } from "@wingspan/users";

(async () => {
    const sdk = new Users({
        bearerAuth: "",
    });

    let res;
    try {
        res = await sdk.userAndMemberManagement.getUsers();
    } catch (e) {}

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Error Handling -->



<!-- Start Server Selection -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.wingspan.app/users` | None |
| 1 | `https://stagingapi.wingspan.app/payments` | None |

#### Example

```typescript
import { Users } from "@wingspan/users";

(async () => {
    const sdk = new Users({
        serverIdx: 1,
        bearerAuth: "",
    });

    const res = await sdk.userAndMemberManagement.getUsers();

    if (res.statusCode == 200) {
        // handle response
    }
})();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Users } from "@wingspan/users";

(async () => {
    const sdk = new Users({
        serverURL: "https://api.wingspan.app/users",
        bearerAuth: "",
    });

    const res = await sdk.userAndMemberManagement.getUsers();

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Server Selection -->



<!-- Start Custom HTTP Client -->
## Custom HTTP Client

The Typescript SDK makes API calls using the (axios)[https://axios-http.com/docs/intro] HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
from @wingspan/users import Users;
import axios;

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new Users({defaultClient: httpClient});
```
<!-- End Custom HTTP Client -->



<!-- Start Authentication -->

## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `bearerAuth` | http         | HTTP Bearer  |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Users } from "@wingspan/users";

(async () => {
    const sdk = new Users({
        bearerAuth: "",
    });

    const res = await sdk.userAndMemberManagement.getUsers();

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Authentication -->

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
