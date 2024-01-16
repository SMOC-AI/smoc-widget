# Somc Widget Architecture

The Smoc Widget JavaScript consists of a single JavaScript file that is less than 50Kb.
The small size is to ensure it loads fast on devices with low bandwidth.

The Smoc Widget JavaScript has no external library dependencies.

## How it works

The installation script (see [README.md](README.md)) inserts another `<script>` tag into the DOM
that loads the `smoc-widget` JavaScript.

Once `smoc-widget` is loaded, it adds a `<div id="smoc-widget">` element as the last child of the `<body>` element.
The `#smoc-widget` element displays a button in the configured position (for example bottom left).

To do this, it uses a [z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index) with a high value and a fixed position.
This is done with inline CSS styles.

The widget has [event handlers](https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers) that will show/hide the chat UI.
The Chat UI itself is displayed in an `<iframe>` and loaded from an external URL. A small "chrome" is added around the `<iframe>`
with an `x` button at the top for minimizing the widget.

