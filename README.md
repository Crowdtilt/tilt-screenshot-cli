# Taking a Screenshot (PhantomJS)

Often it is beneficial to take a screenshot of a work in progress to share with other team members (product).  This is possible using a phantomjs script `bin/screenshot.js`.

## Taking a Desktop Screenshot

```
$ phantomjs bin/screenshot.js "https://www.tilt.com/users/jabeshara"
Loading https://www.tilt.com/users/jabeshara
Loaded https://www.tilt.com/users/jabeshara in 3087 ms
Saved screenshot to ./screenshot-1447180571666.png
```

## Taking a Mobile Screenshot

```
$ phantomjs bin/screenshot.js --mobile "https://www.tilt.com/users/jabeshara"
Loading https://www.tilt.com/users/jabeshara
Loaded https://www.tilt.com/users/jabeshara in 2812 ms
Saved screenshot to ./screenshot-1447180666821-mobile.png
```

## Taking a Screenshot of Your Development Environment

To take a screenshot of your development environment, you may need to specify `--ignore-ssl-errors=true` when running the script.

```
$ phantomjs --ignore-ssl-errors=true bin/screenshot.js --mobile "https://www.localhost:4443/tilts/mareks-bike-tiltinsurance"
Loading https://www.localhost:4443/tilts/mareks-bike-tiltinsurance
Loaded https://www.localhost:4443/tilts/mareks-bike-tiltinsurance in 5109 ms
Saved screenshot to ./screenshot-1447179877001-mobile.png
```
