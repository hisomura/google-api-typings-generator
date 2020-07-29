// Type definitions for non-npm package Cloud Speech-to-Text API v1 1.0
// Project: https://cloud.google.com/speech-to-text/docs/quickstart-protocol
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://speech.googleapis.com/$discovery/rest?version=v1
// Revision: 20200722

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Cloud Speech-to-Text API v1 */
    function load(name: "speech", version: "v1"): PromiseLike<void>;
    function load(name: "speech", version: "v1", callback: () => any): void;

    namespace speech {
        interface ListOperationsResponse {
            /** The standard List next-page token. */
            nextPageToken?: string;
            /** A list of operations that matches the specified filter in the request. */
            operations?: Operation[];
        }
        interface LongRunningRecognizeMetadata {
            /** Time of the most recent processing update. */
            lastUpdateTime?: string;
            /**
             * Approximate percentage of audio processed thus far. Guaranteed to be 100
             * when the audio is fully processed and the results are available.
             */
            progressPercent?: number;
            /** Time when the request was received. */
            startTime?: string;
            /**
             * Output only. The URI of the audio file being transcribed. Empty if the audio was sent
             * as byte content.
             */
            uri?: string;
        }
        interface LongRunningRecognizeRequest {
            /** Required. The audio data to be recognized. */
            audio?: RecognitionAudio;
            /**
             * Required. Provides information to the recognizer that specifies how to
             * process the request.
             */
            config?: RecognitionConfig;
        }
        interface LongRunningRecognizeResponse {
            /**
             * Sequential list of transcription results corresponding to
             * sequential portions of audio.
             */
            results?: SpeechRecognitionResult[];
        }
        interface Operation {
            /**
             * If the value is `false`, it means the operation is still in progress.
             * If `true`, the operation is completed, and either `error` or `response` is
             * available.
             */
            done?: boolean;
            /** The error result of the operation in case of failure or cancellation. */
            error?: Status;
            /**
             * Service-specific metadata associated with the operation.  It typically
             * contains progress information and common metadata such as create time.
             * Some services might not provide such metadata.  Any method that returns a
             * long-running operation should document the metadata type, if any.
             */
            metadata?: { [P in string]: any };
            /**
             * The server-assigned name, which is only unique within the same service that
             * originally returns it. If you use the default HTTP mapping, the
             * `name` should be a resource name ending with `operations/{unique_id}`.
             */
            name?: string;
            /**
             * The normal response of the operation in case of success.  If the original
             * method returns no data on success, such as `Delete`, the response is
             * `google.protobuf.Empty`.  If the original method is standard
             * `Get`/`Create`/`Update`, the response should be the resource.  For other
             * methods, the response should have the type `XxxResponse`, where `Xxx`
             * is the original method name.  For example, if the original method name
             * is `TakeSnapshot()`, the inferred response type is
             * `TakeSnapshotResponse`.
             */
            response?: { [P in string]: any };
        }
        interface RecognitionAudio {
            /**
             * The audio data bytes encoded as specified in
             * `RecognitionConfig`. Note: as with all bytes fields, proto buffers use a
             * pure binary representation, whereas JSON representations use base64.
             */
            content?: string;
            /**
             * URI that points to a file that contains audio data bytes as specified in
             * `RecognitionConfig`. The file must not be compressed (for example, gzip).
             * Currently, only Google Cloud Storage URIs are
             * supported, which must be specified in the following format:
             * `gs://bucket_name/object_name` (other URI formats return
             * google.rpc.Code.INVALID_ARGUMENT). For more information, see
             * [Request URIs](https://cloud.google.com/storage/docs/reference-uris).
             */
            uri?: string;
        }
        interface RecognitionConfig {
            /**
             * The number of channels in the input audio data.
             * ONLY set this for MULTI-CHANNEL recognition.
             * Valid values for LINEAR16 and FLAC are `1`-`8`.
             * Valid values for OGG_OPUS are '1'-'254'.
             * Valid value for MULAW, AMR, AMR_WB and SPEEX_WITH_HEADER_BYTE is only `1`.
             * If `0` or omitted, defaults to one channel (mono).
             * Note: We only recognize the first channel by default.
             * To perform independent recognition on each channel set
             * `enable_separate_recognition_per_channel` to 'true'.
             */
            audioChannelCount?: number;
            /**
             * Config to enable speaker diarization and set additional
             * parameters to make diarization better suited for your application.
             * Note: When this is enabled, we send all the words from the beginning of the
             * audio for the top alternative in every consecutive STREAMING responses.
             * This is done in order to improve our speaker tags as our models learn to
             * identify the speakers in the conversation over time.
             * For non-streaming requests, the diarization results will be provided only
             * in the top alternative of the FINAL SpeechRecognitionResult.
             */
            diarizationConfig?: SpeakerDiarizationConfig;
            /**
             * If 'true', adds punctuation to recognition result hypotheses.
             * This feature is only available in select languages. Setting this for
             * requests in other languages has no effect at all.
             * The default 'false' value does not add punctuation to result hypotheses.
             */
            enableAutomaticPunctuation?: boolean;
            /**
             * This needs to be set to `true` explicitly and `audio_channel_count` > 1
             * to get each channel recognized separately. The recognition result will
             * contain a `channel_tag` field to state which channel that result belongs
             * to. If this is not true, we will only recognize the first channel. The
             * request is billed cumulatively for all channels recognized:
             * `audio_channel_count` multiplied by the length of the audio.
             */
            enableSeparateRecognitionPerChannel?: boolean;
            /**
             * If `true`, the top result includes a list of words and
             * the start and end time offsets (timestamps) for those words. If
             * `false`, no word-level time offset information is returned. The default is
             * `false`.
             */
            enableWordTimeOffsets?: boolean;
            /**
             * Encoding of audio data sent in all `RecognitionAudio` messages.
             * This field is optional for `FLAC` and `WAV` audio files and required
             * for all other audio formats. For details, see AudioEncoding.
             */
            encoding?: string;
            /**
             * Required. The language of the supplied audio as a
             * [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag.
             * Example: "en-US".
             * See [Language
             * Support](https://cloud.google.com/speech-to-text/docs/languages) for a list
             * of the currently supported language codes.
             */
            languageCode?: string;
            /**
             * Maximum number of recognition hypotheses to be returned.
             * Specifically, the maximum number of `SpeechRecognitionAlternative` messages
             * within each `SpeechRecognitionResult`.
             * The server may return fewer than `max_alternatives`.
             * Valid values are `0`-`30`. A value of `0` or `1` will return a maximum of
             * one. If omitted, will return a maximum of one.
             */
            maxAlternatives?: number;
            /** Metadata regarding this request. */
            metadata?: RecognitionMetadata;
            /**
             * Which model to select for the given request. Select the model
             * best suited to your domain to get best results. If a model is not
             * explicitly specified, then we auto-select a model based on the parameters
             * in the RecognitionConfig.
             * <table>
             * <tr>
             * <td><b>Model</b></td>
             * <td><b>Description</b></td>
             * </tr>
             * <tr>
             * <td><code>command_and_search</code></td>
             * <td>Best for short queries such as voice commands or voice search.</td>
             * </tr>
             * <tr>
             * <td><code>phone_call</code></td>
             * <td>Best for audio that originated from a phone call (typically
             * recorded at an 8khz sampling rate).</td>
             * </tr>
             * <tr>
             * <td><code>video</code></td>
             * <td>Best for audio that originated from from video or includes multiple
             * speakers. Ideally the audio is recorded at a 16khz or greater
             * sampling rate. This is a premium model that costs more than the
             * standard rate.</td>
             * </tr>
             * <tr>
             * <td><code>default</code></td>
             * <td>Best for audio that is not one of the specific audio models.
             * For example, long-form audio. Ideally the audio is high-fidelity,
             * recorded at a 16khz or greater sampling rate.</td>
             * </tr>
             * </table>
             */
            model?: string;
            /**
             * If set to `true`, the server will attempt to filter out
             * profanities, replacing all but the initial character in each filtered word
             * with asterisks, e.g. "f&#42;&#42;&#42;". If set to `false` or omitted, profanities
             * won't be filtered out.
             */
            profanityFilter?: boolean;
            /**
             * Sample rate in Hertz of the audio data sent in all
             * `RecognitionAudio` messages. Valid values are: 8000-48000.
             * 16000 is optimal. For best results, set the sampling rate of the audio
             * source to 16000 Hz. If that's not possible, use the native sample rate of
             * the audio source (instead of re-sampling).
             * This field is optional for FLAC and WAV audio files, but is
             * required for all other audio formats. For details, see AudioEncoding.
             */
            sampleRateHertz?: number;
            /**
             * Array of SpeechContext.
             * A means to provide context to assist the speech recognition. For more
             * information, see
             * [speech
             * adaptation](https://cloud.google.com/speech-to-text/docs/context-strength).
             */
            speechContexts?: SpeechContext[];
            /**
             * Set to true to use an enhanced model for speech recognition.
             * If `use_enhanced` is set to true and the `model` field is not set, then
             * an appropriate enhanced model is chosen if an enhanced model exists for
             * the audio.
             *
             * If `use_enhanced` is true and an enhanced version of the specified model
             * does not exist, then the speech is recognized using the standard version
             * of the specified model.
             */
            useEnhanced?: boolean;
        }
        interface RecognitionMetadata {
            /**
             * Description of the content. Eg. "Recordings of federal supreme court
             * hearings from 2012".
             */
            audioTopic?: string;
            /**
             * The industry vertical to which this speech recognition request most
             * closely applies. This is most indicative of the topics contained
             * in the audio.  Use the 6-digit NAICS code to identify the industry
             * vertical - see https://www.naics.com/search/.
             */
            industryNaicsCodeOfAudio?: number;
            /** The use case most closely describing the audio content to be recognized. */
            interactionType?: string;
            /** The audio type that most closely describes the audio being recognized. */
            microphoneDistance?: string;
            /** The original media the speech was recorded on. */
            originalMediaType?: string;
            /**
             * Mime type of the original audio file.  For example `audio/m4a`,
             * `audio/x-alaw-basic`, `audio/mp3`, `audio/3gpp`.
             * A list of possible audio mime types is maintained at
             * http://www.iana.org/assignments/media-types/media-types.xhtml#audio
             */
            originalMimeType?: string;
            /**
             * The device used to make the recording.  Examples 'Nexus 5X' or
             * 'Polycom SoundStation IP 6000' or 'POTS' or 'VoIP' or
             * 'Cardioid Microphone'.
             */
            recordingDeviceName?: string;
            /** The type of device the speech was recorded with. */
            recordingDeviceType?: string;
        }
        interface RecognizeRequest {
            /** Required. The audio data to be recognized. */
            audio?: RecognitionAudio;
            /**
             * Required. Provides information to the recognizer that specifies how to
             * process the request.
             */
            config?: RecognitionConfig;
        }
        interface RecognizeResponse {
            /**
             * Sequential list of transcription results corresponding to
             * sequential portions of audio.
             */
            results?: SpeechRecognitionResult[];
        }
        interface SpeakerDiarizationConfig {
            /**
             * If 'true', enables speaker detection for each recognized word in
             * the top alternative of the recognition result using a speaker_tag provided
             * in the WordInfo.
             */
            enableSpeakerDiarization?: boolean;
            /**
             * Maximum number of speakers in the conversation. This range gives you more
             * flexibility by allowing the system to automatically determine the correct
             * number of speakers. If not set, the default value is 6.
             */
            maxSpeakerCount?: number;
            /**
             * Minimum number of speakers in the conversation. This range gives you more
             * flexibility by allowing the system to automatically determine the correct
             * number of speakers. If not set, the default value is 2.
             */
            minSpeakerCount?: number;
            /** Output only. Unused. */
            speakerTag?: number;
        }
        interface SpeechContext {
            /**
             * A list of strings containing words and phrases "hints" so that
             * the speech recognition is more likely to recognize them. This can be used
             * to improve the accuracy for specific words and phrases, for example, if
             * specific commands are typically spoken by the user. This can also be used
             * to add additional words to the vocabulary of the recognizer. See
             * [usage limits](https://cloud.google.com/speech-to-text/quotas#content).
             *
             * List items can also be set to classes for groups of words that represent
             * common concepts that occur in natural language. For example, rather than
             * providing phrase hints for every month of the year, using the $MONTH class
             * improves the likelihood of correctly transcribing audio that includes
             * months.
             */
            phrases?: string[];
        }
        interface SpeechRecognitionAlternative {
            /**
             * The confidence estimate between 0.0 and 1.0. A higher number
             * indicates an estimated greater likelihood that the recognized words are
             * correct. This field is set only for the top alternative of a non-streaming
             * result or, of a streaming result where `is_final=true`.
             * This field is not guaranteed to be accurate and users should not rely on it
             * to be always provided.
             * The default of 0.0 is a sentinel value indicating `confidence` was not set.
             */
            confidence?: number;
            /** Transcript text representing the words that the user spoke. */
            transcript?: string;
            /**
             * A list of word-specific information for each recognized word.
             * Note: When `enable_speaker_diarization` is true, you will see all the words
             * from the beginning of the audio.
             */
            words?: WordInfo[];
        }
        interface SpeechRecognitionResult {
            /**
             * May contain one or more recognition hypotheses (up to the
             * maximum specified in `max_alternatives`).
             * These alternatives are ordered in terms of accuracy, with the top (first)
             * alternative being the most probable, as ranked by the recognizer.
             */
            alternatives?: SpeechRecognitionAlternative[];
            /**
             * For multi-channel audio, this is the channel number corresponding to the
             * recognized result for the audio from that channel.
             * For audio_channel_count = N, its output values can range from '1' to 'N'.
             */
            channelTag?: number;
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
        interface WordInfo {
            /**
             * Time offset relative to the beginning of the audio,
             * and corresponding to the end of the spoken word.
             * This field is only set if `enable_word_time_offsets=true` and only
             * in the top hypothesis.
             * This is an experimental feature and the accuracy of the time offset can
             * vary.
             */
            endTime?: string;
            /**
             * Output only. A distinct integer value is assigned for every speaker within
             * the audio. This field specifies which one of those speakers was detected to
             * have spoken this word. Value ranges from '1' to diarization_speaker_count.
             * speaker_tag is set if enable_speaker_diarization = 'true' and only in the
             * top alternative.
             */
            speakerTag?: number;
            /**
             * Time offset relative to the beginning of the audio,
             * and corresponding to the start of the spoken word.
             * This field is only set if `enable_word_time_offsets=true` and only
             * in the top hypothesis.
             * This is an experimental feature and the accuracy of the time offset can
             * vary.
             */
            startTime?: string;
            /** The word corresponding to this set of information. */
            word?: string;
        }
        interface OperationsResource {
            /**
             * Gets the latest state of a long-running operation.  Clients can use this
             * method to poll the operation result at intervals as recommended by the API
             * service.
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
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The name of the operation resource. */
                name: string;
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
            }): Request<Operation>;
            /**
             * Lists operations that match the specified filter in the request. If the
             * server doesn't support this method, it returns `UNIMPLEMENTED`.
             *
             * NOTE: the `name` binding allows API services to override the binding
             * to use different resource name schemes, such as `users/&#42;/operations`. To
             * override the binding, API services can add a binding such as
             * `"/v1/{name=users/&#42;}/operations"` to their service configuration.
             * For backwards compatibility, the default name includes the operations
             * collection id, however overriding users must ensure the name binding
             * is the parent resource, without the operations collection id.
             */
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
                /** The standard list filter. */
                filter?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The name of the operation's parent resource. */
                name?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** The standard list page size. */
                pageSize?: number;
                /** The standard list page token. */
                pageToken?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<ListOperationsResponse>;
        }
        interface OperationsResource {
            /**
             * Gets the latest state of a long-running operation.  Clients can use this
             * method to poll the operation result at intervals as recommended by the API
             * service.
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
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The name of the operation resource. */
                name: string;
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
            }): Request<Operation>;
            /**
             * Lists operations that match the specified filter in the request. If the
             * server doesn't support this method, it returns `UNIMPLEMENTED`.
             *
             * NOTE: the `name` binding allows API services to override the binding
             * to use different resource name schemes, such as `users/&#42;/operations`. To
             * override the binding, API services can add a binding such as
             * `"/v1/{name=users/&#42;}/operations"` to their service configuration.
             * For backwards compatibility, the default name includes the operations
             * collection id, however overriding users must ensure the name binding
             * is the parent resource, without the operations collection id.
             */
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
                /** The standard list filter. */
                filter?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The name of the operation's parent resource. */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** The standard list page size. */
                pageSize?: number;
                /** The standard list page token. */
                pageToken?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<ListOperationsResponse>;
        }
        interface LocationsResource {
            operations: OperationsResource;
        }
        interface ProjectsResource {
            locations: LocationsResource;
        }
        interface SpeechResource {
            /**
             * Performs asynchronous speech recognition: receive results via the
             * google.longrunning.Operations interface. Returns either an
             * `Operation.error` or an `Operation.response` which contains
             * a `LongRunningRecognizeResponse` message.
             * For more information on asynchronous speech recognition, see the
             * [how-to](https://cloud.google.com/speech-to-text/docs/async-recognize).
             */
            longrunningrecognize(request: {
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
                resource: LongRunningRecognizeRequest;
            }): Request<Operation>;
            longrunningrecognize(request: {
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
            body: LongRunningRecognizeRequest): Request<Operation>;
            /**
             * Performs synchronous speech recognition: receive results after all audio
             * has been sent and processed.
             */
            recognize(request: {
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
                resource: RecognizeRequest;
            }): Request<RecognizeResponse>;
            recognize(request: {
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
            body: RecognizeRequest): Request<RecognizeResponse>;
        }

        const operations: OperationsResource;

        const projects: ProjectsResource;

        const speech: SpeechResource;
    }
}
