<!-- Start SDK Example Usage [usage] -->
```typescript
import { Payments } from "@wingspan/payments";

async function run() {
    const sdk = new Payments({
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.serviceSettings.get();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->