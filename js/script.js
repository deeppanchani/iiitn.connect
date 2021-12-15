const fetchURL = async () => {
  const resp = await fetch(
    "https://opensheet.vercel.app/1XtMa5U5Cl0kaKyDSAJJ5rLFxYVJnbzXlwXExFs-DDC0/Form+responses+1"
  );

  const data = await resp.json();

  data.map((person) => {
    //properties without spaces can be destructured directly
    const { Name, Branch } = person;

    //properties with spaces has to stored in seperated variables
    const CollegeEmailID = person["College Email ID"];
    const CollegeYear = person["College Year"];

    //mastered skills is a string so by splitting it we get an array which will be easy to work with
    const MasteredSkills = person["Mastered Skills"].split(", ");

    const LinkedInID = person["LinkedIn ID Link"];
    const InstagramID = person["Instagram ID Link"];

    //all the profiles are now in array
    let Profiles = [LinkedInID, InstagramID];

    //these ids are optional so if block is used
    if (person["GitHub ID Link (Optional)"]) {
      const GithubID = person["GitHub ID Link (Optional)"];
      Profiles = [...Profiles, GithubID];
    }

    if (person["Other Social Links (Optional)"]) {
      const OtherID = person["Other Social Links (Optional)"];
      Profiles = [...Profiles, OtherID];
    }

    //profile photo is optional if block is used
    if (person["Profile Photo"]) {
      const ProfilePhoto = person["Profile Photo"];
      console.log(ProfilePhoto);
    }

    //project links are optional if block is used
    if (person["Project Links (Optional)"]) {
      const ProjectLinks = person["Project Links (Optional)"];
      console.log(ProjectLinks);
    }

    console.log(
      Name,
      Branch,
      CollegeEmailID,
      CollegeYear,
      MasteredSkills,
      Profiles
    );
  });
  console.log(data);
};

fetchURL();
