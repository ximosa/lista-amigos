var tabs = document.querySelectorAll('.tab');
var items = document.querySelectorAll('.item');

Array.prototype.forEach.call(tabs, function(tab,i, allTabs){
  var activeFrom = 5*i;
  var activeTo = 5*(i + 1);
  tab.addEventListener('click', function(){
    Array.prototype.forEach.call(allTabs, function(t,k){
      t.classList.remove('active');      
    });
    tab.classList.add('active');      
    Array.prototype.forEach.call(items, function(item,j, allItems){
      var active = j >= activeFrom && j < activeTo;
      if (active) {
        console.log(j,active); 
      }
      
      item.classList.toggle('active',active);
    });
    
  });
});