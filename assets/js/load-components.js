/**
 * load-components.js
 * Loads shared header and footer components into the page.
 * Must be included BEFORE app.js so Alpine.js processes the injected elements.
 */
(function () {
    function loadComponent(url, targetId, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false); // synchronous to ensure DOM is ready before Alpine
        try {
            xhr.send();
            if (xhr.status === 200) {
                var el = document.getElementById(targetId);
                if (el) {
                    el.outerHTML = xhr.responseText;
                }
            }
        } catch (e) {
            console.warn('Could not load component: ' + url, e);
        }
    }

    // Determine base path (handles subdirectories)
    var scripts = document.getElementsByTagName('script');
    var currentScript = scripts[scripts.length - 1];
    var basePath = '';

    // Load header and footer synchronously before Alpine processes the DOM
    loadComponent(basePath + '/components/header.html', 'site-header');
    loadComponent(basePath + '/components/footer.html', 'site-footer');
})();
