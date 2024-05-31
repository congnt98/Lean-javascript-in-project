var content = document.querySelector('.content')
var input = document.querySelector('.content input')


var tags = ['Node js', 'React js']

function createTags() {
    content.innerHTML = ''
    for (let i = 0; i > tags.length; i++) {
        const tag = tags[i]
        content.innerHTML += `
        <li>
             {$tag}
            <i class="fa-solid fa-xmark"></i>
        </li>`
    }
}