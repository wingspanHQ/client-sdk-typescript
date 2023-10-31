# @wingspanHQ/benefits

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/wingspanHQ/client-sdk-typescript.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/wingspanHQ/client-sdk-typescript/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @wingspan/benefits
```

### Yarn

```bash
yarn add @wingspan/benefits
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { Benefits } from "@wingspan/benefits";

(async () => {
    const sdk = new Benefits();

    const res = await sdk.benefits.getBenefitsEnrollmentId({
        id: "<ID>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [Benefits SDK](docs/sdks/benefits/README.md)

* [getBenefitsEnrollmentId](docs/sdks/benefits/README.md#getbenefitsenrollmentid) - Retrieve Enrollment Details for a Specific Member
* [getBenefitsPlanEnrollment](docs/sdks/benefits/README.md#getbenefitsplanenrollment) - List all plan enrollments
* [getBenefitsPlanEnrollmentId](docs/sdks/benefits/README.md#getbenefitsplanenrollmentid) - Get a particular plan enrollment by ID
* [getBenefitsService](docs/sdks/benefits/README.md#getbenefitsservice) - Retrieve Current Benefits Service Status
* [patchBenefitsServiceId](docs/sdks/benefits/README.md#patchbenefitsserviceid) - Modify Benefits Service Status
<!-- End SDK Available Operations -->

<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Error Handling -->
# Error Handling

Handling errors in your SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.


<!-- End Error Handling -->



<!-- Start Server Selection -->
# Server Selection

## Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.wingspan.app/benefits` | None |
| 1 | `https://stagingapi.wingspan.app/benefits` | None |

For example:


```typescript
import { Benefits } from "@wingspan/benefits";

(async () => {
    const sdk = new Benefits({
        serverIdx: 1,
    });

    const res = await sdk.benefits.getBenefitsEnrollmentId({
        id: "<ID>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```


## Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:


```typescript
import { Benefits } from "@wingspan/benefits";

(async () => {
    const sdk = new Benefits({
        serverURL: "https://api.wingspan.app/benefits",
    });

    const res = await sdk.benefits.getBenefitsEnrollmentId({
        id: "<ID>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Server Selection -->



<!-- Start Custom HTTP Client -->
# Custom HTTP Client

The Typescript SDK makes API calls using the (axios)[https://axios-http.com/docs/intro] HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.


For example, you could specify a header for every request that your sdk makes as follows:

```typescript
from @wingspan/benefits import Benefits;
import axios;

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})


const sdk = new Benefits({defaultClient: httpClient});
```


<!-- End Custom HTTP Client -->

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
