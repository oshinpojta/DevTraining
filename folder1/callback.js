const posts = [
    { title : 'post 1', body : 'this is a description 1', createdAt : new Date().getSeconds()},
    { title : 'post 2', body : 'this is a description 2', createdAt : new Date().getSeconds()},
    { title : 'post 3', body : 'this is a description 3', createdAt : new Date().getSeconds()}
]

function getPosts(callback){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post)=>{
            output += `<li>${post.title} created ${new Date().getSeconds()-post.createdAt} seconds ago</li>`
        })
        document.body.innerHTML = output;
        callback();
    }, 1000);
}

function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback()
    },2000)
};

function create4thPost(callback){
    setTimeout(()=>{
        let post = {title : 'post 4', body : 'this is post 4', createdAt : new Date().getSeconds()};
        callback(post, getPosts)
    },6000)
};

// function lastEditedInSecondsAgo(){
//     setInterval(()=>{
//         let output = '';
//         posts.forEach((post)=>{
//             output += `<li>${post.title} created ${new Date().getSeconds()-post.createdAt} seconds ago</li>`
//         })
//         document.body.innerHTML = output;
//     },1000);
// }

create4thPost(createPost);
