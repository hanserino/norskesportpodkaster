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

  

function init(){}

function filterPodcasts(category){
   
    if ( category == 'all' ) {
        $( '.js-filterable' ).removeClass( 'is-hidden' ); 
    } else {
        $( '.js-filterable' ).addClass( 'is-hidden' );
        $( '.js-filterable[data-category*=' + category + ']' ).removeClass( 'is-hidden' );
    }
}

$( '.js-filter' ).on( 'click', function() {
    let $category = $(this).attr('data-category');
    filterPodcasts($category);
});




window.onload = function () {
    init();
    
    var touchClass = isTouchDevice() ? "touch" : "no-touch";
    document.body.classList.add(touchClass);
    
    document.body.classList.add("loaded");

}
