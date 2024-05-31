var contentList = document.querySelector('.content ul')
var content = document.querySelector('.content ')
var input = document.querySelector('.content input')


var tags = ['Node js', 'React js']

function renderTags() {
    contentList.innerHTML = ''
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        contentList.innerHTML += `<li>
             ${tag}
            <i class="fa-solid fa-xmark"></i>
        </li>`
    }

    content.appendChild(input)
    input.focus()

}

function addTags() {

}

renderTags();

input.addEventListener('keydown', function (e) {
    if (e.key == 'Enter') {

        console.log(input.value.trim());
        tags.push(input.value.trim())
        // addTags()
    }
})
