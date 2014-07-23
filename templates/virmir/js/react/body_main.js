/** @jsx React.DOM */

var vir_mir_body = React.createClass({displayName: 'vir_mir_body',

    render: function () {
        return (
            React.DOM.div( {className:"container-fluid"}, 
                vir_mir_list_post(null ),
                vir_mir_list_post(null ),
                vir_mir_list_post(null ),
                vir_mir_list_post(null )
            )
            );
    }
});