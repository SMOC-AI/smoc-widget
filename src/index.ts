function createChatIcon(hexColor: string): HTMLElement {
    const iconElement = document.createElement('div');
    iconElement.id = 'smoc-chat-icon';
    // Additional code to set up the icon, including setting the color
    return iconElement;
}

console.log(window.SmocConfig);
// Add the icon to the document body
document.body.appendChild(createChatIcon('#HEX_COLOR'));
