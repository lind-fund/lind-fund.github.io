// color object
const colors = [{
    name:"black 0d0d0d",
    hex:"#0d0d0d"
},{
    name:"dkgrey 404040",
    hex:"#404040"
},{
    name:"mdgrey 737373",
    hex:"#737373"
},{
    name:"grey a6a6a6",
    hex:"#a6a6a6"
},{
    name:"ltgrey d9d9d9",
    hex:"#d9d9d9"
},{
    name:"white fcfcfc",
    hex:"#fcfcfc"
}];


const cardElement = document.createElement('container');

colors.forEach(element => {
    const card = document.createElement('div');
    card.classList = 'card-items';

    const content = `
    <div class = "card">
        <div class="card-items">
            <div class="card-color" style="background-color:${element.hex}"></div>
            <div class="card-color-name">${element.name}</div>
        </div>
    </div>
    `;
        
  container.innerHTML += content;
});

