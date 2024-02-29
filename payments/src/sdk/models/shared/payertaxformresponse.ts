/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    Eightd013dd0cdafb98addfde478aafc44fc8914592071f79bc8d2aa0096744c099f,
    Eightd013dd0cdafb98addfde478aafc44fc8914592071f79bc8d2aa0096744c099f$,
} from "./eightd013dd0cdafb98addfde478aafc44fc8914592071f79bc8d2aa0096744c099f";
import { Form1099Correction, Form1099Correction$ } from "./form1099correction";
import { RecipientVerification, RecipientVerification$ } from "./recipientverification";
import { RedactedMember, RedactedMember$ } from "./redactedmember";
import { TaxFormEvents, TaxFormEvents$ } from "./taxformevents";
import { TaxFormRedactedEvent, TaxFormRedactedEvent$ } from "./taxformredactedevent";
import {
    TaxFormRedactedSubmissionData,
    TaxFormRedactedSubmissionData$,
} from "./taxformredactedsubmissiondata";
import { TaxFormSubmission, TaxFormSubmission$ } from "./taxformsubmission";
import { TinVerification, TinVerification$ } from "./tinverification";
import { UserRoles, UserRoles$ } from "./userroles";
import { z } from "zod";

export enum PayerTaxFormResponseDeliveryMethod {
    Electronic = "Electronic",
    Mail = "Mail",
}

export type DeprecatedTaxForm = {};

export enum PayerTaxFormResponseStatus {
    Pending = "Pending",
    ReadyToSubmitToIrs = "ReadyToSubmitToIrs",
    SubmittedToIrs = "SubmittedToIrs",
    AcceptedByIrs = "AcceptedByIrs",
    RejectedByIrs = "RejectedByIrs",
    PendingCorrection = "PendingCorrection",
    Excluded = "Excluded",
    Ineligible = "Ineligible",
}

export enum PayerTaxFormResponseType {
    Form1099Nec = "Form1099Nec",
}

export type PayerTaxFormResponse = {
    activeSubmissionId: string;
    adjustments: number;
    clientId: string;
    correction?: Form1099Correction | null | undefined;
    createdAt: string;
    data: TaxFormRedactedSubmissionData;
    deliveryMethod: PayerTaxFormResponseDeliveryMethod;
    deprecatedTaxForm: DeprecatedTaxForm;
    eventActors: Record<string, string>;
    eventHistory: Array<TaxFormRedactedEvent>;
    events?: TaxFormEvents | null | undefined;
    filingStateCode: string;
    labels: Record<string, string>;
    memberEmail?: string | null | undefined;
    memberExternalId?: string | null | undefined;
    memberId: string;
    payee?: RedactedMember | null | undefined;
    payer?: RedactedMember | null | undefined;
    payerConfirmedW9Info?: boolean | null | undefined;
    payerPayee?:
        | Eightd013dd0cdafb98addfde478aafc44fc8914592071f79bc8d2aa0096744c099f
        | null
        | undefined;
    payerPayeeId: string;
    paymentProcessingFees: number;
    platformIncome: number;
    recipientConfirmedW9Info: boolean;
    recipientReadyToSubmitW9: boolean;
    recipientSyncEnabled: boolean;
    recipientVerification?: RecipientVerification | null | undefined;
    status: PayerTaxFormResponseStatus;
    submissions: Array<TaxFormSubmission>;
    taxFormId: string;
    tinVerification?: TinVerification | null | undefined;
    type: PayerTaxFormResponseType;
    unsyncedRecipientData?: TaxFormRedactedSubmissionData | null | undefined;
    unsyncedUpdateAvailable?: boolean | null | undefined;
    updatedAt: string;
    userRoles: UserRoles;
    year: number;
};

/** @internal */
export const PayerTaxFormResponseDeliveryMethod$ = z.nativeEnum(PayerTaxFormResponseDeliveryMethod);

/** @internal */
export namespace DeprecatedTaxForm$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<DeprecatedTaxForm, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeprecatedTaxForm> = z.object(
        {}
    );
}

/** @internal */
export const PayerTaxFormResponseStatus$ = z.nativeEnum(PayerTaxFormResponseStatus);

/** @internal */
export const PayerTaxFormResponseType$ = z.nativeEnum(PayerTaxFormResponseType);

