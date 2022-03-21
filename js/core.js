const tSidebar = document.querySelector('.sidebar-toggle');

tSidebar.addEventListener('click', function () {
  const acSidebar = document.querySelector('.sidebar');
  const c = this.childNodes;
  c[1].classList.toggle('tw-rotate-180');
  acSidebar.classList.toggle('small');
});

const navCollapse = document.querySelectorAll('.sidebar-nav-collapse');

for (var i = 0; i < navCollapse.length; i++) {
  navCollapse[i].addEventListener('click', function (e) {
    const acSidebar = document.querySelector('.sidebar');
    const hasClass = acSidebar.classList.contains('small');
    const collapse = this.nextElementSibling;
    if (hasClass == false) {
      collapse.classList.toggle('open-sub');
    } else {
      e.preventDefault();
    }
  });
}

const iSearch = document.querySelector('.sidebar-search-icon');

iSearch.addEventListener('click', function () {
  const acSidebar = document.querySelector('.sidebar');
  const hasClass = acSidebar.classList.contains('small');
  if (hasClass == true) {
    acSidebar.classList.toggle('small');
    document.querySelector('.sidebar-search-input').focus();
  } else {
    document.querySelector('.sidebar-search-input').focus();
  }
});

const toggleNav = document.querySelector('.navigation-toggle');

toggleNav.addEventListener("click", function() {
  const navMobile = document.querySelector('#sidebar');  
  navMobile.classList.toggle('mobile');
});

window.addEventListener("click", function (event) {
  const navMobile = document.querySelector('#sidebar');  
  if(event.target == navMobile){
    navMobile.classList.remove('mobile');
  }  
})




// const side = document.querySelector('#sidebar');  
// side.addEventListener('click', function() {
//   side.classList.remove('mobile');
// })
// const link = document.querySelectorAll('.sidebar-body-wrap li div');

// for (let i = 0; i < link.length; i++) {
//     link[i].addEventListener('click', function(){
//         let current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     });
// }