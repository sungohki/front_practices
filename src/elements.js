// Section Elements
const containerBox = document.querySelector('#container');

const headerTab = document.querySelector('#header');
const headerMenu = headerTab.querySelector('.header_menu');
const headerMenuToggle = headerTab.querySelector('.header_menu_toggle');
const headerMenuList = headerTab.querySelector('.header_menu_list');

const bannerSection = document.querySelector('#banner');
const bannerTypingSpace = bannerSection.querySelector(
  '.banner_greeting_card > p:nth-child(2) > span'
);
const bannerSwipingButton = bannerSection.querySelector('.banner_swipe_button');

const mainSection = document.querySelector('#main');
const aboutBox = mainSection.querySelector('.about_box');
const featuresBox = mainSection.querySelector('.features_box');
const contactBox = mainSection.querySelector('.contact_box');

const aboutCard = aboutBox.querySelector('.about_box_profile > .frame');
const featureCards = featuresBox.querySelectorAll(
  '.features_box_list > .features_box_item'
);

const sendForm = contact.querySelector('.contact_form');
const senderName = sendForm.querySelector('.sender_name');
const senderEmail = sendForm.querySelector('.sender_email');
const senderMessage = sendForm.querySelector('.sender_message');
const sendBtn = sendForm.querySelector('.send_btn');
