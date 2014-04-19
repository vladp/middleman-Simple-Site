source "https://rubygems.org"

gem "rake"
gem "rack"

gem "sass"
gem 'compass', '>= 0.beta'                                 
gem "middleman", ">= 3.3"
gem "middleman-blog"
gem "middleman-livereload", "~> 3.1.0"


# gem "middleman-deploy"
# gem "middleman-favicon-maker", "~> 3.2"

gem "susy", ">= 2"

# Font Awesome icons
gem "font-awesome-middleman"

# critical to include :require => false
# otherwise the sass compiler will fail with various errors
# that it cannot find assets (such as fonts)
# that's because without this flag the bootstrap gem assumes
# it is being invoked form rails.. But middleman has its own
# asset pipeline. this took me about 4 hours
# http://middlemanapp.com/basics/asset-pipeline/

gem "bootstrap-sass", "~> 3.1.1", :require => false


# Javascript
# gem "therubyracer"
# gem "therubyrhino"

### Windows specific gems ###
platforms :mswin, :mingw do
   gem "wdm" # Windows Directory Monitor
end
