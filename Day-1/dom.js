// Studying the Document Object Model
// yesterday's assignment
let blog = {
    posts:[
        {
        title: "Ghana is in a debate",
        content:"lorem ipsum dolor sit amet, consectetur adip",
        publishedDate:"23-09-2015",
        draftStatus:"published",
        author:"John Penner",
        coverImage:"http://placehoder.com/images/200x200.png",
    },
    {
        title:"Learning JS from scratch!",
        content:"lorem ipsum dolor sit amet, consectet",
        publishedDate:"23-09-2020",
        draftStatus:"published",
        author:"Rhea Seaner",
        coverImage:"http://placehoder.com/images/200x200.png",
    },
    {
        title:"Babies dont cry",
        content:"lorem ipsum dolor sit amet, con",
        publishedDate:"3-06-2021",
        draftStatus:"pending",
        coverImage:"http://placehoder.com/images/200x200.png",
    },
    {
        title:"Nii likes standing by head",
        content: "Lorem ipsupe sjhsdjs",
        publishedDate: "05-09-2021",
        draftStatus:"published",
        author: "Ralph"

    }
],

autobiographies:[
    {
        personOfInterest:"Dr. Kwame Nkrumah",
        content: "lorem ipsum sig  amemt"
    },
    {
        personOfInterest: "John Agyekum Kuffour",
        content: "lorem ipsum sdolor sit amet"

    }
]
}

let body = document.getElementsByTagName("body")[0]

let ul = document.createElement("ul")

setTimeout(() => {
    for (let i = 0; i< blog.posts.length; i++) {
        let li = document.createElement("li")
        let a = document.createElement("a")
        a.setAttribute("href","/blog/posts"+blog.posts[i].title)
        a.textContent =blog.posts[i].title
        li.appendChild(a)
        ul.appendChild(li)
    }
}, 5000)

body.appendChild(ul)


body.appendChild(h1)
