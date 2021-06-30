function Pizza(flavors,crust,size,toppings,order){
    this.flavors = flavors;
    this.crust = crust;
    this.size = size;
    this.toppings = toppings;
    this.order = order;
    console.log(flavor,crust,size,toppings,orders);

}
$(document).ready(function(){
    $("#order").click(function(event){
        let pizza_flavor = $("#flavor option:selected").val();
        let moon_size = $("#size option:selected").val();
        let star_crust = $("#crust option:selected").val();
        let sun_toppings = $("#toppings option:selected").val();

        switch(pizza_flavor){
            case "0":
                flavor_price =0;
            break;
            case "pepperoni":
                flavor_price = 300;
            break;
                case "pine apple":
                flavor_price = 250;
                break;
                case "chicken":
                flavor_price =250;
                break;
                case "beef":
               flavor_price = 200;
                default:
            }
        switch(moon_size){
            case "0":
              moon_price =0;
            break;
            case "large":
               moon_price = 1200;
             break;
             case "medium":
               moon_price = 800;
             break;
             case "regular":
               moon_price = 500;
             default:
           }
           switch(star_crust){
            case "0":
              crust_price = 0;
            break;
            case "crispy":
              crust_price = 150;
             break;
             case "stuffed":
               crust_price = 100;
             break;
             case "gluten-free":
               crust_price = 100;
             default:
           }
           switch(sun_toppings){
            case "0":
              toppings_price =0;
            break;
            case "mushroom":
               toppings_price = 200;
             break;
             case "avocado":
               toppings_price = 50;
             break;
             case "italian":
                toppings_price = 250;
             break;
              case "mexican":
                toppings_price = 250;
              default:
           }
           if((pizza_flavor == "0") && (moon_size == "0") && (star_crust == "0") && (sun_toppings == "0")){
            console.log("nothing selected");
            $("#order").show();
            $("#pink").hide();
            alert("Please select pizza size and crust");
          }
          else{
            $("#order").hide();
            $("#pink").fadeIn(2000);
          }
          var total = flavor_prise + moon_price  + flavor_price + toppings_price;
           $("#blue").html($("#toppings option:selected").val());
           $("#red").html( $("#size option:selected").val());
           $("#black").html($("#crust option:selected").val());
           $("#green").html($("#flavors option:selected").val());
           $("#son").html(total);
    });
});
