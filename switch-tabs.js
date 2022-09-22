sections = ["games, statistics"];
console.log("tab");

function switchTabs(tab){
    console.log(tab);
    /*
    for(x=0; x< sections.length; x++){
        document.getElementById("games").style.display = "none";
    }
    */
    document.getElementById(tab).style.display = "block";
}