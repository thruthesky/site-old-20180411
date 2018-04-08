# Site


# TODO
* Language Translation by `fire.setLanguage('ko|jp|en')`.
* 4 language support by default. English, Japanese, Korean, Chinese.
* move installation page to `src/app/sites/katalkenglish/installation`
* 2 Layout for each domain. one for `desktop`, the other for `mobile`.
* Save company information into firestore settings documents.
  And display it in each sub domain.
* Do registration and profile update. Student and Teachers are share this page.
* Do LMS functionality.
* Create forum with realtime chat functionality.
* Do design.





# Work Environment

Save these domains in `hosts` for test.

* www.ontue.org, ontue.org
* www.withcenter.org, withcenter.org
* www.katalkenglish.org, katalkenglish.org abc.katalkenglish.org def.katalkenglish.org test.katalkenglish.org


## Run

````
$ npm run s
$ ng s --disable-host-check
````



# Folder structure

## Pages


### sites folder.

There are 3 different domains(themes) under `src/app/sites` folder for each part of business role.

1. `ontue` for teacher for teacher site.
2. `withcenter` for franchise site.
3. `katalkenglish` for student site.

Each site folder has its own components folder for header and footer and other components design.

* `src/app/sites/{site-name}/components`

And all of site has `{site}-home` folder to display its front page.

* `src/app/sites/{site-name}/{site-name-page-name}`. Note that `pages` path is missed under theme folder.

### Pages in site folder.

Since each domain has different contents, they should have its own pages.

For instance, katalkenglish.com( student site ) and ontue.com ( teacher site ) has completely diffent content on help page, so, each of them should have a different home page folder.

## Shared Pages

* Register page and Profile update page have some common for each site.
  If you want to create a page that is shared by other sites, then the page must be saved under `src/app/pages` folder.
  


## Shared Components

* Share components must be saved under `src/app/components`



## Components

* All shared components should be saved in `src/app/components`.

## Interface

* All shared interfaces should be saved in `src/app/interfaces`.

## Modules. 3rd party modules.

* All shared modules, especially 3rd party modules, should be saved in `src/app/modules`.

## Providers

* All providers that is depending on the app should be svaed in `src/app/providers`.



# Route and Lazy Loading

* Do not put any route on submodule. Only on app module has routings.

* All page must be lazy loaded. This means all page folder must be a module and registered as a route.
  Except header & footer templates which is needed to render layout. @see #Layout



# Layout for each site.

* Each site has its own header, footer and possibly side menus and more.
* Layout is designed in `app.component.html` for each site.
  It imports each site's `header`, `footer` components.
  This means, each site's header & footer is not dynamically loaded. These are loaded on app booting.

* Each site's header, footer components must be saved under that site's components folder as a module and will be imported by `app module` and used in `app.component.html` to display the layout.

* You can have more than one(1) layout for a site IF you are going to edit `app.component.html`.
 * Layout of `www.katalkenglish.com` for desktop.
 * Layout of `www.katalkenglish.com` for mobile.


# FlowChart

## Domain Navigation

* The app decide which `site` to use based on the domain user accesses/visits.
 * For instance, `wwww.ontue.com` domain will open the page `src/app/sites/ontue/ontue-home/ontue-home.page`
 * This navigation is done by the combination of `app-routing.modules.ts` and `app.component.ts`.


# Boostrap CSS Version 4.0 Support

* @see `themes/bootstrap-custom.scss`.
