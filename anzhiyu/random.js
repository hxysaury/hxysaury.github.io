var posts=["2023/11/30/MySQL注入漏洞/","2023/11/28/WAF攻防/","2023/11/22/linux提权姿势/","2023/11/24/Windows提权姿势/","2023/11/22/MYSQL提权/","2023/11/29/nc/","2023/11/20/phpMyAdmin利用/","2023/11/29/sqlmap/","2023/11/30/信息收集/","2023/11/30/其他SQL注入/"];function toRandomPost(){
    window.location.href='/'+posts[Math.floor(Math.random() * posts.length)];
  };