/** @jsx React.DOM */

var html_error_404 = React.createClass({displayName: 'html_error_404',

    render: function () {
        return (
            React.DOM.div( {className:"alert alert-danger", role:"alert"}, 
                React.DOM.p( {className:"text-center"}, React.DOM.strong(null, "Ошибка 404"))
            )
            );
    }
});

var html_error_500 = React.createClass({displayName: 'html_error_500',

    render: function () {
        return (
            React.DOM.div( {className:"alert alert-danger", role:"alert"}, 
                React.DOM.p( {className:"text-center"}, React.DOM.strong(null, "Извените, сервис временно недоступен!"))
            )
            );
    }
});