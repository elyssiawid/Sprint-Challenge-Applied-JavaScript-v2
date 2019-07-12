// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(function (response) {
    const responseData = response.data.topics;
    responseData.forEach(data => {
      Tabs(data);
    });
  })
  .catch(function (error) {
    console.log(error);
  });



function Tabs(data) {
    //create elements
    const tab = document.createElement('div')
    //elements with classes
    tab.classList.add('tab');
    //add content
    tab.textContent = data;
    // //appending div to page
    const tabs = document.querySelector('.tabs');
    tabs.appendChild(tab)
    return tab
}

const topics = document.querySelector('.topics')
topics.appendChild(Tabs())