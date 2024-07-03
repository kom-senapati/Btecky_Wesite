
//  Work experience cards

const experiencecards = document.querySelector(".about_us-cards");
const exp = [
  {
     title: "Software Development Intern",
    cardImage: "assets/images/experience-page/flipkart.jpg",
    desp: "",
    desp2: "",
    desp3: ""
  }
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({  desp , desp2 , desp3}) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <article class="card-body">
          <header>
            <ol>
            <div class="desptext">
              ${desp}
            </div>
            </ol>
            <ol>
            <div class="desptext">
              ${desp2}
            </div>
            </ol>
            <ol>
            <div class="desptext">
              ${desp3}
            </div>
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Telegram",
    cardImage: "assets/images/experience-page/1.png",
    description:
      "Join now ",
    link:"https://t.me/bteckyls"
  },
  {
    title: "Whatapp Channel",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Join now ",
    link:"https://whatsapp.com/channel/0029Va7uSWT7oQhlRVJKka1Q" 
  },
  {
    title: "Instagram",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Join now ",
    link:"https://www.instagram.com/lavish_sheth_ls/"
  },
  {
    title: "LinkedIn",
    cardImage: "assets/images/experience-page/4.png",
    description:
      "Join now ",
    link:"https://www.linkedin.com/in/lavish-sheth-163844215/"
  },
  {
    title: " Btecky Whatapp Community 1",
    cardImage: "assets/images/experience-page/c1.png",
    description:
      "Join now , Join Community 2 if Coummunity 1 is full ",
    link:"https://chat.whatsapp.com/IiJY9d1LUjXKjzQxLahf7E" 
  },
  {
    title: "Btecky Whatapp Community 2",
    cardImage: "assets/images/experience-page/c2.png",
    description:
      "Join now ",
    link:"https://whatsapp.com/channel/0029Va7uSWT7oQhlRVJKka1Q" 
  },
  {
    title: "Btecky Whatapp Group 1",
    cardImage: "assets/images/experience-page/g1.png",
    description:
      "Join now ",
    link:"https://chat.whatsapp.com/Cg9oFyxsQ3Q2A4pVQiLg1A" 
  },
  {
    title: "Btecky Whatapp Group 2",
    cardImage: "assets/images/experience-page/g2.png",
    description:
      "Join now ",
    link:"https://chat.whatsapp.com/K8IjflRKrV19wmhAzAtvkA" 
  },
  {
    title: "Btecky Whatapp Group 3",
    cardImage: "assets/images/experience-page/g3.png",
    description:
      "Join now ",
    link:"https://chat.whatsapp.com/EpTufAUu4Bu8Ym3cbnKBuF" 
  },
  {
    title: "Btecky Whatapp Group 4",
    cardImage: "assets/images/experience-page/g4.png",
    description:
      "Join now ",
    link:"https://chat.whatsapp.com/FS5Jxa4MuDEACz6LXaEwZj" 
  },
  {
    title: "Btecky OpenSource - 1",
    cardImage: "assets/images/experience-page/o1.png",
    description:
      "Join now ",
    link:"https://chat.whatsapp.com/Dz6LRmBjVlGIT8kSHYJPq9" 
  },
  {
    title: "Btecky OpenSource - 2",
    cardImage: "assets/images/experience-page/o2.png",
    description:
      "Join now ",
    link:"https://chat.whatsapp.com/KMg8wBIDzUHBjNWlxKfKRH" 
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description, link}) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle"><Em>${title}</Em></h2><br>
          <p class="copy">${description}</p></div>
        <a href="${link}" target="_blank" class="sociallink"><strong>Link to connect</strong> </a> 
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Lavish Sheth",
    subtitle: "Owner",
    image: "assets/images/experience-page/lavish.png",
    desp: "I am Lavish Sheth, an ex-intern at Impetus and currently working as a System Engineer. Apart from this, I am a content creator and the founder of @btecky and @algorithm&code. I am also a Google Cloud Facilitator and have helped more than 1000 students across the globe step into the world of Google Cloud.In addition to this, I teach coding and other technical stuff, empowering learners to achieve their dreams in the tech industry.",
    href: "https://www.linkedin.com/in/lavish-sheth-163844215/",
  },
  {
    title: "KushaL Agrawal",
    subtitle: "Moderator and Event Manager",
    image: "assets/images/experience-page/kushal.jpg",
    desp: "Experienced campus ambassador with Coding Ninjas, Btecky, Lets Upgrade, and Syncloop. Skilled in community engagement and leadership. Hack2 Skill campus ambassador with strong communication abilities.",
    href: "https://www.linkedin.com/in/kushal-agrawal347/",
  },
  {
    title: "Bhargav shirin",
    subtitle: "Mentor",
    image: "assets/images/experience-page/bhargav.jpg",
    desp: "Student at GITAM University | OCI certified Developer Professional | Certified Cloud Architect | Firebase | Kubernetes | Docker | GCP | AZURE | AWS | Web Developer | Git & Github | Tech Enthusiast",
    href: "https://www.linkedin.com/in/bhargav-shirin-nalamati-34092a263/",
  },
  {
    title: "Sumit Kumar",
    subtitle: "Technical Adviser",
    image: "assets/images/experience-page/sumit.jpg",
    desp: "Syncloop Campus Ambassador with expertise in technical writing, content creation, and cloud computing. Strong communicator with a passion for community engagement and leadership.",
    href: "https://www.linkedin.com/in/sumit-kumar-6999999cloudcomputing/",
  },
];
  const showCards3 = () => {
    let output = "";
    mentor.forEach(
      ({ title, image, subtitle, desp, href }) =>
        (output += `  
        <div class="blog-slider__item swiper-slide">
          <div class="blog-slider__img">
              <img src="${image}" alt="">
          </div>
          <div class="blog-slider__content">
            <div class="blog-slider__title">${title}</div>
            <span class="blog-slider__code">${subtitle}</span>
            <div class="blog-slider__text">${desp}</div>
            <a href="${href}" target="_blank" class="blog-slider__button">Connect him on linkedIn </a>   
          </div>
        </div>
        `)
    );
    hackathonsection.innerHTML = output;
  };
  document.addEventListener("DOMContentLoaded", showCards3);




const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Coding Ninja",
  },
  {
    title: "Scaler",
  },
  {
    title: "Preplef",
  },
  {
    title: "Spheorn",
  },
  {
    title: "Hack 2 Skill ",
  },
  {
    title: "Greek For Greeks",
  },
  {
    title: "Level Up",
  },
  {
    title: "Masai School",
  },
  {
    title: "Red Pill",
  },
  {
    title: "Naukari",
  },
  {
    title: "Syncloop",
  },
];

const showCards4 = () => {
  let output = "";
  moocscards.forEach(
    ({ title}) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards4);
