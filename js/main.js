// fluid UI options
fluid.uiOptions.prefsEditor(".flc-prefsEditor-separatedPanel", {
  terms: {
    "templatePrefix": "/src/framework/preferences/html",
    "messagePrefix": "/src/framework/preferences/messages"
  },
  "tocTemplate": "/src/components/tableOfContents/html/TableOfContents.html",
  "ignoreForToC": {
    "overviewPanel": ".flc-overviewPanel"
  }
});

// projects filtering and sorting

if(document.getElementById("projectsList")){
  var options = {
    valueNames: [ 'date','name', 'type' ]
  };
  var projectsList = new List('projectsList', options);
  var filters = document.getElementsByClassName("filter");

  for(var i=0; i<filters.length; i++) {
    filters[i].addEventListener("click", function(){
      var thisFilter = this.innerHTML;
      projectsList.filter(function(item) {
        if (thisFilter.toLowerCase() === "all") {
          return true;
        }
        else return item.values().type === thisFilter.toLowerCase();
      });
      for(var j=0; j<filters.length; j++) {
        filters[j].classList.remove("active");
      }
      this.classList.add("active");
    });
  }
}
