
const navbtn =  document.querySelector('.navbtn');
const sidebar = document.querySelector('.sidebar');

navbtn.addEventListener('click',()=>{
    console.log("hi")

    sidebar.classList.toggle('active')
});