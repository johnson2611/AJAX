// How AJAX work and using AJAX to get Data

//  Fetching data from a text file
// Text file data  
let textButton = document.querySelector('#text-btn');
textButton.addEventListener('click', function(){
    // create an AJAX request
    let xhr = new XMLHttpRequest();

    // prepare the request
    xhr.open('Get', './data/message.txt', true);

    // send the request
    xhr.send();
    
    // process the request
    xhr.onload = () => {
        if (xhr.status === 200){
            let data = xhr.responseText;
           displayTextData(data);
        }
    };
});


// display txt data
let displayTextData = (data) => {
    let htmlTemplate = `<h3>${data}</h3>`;
    document.querySelector('#text-card').innerHTML = htmlTemplate;
};


// Fetching data from JSON data

let jsonButton = document.querySelector('#json-btn');
jsonButton.addEventListener('click', function(){
    // create an AJAX request
    let xhr = new XMLHttpRequest();

    // prepare the request
    xhr.open('Get', './data/mobiles.json', true);

    // send the request
    xhr.send();
    // process the request
    xhr.onload = () => {
        if (xhr.status === 200){
            let data = xhr.responseText;
            let mobile = JSON.parse(data);
            displayJSONData(mobile);
        }
    };
});

// display JSON data
let displayJSONData = (mobile) =>{
    let htmlTemplate = '';
    htmlTemplate = `<ul class='list-group mt-1'>
                        <li class='list-group-item'>ID: ${mobile.id}</li>
                        <li class='list-group-item'>Brand: ${mobile.brand}</li>
                        <li class='list-group-item'>Mobile: ${mobile.color}</li>
                        <li class='list-group-item'>Price: ${mobile.price}</li>
                    </ul>`
    document.querySelector('#json-card').innerHTML = htmlTemplate;
}


// fetching data from API
let apiButton = document.querySelector('#api-btn');
apiButton.addEventListener('click', function(){
    let xhr = new XMLHttpRequest();
    xhr.open('Get', 'https://jsonplaceholder.typicode.com/users', true);
    xhr.send();
    xhr.onload = () =>{
        if(xhr.status === 200){
            let data = xhr.responseText;
            let users = JSON.parse(data);
           displayUsers(users);
        }
    }
});

// display the API data
let displayUsers = (users) =>{
    let htmlTemplate = '';
    for (let user of users){
        htmlTemplate += `<ul class='list-group mt-1'>
                            <li class='list-group-item'>ID : ${user. id}</li>
                            <li class='list-group-item'>NAME : ${user. name}</li>
                            <li class='list-group-item'>EMAIL : ${user. email}</li>
                            <li class='list-group-item'>STREET : ${user. address.street}</li>
                            <li class='list-group-item'>CITY : ${user. address.city}</li>
                        </ul>`;
    }
    document.querySelector('#api-card').innerHTML = htmlTemplate;
};