/** @internal */
export namespace PayerTaxFormResponse$ {
    export type Inbound = {
        activeSubmissionId: string;
        adjustments: number;
        clientId: string;
        correction?: Form1099Correction$.Inbound | null | undefined;
        createdAt: string;
        data: TaxFormRedactedSubmissionData$.Inbound;
        deliveryMethod: PayerTaxFormResponseDeliveryMethod;
        deprecatedTaxForm: DeprecatedTaxForm$.Inbound;
        eventActors: Record<string, string>;
        eventHistory: Array<TaxFormRedactedEvent$.Inbound>;
        events?: TaxFormEvents$.Inbound | null | undefined;
        filingStateCode: string;
        labels: Record<string, string>;
        memberEmail?: string | null | undefined;
        memberExternalId?: string | null | undefined;
        memberId: string;
        payee?: RedactedMember$.Inbound | null | undefined;
        payer?: RedactedMember$.Inbound | null | undefined;
        payerConfirmedW9Info?: boolean | null | undefined;
        payerPayee?:
            | Eightd013dd0cdafb98addfde478aafc44fc8914592071f79bc8d2aa0096744c099f$.Inbound
            | null
            | undefined;
        payerPayeeId: string;
        paymentProcessingFees: number;
        platformIncome: number;
        recipientConfirmedW9Info: boolean;
        recipientReadyToSubmitW9: boolean;
        recipientSyncEnabled: boolean;
        recipientVerification?: RecipientVerification$.Inbound | null | undefined;
        status: PayerTaxFormResponseStatus;
        submissions: Array<TaxFormSubmission$.Inbound>;
        taxFormId: string;
        tinVerification?: TinVerification$.Inbound | null | undefined;
        type: PayerTaxFormResponseType;
        unsyncedRecipientData?: TaxFormRedactedSubmissionData$.Inbound | null | undefined;
        unsyncedUpdateAvailable?: boolean | null | undefined;
        updatedAt: string;
        userRoles: UserRoles$.Inbound;
        year: number;
    };

    export const inboundSchema: z.ZodType<PayerTaxFormResponse, z.ZodTypeDef, Inbound> = z
        .object({
            activeSubmissionId: z.string(),
            adjustments: z.number(),
            clientId: z.string(),
            correction: z.nullable(Form1099Correction$.inboundSchema).optional(),
            createdAt: z.string(),
            data: TaxFormRedactedSubmissionData$.inboundSchema,
            deliveryMethod: PayerTaxFormResponseDeliveryMethod$,
            deprecatedTaxForm: z.lazy(() => DeprecatedTaxForm$.inboundSchema),
            eventActors: z.record(z.string()),
            eventHistory: z.array(TaxFormRedactedEvent$.inboundSchema),
            events: z.nullable(TaxFormEvents$.inboundSchema).optional(),
            filingStateCode: z.string(),
            labels: z.record(z.string()),
            memberEmail: z.nullable(z.string()).optional(),
            memberExternalId: z.nullable(z.string()).optional(),
            memberId: z.string(),
            payee: z.nullable(RedactedMember$.inboundSchema).optional(),
            payer: z.nullable(RedactedMember$.inboundSchema).optional(),
            payerConfirmedW9Info: z.nullable(z.boolean()).optional(),
            payerPayee: z
                .nullable(
                    Eightd013dd0cdafb98addfde478aafc44fc8914592071f79bc8d2aa0096744c099f$.inboundSchema
                )
                .optional(),
            payerPayeeId: z.string(),
            paymentProcessingFees: z.number(),
            platformIncome: z.number(),
            recipientConfirmedW9Info: z.boolean(),
            recipientReadyToSubmitW9: z.boolean(),
            recipientSyncEnabled: z.boolean(),
            recipientVerification: z.nullable(RecipientVerification$.inboundSchema).optional(),
            status: PayerTaxFormResponseStatus$,
            submissions: z.array(TaxFormSubmission$.inboundSchema),
            taxFormId: z.string(),
            tinVerification: z.nullable(TinVerification$.inboundSchema).optional(),
            type: PayerTaxFormResponseType$,
            unsyncedRecipientData: z
                .nullable(TaxFormRedactedSubmissionData$.inboundSchema)
                .optional(),
            unsyncedUpdateAvailable: z.nullable(z.boolean()).optional(),
            updatedAt: z.string(),
            userRoles: UserRoles$.inboundSchema,
            year: z.number(),
        })
        .transform((v) => {
            return {
                activeSubmissionId: v.activeSubmissionId,
                adjustments: v.adjustments,
                clientId: v.clientId,
                ...(v.correction === undefined ? null : { correction: v.correction }),
                createdAt: v.createdAt,
                data: v.data,
                deliveryMethod: v.deliveryMethod,
                deprecatedTaxForm: v.deprecatedTaxForm,
                eventActors: v.eventActors,
                eventHistory: v.eventHistory,
                ...(v.events === undefined ? null : { events: v.events }),
                filingStateCode: v.filingStateCode,
                labels: v.labels,
                ...(v.memberEmail === undefined ? null : { memberEmail: v.memberEmail }),
                ...(v.memberExternalId === undefined
                    ? null
                    : { memberExternalId: v.memberExternalId }),
                memberId: v.memberId,
                ...(v.payee === undefined ? null : { payee: v.payee }),
                ...(v.payer === undefined ? null : { payer: v.payer }),
                ...(v.payerConfirmedW9Info === undefined
                    ? null
                    : { payerConfirmedW9Info: v.payerConfirmedW9Info }),
                ...(v.payerPayee === undefined ? null : { payerPayee: v.payerPayee }),
                payerPayeeId: v.payerPayeeId,
                paymentProcessingFees: v.paymentProcessingFees,
                platformIncome: v.platformIncome,
                recipientConfirmedW9Info: v.recipientConfirmedW9Info,
                recipientReadyToSubmitW9: v.recipientReadyToSubmitW9,
                recipientSyncEnabled: v.recipientSyncEnabled,
                ...(v.recipientVerification === undefined
                    ? null
                    : { recipientVerification: v.recipientVerification }),
                status: v.status,
                submissions: v.submissions,
                taxFormId: v.taxFormId,
                ...(v.tinVerification === undefined
                    ? null
                    : { tinVerification: v.tinVerification }),
                type: v.type,
                ...(v.unsyncedRecipientData === undefined
                    ? null
                    : { unsyncedRecipientData: v.unsyncedRecipientData }),
                ...(v.unsyncedUpdateAvailable === undefined
                    ? null
                    : { unsyncedUpdateAvailable: v.unsyncedUpdateAvailable }),
                updatedAt: v.updatedAt,
                userRoles: v.userRoles,
                year: v.year,
            };
        });

