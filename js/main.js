const dicter ={
  '0':['Наш офис','Our oficces','Our oficces1' ],
  '1':['Услуги','service','service1' ],
  '2':['О компании','about company','about company1' ],
  '3':['Вакнсиис','vacansii','vacansii1' ],
  '4':['Контакты','contacts','contacts1' ],
  '5':['ДИЗЕЛЬНОЕ ТОПЛИВО НА БЛИЖНЕМ ВОСТОКЕ','DIESEL FUEL IN MIDDLE EAST'],
  '6':['Мы гарантируем высокое качество всех наших марок топлива.<br>Мы формируем индивидуальный подход к каждому клиенту.',"We guarantee the high quality of all our brands of fuel.<br> We form an individual approach for each client."],
  '7':['О КОМПАНИИ','ABOUT THE COMPANY'],
  '8':['Haji Ali BARAKZAI Petroleum Ltd. осуществляет оптовую продажу дизельного топлива с доставкой в страны Ближнего Востока, такие как Узбекистан, Таджикистан, Пакистан, Афганистан и др. Мы продаем дизельное топливо заявленного качества. Мы работаем индивидуально с каждым из наших клиентов. Мы гарантируем, что дизельное топливо будет доставлено в надлежащих условиях, а все цистерны пройдут тщательную проверку перед погрузкой. Важно понимать, что конечное качество нефтепродукта во многом зависит от того, насколько правильно осуществляется хранение. Одним из направлений нашей деятельности является предоставление оборудования в аренду, а также современных высококачественных резервуаров для хранения нефтепродуктов непосредственно на территории клиента. Вы можете ознакомиться с ценами на дизельное топливо и получить консультацию по любым интересующим вас вопросам у наших специалистов по телефонам, указанным на сайте.',"Haji Ali BARAKZAI Petroleum Ltd. carries out wholesale of diesel fuel with delivery to the countries of Middle East such as Uzbekistan, Tajikistan, Pakistan, Afghanistan etc. We sell diesel fuel of the declared quality. We work individually with each of our clients. We guarantee that diesel fuel will be delivered in proper conditions, and all tanks will undergo a thorough inspection before loading. It is important to understand that the final quality of the oil product largely depends on how correctly storage is carried out. One of our activities is the provision of equipment for rent, as well as modern high-quality tanks for storing petroleum products directly on the client's premises. You can check the prices for diesel fuel and get advice on any questions you are interested in from our specialists at the telephone numbers indicated on the website."],
  '9':['ДОСТАВКА','DELIVERY'],
  '10':['Мы осуществляем круглосуточные поставки по всему Ближнему Востоку. Это всегда безопасно и своевременно, так как доставка осуществляется проверенными и оснащенными специальным оборудованием бензовозами. У нас вы можете купить дизельное топливо оптом - мелким и крупным оптом. Это может быть десять тонн или одна тонна дизельного топлива. Мы занимаемся оптовыми и мелкооптовыми поставками. Haji Ali BARAKZAI Petroleum успешно сотрудничает с известными компаниями и является их надежным партнером. Наше дизельное топливо всегда отличается высоким качеством. Для постоянных клиентов действуют системы скидок','We carry out round-the-clock deliveries around Middle East. It is always safe and timely, as delivery is carried out by checked and equipped with special equipment fuel trucks. You can buy diesel fuel in bulk from us - small and large. It can be ten tons or one ton of diesel fuel. We are engaged in wholesale and small wholesale deliveries. Haji Ali BARAKZAI Petroleum successfully cooperates with well-known companies and is their reliable partner. Our diesel fuel is always of high quality. For regular customers there are discount systems.'],
  '11':['КАРЬЕРА','CAREER'],
  '12':['Haji Ali BARAKZAI Petroleum постоянно развивается и растет, в связи с этим компания заинтересована в привлечении профессиональных и опытных сотрудников. Наша компания поощряет сотрудников стремиться к профессиональному и карьерному росту. Главным приоритетом нефтяной компании Хаджи Али БАРАКЗАЙ является продажа дизельного топлива, а это значит, что мы должны гарантировать высокое качество обслуживания наших сотрудников. Если вы энергичны, талантливы, амбициозны, а также компетентны в нефтегазовом секторе, то мы приглашаем вас работать в нашей компании. Пожалуйста, присылайте резюме по электронной почте по адресу: barakzai.petroleum@gmail.com','Haji Ali BARAKZAI Petroleum is constantly developing and growing, in this regard, the company is interested in attracting professional and experienced employees. Our company encourages employees to strive for professional and career growth.The main priority of the Haji Ali BARAKZAI Petroleum company is the sale of diesel fuel, which means that we must guarantee the high quality of service by our employees. If you are energetic, talented, ambitious, and also competent in the oil and gas sector, then we invite you to work in our company. Please send resume by e-mail to: barakzai.petroleum@gmail.com'],
  '13':['КОНТАКТЫ','CONTACTS'],
  '14':['тел:','tel:'],
  '15':['Адресс:','Adress:'],
  '16':['60 Крауфурд-роуд, Оксфорд,<br> АНГЛИЯ OX4 2RA','60 Craufurd road, Oxford,<br> ENGLAND OX4 2RA']


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
    item.innerHTML=dicter[item.getAttribute('name')][key]
   
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
// burger menu

const burgerMenu= document.querySelector('.header-bottom-burger-menu')
const navListMenu= document.querySelector('.header-bottom-menu__navigation_list')
burgerMenu.addEventListener('click',()=>{
  navListMenu.classList.toggle('moveMenu')
})

const menuExit=document.querySelector('.menu-exit')
menuExit.addEventListener('click',()=>{
  navListMenu.classList.toggle('moveMenu')
})