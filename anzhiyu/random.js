var posts=["2025/02/24/hello-world/","2025/02/24/shell/shell基础知识/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };