
//create 2 global variables to store the student list and the number of students per page.
const studentList = document.getElementsByClassName('student-item cf');
const itemsPerPage = 10;




// Create the `showPage` function to hide all of the items in the list, except for the ten you want to show.
function showPage(list, page) {
   //create two index to store the start and end index of the list to be displayed on a page
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;
//loop over the list starting with the first student at index 0
   for (let i = 0; i < list.length; i += 1) {
      if (i >= startIndex && i < endIndex) {
         list[i].style.display= 'block';
         } else {
            list[i].style.display = 'none';
      }
   }
}


// Create the `appendPageLinks function` to generate, append, and add functionality to the pagination links.
function appendPageLinks (list) {
   const totalPages = Math.ceil(list.length / itemsPerPage);
   const divPage = document.querySelector('.page');
   const newdiv = document.createElement('div');
   newdiv.className = 'pagination';
   divPage.appendChild(newdiv);

   const newul = document.createElement('ul'); 
   newdiv.appendChild(newul);
   
   
   for (let i = 1; i <= totalPages; i++) {
      const lis = document.createElement('li');
      newul.appendChild(lis); 

      const links = document.createElement('a');
      links.textContent = i;
      links.href = '#';
      lis.appendChild(links);

      const firstlink = document.querySelector('a');
      firstlink.className = 'active';

      const alist = document.querySelectorAll('a'); 

     for (let n = 1; n <= alist.length; n+=1) {
        links.addEventListener('click', (e) => {
           showPage(studentList, n);
           for (let v = 0; v < alist.length; v += 1) {
             alist[v].className = '';
           }
           e.target.className = 'active';
        });
     } 

   }  
   
}
showPage(studentList, 1);
appendPageLinks(studentList);



