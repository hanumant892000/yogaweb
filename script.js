// // const bodyTag = document.body
// const bodyTag = document.querySelector('body')
// const herosection = document.querySelector('.hero-section')

// const h1Tag = document.createElement('h1')
// h1Tag.innerText = "Hanumant Technology"
// h1Tag.id = "title"
// h1Tag.style.color = "transparent"
// h1Tag.style.padding = "30px"
// h1Tag.style.textAlign = "center"
// h1Tag.style.fontSize = "50px"
// h1Tag.style.webkitTextStroke = "2px blue"
// console.log(h1Tag);
// // bodyTag.append(h1Tag)
// bodyTag.insertBefore(h1Tag, herosection)

// let pTag = document.createElement('p')
// pTag.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae vel magni beatae nobis harum, suscipit, laborum officia dolor quod mollitia molestiae, sit ab tempore distinctio provident saepe accusamus nemo reiciendis.'
// // console.log(pTag);
// // bodyTag.appendChild(pTag)

// herosection.append(pTag)

const bodyTag = document.body;

const header = document.createElement("header");
header.style.display = "flex"
header.style.justifyContent = "space-between"
header.style.alignItems = "center"
header.style.padding = "10px 35px"
header.style.backgroundColor = "#EFEFEF"
bodyTag.append(header);

const logo = document.createElement("img");
logo.src =
  "https://www.hanumanttechnology.com/images/hanumant-technology-logo.png";
logo.alt = "hanumant technology";
logo.style.height = "35px"
header.append(logo);

const navigation = document.createElement("nav");
navigation.className = "navigation";
navigation.style.display = "flex"
navigation.style.gap = "25px"
header.append(navigation);

const navitems = ["Home", "Course", "Services", "About", "Help"];
navitems.forEach((item)=>{
    const li = document.createElement('li')
    li.style.listStyleType = "none"
    navigation.append(li)
    const a = document.createElement('a')
    a.href = "/"
    a.style.textDecoration = "none"
    a.style.color = "inherit"
    a.innerHTML = item
    li.append(a)
})

const heroSection = document.createElement("section");
heroSection.className = "hero-section";
heroSection.style.textAlign = "center";
heroSection.style.padding = "25px";
heroSection.style.backgroundImage = "url('./herobg.avif')";
heroSection.style.backgroundSize = "cover";
heroSection.style.color = "white";
bodyTag.append(heroSection);

const profileImg = document.createElement("img");
profileImg.src = "./profile.png";
profileImg.alt = "profile image";
profileImg.style.height = "150px";
console.log(profileImg);
heroSection.append(profileImg);

const heroH1 = document.createElement("h1");
heroH1.innerHTML = "Sanjay Singh";
heroH1.style.margin = "15px 0px";
heroSection.append(heroH1);

const heroPTag = document.createElement("p");
heroPTag.innerHTML = "MERN-Stack Developer | Designer | Youtuber";
heroSection.append(heroPTag);

const aboutSection = document.createElement("section");
aboutSection.className = "about-section";
aboutSection.style.backgroundColor = "#E9E9E9";
aboutSection.style.margin = "20px";
aboutSection.style.padding = "20px";
bodyTag.append(aboutSection);

const aboutH1Tag = document.createElement("h1");
aboutH1Tag.innerHTML = "About Me";
aboutH1Tag.style.margin = "15px 0px";
aboutSection.append(aboutH1Tag);

const aboutPTag = document.createElement("p");
aboutPTag.innerHTML =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, accusantium illo. Repellat, magnam debitis quaerat sed ducimus modi maiores, amet ipsam voluptatum ullam assumenda soluta, sunt minus laudantium non a.";
aboutSection.append(aboutPTag);
