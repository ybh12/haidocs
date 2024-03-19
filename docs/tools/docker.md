# docker实战

## 一、docker的介绍

**介绍：**直接将java项目打包成镜像，在启动项目时，下载镜像然后直接启动

**查看是否安装成功**   `docker -v`

**Dockerfile的编写：**用于构建Docker镜像

- FROM 依赖的基础镜像
- WORKDIR工作目录
- COPY从本机复制文件
- RUN执行命令
- CMD/ENTRYPOINT(附加额外参数)指定运行容器是默认执行的命令



**dockerFile举例：** 

```dockerfile
FROM maven:3.5-jdk-8-alpine as builder

WORKDIR /app
COPY pom.xml .
COPY src ./src

RUN mvn package -DskipTests

CMD ["java","-jar","app/target/user-center-0.0.1-SNAPSHOT.jar","--spring.profiles.active=prod"]
```
## 二、打包项目，运行Docker

### 后端部署步骤

1. **进入到项目的根目录**

![image-20240319220930827](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202403192209967.png)

2. **根据 Dockerfile 构建镜像：(制作镜像)**

	```dockerfile
	docker build -t user-center-backend:v.0.0.1
	```

3. **使用命令查看已经构建的Docker**

   ```java
   docker image 
   ```

   

### 前端部署

1. **进入根目录**

2. **进行Dockerfile的编写**

   ![image-20240319222125893](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202403192221083.png)

   ```dockerfile
   FROM nginx
   
   WORKDIR /usr/share/nginx/html/
   USER root
   
   COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
   
   COPY ./dist  /usr/share/nginx/html/
   
   EXPOSE 80
   
   CMD ["nginx", "-g", "daemon off;"]
   
   ```

   

3. nginx.config配置

   ```nginx
   server {
       listen 80;
   
       # gzip config
       gzip on;
       gzip_min_length 1k;
       gzip_comp_level 9;
       gzip_types text/plain text/css text/javascript application/json application/javascript application/x-javascript application/xml;
       gzip_vary on;
       gzip_disable "MSIE [1-6]\.";
   
       root /usr/share/nginx/html;
       include /etc/nginx/mime.types;
   
       location / {
           #作用：如果用户找不到页面则回到/index.html
           try_files $uri /index.html;
       }
   
   }
   
   ```

4. 根据 Dockerfile 构建镜像：(制作镜像)

	```java
	 docker build -t user-center-front:v.0.0.1
	```


​      

# 三、Docker优化

**镜像的优化： **

1. 减少镜像的大小

2. 减少镜像的构建时间（比如多阶段构建，可以丢弃掉之前阶段不需要的内容）

