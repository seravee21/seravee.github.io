const iconBtn = document.querySelectorAll('.input-icon-right');
for (var i = 0; i < iconBtn.length; i++) {
  iconBtn[i].addEventListener("click", function() {
    const password = this.previousElementSibling;
    const iconSvg = this.childNodes[1];
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
    iconSvg.classList.toggle('icon-show');
  });
}