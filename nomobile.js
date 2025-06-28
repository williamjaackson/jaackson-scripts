const overlay = `<div class="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 block md:hidden" id="mobile-overlay">
    <div class="bg-white p-6 rounded shadow-lg text-center mx-2 max-w-md">
        <div class="flex flex-col items-center">
            <div class="bg-red-100 rounded-full p-4 mb-4">
                <svg class="w-12 h-12 text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-off-icon lucide-phone-off"><path d="M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272"/><path d="M22 2 2 22"/><path d="M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473"/></svg>
            </div>
            <h2 class="text-2xl font-extrabold mb-2 text-gray-800">Unsupported Device</h2>
            <p class="text-gray-600 mb-4">This site has not been optimised for mobile devices. Please use a desktop or laptop computer to access this site.</p>
            <button class="mt-2 px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800 transition">Continue Anyway</button>
        </div>
    </div>
</div>`

const style = `<style>
.fixed {
  position: fixed;
}
.z-50 {
  z-index: 50;
}
.block {
  display: block;
}
.flex {
  display: flex;
}
.flex-col {
  flex-direction: column;
}
.items-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.rounded-full {
  border-radius: calc(infinity * 1px);
}
.text-center {
  text-align: center;
}
.transition {
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, visibility, content-visibility, overlay, pointer-events;
  transition-timing-function: var(--tw-ease, ease);
  transition-duration: var(--tw-duration, 0s);
}
</style>`

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('mobileOverlayDismissed') === 'true') return;

    const styleElement = document.createElement('style');
    styleElement.innerHTML = style;
    document.head.appendChild(styleElement);
    
    const body = document.querySelector('body');
    body.insertAdjacentHTML('afterbegin', overlay);

    const overlayElement = document.getElementById('mobile-overlay');
    const continueButton = overlayElement.querySelector('button');

    continueButton.addEventListener('click', function() {
        overlayElement.style.display = 'none';
        localStorage.setItem('mobileOverlayDismissed', 'true');
    });
});
