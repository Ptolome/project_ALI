const dicter ={
  '0':['Наш офис','Our oficces','Our oficces1' ],
  '1':['Услуги','service','service1' ],
  '2':['О компании','about company','about company1' ],
  '3':['Вакнсиис','vacansii','vacansii1' ],
  '4':['Контакты','contacts','contacts1' ]
}
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

function init(){
  let map = new ymaps.Map('map',{
    center: [51.752150, -1.258504],
    zoom:10
  })
}
  
ymaps.ready(init)
// подключаем кнопки ENG RUS
const btnENG=document.querySelector('.btn-ENG')
const btnRUS=document.querySelector('.btn-RUS')
const btnPERS=document.querySelector('.btn-PERS')
const changeLang=document.querySelectorAll('.dict')
btnENG.style.color='gold'
btnENG.style.fontSize='120%'


const toChangeLang =(key)=>{
  for (const item of changeLang){
    item.textContent=dicter[item.getAttribute('name')][key]
   
  }
}


btnENG.addEventListener('click', (event)=>{
 const ENG= event.target.style
 ENG.color='gold'
 ENG.fontSize='120%'
 btnRUS.style.color='white'
 btnRUS.style.fontSize='100%'
 btnPERS.style.color='white'
 btnPERS.style.fontSize='100%'
 toChangeLang(1)
})
btnRUS.addEventListener('click', (event)=>{
  const RUS= event.target.style
  btnENG.style.color='white'
  btnENG.style.fontSize='100%'
  RUS.color='gold'
  RUS.fontSize='120%'
  btnPERS.style.color='white'
  btnPERS.style.fontSize='100%'
  toChangeLang(0)
 
 })
btnPERS.addEventListener('click', (event)=>{
  const PERS= event.target.style
  btnENG.style.color='white'
  btnENG.style.fontSize='100%'
  PERS.color='gold'
  PERS.fontSize='120%'
  btnRUS.style.color='white'
  btnRUS.style.fontSize='100%'
 
  toChangeLang(2)
 })
  