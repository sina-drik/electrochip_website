const barIcon=document.getElementById('show_menu');
const menuWrapper= document.getElementById('menu-wrapper');
const menuWrapperChildren=menuWrapper.querySelectorAll('a')
barIcon.addEventListener('click',(e)=>{
    if(e.target.className=="fa-solid fa-bars"){
        e.target.className='fa-solid fa-xmark'
        menuWrapper.style.display='flex'
        menuWrapper.style.right='0';
        menuWrapper.style.transition='0.8s';
        
    }else if(e.target.className=="fa-solid fa-xmark"){
        e.target.className='fa-solid fa-bars';
        menuWrapper.style.right='-250';
        menuWrapper.style.display='flex';
        // menuWrapper.style.transition='0.8s';
    

    }
})

{/* <i class="fa-solid fa-xmark"></i> */}