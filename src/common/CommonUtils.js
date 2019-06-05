let CommonUtils = {
    closest: function(el, fn) {
        let DEPTH_LIMIT = 5,
            depth = 0;
        while (depth < DEPTH_LIMIT) {
            if (fn(el)) {
                return el;
            }
            el = el.parentNode;
            depth++;
        }
    },

    closestTag: function (target, tagName) {
        return this.closest(target, function(el) {
            return el.nodeName === tagName;
        });
    },

    getWindowSize: function () {
        let size = {
            width: 0,
            height: 0
        };

        if (document.body && document.body.offsetWidth) {
            size.width = document.body.offsetWidth;
            size.height = document.body.offsetHeight;
        } else if (document.compatMode=='CSS1Compat' && document.documentElement && document.documentElement.offsetWidth ) {
            size.width = document.documentElement.offsetWidth;
            size.height = document.documentElement.offsetHeight;
        } else if (window.innerWidth && window.innerHeight) {
            size.width = window.innerWidth;
            size.height = window.innerHeight;
        }

        return size;
    }
};

export default CommonUtils;