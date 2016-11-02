System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetsService;
    return {
        setters:[],
        execute: function() {
            TweetsService = (function () {
                function TweetsService() {
                }
                TweetsService.prototype.getTweets = function () {
                    return [{
                            text: 'djkffgdkj gsjksdfgjkf dgkjsg kjsdfg',
                            authorName: 'John',
                            authorUserName: '@john1990',
                            imgLink: 'http://lorempixel.com/100/100/people/?13',
                            likes: 1,
                            liked: true
                        }, {
                            text: 'sdfjkfds kjsdf kjsdfgjksdfgjkregjk gdf',
                            authorName: 'Terry',
                            authorUserName: '@terry111',
                            imgLink: 'http://lorempixel.com/100/100/people/?77',
                            likes: 5,
                            liked: true
                        }, {
                            text: 'orosv osodfsnaona nd jknads kjndsfkjna ',
                            authorName: 'Natali',
                            authorUserName: '@nata90',
                            imgLink: 'http://lorempixel.com/100/100/people/?3',
                            likes: 0,
                            liked: false
                        }];
                };
                return TweetsService;
            }());
            exports_1("TweetsService", TweetsService);
        }
    }
});
//# sourceMappingURL=tweets.service.js.map