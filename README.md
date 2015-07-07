
#### To-Do 
- Scaffold App Files (see App File Lists)
- Link files through State Provider
- Style side nav
- create services files 
- link up services 
- hard code api data to app
    * User
    * Market 
    * Jobs List
- Link App with API 
    * User
    * Market 
    * Jobs List
- Add Map dependencies if needed [LeafletJS](https://github.com/tombatossals/angular-leaflet-directive)
    * Create Map Directives 
    * Create Location Factory 
- My location button
    * center map
    * ngCordova Geolookup 
    * situate code in factory
- Remove excess files 
- fix "back button" issue when navigating around marketplace
- link user / settings to the rest of app 
- header search bar for my jobs and marketplace 
- functions: 
    * ~~takeJob~~
    * watchJob
- stying for watched jobs in My Jobs
- time till pickup filter 
- remove back arrow everywhere except job details.. 

## App File Lists

#### Views 
- Main menu 
- Dashboard 
- Marketplace
    * Details 
- My Jobs
- Settings
- About
- Feedback 

#### Controllers  
- Main menu 
- Dashboard 
- Marketplace
    * Details 
- My Jobs
- Settings
- About
- Feedback 

#### Services && Factories
- Data service (temporary) 
- Jobs service 

### After git clone
Since all these files are excluded from git, you need to install all of them when you start with a fresh clone of your project. In order to do so, run the following commands in that order:
```sh
npm install # installs all node modules including cordova, gulp and all that
bower install # install all bower components including angular, ionic, ng-cordova, ...
gulp --cordova 'prepare' # install all cordova platforms and plugins from the config.xml
```

#### File structure
<pre>
└──  app/           - your application folder
│   └──  bower_components/    - local installation of bower packages
│   └──  main/                - ---main module---
│   │   ├──  assets/          - assets: fonts, images, translation, etc... goes here
│   │   ├──  constants/       - angular constants
│   │   ├──  controllers/     - angular controllers
│   │   ├──  directives/      - angular directives
│   │   ├──  filters/         - angular filters
│   │   ├──  services/        - angular services
│   │   ├──  styles/          - scss styles
│   │   ├──  templates/       - angular templates
│   │   └──  main.js          - angular module definition, routing etc...
│   └──  anotherModule/       - ---another  module---
│   │   ├──  ...
│   ├──  app.js               - application module, includes main module, ionic, ui-router etc ...
│   └──  index.html           - angular entry point, injects: app files, bower files, fonts,  ...
├──  gulp_tasks/    - gulp tasks
├──  hooks/         - cordova hooks
├──  nodes_modules/ - local installation of node modules
├──  platforms/     - cordova platforms
├──  plugins/       - corodova plugins
├──  www/           - your gulp build goes here, cordova starts building from here
├──  .bowerrc       - bower configuration
├──  .editorconfig  - editor configuration
├──  .gitattributes - git's attribute configuration
├──  .gitignore     - git's ignore configuration
├──  .jscsrc        - jscs configuration
├──  .jshintignore  - jshint ignore
├──  .jshintrc      - jshint configuration
├──  .travis.yml    - travis continuous integration configuration
├──  .yo-rc.json    - yeoman's .yo-rc.json
├──  bower.json     - bower dependencies
├──  config.xml     - cordova's config.xml
├──  gulpfile.js    - entry point to all gulp tasks
├──  jenkins.sh     - shell script for jenkins continuous integration
├──  package.json   - node dependencies configuration
├──  README.md      - the generator's README.md
</pre>