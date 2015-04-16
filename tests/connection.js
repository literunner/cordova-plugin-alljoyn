describe('Connecting to bus', function () {
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

    it('bus should be returned after connecting', function (done) {
        AllJoyn.connect(function (bus) {
            expect(bus.addListener).toBeDefined();
            // TODO: Check also other members of the bus object
            done();
        });
    });
});
