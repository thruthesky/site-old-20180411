# Site


# TODO
* Language Translation by `fire.setLanguage('ko')`.
 * Update `setLanguage('lang-code', 'JSON URL')` so it can load language from outsite or it can specify the path of json on the project.
* move installation page to `src/app/sites/katalkenglish/installation`
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



# Lazy Loading

* All page must be lazy loaded. This means all page folder must be a module and registered as a route.



# Layout for each site.

* Each site has its own header, footer and possibly side menus and more.
* Layout is set in `app.component.html` for each domain.
  In this template, it includes each site's layout assets.
* Each site's header, footer components must be saved under that site's folder as a module and will be imported by `app module` and used in `app.component.html` to display the layout.





# FlowChart

## Domain Navigation

* The app decide which `site` to use based on the domain user accesses/visits.
 * For instance, `wwww.ontue.com` domain will open the page `src/app/sites/ontue/ontue-home/ontue-home.page`
 * This navigation is done by the combination of `app-routing.modules.ts` and `app.component.ts`.


# Boostrap CSS Version 4.0 Support

* @see `theme/bootstrap-copy.scss` for full documentation.
