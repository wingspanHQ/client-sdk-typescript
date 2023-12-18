<!-- Start SDK Example Usage [usage] -->
```typescript
import { Benefits } from "@wingspan/benefits";

async function run() {
    const sdk = new Benefits({
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const res = await sdk.benefitsEnrollment.getBenefitsEnrollmentId({
        id: "<ID>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->