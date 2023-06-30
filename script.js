
document.addEventListener('DOMContentLoaded', function() {
    var products = document.querySelectorAll('.product');
  
    products.forEach(function(product) {
      var info = product.querySelector('.product-info');
  
      // إضافة التفاعل عند الاقتراب من العنصر
      product.addEventListener('mouseenter', function() {
        product.classList.add('show-info');
        setTimeout(function() {
          product.classList.remove('show-info');
        }, 6000);
      });
  
      // إضافة التفاعل عند النقر على العنصر
      product.addEventListener('click', function(event) {
        event.stopPropagation();
        product.classList.toggle('show-info');
        setTimeout(function() {
          product.classList.remove('show-info');
        }, 6000);
      });
  
      // إضافة التفاعل عند النقر خارج العنصر لإخفاء التفاصيل
      document.addEventListener('click', function() {
        product.classList.remove('show-info');
      });
    });
});
