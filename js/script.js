$(document).ready(function(){

    // varing contact info
    // business logic
    function Contact(pizza,size,total,deliver){
        this.pizzaName = pizza;
        this.pizzaSize = size;
        this.orderTotal = total;
        this.deliverOption = deliver;
    }

     // Prototype for full name
     
     Contact.prototype.fullName = function(){
        return this.pizzaName + " " + "" + this.pizzaSize
    } 


    // collecting user input from form
    // user interface logic
    $("form#new-contact").submit(function(event){
        event.preventDefault();

        var inputtedPizzaName = $("input#new-pizza-name").val();
        var inputtedPizzaSize = $("input#new-pizza-size").val();
        var inputtedDeliveryOption =parseInt($('#delivery').val());
        if(inputtedDeliveryOption===1){
            var delOptn = 0}
            else{if(inputtedDeliveryOption===2){
                var delOptn = 500
            }
        };
        var inputtedOrderTotal = delOptn  + (inputtedPizzaSize)*1200;
        console.log(inputtedOrderTotal);


    var newContact = new Contact(inputtedPizzaName,inputtedPizzaSize, inputtedOrderTotal);

        $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

        $("input#new-pizza-name").val("");
        $("input#new-pizza-size").val("");
        

        $(".contact").last().click(function(){
            $("#show-contact").show();
            $("#show-contact h2").text("Your Order");
            $(".pizza-name").text(newContact.pizzaName);
            $(".pizza-size").text(newContact.pizzaSize);
            $(".total-price").text(newContact.orderTotal);
        });
    });

});


