

console.log("hello world")





for (let i = 0; i < 269; i++) {
    const square = document.createElement("div");
    document.body.appendChild(square);
    
}

let rome = document.getElementsByClassName("container");



document.body.addEventListener('mouseover', e => {
  const div = e.target.closest('div');
  if (!div) return;
  div.style.backgroundColor = 'black';
});

document.body.addEventListener('mouseout', e => {
  const div = e.target.closest('div');
  if (!div) return;
  div.style.backgroundColor = 'black';
});

