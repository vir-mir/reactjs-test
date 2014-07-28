/**
 * Created by vir-mir on 23.07.14.
 */

var router = null;

$(function () {
    router = new Router();
    router.setRouter();

    React.renderComponent(
        vir_mir(null),
        document.getElementById('vir-mir')
    );
});

