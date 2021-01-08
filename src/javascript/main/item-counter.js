document.addEventListener("DOMContentLoaded", function () {
    productCounter.init();


});


var productCounter = {
    productsLeft: document.querySelector('.js__products-left'),
    startProductsLeft: 25,
    currentProductsLeft: null,
    oneMinute: 1000*60,
    init: function () {
        this.setNumberToProductsLeft(this.startProductsLeft);
        this.counterProductsLeft()
    },
    setNumberToProductsLeft: function(number){
        if(this.productsLeft){
            this.productsLeft.innerHTML = number
        }
    },
    counterProductsLeft: function(){
        var self = this;
        this.currentProductsLeft = this.startProductsLeft;
        setInterval(function(){
            self.currentProductsLeft--;
            if(self.currentProductsLeft < 1){
                self.currentProductsLeft = self.startProductsLeft
            }
            self.setNumberToProductsLeft(self.currentProductsLeft);
        },this.oneMinute)
    }
};