    export type Outbound = {
        activeSubmissionId: string;
        adjustments: number;
        clientId: string;
        correction?: Form1099Correction$.Outbound | null | undefined;
        createdAt: string;
        data: TaxFormRedactedSubmissionData$.Outbound;
        deliveryMethod: PayerTaxFormResponseDeliveryMethod;
        deprecatedTaxForm: DeprecatedTaxForm$.Outbound;
        eventActors: Record<string, string>;
        eventHistory: Array<TaxFormRedactedEvent$.Outbound>;
        events?: TaxFormEvents$.Outbound | null | undefined;
        filingStateCode: string;
        labels: Record<string, string>;
        memberEmail?: string | null | undefined;
        memberExternalId?: string | null | undefined;
        memberId: string;
        payee?: RedactedMember$.Outbound | null | undefined;
        payer?: RedactedMember$.Outbound | null | undefined;
        payerConfirmedW9Info?: boolean | null | undefined;
        payerPayee?:
            | Eightd013dd0cdafb98addfde478aafc44fc8914592071f79bc8d2aa0096744c099f$.Outbound
            | null
            | undefined;
        payerPayeeId: string;
        paymentProcessingFees: number;
        platformIncome: number;
        recipientConfirmedW9Info: boolean;
        recipientReadyToSubmitW9: boolean;
        recipientSyncEnabled: boolean;
        recipientVerification?: RecipientVerification$.Outbound | null | undefined;
        status: PayerTaxFormResponseStatus;
        submissions: Array<TaxFormSubmission$.Outbound>;
        taxFormId: string;
        tinVerification?: TinVerification$.Outbound | null | undefined;
        type: PayerTaxFormResponseType;
        unsyncedRecipientData?: TaxFormRedactedSubmissionData$.Outbound | null | undefined;
        unsyncedUpdateAvailable?: boolean | null | undefined;
        updatedAt: string;
        userRoles: UserRoles$.Outbound;
        year: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PayerTaxFormResponse> = z
        .object({
            activeSubmissionId: z.string(),
            adjustments: z.number(),
            clientId: z.string(),
            correction: z.nullable(Form1099Correction$.outboundSchema).optional(),
            createdAt: z.string(),
            data: TaxFormRedactedSubmissionData$.outboundSchema,
            deliveryMethod: PayerTaxFormResponseDeliveryMethod$,
            deprecatedTaxForm: z.lazy(() => DeprecatedTaxForm$.outboundSchema),
            eventActors: z.record(z.string()),
            eventHistory: z.array(TaxFormRedactedEvent$.outboundSchema),
            events: z.nullable(TaxFormEvents$.outboundSchema).optional(),
            filingStateCode: z.string(),
            labels: z.record(z.string()),
            memberEmail: z.nullable(z.string()).optional(),
            memberExternalId: z.nullable(z.string()).optional(),
            memberId: z.string(),
            payee: z.nullable(RedactedMember$.outboundSchema).optional(),
            payer: z.nullable(RedactedMember$.outboundSchema).optional(),
            payerConfirmedW9Info: z.nullable(z.boolean()).optional(),
            payerPayee: z
                .nullable(
                    Eightd013dd0cdafb98addfde478aafc44fc8914592071f79bc8d2aa0096744c099f$.outboundSchema
                )
                .optional(),
            payerPayeeId: z.string(),
            paymentProcessingFees: z.number(),
            platformIncome: z.number(),
            recipientConfirmedW9Info: z.boolean(),
            recipientReadyToSubmitW9: z.boolean(),
            recipientSyncEnabled: z.boolean(),
            recipientVerification: z.nullable(RecipientVerification$.outboundSchema).optional(),
            status: PayerTaxFormResponseStatus$,
            submissions: z.array(TaxFormSubmission$.outboundSchema),
            taxFormId: z.string(),
            tinVerification: z.nullable(TinVerification$.outboundSchema).optional(),
            type: PayerTaxFormResponseType$,
            unsyncedRecipientData: z
                .nullable(TaxFormRedactedSubmissionData$.outboundSchema)
                .optional(),
            unsyncedUpdateAvailable: z.nullable(z.boolean()).optional(),
            updatedAt: z.string(),
            userRoles: UserRoles$.outboundSchema,
            year: z.number(),
        })
        .transform((v) => {
            return {
                activeSubmissionId: v.activeSubmissionId,
                adjustments: v.adjustments,
                clientId: v.clientId,
                ...(v.correction === undefined ? null : { correction: v.correction }),
                createdAt: v.createdAt,
                data: v.data,
                deliveryMethod: v.deliveryMethod,
                deprecatedTaxForm: v.deprecatedTaxForm,
                eventActors: v.eventActors,
                eventHistory: v.eventHistory,
                ...(v.events === undefined ? null : { events: v.events }),
                filingStateCode: v.filingStateCode,
                labels: v.labels,
                ...(v.memberEmail === undefined ? null : { memberEmail: v.memberEmail }),
                ...(v.memberExternalId === undefined
                    ? null
                    : { memberExternalId: v.memberExternalId }),
                memberId: v.memberId,
                ...(v.payee === undefined ? null : { payee: v.payee }),
                ...(v.payer === undefined ? null : { payer: v.payer }),
                ...(v.payerConfirmedW9Info === undefined
                    ? null
                    : { payerConfirmedW9Info: v.payerConfirmedW9Info }),
                ...(v.payerPayee === undefined ? null : { payerPayee: v.payerPayee }),
                payerPayeeId: v.payerPayeeId,
                paymentProcessingFees: v.paymentProcessingFees,
                platformIncome: v.platformIncome,
                recipientConfirmedW9Info: v.recipientConfirmedW9Info,
                recipientReadyToSubmitW9: v.recipientReadyToSubmitW9,
                recipientSyncEnabled: v.recipientSyncEnabled,
                ...(v.recipientVerification === undefined
                    ? null
                    : { recipientVerification: v.recipientVerification }),
                status: v.status,
                submissions: v.submissions,
                taxFormId: v.taxFormId,
                ...(v.tinVerification === undefined
                    ? null
                    : { tinVerification: v.tinVerification }),
                type: v.type,
                ...(v.unsyncedRecipientData === undefined
                    ? null
                    : { unsyncedRecipientData: v.unsyncedRecipientData }),
                ...(v.unsyncedUpdateAvailable === undefined
                    ? null
                    : { unsyncedUpdateAvailable: v.unsyncedUpdateAvailable }),
                updatedAt: v.updatedAt,
                userRoles: v.userRoles,
                year: v.year,
            };
        });
}