// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the header-container component

function Header(data) {
    //create elements
    console.log(data);
  const header = document.createElement('div')
  const date = document.createElement ('span')
  const name = document.createElement('h1')
  const temp = document.createElement('span')
  //elements with classes
  header.classList.add('header');
  date.classList.add('date');
  temp.classList.add('temp');
    //append
    header.appendChild(date);
    header.appendChild(name);
    header.appendChild(temp);
    cardInfo.appendChild(username);
    cardInfo.appendChild(location);
    cardInfo.appendChild(profile);
    cardInfo.appendChild(profileLink);
    cardInfo.appendChild(followers);
    cardInfo.appendChild(following);
    cardInfo.appendChild(bio);
    profile.appendChild(profileLink);
      //add content
    name.textContent = `name: ${data.name}`;
    username.textContent = `username: ${data.login}`;
    location.textContent= `location: ${data.location}`;
    profileLink.src = `profileLink: ${data.html_url}`;
    profile.textContent= `profile: ${data.html_url}`;
    followers.textContent = `followers: ${data.followers}`;
    following.textContent = `following: ${data.following}`;
    bio.textContent = `bio: ${data.bio}`;
    //appending div to page
    cards.appendChild(card)

}
