function singlePersonHandler(person) {
  console.log(typeof person, person);
  const section = document.getElementById("single-person");
  const searchBar = document.getElementsByClassName("search_bar")[0];
  const cardsSection = document.getElementById("cards-wrapper");
  const filteredCardsSection = document.getElementById(
    "filtered-cards-wrapper"
  );

  const { Name, Branch } = person;
  const CollegeEmailID = person["College Email ID"];
  const CollegeYear = person["College Year"];
  const MasteredSkills = person["Mastered Skills"].split(", ");
  let skillsHTML = "";
  MasteredSkills.forEach((skill) => {
    skillsHTML += `<span class='person-skill'>${skill}</span>`;
  });

  let ProfilePhoto = "https://source.unsplash.com/random5";
  if (person["Profile Photo"]) {
     ProfilePhoto = person["Links"];
  }

  const LinkedInID = person["LinkedIn ID Link"];
  const InstagramID = person["Instagram ID Link"];
  let socialLinksHTML = `<a href='${LinkedInID}' class='social-media-icon'><img src="/data/img/linkedin.svg" alt="instagram link" width="40" height="40"></a><a href='${InstagramID}' class='social-media-icon'><img src="/data/img/instagram.svg" alt="instagram link" width="40" height="40"></a>`;


  if (person["GitHub ID Link (Optional)"]) {
    const GithubID = person["GitHub ID Link (Optional)"];
    socialLinksHTML += `<a href='${GithubID}' class='social-media-icon'><img src="/data/img/github.svg" alt="instagram link" width="40" height="40"></a>`;
  }
  if (person["Other Social Links (Optional)"]) {
    const OtherID = person["Other Social Links (Optional)"];
    socialLinksHTML += `<a href='${OtherID}' class='social-media-icon'></a>`;
  }

  if (person["Project Links (Optional)"]) {
    const ProjectLinks = person["Project Links (Optional)"];
    console.log(ProjectLinks);
  }

  cardsSection.style.display = "none";
  searchBar.style.display = "none";
  filteredCardsSection.style.display = "none";
  section.style.display = "block";

  section.innerHTML = `<div class='single-person-wrapper'>
  <span class="close-section" onclick="closeSinglePersonSection()"><img src="data/img/close.svg" alt="close"></span>
  <div class='left-section'>
  <div class='person-img' style='background-image:url(${ProfilePhoto});background-size:cover;background-position:center;'></div>
  <div class='person-profiles'>
  <div class='section-heading'>Profiles:</div>
  <div class='person-profiles-section'>${socialLinksHTML}</div>
  </div>
  </div>
  <div class='right-section'>
  <span class='person-name'>${Name}</span>
  <span class='person-year-branch'>${CollegeYear + " " + Branch}</span>
  <div class='section-heading'>Field(s) Of Specialization:</div>
  <div class='skills-section'>${skillsHTML}</div>
  <div class='section-heading'>Previous Work(s):</div>
  <div class='previous-work-section'></div>
  </div>
  </div>`;
}

function arrayMapping(array, arrayContainer, arrayContainerHTML) {
  array.map((person) => {
    const { Name, Branch } = person;
    const CollegeEmailID = person["College Email ID"];
    const CollegeYear = person["College Year"];
    const MasteredSkills = person["Mastered Skills"].split(", ");

    let ProfilePhoto = "https://source.unsplash.com/random5";
    if (person["Profile Photo"]) {
      ProfilePhoto = person["Links"];
    }

    let skillsHTML = "";

    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }
    shuffle(MasteredSkills);
    MasteredSkills.forEach((skill) => {
      skillsHTML += `<span class='skill' title='${skill}'>${skill}</span>`;
    });

    arrayContainerHTML += `<div class='card'>
    <div class='pfp' style='background-image:url(${ProfilePhoto});background-size:cover;background-position:center;'></div>
    <div class='info'>
      <h1 title='${Name}'>${Name}</h1>
      <h3>${CollegeYear + " " + Branch}</h3>
      <div class='skills'>
      ${skillsHTML}
      </div>
      <button class='details-button' onclick='singlePersonHandler(${JSON.stringify(
        person
      )})'>DETAILS</button>
      </div></div>`;
  });

  arrayContainer.innerHTML = arrayContainerHTML;

  return arrayContainerHTML;
}

