const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu-item');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close');
const menuIcon = document.querySelector('.menu-icon');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    hamburger.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    hamburger.style.display = 'none';
  }
}

menuIcon.addEventListener('click', toggleMenu);

menuItem.forEach((menuItem) => {
  menuItem.addEventListener('click', toggleMenu);
});

const speakersInforArray = [
  {
    image: './images/speakers/jeff.jpeg',
    name: 'Jeff Bezos',
    details: 'Founder and executive chairman of Amazon',
    work: 'Entrepreneur, media proprietor, investor, computer engineer',
  },
  {
    image: './images/speakers/mark.jpg',
    name: 'Mark Zuckerberg',
    details: 'Owner of Facebook',
    work: 'He helps build serverless integrations for facebook',
  },
  {
    image: './images/speakers/Devlin.jpg',
    name: 'Nicolas Fränkel',
    details: 'Developer Advocate',
    work: 'Currently working for Hazelcast. Also double as a teacher in universities and higher education schools, a trainer and triples as a book author.s',
  },
  {
    image: './images/speakers/James.jpg',
    name: 'Facundo Giuliani',
    details: 'Developer Relations Engineer',
    work: 'Full Stack Developer. Auth0 Ambassador. Prisma Ambassador. Cloudinary Media Developer Expert. GitKraken Ambassador. He is also an open-source contributor',
  },
  {
    image: './images/speakers/Florian.jpg',
    name: 'Fabian Gosebrink',
    details: 'Offering Solutions Software GmbH',
    work: 'Fabian Gosebrink ist Pluralsight Autor,Microsoft MVP und ASP.NET Core & Angular Webentwickler',
  },
  {
    image: './images/speakers/Roy.jpg',
    name: 'George Kosmidis',
    details: 'Cloud Solutions Architect',
    work: 'He is a Cloud Solutions Architect and.NET Software Engineer',
  },
];

for (let i = 0; i < speakersInforArray.length; i += 1) {
  const speakerSection = document.querySelector('.speakers_section');
  const cardContainer = document.createElement('div');
  cardContainer.setAttribute('class', 'card_container');
  speakerSection.appendChild(cardContainer);
  const speakerCard = document.createElement('div');
  speakerCard.setAttribute('class', 'speaker_cards');
  const spanSpeaker = document.createElement('div');
  spanSpeaker.setAttribute('class', 'span_speaker');
  const image = document.createElement('img');
  image.setAttribute('class', 'speaker_img');
  image.src = `${speakersInforArray[i].image}`;
  spanSpeaker.appendChild(image);
  const speakerDetails = document.createElement('div');
  speakerDetails.setAttribute('class', 'speaker_details');
  const speakerName = document.createElement('h5');
  speakerName.setAttribute('class', 'speaker_name');
  speakerName.innerText = `${speakersInforArray[i].name}`;
  speakerDetails.appendChild(speakerName);
  const speakerInfor = document.createElement('h5');
  speakerInfor.setAttribute('class', 'speaker-infor');
  speakerInfor.innerText = `${speakersInforArray[i].details}`;
  speakerDetails.appendChild(speakerInfor);
  const speakerPara = document.createElement('p');
  speakerPara.setAttribute('class', 'para_speaker');
  speakerPara.innerText = `${speakersInforArray[i].work}`;
  speakerDetails.appendChild(speakerPara);
  spanSpeaker.appendChild(speakerDetails);
  speakerCard.appendChild(spanSpeaker);

  cardContainer.appendChild(speakerCard);
}