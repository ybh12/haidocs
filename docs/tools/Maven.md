##  一、使用idea配置maven

#### 1.下载Maven

- 配置xml文件（为配置idea做前期准备）

  ```java
  //配置本地资源库 ，需要在Maven文件夹下创建一个文件夹repository
  <localRepository>C:\mav\apache-maven-3.6.3\repository</localRepository>    
  
  //配置镜像
  	<mirrors>
  	  <mirror>
  		<id>mirror</id>
  		<mirrorOf>central</mirrorOf>
  		<name>mirror</name>
  		<url>https://maven.aliyun.com/nexus/content/groups/public</url>
  	  </mirror>
  	</mirrors>
  	
  ```



#### 2.配置idea

- setting-> maven->（**配置jdk，配置Maven和Maven本地仓库**）![image-20231024234401700](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202310262137429.png)



- setting-> maven->（**配置jdk**）

  ![image-20231024234524166](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202310262137375.png)



- setting - > java Complier （**设置指定当前项目的字节码版本**）

![image-20231024234000982](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202310262137329.png)





## 二、maven使用

#### 1. 坐标的定义

![image-20231026223242875](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202310262232001.png)

#### 2.idea导入maven项目（两种方式）

- 方式一

![image-20231026223717180](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202310262237508.png)

- 方式2

  ![image-20231026223840535](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202310262238791.png)

## 三、maven的依赖管理

#### 1. 依赖配置

![image-20231026224345796](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202310262251814.png)

#### 2.依赖具有传递性

![image-20231026225125367](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202310262251766.png)

![image-20231026225133613](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202310262251069.png)

#### 3.排除依赖（主动断开依赖）

![image-20231026225245196](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202310262252048.png)

#### 4.依赖的有效范围

- Compile (默认）：在**主程序、测试程序、打包程序**都可以使用
- test：只能在**测试程序**使用
- provided：在能在**主程序**、**测试程序**中使用

- runtime：只能在**测试程序**、和**打包程序**中使用

  ![image-20231026225846133](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202310270000719.png)

#### 5.maven 的生命周期

- **clear**：移除上一次文件构建生成的文件
- **compile**：编译项目源代码（将项目源代码编译成字节码文件class）
- **test**：使用合适的单元测试框架进行测试(junit)
- **packget**：将编译后的文件打包（jar  或者  war）
- **install**：安装项目到本地仓库

  

## 四、常用maven依赖

#### 1.hutool-all

```xml
    <dependency>
            <groupId>cn.hutool</groupId>
            <artifactId>hutool-all</artifactId>
            <version>5.8.14</version>
        </dependency>
```

- [使用范围](https://blog.csdn.net/weixin_53742691/article/details/134064426#:~:text=Hutool-All%EF%BC%88%E6%88%96%E7%AE%80%E7%A7%B0Hutool%EF%BC%89%E6%98%AF%E4%B8%80%E4%B8%AA%E5%8A%9F%E8%83%BD%E5%BC%BA%E5%A4%A7%E7%9A%84Java%E7%BC%96%E7%A8%8B%E5%B7%A5%E5%85%B7%E5%BA%93%EF%BC%8C%E6%97%A8%E5%9C%A8%E7%AE%80%E5%8C%96Java%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E7%9A%84%E5%BC%80%E5%8F%91%E3%80%82,%E5%AE%83%E6%8F%90%E4%BE%9B%E4%BA%86%E5%A4%A7%E9%87%8F%E7%9A%84%E5%B7%A5%E5%85%B7%E7%B1%BB%E5%92%8C%E6%96%B9%E6%B3%95%EF%BC%8C%E6%B6%B5%E7%9B%96%E4%BA%86%E5%90%84%E7%A7%8D%E5%B8%B8%E8%A7%81%E4%BB%BB%E5%8A%A1%EF%BC%8C%E5%8C%85%E6%8B%AC%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%A4%84%E7%90%86%E3%80%81%E6%97%A5%E6%9C%9F%E6%97%B6%E9%97%B4%E6%93%8D%E4%BD%9C%E3%80%81%E6%96%87%E4%BB%B6%E6%93%8D%E4%BD%9C%E3%80%81%E7%BD%91%E7%BB%9C%E9%80%9A%E4%BF%A1%E3%80%81%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E3%80%81%E6%95%B0%E6%8D%AE%E8%BD%AC%E6%8D%A2%E3%80%81%E5%9B%BE%E5%83%8F%E5%A4%84%E7%90%86%E3%80%81JSON%E6%93%8D%E4%BD%9C%E3%80%81Excel%E5%A4%84%E7%90%86%E3%80%81%E9%82%AE%E4%BB%B6%E5%8F%91%E9%80%81%E7%AD%89%E7%AD%89%E3%80%82)
