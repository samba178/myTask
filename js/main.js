var loginpage = document.getElementsByClassName('login-section')[0];
var posts = document.getElementsByClassName('posts')[0];
var userName, postDiscription, text, count = 0,likebutton, data = [];
var usrObj = {
  name: "",
  postData: ""
};

/*  login page */
if(loginpage){
  function getUser(){
    user = document.getElementsByClassName('user-name')[0].value;
    localStorage.setItem('uname', user);
    usrObj.name = user;
  }
}

/*  posts page */
if(posts){
  var userDetails = document.getElementsByClassName('user-name1')[0];
  userName = localStorage.getItem('uname');
  userDetails.innerText = userName;
  function countCharectors(){
    var characterCount = 0;
    postDiscription = document.getElementById('postArea').value;
    characterCount = postDiscription.length;
    usrObj.postData = postDiscription;
    document.getElementsByClassName("current-count")[0].innerText = characterCount;
  }
  function countzero(){
    document.getElementsByClassName("current-count")[0].innerText = 0;
  }

  function createpost(){
    document.getElementsByClassName("current-count")[0].innerText = 0;
    document.getElementById('postArea').value = '';
    var ul = document.getElementsByClassName('posts-data')[0];
    data.push("{'name': "+usrObj.name+", 'postcontent': "+usrObj.postData+" }")
    /*var li = document.createElement('li');
    var span = document.createElement('span');
    var p = document.createElement('p');
    var likePost = document.createElement('span');
    var deletePost = document.createElement('span');
    li.setAttribute("class",'post-list-item');
    span.setAttribute("class",'post-author');
    p.setAttribute("class",'post-discription');
    likePost.setAttribute("class",'like-post');
    likebutton = likePost;
    deletePost.setAttribute("class",'delete-post');
    span.innerText = userName;
    p.innerText = usrObj.postData;
    likePost.innerText = "like";
    deletePost.innerText = "delete";*/
    /*text = "<li class='post-list-item'><span class='post-autor'>"+ userName +"<p class='post-discription'>"+ usrObj.postData +"</p><span class='like-post'>Like</span> <span class='delete-post'>Delete</span></li>";*/
    /*
    var childrens = [span,p,likePost,deletePost];
    for(let i=0;i<=3;i++) {
      ul.appendChild(li).appendChild(childrens[i]);
    }*/
  }
  
  localStorage.setItem("localData",data);



}


