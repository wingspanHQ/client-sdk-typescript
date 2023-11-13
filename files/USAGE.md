<!-- Start SDK Example Usage -->
```typescript
import { Files } from "@wingspan/files";

(async () => {
    const sdk = new Files({
        bearerAuth: "",
    });

    const res = await sdk.deleteFilesMemberPrivateId({
        id: "<ID>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->