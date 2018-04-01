# Site


# TODO

* move installation page to `src/app/pages/themes/katalkenglish/installation`
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


### themes folder.

There are 3 themes under `src/app/pages/themes` folder for each part of business role.

1. `ontue` theme for teacher for teacher site.
2. `withcenter` theme for franchise site.
3. `katalkenglish` theme for student site.

Each theme folder has its own components folder for header and footer and other components design.

* `src/app/pages/themes/{theme-name}/components`

And all of theme has `home` folder to display its front page.

* `src/app/pages/themes/{theme-name}/{theme-name-page-name}`. Note that `pages` path is missed under theme folder.

### Pages in themes folder.

Since each theme has different contents, themes should have its own pages.

For instance, student and teacher has completely diffent content on help page, so, each theme should have a different home folder in each theme.

* Register page and Profile update page may share between themes.
* Installation page should be only under `katalkenglish` theme.




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
