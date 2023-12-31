var isTouchDevice = function () {
    return (
        !!(typeof window !== 'undefined' &&
            ('ontouchstart' in window ||
                (window.DocumentTouch &&
                    typeof document !== 'undefined' &&
                    document instanceof window.DocumentTouch))) ||
        !!(typeof navigator !== 'undefined' &&
            (navigator.maxTouchPoints || navigator.msMaxTouchPoints))
    );
};

  

function init(){
        
}



window.onload = function () {
    init();
    
    var touchClass = isTouchDevice() ? "touch" : "no-touch";
    document.body.classList.add(touchClass);
    
    document.body.classList.add("loaded");

}
