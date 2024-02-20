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

  
