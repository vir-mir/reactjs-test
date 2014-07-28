/** @jsx React.DOM */

var vir_mir_body = React.createClass({

    render: function () {
        return (
            <div className="container-fluid content__main">
                {router.getTag()}
            </div>
            );
    }
});

