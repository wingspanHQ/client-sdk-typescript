/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Address } from "./address";
import { Company } from "./company";
import { MemberProfileVisibilityMap } from "./memberprofilevisibilitymap";
import { MemberTaxInfo } from "./membertaxinfo";
import { MemberWithholdings } from "./memberwithholdings";
import { Expose, Type } from "class-transformer";

export enum MemberProfileBookkeepingProductsUsed {
    AccountingSoftware = "AccountingSoftware",
    Cpa = "CPA",
    PenAndPaper = "PenAndPaper",
    Spreadsheet = "Spreadsheet",
    Other = "Other",
    LessThanNilGreaterThan = "<nil>",
}

export enum MemberProfileFreelanceDuration {
    LessThanOne = "LessThanOne",
    OneToThree = "OneToThree",
    ThreeToFive = "ThreeToFive",
    OverFive = "OverFive",
    LessThanNilGreaterThan = "<nil>",
}

export enum MemberProfileFreelanceType {
    Team = "Team",
    FullTime = "FullTime",
    PartTime = "PartTime",
    NotFreelancing = "NotFreelancing",
    LessThanNilGreaterThan = "<nil>",
}

export enum MemberProfileIndustry {
    AdultEntertainmentDatingOrEscortServices = "AdultEntertainmentDatingOrEscortServices",
    AgricultureForestryFishingOrHunting = "AgricultureForestryFishingOrHunting",
    ArtsEntertainmentAndRecreation = "ArtsEntertainmentAndRecreation",
    BusinessSupportOrBuildingServices = "BusinessSupportOrBuildingServices",
    Cannabis = "Cannabis",
    Construction = "Construction",
    DirectMarketingOrTelemarketing = "DirectMarketingOrTelemarketing",
    EducationalServices = "EducationalServices",
    FinancialServices = "FinancialServices",
    GamingOrGambling = "GamingOrGambling",
    HealthCareAndSocialAssistance = "HealthCareAndSocialAssistance",
    HospitalityAccommodationOrFoodServices = "HospitalityAccommodationOrFoodServices",
    LegalAccountingConsultingOrComputerProgramming = "LegalAccountingConsultingOrComputerProgramming",
    Manufacturing = "Manufacturing",
    Mining = "Mining",
    Nutraceuticals = "Nutraceuticals",
    PersonalCareServices = "PersonalCareServices",
    PublicAdministration = "PublicAdministration",
    RealEstate = "RealEstate",
    ReligiousCivicAndSocialOrganizations = "ReligiousCivicAndSocialOrganizations",
    RepairAndMaintenance = "RepairAndMaintenance",
    RetailTrade = "RetailTrade",
    TechnologyMediaOrTelecom = "TechnologyMediaOrTelecom",
    TransportationOrWarehousing = "TransportationOrWarehousing",
    Utilities = "Utilities",
    WholesaleTrade = "WholesaleTrade",
    LessThanNilGreaterThan = "<nil>",
}

export enum MemberProfileInterests {
    Incorporating = "Incorporating",
    Marketing = "Marketing",
    FindingWork = "FindingWork",
    Documents = "Documents",
    Invoicing = "Invoicing",
    Bookkeeping = "Bookkeeping",
    TaxSaving = "TaxSaving",
    Benefits = "Benefits",
    Community = "Community",
    LessThanNilGreaterThan = "<nil>",
}

export enum MemberProfileProductAspectImportance {
    Invoicing = "Invoicing",
    PaymentSpeed = "PaymentSpeed",
    ClientManagement = "ClientManagement",
    TrackIncomeStreams = "TrackIncomeStreams",
    ExpenseTracking = "ExpenseTracking",
    TaxDeductions = "TaxDeductions",
    TaxFiling = "TaxFiling",
    HealthInsurance = "HealthInsurance",
    SavingMoneyOnMedicine = "SavingMoneyOnMedicine",
    LegalAndFinancialSupport = "LegalAndFinancialSupport",
    MindAndBodySupport = "MindAndBodySupport",
    LessThanNilGreaterThan = "<nil>",
}

export enum MemberProfileProductImportance {
    Payments = "Payments",
    Bookkeeping = "Bookkeeping",
    Benefits = "Benefits",
    LessThanNilGreaterThan = "<nil>",
}

export class MemberProfile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "address" })
    @Type(() => Address)
    address?: Address;

    @SpeakeasyMetadata()
    @Expose({ name: "bookkeepingProductsUsed" })
    bookkeepingProductsUsed?: MemberProfileBookkeepingProductsUsed[];

    @SpeakeasyMetadata()
    @Expose({ name: "bookkeepingProductsUsedOther" })
    bookkeepingProductsUsedOther?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "company" })
    @Type(() => Company)
    company?: Company;

    @SpeakeasyMetadata()
    @Expose({ name: "freelanceDuration" })
    freelanceDuration?: MemberProfileFreelanceDuration;

    @SpeakeasyMetadata()
    @Expose({ name: "freelanceType" })
    freelanceType?: MemberProfileFreelanceType;

    @SpeakeasyMetadata()
    @Expose({ name: "homeAddress" })
    @Type(() => Address)
    homeAddress?: Address;

    @SpeakeasyMetadata()
    @Expose({ name: "industry" })
    industry?: MemberProfileIndustry;

    @SpeakeasyMetadata()
    @Expose({ name: "interests" })
    interests?: MemberProfileInterests[];

    @SpeakeasyMetadata()
    @Expose({ name: "logoFileId" })
    logoFileId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "mcc" })
    mcc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "nationality" })
    nationality?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "passportNumberProvided" })
    passportNumberProvided?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "phone" })
    phone?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "productAspectImportance" })
    productAspectImportance?: MemberProfileProductAspectImportance[];

    @SpeakeasyMetadata()
    @Expose({ name: "productImportance" })
    productImportance?: MemberProfileProductImportance[];

    @SpeakeasyMetadata()
    @Expose({ name: "ssnLastFourProvided" })
    ssnLastFourProvided?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "ssnProvided" })
    ssnProvided?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "taxInfo" })
    @Type(() => MemberTaxInfo)
    taxInfo?: MemberTaxInfo;

    @SpeakeasyMetadata()
    @Expose({ name: "verificationDocumentBack" })
    verificationDocumentBack?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "verificationDocumentFront" })
    verificationDocumentFront?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "visibilityMap" })
    @Type(() => MemberProfileVisibilityMap)
    visibilityMap?: MemberProfileVisibilityMap;

    @SpeakeasyMetadata()
    @Expose({ name: "withholdings" })
    @Type(() => MemberWithholdings)
    withholdings?: MemberWithholdings;
}
