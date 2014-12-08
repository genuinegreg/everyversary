// config local storage
angular.module('everyversary')
    .config(function (localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('everyversary');
        localStorageServiceProvider
            .setStorageCookie(0, '/');
    });

// actual service
angular.module('everyversary').service('DateStore', ['localStorageService', function (localStorageService) {

    function DateStore() {
        this._restoreDates();
    }

    /**
     * Add a date in storage
     * @param date
     * @param label
     */
    DateStore.prototype.add = function (name, date, label) {

        console.log(this.dates);

        this.dates.push(
            {
                name: name,
                date: date,
                label: label
            }
        );


        this._persistDates();

    };

    /**
     * Remove a dates from storage
     * @param index
     */
    DateStore.prototype.remove = function (index) {
        this.dates.pop(index);
        this._persistDates()
    };

    /**
     * list all dates
     */
    DateStore.prototype.getDates = function () {
        return this.dates;
    };

    /**
     * Sage dates from memony to localStrorage
     * @private
     */
    DateStore.prototype._persistDates = function () {
        localStorageService.set('dates', this.dates);
    };

    /**
     * Restore dates from localStorage to memory
     * @private
     */
    DateStore.prototype._restoreDates = function () {

        this.dates = localStorageService.get('dates').map(function(date) {

            return {
                label: date.label,
                date: new Date(date.date),
                name: date.name
            }
        });



        console.log(this.dates);

        if (!(this.dates instanceof Array)) {
            this.dates = [];
            this._persistDates();
        }
    };

    return new DateStore();
}]);