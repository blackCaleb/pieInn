$(document).ready(function(){

    // varing contact info
    // business logic
    function Contact(pizza,size,total,deliver,big,crust,topping){
        this.pizzaName = pizza;
        this.pizzaSize = size;
        this.orderTotal = total;
        this.deliverOption = deliver;
        this.pizzaBig = big;
        this.pizzaCrust = crust;
        this.pizzaTopping = topping;
    }

     // Prototype for full name
     
     Contact.prototype.fullName = function(){
        return this.pizzaName + "" + "" +this.pizzaSize
    } 


    // collecting user input from form
    // user interface logic
    $("form#new-contact").submit(function(event){
        event.preventDefault();

        var inputtedPizzaName = $("input#new-pizza-name").val();
        var inputtedPizzaSize = $("input#new-pizza-size").val();
        var inputtedPizzaBig = parseInt($('#big').val());
        if(inputtedPizzaBig===1){
            var bigopt = 2100}
            else if(inputtedPizzaBig===2){
                var bigopt = 1600}
                else{if(inputtedPizzaBig===3){
                    var bigopt = 1100
                }
            };

        var inputtedPizzaCrust = parseInt($('#crust').val());
        if(inputtedPizzaCrust===1){
            var crustopt = 500}
            else if(inputtedPizzaCrust===2){
                var crustopt = 600}
                else{if(inputtedPizzaCrust===3){
                    var crustopt = 400
                }
            };

        var inputtedPizzaTopping = parseInt($('#topping').val());
            if(inputtedPizzaTopping===1){
                var topopt = 600}
                else if(inputtedPizzaTopping===2){
                    var topopt = 800}
                    else if(inputtedPizzaTopping===3){
                        var topopt = 500}
                    else{if(inputtedPizzaTopping===4){
                        var topopt = 850
                    }
                };
        
        var inputtedDeliveryOption =parseInt($('#delivery').val());
        if(inputtedDeliveryOption===1){
            var delOptn = 0}
            else{if(inputtedDeliveryOption===2){
                var location= prompt(" Where do we deliver your pizza?");
               alert("your pizza will be delivered at " + location + " at a cost of ksh 500");
                var delOptn = 500;
            }
        };
        var inputtedOrderTotal =(topopt + crustopt + bigopt + delOptn)*inputtedPizzaSize;
        console.log(inputtedOrderTotal);

        var ul = document.getElementById("contacts");
        var liNodes = [];

        for (var i = 0; i < ul.childNodes.length; i++) {
	    if (ul.childNodes[i].nodeName == "LI") {
		liNodes.push(ul.childNodes[i]);
	    }
        var myli = i+1;
        console.log(myli)
        var ttotal = myli*inputtedOrderTotal;
        alert("Your bill is: " + ttotal);
        alert("Enjoy your pizza!");
}


    var newContact = new Contact(inputtedPizzaName,inputtedPizzaSize, inputtedOrderTotal,inputtedPizzaBig,inputtedPizzaCrust,inputtedPizzaTopping);

        $("ol#contacts").append("<span class='contact'>" + "" + "" + inputtedPizzaName +  "" + "</span>");

        // $("p#ototal").append("<span class='contact'>" + "" + "" + ttotal +  "" + "</span>");

        $("input#new-pizza-name").val("");
        $("input#new-pizza-size").val("");
        

        $(".contact").last().click(function(){
            $("#show-contact").show();
            $("#show-contact h2").text("Your Order");
            $(".pizza-name").text(newContact.pizzaName);
            $(".pizza-size").text(newContact.pizzaSize);
            $(".total-price").text(newContact.orderTotal);
            $(".pizza-big").text(newContact.pizzaBig);
            $(".pizza-crust").text(newContact.pizzaCrust);
            $(".pizza-topping").text(newContact.pizzaTopping);
        });
    });

});


