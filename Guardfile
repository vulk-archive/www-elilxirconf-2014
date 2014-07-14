# CONCAT
# guard :concat, type: "js", files: %w(source/scripts/libraries/*), input_dir: "source/scripts/libraries", output: "source/scripts/libs.js"
# guard :concat, type: "css", files: %w(), input_dir: "public/css", output: "public/css/all"


# COPY
# guard :copy, :from => 'source/scripts/', :to => 'public/scripts/'
guard :copy, :from => 'source/scripts/vendor', :to => 'public/scripts/vendor'
guard :copy, :from => 'source/scripts/libraries', :to => 'public/scripts/libraries'
guard :copy, :from => 'source/fonts', :to => 'public/fonts'

# JSHINT
guard :jshintrb do
  watch(%r{^source/scripts/.+.js})
end


# UGLIFY
guard 'uglify', :input => 'source/scripts/elixirconf.js', :output => "public/scripts/elixirconf.js" do
  watch (%r{source/scripts/elixirconf.js})
end
# guard 'uglify', :input => 'source/scripts/libs.js', :output => "public/scripts/libs.js" do
#   watch (%r{source/scripts/libs.js})
# end


# LIVERELOAD
guard 'livereload' do
  # watch(%r{source/(views|templates|layouts)/.+\.(erb|haml|slim)$})
  # watch(%r{app/helpers/.+\.rb})
  watch(%r{public/.+\.(css|js|html|jpg|png|gif)})
  # watch(%r{config/locales/.+\.yml})
  # Rails Assets Pipeline
  # watch(%r{(app|vendor)(/assets/\w+/(.+\.(css|js|html|png|jpg))).*}) { |m| "/assets/#{m[3]}" }
end