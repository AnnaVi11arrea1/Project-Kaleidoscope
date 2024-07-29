document.addEventListener("DOMContentLoaded", () => {
    quadrants = [];
    sections = [];
    stars = [];
    function placeQuadrant() {
        for (let i = 0; i < 7; i++) {
            const path = makeQuadrant();
            sections.push(path);
        }
        for (let i = 0; i < sections.length; i++) {
            const randomX = i * 22.5;
            const randomY = i * 22.5;
            sections[i].style.transformOrigin = `${randomX}% ${randomY}%`;
            sections[i].style.borderRadius = `${randomX}% ${randomY}%`;
        }
    }

    function makeQuadrant() {
        const quad = document.createElement("div");
        quad.setAttribute("class", "quadrant");
        document.getElementById('container').appendChild(quad);
       
        const path = document.createElement("div");
        path.setAttribute("class", "path");
        quad.appendChild(path);

        quadrants.push(path);

        const rotateQuad = document.getElementsByClassName("quadrant");
        for (let j = 0; j < quadrants.length; j++) {
            rotateQuad[j].style.transform = `rotate(${j * 45}deg)`;   
        }
        return quad;
        }

    function placeStar() {
        for (let i = 0; i < 15; i++) {
            const starRow = makeStars();
            stars.push(starRow);
        }
        for (let i = 0; i < stars.length; i++) {
            const randomX = i * 22.5;
            const randomY = i * 22.5;
            stars[i].style.transformOrigin = `${randomX}% ${randomY}%`;
            stars[i].style.borderRadius = `${randomX}% ${randomY}%`;
        }
    }    

    function makeStars() {
        const star = document.createElement("div");
        star.setAttribute("class", "quadrant2");
        document.getElementById('container2').appendChild(star);
        
        const gradient = document.createElement("div");
        gradient.setAttribute("class", "stars");
        star.appendChild(gradient);

        const path = document.createElement("div");
        path.setAttribute("class", "path");
        gradient.appendChild(path);
       

        const rotateStar = document.getElementsByClassName("quadrant2");
        const sizeStar = document.getElementsByClassName("quadrant2");
        for (let k = 0; k < stars.length; k++) {
            rotateStar[k].style.transform = `rotate(${k * 45}deg)`;  
            sizeStar[k].style.height = `${100 * k }px`; 
            sizeStar[k].style.width = `${100 * k }px`; 
            sizeStar[k].style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
        return star;
        }

        function backgroundStars() {
            const background = document.getElementById("background");
            for (let i = 0; i < 50; i++) {                                                 
                    const star = document.createElement("div");
                    star.height = Math.random() * 10;
                    star.width = Math.random() * 10;
                    star.style.position = "absolute";
                    star.style.top = `${Math.random() * 100}%`; // Random top position
                    star.style.left = `${Math.random() * 100}%`;
                    star.style.height = `${2 * i}px`; 
                    star.style.width = `${2 * i }px`; 
                    star.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
                    star.setAttribute("class", "path");
                    star.style.border = "10px solid white";
                   
                 
                    background.appendChild(star);
            }
                   
            return background;
    }
    




        backgroundStars();
        placeQuadrant();
        placeStar();
     
console.log(quadrants);
console.log(sections);
    
});
