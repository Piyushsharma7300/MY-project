function searchItem(){
    const item = document.getElementById("lostItem").value.trim();

    if(item === ""){
        alert("Please enter an item to search");
        return;
    }

    alert("Searching for: " + item + "\n(Database connection later)");
}