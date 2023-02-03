const btn= document.getElementById('button')
btn.addEventListener('click', data);

function data()
{
const name1= document.getElementById('name1').value;
const age= document.getElementById('age').value;
const mobile= document.getElementById('mobile').value;
const address= document.getElementById('address').value;
const email= document.getElementById('mail').value;
const img= document.getElementById('img').value;
const about= document.getElementById('about').value;
const about1= document.getElementById('buy').value;




var itemsfromhtml= {name:name1, age:age, mobile:mobile, mail:email, img:img, address:address, about:about, about1:about1}
var newobject=new ItemsController(0);
/*console.log(itemsfromhtml);
console.log(newobject);*/
//console.log(newobject.items);
newobject.addItem(itemsfromhtml);
newobject.display();


const source = document.getElementById('details').innerHTML;

const template = Handlebars.compile(source);

const context = {};
  context.name=name1;
  context.age=age;
  context.mobile=mobile;
  context.address=address;
  context.mail=email;
  context.img=img;
  context.about=about;
  context.about1=about1;


    const compiledHtml = template(context);

    const information = document.getElementById('finalmessage');
    information.innerHTML = compiledHtml;
}







