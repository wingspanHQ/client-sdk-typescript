<!-- Start SDK Example Usage [usage] -->
```typescript
import { Payments } from "@wingspan/payments";

async function run() {
    const sdk = new Payments({
        bearerAuth: "",
    });

    const res = await sdk.serviceSettings.getPayments();

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->