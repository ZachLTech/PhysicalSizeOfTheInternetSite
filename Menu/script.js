let xPos = 0;
let rotationSpeed = 0.5; // adjust this value to change the rotation speed

gsap.timeline()
    .set('.ring', { rotationY:1, cursor:'grab' }) //set initial rotationY so the parallax jump happens off screen
    .set('.img',  { // apply transform rotations to each image
      rotateY: (i)=> (i*-36)*0.83,
      transformOrigin: '50% 50% 1200px',
      z: -1200,
      backgroundImage:(i)=>'',
      backgroundPosition:(i)=>getBgPos(i),
      backfaceVisibility:'hidden'
    })  
    .from('.img', {
        duration:1.5,
        y:200,
        opacity:0,
        stagger:0.1,
        ease:'expo'
    })
    .add(()=>{
        $('.img').on('mouseenter', (e)=>{
            let current = e.currentTarget;
            gsap.to('.img', {opacity:(i,t)=>(t==current)? 1:0.5, ease:'power3'})
        })
        $('.img').on('mouseleave', (e)=>{
            gsap.to('.img', {opacity:1, ease:'power2.inOut'})
        })
    }, '-=0.5')

$(window).on('mousedown touchstart', dragStart);
$(window).on('mouseup touchend', dragEnd);


function dragStart(e){ 
    if (e.touches) e.clientX = e.touches[0].clientX;
    xPos = Math.round(e.clientX);
    gsap.set('.ring', {cursor:'grabbing'})
    $(window).on('mousemove touchmove', drag);
}

function drag(e){
    if (e.touches) e.clientX = e.touches[0].clientX;    

    gsap.to('.ring', {
        rotationY: '-=' +( (Math.round(e.clientX)-xPos)%360 ),
        onUpdate:()=>{ gsap.set('.img', { backgroundPosition:(i)=>getBgPos(i) }) }
    });

    xPos = Math.round(e.clientX);
}

function dragEnd(e){
    $(window).off('mousemove touchmove', drag);
    gsap.set('.ring', {cursor:'grab'});
}

function getBgPos(i){ //returns the background-position string to create parallax movement in each image
    return ( 100-gsap.utils.wrap(0,360,gsap.getProperty('.ring', 'rotationY')-180-i*36)/360*500 )+'px 0px';
}



// Add a click event listener to all elements with class 'btn'
document.querySelectorAll('.btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    // Get the container ID or other data from the data attribute of the clicked container
    var containerId = this.getAttribute('data-container-id');
    
    // Call a separate function or perform actions based on the container ID or other data
    switch (containerId) {
      case 'container1':
        // Code to be executed for container1
        alert('Container 1 clicked');
        break;
      case 'container2':
        // Code to be executed for container2
        window.location.href = "../HHD25Stats/Index.html";
        break;
      case 'container3':
        // Code to be executed for container1
        window.location.href = "../SSDStats/Index.html";
        break;
      case 'container4':
        // Code to be executed for container2
        window.location.href = "../M2Stats/Index.html";
        break;
      case 'container5':
            // Code to be executed for container1
            window.location.href = "../Price/Index.html";
        break;
      case 'container6':
            // Code to be executed for container2
        alert('Container 6 clicked');
        break;
      case 'container7':
        // Code to be executed for container1
        window.location.href = "../Socials/index.html";
        break;
      case 'container8':
        // Code to be executed for container2
        alert('Container 8 clicked');
        break;
      case 'container9':
        // Code to be executed for container1
        alert('Container 9 clicked');
        break;
      case 'container10':
        // Code to be executed for container2
        window.location.href = "../FloppyStats/Index.html";
        break;
      case 'container11':
        // Code to be executed for container1
        window.location.href = "../MSDStats/Index.html";
        break;
      case 'container12':
        // Code to be executed for container2
        window.location.href = "../HHD35Stats/Index.html";
        break;
      // ... add more cases for other containers ...
      default:
        alert('Aint no container bru')
        // Default code to be executed if no matching container ID is found
        break;
    }
  });
});
