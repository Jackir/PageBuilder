var project = {
    name: '',
    author: '',
    standards: {
        css: '3',
        html: '5'
    },
    prefixes: {
        webkit: true,
        moz: true,
        o: true,
        ms: true
    }
};

var ProjectIsSetUp = function () {
    if (project.name == '')
        return false;
    if (project.standards.css == '')
        return false;
    if (project.standards.html == '')
        return false;
    return true;
};

App.NewRoute = Ember.Route.extend({
    model: function () {
        return project;
    },
    actions: {
        check: function () {
            blink('Neni jmeno');
            if (project.get('name') == '') {
                blink('Neni jmeno');
            }
        }
    }
});

App.NewController = Ember.ObjectController.extend({
});

App.NewBaseController = Ember.ObjectController.extend({
    actions: {
        check: function () {
            blink('Neni jmeno');
            if (project.get('name') == '') {
                blink('Neni jmeno');
            }
        }
    }
});

App.NewStandardsController = Ember.ObjectController.extend({
    csss: [
        {name: 'CSS 2', version: '2'     },
        {name: 'CSS 3', version: '3'     }
    ],
    htmls: [
        {name: 'HTML 4.1', version: '4.1'   },
        {name: 'HTML 5', version: '5'     }
    ],
});

App.NewAdvancedController = Ember.ObjectController.extend({
    webkit: 'Prefixy pro webkit (Chrome):',
    moz: 'Prefixy pro Mozila Firefox:',
    opera: 'Prefixy pro Operu:',
    ms: 'Prefixy pro Internet Explorer:',
    actions: {
        finish: function () {
            if (ProjectIsSetUp()) {
                //TODO: odeslat data DB
                //this.transitionTo('project');
                blink(project.name);
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
    model: function(param) {
        return Ember.$.getJSON('API/Project.php?id='+param.project_id);
    }
});