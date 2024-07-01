AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".about_us-cards");

//Blog 1:
const exp = [
  {
     title: "10+ Free Courses For Beginner With Free Certificate & Goodies",
    cardImage: "assets/images/Blog/Blog.png",
    topic:"Free Courses & Certificate For Student",
    date:"01-07-2024",
    desp: "Embarking on a new learning journey can be exciting, especially when you have access to high-quality, free courses. One platform offers a variety of free courses for beginners, complete with certificates and sometimes even additional goodies. These courses cover diverse topics such as programming, data science, and providing foundational knowledge, practical skills, and industry-recognized certifications to boost your career.",
    desp2: "",
    desp3: "These free courses also provide an excellent opportunity for you guys.\nLink To Video: <a href=\"https://youtu.be/7JKSrp80TFY\" target=\"_blank\">https://youtu.be/7JKSrp80TFY</a><br>Link To Event Website: <a href=\"https://letsupgrade.in/programs#events\" target=\"_blank\">https://letsupgrade.in/programs#events</a>",
  }
];


// Blog 2:
const exp = [
  {
    title: "Google Innovators Program 2024",
    cardImage: "assets/images/Blog/Thumbnail.png",
    topic:"Google Innovators Scholarship for Google Certificate",
    desp: "The Google Innovators Scholarship for Google Certificate is a remarkable opportunity for individuals looking to enhance their skills with industry-recognized Google certifications. This scholarship offers a 100% free certification voucher, enabling learners to access high-quality training programs at no cost. Whether you're a beginner or looking to advance your expertise, this scholarship covers a range of courses that equip you with practical skills and knowledge required in today's tech-driven world. Don't miss out on this chance to accelerate your career growth with a prestigious Google Certificate. Apply now and take the first step towards achieving your professional goals.",
    desp2: "",
    desp3: "These free courses also provide an excellent opportunity for you guys.\nLink To Video: <a href=\"https://youtu.be/SP20o2NLbD4\" target=\"_blank\">https://youtu.be/SP20o2NLbD4/a><br>Link To Event Website: <a href=\"https://cloud.google.com/innovators?hl=en\" target=\"_blank\">https://cloud.google.com/innovators?hl=en</a>",
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




 
