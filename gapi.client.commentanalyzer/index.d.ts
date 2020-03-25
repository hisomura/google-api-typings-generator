// Type definitions for non-npm package Perspective Comment Analyzer API v1alpha1 1.0
// Project: https://github.com/conversationai/perspectiveapi/blob/master/README.md
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1
// Revision: 20200322

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Perspective Comment Analyzer API v1alpha1 */
    function load(name: "commentanalyzer", version: "v1alpha1"): PromiseLike<void>;
    function load(name: "commentanalyzer", version: "v1alpha1", callback: () => any): void;

    namespace commentanalyzer {
        interface AnalyzeCommentRequest {
            /** Opaque token that is echoed from the request to the response. */
            clientToken?: string;
            /** The comment to analyze. */
            comment?: TextEntry;
            /**
             * Optional identifier associating this AnalyzeCommentRequest with a
             * particular client's community. Different communities may have different
             * norms and rules. Specifying this value enables us to explore building
             * community-specific models for clients.
             */
            communityId?: string;
            /** The context of the comment. */
            context?: Context;
            /**
             * Do not store the comment or context sent in this request. By default, the
             * service may store comments/context for debugging purposes.
             */
            doNotStore?: boolean;
            /**
             * The language(s) of the comment and context. If none are specified, we
             * attempt to automatically detect the language. Specifying multiple languages
             * means the text contains multiple lanugages. Both ISO and BCP-47 language
             * codes are accepted.
             *
             * The server returns an error if no language was specified and language
             * detection fails. The server also returns an error if the languages (either
             * specified by the caller, or auto-detected) are not &#42;all&#42; supported by the
             * service.
             */
            languages?: string[];
            /**
             * Specification of requested attributes. The AttributeParameters serve as
             * configuration for each associated attribute. The map keys are attribute
             * names. The available attributes may be different on each RFE installation,
             * and can be seen by calling ListAttributes (see above).
             * For the prod installation, known as Perspective API, at
             * blade:commentanalyzer-esf and commentanalyzer.googleapis.com, see
             * go/checker-models (internal) and
             * https://github.com/conversationai/perspectiveapi/blob/master/2-api/models.md#all-attribute-types.
             */
            requestedAttributes?: Record<string, AttributeParameters>;
            /**
             * Session ID. Used to join related RPCs into a single session. For example,
             * an interactive tool that calls both the AnalyzeComment and
             * SuggestCommentScore RPCs should set all invocations of both RPCs to the
             * same Session ID, typically a random 64-bit integer.
             */
            sessionId?: string;
            /**
             * An advisory parameter that will return span annotations if the model
             * is capable of providing scores with sub-comment resolution. This will
             * likely increase the size of the returned message.
             */
            spanAnnotations?: boolean;
        }
        interface AnalyzeCommentResponse {
            /**
             * Scores for the requested attributes. The map keys are attribute names (same
             * as the requested_attribute field in AnalyzeCommentRequest, for example
             * "ATTACK_ON_AUTHOR", "INFLAMMATORY", etc).
             */
            attributeScores?: Record<string, AttributeScores>;
            /** Same token from the original AnalyzeCommentRequest. */
            clientToken?: string;
            /**
             * Contains the languages detected from the text content, sorted in order of
             * likelihood.
             */
            detectedLanguages?: string[];
            /**
             * The language(s) used by CommentAnalyzer service to choose which Model to
             * use when analyzing the comment. Might better be called
             * "effective_languages". The logic used to make the choice is as follows:
             * if !Request.languages.empty()
             * effective_languages = Request.languages
             * else
             * effective_languages = detected_languages[0]
             */
            languages?: string[];
        }
        interface ArticleAndParentComment {
            /**
             * The source content about which the comment was made (article text, article
             * summary, video transcript, etc).
             */
            article?: TextEntry;
            /**
             * Refers to text that is a direct parent of the source comment, such as in a
             * one-deep threaded message board. This field will only be present for
             * comments that are replies to other comments and will not be populated for
             * direct comments on the article_text.
             */
            parentComment?: TextEntry;
        }
        interface AttributeParameters {
            /**
             * Don't return scores for this attribute that are below this threshold. If
             * unset, a default threshold will be applied. A FloatValue wrapper is used to
             * distinguish between 0 vs. default/unset.
             */
            scoreThreshold?: number;
            /** What type of scores to return. If unset, defaults to probability scores. */
            scoreType?: string;
        }
        interface AttributeScores {
            /** Per-span scores. */
            spanScores?: SpanScore[];
            /** Overall score for comment as a whole. */
            summaryScore?: Score;
        }
        interface Context {
            /**
             * Information about the source for which the original comment was made, and
             * any parent comment info.
             */
            articleAndParentComment?: ArticleAndParentComment;
            /** A list of messages. For example, a linear comments section or forum thread. */
            entries?: TextEntry[];
        }
        interface Score {
            /** The type of the above value. */
            type?: string;
            /** Score value. Semantics described by type below. */
            value?: number;
        }
        interface SpanScore {
            /**
             * "begin" and "end" describe the span of the original text that the attribute
             * score applies to. The values are the UTF-16 codepoint range. "end" is
             * exclusive. For example, with the text "Hi there", the begin/end pair (0,2)
             * describes the text "Hi".
             *
             * If "begin" and "end" are unset, the score applies to the full text.
             */
            begin?: number;
            end?: number;
            /** The score value. */
            score?: Score;
        }
        interface SuggestCommentScoreRequest {
            /**
             * Attribute scores for the comment. The map keys are attribute names, same as
             * the requested_attribute field in AnalyzeCommentRequest (for example
             * "ATTACK_ON_AUTHOR", "INFLAMMATORY", etc.). This field has the same type as
             * the `attribute_scores` field in AnalyzeCommentResponse.
             *
             * To specify an overall attribute score for the entire comment as a whole,
             * use the `summary_score` field of the mapped AttributeScores object. To
             * specify scores on specific subparts of the comment, use the `span_scores`
             * field. All SpanScore objects must have begin and end fields set.
             *
             * All Score objects must be explicitly set (for binary classification, use
             * the score values 0 and 1). If Score objects don't include a ScoreType,
             * `PROBABILITY` is assumed.
             *
             * `attribute_scores` must not be empty. The mapped AttributeScores objects
             * also must not be empty. An `INVALID_ARGUMENT` error is returned for all
             * malformed requests.
             */
            attributeScores?: Record<string, AttributeScores>;
            /** Opaque token that is echoed from the request to the response. */
            clientToken?: string;
            /** The comment being scored. */
            comment?: TextEntry;
            /**
             * Optional identifier associating this comment score suggestion with a
             * particular sub-community. Different communities may have different norms
             * and rules. Specifying this value enables training community-specific
             * models.
             */
            communityId?: string;
            /** The context of the comment. */
            context?: Context;
            /**
             * The language(s) of the comment and context. If none are specified, we
             * attempt to automatically detect the language. Both ISO and BCP-47 language
             * codes are accepted.
             */
            languages?: string[];
            /**
             * Session ID. Used to join related RPCs into a single session. For example,
             * an interactive tool that calls both the AnalyzeComment and
             * SuggestCommentScore RPCs should set all invocations of both RPCs to the
             * same Session ID, typically a random 64-bit integer.
             */
            sessionId?: string;
        }
        interface SuggestCommentScoreResponse {
            /** Same token from the original SuggestCommentScoreRequest. */
            clientToken?: string;
            /** The list of languages detected from the comment text. */
            detectedLanguages?: string[];
            /** The list of languages provided in the request. */
            requestedLanguages?: string[];
        }
        interface TextEntry {
            /** UTF-8 encoded text. */
            text?: string;
            /** Type of the text field. */
            type?: string;
        }
        interface CommentsResource {
            /** Analyzes the provided text and returns scores for requested attributes. */
            analyze(request: {
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
                resource: AnalyzeCommentRequest;
            }): Request<AnalyzeCommentResponse>;
            analyze(request: {
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
            body: AnalyzeCommentRequest): Request<AnalyzeCommentResponse>;
            /** Suggest comment scores as training data. */
            suggestscore(request: {
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
                resource: SuggestCommentScoreRequest;
            }): Request<SuggestCommentScoreResponse>;
            suggestscore(request: {
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
            body: SuggestCommentScoreRequest): Request<SuggestCommentScoreResponse>;
        }

        const comments: CommentsResource;
    }
}
