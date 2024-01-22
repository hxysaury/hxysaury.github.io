var posts=["2023/11/22/linux提权姿势/","2023/11/20/phpMyAdmin利用/"];function toRandomPost(){
    window.location.href='/'+posts[Math.floor(Math.random() * posts.length)];
  };