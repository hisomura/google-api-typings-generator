/* Type definitions for non-npm package Manufacturer Center API v1 1.0 */
// Project: https://developers.google.com/manufacturers/
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
//                 Google API Typings Generator <https://github.com/google-api-typings-generator>
//                 Nick Amoscato <https://github.com/namoscato>
//                 Declan Vong <https://github.com/declanvong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://manufacturers.googleapis.com/$discovery/rest?version=v1
// Revision: 20201027

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Manufacturer Center API v1 */
    function load(name: "manufacturers", version: "v1"): PromiseLike<void>;
    function load(name: "manufacturers", version: "v1", callback: () => any): void;

    namespace manufacturers {
        interface Attributes {
            /** The additional images of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#addlimage. */
            additionalImageLink?: Image[];
            /** The target age group of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#agegroup. */
            ageGroup?: string;
            /** The brand name of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#brand. */
            brand?: string;
            /** The capacity of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#capacity. */
            capacity?: Capacity;
            /** The color of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#color. */
            color?: string;
            /** The count of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#count. */
            count?: Count;
            /** The description of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#description. */
            description?: string;
            /** The disclosure date of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#disclosure. */
            disclosureDate?: string;
            /** A list of excluded destinations. */
            excludedDestination?: string[];
            /** The rich format description of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#featuredesc. */
            featureDescription?: FeatureDescription[];
            /** The flavor of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#flavor. */
            flavor?: string;
            /** The format of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#format. */
            format?: string;
            /** The target gender of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#gender. */
            gender?: string;
            /** The Global Trade Item Number (GTIN) of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#gtin. */
            gtin?: string[];
            /** The image of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#image. */
            imageLink?: Image;
            /** A list of included destinations. */
            includedDestination?: string[];
            /** The item group id of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#itemgroupid. */
            itemGroupId?: string;
            /** The material of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#material. */
            material?: string;
            /** The Manufacturer Part Number (MPN) of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#mpn. */
            mpn?: string;
            /** The pattern of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#pattern. */
            pattern?: string;
            /** The details of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productdetail. */
            productDetail?: ProductDetail[];
            /** The name of the group of products related to the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productline. */
            productLine?: string;
            /** The canonical name of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productname. */
            productName?: string;
            /** The URL of the detail page of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productpage. */
            productPageUrl?: string;
            /** The type or category of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#producttype. */
            productType?: string[];
            /** The release date of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#release. */
            releaseDate?: string;
            /** Rich product content. For more information, see https://support.google.com/manufacturers/answer/9389865 */
            richProductContent?: string[];
            /** The scent of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#scent. */
            scent?: string;
            /** The size of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#size. */
            size?: string;
            /** The size system of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#sizesystem. */
            sizeSystem?: string;
            /** The size type of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#sizetype. */
            sizeType?: string;
            /** The suggested retail price (MSRP) of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#price. */
            suggestedRetailPrice?: Price;
            /** The target client id. Should only be used in the accounts of the data partners. */
            targetClientId?: string;
            /** The theme of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#theme. */
            theme?: string;
            /** The title of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#title. */
            title?: string;
            /** The videos of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#video. */
            videoLink?: string[];
        }
        interface Capacity {
            /** The unit of the capacity, i.e., MB, GB, or TB. */
            unit?: string;
            /** The numeric value of the capacity. */
            value?: string;
        }
        interface Count {
            /** The unit in which these products are counted. */
            unit?: string;
            /** The numeric value of the number of products in a package. */
            value?: string;
        }
        interface DestinationStatus {
            /** The name of the destination. */
            destination?: string;
            /** The status of the destination. */
            status?: string;
        }
        // tslint:disable-next-line:no-empty-interface
        interface Empty {
        }
        interface FeatureDescription {
            /** A short description of the feature. */
            headline?: string;
            /** An optional image describing the feature. */
            image?: Image;
            /** A detailed description of the feature. */
            text?: string;
        }
        interface Image {
            /** The URL of the image. For crawled images, this is the provided URL. For uploaded images, this is a serving URL from Google if the image has been processed successfully. */
            imageUrl?: string;
            /** The status of the image. @OutputOnly */
            status?: string;
            /** The type of the image, i.e., crawled or uploaded. @OutputOnly */
            type?: string;
        }
        interface Issue {
            /** If present, the attribute that triggered the issue. For more information about attributes, see https://support.google.com/manufacturers/answer/6124116. */
            attribute?: string;
            /** Longer description of the issue focused on how to resolve it. */
            description?: string;
            /** The destination this issue applies to. */
            destination?: string;
            /** What needs to happen to resolve the issue. */
            resolution?: string;
            /** The severity of the issue. */
            severity?: string;
            /** The timestamp when this issue appeared. */
            timestamp?: string;
            /** Short title describing the nature of the issue. */
            title?: string;
            /** The server-generated type of the issue, for example, “INCORRECT_TEXT_FORMATTING”, “IMAGE_NOT_SERVEABLE”, etc. */
            type?: string;
        }
        interface ListProductsResponse {
            /** The token for the retrieval of the next page of product statuses. */
            nextPageToken?: string;
            /** List of the products. */
            products?: Product[];
        }
        interface Price {
            /** The numeric value of the price. */
            amount?: string;
            /** The currency in which the price is denoted. */
            currency?: string;
        }
        interface Product {
            /** Attributes of the product uploaded to the Manufacturer Center. Manually edited attributes are taken into account. */
            attributes?: Attributes;
            /** The content language of the product as a two-letter ISO 639-1 language code (for example, en). */
            contentLanguage?: string;
            /** The status of the destinations. */
            destinationStatuses?: DestinationStatus[];
            /** A server-generated list of issues associated with the product. */
            issues?: Issue[];
            /**
             * Name in the format `{target_country}:{content_language}:{product_id}`. `target_country` - The target country of the product as a CLDR territory code (for example, US).
             * `content_language` - The content language of the product as a two-letter ISO 639-1 language code (for example, en). `product_id` - The ID of the product. For more information, see
             * https://support.google.com/manufacturers/answer/6124116#id.
             */
            name?: string;
            /** Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account. */
            parent?: string;
            /** The ID of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#id. */
            productId?: string;
            /** The target country of the product as a CLDR territory code (for example, US). */
            targetCountry?: string;
        }
        interface ProductDetail {
            /** The name of the attribute. */
            attributeName?: string;
            /** The value of the attribute. */
            attributeValue?: string;
            /** A short section name that can be reused between multiple product details. */
            sectionName?: string;
        }
        interface ProductsResource {
            /** Deletes the product from a Manufacturer Center account. */
            delete(request?: {
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
                /**
                 * Name in the format `{target_country}:{content_language}:{product_id}`. `target_country` - The target country of the product as a CLDR territory code (for example, US).
                 * `content_language` - The content language of the product as a two-letter ISO 639-1 language code (for example, en). `product_id` - The ID of the product. For more information,
                 * see https://support.google.com/manufacturers/answer/6124116#id.
                 */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account. */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<{}>;
            /**
             * Gets the product from a Manufacturer Center account, including product issues. A recently updated product takes around 15 minutes to process. Changes are only visible after it has
             * been processed. While some issues may be available once the product has been processed, other issues may take days to appear.
             */
            get(request?: {
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
                /** The information to be included in the response. Only sections listed here will be returned. */
                include?: string | string[];
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /**
                 * Name in the format `{target_country}:{content_language}:{product_id}`. `target_country` - The target country of the product as a CLDR territory code (for example, US).
                 * `content_language` - The content language of the product as a two-letter ISO 639-1 language code (for example, en). `product_id` - The ID of the product. For more information,
                 * see https://support.google.com/manufacturers/answer/6124116#id.
                 */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account. */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<Product>;
            /** Lists all the products in a Manufacturer Center account. */
            list(request?: {
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
                /** The information to be included in the response. Only sections listed here will be returned. */
                include?: string | string[];
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Maximum number of product statuses to return in the response, used for paging. */
                pageSize?: number;
                /** The token returned by the previous request. */
                pageToken?: string;
                /** Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account. */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<ListProductsResponse>;
            /**
             * Inserts or updates the attributes of the product in a Manufacturer Center account. Creates a product with the provided attributes. If the product already exists, then all attributes
             * are replaced with the new ones. The checks at upload time are minimal. All required attributes need to be present for a product to be valid. Issues may show up later after the API
             * has accepted a new upload for a product and it is possible to overwrite an existing valid product with an invalid product. To detect this, you should retrieve the product and check
             * it for issues once the new version is available. Uploaded attributes first need to be processed before they can be retrieved. Until then, new products will be unavailable, and
             * retrieval of previously uploaded products will return the original state of the product.
             */
            update(request: {
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
                /**
                 * Name in the format `{target_country}:{content_language}:{product_id}`. `target_country` - The target country of the product as a CLDR territory code (for example, US).
                 * `content_language` - The content language of the product as a two-letter ISO 639-1 language code (for example, en). `product_id` - The ID of the product. For more information,
                 * see https://support.google.com/manufacturers/answer/6124116#id.
                 */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account. */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: Attributes;
            }): Request<{}>;
            update(request: {
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
                /**
                 * Name in the format `{target_country}:{content_language}:{product_id}`. `target_country` - The target country of the product as a CLDR territory code (for example, US).
                 * `content_language` - The content language of the product as a two-letter ISO 639-1 language code (for example, en). `product_id` - The ID of the product. For more information,
                 * see https://support.google.com/manufacturers/answer/6124116#id.
                 */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account. */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: Attributes): Request<{}>;
        }
        interface AccountsResource {
            products: ProductsResource;
        }

        const accounts: AccountsResource;
    }
}
