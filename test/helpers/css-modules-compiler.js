let hook = require('css-modules-require-hook');
let sass = require('node-sass');

hook({
  extensions: ['.scss'],
  preprocessCss: function (css) {
    let result = sass.renderSync({
      data: css
    });

    return result.css;
  }
});