document.addEventListener('DOMContentLoaded', function() {
    function createChatIcon() {
        const iconElement = document.createElement('div');
        iconElement.id = 'smoc-chat-icon';

        
        const hexColor = (window as any).Color || '#FFFFFF'; 
        iconElement.style.backgroundColor = hexColor;

       
        iconElement.style.position = 'fixed';
        const position = (window as any).Position || 'bottom-right'; 
        if (position === 'bottom-left') {
            iconElement.style.bottom = '64px';
            iconElement.style.left = '64px';
        } else { 
            iconElement.style.bottom = '64px';
            iconElement.style.right = '64px';
        }

        return iconElement;
    }

    document.body.appendChild(createChatIcon());
});
