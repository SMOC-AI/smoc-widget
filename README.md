[![Build](https://github.com/SMOC-AI/smoc-widget/actions/workflows/build.yaml/badge.svg)](https://github.com/SMOC-AI/smoc-widget/actions/workflows/build.yaml)

# Smoc Widget

Smoc Widget is a JavaScript library for embedding the Smoc bot on a web page:

![button](./docs/button.jpeg)

Clicking the button will open the bot:

![iframe](./docs/iframe.jpeg)

## Installation

Paste the `<script>` tag below into the pages where you want to enable the Smoc bot. 
We recommend you add this right before the </head> tag.

```html
<!-- Smoc Bot -->
<script>
    (function(d, w) {
        w.SmocConfig = {
            conversationTemplate: 'YOUR-CONVERSATION-TEMPLATE-ID',
            color: '#ffeeed',
            shape: 'round', // or 'square'
            position: 'bottom-left' // or 'bottom-right'
        }
        var s = d.createElement('script');
        s.async = true;
        s.src = 'https://unpkg.com/smocai/smoc-widget@1.0.0';
        if (d.head) d.head.appendChild(s);
    })(document, window);
</script>
```

You'll find your `SmocConversationTemplateId` inside [Smoc Console](https://console.smoc.ai/).

## Configuration

You can customize various visual attributes of the widget:

* Color
* Shape (round or square)
* Position (bottom right, top right etc)
