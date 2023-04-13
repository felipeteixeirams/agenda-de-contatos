const mainList = document.getElementById("contatos");
const icon = document.createElement("i");
const circle = document.createElement("div")
const item = document.createElement("li");

circle.setAttribute("class", "avatar");
icon.setAttribute("class", "ti-user");
circle.appendChild(icon);
item.appendChild(circle);

//<li><div class="avatar"><i class="ti-user"></i></div>3 Cri</li>


function insertDataList (){

    const data = fetch(`/person`)
        .then(response => response.json())
        .then(data => data.forEach(contact => {
            item.append(contact.name);
            mainList.append(item);
        }))
        .finally()
}
insertDataList();