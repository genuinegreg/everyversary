angular.module('everyversary').service('Anniversary', function () {

    var SECOND = 1000,
        MINUTE = 60,
        HOUR = 60,
        DAY = 24,
        YEAR = 365,
        MONTH = 365 / 12,
        PLANETE_MARS_YEAR = 687;

    var timeUnits = {
        year: SECOND * MINUTE * HOUR * DAY * YEAR,
        month: SECOND * MINUTE * HOUR * DAY * MONTH,
        planete_mars: SECOND * MINUTE * HOUR * DAY * PLANETE_MARS_YEAR
    };


    function Anniversary() {

    }

    Anniversary.prototype.getAges = function (date) {

        var age = Date.now() - date;

        return Object.keys(timeUnits).map(function (key) {

            var value = age / timeUnits[key];
            var flat = Math.floor(value);
            var next = (flat + 1);
            var timeToNext = age - (next * timeUnits[key]);

            return {
                age: value,
                weight: value % 1,
                type: key,
                flatAge: flat,
                next: next,
                timeToNext: timeToNext,
                timeFromNow: moment.duration(timeToNext).humanize()
            }
        })


    };


    return new Anniversary();
});