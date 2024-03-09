// const mobileNav = document.querySelector(".hamburger");
// const navbar = document.querySelector(".menubar");

// const toggleNav = () => {
//   navbar.classList.toggle("active");
//   mobileNav.classList.toggle("hamburger-active");
// };

// mobileNav.addEventListener("click", () => toggleNav());

const marquee = document.querySelector('.marquee-content');
const marqueeTwo = document.querySelector ('.marque-content2')

// Adjust speed
marquee.style.animationDuration = '80s'; // Change the duration as needed

// Change direction
// marquee.style.animationDirection = 'reverse'; // Uncomment to make it scroll in the opposite direction


// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
                
                
            }, 2000);
        });
});

