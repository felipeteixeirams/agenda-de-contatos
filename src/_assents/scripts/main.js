const mainList = document.getElementById("contatos"); //Elemento UL
const countContact = document.getElementById("count"); //Informação de Qtd de registros
var bodyMain = document.getElementById("main"); //Body da pagina principal

//Array de contatos
const contacts = [];


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
                var linkToDetails = document.createElement("a");
                linkToDetails.setAttribute("href", "./details.html");
                linkToDetails.appendChild(item);
                mainList.appendChild(linkToDetails);
            }
        })
        
}

bodyMain = addEventListener('load', insertDataList());
//mainList.firstChild = addEventListener('click', '/details.html');