/**
 * Created by Ratan on 4.5.14.
 */

/**
 *
 * @param {communicator} communicator
 * @param name
 * @param id
 * @param author
 */
function project(communicator, name, id, author) {

    name = typeof name !== 'undefined' ? name : "";
    id = typeof id !== 'undefined' ? id : "";
    author = typeof author !== 'undefined' ? author : "";
    this.communicator = communicator;
    this.data =
    {
        name: name,
        id: id,
        author: author,
        standards: {
            HTML: null,
            CSS: null
        },
        prefixes: {
            webkit: true,
            moz: true,
            o: true,
            ms: true
        }
    };
}

project.prototype = {
    save: function () {
        this.communicator.save(this.data, 'project');
    },
    IsSetUp: function () {
        if (this.data.name == '')
            return false;
        if (this.data.standards.css == '')
            return false;
        if (this.data.standards.html == '')
            return false;
        return true;
    }
};