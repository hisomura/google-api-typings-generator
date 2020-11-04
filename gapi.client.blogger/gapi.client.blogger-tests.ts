/* This is stub file for gapi.client.blogger definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20201102

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('blogger', 'v3', () => {
        /** now we can use gapi.client.blogger */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** Manage your Blogger account */
            'https://www.googleapis.com/auth/blogger',
            /** View your Blogger account */
            'https://www.googleapis.com/auth/blogger.readonly',
        ];
        const immediate = false;
        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /** handle successful authorization */
                run();
            } else {
                /** handle authorization error */
            }
        });
    });

    async function run() {
        /** Gets a blog by id. */
        await gapi.client.blogger.blogs.get({
            blogId: "Test string",
            maxPosts: 42,
            view: "Test string",
        });
        /** Gets a blog by url. */
        await gapi.client.blogger.blogs.getByUrl({
            url: "Test string",
            view: "Test string",
        });
        /** Lists blogs by user. */
        await gapi.client.blogger.blogs.listByUser({
            fetchUserInfo: true,
            role: "Test string",
            status: "Test string",
            userId: "Test string",
            view: "Test string",
        });
        /** Gets one blog and user info pair by blog id and user id. */
        await gapi.client.blogger.blogUserInfos.get({
            blogId: "Test string",
            maxPosts: 42,
            userId: "Test string",
        });
        /** Marks a comment as not spam by blog id, post id and comment id. */
        await gapi.client.blogger.comments.approve({
            blogId: "Test string",
            commentId: "Test string",
            postId: "Test string",
        });
        /** Deletes a comment by blog id, post id and comment id. */
        await gapi.client.blogger.comments.delete({
            blogId: "Test string",
            commentId: "Test string",
            postId: "Test string",
        });
        /** Gets a comment by id. */
        await gapi.client.blogger.comments.get({
            blogId: "Test string",
            commentId: "Test string",
            postId: "Test string",
            view: "Test string",
        });
        /** Lists comments. */
        await gapi.client.blogger.comments.list({
            blogId: "Test string",
            endDate: "Test string",
            fetchBodies: true,
            maxResults: 42,
            pageToken: "Test string",
            postId: "Test string",
            startDate: "Test string",
            status: "Test string",
            view: "Test string",
        });
        /** Lists comments by blog. */
        await gapi.client.blogger.comments.listByBlog({
            blogId: "Test string",
            endDate: "Test string",
            fetchBodies: true,
            maxResults: 42,
            pageToken: "Test string",
            startDate: "Test string",
            status: "Test string",
        });
        /** Marks a comment as spam by blog id, post id and comment id. */
        await gapi.client.blogger.comments.markAsSpam({
            blogId: "Test string",
            commentId: "Test string",
            postId: "Test string",
        });
        /** Removes the content of a comment by blog id, post id and comment id. */
        await gapi.client.blogger.comments.removeContent({
            blogId: "Test string",
            commentId: "Test string",
            postId: "Test string",
        });
        /** Deletes a page by blog id and page id. */
        await gapi.client.blogger.pages.delete({
            blogId: "Test string",
            pageId: "Test string",
        });
        /** Gets a page by blog id and page id. */
        await gapi.client.blogger.pages.get({
            blogId: "Test string",
            pageId: "Test string",
            view: "Test string",
        });
        /** Inserts a page. */
        await gapi.client.blogger.pages.insert({
            blogId: "Test string",
            isDraft: true,
        }, {
            author: {
                displayName: "Test string",
                id: "Test string",
                image: {
                    url: "Test string",
                },
                url: "Test string",
            },
            blog: {
                id: "Test string",
            },
            content: "Test string",
            etag: "Test string",
            id: "Test string",
            kind: "Test string",
            published: "Test string",
            selfLink: "Test string",
            status: "Test string",
            title: "Test string",
            updated: "Test string",
            url: "Test string",
        });
        /** Lists pages. */
        await gapi.client.blogger.pages.list({
            blogId: "Test string",
            fetchBodies: true,
            maxResults: 42,
            pageToken: "Test string",
            status: "Test string",
            view: "Test string",
        });
        /** Patches a page. */
        await gapi.client.blogger.pages.patch({
            blogId: "Test string",
            pageId: "Test string",
            publish: true,
            revert: true,
        }, {
            author: {
                displayName: "Test string",
                id: "Test string",
                image: {
                    url: "Test string",
                },
                url: "Test string",
            },
            blog: {
                id: "Test string",
            },
            content: "Test string",
            etag: "Test string",
            id: "Test string",
            kind: "Test string",
            published: "Test string",
            selfLink: "Test string",
            status: "Test string",
            title: "Test string",
            updated: "Test string",
            url: "Test string",
        });
        /** Publishes a page. */
        await gapi.client.blogger.pages.publish({
            blogId: "Test string",
            pageId: "Test string",
        });
        /** Reverts a published or scheduled page to draft state. */
        await gapi.client.blogger.pages.revert({
            blogId: "Test string",
            pageId: "Test string",
        });
        /** Updates a page by blog id and page id. */
        await gapi.client.blogger.pages.update({
            blogId: "Test string",
            pageId: "Test string",
            publish: true,
            revert: true,
        }, {
            author: {
                displayName: "Test string",
                id: "Test string",
                image: {
                    url: "Test string",
                },
                url: "Test string",
            },
            blog: {
                id: "Test string",
            },
            content: "Test string",
            etag: "Test string",
            id: "Test string",
            kind: "Test string",
            published: "Test string",
            selfLink: "Test string",
            status: "Test string",
            title: "Test string",
            updated: "Test string",
            url: "Test string",
        });
        /** Gets page views by blog id. */
        await gapi.client.blogger.pageViews.get({
            blogId: "Test string",
            range: "Test string",
        });
        /** Deletes a post by blog id and post id. */
        await gapi.client.blogger.posts.delete({
            blogId: "Test string",
            postId: "Test string",
        });
        /** Gets a post by blog id and post id */
        await gapi.client.blogger.posts.get({
            blogId: "Test string",
            fetchBody: true,
            fetchImages: true,
            maxComments: 42,
            postId: "Test string",
            view: "Test string",
        });
        /** Gets a post by path. */
        await gapi.client.blogger.posts.getByPath({
            blogId: "Test string",
            maxComments: 42,
            path: "Test string",
            view: "Test string",
        });
        /** Inserts a post. */
        await gapi.client.blogger.posts.insert({
            blogId: "Test string",
            fetchBody: true,
            fetchImages: true,
            isDraft: true,
        }, {
            author: {
                displayName: "Test string",
                id: "Test string",
                image: {
                    url: "Test string",
                },
                url: "Test string",
            },
            blog: {
                id: "Test string",
            },
            content: "Test string",
            customMetaData: "Test string",
            etag: "Test string",
            id: "Test string",
            images: [
                {
                    url: "Test string",
                }            ],
            kind: "Test string",
            labels: [
                "Test string"            ],
            location: {
                lat: 42,
                lng: 42,
                name: "Test string",
                span: "Test string",
            },
            published: "Test string",
            readerComments: "Test string",
            replies: {
                items: [
                    {
                        author: {
                            displayName: "Test string",
                            id: "Test string",
                            image: {
                                url: "Test string",
                            },
                            url: "Test string",
                        },
                        blog: {
                            id: "Test string",
                        },
                        content: "Test string",
                        id: "Test string",
                        inReplyTo: {
                            id: "Test string",
                        },
                        kind: "Test string",
                        post: {
                            id: "Test string",
                        },
                        published: "Test string",
                        selfLink: "Test string",
                        status: "Test string",
                        updated: "Test string",
                    }                ],
                selfLink: "Test string",
                totalItems: "Test string",
            },
            selfLink: "Test string",
            status: "Test string",
            title: "Test string",
            titleLink: "Test string",
            updated: "Test string",
            url: "Test string",
        });
        /** Lists posts. */
        await gapi.client.blogger.posts.list({
            blogId: "Test string",
            endDate: "Test string",
            fetchBodies: true,
            fetchImages: true,
            labels: "Test string",
            maxResults: 42,
            orderBy: "Test string",
            pageToken: "Test string",
            startDate: "Test string",
            status: "Test string",
            view: "Test string",
        });
        /** Patches a post. */
        await gapi.client.blogger.posts.patch({
            blogId: "Test string",
            fetchBody: true,
            fetchImages: true,
            maxComments: 42,
            postId: "Test string",
            publish: true,
            revert: true,
        }, {
            author: {
                displayName: "Test string",
                id: "Test string",
                image: {
                    url: "Test string",
                },
                url: "Test string",
            },
            blog: {
                id: "Test string",
            },
            content: "Test string",
            customMetaData: "Test string",
            etag: "Test string",
            id: "Test string",
            images: [
                {
                    url: "Test string",
                }            ],
            kind: "Test string",
            labels: [
                "Test string"            ],
            location: {
                lat: 42,
                lng: 42,
                name: "Test string",
                span: "Test string",
            },
            published: "Test string",
            readerComments: "Test string",
            replies: {
                items: [
                    {
                        author: {
                            displayName: "Test string",
                            id: "Test string",
                            image: {
                                url: "Test string",
                            },
                            url: "Test string",
                        },
                        blog: {
                            id: "Test string",
                        },
                        content: "Test string",
                        id: "Test string",
                        inReplyTo: {
                            id: "Test string",
                        },
                        kind: "Test string",
                        post: {
                            id: "Test string",
                        },
                        published: "Test string",
                        selfLink: "Test string",
                        status: "Test string",
                        updated: "Test string",
                    }                ],
                selfLink: "Test string",
                totalItems: "Test string",
            },
            selfLink: "Test string",
            status: "Test string",
            title: "Test string",
            titleLink: "Test string",
            updated: "Test string",
            url: "Test string",
        });
        /** Publishes a post. */
        await gapi.client.blogger.posts.publish({
            blogId: "Test string",
            postId: "Test string",
            publishDate: "Test string",
        });
        /** Reverts a published or scheduled post to draft state. */
        await gapi.client.blogger.posts.revert({
            blogId: "Test string",
            postId: "Test string",
        });
        /** Searches for posts matching given query terms in the specified blog. */
        await gapi.client.blogger.posts.search({
            blogId: "Test string",
            fetchBodies: true,
            orderBy: "Test string",
            q: "Test string",
        });
        /** Updates a post by blog id and post id. */
        await gapi.client.blogger.posts.update({
            blogId: "Test string",
            fetchBody: true,
            fetchImages: true,
            maxComments: 42,
            postId: "Test string",
            publish: true,
            revert: true,
        }, {
            author: {
                displayName: "Test string",
                id: "Test string",
                image: {
                    url: "Test string",
                },
                url: "Test string",
            },
            blog: {
                id: "Test string",
            },
            content: "Test string",
            customMetaData: "Test string",
            etag: "Test string",
            id: "Test string",
            images: [
                {
                    url: "Test string",
                }            ],
            kind: "Test string",
            labels: [
                "Test string"            ],
            location: {
                lat: 42,
                lng: 42,
                name: "Test string",
                span: "Test string",
            },
            published: "Test string",
            readerComments: "Test string",
            replies: {
                items: [
                    {
                        author: {
                            displayName: "Test string",
                            id: "Test string",
                            image: {
                                url: "Test string",
                            },
                            url: "Test string",
                        },
                        blog: {
                            id: "Test string",
                        },
                        content: "Test string",
                        id: "Test string",
                        inReplyTo: {
                            id: "Test string",
                        },
                        kind: "Test string",
                        post: {
                            id: "Test string",
                        },
                        published: "Test string",
                        selfLink: "Test string",
                        status: "Test string",
                        updated: "Test string",
                    }                ],
                selfLink: "Test string",
                totalItems: "Test string",
            },
            selfLink: "Test string",
            status: "Test string",
            title: "Test string",
            titleLink: "Test string",
            updated: "Test string",
            url: "Test string",
        });
        /** Gets one post and user info pair, by post_id and user_id. */
        await gapi.client.blogger.postUserInfos.get({
            blogId: "Test string",
            maxComments: 42,
            postId: "Test string",
            userId: "Test string",
        });
        /** Lists post and user info pairs. */
        await gapi.client.blogger.postUserInfos.list({
            blogId: "Test string",
            endDate: "Test string",
            fetchBodies: true,
            labels: "Test string",
            maxResults: 42,
            orderBy: "Test string",
            pageToken: "Test string",
            startDate: "Test string",
            status: "Test string",
            userId: "Test string",
            view: "Test string",
        });
        /** Gets one user by user_id. */
        await gapi.client.blogger.users.get({
            userId: "Test string",
        });
    }
});
