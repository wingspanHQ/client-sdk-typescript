/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type DeletePaymentEligibilityRequirementRequest = {
    /**
     * Unique identifier
     */
    id: string;
};

export type DeletePaymentEligibilityRequirementResponse = {
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
export namespace DeletePaymentEligibilityRequirementRequest$ {
    export type Inbound = {
        id: string;
    };

    export const inboundSchema: z.ZodType<
        DeletePaymentEligibilityRequirementRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DeletePaymentEligibilityRequirementRequest
    > = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });
}

/** @internal */
export namespace DeletePaymentEligibilityRequirementResponse$ {
    export type Inbound = {
        ContentType: string;
        PaymentEligibility?: shared.PaymentEligibility$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        DeletePaymentEligibilityRequirementResponse,
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
        DeletePaymentEligibilityRequirementResponse
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
