/** @jsx React.DOM */

var vir_mir_left = React.createClass({displayName: 'vir_mir_left',
    render: function () {
        return (
            React.DOM.div( {className:"pure-menu pure-menu-open left__vir_mir"}, 
                React.DOM.span( {className:"glyphicon glyphicon-search"}),
                React.DOM.a( {className:"pure-menu-heading"}, "Yahoo! Sites"),
                React.DOM.ul(null, 
                    React.DOM.li(null, 
                        React.DOM.a( {href:"#"}, "Flickr")
                    ),
                    React.DOM.li( {className:"pure-menu-selected"}, 
                        React.DOM.a( {href:"#"}, "Messenger")
                    ),
                    React.DOM.li(null, 
                        React.DOM.a( {href:"#"}, "Sports")
                    ),
                    React.DOM.li(null, 
                        React.DOM.a( {href:"#"}, "Finance")
                    ),
                    React.DOM.li( {class:"pure-menu-heading"}, "More Sites!"),
                    React.DOM.li(null, 
                        React.DOM.a( {href:"#"}, "Games")
                    ),
                    React.DOM.li(null, 
                        React.DOM.a( {href:"#"}, "News")
                    ),
                    React.DOM.li(null, 
                        React.DOM.a( {href:"#"}, "OMG!")
                    )
                )
            )
            );
    }
});

