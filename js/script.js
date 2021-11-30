$(document).ready(function(){

    // varing contact info
    // business logic
    function Contact(pizza,size,total){
        this.pizzaName = pizza;
        this.pizzaSize = size;
        this.orderTotal = total;
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
        var inputtedOrderTotal = $(function(){return("inputtedPizzaSize")*1200});


    var newContact = new Contact(inputtedPizzaName,inputtedPizzaSize,inputtedOrderTotal);

        $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

        $("input#new-pizza-name").val("");
        $("input#new-pizza-size").val("");
        $(function(){return("inputtedPizzaSize")*1200});

        $(".contact").last().click(function(){
            $("#show-contact").show();
            $("#show-contact h2").text("Your Order");
            $(".pizza-name").text(newContact.pizzaName);
            $(".pizza-size").text(newContact.pizzaSize);
            $(".total-price").text(newContact.orderTotal);
        });
    });

});


