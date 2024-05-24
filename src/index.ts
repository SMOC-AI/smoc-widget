const svgContent: string = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 122.879 102.401" enable-background="new 0 0 122.879 102.401" xml:space="preserve">
    <g>
        <path d="M46.736,0H30.311H16.698C12.083,0,8.144,1.619,4.881,4.881C1.619,8.144,0,12.083,0,16.698v29.313 c0,4.639,1.619,8.579,4.881,11.841c3.262,3.238,7.202,4.882,11.817,4.882c4.301,0,8.603,0,12.904,0 c-0.942,3.673-2.15,7.178-3.624,10.463c-1.45,3.311-3.891,6.477-7.298,9.497c6.525-1.691,12.325-4.229,17.423-7.587 c5.099-3.335,9.497-7.468,13.17-12.373c3.691,0,7.384,0,11.075,0c4.615,0,8.554-1.644,11.816-4.882 c3.264-3.262,4.883-7.202,4.883-11.841V16.698c0-4.615-1.619-8.555-4.883-11.817C68.902,1.619,64.963,0,60.348,0H46.736L46.736,0z M122.879,33.663v29.313c0,2.667-0.475,5.159-1.432,7.479c-0.953,2.314-2.375,4.416-4.266,6.308 c-0.822,0.814-1.684,1.545-2.584,2.188c-0.928,0.66-1.873,1.221-2.84,1.681c-0.051,0.024-0.104,0.047-0.156,0.068 c-1.236,0.575-2.525,1.009-3.863,1.299c-1.389,0.302-2.824,0.453-4.311,0.453h-8.734h-0.018h-0.018h-0.018h-0.016h-0.467 c0.186,0.59,0.379,1.175,0.578,1.755c0.568,1.639,1.207,3.253,1.918,4.837l0.01,0.021h0.002c0.641,1.463,1.496,2.89,2.564,4.279 c1.102,1.434,2.447,2.854,4.033,4.261c1.135,1.004,1.24,2.737,0.238,3.871c-0.707,0.799-1.777,1.088-2.742,0.838l-0.002,0.001 c-3.406-0.884-6.625-1.987-9.654-3.309c-3.031-1.321-5.891-2.87-8.58-4.642l-0.006,0.008c-2.672-1.747-5.172-3.715-7.494-5.897 c-1.969-1.85-3.807-3.857-5.514-6.023h-0.928h-0.016h-0.02h-0.016h-0.018h-8.735c-1.818,0-3.56-0.227-5.223-0.676 c-1.665-0.45-3.251-1.134-4.756-2.048c-1.295-0.784-1.709-2.469-0.925-3.764c0.784-1.295,2.469-1.709,3.764-0.925 c1.031,0.626,2.144,1.102,3.337,1.424c1.186,0.32,2.454,0.482,3.803,0.482h8.735h0.018h0.016h0.02h0.016h2.271v0.011 c0.834,0,1.656,0.379,2.193,1.097c1.732,2.313,3.648,4.456,5.74,6.422c2.066,1.941,4.316,3.708,6.742,5.295l-0.006,0.008 l0.006,0.003c2.305,1.519,4.777,2.865,7.418,4.038c-0.5-0.846-0.938-1.699-1.314-2.561l0,0c-0.752-1.681-1.445-3.438-2.08-5.267 c-0.602-1.738-1.141-3.525-1.617-5.353c-0.105-0.294-0.164-0.61-0.164-0.94c0-1.521,1.232-2.753,2.752-2.753h4.102h0.016h0.018 h0.018h0.018h8.734c1.107,0,2.156-0.108,3.148-0.324c0.943-0.204,1.84-0.503,2.689-0.895c0.041-0.022,0.084-0.044,0.127-0.064 c0.717-0.342,1.393-0.737,2.021-1.186c0.656-0.469,1.289-1.004,1.895-1.606c1.371-1.37,2.391-2.87,3.063-4.501 c0.67-1.624,1.002-3.421,1.002-5.394V33.663c0-1.96-0.332-3.751-1.002-5.373c-0.672-1.628-1.691-3.127-3.063-4.498l0,0l-0.01-0.011 c-1.371-1.371-2.869-2.391-4.498-3.062c-1.621-0.669-3.412-1.002-5.373-1.002h-7.873h-5.738c-1.521,0-2.754-1.233-2.754-2.753 c0-1.521,1.232-2.753,2.754-2.753h5.738h7.873c2.656,0,5.143,0.476,7.459,1.432c2.307,0.952,4.406,2.37,6.295,4.256l0.004,0.005 l0.006,0.005l0.002,0.002c1.887,1.888,3.303,3.986,4.254,6.292C122.404,28.521,122.879,31.008,122.879,33.663L122.879,33.663z"/>
    </g>
