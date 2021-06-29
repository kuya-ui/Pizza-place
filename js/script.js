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

        switch(pizz_flavor){
            case "0":
                price =0;
            break;
            case "pepperoni"
                price = 300;
                break;
                case "pineapple"
                price = 250;
                break;
                case = "chicken"
                price =250;
                break;
                case = "beef"
                price = 200;
                default:
            }
        switch(moon_size){
            case "0":
              price =0;
            break;
            case "large":
               price = 1200;
             break;
             case "medium":
               price = 800;
             break;
             case "regular":
               price = 500;
             default:
           }
           switch(star_crust){
               case "0":
                   price =0;
                break
                case "crispy"
                    price = 150;
                break;
                case "stuffed"
                    price = 100;
                break;
                case "gluten-free"
                price = 100;
                default:
           }
           switch(sun_toppings){
            case "0":
              price =0;
            break;
            case "mushroom":
               price = 200;
             break;
             case "avocado":
               price = 50;
             break;
             case "italian":
               price = 250;
             break:
              case "mexican":
                price = 250;
              default:
           }
    });
});
