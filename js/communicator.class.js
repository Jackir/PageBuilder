/**
 * Created by Ratan on 5.5.14.
 */

function communicator(path, frequency) {
    this.APIpath = typeof path !== 'undefined' ? path : 'API';
    this.queue = null;
    this.frequency = typeof frequency !== 'undefined' ? frequency : null;
};

communicator.prototype = {
    /**
     * Save data to database, if there isn't connection save it to queue and wait.
     * @param data JSONarray
     * @param entity name of saved entity
     * @returns {*}
     */
    save: function (data, entity) {
        return $.ajax({
            async: false,
            type: 'POST',
            url: this.APIpath + "/API.php?" + entity,
            cache: false,
            data: data,
            dataType: 'json',
        })
            .done(function (retData) {
                alert(entity + " ulozen.");
                communicator.prototype.pull();
            })
            .fail(function () {
                this.push(data, entity);
                this.checkQueue();
            });
    },
    checkQueue: function () {
        setTimeout(function () {
            this.checkQueue();
        }, this.frequency);

        if (this.queue != null) {

        }
    },
    push: function (data, entity) {

    },
    pull: function () {

    }
};