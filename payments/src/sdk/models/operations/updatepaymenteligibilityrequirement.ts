/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type UpdatePaymentEligibilityRequirementRequest = {
    paymentEligibilityUpdateRequest?: shared.PaymentEligibilityUpdateRequest | undefined;
    /**
     * Unique identifier
     */
    id: string;
};

export type UpdatePaymentEligibilityRequirementResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * See payment eligibility requirements on member
     */
    paymentEligibility?: shared.PaymentEligibility | undefined;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export namespace UpdatePaymentEligibilityRequirementRequest$ {
    export type Inbound = {
        PaymentEligibilityUpdateRequest?:
            | shared.PaymentEligibilityUpdateRequest$.Inbound
            | undefined;
        id: string;
    };

    export const inboundSchema: z.ZodType<
        UpdatePaymentEligibilityRequirementRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            PaymentEligibilityUpdateRequest:
                shared.PaymentEligibilityUpdateRequest$.inboundSchema.optional(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.PaymentEligibilityUpdateRequest === undefined
                    ? null
                    : { paymentEligibilityUpdateRequest: v.PaymentEligibilityUpdateRequest }),
                id: v.id,
            };
        });

    export type Outbound = {
        PaymentEligibilityUpdateRequest?:
            | shared.PaymentEligibilityUpdateRequest$.Outbound
            | undefined;
        id: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UpdatePaymentEligibilityRequirementRequest
    > = z
        .object({
            paymentEligibilityUpdateRequest:
                shared.PaymentEligibilityUpdateRequest$.outboundSchema.optional(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.paymentEligibilityUpdateRequest === undefined
                    ? null
                    : { PaymentEligibilityUpdateRequest: v.paymentEligibilityUpdateRequest }),
                id: v.id,
            };
        });
}

/** @internal */
export namespace UpdatePaymentEligibilityRequirementResponse$ {
    export type Inbound = {
        ContentType: string;
        PaymentEligibility?: shared.PaymentEligibility$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        UpdatePaymentEligibilityRequirementResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            PaymentEligibility: shared.PaymentEligibility$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.PaymentEligibility === undefined
                    ? null
                    : { paymentEligibility: v.PaymentEligibility }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        PaymentEligibility?: shared.PaymentEligibility$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UpdatePaymentEligibilityRequirementResponse
    > = z
        .object({
            contentType: z.string(),
            paymentEligibility: shared.PaymentEligibility$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.paymentEligibility === undefined
                    ? null
                    : { PaymentEligibility: v.paymentEligibility }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
