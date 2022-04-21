// retrieve HTMl element
const $zoomImg = document.getElementById('zoomImg')
const $form = document.getElementById('form')
const $date = document.getElementById('date')
const $info = document.getElementById('info')
const $favorites = document.getElementById('favorites')
const $btn = document.getElementById('btn')

// create a content data arry
// each content will be the new search


// add listener to form
// will make fetch request to API
$form.addEventListener('submit', async function(e) {
    e.preventDefault()

    fetch(`https://api.nasa.gov/planetary/apod?api_key=jmFGeWEXtTphyk3tfpIf0upwu30fPnGMkpNwmZVD&date=${date.value}`)
        .then(res => res.json())
        .then(data => {
            
            console.log(data)

            $info.innerHTML = `
            <img id="infoImg" src="${data.hdurl}" alt="" class="image col-4 img-fluid flex-row mb-3">
                <div class="col-8">
                    <h2 class="title mb-3">${data.title}</h2>
                    <em >${data.date}</em><br>
                    <p>${data.explanation}</p>
                    <button id="save" class="btn btn-primary" type="submit">Save to Favorites</button>
                </div>`
                
                const $infoImg = document.getElementById('infoImg')
                const $modal = document.getElementsByClassName("modal")
                // Get the <span> element that closes the modal
                const $close = document.getElementsByClassName("close")[0];

                // When the user clicks on <span> (x), close the modal
                $close.addEventListener('click', function() { 
                    $modal.style.display = "none";
                })

                $infoImg.addEventListener('click',function(){
                    $modal.style.display = 'block'
                    img.src = data.hdurl


                })
    //     $favorites.innerHTML = `
    //     <div class="list-group-item d-flex align-items-center p-3 mb-3">
    //     <div class="square" style="background-image: ${data.hdurl}; "></div>
    //     <div class="me-auto">
    //         <p>
    //             <strong>${data.hdurl}</strong><br>
    //             <em>${data.explanation}</em>
    //         </p>
    //     </div>
    //     <button class="btn btn-close"></button>
    // </div>`
        })
        .catch(error =>{
            alert(`${error.name} - ${error.message}`)
        })

    

    // console.log(data)
    

})