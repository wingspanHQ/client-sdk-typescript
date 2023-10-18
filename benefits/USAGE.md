<!-- Start SDK Example Usage -->


```typescript
import { Benefits } from "@wingspanhq/benefits";

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