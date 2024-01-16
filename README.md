# Smoc Widget

Smoc Widget is a JavaScript library that displays a Smoc bot.

![example](./docs/example.png)

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
