const nav = document.getElementById('nav');

function openMobileMenu() {
nav.style.display = 'block';
}
  
function closeMobileMenu() {
nav.style.display = 'none';
}
  
openMobileMenu();
closeMobileMenu();

const LECTURERS_DATA = [
    {
        image: "images/lecturer1.png",
        name:  "Dr. Bright Shaw",
        title: "Professor in Informatics",
        info: "Phd in Information science and head of Informatics dept.",
        Rank: "1",
    },
    {
        image: "images/lecturer3.png",
        name: "Jelyn Naa Barkey",
        title: "Professor in Javascript Applications",
        info: "Rich experience in Java and featured in Web Apps of various tech companies.",
        Rank: "2",
    },
    {
        image: "images/lecturer4.png",
        name: "Dr. Shenorah Mingles",
        title: "Professor in Information Technology",
        info: "A tech savvy with in-depth knowledge of modern technologies.",
        Rank: "3",
    },
    {
        image: "images/lecturer5.png",
        name: "Dr. Anastacia Clothworthy",
        title: "Principal of  Orbit Web Innovations",
        info: "Orbit Web Inno. is the brainchild of Anas. Started the school in 2019 to help educate and connect people from around the world.",
        Rank: "4",
    },
    {
        image: "images/lecturer2.png",
        name: "Dr. George Greggory",
        title: "Professor in Web Applications",
        info: "Greg a Web Application fanatic with a rich portfolio of collaborative project with great tech companies.",
        Rank: "5",
    },
    {
        image: "images/lecturer6.png",
        name: "Dr. Frederick Khan",
        title: "Professor in Artificial Intelligence",
        info: "Knowledge in simulating  human intelligence in machines that are programmed to think like humans and mimic their actions.",
        Rank: "6",
    },
];

function featuredFunction() {
  let featureCard = '';
  LECTURERS_DATA.forEach((item) => {
    const Ranking = item.Rank;
    const lecturerList = item.name;
    const { image } = item;
    const { title } = item;
    const { info} = item;
    if (Ranking <= 2) {
      featureCard += `<div class="course_lecturers">
      <div class="featured-image">
        <img src="images/checkers.png" alt="checkers" class="checkers"/>
        <img src="${image}" alt="" class="lecturer_icon"/>
      </div>
      <div class="lecturer_content">
          <h2 class="lecturer_name">${lecturerList}</h2>
          <p class="lecturer_title">${title}</p>
          <hr id="underline" />
          <small>${info}</small>
      </div>
    </div>`;
    } else {
        featureCard += `<div class="course_lecturers hide">
      <div class="featured-image">
        <img src="images/checkers.png" alt="checkers" class="checkers"/>
        <img src="${image}" alt="" class="lecturer_icon"/>
      </div>
      <div class="lecturer_content">
          <h2 class="lecturer_name">${lecturerList}</h2>
          <p class="lecturer_title">${title}</p>
          <hr id="underline" />
          <small>${info}</small>
      </div>
    </div>`;
    }
  });
  document.getElementById('lecturer-list').innerHTML = featureCard;
}

featuredFunction();
