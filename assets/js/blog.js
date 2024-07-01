AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".about_us-cards");
const exp = [
  {
     title: "10+ Free Courses For Beginner With Free Certificate & Goodies",
    cardImage: "assets/images/arcade/lv1.png",
    topic:"Topic",
    date:"date",
    desp: "Welcome to the chan of you amazing individuals.to the chan of you amazing individualsto the chan of you amazing individualsto the chan of you amazing individuals",
    desp2: "On thih to the chan of you amazing individualsmore!",
    desp3: "Myorld ofto the chan of you amazing individuals technology.",
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




 
