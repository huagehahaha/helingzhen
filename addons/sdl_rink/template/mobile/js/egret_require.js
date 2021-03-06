egret_h5 = {};
egret_h5.prefix = "";
egret_h5.loadScript = function (e, t) {
    var r = 0;
    var n = function () {
        egret_h5.loadSingleScript(egret_h5.prefix + e[r], function () {
            r++;
            if (r >= e.length) {
                t()
            } else {
                n()
            }
        })
    };
    n()
};
egret_h5.loadSingleScript = function (e, t) {
    var r = document.createElement("script");
    if (r.hasOwnProperty("async")) {
        r.async = false
    }
    r.src = e;
    r.addEventListener("load", function () {
        this.removeEventListener("load", arguments.callee, false);
        t()
    }, false);
    document.body.appendChild(r)
};
egret_h5.preloadScript = function (e, t) {
    if (!egret_h5.preloadList) {
        egret_h5.preloadList = []
    }
    egret_h5.preloadList = egret_h5.preloadList.concat(e.map(function (e) {
        return t + e
    }))
};
egret_h5.startLoading = function () {
    var e = egret_h5.preloadList;
    egret_h5.loadScript(e, egret_h5.startGame)
};