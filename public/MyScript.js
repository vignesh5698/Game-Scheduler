dataExist=0
$("#btnGenerate").click(function(){
    if(dataExist!=0){
        $("#tableId").remove()
    }
    var players=["Manoj","Pandi","Rafiq","Sasi","Sathish","Vinu","SasiKumar","Anbu","Senthil","Nirmal","Magesh","Niti_Nand","Vignesh","Navaneeth","Ram Prasad"];
    players.sort(function(){
        return 0.5 - Math.random()
    });
    htmlContent="<div id=\"tableId\"><p id=\"pId\"><table class='table table-striped'><thead class=\"thead-dark\"><tr><th>Team - 1</th><th>Team - 2</th><th>Team - 3</th><th>Team - 4</th><th>Team - 5</th></tr></thead><tbody>";
    val=0;
    x=0;
    console.log(players)
    for(x=0;x<3;x++){
        htmlContent+="<tr><td>"+players[val]+"</td><td>"+players[val+1]+"</td><td>"+players[val+2]+"</td><td>"+players[val+3]+"</td><td>"+players[val+4]+"</td></tr>"
        val+=5;
    }
    htmlContent+="</tbody></table></p></div>"
    $("#pId").append(htmlContent);
    dataExist+=1
});

    
      
          