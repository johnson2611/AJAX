// Making AJAX call Using Fetch API to get data

// from text file
let textButton = document.querySelector('#text-btn');
textButton.addEventListener('click' ,function(){
    fetchTextData();
});

let fetchTextData = () => {
    fetch('./data/message.txt').then((res) => {
        if(res.status !== 200){
            console.log(`something went wrong: ${res.status}`);
            return;
        }
       res.text().then((data) => {
        let htmlTemplate =`<h3>${data}</h3>`;
        document.querySelector('#text-card').innerHTML = htmlTemplate;
       });
    });
};

// from JSON file
let jsonButton = document.querySelector('#json-btn');
jsonButton.addEventListener('click', function(){
    fetchJSONData();
})

let fetchJSONData = () => {
    fetch('./data/mobiles.json').then((res) => {
        if (res.status != 200){
            console.log(`something went wrong: ${res.status}`);
            return; 
        }
        res.json().then((data) => {
            let mobile = data;
            let htmlTemplate = `<ul class='list-group mt-1'>
                                    <li class='list-group-item'>ID: ${mobile.id} </li>
                                    <li class='list-group-item'>Brand: ${mobile.brand} </li>
                                    <li class='list-group-item'>Color: ${mobile.color} </li>
                                    <li class='list-group-item'>Price: ${mobile.price} </li>
                                </ul>`;
            document.querySelector('#json-card').innerHTML = htmlTemplate;
        });
    })
}

// fetch from API
let apiButton = document.querySelector('#api-btn');
apiButton.addEventListener('click', function(){
    fetchAPIData();
});

let fetchAPIData = () => {
    fetch('https://jsonplaceholder.typicode.com/users').then((res) => {
        if (res.status != 200){
            console.log(`something went wrong: ${res.status}`);
            return; 
        }
        res.json().then((data) => {
            let users = data;
            let userListTemplate = '';
            for (let user of users){
                userListTemplate += `<ul class='list-group mt-1'>
                                        <li class='list-group-item'>ID: ${user.id}</li>
                                        <li class='list-group-item'>Name: ${user.name}</li>
                                        <li class='list-group-item'>Email: ${user.email}</li>
                                        <li class='list-group-item'>City: ${user.address.city}</li>
                                    </ul>`
            };
            document.querySelector('#api-card').innerHTML = userListTemplate;
        });
    });
}; 
