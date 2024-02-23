/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type GetBenefitsPlanEnrollmentIdRequest = {
    /**
     * Unique identifier
     */
    id: string;
};

export type GetBenefitsPlanEnrollmentIdResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * An enrollment into a plan
     */
    planEnrollment?: shared.PlanEnrollment | undefined;
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
export namespace GetBenefitsPlanEnrollmentIdRequest$ {
    export type Inbound = {
        id: string;
    };

    export const inboundSchema: z.ZodType<
        GetBenefitsPlanEnrollmentIdRequest,
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
        GetBenefitsPlanEnrollmentIdRequest
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
export namespace GetBenefitsPlanEnrollmentIdResponse$ {
    export type Inbound = {
        ContentType: string;
        PlanEnrollment?: shared.PlanEnrollment$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        GetBenefitsPlanEnrollmentIdResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            PlanEnrollment: shared.PlanEnrollment$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.PlanEnrollment === undefined ? null : { planEnrollment: v.PlanEnrollment }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        PlanEnrollment?: shared.PlanEnrollment$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetBenefitsPlanEnrollmentIdResponse
    > = z
        .object({
            contentType: z.string(),
            planEnrollment: shared.PlanEnrollment$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.planEnrollment === undefined ? null : { PlanEnrollment: v.planEnrollment }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
