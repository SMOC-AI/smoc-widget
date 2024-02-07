// Create the outer container for the widget
const container = document.createElement('div');
container.style.position = 'fixed';

// Place the widget in the bottom right corner
container.style.bottom = '30px';
container.style.right = '30px';

// TODO: Rather than just displaying the config, draw an icon in the bottom right corner
container.innerHTML = JSON.stringify(window.SmocConfig);

// Add the container as the last child of the <body> element.
document.body.appendChild(container);

const foo = 'bar';
foo = 1;
console.log(foo);
