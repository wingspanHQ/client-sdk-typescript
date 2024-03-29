/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { FlowProgress, FlowProgress$ } from "./flowprogress";
import { z } from "zod";

export type Flows = {
    benefitsSetup?: FlowProgress | null | undefined;
    bookkeepingSetup?: FlowProgress | null | undefined;
    businessSetup?: FlowProgress | null | undefined;
    collaboratorInvite?: FlowProgress | null | undefined;
    enterprise?: FlowProgress | null | undefined;
    fileVaultInfoBanner?: FlowProgress | null | undefined;
    nec1099Setup?: FlowProgress | null | undefined;
    onboarding?: FlowProgress | null | undefined;
    onboarding1099?: FlowProgress | null | undefined;
    paymentsSetup?: FlowProgress | null | undefined;
    personalPayLinkSetup?: FlowProgress | null | undefined;
    settingsFoundingMemberInterest?: FlowProgress | null | undefined;
    taxWithholdingsBeta?: FlowProgress | null | undefined;
    taxWithholdingsSetup?: FlowProgress | null | undefined;
    w9Confirmation?: FlowProgress | null | undefined;
    walletSetup?: FlowProgress | null | undefined;
};

/** @internal */
export namespace Flows$ {
    export type Inbound = {
        benefitsSetup?: FlowProgress$.Inbound | null | undefined;
        bookkeepingSetup?: FlowProgress$.Inbound | null | undefined;
        businessSetup?: FlowProgress$.Inbound | null | undefined;
        collaboratorInvite?: FlowProgress$.Inbound | null | undefined;
        enterprise?: FlowProgress$.Inbound | null | undefined;
        fileVaultInfoBanner?: FlowProgress$.Inbound | null | undefined;
        nec1099Setup?: FlowProgress$.Inbound | null | undefined;
        onboarding?: FlowProgress$.Inbound | null | undefined;
        onboarding1099?: FlowProgress$.Inbound | null | undefined;
        paymentsSetup?: FlowProgress$.Inbound | null | undefined;
        personalPayLinkSetup?: FlowProgress$.Inbound | null | undefined;
        settingsFoundingMemberInterest?: FlowProgress$.Inbound | null | undefined;
        taxWithholdingsBeta?: FlowProgress$.Inbound | null | undefined;
        taxWithholdingsSetup?: FlowProgress$.Inbound | null | undefined;
        w9Confirmation?: FlowProgress$.Inbound | null | undefined;
        walletSetup?: FlowProgress$.Inbound | null | undefined;
    };

