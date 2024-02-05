"use strict";
document.addEventListener('DOMContentLoaded', function () {
    function createChatIcon() {
        const iconElement = document.createElement('div');
        iconElement.id = 'smoc-chat-icon';
        // Create an img element for the icon
        const iconImg = document.createElement('img');
        iconImg.src = './public/icons8-bubble-chat-25.png'; // Adjust the path to the image in the "public" directory
        iconImg.style.width = '100%'; // Use 100% to ensure it fills the container div
        iconImg.style.height = 'auto'; // Maintain aspect ratio
        // Access custom properties using type assertion
        const hexColor = window.Color || '#ffeeed'; // Default color if undefined
        const shape = window.Shape || 'round'; // Default shape if undefined
        const position = window.Position || 'bottom-right'; // Default position
        iconElement.style.backgroundColor = hexColor;
        if (shape === 'round') {
            iconElement.style.borderRadius = '50%';
        }
        // Set position
        iconElement.style.position = 'fixed'; // Use fixed positioning to place the icon
        if (position === 'bottom-left') {
            iconElement.style.bottom = '64px';
            iconElement.style.left = '64px';
        }
        else { // Default to bottom-right
            iconElement.style.bottom = '64px';
            iconElement.style.right = '64px';
        }
        // Append the icon image to the iconElement
        iconElement.appendChild(iconImg);
        return iconElement;
    }
    document.body.appendChild(createChatIcon());
});
//# sourceMappingURL=index.js.map