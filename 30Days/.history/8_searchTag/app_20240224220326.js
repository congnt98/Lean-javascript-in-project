var contentList = document.querySelector('.content ul')
var content = document.querySelector('.content ')
var input = document.querySelector('.content input')


var tags = ['Node js', 'React js']

function createTags() {
    contentList.innerHTML = ''
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        content.innerHTML += `<li>
             ${tag}
            <i class="fa-solid fa-xmark"></i>
        </li>`
    }

    content.appendChild

}

createTags();