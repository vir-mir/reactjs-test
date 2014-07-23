/** @jsx React.DOM */

var vir_mir_left = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top left__vir_mir" role="navigation">
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a className="logo" href="/">
                            <img src="/static/img/logo.png" title="Виртуальный мир" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i  className="glyphicon glyphicon-lock"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="glyphicon glyphicon-th"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="glyphicon glyphicon-search"></i>
                        </a>
                    </li>
                </ul>
            </nav>
            );
    }
});

