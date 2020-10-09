// Type definitions for non-npm package Google Civic Information API v2 2.0
// Project: https://developers.google.com/civic-information/
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
//                 Google API Typings Generator <https://github.com/google-api-typings-generator>
//                 Nick Amoscato <https://github.com/namoscato>
//                 Declan Vong <https://github.com/declanvong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://civicinfo.googleapis.com/$discovery/rest?version=v2
// Revision: 20201008

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Google Civic Information API v2 */
    function load(name: "civicinfo", version: "v2"): PromiseLike<void>;
    function load(name: "civicinfo", version: "v2", callback: () => any): void;

    namespace civicinfo {
        interface AdministrationRegion {
            /** The election administration body for this area. */
            electionAdministrationBody?: AdministrativeBody;
            /**
             * An ID for this object. IDs may change in future requests and should not be cached. Access to this field requires special access that can be requested from the Request more link on
             * the Quotas page.
             */
            id?: string;
            /** The city or county that provides election information for this voter. This object can have the same elements as state. */
            local_jurisdiction?: AdministrationRegion;
            /** The name of the jurisdiction. */
            name?: string;
            /** A list of sources for this area. If multiple sources are listed the data has been aggregated from those sources. */
            sources?: Source[];
        }
        interface AdministrativeBody {
            /** A URL provided by this administrative body for information on absentee voting. */
            absenteeVotingInfoUrl?: string;
            /** A URL provided by this administrative body to give contest information to the voter. */
            ballotInfoUrl?: string;
            /** The mailing address of this administrative body. */
            correspondenceAddress?: SimpleAddressType;
            /** A URL provided by this administrative body for looking up general election information. */
            electionInfoUrl?: string;
            /** A last minute or emergency notification text provided by this administrative body. */
            electionNoticeText?: string;
            /** A URL provided by this administrative body for additional information related to the last minute or emergency notification. */
            electionNoticeUrl?: string;
            /** The election officials for this election administrative body. */
            electionOfficials?: ElectionOfficial[];
            /** A URL provided by this administrative body for confirming that the voter is registered to vote. */
            electionRegistrationConfirmationUrl?: string;
            /** A URL provided by this administrative body for looking up how to register to vote. */
            electionRegistrationUrl?: string;
            /** A URL provided by this administrative body describing election rules to the voter. */
            electionRulesUrl?: string;
            /** A description of the hours of operation for this administrative body. */
            hoursOfOperation?: string;
            /** The name of this election administrative body. */
            name?: string;
            /** The physical address of this administrative body. */
            physicalAddress?: SimpleAddressType;
            /** A description of the services this administrative body may provide. */
            voter_services?: string[];
            /** A URL provided by this administrative body for looking up where to vote. */
            votingLocationFinderUrl?: string;
        }
        interface Candidate {
            /** The URL for the candidate's campaign web site. */
            candidateUrl?: string;
            /** A list of known (social) media channels for this candidate. */
            channels?: Channel[];
            /** The email address for the candidate's campaign. */
            email?: string;
            /**
             * The candidate's name. If this is a joint ticket it will indicate the name of the candidate at the top of a ticket followed by a / and that name of candidate at the bottom of the
             * ticket. e.g. "Mitt Romney / Paul Ryan"
             */
            name?: string;
            /** The order the candidate appears on the ballot for this contest. */
            orderOnBallot?: string;
            /** The full name of the party the candidate is a member of. */
            party?: string;
            /** The voice phone number for the candidate's campaign office. */
            phone?: string;
            /** A URL for a photo of the candidate. */
            photoUrl?: string;
        }
        interface Channel {
            /** The unique public identifier for the candidate's channel. */
            id?: string;
            /**
             * The type of channel. The following is a list of types of channels, but is not exhaustive. More channel types may be added at a later time. One of: GooglePlus, YouTube, Facebook,
             * Twitter
             */
            type?: string;
        }
        interface Contest {
            /** A number specifying the position of this contest on the voter's ballot. */
            ballotPlacement?: string;
            /** The official title on the ballot for this contest, only where available. */
            ballotTitle?: string;
            /** The candidate choices for this contest. */
            candidates?: Candidate[];
            /** Information about the electoral district that this contest is in. */
            district?: ElectoralDistrict;
            /** A description of any additional eligibility requirements for voting in this contest. */
            electorateSpecifications?: string;
            /**
             * An ID for this object. IDs may change in future requests and should not be cached. Access to this field requires special access that can be requested from the Request more link on
             * the Quotas page.
             */
            id?: string;
            /**
             * The levels of government of the office for this contest. There may be more than one in cases where a jurisdiction effectively acts at two different levels of government; for
             * example, the mayor of the District of Columbia acts at "locality" level, but also effectively at both "administrative-area-2" and "administrative-area-1".
             */
            level?: string[];
            /** The number of candidates that will be elected to office in this contest. */
            numberElected?: string;
            /** The number of candidates that a voter may vote for in this contest. */
            numberVotingFor?: string;
            /** The name of the office for this contest. */
            office?: string;
            /** If this is a partisan election, the name of the party/parties it is for. */
            primaryParties?: string[];
            /**
             * [DEPRECATED] If this is a partisan election, the name of the party it is for. This field as deprecated in favor of the array "primaryParties", as contests may contain more than one
             * party.
             */
            primaryParty?: string;
            /**
             * The set of ballot responses for the referendum. A ballot response represents a line on the ballot. Common examples might include "yes" or "no" for referenda. This field is only
             * populated for contests of type 'Referendum'.
             */
            referendumBallotResponses?: string[];
            /** Specifies a short summary of the referendum that is typically on the ballot below the title but above the text. This field is only populated for contests of type 'Referendum'. */
            referendumBrief?: string;
            /** A statement in opposition to the referendum. It does not necessarily appear on the ballot. This field is only populated for contests of type 'Referendum'. */
            referendumConStatement?: string;
            /**
             * Specifies what effect abstaining (not voting) on the proposition will have (i.e. whether abstaining is considered a vote against it). This field is only populated for contests of
             * type 'Referendum'.
             */
            referendumEffectOfAbstain?: string;
            /** The threshold of votes that the referendum needs in order to pass, e.g. "two-thirds". This field is only populated for contests of type 'Referendum'. */
            referendumPassageThreshold?: string;
            /** A statement in favor of the referendum. It does not necessarily appear on the ballot. This field is only populated for contests of type 'Referendum'. */
            referendumProStatement?: string;
            /** A brief description of the referendum. This field is only populated for contests of type 'Referendum'. */
            referendumSubtitle?: string;
            /** The full text of the referendum. This field is only populated for contests of type 'Referendum'. */
            referendumText?: string;
            /** The title of the referendum (e.g. 'Proposition 42'). This field is only populated for contests of type 'Referendum'. */
            referendumTitle?: string;
            /** A link to the referendum. This field is only populated for contests of type 'Referendum'. */
            referendumUrl?: string;
            /** The roles which this office fulfills. */
            roles?: string[];
            /** A list of sources for this contest. If multiple sources are listed, the data has been aggregated from those sources. */
            sources?: Source[];
            /** "Yes" or "No" depending on whether this a contest being held outside the normal election cycle. */
            special?: string;
            /**
             * The type of contest. Usually this will be 'General', 'Primary', or 'Run-off' for contests with candidates. For referenda this will be 'Referendum'. For Retention contests this will
             * typically be 'Retention'.
             */
            type?: string;
        }
        interface DivisionSearchResponse {
            /** Identifies what kind of resource this is. Value: the fixed string "civicinfo#divisionSearchResponse". */
            kind?: string;
            results?: DivisionSearchResult[];
        }
        interface DivisionSearchResult {
            /**
             * Other Open Civic Data identifiers that refer to the same division -- for example, those that refer to other political divisions whose boundaries are defined to be coterminous with
             * this one. For example, ocd-division/country:us/state:wy will include an alias of ocd-division/country:us/state:wy/cd:1, since Wyoming has only one Congressional district.
             */
            aliases?: string[];
            /** The name of the division. */
            name?: string;
            /** The unique Open Civic Data identifier for this division */
            ocdId?: string;
        }
        interface Election {
            /** Day of the election in YYYY-MM-DD format. */
            electionDay?: string;
            /** The unique ID of this election. */
            id?: string;
            /** A displayable name for the election. */
            name?: string;
            /**
             * The political division of the election. Represented as an OCD Division ID. Voters within these political jurisdictions are covered by this election. This is typically a state such
             * as ocd-division/country:us/state:ca or for the midterms or general election the entire US (i.e. ocd-division/country:us).
             */
            ocdDivisionId?: string;
        }
        interface ElectionOfficial {
            /** The email address of the election official. */
            emailAddress?: string;
            /** The fax number of the election official. */
            faxNumber?: string;
            /** The full name of the election official. */
            name?: string;
            /** The office phone number of the election official. */
            officePhoneNumber?: string;
            /** The title of the election official. */
            title?: string;
        }
        interface ElectionsQueryResponse {
            /** A list of available elections */
            elections?: Election[];
            /** Identifies what kind of resource this is. Value: the fixed string "civicinfo#electionsQueryResponse". */
            kind?: string;
        }
        interface ElectoralDistrict {
            /** An identifier for this district, relative to its scope. For example, the 34th State Senate district would have id "34" and a scope of stateUpper. */
            id?: string;
            /** The name of the district. */
            name?: string;
            /**
             * The geographic scope of this district. If unspecified the district's geography is not known. One of: national, statewide, congressional, stateUpper, stateLower, countywide,
             * judicial, schoolBoard, cityWide, township, countyCouncil, cityCouncil, ward, special
             */
            scope?: string;
        }
        interface GeographicDivision {
            /**
             * Any other valid OCD IDs that refer to the same division.\n\nBecause OCD IDs are meant to be human-readable and at least somewhat predictable, there are occasionally several
             * identifiers for a single division. These identifiers are defined to be equivalent to one another, and one is always indicated as the primary identifier. The primary identifier will
             * be returned in ocd_id above, and any other equivalent valid identifiers will be returned in this list.\n\nFor example, if this division's OCD ID is
             * ocd-division/country:us/district:dc, this will contain ocd-division/country:us/state:dc.
             */
            alsoKnownAs?: string[];
            /** The name of the division. */
            name?: string;
            /** List of indices in the offices array, one for each office elected from this division. Will only be present if includeOffices was true (or absent) in the request. */
            officeIndices?: number[];
        }
        interface Office {
            /** The OCD ID of the division with which this office is associated. */
            divisionId?: string;
            /**
             * The levels of government of which this office is part. There may be more than one in cases where a jurisdiction effectively acts at two different levels of government; for example,
             * the mayor of the District of Columbia acts at "locality" level, but also effectively at both "administrative-area-2" and "administrative-area-1".
             */
            levels?: string[];
            /** The human-readable name of the office. */
            name?: string;
            /** List of indices in the officials array of people who presently hold this office. */
            officialIndices?: number[];
            /**
             * The roles which this office fulfills. Roles are not meant to be exhaustive, or to exactly specify the entire set of responsibilities of a given office, but are meant to be rough
             * categories that are useful for general selection from or sorting of a list of offices.
             */
            roles?: string[];
            /** A list of sources for this office. If multiple sources are listed, the data has been aggregated from those sources. */
            sources?: Source[];
        }
        interface Official {
            /** Addresses at which to contact the official. */
            address?: SimpleAddressType[];
            /** A list of known (social) media channels for this official. */
            channels?: Channel[];
            /** The direct email addresses for the official. */
            emails?: string[];
            /** The official's name. */
            name?: string;
            /** The full name of the party the official belongs to. */
            party?: string;
            /** The official's public contact phone numbers. */
            phones?: string[];
            /** A URL for a photo of the official. */
            photoUrl?: string;
            /** The official's public website URLs. */
            urls?: string[];
        }
        interface PollingLocation {
            /** The address of the location. */
            address?: SimpleAddressType;
            /** The last date that this early vote site or drop off location may be used. This field is not populated for polling locations. */
            endDate?: string;
            /**
             * An ID for this object. IDs may change in future requests and should not be cached. Access to this field requires special access that can be requested from the Request more link on
             * the Quotas page.
             */
            id?: string;
            /** Latitude of the location, in degrees north of the equator. Note this field may not be available for some locations. */
            latitude?: number;
            /** Longitude of the location, in degrees east of the Prime Meridian. Note this field may not be available for some locations. */
            longitude?: number;
            /** The name of the early vote site or drop off location. This field is not populated for polling locations. */
            name?: string;
            /** Notes about this location (e.g. accessibility ramp or entrance to use). */
            notes?: string;
            /** A description of when this location is open. */
            pollingHours?: string;
            /** A list of sources for this location. If multiple sources are listed the data has been aggregated from those sources. */
            sources?: Source[];
            /** The first date that this early vote site or drop off location may be used. This field is not populated for polling locations. */
            startDate?: string;
            /** The services provided by this early vote site or drop off location. This field is not populated for polling locations. */
            voterServices?: string;
        }
        interface RepresentativeInfoData {
            /** A map of political geographic divisions that contain the requested address, keyed by the unique Open Civic Data identifier for this division. */
            divisions?: { [P in string]: GeographicDivision };
            /** Elected offices referenced by the divisions listed above. Will only be present if includeOffices was true in the request. */
            offices?: Office[];
            /** Officials holding the offices listed above. Will only be present if includeOffices was true in the request. */
            officials?: Official[];
        }
        interface RepresentativeInfoResponse {
            /** A map of political geographic divisions that contain the requested address, keyed by the unique Open Civic Data identifier for this division. */
            divisions?: { [P in string]: GeographicDivision };
            /** Identifies what kind of resource this is. Value: the fixed string "civicinfo#representativeInfoResponse". */
            kind?: string;
            /** The normalized version of the requested address */
            normalizedInput?: SimpleAddressType;
            /** Elected offices referenced by the divisions listed above. Will only be present if includeOffices was true in the request. */
            offices?: Office[];
            /** Officials holding the offices listed above. Will only be present if includeOffices was true in the request. */
            officials?: Official[];
        }
        interface SimpleAddressType {
            /** The city or town for the address. */
            city?: string;
            /** The street name and number of this address. */
            line1?: string;
            /** The second line the address, if needed. */
            line2?: string;
            /** The third line of the address, if needed. */
            line3?: string;
            /** The name of the location. */
            locationName?: string;
            /** The US two letter state abbreviation of the address. */
            state?: string;
            /** The US Postal Zip Code of the address. */
            zip?: string;
        }
        interface Source {
            /** The name of the data source. */
            name?: string;
            /** Whether this data comes from an official government source. */
            official?: boolean;
        }
        interface VoterInfoResponse {
            /** Contests that will appear on the voter's ballot. */
            contests?: Contest[];
            /**
             * Locations where a voter is eligible to drop off a completed ballot. The voter must have received and completed a ballot prior to arriving at the location. The location may not have
             * ballots available on the premises. These locations could be open on or before election day as indicated in the pollingHours field.
             */
            dropOffLocations?: PollingLocation[];
            /** Locations where the voter is eligible to vote early, prior to election day. */
            earlyVoteSites?: PollingLocation[];
            /** The election that was queried. */
            election?: Election;
            /** Identifies what kind of resource this is. Value: the fixed string "civicinfo#voterInfoResponse". */
            kind?: string;
            /** Specifies whether voters in the precinct vote only by mailing their ballots (with the possible option of dropping off their ballots as well). */
            mailOnly?: boolean;
            /** The normalized version of the requested address */
            normalizedInput?: SimpleAddressType;
            /**
             * When there are multiple elections for a voter address, the otherElections field is populated in the API response and there are two possibilities: 1. If the earliest election is not
             * the intended election, specify the election ID of the desired election in a second API request using the electionId field. 2. If these elections occur on the same day, the API
             * doesn?t return any polling location, contest, or election official information to ensure that an additional query is made. For user-facing applications, we recommend displaying
             * these elections to the user to disambiguate. A second API request using the electionId field should be made for the election that is relevant to the user.
             */
            otherElections?: Election[];
            /** Locations where the voter is eligible to vote on election day. */
            pollingLocations?: PollingLocation[];
            precinctId?: string;
            /** Local Election Information for the state that the voter votes in. For the US, there will only be one element in this array. */
            state?: AdministrationRegion[];
        }
        interface DivisionsResource {
            /** Searches for political divisions by their natural name or OCD ID. */
            search(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /**
                 * The search query. Queries can cover any parts of a OCD ID or a human readable division name. All words given in the query are treated as required patterns. In addition to that,
                 * most query operators of the Apache Lucene library are supported. See http://lucene.apache.org/core/2_9_4/queryparsersyntax.html
                 */
                query?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<DivisionSearchResponse>;
        }
        interface ElectionsResource {
            /** List of available elections to query. */
            electionQuery(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<ElectionsQueryResponse>;
            /** Looks up information relevant to a voter based on the voter's registered address. */
            voterInfoQuery(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** The registered address of the voter to look up. */
                address: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /**
                 * The unique ID of the election to look up. A list of election IDs can be obtained at https://www.googleapis.com/civicinfo/{version}/elections. If no election ID is specified in
                 * the query and there is more than one election with data for the given voter, the additional elections are provided in the otherElections response field.
                 */
                electionId?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** If set to true, only data from official state sources will be returned. */
                officialOnly?: boolean;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /**
                 * If set to true, the query will return the success code and include any partial information when it is unable to determine a matching address or unable to determine the election
                 * for electionId=0 queries.
                 */
                returnAllAvailableData?: boolean;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<VoterInfoResponse>;
        }
        interface RepresentativesResource {
            /** Looks up political geography and representative information for a single address. */
            representativeInfoByAddress(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** The address to look up. May only be specified if the field ocdId is not given in the URL */
                address?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** Whether to return information about offices and officials. If false, only the top-level district information will be returned. */
                includeOffices?: boolean;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** A list of office levels to filter by. Only offices that serve at least one of these levels will be returned. Divisions that don't contain a matching office will not be returned. */
                levels?: string | string[];
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** A list of office roles to filter by. Only offices fulfilling one of these roles will be returned. Divisions that don't contain a matching office will not be returned. */
                roles?: string | string[];
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<RepresentativeInfoResponse>;
            /** Looks up representative information for a single geographic division. */
            representativeInfoByDivision(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** A list of office levels to filter by. Only offices that serve at least one of these levels will be returned. Divisions that don't contain a matching office will not be returned. */
                levels?: string | string[];
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** The Open Civic Data division identifier of the division to look up. */
                ocdId: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /**
                 * If true, information about all divisions contained in the division requested will be included as well. For example, if querying ocd-division/country:us/district:dc, this would
                 * also return all DC's wards and ANCs.
                 */
                recursive?: boolean;
                /** A list of office roles to filter by. Only offices fulfilling one of these roles will be returned. Divisions that don't contain a matching office will not be returned. */
                roles?: string | string[];
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<RepresentativeInfoData>;
        }

        const divisions: DivisionsResource;

        const elections: ElectionsResource;

        const representatives: RepresentativesResource;
    }
}
