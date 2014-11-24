Package.describe({
  summary: "Keeps track of device rotation and screen resolution and updates the html tag's class attribute and Meteor.responsive.* attibutes."
});

Package.on_use(function (api, where) {
  //if(api.export) { api.export('responsiveUiHelper'); }

  api.use(['underscore', 'coffeescript', 'meteor', 'jquery'], 'client');
  api.add_files('layoutEngine.js', 'client');
  api.add_files('responsive.coffee', 'client');

});
