function saveTeam(){

    document.getElementById("nameOfPlayers").disabled = true;
    document.getElementById("history").disabled = true;
    document.getElementById("numberOfPlayers").disabled = true;
    document.getElementById("address").disabled = true;

    document.getElementById("football").disabled = true;
    document.getElementById("volleyball").disabled = true;
    document.getElementById("handball").disabled = true;
    document.getElementById("basketball").disabled = true;
	
	document.getElementById("spain").disabled = true;
    document.getElementById("england").disabled = true;
    document.getElementById("france").disabled = true;
    document.getElementById("germany").disabled = true;
	document.getElementById("portugal").disabled = true;
	document.getElementById("bahrain").disabled = true;
	document.getElementById("other").disabled = true;
	
	document.getElementById("ageGroup").disabled = true;
	
    document.getElementById("save").className = "hidden";
    document.getElementById("message").className = "shown message";
}

function addPlayer(){
    
    document.getElementById("form").className = "form-shown";

    index = -1;

    document.getElementById("number").value = "";
    document.getElementById("name").value = "";
    document.getElementById("joinDate").value = "";
}

var index = -1;

function editPlayer(rowIndex){

    document.getElementById("form").className = "form-shown";

    index = rowIndex;

    document.getElementById("number").value = document.getElementById("players").rows[index].cells[1].innerHTML.trim();
    document.getElementById("name").value = document.getElementById("players").rows[index].cells[2].innerHTML.trim();
    document.getElementById("yearOfSigning").value = document.getElementById("players").rows[index].cells[3].innerHTML.trim();
    document.getElementById("endOfTheContract").value = document.getElementById("players").rows[index].cells[4].innerHTML.trim();
}

function savePlayer(){

    document.getElementById("message").className = "shown message";

    document.getElementById("form").className = "form-hidden";

    if(index == -1){
        
        var row = document.getElementById("players").insertRow(-1);
        
        var cell = row.insertCell(-1);
        cell.className = "center";
        cell = row.insertCell(-1);
        cell.className = "center";
        cell = row.insertCell(-1);
        cell.className = "center";
        cell = row.insertCell(-1);
        cell.className = "center";
        cell = row.insertCell(-1);
        cell.className = "center";
        cell = row.insertCell(-1);
        cell.className = "center";

        index = row.rowIndex;
    }

    document.getElementById("players").rows[index].cells[0].innerHTML = index;
    document.getElementById("players").rows[index].cells[1].innerHTML = document.getElementById("number").value;
    document.getElementById("players").rows[index].cells[2].innerHTML = document.getElementById("name").value;
    document.getElementById("players").rows[index].cells[3].innerHTML = document.getElementById("yearOfSigning").value;
    document.getElementById("players").rows[index].cells[4].innerHTML = document.getElementById("endOfTheContract").value;
    document.getElementById("players").rows[index].cells[5].innerHTML = "<button class='button' onclick=\"editPlayer(" + index + ")\">Edit Player</button>";
    
}
//############################################

function addTrophy(){
    
    document.getElementById("form").className = "form-shown";

    index = -1;

    document.getElementById("cup").value = "";
    document.getElementById("finalMatchScore").value = "";
    document.getElementById("matchDate").value = "";
    document.getElementById("manager").value = "";
}

var index = -1;

function editTrophy(rowIndex){

    document.getElementById("form").className = "form-shown";

    index = rowIndex;

    document.getElementById("cup").value = document.getElementById("trophies").rows[index].cells[1].innerHTML.trim();
    document.getElementById("finalMatchScore").value = document.getElementById("trophies").rows[index].cells[2].innerHTML.trim();
    document.getElementById("matchDate").value = document.getElementById("trophies").rows[index].cells[3].innerHTML.trim();
    document.getElementById("manager").value = document.getElementById("trophies").rows[index].cells[4].innerHTML.trim();
}

function saveTrophy(){

    document.getElementById("message").className = "shown message";

    document.getElementById("form").className = "form-hidden";

    if(index == -1){
        
        var row = document.getElementById("trophies").insertRow(-1);
        
        var cell = row.insertCell(-1);
        cell.className = "center";
        cell = row.insertCell(-1);
        cell.className = "center";
        cell = row.insertCell(-1);
        cell.className = "center";
        cell = row.insertCell(-1);
        cell.className = "center";
        cell = row.insertCell(-1);
        cell.className = "center";
		cell = row.insertCell(-1);
        cell.className = "center";
		
        index = row.rowIndex;
    }

    document.getElementById("trophies").rows[index].cells[0].innerHTML = index;
    document.getElementById("trophies").rows[index].cells[1].innerHTML = document.getElementById("cup").value;
    document.getElementById("trophies").rows[index].cells[2].innerHTML = document.getElementById("finalMatchScore").value;
    document.getElementById("trophies").rows[index].cells[3].innerHTML = document.getElementById("matchDate").value;
    document.getElementById("trophies").rows[index].cells[4].innerHTML = document.getElementById("manager").value;
    document.getElementById("trophies").rows[index].cells[5].innerHTML = "<button class='button' onclick=\"editTrophy(" + index + ")\">Edit Trophy</button>";
}


//############################################


function addMatch(){
    
    document.getElementById("form").className = "form-shown";

    index = -1;

    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
    document.getElementById("against").value = "";
    document.getElementById("studium").value = "";
    document.getElementById("score").value = "";
}

var index = -1;

function editMatch(rowIndex){

    document.getElementById("form").className = "form-shown";

    index = rowIndex;
    
    document.getElementById("date").value = document.getElementById("matches").rows[index].cells[1].innerHTML.trim();
    document.getElementById("time").value = document.getElementById("matches").rows[index].cells[2].innerHTML.trim();
    document.getElementById("against").value = document.getElementById("matches").rows[index].cells[3].innerHTML.trim();
    document.getElementById("studium").value = document.getElementById("matches").rows[index].cells[4].innerHTML.trim();
    document.getElementById("score").value = document.getElementById("matches").rows[index].cells[5].innerHTML.trim();
}

function saveMatch(){

    document.getElementById("message").className = "shown message";

    document.getElementById("form").className = "form-hidden";

    if(index == -1){
        
        var row = document.getElementById("matches").insertRow(-1);
        
        var cell = row.insertCell(-1);
        cell.className = "center";
        cell = row.insertCell(-1);
        cell.className = "center";
        cell = row.insertCell(-1);
        cell.className = "center";
        cell = row.insertCell(-1);
        cell.className = "center";
        cell = row.insertCell(-1);
        cell.className = "center";
        cell = row.insertCell(-1);
        cell.className = "center";
        cell = row.insertCell(-1);
        cell.className = "center";

        index = row.rowIndex;
    }

    document.getElementById("matches").rows[index].cells[0].innerHTML = index;
    document.getElementById("matches").rows[index].cells[1].innerHTML = document.getElementById("date").value;
    document.getElementById("matches").rows[index].cells[2].innerHTML = document.getElementById("time").value;
    document.getElementById("matches").rows[index].cells[3].innerHTML = document.getElementById("against").value;
    document.getElementById("matches").rows[index].cells[4].innerHTML = document.getElementById("studium").value;
    document.getElementById("matches").rows[index].cells[5].innerHTML = document.getElementById("score").value;
    document.getElementById("matches").rows[index].cells[6].innerHTML = "<button class='button' onclick=\"editMatch(" + index + ")\">Edit Match</button>";
    
}