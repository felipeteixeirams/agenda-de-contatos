const mainList = document.getElementById("contatos");
const countContact = document.getElementById("count");



var contacts = [];

//<li><div class="ti-user"></div>Text</li>

function insertDataList ()
{

    const insertDataList = fetch(`/person`)
        .then(response => response.json())
        .then(data => {data.forEach(element => {
            contacts.push(`${element.name} ${element.lastName}`);
        })
        countContact.innerHTML = contacts.length;

            for(let i = 0; i < contacts.length; i++)
            {
                var item = document.createElement("li");
                item.append(contacts[i]);
                var circle = document.createElement("div");
                circle.setAttribute("class", "ti-user");
                item.insertAdjacentElement("afterbegin", circle);
                mainList.appendChild(item);
            }
        })
}
insertDataList();