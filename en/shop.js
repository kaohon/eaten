ct_02_buy = false;

collection_tree_buy.addEventListener("click", collection_tree_buy_func);
function collection_tree_buy_func() {
  if (candy < 75000) {
    alert("Candies shortages!");
  } else if (ct_02_open.style.visibility == "visible") {
  	alert("You have already liberated the collection tree Part 2.");
  } else {
  	ct_02_buy = true;
    candy -= 75000;
    ct_02_open.style.visibility = "visible";
    collection_tree_buy.removeEventListener("click", collection_tree_buy_func);
  }
}

mediaQuery = window.matchMedia('(max-width:1360px)')
  if (mediaQuery.matches) {
		collection_tree_buy.addEventListener("click", collection_tree_buy_func);
		function collection_tree_buy_func() {
  		if (candy < 75000) {
    		alert("Candies shortages!");
  		} else if (ct_02_open.style.visibility == "visible") {
  			alert("You have already liberated the collection tree Part 2.");
  		} else {
  			ct_02_buy = true;
    		candy -= 75000;
        ct_02_open.style.display = "flex";
    		collection_tree_buy.removeEventListener("click", collection_tree_buy_func);
  		}
		}
  }