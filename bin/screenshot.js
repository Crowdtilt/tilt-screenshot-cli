var page = require('webpage').create();
var system = require('system');

if (system.args.length === 1) {
  console.log('Usage: screenshot.js <url> <img>');
  phantom.exit();
}

var url, image, isMobile;

var args = system.args.slice(1);
if (args[0] === '--mobile') {
  isMobile = true;
  page.settings.userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_2 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A4449d Safari/9537.53';
  page.viewportSize = {
    width: 320,
    height: 568,
  };
  args = args.slice(1);
} else {
  page.viewportSize = {
    width: 1024,
    height: 768,
  };
}

url = args[0];
image = args[1] ? args[1] : (
  'screenshot-' + Number(new Date()) + (isMobile ? '-mobile' : '') + '.png'
);

var t = Date.now();

console.log('Loading ' + url);
page.open(url, function(status) {
  if (status !== 'success') {
    console.log('Failed to load ' + url);
  } else {
    console.log('Loaded ' + url + ' in ' + (Date.now() - t) + ' ms');
    page.render(image);
    console.log('Saved screenshot to ./' + image);
  }
  phantom.exit();
});

