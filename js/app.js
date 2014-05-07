var Communicator = new communicator("API", 5000);

App.NewRoute = Ember.Route.extend({
    model: function () {
        var a = new project(Communicator, 'ahoja', null, null);
        return {
            Project: a
        };
    }
});

App.NewController = Ember.ObjectController.extend({
    new_project: null
});

App.NewBaseController = Ember.ObjectController.extend({
    actions: {
        check: function () {
            if (this.get('model.Project').data.name != "" && this.get('model.Project').data.name != null) {
                this.transitionTo('new.standards');
            }
        }
    }
});

App.NewStandardsRoute = Ember.Route.extend({
    model: function () {
        return {
            csss: [
                {name: 'CSS 2', version: '2'     },
                {name: 'CSS 3', version: '3'     }
            ],
            htmls: [
                {name: 'HTML 4.1', version: '4.1'   },
                {name: 'HTML 5', version: '5'     }
            ]
        }
    }
});

App.NewAdvancedController = Ember.ObjectController.extend({
    webkit: 'Prefixy pro webkit (Chrome):',
    moz: 'Prefixy pro Mozila Firefox:',
    opera: 'Prefixy pro Operu:',
    ms: 'Prefixy pro Internet Explorer:',
    actions: {
        finish: function () {
            if (this.get('model.Project').IsSetUp()) {
                this.get('model.Project').save();
            }
        }
    }
});


App.ProjectsRoute = Ember.Route.extend({
    model: function () {
        return Ember.$.getJSON('API/Projects.php');
    }
});

App.ProjectRoute = Ember.Route.extend({
    model: function (param) {
        return Ember.$.getJSON('API/Project.php?id=' + param.project_id);
    }
});