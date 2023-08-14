let slideImg = document.querySelectorAll('img');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

var counter = 0;

next.addEventListener('click', slideNext);

function slideNext(){
  slideImg[counter].style.animation = 'next1 0.5s ease-in forwards';
  if (counter >= slideImg.length - 1){
    counter = 0;

  }
  else{
    counter ++;

  }
  slideImg[counter].style.animation = 'next2 0.5s ease-in forwards';
}

prev.addEventListener('click', slidePrev);

function slidePrev(){
  slideImg[counter].style.animation = 'prev1 0.5s ease-in forwards';
  if (counter == 0){
    counter = slideImg.length - 1;

  }
  else{
    counter --;

  }
  slideImg[counter].style.animation = 'prev2 0.5s ease-in forwards';
}


function auto(){
  deletInterval = setInterval(timer, 3000);
  function timer(){
    slideNext();
  }
}
auto();

const container = document.querySelector('.slides');
container.addEventListener('mouseover', function(){
  clearInterval(deletInterval);
});

container.addEventListener('mouseout', auto)
