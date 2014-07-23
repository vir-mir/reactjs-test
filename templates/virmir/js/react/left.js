/** @jsx React.DOM */

var vir_mir_left = React.createClass({displayName: 'vir_mir_left',
    render: function () {
        return (
            React.DOM.nav( {className:"navbar navbar-inverse navbar-fixed-top left__vir_mir", role:"navigation"}, 
                React.DOM.ul( {className:"nav navbar-nav"}, 
                    React.DOM.li( {className:"active"}, 
                        React.DOM.a( {className:"logo", href:"/"}, 
                            React.DOM.img( {src:"/static/img/logo.png", title:"Виртуальный мир"} )
                        )
                    ),
                    React.DOM.li(null, 
                        React.DOM.a( {href:"#"}, 
                            React.DOM.i(  {className:"glyphicon glyphicon-lock"})
                        )
                    ),
                    React.DOM.li(null, 
                        React.DOM.a( {href:"#"}, 
                            React.DOM.i( {className:"glyphicon glyphicon-th"})
                        )
                    ),
                    React.DOM.li(null, 
                        React.DOM.a( {href:"#"}, 
                            React.DOM.i( {className:"glyphicon glyphicon-search"})
                        )
                    )
                )
            )
            );
    }
});

