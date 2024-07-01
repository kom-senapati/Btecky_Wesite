AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".about_us-cards");
const exp = [
  {
     title: "10+ Free Courses For Beginner With Free Certificate & Goodies",
    cardImage: "assets/images/Blog/Blog.png",
    topic:"Free Courses & Certificate For Student",
    date:"01-07-2024",
    desp: "Embarking on a new learning journey can be exciting, especially when you have access to high-quality, free courses. One platform offers a variety of free courses for beginners, complete with certificates and sometimes even additional goodies. These courses cover diverse topics such as programming, data science, business management, and creative arts, providing foundational knowledge, practical skills, and industry-recognized certifications to boost your career or explore new interests.",
    desp2: "Receiving a certificate upon course completion not only validates your newly acquired skills but also enhances your resume and LinkedIn profile. The platform often collaborates with prestigious universities and organizations, offering extra perks like exclusive webinars, downloadable resources, and even tangible goodies such as merchandise or discounts on advanced programs.",
    desp3: "These free courses also provide an excellent opportunity to join a community of learners. Engaging with fellow students, participating in discussion forums, and accessing instructor support enriches your learning experience. Whether you're a student, a professional looking to upskill, or someone exploring a new hobby, these courses offer a flexible and valuable way to achieve your goals without financial strain. To get started, check out this video [link to video] and begin your learning journey today.",
  }
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title,topic,date,cardImage, desp , desp2 , desp3}) =>
      (output += `        
        <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
          <div class="card card1">
            <img src="${cardImage}" class="featured-image"/>
            <article class="card-body">
              <header>
                <div class="title">
                  <h3>${title}</h3>
                </div>
                <p class="meta">
                  <span class="pre-heading">${topic}</span><br>
                  <span class="author">${date}</span>
                </p>
            <ol>
            <div class="desptext_1">
              ${desp}
            </div>
            </ol>
            <ol>
            <div class="desptext_1">
              ${desp2}
            </div>
            </ol>
            <ol>
            <div class="desptext_1">
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




 
