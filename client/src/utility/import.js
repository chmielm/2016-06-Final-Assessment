window.importFromGiphy = ( queryTxt, onFound ) => {

  $.ajax({ url: "http://api.giphy.com/v1/gifs/search",
           mathod: "GET", 
           data:{ q:queryTxt,
                  limit: '10',
                  api_key:dc6zaTOxFJmzC,
                },
           contentType: 'applicaton/json',
           success: function(data) {
             window.ElementsData = convertToElementsData(data.items);
             if(onFound){
                onFound({ elements: window.ElementsData });
             }
           },
           error: function(xhr) {
             console.log(xhr);
          }
        });
}   

var convertToElementsData = function (items){
    var data = [];
    for(var i = 0; i < items.length; i++) {
      data.push({ like: 'no',
                  description: 'Title : ' + items[i].images.caption,
                  image: items[i].images.fixed_height.url
                });  
    };
    
    return data
} 

window.importFromGiphy = importFromGiphy;