    export const inboundSchema: z.ZodType<Flows, z.ZodTypeDef, Inbound> = z
        .object({
            benefitsSetup: z.nullable(FlowProgress$.inboundSchema).optional(),
            bookkeepingSetup: z.nullable(FlowProgress$.inboundSchema).optional(),
            businessSetup: z.nullable(FlowProgress$.inboundSchema).optional(),
            collaboratorInvite: z.nullable(FlowProgress$.inboundSchema).optional(),
            enterprise: z.nullable(FlowProgress$.inboundSchema).optional(),
            fileVaultInfoBanner: z.nullable(FlowProgress$.inboundSchema).optional(),
            nec1099Setup: z.nullable(FlowProgress$.inboundSchema).optional(),
            onboarding: z.nullable(FlowProgress$.inboundSchema).optional(),
            onboarding1099: z.nullable(FlowProgress$.inboundSchema).optional(),
            paymentsSetup: z.nullable(FlowProgress$.inboundSchema).optional(),
            personalPayLinkSetup: z.nullable(FlowProgress$.inboundSchema).optional(),
            settingsFoundingMemberInterest: z.nullable(FlowProgress$.inboundSchema).optional(),
            taxWithholdingsBeta: z.nullable(FlowProgress$.inboundSchema).optional(),
            taxWithholdingsSetup: z.nullable(FlowProgress$.inboundSchema).optional(),
            w9Confirmation: z.nullable(FlowProgress$.inboundSchema).optional(),
            walletSetup: z.nullable(FlowProgress$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.benefitsSetup === undefined ? null : { benefitsSetup: v.benefitsSetup }),
                ...(v.bookkeepingSetup === undefined
                    ? null
                    : { bookkeepingSetup: v.bookkeepingSetup }),
                ...(v.businessSetup === undefined ? null : { businessSetup: v.businessSetup }),
                ...(v.collaboratorInvite === undefined
                    ? null
                    : { collaboratorInvite: v.collaboratorInvite }),
                ...(v.enterprise === undefined ? null : { enterprise: v.enterprise }),
                ...(v.fileVaultInfoBanner === undefined
                    ? null
                    : { fileVaultInfoBanner: v.fileVaultInfoBanner }),
                ...(v.nec1099Setup === undefined ? null : { nec1099Setup: v.nec1099Setup }),
                ...(v.onboarding === undefined ? null : { onboarding: v.onboarding }),
                ...(v.onboarding1099 === undefined ? null : { onboarding1099: v.onboarding1099 }),
                ...(v.paymentsSetup === undefined ? null : { paymentsSetup: v.paymentsSetup }),
                ...(v.personalPayLinkSetup === undefined
                    ? null
                    : { personalPayLinkSetup: v.personalPayLinkSetup }),
                ...(v.settingsFoundingMemberInterest === undefined
                    ? null
                    : { settingsFoundingMemberInterest: v.settingsFoundingMemberInterest }),
                ...(v.taxWithholdingsBeta === undefined
                    ? null
                    : { taxWithholdingsBeta: v.taxWithholdingsBeta }),
                ...(v.taxWithholdingsSetup === undefined
                    ? null
                    : { taxWithholdingsSetup: v.taxWithholdingsSetup }),
                ...(v.w9Confirmation === undefined ? null : { w9Confirmation: v.w9Confirmation }),
                ...(v.walletSetup === undefined ? null : { walletSetup: v.walletSetup }),
            };
        });

    export type Outbound = {
        benefitsSetup?: FlowProgress$.Outbound | null | undefined;
        bookkeepingSetup?: FlowProgress$.Outbound | null | undefined;
        businessSetup?: FlowProgress$.Outbound | null | undefined;
        collaboratorInvite?: FlowProgress$.Outbound | null | undefined;
        enterprise?: FlowProgress$.Outbound | null | undefined;
        fileVaultInfoBanner?: FlowProgress$.Outbound | null | undefined;
        nec1099Setup?: FlowProgress$.Outbound | null | undefined;
        onboarding?: FlowProgress$.Outbound | null | undefined;
        onboarding1099?: FlowProgress$.Outbound | null | undefined;
        paymentsSetup?: FlowProgress$.Outbound | null | undefined;
        personalPayLinkSetup?: FlowProgress$.Outbound | null | undefined;
        settingsFoundingMemberInterest?: FlowProgress$.Outbound | null | undefined;
        taxWithholdingsBeta?: FlowProgress$.Outbound | null | undefined;
        taxWithholdingsSetup?: FlowProgress$.Outbound | null | undefined;
        w9Confirmation?: FlowProgress$.Outbound | null | undefined;
        walletSetup?: FlowProgress$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Flows> = z
        .object({
            benefitsSetup: z.nullable(FlowProgress$.outboundSchema).optional(),
            bookkeepingSetup: z.nullable(FlowProgress$.outboundSchema).optional(),
            businessSetup: z.nullable(FlowProgress$.outboundSchema).optional(),
            collaboratorInvite: z.nullable(FlowProgress$.outboundSchema).optional(),
            enterprise: z.nullable(FlowProgress$.outboundSchema).optional(),
            fileVaultInfoBanner: z.nullable(FlowProgress$.outboundSchema).optional(),
            nec1099Setup: z.nullable(FlowProgress$.outboundSchema).optional(),
            onboarding: z.nullable(FlowProgress$.outboundSchema).optional(),
            onboarding1099: z.nullable(FlowProgress$.outboundSchema).optional(),
            paymentsSetup: z.nullable(FlowProgress$.outboundSchema).optional(),
            personalPayLinkSetup: z.nullable(FlowProgress$.outboundSchema).optional(),
            settingsFoundingMemberInterest: z.nullable(FlowProgress$.outboundSchema).optional(),
            taxWithholdingsBeta: z.nullable(FlowProgress$.outboundSchema).optional(),
            taxWithholdingsSetup: z.nullable(FlowProgress$.outboundSchema).optional(),
            w9Confirmation: z.nullable(FlowProgress$.outboundSchema).optional(),
            walletSetup: z.nullable(FlowProgress$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.benefitsSetup === undefined ? null : { benefitsSetup: v.benefitsSetup }),
                ...(v.bookkeepingSetup === undefined
                    ? null
                    : { bookkeepingSetup: v.bookkeepingSetup }),
                ...(v.businessSetup === undefined ? null : { businessSetup: v.businessSetup }),
                ...(v.collaboratorInvite === undefined
                    ? null
                    : { collaboratorInvite: v.collaboratorInvite }),
                ...(v.enterprise === undefined ? null : { enterprise: v.enterprise }),
                ...(v.fileVaultInfoBanner === undefined
                    ? null
                    : { fileVaultInfoBanner: v.fileVaultInfoBanner }),
                ...(v.nec1099Setup === undefined ? null : { nec1099Setup: v.nec1099Setup }),
                ...(v.onboarding === undefined ? null : { onboarding: v.onboarding }),
                ...(v.onboarding1099 === undefined ? null : { onboarding1099: v.onboarding1099 }),
                ...(v.paymentsSetup === undefined ? null : { paymentsSetup: v.paymentsSetup }),
                ...(v.personalPayLinkSetup === undefined
                    ? null
                    : { personalPayLinkSetup: v.personalPayLinkSetup }),
                ...(v.settingsFoundingMemberInterest === undefined
                    ? null
                    : { settingsFoundingMemberInterest: v.settingsFoundingMemberInterest }),
                ...(v.taxWithholdingsBeta === undefined
                    ? null
                    : { taxWithholdingsBeta: v.taxWithholdingsBeta }),
                ...(v.taxWithholdingsSetup === undefined
                    ? null
                    : { taxWithholdingsSetup: v.taxWithholdingsSetup }),
                ...(v.w9Confirmation === undefined ? null : { w9Confirmation: v.w9Confirmation }),
                ...(v.walletSetup === undefined ? null : { walletSetup: v.walletSetup }),
            };
        });
}
