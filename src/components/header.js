const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  // Create HTML elements
  const divHeader = document.createElement('div');
  const spanDate = document.createElement('span');
  const divH1 = document.createElement('h1');
  const spanTemp = document.createElement('span');

  // Organize HTML Elements
  divHeader.appendChild(spanDate);
  divHeader.appendChild(divH1);
  divHeader.appendChild(spanTemp);
  
  // Add Classes to HTML elements
  divHeader.classList.add('header');
  spanDate.classList.add('date');
  spanTemp.classList.add('temp');

  // Assign textContent to elements
  spanDate.textContent = date;
  divH1.textContent = title;
  spanTemp.textContent = temp;

  return divHeader;

}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  let newHeader = Header('Super Cool News','January 13, 1988','78 °F');
  let cssElem = document.querySelector(selector);

  cssElem.appendChild(newHeader);
    
}

export { Header, headerAppender }

// Create HTML elements
// Organize HTML Elements
// Add Classes to HTML elements
// Assign textContent to elements