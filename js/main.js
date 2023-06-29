const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const getData = () => {
  fetchData("https://bhavikaa.github.io/newscorp-code-test/api/collection.json").then((collections) => {
    let collectionId = collections.find(
      (collection) => collection.collectiontype === "landing"
    ).collectionid;
    // url = "localhost/api/collection/"+collectionId;
    fetchData("https://bhavikaa.github.io/newscorp-code-test/api/news.json").then((news) => {
      setData(0, "title1", "img1", "intro1","publish1", news);
      setData(1, "title2", "img2", "intro2","publish2",news);
      for (let i = 3; i <= news.length; i++) {
        addElement("section3", "div", i, "article" + i, "article");
        addElement("article" + i, "hr", i, "", "");
        addElement("article" + i, "img", i, "img" + i, "articleImg");
        addElement("article" + i, "span", i, "title" + i, "articleTitle"); 
        setData(i - 1, "title" + i, "img" + i, null,null, news);
      }
    });
  });
};

const setData = (index, title, image, intro,publish,news) => {
  document.getElementById(title).innerHTML = news[index].Title;
  document.getElementById(image).setAttribute("src", news[index].Imageurl);
  if (intro) document.getElementById(intro).innerHTML = news[index].Intro;
  if(publish)document.getElementById(publish).innerHTML = news[index].Published;
}

const addElement = (parent, element, index, id, className) => {
  var parentDivElement = document.getElementById(parent);
  var childDivElement = document.createElement(element);
  childDivElement.setAttribute("id", id);
  childDivElement.setAttribute("class", className);
  parentDivElement.appendChild(childDivElement);
}
window.onload = getData();
