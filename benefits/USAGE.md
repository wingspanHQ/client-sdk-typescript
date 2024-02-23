<!-- Start SDK Example Usage [usage] -->
```typescript
import { Benefits } from "@wingspan/benefits";

async function run() {
    const sdk = new Benefits({
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.benefitsEnrollment.getBenefitsEnrollmentId({
        id: "<id>",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->