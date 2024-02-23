<!-- Start SDK Example Usage [usage] -->
```typescript
import { Files } from "@wingspan/files";

async function run() {
    const sdk = new Files({
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.documentManagementForESignatures.getFilesDocument();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->