</svg>`;

const container = document.createElement('div');
container.style.position = 'fixed';
container.style.bottom = '64px';
container.style.right = '64px';
container.style.zIndex = '1000';
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.alignItems = 'flex-end';

const borderWrapper = document.createElement('div');
borderWrapper.style.position = 'relative';
borderWrapper.style.borderTop = 'none';
borderWrapper.style.width = '100%';
borderWrapper.style.borderRadius = window.SmocConfig?.borderRadius || '0';

const iframe = document.createElement('iframe');
iframe.style.width = '0';
iframe.style.height = '0';
iframe.style.border = 'none';
iframe.style.backgroundColor = 'white';
iframe.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
iframe.src = window.SmocConfig?.url;

const icon = document.createElement('div');
const styleSheet = document.createElement('style');
styleSheet.innerText = `
@keyframes enlargenAnimation {
  from {
    transform: scale(0.4);
  }
  to {
    transform: scale(1);
  }
}
`;
document.head.appendChild(styleSheet);

const closeButton = document.createElement('button');
closeButton.innerHTML = `<svg 
  height="20px" 
  width="20px"
  style="enable-background:new 0 0 512 512;" 
  viewBox="0 0 512 512"
  xml:space="preserve"
>
  <path
    d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
</svg>`;
closeButton.style.cssText = `
  position: absolute;
  top: -20px;
  right: 10px;
  z-index: 1001;
  cursor: pointer;
  border: none;
  background: none;
  padding: 3px;
  display: none;
  fill: ${window.SmocConfig?.closeButtonColor || '#fff'};
`;

icon.innerHTML = svgContent;
icon.style.width = '50px';
icon.style.height = '50px';
icon.style.cursor = 'pointer';
icon.style.backgroundColor = '#fff';
icon.style.display = 'inline-block';
icon.style.padding = '10px';
icon.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
icon.style.alignItems = 'center';
icon.style.justifyContent = 'center';
icon.style.transition = 'transform 0.3s ease';

icon.addEventListener('mouseenter', () => {
  icon.style.transform = 'scale(1.1)';
});
icon.addEventListener('mouseleave', () => {
  icon.style.transform = 'scale(1)';
});

icon.addEventListener('click', () => {
  const isOpen = iframe.style.width !== '0px';
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

  if (isOpen) {
    iframe.style.width = '0px';
    iframe.style.height = '0px';
    closeButton.style.display = 'none';
    icon.style.display = 'block';
    borderWrapper.style.borderTop = 'none';
  } else {
    const color = window.SmocConfig?.color || '#ffeeed';
    if (vw < 600) {
      iframe.style.width = '90vw';
      iframe.style.height = '80vh';
      closeButton.style.top = '-30px';
      closeButton.style.right = '10px';
      // } else if (vw >= 601 && vw <= 1024) {
      //   iframe.style.width = '90vw';
      //   iframe.style.height = '80vh';
      //   closeButton.style.top = '-30px';
      //   closeButton.style.right = '10px';
    } else {
      iframe.style.width = '450px';
      iframe.style.height = '500px';
      closeButton.style.top = '-30px';
      closeButton.style.right = '10px';
    }
    closeButton.style.display = 'block';
    icon.style.display = 'none';
    borderWrapper.style.borderTop = `35px solid ${color}`;
  }
});

closeButton.addEventListener('click', (e) => {
  e.stopPropagation();
  iframe.style.width = '0';
  iframe.style.height = '0';
  closeButton.style.display = 'none';
  icon.style.display = 'block';
  borderWrapper.style.borderTop = 'none';
  icon.style.animation = 'enlargenAnimation 0.5s ease forwards';
});

icon.addEventListener('animationend', () => {
  icon.style.animation = '';
});

borderWrapper.appendChild(iframe);
borderWrapper.appendChild(closeButton);

container.appendChild(borderWrapper);
container.appendChild(icon);

document.body.appendChild(container);

function setSVGColor(svgElement: SVGElement, color: string): void {
  svgElement.querySelectorAll('path, circle, rect, polygon').forEach((el: Element) => {
    el.setAttribute('fill', color);
  });
}
function setWidgetShape(shape: string) {
  if (shape === 'round') {
    icon.style.borderRadius = '50%'; // Makes the icon container round
    icon.style.width = '50px'; // Ensure width and height are equal for a perfect circle
    icon.style.height = '50px';
  } else if (shape === 'square') {
    icon.style.borderRadius = '0'; // Makes the icon container square
    // Optional: Adjust width and height as needed for a square
  }
}

function changeIconShapeAndColor(): void {
  const color = window.SmocConfig?.color || '#ffeeed';
  const shape = window.SmocConfig?.shape || 'square';
  const svgElement: SVGSVGElement | null = icon.querySelector('svg');
  if (svgElement) {
    setSVGColor(svgElement, color);
  }
  setWidgetShape(shape);
}

changeIconShapeAndColor();

function applyPosition() {
  const position = window.SmocConfig?.position || 'bottom-right';
  switch (position) {
    case 'bottom-left':
      container.style.bottom = '16px';
      container.style.left = '16px';
      container.style.right = 'auto';
      break;
    case 'bottom-right':
      container.style.bottom = '16px';
      container.style.right = '16px';
      container.style.left = 'auto';
      break;
    default:
      container.style.right = '16px';
      container.style.left = 'auto';
      break;
  }
}

document.body.appendChild(container);
applyPosition();
