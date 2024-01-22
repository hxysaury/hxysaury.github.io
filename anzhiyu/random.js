var posts=["2023/11/24/Windows提权姿势/","2023/11/20/phpMyAdmin利用/","2023/11/22/linux提权姿势/"];function toRandomPost(){
    window.location.href='/'+posts[Math.floor(Math.random() * posts.length)];
  };