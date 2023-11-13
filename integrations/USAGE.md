<!-- Start SDK Example Usage -->
```typescript
import { Integrations } from "@wingspan/integrations";

(async () => {
    const sdk = new Integrations();

    const res = await sdk.deleteIntegrationsQuickbooksAccountAssetId({
        id: "<ID>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->