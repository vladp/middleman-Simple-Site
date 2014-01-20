
## What is it?

A template to be used by middleman to generate static web sites, or
quickly create a prototype for a future dynamic web site.


 It features [HTML5 Boilerplate](http://html5boilerplate.com/), [Haml](http://haml-lang.com/), [Sass](http://sass-lang.com/), [Compass](http://compass-style.org/), an alpha release of Susy-next (the next generation of Susy) [Susy](http://susy.oddbird.net/) grid system,

 I have simply taken an existing non-middleman temlate [Simple-Site](https://github.com/crofty/Simple-Site) by James Croft and combined it with an excellent middleman starter template [Amicus](https://github.com/nathos/amicus) by Nathan Henderson.

 During the conversion, I upgraded the applicassion.scss (from Simple-Site) to be compatible with the latest alpha release of susy next (converted use-grid to with-layout mixins  )

I had also included the latest 3x version of [Bootstrap-sass](https://github.com/twbs/bootstrap-sass)  and generated bootstrap-custom.scss to allow to include only specific stylesheets 
 

Take a look at screenshot.jpg to see how it looks -- it is essentialy
a single page application layout template


## It can be Responsive!
The Susy-next grid system, as you know is a very powerful styling mechanism that allows a developer to define how the site should look depending on the given browser window size

I do not have currently the 'Susy-breakpoints' enabled to switch layouts in application.scss as it is done in Amicus. But will add that use case over time.

The bootstrap navigation menue is set to be responsive. As you change
the screen size the menu changes to be more friendly for phone/tablet
screens


## How do I use it?

Start by installing [Bundler](http://gembundler.com/), if you don't already have it:

```
gem install bundler

gem install middleman
```

Then just download the [latest source](https://github.com/vladp/middleman-SimpleSIte/archives/master) or if you prefer, clone the repository down to your local machine:

```
git clone http://github.com/vladp/middleman-Simple-Site.git my_new_project
```

Finally, ``` cd my_new_project ``` and do a ```bundle install --binstubs ./bin  --path vendor/bundle``` to install the required gems



Use ```./bin/middleman``` to do your live development and ```./bin/middleman build``` to render your static file output to the ```/build/``` directory.

For full Middleman documentation, visit the [Middleman website](http://middlemanapp.com/).


## Middleman Template

Middleman now supports project templates. To use middleman-Simple-Site as a template, clone the Git repository into ```~/.middleman```, like so:

```git clone http://github.com/vladp/middleman-Simple-Site.git ~/.middleman/middleman-Simple-Site```

then use the new template argument for the ```middleman init``` command:

```middleman init my_new_project --template=middleman-Simple-Site```




## What other cool stuff is in here ?

This paragraph it taken verbatim from Amicus

The default [Haml](http://haml-lang.com/) layout is based on [HTML5 Boilerplate](http://html5boilerplate.com/), and is fully commented. (Don't worry, those comments aren't rendered out to your build directory)

[Susy](http://susy.oddbird.net/) is the default grid system.

An included Ruby helper method to generate image placeholders, powered by [Holder.js](http://imsky.github.com/holder/).


## Comments & Suggestions?

Send me a [message](https://github.com/vladp) or submit an [issue](https://github.com/vladp/middleman-Simple-Site/issues). Thanks!


## License

Following the lead of [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate) here...

Copyrights of Amicus
[Amicus License] (https://github.com/nathos/amicus/blob/master/LICENSE.md)

[Simple-Site] (https://github.com/crofty/Simple-Site)

Major components:

* HTML5 Boilerplate: MIT license
* Normalize.css: MIT license
* Modernizr: MIT/BSD license
* jQuery: MIT/GPL license
* Susy: MIT license
* Bootstrap SASS: MIT license

Everything else:

* MIT license -- see LICENSE.md
