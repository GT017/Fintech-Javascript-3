function addToList() {
  const listOfClicks = document.querySelector('.list');
  const item = document.createElement('li');

  item.textContent = `2xClick - ${new Date()}`;
  item.textContent = item.textContent.slice(0, '2xClick - Fri Nov 03 2017 17:17:35'.length + 1);
  listOfClicks.appendChild(item);
}

function doubleClick(element, doubleClickHandler, timeDistance) {
  let prevTimeStamp = timeDistance;

  element.addEventListener('click', (event) => {
    const currTimeStamp = event.timeStamp;
    if (currTimeStamp - prevTimeStamp < timeDistance) {
      doubleClickHandler();
    } else {
      prevTimeStamp = currTimeStamp;
    }
  });
}
const button = document.querySelector('.button');
doubleClick(button, addToList, 500);