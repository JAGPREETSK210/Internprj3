document.addEventListener('DOMContentLoaded', () => {
    const nameField = document.getElementById('name');
    const commentField = document.getElementById('comment');
    const comments = document.getElementById('comment-box');
    const submit = document.getElementById('submit');
  
   
    const blogId = 'blogPage2'; 
  
   
    let comments_arr = [];
  
 
    if (localStorage.getItem(`commentData_${blogId}`)) {
      comments_arr = JSON.parse(localStorage.getItem(`commentData_${blogId}`));
    }
  
   
    const display_comments = () => {
      let list = '<ul>';
      comments_arr.forEach(comment => {
        list += `<li><strong>${comment.name}</strong>: ${comment.text}</li>`;
      });
      list += '</ul>';
      comments.innerHTML = list;
    }
  
    
    display_comments();
  
    submit.onclick = function(event) {
      event.preventDefault();
      const name = nameField.value.trim();
      const content = commentField.value.trim();
      if (name.length > 0 && content.length > 0) { 
    
        comments_arr.push({ name: name, text: content });
        localStorage.setItem(`commentData_${blogId}`, JSON.stringify(comments_arr));
     
        display_comments();
        
        nameField.value = '';
        commentField.value = '';
      }
    }
  });
  window.addEventListener('load', display_comments)