const fetchURL = async () => {
  //to fetch data
  const resp = await fetch(
    "https://opensheet.vercel.app/1XtMa5U5Cl0kaKyDSAJJ5rLFxYVJnbzXlwXExFs-DDC0/Form+responses+1"
  );
  //fetched data is not something we can work with right now

  //to work with fetched data, we convert it into json or javascript object like structure with key-value pair
  const data = await resp.json();

  //getting the html containers for home page which will contain pre-loaded cards
  const devCardsContainer = document
    .getElementById("development")
    .getElementsByClassName("cards")[0];
  const designCardsContainer = document
    .getElementById("design")
    .getElementsByClassName("cards")[0];
  const MLCardsContainer = document
    .getElementById("ml")
    .getElementsByClassName("cards")[0];
  const ARVRCardsContainer = document
    .getElementById("ar-vr")
    .getElementsByClassName("cards")[0];
  const progCardsContainer = document
    .getElementById("cp")
    .getElementsByClassName("cards")[0];
  const otherCardsContainer = document
    .getElementById("other-categories")
    .getElementsByClassName("cards")[0];

  let devCardsContainerHTML = "";
  let designCardsContainerHTML = "";
  let MLCardsContainerHTML = "";
  let ARVRCardsContainerHTML = "";
  let progCardsContainerHTML = "";
  let otherCardsContainerHTML = "";

  //data is filtered out in categories
  const webDevCards = data.filter((person) =>
    person["Mastered Skills"].includes("Web Development")
  );
  const appDevCards = data.filter((person) =>
    person["Mastered Skills"].includes("App Development")
  );
  const gameDevCards = data.filter((person) =>
    person["Mastered Skills"].includes("Game Development")
  );
  const arvrCards = data.filter((person) =>
    person["Mastered Skills"].includes("AR/VR/XR")
  );
  const mlCards = data.filter((person) =>
    person["Mastered Skills"].includes("Machine Learning")
  );
  const aiCards = data.filter((person) =>
    person["Mastered Skills"].includes("AI")
  );
  const dataScienceCards = data.filter((person) =>
    person["Mastered Skills"].includes("Data Science")
  );
  const uiDesignCards = data.filter((person) =>
    person["Mastered Skills"].includes("UI Design")
  );
  const uxDesignCards = data.filter((person) =>
    person["Mastered Skills"].includes("UX Design")
  );
  const graphicDesignCards = data.filter((person) =>
    person["Mastered Skills"].includes("Graphics Design")
  );
  const vidEditCards = data.filter((person) =>
    person["Mastered Skills"].includes("Video Editing")
  );
  const programmingCards = data.filter((person) =>
    person["Mastered Skills"].includes("Competitive Programming")
  );

  let devCards = [...new Set(webDevCards.concat(appDevCards, gameDevCards))];
  let designCards = [
    ...new Set(uiDesignCards.concat(uxDesignCards, graphicDesignCards)),
  ];
  let MLCards = [...new Set(mlCards.concat(aiCards))];
  let ARVRCards = [...new Set(arvrCards)];
  let CPCards = [...new Set(programmingCards)];
  let otherCards = data.filter(
    (person) =>
      !new Set(devCards.concat(designCards, MLCards, ARVRCards, CPCards)).has(
        person
      )
  );

  console.log(devCards, designCards, MLCards, ARVRCards, CPCards, otherCards);

  arrayMapping(devCards, devCardsContainer, devCardsContainerHTML);
  arrayMapping(designCards, designCardsContainer, designCardsContainerHTML);
  arrayMapping(MLCards, MLCardsContainer, MLCardsContainerHTML);
  arrayMapping(ARVRCards, ARVRCardsContainer, ARVRCardsContainerHTML);
  arrayMapping(CPCards, progCardsContainer, progCardsContainerHTML);
  arrayMapping(otherCards, otherCardsContainer, otherCardsContainerHTML);

  console.log(data);

  document.getElementById("apply").addEventListener("click", () => {
    const branchValue = document.getElementById("branch-list").value;
    const yearValue = document.getElementById("year-list").value;
    const skillsValue = document.getElementById("skills-list").value;

    const filteredArrayContainer = document.getElementById(
      "filtered-cards-wrapper"
    );
    let filteredArrayHTML = "";

    let branchArray, yearArray, skillArray, filteredArray;

    if (branchValue || yearValue || skillsValue) {
      if (branchValue) {
        branchArray = data.filter((person) => person.Branch === branchValue);
        if (yearValue) {
          yearArray = branchArray.filter(
            (person) => person["College Year"] === yearValue
          );
          if (skillsValue) {
            skillArray = yearArray.filter((person) =>
              person["Mastered Skills"].includes(skillsValue)
            );
            filteredArray = skillArray;
          } else {
            filteredArray = yearArray;
          }
        } else {
          if (skillsValue) {
            skillArray = branchArray.filter((person) =>
              person["Mastered Skills"].includes(skillsValue)
            );
            filteredArray = skillArray;
          } else {
            filteredArray = branchArray;
          }
        }
      } else {
        if (yearValue) {
          yearArray = data.filter(
            (person) => person["College Year"] === yearValue
          );
          if (skillsValue) {
            skillArray = yearArray.filter((person) =>
              person["Mastered Skills"].includes(skillsValue)
            );
            filteredArray = skillArray;
          } else {
            filteredArray = yearArray;
          }
        } else {
          if (skillsValue) {
            filteredArray = data.filter((person) =>
              person["Mastered Skills"].includes(skillsValue)
            );
          }
        }
      }

      document.getElementById("cards-wrapper").style.display = "none";
      filteredArrayContainer.style.display = "grid";
      arrayMapping(filteredArray, filteredArrayContainer, filteredArrayHTML);

      console.log(filteredArray);
    } else {
      console.log("no");
    }
    console.log(branchValue, yearValue, skillsValue);
  });

  document.getElementById("search_container").addEventListener("click", () => {
    const filteredArrayContainer = document.getElementById(
      "filtered-cards-wrapper"
    );
    let filteredArrayHTML = "";

    const input = document.getElementById("search").value;
    let filteredArray;

    if (input) {
      filteredArray = data.filter((person) => {
        return (
          person.Name.toLowerCase().includes(input.toLowerCase()) ||
          person.Branch.toLowerCase().includes(input.toLowerCase()) ||
          person["College Year"].toLowerCase().includes(input.toLowerCase()) ||
          person["Mastered Skills"]
            .toLowerCase()
            .includes(input.toLowerCase()) ||
          (person["Project Links (Optional)"] === undefined
            ? false
            : person["Project Links (Optional)"].includes(input.toLowerCase()))
        );
      });

      console.log(filteredArray);

      document.getElementById("search").blur();
      document.getElementById("cards-wrapper").style.display = "none";
      filteredArrayContainer.style.display = "grid";
      arrayMapping(filteredArray, filteredArrayContainer, filteredArrayHTML);
    }
  });
};

fetchURL();
