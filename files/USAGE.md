<!-- Start SDK Example Usage -->


```typescript
import { Files } from "@wingspan/files";

(async () => {
    const sdk = new Files();

    const res = await sdk.files.deleteFilesMemberPrivateId({
        id: "<ID>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->