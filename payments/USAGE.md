<!-- Start SDK Example Usage [usage] -->
```typescript
import { Payments } from "@wingspan/payments";

const payments = new Payments({
    bearerAuth: process.env.BEARER_AUTH,
});

async function run() {
    const result = await payments.serviceSettings.get();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->