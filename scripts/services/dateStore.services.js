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
    DateStore.prototype.add = function (date, label) {

        this.dates.push(
            {
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

        console.log('dates', this.dates.length);

        return this.dates;
    };

    /**
     * Sage dates from memony to localStrorage
     * @private
     */
    DateStore.prototype._persistDates = function () {
        localStorageService.set('dates', JSON.stringify(this.dates));
    };

    /**
     * Restore dates from localStorage to memory
     * @private
     */
    DateStore.prototype._restoreDates = function () {
        try {
            this.dates = JSON.parse(localStorageService.set('dates'));
        }
        catch (e) {
            this.dates = [];
        }
    };

    return new DateStore();
}]);