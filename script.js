// retrieve HTMl element
const $zoomImg = document.getElementById('zoomImg')
const $form = document.getElementById('form')
const $date = document.getElementById('date')
const $info = document.getElementById('info')
const $favorites = document.getElementById('favorites')
const $btn = document.getElementById('btn')
const $hdimg = document.getElementById('hdimg')
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
            <img id="infoImg" src="${data.hdurl}" alt="" class="infoImg col-4 img-fluid flex-row mb-3">
                <div class="col-8">
                    <h2 class="title mb-3">${data.title}</h2>
                    <em >${data.date}</em><br>
                    <p>${data.explanation}</p>
                    <br>
                    <button id="saveBtn" class="Btn btn-primary" type="submit">Save to Favorites</button>
                </div>`

                // const $infoImg = document.getElementById('infoImg')

            

                document.querySelectorAll('.info img').forEach(image => {
                    image.onclick = () => {
                        document.querySelector('.zoomImg img').style.display = 'block';
                        document.querySelector('.zoomImg span').style.display = 'block';
                        document.querySelector('.zoomImg img').src = image.getAttribute('src')
                    }
                })

                document.querySelector('.zoomImg span').onclick = () =>{
                    document.querySelector('.zoomImg img').style.display = 'none';
                    document.querySelector('.zoomImg span').style.display = 'none';
                }

                localStorage.setItem('title',data.title)
                localStorage.setItem('date', data.date)
                localStorage.setItem('image',data.url)

                const $saveBtn = document.getElementById('saveBtn')

                $saveBtn.addEventListener('click', function (e) {
                    e.preventDefault()
                    $favorites.innerHTML = `
                    <div class="list-group-item d-flex align-items-center p-3 mb-3 row">
                     <img id="savedImg" src="${data.hdurl}" alt="" class="image col-4 flex-row ">
                    <div class="col-9">
                
                        <h2 class="title mb-3">${data.title}</h2>
                        <em >${data.date}</em><br>
                
                    </div>
                    <button id="closeBtn" class="closeBtn btn-close col-2"></button>
                    </div>
                    `

                    closeData()
                    remainData()

                    function closeData(){
                        const $closeBtn = document.getElementById('closeBtn')
                            $closeBtn.addEventListener('click',function(){
                            $favorites.style.display = 'none'
                        })
                    }
                    
                    function remainData(){
                        $saveBtn.addEventListener('click', function(){
                            $favorites.classList.remove('hidden')
                        })
                    }
                } )
            } )

        .catch(error =>{
            alert(`${error.name} - ${error.message}`)

        })
})

