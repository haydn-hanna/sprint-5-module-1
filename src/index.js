const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

function initializeNav(){
  const navButtons = document.querySelectorAll('nav a')
  const navText = siteContent.nav

  for(let i=0; i<navButtons.length; i++){
    const navTextKey = "nav-item-"+(parseInt(i)+1);
    navButtons[i].textContent = navText[navTextKey]
    navButtons[i].classList.add('italic')
  }
}

function initializeCTA(){
  const ctaContent = siteContent.cta;
  const ctaH1 = document.querySelector(".cta-text h1")
  const ctaButton = document.querySelector('.cta-text button')

  console.log({ctaContent,ctaH1,ctaButton})
  ctaH1.textContent = ctaContent.h1;
  ctaButton.textContent = ctaContent.button;
}

function initializeMainContent(){
  const mainContent = siteContent['main-content']
  const textContentElms = document.querySelectorAll('.text-content')
  const order = ['features','about','services','product','vision']

  for(let i = 0; i<order.length;i++){
    const sectionTitle = mainContent[order[i]+'-h4']
    const sectionContent = mainContent[order[i]+'-content']

    const h4 = textContentElms[i].querySelector('h4')
    const content = textContentElms[i].querySelector('p')

    h4.textContent = sectionTitle;
    content.textContent = sectionContent;
  }
}

function initializeContact(){
  const elms = document.querySelectorAll('.contact *')
  const contactContent = siteContent.contact;
  const order = ['contact-h4','address','phone','email']

  for(let i = 0; i<elms.length;i++){
    elms[i].textContent = contactContent[order[i]]
  }
}

function initializeFooter(){
  const footerLink = document.querySelector('footer a')
  footerLink.textContent = siteContent.footer.copyright
  footerLink.classList.add('bold')
}

function initializeImages(){
  const images = siteContent.images
  document.getElementById('logo-img').setAttribute('src',images["logo-img"])
  document.getElementById('cta-img').setAttribute('src',images["cta-img"])
  document.getElementById('middle-img').setAttribute('src',images["accent-img"])

}

initializeNav()
initializeCTA()
initializeMainContent()
initializeContact()
initializeFooter()
initializeImages()
