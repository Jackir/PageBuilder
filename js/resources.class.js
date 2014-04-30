/**
 * Created by Ratan on 24.4.14.
 */
function resources(hbss){
    blink(hbss);
    this.hbss=hbss;
}

resources.prototype.LoadHBS = function(){
    $(this.hbss).each(function () {
        var a = this.toString();
        $.ajax({
            async: false,
            url: "resources/templates/" + this + ".hbs",
            cache: true,
            success: function (retData) {
                Ember.TEMPLATES[a] = Ember.Handlebars.compile(retData);
            }
        });
    });
};