$(function() {
    var $list = $(".bl-list");
    var ONE_ROW_HTML = $(".for-js").html();

    console.log(ONE_ROW_HTML);

    function addItem(title) {
        var $node = $(ONE_ROW_HTML);

        var quantity = 1 ;
        var quantityLabel = $node.find(".bl-product_label") ;

        $node.find(".bl-product_label").text(title);


        $list.append($node);

        $(".bl-buttons-cancel").click(function () {

            $(this).closest(".bl-row").remove();
            console.log(  1);
        });
    }
    var $new_input = $(".add-field")

    $(".add-button").click(function () {

        var new_name = $new_input.val();
        addItem(new_name)

    });


    addItem("Jony")
    addItem("Flo")
    addItem("I")


});
