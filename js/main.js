const aboutUs = document.querySelector("#aboutUs");
const hidItems = [document.querySelector(".right-side"), document.querySelector(".article"), document.querySelector(".flex"), document.querySelector(".email-text")];
const wrapper = document.querySelector(".wrapper");
const emailButton = document.querySelector('.email-button');
const emailInput = document.querySelector('.email-input');
const homePage = document.querySelector('#homePage');

const transformPage = (text)=>{
  const newParagraph = document.createElement('p');
  hidItems.forEach((element) => {
    element.classList.add("hidden");
  })
  wrapper.style.setProperty('display', 'initial');
  document.body.style.setProperty('margin-left', '124px');
  document.body.style.setProperty('margin-top', '17px');
  homePage.style.setProperty('margin-right', '345.5px');
  newParagraph.classList.add('wrapper');
  newParagraph.classList.add('newText');
  newParagraph.innerText = text;
  document.querySelector('.links').before(newParagraph);
}

aboutUs.addEventListener('click', () => {
  const checkEl = document.querySelector('.newText');
  const text = "eShop is a startup, an online store where you can buy products from world brands. The store provides a wide range of products, a simple and secure purchase process, as well as fast product delivery. For help in fixing any problems, our call-center eshophelp@gmail .com will be open 24/7. Please send us your email so we can let you know when the eShop is launched. We appreciate your help. With eShop, every purchase will be a pleasure.";    if(checkEl == null || checkEl.innerText != text) {
      if(checkEl){
        checkEl.remove();
      }
    aboutUs.classList.add('hidden');
    transformPage(text);
    }
  });

homePage.addEventListener('click', ()=>{
  const checkEl = document.querySelector('.newText');
  if(checkEl) {
    checkEl.remove();
    hidItems.forEach((element) => {
      element.classList.remove("hidden");
    })
    aboutUs.classList.remove('hidden');
    wrapper.style.setProperty('display', 'flex');
    document.body.style.removeProperty('margin-left');
    document.body.style.removeProperty('margin-top');
    homePage.style.removeProperty('margin-right');
  }
});

emailButton.addEventListener('click', ()=>{
  const mailFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailInput.value.match(mailFormat)) {
    const text = "You have successfully sent us an email.";
    transformPage(text);
  } else {
    const text = "Invalid email format. Try to enter again.";
    transformPage(text);
  }});


emailInput.addEventListener('keypress', (event)=>{
  const checkEl = document.querySelector('.newText');
  if(event.key == "Enter"){
    if(!checkEl) {
      emailButton.click();
      emailInput.value = " ";
    }
  }
})

