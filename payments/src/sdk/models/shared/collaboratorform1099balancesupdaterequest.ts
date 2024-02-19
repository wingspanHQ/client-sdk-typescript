/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    Ce853dbef33b2b91880690c84bc5314340c1301fd7b3503dd6ce79c844e2a481,
    Ce853dbef33b2b91880690c84bc5314340c1301fd7b3503dd6ce79c844e2a481$,
} from "./ce853dbef33b2b91880690c84bc5314340c1301fd7b3503dd6ce79c844e2a481";
import {
    Eighta9c6cb49482a98cdd603ff09858cdc3e5ef6ad9807c876c4161d925a96694a5,
    Eighta9c6cb49482a98cdd603ff09858cdc3e5ef6ad9807c876c4161d925a96694a5$,
} from "./eighta9c6cb49482a98cdd603ff09858cdc3e5ef6ad9807c876c4161d925a96694a5";
import { z } from "zod";

export enum DeliveryMethod {
    Electronic = "Electronic",
    Mail = "Mail",
    Both = "Both",
}

export type Events = {};

export enum CollaboratorForm1099BalancesUpdateRequestStatus {
    Ready = "Ready",
    NeedsActionInfo = "NeedsActionInfo",
    NeedsActionDispute = "NeedsActionDispute",
    Submitted = "Submitted",
    Rejected = "Rejected",
    Accepted = "Accepted",
    Excluded = "Excluded",
}

export type CollaboratorForm1099BalancesUpdateRequest = {
    adjustments?: number | null | undefined;
    correction?:
        | Ce853dbef33b2b91880690c84bc5314340c1301fd7b3503dd6ce79c844e2a481
        | null
        | undefined;
    deliveryMethod?: DeliveryMethod | null | undefined;
    dispute?:
        | Eighta9c6cb49482a98cdd603ff09858cdc3e5ef6ad9807c876c4161d925a96694a5
        | null
        | undefined;
    events?: Events | null | undefined;
    status?: CollaboratorForm1099BalancesUpdateRequestStatus | null | undefined;
};

/** @internal */
export const DeliveryMethod$ = z.nativeEnum(DeliveryMethod);

/** @internal */
export namespace Events$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<Events, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Events> = z.object({});
}

/** @internal */
export const CollaboratorForm1099BalancesUpdateRequestStatus$ = z.nativeEnum(
    CollaboratorForm1099BalancesUpdateRequestStatus
);

/** @internal */
export namespace CollaboratorForm1099BalancesUpdateRequest$ {
    export type Inbound = {
        adjustments?: number | null | undefined;
        correction?:
            | Ce853dbef33b2b91880690c84bc5314340c1301fd7b3503dd6ce79c844e2a481$.Inbound
            | null
            | undefined;
        deliveryMethod?: DeliveryMethod | null | undefined;
        dispute?:
            | Eighta9c6cb49482a98cdd603ff09858cdc3e5ef6ad9807c876c4161d925a96694a5$.Inbound
            | null
            | undefined;
        events?: Events$.Inbound | null | undefined;
        status?: CollaboratorForm1099BalancesUpdateRequestStatus | null | undefined;
    };

    export const inboundSchema: z.ZodType<
        CollaboratorForm1099BalancesUpdateRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            adjustments: z.nullable(z.number()).optional(),
            correction: z
                .nullable(
                    Ce853dbef33b2b91880690c84bc5314340c1301fd7b3503dd6ce79c844e2a481$.inboundSchema
                )
                .optional(),
            deliveryMethod: z.nullable(DeliveryMethod$).optional(),
            dispute: z
                .nullable(
                    Eighta9c6cb49482a98cdd603ff09858cdc3e5ef6ad9807c876c4161d925a96694a5$.inboundSchema
                )
                .optional(),
            events: z.nullable(z.lazy(() => Events$.inboundSchema)).optional(),
            status: z.nullable(CollaboratorForm1099BalancesUpdateRequestStatus$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.adjustments === undefined ? null : { adjustments: v.adjustments }),
                ...(v.correction === undefined ? null : { correction: v.correction }),
                ...(v.deliveryMethod === undefined ? null : { deliveryMethod: v.deliveryMethod }),
                ...(v.dispute === undefined ? null : { dispute: v.dispute }),
                ...(v.events === undefined ? null : { events: v.events }),
                ...(v.status === undefined ? null : { status: v.status }),
            };
        });

    export type Outbound = {
        adjustments?: number | null | undefined;
        correction?:
            | Ce853dbef33b2b91880690c84bc5314340c1301fd7b3503dd6ce79c844e2a481$.Outbound
            | null
            | undefined;
        deliveryMethod?: DeliveryMethod | null | undefined;
        dispute?:
            | Eighta9c6cb49482a98cdd603ff09858cdc3e5ef6ad9807c876c4161d925a96694a5$.Outbound
            | null
            | undefined;
        events?: Events$.Outbound | null | undefined;
        status?: CollaboratorForm1099BalancesUpdateRequestStatus | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CollaboratorForm1099BalancesUpdateRequest
    > = z
        .object({
            adjustments: z.nullable(z.number()).optional(),
            correction: z
                .nullable(
                    Ce853dbef33b2b91880690c84bc5314340c1301fd7b3503dd6ce79c844e2a481$.outboundSchema
                )
                .optional(),
            deliveryMethod: z.nullable(DeliveryMethod$).optional(),
            dispute: z
                .nullable(
                    Eighta9c6cb49482a98cdd603ff09858cdc3e5ef6ad9807c876c4161d925a96694a5$.outboundSchema
                )
                .optional(),
            events: z.nullable(z.lazy(() => Events$.outboundSchema)).optional(),
            status: z.nullable(CollaboratorForm1099BalancesUpdateRequestStatus$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.adjustments === undefined ? null : { adjustments: v.adjustments }),
                ...(v.correction === undefined ? null : { correction: v.correction }),
                ...(v.deliveryMethod === undefined ? null : { deliveryMethod: v.deliveryMethod }),
                ...(v.dispute === undefined ? null : { dispute: v.dispute }),
                ...(v.events === undefined ? null : { events: v.events }),
                ...(v.status === undefined ? null : { status: v.status }),
            };
        });
}
