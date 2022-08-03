const posts = [
    { title : 'post 1', body : 'this is a description 1', createdAt : new Date().getSeconds()},
    { title : 'post 2', body : 'this is a description 2', createdAt : new Date().getSeconds()},
    { title : 'post 3', body : 'this is a description 3', createdAt : new Date().getSeconds()}
]
var lastUserActivity = new Date().getSeconds();

function getPosts(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let output = '';
            posts.forEach((post)=>{
                output += `<li>${post.title} created ${new Date().getSeconds()-post.createdAt} seconds ago</li>`
            })
            document.body.innerHTML = output;
            console.log(posts);
            console.log("last user activity : "+(new Date().getSeconds()-lastUserActivity)+" seconds ago")
            resolve()
        }, 1000);
    })
   
}

function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);
            resolve();
        },3000)
            
    })
    
};

function create4thPost(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let post = {title : 'post 4', body : 'this is post 4', createdAt : new Date().getSeconds()};
            createPost(post).then(getPosts).catch((err)=>console.log(err));
            Promise.resolve(updateLastUserActivity);
            resolve();
        },2000)
    })
};

function deletePost(){
    return new Promise((resolve, reject)=>{
        setInterval(()=>{
            if(posts.length>1){
                console.log(posts);
                posts.pop();
                resolve();
            }else{
                reject("Array is empty now");
            }
        },4000)
    })
}

function delete4thPost(){
    return new Promise((resolve, reject)=>{
            if(posts.length>1){
                console.log(posts);
                posts.pop();
                resolve();
            }else{
                reject("Array is empty now");
            }
    })
}

const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, rejeect)=>{
    setTimeout(resolve,2000,'goodbye');
})

const updateLastUserActivity = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("user activity updated");
        lastUserActivity = new Date().getSeconds();
    },1000);
})

Promise.all([promise1,promise2,promise3]).then(values => console.log(values));
Promise.all([create4thPost(), delete4thPost(), getPosts()]).catch(err=>console.log(err));
