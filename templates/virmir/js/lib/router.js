/**
 * Created by vir-mir on 28.07.14.
 */

function Router() {

    this.url = null;
    this.hash = null;

    this.routerMain = {
        "/": {
            "tag": vir_mir_list_post,
            "url": "/api/v1/posts/",
            "method": "GET",
            "param": {
                "per_page": 10,
                "newer": null,
                "older": null,
                "type": "small" // or full
            }
        },
        "404": {
            "js": ""
        }
    }
}

Router.prototype.setUrl = function (url) {
    this.url = url;
    window.history.pushState({url: this.url}, document.title, this.url);
    return this;
}

Router.prototype.setHash = function (hash) {
    this.hash = window.location.hash = hash;
    return this;
}

Router.prototype.setRouter = function () {
    this.url = window.location.pathname;
    this.hash = (window.location.hash ? window.location.hash : null);
    return this;
}

Router.prototype.getTag = function () {
    var routerMain = this.routerMain[this.url];
    return routerMain.tag(null, {url: routerMain.url, method: routerMain.method, param: routerMain.param})
}

Router.prototype.ajax = function (self, callback, callbackError) {
    if (typeof callbackError == 'undefined') {
        callbackError = {};
    }

    if (!callbackError['404']) {
        callbackError['404'] = html_error_404;
    }

    $.ajax({
        url: self.props.children.url,
        type: self.props.children.method,
        data: self.props.children.param,
        dataType: 'json',
        cache: false,
        success: function (data) {
            callback(self, data);
        }.bind(self),
        error: function (data) {
            if (callbackError[data.status]) {
                self.setState({html: callbackError[data.status](null)});
            }
            else {
                self.setState({html: html_error_500(null)});
            }
        }.bind(self)
    });
}