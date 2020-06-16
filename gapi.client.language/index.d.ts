// Type definitions for non-npm package Cloud Natural Language API v1 1.0
// Project: https://cloud.google.com/natural-language/
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://language.googleapis.com/$discovery/rest?version=v1
// Revision: 20200613

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Cloud Natural Language API v1 */
    function load(name: "language", version: "v1"): PromiseLike<void>;
    function load(name: "language", version: "v1", callback: () => any): void;

    namespace language {
        interface AnalyzeEntitiesRequest {
            /** Required. Input document. */
            document?: Document;
            /** The encoding type used by the API to calculate offsets. */
            encodingType?: string;
        }
        interface AnalyzeEntitiesResponse {
            /** The recognized entities in the input document. */
            entities?: Entity[];
            /**
             * The language of the text, which will be the same as the language specified
             * in the request or, if not specified, the automatically-detected language.
             * See Document.language field for more details.
             */
            language?: string;
        }
        interface AnalyzeEntitySentimentRequest {
            /** Required. Input document. */
            document?: Document;
            /** The encoding type used by the API to calculate offsets. */
            encodingType?: string;
        }
        interface AnalyzeEntitySentimentResponse {
            /** The recognized entities in the input document with associated sentiments. */
            entities?: Entity[];
            /**
             * The language of the text, which will be the same as the language specified
             * in the request or, if not specified, the automatically-detected language.
             * See Document.language field for more details.
             */
            language?: string;
        }
        interface AnalyzeSentimentRequest {
            /** Required. Input document. */
            document?: Document;
            /** The encoding type used by the API to calculate sentence offsets. */
            encodingType?: string;
        }
        interface AnalyzeSentimentResponse {
            /** The overall sentiment of the input document. */
            documentSentiment?: Sentiment;
            /**
             * The language of the text, which will be the same as the language specified
             * in the request or, if not specified, the automatically-detected language.
             * See Document.language field for more details.
             */
            language?: string;
            /** The sentiment for all the sentences in the document. */
            sentences?: Sentence[];
        }
        interface AnalyzeSyntaxRequest {
            /** Required. Input document. */
            document?: Document;
            /** The encoding type used by the API to calculate offsets. */
            encodingType?: string;
        }
        interface AnalyzeSyntaxResponse {
            /**
             * The language of the text, which will be the same as the language specified
             * in the request or, if not specified, the automatically-detected language.
             * See Document.language field for more details.
             */
            language?: string;
            /** Sentences in the input document. */
            sentences?: Sentence[];
            /** Tokens, along with their syntactic information, in the input document. */
            tokens?: Token[];
        }
        interface AnnotateTextRequest {
            /** Required. Input document. */
            document?: Document;
            /** The encoding type used by the API to calculate offsets. */
            encodingType?: string;
            /** Required. The enabled features. */
            features?: Features;
        }
        interface AnnotateTextResponse {
            /** Categories identified in the input document. */
            categories?: ClassificationCategory[];
            /**
             * The overall sentiment for the document. Populated if the user enables
             * AnnotateTextRequest.Features.extract_document_sentiment.
             */
            documentSentiment?: Sentiment;
            /**
             * Entities, along with their semantic information, in the input document.
             * Populated if the user enables
             * AnnotateTextRequest.Features.extract_entities.
             */
            entities?: Entity[];
            /**
             * The language of the text, which will be the same as the language specified
             * in the request or, if not specified, the automatically-detected language.
             * See Document.language field for more details.
             */
            language?: string;
            /**
             * Sentences in the input document. Populated if the user enables
             * AnnotateTextRequest.Features.extract_syntax.
             */
            sentences?: Sentence[];
            /**
             * Tokens, along with their syntactic information, in the input document.
             * Populated if the user enables
             * AnnotateTextRequest.Features.extract_syntax.
             */
            tokens?: Token[];
        }
        interface ClassificationCategory {
            /**
             * The classifier's confidence of the category. Number represents how certain
             * the classifier is that this category represents the given text.
             */
            confidence?: number;
            /**
             * The name of the category representing the document, from the [predefined
             * taxonomy](https://cloud.google.com/natural-language/docs/categories).
             */
            name?: string;
        }
        interface ClassifyTextRequest {
            /** Required. Input document. */
            document?: Document;
        }
        interface ClassifyTextResponse {
            /** Categories representing the input document. */
            categories?: ClassificationCategory[];
        }
        interface DependencyEdge {
            /**
             * Represents the head of this token in the dependency tree.
             * This is the index of the token which has an arc going to this token.
             * The index is the position of the token in the array of tokens returned
             * by the API method. If this token is a root token, then the
             * `head_token_index` is its own index.
             */
            headTokenIndex?: number;
            /** The parse label for the token. */
            label?: string;
        }
        interface Document {
            /**
             * The content of the input in string format.
             * Cloud audit logging exempt since it is based on user data.
             */
            content?: string;
            /**
             * The Google Cloud Storage URI where the file content is located.
             * This URI must be of the form: gs://bucket_name/object_name. For more
             * details, see https://cloud.google.com/storage/docs/reference-uris.
             * NOTE: Cloud Storage object versioning is not supported.
             */
            gcsContentUri?: string;
            /**
             * The language of the document (if not specified, the language is
             * automatically detected). Both ISO and BCP-47 language codes are
             * accepted.<br>
             * [Language
             * Support](https://cloud.google.com/natural-language/docs/languages) lists
             * currently supported languages for each API method. If the language (either
             * specified by the caller or automatically detected) is not supported by the
             * called API method, an `INVALID_ARGUMENT` error is returned.
             */
            language?: string;
            /**
             * Required. If the type is not set or is `TYPE_UNSPECIFIED`,
             * returns an `INVALID_ARGUMENT` error.
             */
            type?: string;
        }
        interface Entity {
            /**
             * The mentions of this entity in the input document. The API currently
             * supports proper noun mentions.
             */
            mentions?: EntityMention[];
            /**
             * Metadata associated with the entity.
             *
             * For most entity types, the metadata is a Wikipedia URL (`wikipedia_url`)
             * and Knowledge Graph MID (`mid`), if they are available. For the metadata
             * associated with other entity types, see the Type table below.
             */
            metadata?: { [P in string]: string };
            /** The representative name for the entity. */
            name?: string;
            /**
             * The salience score associated with the entity in the [0, 1.0] range.
             *
             * The salience score for an entity provides information about the
             * importance or centrality of that entity to the entire document text.
             * Scores closer to 0 are less salient, while scores closer to 1.0 are highly
             * salient.
             */
            salience?: number;
            /**
             * For calls to AnalyzeEntitySentiment or if
             * AnnotateTextRequest.Features.extract_entity_sentiment is set to
             * true, this field will contain the aggregate sentiment expressed for this
             * entity in the provided document.
             */
            sentiment?: Sentiment;
            /** The entity type. */
            type?: string;
        }
        interface EntityMention {
            /**
             * For calls to AnalyzeEntitySentiment or if
             * AnnotateTextRequest.Features.extract_entity_sentiment is set to
             * true, this field will contain the sentiment expressed for this mention of
             * the entity in the provided document.
             */
            sentiment?: Sentiment;
            /** The mention text. */
            text?: TextSpan;
            /** The type of the entity mention. */
            type?: string;
        }
        interface Features {
            /** Classify the full document into categories. */
            classifyText?: boolean;
            /** Extract document-level sentiment. */
            extractDocumentSentiment?: boolean;
            /** Extract entities. */
            extractEntities?: boolean;
            /** Extract entities and their associated sentiment. */
            extractEntitySentiment?: boolean;
            /** Extract syntax information. */
            extractSyntax?: boolean;
        }
        interface PartOfSpeech {
            /** The grammatical aspect. */
            aspect?: string;
            /** The grammatical case. */
            case?: string;
            /** The grammatical form. */
            form?: string;
            /** The grammatical gender. */
            gender?: string;
            /** The grammatical mood. */
            mood?: string;
            /** The grammatical number. */
            number?: string;
            /** The grammatical person. */
            person?: string;
            /** The grammatical properness. */
            proper?: string;
            /** The grammatical reciprocity. */
            reciprocity?: string;
            /** The part of speech tag. */
            tag?: string;
            /** The grammatical tense. */
            tense?: string;
            /** The grammatical voice. */
            voice?: string;
        }
        interface Sentence {
            /**
             * For calls to AnalyzeSentiment or if
             * AnnotateTextRequest.Features.extract_document_sentiment is set to
             * true, this field will contain the sentiment for the sentence.
             */
            sentiment?: Sentiment;
            /** The sentence text. */
            text?: TextSpan;
        }
        interface Sentiment {
            /**
             * A non-negative number in the [0, +inf) range, which represents
             * the absolute magnitude of sentiment regardless of score (positive or
             * negative).
             */
            magnitude?: number;
            /**
             * Sentiment score between -1.0 (negative sentiment) and 1.0
             * (positive sentiment).
             */
            score?: number;
        }
        interface Status {
            /** The status code, which should be an enum value of google.rpc.Code. */
            code?: number;
            /**
             * A list of messages that carry the error details.  There is a common set of
             * message types for APIs to use.
             */
            details?: Array<{ [P in string]: any }>;
            /**
             * A developer-facing error message, which should be in English. Any
             * user-facing error message should be localized and sent in the
             * google.rpc.Status.details field, or localized by the client.
             */
            message?: string;
        }
        interface TextSpan {
            /**
             * The API calculates the beginning offset of the content in the original
             * document according to the EncodingType specified in the API request.
             */
            beginOffset?: number;
            /** The content of the output text. */
            content?: string;
        }
        interface Token {
            /** Dependency tree parse for this token. */
            dependencyEdge?: DependencyEdge;
            /** [Lemma](https://en.wikipedia.org/wiki/Lemma_%28morphology%29) of the token. */
            lemma?: string;
            /** Parts of speech tag for this token. */
            partOfSpeech?: PartOfSpeech;
            /** The token text. */
            text?: TextSpan;
        }
        interface DocumentsResource {
            /**
             * Finds named entities (currently proper names and common nouns) in the text
             * along with entity types, salience, mentions for each entity, and
             * other properties.
             */
            analyzeEntities(request: {
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
                /** Request body */
                resource: AnalyzeEntitiesRequest;
            }): Request<AnalyzeEntitiesResponse>;
            analyzeEntities(request: {
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
            },
            body: AnalyzeEntitiesRequest): Request<AnalyzeEntitiesResponse>;
            /**
             * Finds entities, similar to AnalyzeEntities in the text and analyzes
             * sentiment associated with each entity and its mentions.
             */
            analyzeEntitySentiment(request: {
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
                /** Request body */
                resource: AnalyzeEntitySentimentRequest;
            }): Request<AnalyzeEntitySentimentResponse>;
            analyzeEntitySentiment(request: {
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
            },
            body: AnalyzeEntitySentimentRequest): Request<AnalyzeEntitySentimentResponse>;
            /** Analyzes the sentiment of the provided text. */
            analyzeSentiment(request: {
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
                /** Request body */
                resource: AnalyzeSentimentRequest;
            }): Request<AnalyzeSentimentResponse>;
            analyzeSentiment(request: {
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
            },
            body: AnalyzeSentimentRequest): Request<AnalyzeSentimentResponse>;
            /**
             * Analyzes the syntax of the text and provides sentence boundaries and
             * tokenization along with part of speech tags, dependency trees, and other
             * properties.
             */
            analyzeSyntax(request: {
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
                /** Request body */
                resource: AnalyzeSyntaxRequest;
            }): Request<AnalyzeSyntaxResponse>;
            analyzeSyntax(request: {
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
            },
            body: AnalyzeSyntaxRequest): Request<AnalyzeSyntaxResponse>;
            /**
             * A convenience method that provides all the features that analyzeSentiment,
             * analyzeEntities, and analyzeSyntax provide in one call.
             */
            annotateText(request: {
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
                /** Request body */
                resource: AnnotateTextRequest;
            }): Request<AnnotateTextResponse>;
            annotateText(request: {
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
            },
            body: AnnotateTextRequest): Request<AnnotateTextResponse>;
            /** Classifies a document into categories. */
            classifyText(request: {
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
                /** Request body */
                resource: ClassifyTextRequest;
            }): Request<ClassifyTextResponse>;
            classifyText(request: {
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
            },
            body: ClassifyTextRequest): Request<ClassifyTextResponse>;
        }

        const documents: DocumentsResource;
    }
}
