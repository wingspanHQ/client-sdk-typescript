/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDKOptions, serverURLFromOptions } from "../lib/config";
import { HTTPClient } from "../lib/http";
import { ClientSDK } from "../lib/sdks";
import { DocumentManagementForESignatures } from "./documentmanagementforesignatures";
import { ESignatureDocumentTemplates } from "./esignaturedocumenttemplates";
import { PrivateFileManagement } from "./privatefilemanagement";
import { PublicFileManagement } from "./publicfilemanagement";

export class Files extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    private _documentManagementForESignatures?: DocumentManagementForESignatures;
    get documentManagementForESignatures() {
        return (this._documentManagementForESignatures ??= new DocumentManagementForESignatures(
            this.options$
        ));
    }

    private _privateFileManagement?: PrivateFileManagement;
    get privateFileManagement() {
        return (this._privateFileManagement ??= new PrivateFileManagement(this.options$));
    }

    private _publicFileManagement?: PublicFileManagement;
    get publicFileManagement() {
        return (this._publicFileManagement ??= new PublicFileManagement(this.options$));
    }

    private _eSignatureDocumentTemplates?: ESignatureDocumentTemplates;
    get eSignatureDocumentTemplates() {
        return (this._eSignatureDocumentTemplates ??= new ESignatureDocumentTemplates(
            this.options$
        ));
    }
}
