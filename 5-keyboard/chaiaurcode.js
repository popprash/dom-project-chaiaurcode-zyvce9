console.log('Project 5');
const insert = document.querySelector('#insert')

window.addEventListener('keydown', (e) => {
  insert.innerHTML= `
  <table>
  <tr>
    <th>KEY</th>
    <th>KEycCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  <tr>
    
</table>`
})console.log('Project 5');
