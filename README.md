# Site


# TODO

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


## Components

* Register page and Profile update page have some common code. If you want to create a componet and share between ontue.com and katalkenglish.com, you will need to make it as component.




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
