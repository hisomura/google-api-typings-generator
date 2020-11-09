/* Type definitions for non-npm package Firebase Cloud Messaging API v1 1.0 */
// Project: https://firebase.google.com/docs/cloud-messaging
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
//                 Nick Amoscato <https://github.com/namoscato>
//                 Declan Vong <https://github.com/declanvong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://fcm.googleapis.com/$discovery/rest?version=v1
// Revision: 20201109

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Firebase Cloud Messaging API v1 */
    function load(name: "fcm", version: "v1"): PromiseLike<void>;
    function load(name: "fcm", version: "v1", callback: () => any): void;

    namespace fcm {
        interface AndroidConfig {
            /**
             * An identifier of a group of messages that can be collapsed, so that only the last message gets sent when delivery can be resumed. A maximum of 4 different collapse keys is allowed
             * at any given time.
             */
            collapseKey?: string;
            /** Arbitrary key/value payload. If present, it will override google.firebase.fcm.v1.Message.data. */
            data?: { [P in string]: string };
            /**
             * If set to true, messages will be allowed to be delivered to the app while the device is in direct boot mode. See [Support Direct Boot
             * mode](https://developer.android.com/training/articles/direct-boot).
             */
            directBootOk?: boolean;
            /** Options for features provided by the FCM SDK for Android. */
            fcmOptions?: AndroidFcmOptions;
            /** Notification to send to android devices. */
            notification?: AndroidNotification;
            /** Message priority. Can take "normal" and "high" values. For more information, see [Setting the priority of a message](https://goo.gl/GjONJv). */
            priority?: string;
            /** Package name of the application where the registration token must match in order to receive the message. */
            restrictedPackageName?: string;
            /**
             * How long (in seconds) the message should be kept in FCM storage if the device is offline. The maximum time to live supported is 4 weeks, and the default value is 4 weeks if not set.
             * Set it to 0 if want to send the message immediately. In JSON format, the Duration type is encoded as a string rather than an object, where the string ends in the suffix "s"
             * (indicating seconds) and is preceded by the number of seconds, with nanoseconds expressed as fractional seconds. For example, 3 seconds with 0 nanoseconds should be encoded in JSON
             * format as "3s", while 3 seconds and 1 nanosecond should be expressed in JSON format as "3.000000001s". The ttl will be rounded down to the nearest second.
             */
            ttl?: string;
        }
        interface AndroidFcmOptions {
            /** Label associated with the message's analytics data. */
            analyticsLabel?: string;
        }
        interface AndroidNotification {
            /** The notification's body text. If present, it will override google.firebase.fcm.v1.Notification.body. */
            body?: string;
            /**
             * Variable string values to be used in place of the format specifiers in body_loc_key to use to localize the body text to the user's current localization. See [Formatting and
             * Styling](https://goo.gl/MalYE3) for more information.
             */
            bodyLocArgs?: string[];
            /**
             * The key to the body string in the app's string resources to use to localize the body text to the user's current localization. See [String Resources](https://goo.gl/NdFZGI) for more
             * information.
             */
            bodyLocKey?: string;
            /**
             * The [notification's channel id](https://developer.android.com/guide/topics/ui/notifiers/notifications#ManageChannels) (new in Android O). The app must create a channel with this
             * channel ID before any notification with this channel ID is received. If you don't send this channel ID in the request, or if the channel ID provided has not yet been created by the
             * app, FCM uses the channel ID specified in the app manifest.
             */
            channelId?: string;
            /** The action associated with a user click on the notification. If specified, an activity with a matching intent filter is launched when a user clicks on the notification. */
            clickAction?: string;
            /** The notification's icon color, expressed in #rrggbb format. */
            color?: string;
            /**
             * If set to true, use the Android framework's default LED light settings for the notification. Default values are specified in
             * [config.xml](https://android.googlesource.com/platform/frameworks/base/+/master/core/res/res/values/config.xml). If `default_light_settings` is set to true and `light_settings` is
             * also set, the user-specified `light_settings` is used instead of the default value.
             */
            defaultLightSettings?: boolean;
            /**
             * If set to true, use the Android framework's default sound for the notification. Default values are specified in
             * [config.xml](https://android.googlesource.com/platform/frameworks/base/+/master/core/res/res/values/config.xml).
             */
            defaultSound?: boolean;
            /**
             * If set to true, use the Android framework's default vibrate pattern for the notification. Default values are specified in
             * [config.xml](https://android.googlesource.com/platform/frameworks/base/+/master/core/res/res/values/config.xml). If `default_vibrate_timings` is set to true and `vibrate_timings` is
             * also set, the default value is used instead of the user-specified `vibrate_timings`.
             */
            defaultVibrateTimings?: boolean;
            /**
             * Set the time that the event in the notification occurred. Notifications in the panel are sorted by this time. A point in time is represented using
             * [protobuf.Timestamp](https://developers.google.com/protocol-buffers/docs/reference/java/com/google/protobuf/Timestamp).
             */
            eventTime?: string;
            /**
             * The notification's icon. Sets the notification icon to myicon for drawable resource myicon. If you don't send this key in the request, FCM displays the launcher icon specified in
             * your app manifest.
             */
            icon?: string;
            /** Contains the URL of an image that is going to be displayed in a notification. If present, it will override google.firebase.fcm.v1.Notification.image. */
            image?: string;
            /** Settings to control the notification's LED blinking rate and color if LED is available on the device. The total blinking time is controlled by the OS. */
            lightSettings?: LightSettings;
            /**
             * Set whether or not this notification is relevant only to the current device. Some notifications can be bridged to other devices for remote display, such as a Wear OS watch. This
             * hint can be set to recommend this notification not be bridged. See [Wear OS
             * guides](https://developer.android.com/training/wearables/notifications/bridger#existing-method-of-preventing-bridging)
             */
            localOnly?: boolean;
            /**
             * Sets the number of items this notification represents. May be displayed as a badge count for launchers that support badging.See [Notification
             * Badge](https://developer.android.com/training/notify-user/badges). For example, this might be useful if you're using just one notification to represent multiple new messages but you
             * want the count here to represent the number of total new messages. If zero or unspecified, systems that support badging use the default, which is to increment a number displayed on
             * the long-press menu each time a new notification arrives.
             */
            notificationCount?: number;
            /**
             * Set the relative priority for this notification. Priority is an indication of how much of the user's attention should be consumed by this notification. Low-priority notifications
             * may be hidden from the user in certain situations, while the user might be interrupted for a higher-priority notification. The effect of setting the same priorities may differ
             * slightly on different platforms. Note this priority differs from `AndroidMessagePriority`. This priority is processed by the client after the message has been delivered, whereas
             * [AndroidMessagePriority](https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages#androidmessagepriority) is an FCM concept that controls when the message is
             * delivered.
             */
            notificationPriority?: string;
            /** The sound to play when the device receives the notification. Supports "default" or the filename of a sound resource bundled in the app. Sound files must reside in /res/raw/. */
            sound?: string;
            /**
             * When set to false or unset, the notification is automatically dismissed when the user clicks it in the panel. When set to true, the notification persists even when the user clicks
             * it.
             */
            sticky?: boolean;
            /**
             * Identifier used to replace existing notifications in the notification drawer. If not specified, each request creates a new notification. If specified and a notification with the
             * same tag is already being shown, the new notification replaces the existing one in the notification drawer.
             */
            tag?: string;
            /**
             * Sets the "ticker" text, which is sent to accessibility services. Prior to API level 21 (`Lollipop`), sets the text that is displayed in the status bar when the notification first
             * arrives.
             */
            ticker?: string;
            /** The notification's title. If present, it will override google.firebase.fcm.v1.Notification.title. */
            title?: string;
            /**
             * Variable string values to be used in place of the format specifiers in title_loc_key to use to localize the title text to the user's current localization. See [Formatting and
             * Styling](https://goo.gl/MalYE3) for more information.
             */
            titleLocArgs?: string[];
            /**
             * The key to the title string in the app's string resources to use to localize the title text to the user's current localization. See [String Resources](https://goo.gl/NdFZGI) for
             * more information.
             */
            titleLocKey?: string;
            /**
             * Set the vibration pattern to use. Pass in an array of [protobuf.Duration](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Duration) to
             * turn on or off the vibrator. The first value indicates the `Duration` to wait before turning the vibrator on. The next value indicates the `Duration` to keep the vibrator on.
             * Subsequent values alternate between `Duration` to turn the vibrator off and to turn the vibrator on. If `vibrate_timings` is set and `default_vibrate_timings` is set to `true`, the
             * default value is used instead of the user-specified `vibrate_timings`.
             */
            vibrateTimings?: string[];
            /** Set the [Notification.visibility](https://developer.android.com/reference/android/app/Notification.html#visibility) of the notification. */
            visibility?: string;
        }
        interface ApnsConfig {
            /** Options for features provided by the FCM SDK for iOS. */
            fcmOptions?: ApnsFcmOptions;
            /**
             * HTTP request headers defined in Apple Push Notification Service. Refer to [APNs request
             * headers](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/sending_notification_requests_to_apns) for supported headers, e.g.
             * "apns-priority": "10".
             */
            headers?: { [P in string]: string };
            /**
             * APNs payload as a JSON object, including both `aps` dictionary and custom payload. See [Payload Key
             * Reference](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/generating_a_remote_notification). If present, it overrides
             * google.firebase.fcm.v1.Notification.title and google.firebase.fcm.v1.Notification.body.
             */
            payload?: { [P in string]: any };
        }
        interface ApnsFcmOptions {
            /** Label associated with the message's analytics data. */
            analyticsLabel?: string;
            /** Contains the URL of an image that is going to be displayed in a notification. If present, it will override google.firebase.fcm.v1.Notification.image. */
            image?: string;
        }
        interface Color {
            /**
             * The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (this color) + (1.0 - alpha) *
             * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message
             * rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is to be rendered as a solid
             * color (as if the alpha value had been explicitly given with a value of 1.0).
             */
            alpha?: number;
            /** The amount of blue in the color as a value in the interval [0, 1]. */
            blue?: number;
            /** The amount of green in the color as a value in the interval [0, 1]. */
            green?: number;
            /** The amount of red in the color as a value in the interval [0, 1]. */
            red?: number;
        }
        interface FcmOptions {
            /** Label associated with the message's analytics data. */
            analyticsLabel?: string;
        }
        interface LightSettings {
            /** Required. Set `color` of the LED with [google.type.Color](https://github.com/googleapis/googleapis/blob/master/google/type/color.proto). */
            color?: Color;
            /**
             * Required. Along with `light_on_duration `, define the blink rate of LED flashes. Resolution defined by
             * [proto.Duration](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Duration)
             */
            lightOffDuration?: string;
            /**
             * Required. Along with `light_off_duration`, define the blink rate of LED flashes. Resolution defined by
             * [proto.Duration](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Duration)
             */
            lightOnDuration?: string;
        }
        interface Message {
            /** Input only. Android specific options for messages sent through [FCM connection server](https://goo.gl/4GLdUl). */
            android?: AndroidConfig;
            /** Input only. [Apple Push Notification Service](https://goo.gl/MXRTPa) specific options. */
            apns?: ApnsConfig;
            /** Condition to send a message to, e.g. "'foo' in topics && 'bar' in topics". */
            condition?: string;
            /** Input only. Arbitrary key/value payload. The key should not be a reserved word ("from", "message_type", or any word starting with "google" or "gcm"). */
            data?: { [P in string]: string };
            /** Input only. Template for FCM SDK feature options to use across all platforms. */
            fcmOptions?: FcmOptions;
            /** Output Only. The identifier of the message sent, in the format of `projects/∗/messages/{message_id}`. */
            name?: string;
            /** Input only. Basic notification template to use across all platforms. */
            notification?: Notification;
            /** Registration token to send a message to. */
            token?: string;
            /** Topic name to send a message to, e.g. "weather". Note: "/topics/" prefix should not be provided. */
            topic?: string;
            /** Input only. [Webpush protocol](https://tools.ietf.org/html/rfc8030) options. */
            webpush?: WebpushConfig;
        }
        interface Notification {
            /** The notification's body text. */
            body?: string;
            /**
             * Contains the URL of an image that is going to be downloaded on the device and displayed in a notification. JPEG, PNG, BMP have full support across platforms. Animated GIF and video
             * only work on iOS. WebP and HEIF have varying levels of support across platforms and platform versions. Android has 1MB image size limit. Quota usage and implications/costs for
             * hosting image on Firebase Storage: https://firebase.google.com/pricing
             */
            image?: string;
            /** The notification's title. */
            title?: string;
        }
        interface SendMessageRequest {
            /** Required. Message to send. */
            message?: Message;
            /** Flag for testing the request without actually delivering the message. */
            validateOnly?: boolean;
        }
        interface WebpushConfig {
            /** Arbitrary key/value payload. If present, it will override google.firebase.fcm.v1.Message.data. */
            data?: { [P in string]: string };
            /** Options for features provided by the FCM SDK for Web. */
            fcmOptions?: WebpushFcmOptions;
            /** HTTP headers defined in webpush protocol. Refer to [Webpush protocol](https://tools.ietf.org/html/rfc8030#section-5) for supported headers, e.g. "TTL": "15". */
            headers?: { [P in string]: string };
            /**
             * Web Notification options as a JSON object. Supports Notification instance properties as defined in [Web Notification
             * API](https://developer.mozilla.org/en-US/docs/Web/API/Notification). If present, "title" and "body" fields override [google.firebase.fcm.v1.Notification.title] and
             * [google.firebase.fcm.v1.Notification.body].
             */
            notification?: { [P in string]: any };
        }
        interface WebpushFcmOptions {
            /** Label associated with the message's analytics data. */
            analyticsLabel?: string;
            /** The link to open when the user clicks on the notification. For all URL values, HTTPS is required. */
            link?: string;
        }
        interface MessagesResource {
            /** Send a message to specified target (a registration token, topic or condition). */
            send(request: {
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
                /**
                 * Required. It contains the Firebase project id (i.e. the unique identifier for your Firebase project), in the format of `projects/{project_id}`. For legacy support, the numeric
                 * project number with no padding is also supported in the format of `projects/{project_number}`.
                 */
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
                resource: SendMessageRequest;
            }): Request<Message>;
            send(request: {
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
                /**
                 * Required. It contains the Firebase project id (i.e. the unique identifier for your Firebase project), in the format of `projects/{project_id}`. For legacy support, the numeric
                 * project number with no padding is also supported in the format of `projects/{project_number}`.
                 */
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
            body: SendMessageRequest): Request<Message>;
        }
        interface ProjectsResource {
            messages: MessagesResource;
        }

        const projects: ProjectsResource;
    }
}
