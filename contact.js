const sendMail = document.querySelector(".sendMail");
const mailTitle = document.querySelector("#mailTitle");
const mailBody = document.querySelector("#mailBody");
const mailCc = document.querySelector("#mailCc");

sendMail.addEventListener("click", () => {
  console.log(mailTitle.value);
  console.log(mailBody.value);
  console.log(mailTitle.value, mailBody.value);
  const mailString = `mailto:im05@kakao.com?subject=${mailTitle.value}&cc=${mailCc.value}&body=${mailBody.value}`;
  window.open(mailString);
});
