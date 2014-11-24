angular.module('everyversary').service('Anniversary', function () {

    var SECOND = 1000,
        MINUTE = 60,
        HOUR = 60,
        DAY = 24,
        YEAR = 365,
        MONTH = 365 / 12,
        PLANETE_MARS_YEAR = 687;

    var timeUnits = {
            year: {
                duration: SECOND * MINUTE * HOUR * DAY * YEAR,
                factor: 1,
                label: 'ans',
                label: {
                    one: 'an',
                    other: 'ans'
                }
            },
            month: { duration: SECOND * MINUTE * HOUR * DAY * MONTH,
                factor: 100,
                label: {
                    other: 'mois'
                }
            },
            day: {
                duration: SECOND * MINUTE * HOUR * DAY,
                factor: 1000,
                label: 'jours',
                labelPlural: {
                    one: 'jour',
                    other: 'jours'
                }
            },
            hour: {
                duration: SECOND * MINUTE * HOUR,
                factor: 1000,
                label: {
                    one: 'heure',
                    other: 'heures'
                }
            },
            minutes: {
                duration: SECOND * MINUTE,
                factor: Math.pow(10, 6), // 1 000 000
                label: {
                    one: 'minutes',
                    other: 'minutes'
                }
            },
            secondes: {
                duration: SECOND,
                factor: Math.pow(10, 9), // 1 000 000 000
                label: 'secondes'
            },
            planete_mercure: {
                duration: SECOND * MINUTE * HOUR * DAY * 87.5,
                factor: 1,
                label: {
                    one: 'année de Mercure',
                    other: 'années de Mercure'
                }
            },
            planete_venus: {
                duration: SECOND * MINUTE * HOUR * DAY * 224.7,
                factor: 1,
                label: {
                    one: 'année de Vénus',
                    other: 'années de Vénus'
                }
            },
            planete_mars: {
                duration: SECOND * MINUTE * HOUR * DAY * PLANETE_MARS_YEAR,
                factor: 1,
                label: {
                    one: 'année martiene',
                    other: 'années martienes'
                }
            },
            planete_jupiter: {
                duration: SECOND * MINUTE * HOUR * DAY * 4331,
                factor: 1,
                label: {
                    one: 'année de Jupiter',
                    other: 'années de Jupiter'
                }
            },
            planete_saturne: {
                duration: SECOND * MINUTE * HOUR * DAY * 10747,
                factor: 1,
                label: {
                    one: 'année de Saturne',
                    other: 'années de Saturne'
                }
            },
            planete_Unanus: {
                duration: SECOND * MINUTE * HOUR * DAY * 30589,
                factor: 1,
                label: {
                    one: 'année d\'Uranus',
                    other: 'années d\'Uranus'
                }
            },
            planete_neptune: {
                duration: SECOND * MINUTE * HOUR * DAY * 59802,
                factor: 1,
                label: {
                    one: 'année de Netptune',
                    other: 'années de Netptune'
                }
            },
            life_dog_chihuahua: {
                duration: SECOND * MINUTE * HOUR * DAY * YEAR * 13,
                factor: 1,
                label: {
                    one: 'vie de Chihuahua',
                    other: 'vies de Chihuahua'
                }
            }
        }
        ;


    function Anniversary() {

    }

    Anniversary.prototype.getAnniversaries = function (dates) {

        if (!(dates instanceof Array)) {
            dates = [
                dates
            ]
        }

        function getAnniversary(date, label) {

            var age = Date.now() - date;

            return Object.keys(timeUnits).map(function (key) {

                var value = age / timeUnits[key].duration / timeUnits[key].factor;
                var flat = Math.floor(value) * timeUnits[key].factor;
                var next = (flat + timeUnits[key].factor);
                var timeToNext = age - (next * timeUnits[key].duration);

                return {
                    age: value,
                    weight: value % 1,
                    type: key,
                    flatAge: flat,
                    next: next,
                    timeToNext: timeToNext,
                    timeFromNow: moment.duration(timeToNext).humanize(),
                    dateLabel: label,
                    label: timeUnits[key].label,
                    labelPlural: timeUnits[key].labelPlural || undefined
                }
            })
        }

        // process dates & units
        return dates.map(function (date) {
            return getAnniversary(date.date, date.label);
        }).reduce(function (a, b, c, d)  {
            return a.concat(b).sort();
        });



    };


    return new Anniversary();
})
;