/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { IntegrationsQuickbooksDefaults } from "./integrationsquickbooksdefaults";
import { Expose, Type } from "class-transformer";

export class IntegrationsQuickbooksCreateRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "defaults" })
    @Type(() => IntegrationsQuickbooksDefaults)
    defaults?: IntegrationsQuickbooksDefaults;

    @SpeakeasyMetadata()
    @Expose({ name: "redirectUrl" })
    redirectUrl: string;
}
