<!-- Start SDK Example Usage [usage] -->
```typescript
import { Files } from "@wingspan/files";

async function run() {
    const sdk = new Files({
        bearerAuth: "",
    });

    const res = await sdk.documentManagementForESignatures.getFilesDocument();

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->