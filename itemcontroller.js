// Create a ItemsController class
//var currentId=0;
class ItemsController {
    
    // Set up the items and currentId property in the contructor
    constructor(currentId) {
        this.items = [];
        this.currentId = ++currentId;
     
    }

    // Create the addItem method
    addItem(itemsfromhtml) {
        
        var temp= itemsfromhtml;
        
        temp.id=this.currentId;
        console.log(temp);
        
        
       console.log(this.items);
        this.items.push(temp);
        console.log("after adding current id"+ this.items);
        var x= JSON.stringify(this.items);
        localStorage.setItem("items", JSON.stringify(this.items));
       
      

    }
      display()

     {  
        for(var i = 0, size = this.items.length; i < size ; i++){
            const item = this.items[i];
           
        
        
        console.log('indisplay');
        console.log(item);
        const itemHTML = 
        
        
        
        
        '<div class="card" style="width: 20rem;">\n' +
        '    <img src=""'+item.img +'">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.about+'</p>\n' +
        '        <a href="Profile.html" class="btn btn-primary">Add item</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
     }
    
    } 
}
