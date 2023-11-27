<!-- Start SDK Example Usage -->
```typescript
import { Payments } from "@wingspan/payments";

(async () => {
    const sdk = new Payments({
        bearerAuth: "",
    });

    const res = await sdk.serviceSettings.getPayments();

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->