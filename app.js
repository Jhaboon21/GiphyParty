const $gifArea = $("#giphy-container");
console.log("Let's get this party started!");

$("form").on("submit", async function(e) {
    e.preventDefault();

    let searchTerm = $("#search").val();
    $("#search").val("");
    
    const giphy = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
          q: searchTerm,
          api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
      });
    //console.log(giphy.data);
    //take this and add to giphy area
    appendGifs(giphy.data)
})

function appendGifs(result) {
    let results = result.data.length;
    if(results) {
        let randomIdx = Math.floor(Math.random() * results);
        let $newGif = $("<img>", {
            src: result.data[randomIdx].images.original.url,
            class: "width"
        });
        $gifArea.append($newGif);
    }
}

$("#remove").on("click", function() {
    $gifArea.empty();
  });