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

// helpers
function hasClassName(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

function addClassName(elem, className) {
  if (!hasClassName(elem, className)) {
    elem.className += ' ' + className;
  }
}


// projects filtering and sorting

if(document.getElementById("projectsList")){
  var options = {
    valueNames: [ 'date','name','type' ]
  };
  var projectsList = new List('projectsList', options);
  var filters = document.getElementsByClassName("filter");
  var sorts = document.getElementsByClassName("sort");
  for(var j=0; j<sorts.length; j++) {
    sorts[j].addEventListener("click", function (e) {
      e.preventDefault();
    })
  }

  for(var i=0; i<filters.length; i++) {
    filters[i].addEventListener("click", function(e){
      e.preventDefault();
      var thisFilter = this.innerHTML;
      projectsList.filter(function(item) {
        if (thisFilter.toLowerCase() === "all") {
          return true;
        }
        // for abler
        if (thisFilter.toLowerCase() === "guides") {
          var guides = document.getElementsByClassName("none");
          var label = document.getElementById("abler-name");
          var img = document.getElementById("abler-image");
          label.innerText = "guide";
          img.innerText = "";
          for (var k = 0; k < guides.length; k++) {
            guides[k].className = "col-xs-12"
          }
          return item.values().type === thisFilter.toLowerCase();
        }
        // for abler
        if (thisFilter.toLowerCase() === "archive") {
          var label = document.getElementById("abler-name");
          var img = document.getElementById("abler-image");
          label.innerText = "post";
          img.innerText = "image";
          return item.values().type === thisFilter.toLowerCase();
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

// if(document.getElementById("abler-archive")) {
//   projectsList.filter(function (item) {
//     return item.values().type === "archive";
//   });
// }
