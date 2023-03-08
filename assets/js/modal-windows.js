// js/modal-window.js
let modal = (function () {                         // Declare modal object

    let $window = $(window);                        // Store the window
    let $modal = $('<div class="modal"/>');         // Create markup for modal
    let $content = $('<div class="modal-content"/>');
    let $close = $('.modal-close');

    $modal.append($content, $close);                // Add close button to modal

    $close.on('click', function (e) {                 // If user clicks on close
        e.preventDefault();                           // Prevent link behavior
        modal.close();                                // Close the modal window
    });

    return {                                        // Add code to modal
        center: function () {                          // Define center() method
            // Calculate distance from top and left of window to center the modal
            let top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
            let left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;
            $modal.css({                                // Set CSS for the modal
                // fixed 算法
                top: top,            // Center vertically
                left: left          // Center horizontally
                // absolute 算法
                // top: top + $window.scrollTop(),            // Center vertically
                // left: left + $window.scrollLeft()          // Center horizontally
            });
        },
        open: function (settings) {                     // Define open() method
            $content.empty().append(settings.content);   // Set new content of modal

            $modal.css({                                 // Set modal dimensions
                width: '100%', // Set width
                // settings.width || 'auto',           
                height: 'auto' // Set height
                // settings.height || 'auto'          
            }).appendTo('body');                         // Add it to the page

            modal.center();                              // Call center() method
            $(window).on('resize', modal.center);        // Call it if window resized
        },
        close: function () {                            // Define close() method
            $content.empty();                            // Remove content from modal
            $modal.detach();                             // Remove modal from page
            $(window).off('resize', modal.center);       // Remove event handler
        }
    };
}());



// js/modal-init #share-options1
(function () {
    let $content = $('#share-options1').detach();   // Remove modal from page

    $('#storyMore').on('click', function (e) {           // Click handler to open modal
        e.preventDefault();
        modal.open({ content: $content });
    });
}());

// modal-init #share-options2
(function () {
    let $content = $('#share-options2').detach();   // Remove modal from page

    $('#featureMore').on('click', function (e) {           // Click handler to open modal
        e.preventDefault();
        modal.open({ content: $content });
    });
}());