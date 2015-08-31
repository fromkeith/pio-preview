## PIO-Preview
This project aims to make previewing Print.io products much easier. The hope is that if they can see their photo on a product it will be easier to convert to a sale.

This is an angularjs project.

It is still a work in progress, and is not supported by Print.io.

See some examples at: http://fromkeith.github.io/pio-preview/

## Installation
```
    npm install pio-preview
```

## Use
Include this angular module:
```
    require('pio-preview');
```
Then add the desired directive to your page. Use 'pp-src' to specify the source image.
```
    <pp-mousepad pp-src="test_image.jpg"></pp-mousepad>
```
Include the css to your page as well.

Done!

### Supported Directives:
* **pp-mousepad**
    * pp-src
        * Specify the source image.
* **pp-framed**
    * pp-src
        * Specify the source image.
* **pp-phone**
    * pp-src
        * Specify the source image.
    * pp-type
        * The phone type to load. Currently supported:
            * ['iPhone4S', 'iPhone5C', 'iPhone5', 'GalaxyS2', 'GalaxyS3', 'GalaxyS4', 'GalaxyNote', 'GalaxyNote2', 'GalaxyNote3', 'HTCOne']

## License
MIT