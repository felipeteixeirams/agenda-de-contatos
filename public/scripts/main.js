const mainList = document.getElementById("contatos")
const icon = document.createElement("i");
icon.setAttribute("class", "ti-user");
const circle = document.createElement("div")
circle.setAttribute("class", "avatar");
const item = document.createElement("li");
circle.innerHTML = icon;
item.innerHTML = circle;

//<li><div class="avatar"><i class="ti-user"></i></div>3 Cri</li>


async function insertDataList (){

    const contactData = fetch(`/person`)
    .then(response => response.json())
    .then(data => data.forEach(contact => {
        console.log(contact.name)
    }))
}

insertDataList();