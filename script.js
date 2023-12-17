const li = document.getElementById('m-tog');
const close = document.getElementsByClassName('close')[0];
const handburger = document.getElementsByClassName('bars')[0];


handburger.addEventListener('click', ()=>{
    li.classList.add('show');
})
close.addEventListener('click', ()=>{
    li.classList.remove('show');
})

document.querySelectorAll('.links').forEach((list) => {
    list.addEventListener("click", () => {
      // Remove "active" class from all list items
      document.querySelectorAll('.links').forEach((otherListItem) => {
        otherListItem.classList.remove('active');
      });

      // Add "active" class to the clicked list item
      list.classList.add('active');

      // Close the menu
      li.classList.remove('show');
    });
});
 
const hideNow = document.querySelectorAll(".hidenow")
const firstObserver = new IntersectionObserver(function(entries){
    entries.forEach(entry => {
        entry.target.classList.toggle("shownow", entry.isIntersecting)
    })
    console.log(entries)
},{threshold: 0.5,})
hideNow.forEach(function(hide){
    firstObserver.observe(hide)
})