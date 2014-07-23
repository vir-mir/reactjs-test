/** @jsx React.DOM */

var vir_mir_list_post = React.createClass({displayName: 'vir_mir_list_post',

    render: function () {
        return (
            React.DOM.div( {className:"row"}, 
                React.DOM.div( {className:"col-xs-12"}, 
                    React.DOM.h2(null, 
                        React.DOM.a( {href:"#"}, "Тестовая статья как писать код правильно")
                    ),
                    React.DOM.a( {href:"#", className:"thumbnail image__left pull-left"}, 
                        React.DOM.img( {src:"/static/img/1.jpg", alt:"..."}  )
                    ),
                    React.DOM.div( {className:"text"}, 
                        React.DOM.p(null, 
                        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit fringilla purus at aliquam. Mauris auctor pharetra enim a pellentesque. Nullam vel tortor commodo, facilisis arcu ut, tincidunt felis. Aliquam vehicula a dui at aliquet. Integer blandit odio varius, iaculis metus eget, porta dui. Mauris elit diam, vulputate in pharetra vel, molestie vestibulum tellus. Nunc pretium facilisis sodales. Vivamus massa nisl, mattis id mattis ac, tristique et diam. Suspendisse potenti. Suspendisse suscipit rutrum lectus, quis imperdiet felis posuere vel. Integer interdum justo quis eros luctus, eu gravida odio scelerisque. Fusce quis arcu vitae orci interdum imperdiet a in urna. Aliquam non est ornare justo facilisis ornare. Integer luctus euismod orci a facilisis. Praesent semper congue tristique. "
                        ),
                        React.DOM.p(null, 
                        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit fringilla purus at aliquam. Mauris auctor pharetra enim a pellentesque. Nullam vel tortor commodo, facilisis arcu ut, tincidunt felis. Aliquam vehicula a dui at aliquet. Integer blandit odio varius, iaculis metus eget, porta dui. Mauris elit diam, vulputate in pharetra vel, molestie vestibulum tellus. Nunc pretium facilisis sodales. Vivamus massa nisl, mattis id mattis ac, tristique et diam. Suspendisse potenti. Suspendisse suscipit rutrum lectus, quis imperdiet felis posuere vel. Integer interdum justo quis eros luctus, eu gravida odio scelerisque. Fusce quis arcu vitae orci interdum imperdiet a in urna. Aliquam non est ornare justo facilisis ornare. Integer luctus euismod orci a facilisis. Praesent semper congue tristique. "
                        ),
                        React.DOM.p(null, 
                        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit fringilla purus at aliquam. Mauris auctor pharetra enim a pellentesque. Nullam vel tortor commodo, facilisis arcu ut, tincidunt felis. Aliquam vehicula a dui at aliquet. Integer blandit odio varius, iaculis metus eget, porta dui. Mauris elit diam, vulputate in pharetra vel, molestie vestibulum tellus. Nunc pretium facilisis sodales. Vivamus massa nisl, mattis id mattis ac, tristique et diam. Suspendisse potenti. Suspendisse suscipit rutrum lectus, quis imperdiet felis posuere vel. Integer interdum justo quis eros luctus, eu gravida odio scelerisque. Fusce quis arcu vitae orci interdum imperdiet a in urna. Aliquam non est ornare justo facilisis ornare. Integer luctus euismod orci a facilisis. Praesent semper congue tristique. "
                        )
                    ),
                    React.DOM.div( {className:"clearfix"}),

                    React.DOM.div( {className:"row"}, 
                        React.DOM.div( {className:"col-xs-6 icon__posts"}, 
                            React.DOM.a( {href:"#"}, 
                                React.DOM.i( {className:"glyphicon glyphicon-eye-open"}),
                            " 2300"),
                            React.DOM.a( {href:"#"}, 
                                React.DOM.i( {className:"glyphicon glyphicon-comment"}),
                            " 1560"),
                            React.DOM.a( {href:"#"}, 
                                React.DOM.i( {className:"glyphicon glyphicon-stats"}),
                            " 1560")
                        ),
                        React.DOM.div( {className:"col-xs-6"}, 
                            React.DOM.div( {className:"pull-right date__posts"}, 
                            " 23 июля 15:10 "
                            )
                        )
                    ),

                    React.DOM.hr(null )
                )
            )
            );
    }
});