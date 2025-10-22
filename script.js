function scrollToSection(id){
  document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
}

// --- Contact Form Save ---
function saveContactData(){
  const name=document.getElementById('name').value.trim();
  const email=document.getElementById('email').value.trim();
  const message=document.getElementById('message').value.trim();
  if(!name||!email||!message){alert('Please fill all fields!');return;}
  const data=JSON.parse(localStorage.getItem('contacts'))||[];
  data.push({name,email,message,date:new Date().toLocaleString()});
  localStorage.setItem('contacts',JSON.stringify(data));
  alert('Message saved locally!');
  document.getElementById('contactForm').reset();
}

// --- Projects Filtering ---
const sampleProjects=[
  {title:'Weather App',category:'web'},
  {title:'UI Design',category:'design'},
  {title:'To-Do List',category:'app'},
  {title:'Portfolio Site',category:'web'}
];

function displayProjects(list){
  const container=document.getElementById('projectContainer');
  if(!container)return;
  container.innerHTML='';
  list.forEach(p=>{
    const div=document.createElement('div');
    div.className='project-card';
    div.dataset.category=p.category;
    div.innerHTML=`<h4>${p.title}</h4><p>${p.category.toUpperCase()}</p>`;
    container.appendChild(div);
  });
}

function filterProjects(cat){
  const cards=document.querySelectorAll('.project-card');
  cards.forEach(c=>{
    c.style.display=(cat==='all'||c.dataset.category===cat)?'block':'none';
  });
}

document.addEventListener('DOMContentLoaded',()=>{
  if(document.getElementById('projectContainer'))displayProjects(sampleProjects);
});
