/**
 * Created by Ratan on 14.4.14.
 */

var DEB = true;
var blink = function (log) {
    if (DEB)
        console.log(log);
};

var Resources = null;

App = null;
$(document).ready(function () {
    Resources = new resources((function(){
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': 'API/templates.php',
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        blink('vracena data ' + json);
        return json;
    })());
    if(Resources.hbss==null) blink('jeste nenacteno');
    Resources.LoadHBS();
});
window.App = Ember.Application.create();
blink('DEBUG MODE ACTIVATE');