var posts=["2025/02/24/hello-world/","2025/02/24/shell/shell基础知识/","2025/02/23/shell/vim使用/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };