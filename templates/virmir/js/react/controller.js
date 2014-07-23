/** @jsx React.DOM */

var vir_mir = React.createClass({displayName: 'vir_mir',
    render: function () {
        return (
            React.DOM.div( {className:"content"}, 
                vir_mir_left(null ),
                vir_mir_body(null )
            )
            );
    }
});

