let comments = []

loadComments()

document.querySelector('#comment-add').addEventListener('click', (e) => {
    e.preventDefault()
    let commentName = document.querySelector('#comment-name')
    let commentBody = document.querySelector('#comment-body')

    let comment = {
        name: commentName.value,
        body: commentBody.value,
        time: Math.floor(Date.now()/1000)
    }

    commentName.value = ''
    commentBody.value = ''

    comments.push(comment)

    saveComments()

    cComments()
})

function saveComments() {
    localStorage.setItem('comments', JSON.stringify(comments))
}

function loadComments() {
    if (localStorage.getItem('comments')) {
        comments = JSON.parse(localStorage.getItem('comments'))
    }
    showComments()
}

function showComments() {
    let commentField = document.querySelector('#comment-field')
    let out = ''
    comments.forEach(item => {
        out += `<div id="prepend">
                    <p class="time"><em>${timeConverter(item.time)}</em></p>
                    <p class="user-name">${item.name}</p>
                    <p class="user-message">${item.body}</p>
                </div>`
        // out += `<p class="text-right"><em>${timeConverter(item.time)}</em></p>`
        // out += `<p class="text-right">${item.name}</p>`
        // out += `<p class="text-right">${item.body}</p>`
    })
    // let a = commentField.innerHTML = out
    
    commentField.insertAdjacentHTML('afterbegin', out)
}

function timeConverter (UNIX_timestamp) {
    let timeConv = new Date(UNIX_timestamp * 1000)
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let year = timeConv.getFullYear()
    let month = months[timeConv.getMonth()]
    let date = timeConv.getDate()
    let hour = timeConv.getHours()
    let min = timeConv.getMinutes()
    let sec = timeConv.getSeconds()
    let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec
    return time
}

function cComments() {
    let commentField = document.querySelector('#comment-field')
    let out = ''
    comments.forEach(item => {
        out = `<div id="prepend">
                    <p class="time"><em>${timeConverter(item.time)}</em></p>
                    <p class="user-name">${item.name}</p>
                    <p class="user-message">${item.body}</p>
                </div>`
        // out += `<p class="text-right"><em>${timeConverter(item.time)}</em></p>`
        // out += `<p class="text-right">${item.name}</p>`
        // out += `<p class="text-right">${item.body}</p>`
    })
    // let a = commentField.innerHTML = out
    
    commentField.insertAdjacentHTML('afterbegin', out)
}