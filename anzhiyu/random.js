var posts=["2025/02/24/Linux/shell/shell基础知识/","2025/02/23/Linux/shell/vim使用/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };