# openapi

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/wingspanHQ/client-sdk-typescript.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/wingspanHQ/client-sdk-typescript/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation -->
# SDK Installation

## NPM

```bash
npm add openapi
```

## Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->


```typescript
import { SDK } from "openapi";

(async () => {
    const sdk = new SDK();

    const res = await sdk.sdk.getBenefitsEnrollmentId({
        id: "<ID>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
# Available Resources and Operations

## [SDK](docs/sdks/sdk/README.md)

* [getBenefitsEnrollmentId](docs/sdks/sdk/README.md#getbenefitsenrollmentid) - Retrieve Enrollment Details for a Specific Member
* [getBenefitsPlanEnrollment](docs/sdks/sdk/README.md#getbenefitsplanenrollment) - List all plan enrollments
* [getBenefitsPlanEnrollmentId](docs/sdks/sdk/README.md#getbenefitsplanenrollmentid) - Get a particular plan enrollment by ID
* [getBenefitsService](docs/sdks/sdk/README.md#getbenefitsservice) - Retrieve Current Benefits Service Status
* [patchBenefitsServiceId](docs/sdks/sdk/README.md#patchbenefitsserviceid) - Modify Benefits Service Status
<!-- End SDK Available Operations -->

<!-- Start Dev Containers -->



<!-- End Dev Containers -->

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
