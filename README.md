# Simpleben

Simpleben is a lightweight JavaScript utility library for common DOM manipulation and AJAX operations.

## Installation

You can install Simpleben via npm:

```bash
npm install simpleben
```

## Usage

Import Simpleben in your project:

```javascript
const Simpleben = require('simpleben');
```

## Methods

`element(el)`

Selects a single element.

```javascript
const element = Simpleben.element('#yourElement');
```

`elements(el)`

Selects multiple elements.

```javascript
const elements = Simpleben.elements('.yourElements');
```

`on(el, event, handler)`

Adds an event listener to an element.

```javascript

Simpleben.on('#yourButton', 'click', () => {
    console.log('Button clicked');
});
```

`addClass(el, className)`

Adds a class to an element.

```javascript
Simpleben.addClass('#yourElement', 'new-class');
```

`remvoeClass(el, className)`

Removes a class from an element.

```javascript
Simpleben.removeClass('#yourElement', 'old-class');
```

`toggleClass(el, className)`

Toggles a class on an element.

```javascript
Simpleben.toggleClass('#yourElement', 'active');
```

`setText(el, text)`

Sets the text content of an element.

```javascript
Simpleben.setText('#yourElement', 'Hello, world!');
```

`setHTML(el, html)`

Sets the HTML content of an element.

```javascript
Simpleben.setHTML('#yourElement', '<strong>Hello, world</strong>');
```

`addText(el, text)`

Adds text content to an element.

```javascript
Simpleben.addText('#yourElement', 'More text.');
```

`addHTML(el, html)`

Adds HTML content to an element.

```javascript
Simpleben.addHTML('#yourElement', '<em>More HTML.</em>');
```

`getAttr(el, attr)`

Gets an attribute of an element.

```javascript
const value = Simpleben.getAttr('#yourElement', 'data-test');
```

`setAttr(el, attr, value)`

Sets an attribute of an element.

```javascript
Simpleben.setAttr('#yourElement', 'data-test', 'value');
```

`removeElement(el)`

Removes the element from DOM.

```javascript
Simpleben.removeElement('#yourElement');
```

`createElement(tag, parentSelector)`

Creates a new element and appends it to a parent element.

```javascript
const newElement = Simpleben.createElement('div', '#parentElement');
```

`getValue(el)`

Gets the value of a form element.

```javascript
const value = Simpleben.getValue('#yourInput');
```

`setValue(el, value)`

Sets the value of a form element.

```javascript
Simpleben.setValue('#yourInput', 'New value');
```

`css(el, styles)`

Gets or sets CSS styles of an element.

```javascript
Simpleben.css('#yourElement', { color: 'red', backgroundColor: 'yellow' });
```

`ajaxGet(url, callback)`

Performs an AJAX GET Request.

```javascript
Simpleben.ajaxGet('https://jsonplaceholder.typicode.com/posts/1', (error, data) => {
    if (error) {
        console.error('Error fetching data:', error);
    } else {
        console.log('Data fetched', data);
    }
});
```

`ajaxPost(url, data, callback)`

Performs an AJAX POST request.

```javascript
Simpleben.ajaxPost('https://jsonplaceholder.typicode.com/posts', {title: 'foo', body: 'bar', userId: 1}, (error, data) => {
    if (error) {
        console.error('Error posting data', error);
    } else {
        console.log('Data posted', data);
    }
});
```

## License

MIT