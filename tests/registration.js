describe('Object registration', function () {

    if (navigator.userAgent.match(/Android/)) {
        describe('registration timer test', function () {
            it('sees done', function (done) {
                setTimeout(function () {
                    expect(true).toBe(true);
                    done();
                }, 500);
            });
        });
    }

    if (navigator.userAgent.match(/Android/)) {
        return;
    }

    it('registering valid objects', function (done) {
        var applicationObjects = [
            {
                path: '/path',
                interfaces: [
                    [
                        'com.example.application.interface',
                        '?Sample <sas >v',
                        null
                    ],
                    null
                ]
            },
            null
        ];
        var proxyObjects = [
            {
                path: '/path',
                interfaces: [
                    [
                        'com.example.proxy.interface',
                        '?Sample <sas >v',
                        null
                    ],
                    null
                ]
            },
            null
        ];
        AllJoyn.registerObjects(function () {
            expect(true).toBe(true);
            done();
        }, function () {
            expect(true).toBe(false);
            done();
        }, applicationObjects, proxyObjects);
    });
});
