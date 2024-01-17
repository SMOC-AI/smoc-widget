# Smoc Widget

Smoc Widget is a JavaScript library for embedding the Smoc bot on a web page:

![button](./docs/button.jpeg | width=100)

Clicking the button will open the bot:

![iframe](./docs/iframe.jpeg | width=100)

## Installation

Paste the `<script>` tag below into the pages where you want to enable the Smoc bot. 
We recommend you add this right before the </head> tag.

```html
<!-- Smoc Bot -->
<script>
    (function(d, w, c) {
        w.SmocConversationTemplateId = 'YOUR-CONVERSATION-TEMPLATE-ID';
        w.Color = "#ffeeed"
        w.Shape = "round" // or "square"
        w.Position = "bottom-left" // or "bottom-right"
        w[c] = w[c] || function() {
            (w[c].q = w[c].q || []).push(arguments);
        };
        var s = d.createElement('script');
        s.async = true;
        s.src = 'https://unpkg.com/smocai/smoc-widget@1.0.0';
        if (d.head) d.head.appendChild(s);
    })(document, window, 'SmocWidget');
</script>
```

You'll find your `SmocConversationTemplateId` inside [Smoc Console](https://console.smoc.ai/).

## Configuration

You can customize various visual attributes of the widget:

* Color
* Shape (round or square)
* Position (bottom right, top right etc)
