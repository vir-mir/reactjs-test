/** @jsx React.DOM */

var html_error_404 = React.createClass({

    render: function () {
        return (
            <div className="alert alert-danger" role="alert">
                <p className="text-center"><strong>Ошибка 404</strong></p>
            </div>
            );
    }
});

var html_error_500 = React.createClass({

    render: function () {
        return (
            <div className="alert alert-danger" role="alert">
                <p className="text-center"><strong>Извените, сервис временно недоступен!</strong></p>
            </div>
            );
    }
});