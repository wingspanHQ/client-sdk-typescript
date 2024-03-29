/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type Request1099InviteEmailResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Basic response indicating success
     */
    taxFormInviteResponse?: shared.TaxFormInviteResponse | undefined;
};

/** @internal */
export namespace Request1099InviteEmailResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        TaxFormInviteResponse?: shared.TaxFormInviteResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<Request1099InviteEmailResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            TaxFormInviteResponse: shared.TaxFormInviteResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.TaxFormInviteResponse === undefined
                    ? null
                    : { taxFormInviteResponse: v.TaxFormInviteResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        TaxFormInviteResponse?: shared.TaxFormInviteResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Request1099InviteEmailResponse> =
        z
            .object({
                contentType: z.string(),
                statusCode: z.number().int(),
                rawResponse: z.instanceof(Response).transform(() => {
                    throw new Error("Response cannot be serialized");
                }),
                taxFormInviteResponse: shared.TaxFormInviteResponse$.outboundSchema.optional(),
            })
            .transform((v) => {
                return {
                    ContentType: v.contentType,
                    StatusCode: v.statusCode,
                    RawResponse: v.rawResponse,
                    ...(v.taxFormInviteResponse === undefined
                        ? null
                        : { TaxFormInviteResponse: v.taxFormInviteResponse }),
                };
            });
}
