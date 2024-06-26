var contentList = document.querySelector('.content ul')
var content = document.querySelector('.content ')
var input = document.querySelector('.content input')
var btnRemoveAll = document.querySelector('.remove-all')


var tags = ['Node js', 'React js']

function renderTags() {
    contentList.innerHTML = ''
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        contentList.innerHTML += `<li>
             ${tag}
            <i class="fa-solid fa-xmark" onclick="removeTag(${i})"></i>
        </li>`
    }

    content.appendChild(input)
    input.focus()

}

function removeTag(i) {
    tags.splice(i, 1);
    renderTags()
}

renderTags();

input.addEventListener('keydown', function (e) {
    if (e.key == 'Enter') {
        tags.push(input.value.trim())
        input.value = ''
        renderTags();
    }
})

btnRemoveAll.addEventListener('click', function () {
    tags = [];
    renderTags();

})