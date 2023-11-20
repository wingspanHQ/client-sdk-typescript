<!-- Start SDK Example Usage -->
```typescript
import { Benefits } from "@wingspan/benefits";

(async () => {
    const sdk = new Benefits({
        bearerAuth: "",
    });

    const res = await sdk.benefitsEnrollment.getBenefitsEnrollmentId({
        id: "<ID>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->