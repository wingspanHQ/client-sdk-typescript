<!-- Start SDK Example Usage -->
```typescript
import { Payments } from "@wingspan/payments";

(async () => {
    const sdk = new Payments();

    const res = await sdk.deletePaymentsBankingCardId({
        id: "<ID>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->