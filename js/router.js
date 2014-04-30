/**
 * Created by Ratan on 6.4.14.
 */

App.Router.map(function() {
    this.resource('index', { path: '/' });
    this.resource('new',function(){
        this.route('base', {path: '/base'});
        this.route('standards',{path:'/standards'});
        this.route('advanced',{path:'/advanced'});
    });
    this.resource('projects');
    this.resource('project', {path: '/project/:project_id'});
    this.resource('settings');
    this.resource('about', {path: '/about'});
});