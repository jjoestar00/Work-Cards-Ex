const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


const teamContainer = document.getElementById("team-container");

const form = document.getElementById("team-form");

renderteam();

form.addEventListener("submit", function(event) {
    event.preventDefault();


const name = document.getElementById("member-name").value;
const role = document.getElementById("member-role").value;
const email = document.getElementById("member-email").value;
const image = document.getElementById("member-img").value;

const newmember =  {
name: name,
role: role,
email: email,
img: image
  };


  teamMembers.push(newmember);

  renderteam();
  

});



function renderteam(){

    teamContainer.innerHTML = "";

for (let i = 0; i < teamMembers.length; i++) {
    
    const member = teamMembers[i];

    teamContainer.innerHTML += `
        <div class="team-card">
            <img src="${member.img}" alt="${member.name}">
            <div class="member-info">
                <h3>${member.name}</h3>
                <p>${member.role}</p>
                <p>${member.email}</p>
            </div>
        </div>
    `;
}

};