// const jsonResponse = [
//     {
//         "login": "user1",
//         "id": 1
//     },
//     {
//         "login": "user2",
//         "id": 2
//     }
// ]

// const expectedResult = [];
// function shortcut(){
//     for(let i=0;i<data.length;i++)
//         {
//             expectedResult.push(data[i].login);
//         }
//         console.log(expectedResult);
// }
// shortcut();

const expectedResult = ["Select",];
async function fetchData() {

    try{
        const response = await fetch('https://api.github.com/users');
        const data = await response.json();
        console.log(data);
        
        createArray(data);
    }
    catch(err)
    {
        console.log("error", err);
    }
}
fetchData();

function createArray(data){
    for(let i=0;i<data.length;i++)
        {
            expectedResult.push(data[i].login);
        }
    console.log(expectedResult);
    drop();
}

const container = document.getElementById('dropdown');
const select = document.createElement('select');
function drop(){
    expectedResult.forEach(iteration =>{
        const opt = document.createElement('option');
        opt.value = iteration;
        // opt.innerText = iteration.toUpperCase();
        opt.innerText = iteration;
        select.appendChild(opt);
    })
}
container.appendChild(select);


const dropDown=document.querySelector("#dropdown");

select.addEventListener('change', () => {
    const para = document.createElement('p');
    // para.innerText = select.value;
    para.innerText = select.options[select.selectedIndex].text;
    dropDown.appendChild(para);
    select.classList.add('dis');
    revertButton.classList.remove('dis');
})

const revertButton = document.createElement('button');
revertButton.innerText = "Revert";
dropDown.appendChild(revertButton);
revertButton.classList.add('dis');

revertButton.addEventListener('click', () => {
    select.selectedIndex = 0;

    // Remove existing paragraphs
    const existingParas = dropDown.querySelectorAll('p');
    existingParas.forEach(para => para.remove());

    select.classList.remove('dis');
    revertButton.classList.add('dis');
});