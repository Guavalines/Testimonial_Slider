const testimonials = [
{
  name: "Winifred K.",
  photoUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  text: "Thanks to Apple, we've just launched our 5th website! Apple saved my business. Man, this thing is getting better and better as I learn more about it. I would gladly pay over 600 dollars for Apple."
},
{
  name: "Fern G.",
  photoUrl: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  text: "If you want real marketing that works and effective implementation - Apple's got you covered. Very easy to use. I love your system."
},
{
  name: "Celestine X.",
  photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  text: "Apple did exactly what you said it does. Thank you so much for your help. Thank you so much for your help. Wow what great service, I love it!"
}
];

const imgE1 = document.querySelector("img");
const textE1 = document.querySelector(".text");
const usernameE1 = document.querySelector(".username");

let idx = 0;

updateTestimonial()

function updateTestimonial(){
  const {name, photoUrl, text} =
  testimonials[idx];
  imgE1.src = photoUrl;
  textE1.innerText = text;
  usernameE1.innerText = name;
  idx++
  if(idx === testimonials.length){
    idx = 0;
  }
  setTimeout(()=>{
    updateTestimonial()
  }, 2000)
}
