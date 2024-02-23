<!-- Start SDK Example Usage [usage] -->
```typescript
import { Users } from "@wingspan/users";

async function run() {
    const sdk = new Users({
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.userAndMemberManagement.getUsers();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->