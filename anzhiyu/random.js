var posts=["2025/02/24/Linux/shell基础知识/","2025/02/23/Linux/vim使用/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };