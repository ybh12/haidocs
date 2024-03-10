



## 一、SpringBoot入门

### 01.入门demo



#### 1. 创建SpringBoot工程，勾选web开发相关依赖

![image-20231026231647970](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202310262358866.png)



![image-20231026231808167](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202310262358867.png)

#### 2. 定义HelloController类，添加方法Hello,并添加注解

![image-20231026235641190](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202310262358868.png)

 ```java
//请求处理类
@RestController
public class HelloController {
    @RequestMapping("/hello") //浏览器请求/hello就会调用方法Hello()
    public String Hello() {
        System.out.println("Hello , Woeld!");
        return "Hello , World";

    }
}
 ```



#### 3、运行测试

**127.0.0.1:8080/hello**

得到相应的数据



### 02.Http协议

#### 	1.定义

规定了**浏览器和服务器之间传输数据的规则** （**请求端**和**响应端**）

#### 	2.特点

- 基于TCP协议：面向连接，安全
- 基于请求---响应模型的：一次请求对应一次响应
- http是**无状态**的请求（解释：后一次请求不会记录前一次请求数据）
    - 缺点1：多次请求之间不可以进行数据共享（如果用户需要查看后台的数据，无法判断用户是否登录了！！！）
    - 缺点2：速度快

- [x] ​     **WEB绘画技术解决缺点一**



### 03.Http请求协议

#### 	1.请求行（请求方式：post/get   资源路径    协议！！三个部分！！）

![image-20231031215908348](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202310312159032.png)

![image-20231031215924075](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202310312159933.png)

#### 	2.请求头

![image-20231031215850648](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202310312158113.png)

#### 	3.请求体

- [x] Get请求：请求参数在**请求行**中，**没有请求体** /brand/finAll?name=oppo&staatute=1.请求大小**有限制**
- [x] Post请求：请求参数**在请求体**中，Post请求**没有限制**



### 04.HTTP响应协议

#### 		1.响应行（协议、状态码、描述 ）

| 状态码 | 描述                                                         |
| :----: | ------------------------------------------------------------ |
|  1**   | 响应中-临时状态码，表示请求已经接收                          |
|  2**   | 成功-表示请求已经被成功接收，处理已完成                      |
|  3**   | 重定向-重定向到其他地方，让客户带你再发一次请求完成整个处理  |
|  302   | 请求资源已经在重定向，浏览器会自动跳转访问那个页面           |
|  304   | 告诉客户端，上次重定向的资源可以通过本地缓存再次访问，服务端并未更改 |
|  4**   | **客户端错误**,责任在客户端，demo：请求了不存在的资源，客户端未被授权、禁止访问。 |
|  400   | 客户端请求有**语法错误**，不能被服务器所理解                 |
|  403   | 服务器收到请求，但是**拒绝提供服务**，比如：没有权限访问相关资源 |
|  404   | **请求资源不存在**，一般是URL输入错误。或者网站资源被删除    |
|  405   | **请求方式错误**，Get请求用成了Post请求                      |
|  428   | **服务器要求有条件的请求**，告诉服务端，要获取资源**必须带特定的请求头** |
|  429   | 用户发送了**太多的请求**（“限速”），配合**Retry-After(**多久之后可以再次请求)响应头一起使用 |
|  5**   | **服务器错误**，责任在服务端，程序抛出异常提示               |
|  500   | **服务器发生了错误**，查看日志解决问题                       |
|  503   | **服务器未准备好**，服务器正在启动，还未初始化好             |

#### 	2.响应头(格式 key : value）

![image-20231031224836928](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202310312248282.png)

#### 	3.响应体

`[{id :1, name:”xioawang”}]`



### 05.Http解析协议

#### 	web服务器（提供网上信息浏览服务）

- 用来**部署项目**tomcat -> **轻量级的web服务器**，也被称为Web容器、servlet容器

![image-20231031230348984](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202310312303036.png)



### 06.Web请求响应

- DispatcherServlet
    - HttpServletRequest(Controller)
    - HttpServletResponse （Controoller）

![image-20231031233635649](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202311010040480.png)



## 二、请求



### 	01.简单参数接收(三种方法)

- **使用传统方法**

```java
package com.example.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

/*
*    测试请求参数接收
* */
//请求处理类
@RestController
public class RequestController {
    @RequestMapping("/simpleParam")
    public String simpleParam(HttpServletRequest request){  //在方法HttpServletRequest声明一个request对象
        //过去请求参数
        String name = request.getParameter("name");
        String ageStr = request.getParameter("age");

        int age = Integer.parseInt(ageStr);
        System.out.println(name+":"+age);
        return "OK";
    }

}

```

 		**postman测试**



![image-20231101000432218](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202311010004709.png)





- **使用SpringBoot接收简单参数**

```java
 public String simpleParam(String name, Integer age){
        System.out.println(name+":"+age);
        return "ok";
    }
```



- **使用@RequestParam接收参数**

- [x] ##### 	问题一、方法形参名称和请求参数名称不一致，使用注解@RequestParam

- [x] #####     问题二、该注解的required的默认属性为ture,代表请求参数必出传递

![image-20231101003025452](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202311010030362.png)



---

### 02.实体参数接收（多个参数）

- **简单实体参数**

  1.创建实体类

```java
package com.example.pojo;
/*
        实体类
* */
public class User {
    private String name;
    private Integer age;

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }
}

```

​				2.在controller封装实体类

```java
  @RequestMapping("/simplePojo")   //@RequestMapping指定请求路径
        public String simplePojo(User user){
            System.out.println(user);
            return "ok";

        }
```



**请求的参数名称和实体类的属性名保持一致**

![image-20231101225958459](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202311012259648.png)



- **复杂实体参数**



##### 加入address实体类

```java
package com.example.pojo;
/*
        实体类
* */
public class User {
    private String name;
    private Integer age;
    private Address address;   ！！！！注意这里！！！！

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", address=" + address +
                '}';
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }
}

```

2.新建Address实体类

```java
package com.example.pojo;

public class Address {
    private String province;
    private String city;

    @Override
    public String toString() {
        return "Address{" +
                "province='" + province + '\'' +
                ", city='" + city + '\'' +
                '}';
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
}

```

3.继续封装

```java
         @RequestMapping("/complexPojo")   //@RequestMapping指定请求路径
         public String complexPojo(User user){
             System.out.println(user);
             return "ok";

    }
```

4.使用postman请求数据

```html
http://localhost:8080/complexPojo?name=bohai&age=18&address.city=永昌&address.province=甘肃省
```



### 03.**数组和集合参数**（复选框->多个数值的提交）

1.使用数组接收参数

```java
    /*数组参数*/     
@RequestMapping("/arrayParam")   //@RequestMapping指定请求路径
         public String arrayParam(String[] hobby){
             System.out.println(Arrays.toString(hobby));
             return "ok";

    }
```

2.访问路径

```java
http://localhost:8080/arrayParam?hobby=计算机&hobby=it&hobby=money
```



1.使用集合接收参数

```java
     /*集合参数*/
            @RequestMapping("/listParam")   //@RequestMapping指定请求路径
            public String listParam(@RequestParam List<String> hobby){
                System.out.println(hobby);
                return "ok";

            }
```

2、访问路径

```java
http://localhost:8080/listParam?hobby=计算机&hobby=it&hobby=money
```

### 04.**日期时间参数**

1.接收日期参数

```java
public String dateParam(@DateFormat(pattern = "yyyy HH-dd HH:mm:ss")LocalDateTime updateTime){
    System.out.println(updateTime)
        return "ok";
}

请求访问路径：http://localhost:8080/dateParam?updateTime=2023-11-03 11:11:20

```

### 05.**Json格式参数的传递**（使用post请求）

​	  1.使用json格式进行参数传递

```java
    /*使用@RequestBody将json格式的数据请求封装到实体对象当中-->>使用post请求*/
            @RequestMapping("/jsonParam")  //使用RequestMapping指定请求路径
            public String jsonParam(@RequestBody User user){  
                System.out.println(user);
                return "ok";
            }

json格式    json格式的键key名和形参对象的属性名！！！保持一致！！！
{
    "name":"捷丰星球",    
    "age":16,
    "address":{
        "province":"甘肃省",
        "city":"永昌县"
    }
}
```

### 06.**路径参数接收**

1.使用@PathVariable将获取到的路径绑定给方法形参中

```java
   /*路径参数*/
            @RequestMapping("/path/{id}/{name}")
            public String path(@PathVariable Integer id,@PathVariable String name){
                System.out.println(id+":"+name);
                return "ok";
            }
```



#### 总结

简单参数请求

1.定义方法形参，请求参数名与形参变量名一致

2.如果不一致，使用@ReuestParam手动映射



实体参数请求

1.请求参数名与实体对象属性名一致，会自动封装



数组集合参数

数组：请求参数名与数组名一致，直接封装

集合：请求参数名与集合名一致， 使用@RequestParam绑定关系



日期参数请求

@DataTimeFormat



Json参数请求

@RequestBody



路径参数

@PathVariable

## 三、响应

###  1.@ResponseBody注解的作用

在controller方法或者类上，作用->将方法返回值直接响应

### 2.统一响应结果（Result code,msg,data）

```java
package com.example.pojo;

public class Result {
    private Integer code; //1成功  0失败
    private String msg;   //提示信息
    private Object data;  //返回的数据
//有参构造
    public Result(Integer code, String msg, Object data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }
    //无参构造
    public Result(){

    }
    public static Result success(Object data){
        return new Result(1,"success",data);
    }

    public static Result success(){
        return new Result(1,"success",null);
    }

    public static Result error(String msg) {
        return new Result(0,msg, null);
    }

    @Override
    public String toString() {
        return "Result{" +
                "code=" + code +
                ", msg='" + msg + '\'' +
                ", data=" + data +
                '}';
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}

```



2.在response中使用



```java
package com.example.controller;

import com.example.pojo.Address;
import com.example.pojo.Result;
import com.sun.source.tree.ReturnTree;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ResponseController {

    @RequestMapping("/hello1")
    public Result hello(){
        System.out.println("Hello,World!");
        return Result.success("Hello,World");
    }

    @RequestMapping("/address")
    public Result address(){
        Address address = new Address();
        address.setProvince("兰州");
        address.setCity("001");
        return Result.success(address);

    }

    @RequestMapping("/listadd")
    public Result listAdd(){
        List<Address> List = new ArrayList<>();

        Address add1 = new Address();
        add1.setProvince("广东");
        add1.setCity("厦门");

        Address add2 = new Address();
        add2.setCity("永昌");
        add2.setProvince("甘肃");

        List.add(add1);
        List.add(add2);

        return Result.success(List);
    }

}

```



## 三、分层解耦

### 1.三层架构

- controller层  --->作用：接收请求，相应数据。（调用service）

  1.调用service，获取数据（调用service层的方法-->调用Dao获取数据--->Dao再将查询的数据返回给service---->service拿到数据之后在进行逻辑处理，最后再将处理之后的程序返回给controller---->最终再将结果响应给前端）

  2.组装数据并返回

- service层（调用Dao获取数据）

​		1.调用Dao,进行数据的获取，之后进行逻辑处理，再将拿到的数据返回给controller

- Dao  (获取数据，对数据进行增删改查)

:facepunch:  总结:1.各层之间的调用情况严重，存在**高耦合**情况

![image-20231106191847063](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202311061918975.png)

### 2.分层解耦 (耦合过大，使用容器技术)

- 内聚：各个功能模块内部的功能联系

- 耦合：软件各个模块相互之间的依赖程度

  **:open_book:高内聚低耦合**

#### 1.控制反转（IOC）:对象的创建由new变为了转移到外部容器（service层和Dao层--->需要用到的资源）

:star:  @Component :将类交给IOC容器管理（放入容器）


##### 	Bean对象：IOC容器中，创建管理的对象成为bean

#### 2.依赖注入（DI）:容器为应用程序提供运行时，所依赖的资源（service层和 controller层  需调用资源）

:star:  @AutoWried : 依赖注入（从容器中拿取）



### 3.bean的声明:star2:

@Componet----------------->一般使用在工具类中  控制反转

:imp:

**@Controller--------------->标注在控制器类上**
**@Sevice------------------>标注在业务类上**
**@Respository------------->标注在数据访问类上，(由于与my--batis整合，用的少)**

:star:声明bean的时候可以使用value制定bean的名字，如果没有指定则为类名的首字母小写

:star:使用SpringBoot集成Web项目中，声明控制器只能使用@Controller

:question:声明的bean一定会被使用到吗？:question:



如果包在com.jiefeng外面就要使用**@ComponetScan**进行包的扫描:star:

@SpringBootApplication具有包扫描功能，默认扫描当前包及其子包:star:



---

## 四、My- SQL语句

### 1.sql分类

| **分类**             | **说明**                                   |
| -------------------- | ------------------------------------------ |
| **DDL**:imp:         | **用来定义数据库对象（数据库、表、字段）** |
| **DML**:smiling_imp: | **用来对数据库中的表进行增删改**           |
| **DQL**:smiling_imp: | 用来**查询**数据库中表的记录               |

```sql
show databases;              //查询所有数据库
create detabase "数据库名";   //创建数据库
use "需要切换的数据库"；
select database();           //查看当前正在只用的数据库
drop database "数据库的名字"； //删除数据库
database 可以替换为   schema
```

1.创建一个表，及其字段

```sql
unique----------------->保证字段中的所有数据都是唯一的，不重复的
auto_increment---------> 自增
default '男'----------->默认约束
primary key------------>唯一主键

create table tb_user(
	id int primary key auto_increment comment 'id,唯一标识'，
	username varcher(20) not null unique comment '用户名'，
	name varcher(10) not null comment '姓名'，
	age int comment '年龄'，
	gender char(1) default '男' comment '性别'
) comment '用户表'
```

### 2.数据类型的选择

#### 1.数值类型

![image-20231107180000984](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202311071801895.png)

- 例子

    - 年龄 ------选择age tinyint unsigned
    - 分数-------选择score double(4,1）

#### 2.字符串类型



![image-20231107180332774](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202311071803355.png)

**注意:imp:1.char(定长字符串)：性能高，不节省空间，不需要判断要存储多少字符。**

              **2.varchar（变长字符串) : 性能低，节省空间，需要进行判断，在进行存储。**

### 3.日期时间类型

![image-20231107181257897](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202311071813355.png)

例子:imp:

生日---------- -->使用birthday date

操作时间-------> update_time datetime

@AutoWried : 依赖注入:star:

:imp:

如果遇到两个相同的bean,则使用以下进行区别对待：

@Primary------------>指定依赖注入的**优先级**，和**控制反转使用在Service**上面使用

@Qualifier----------->**指定我们要注入的bean**,配合**@AutoWired下方,依赖注入**使用

@Resource----------->指定我们需要的bean,**在类中使用@Resource（name = “ userservice ”）**








## Spring注解大全



```java
//请求处理类，使用在类的上方, @RestController=@Controller + @ResponseBody。
@RestController

//@RequestMapping指定请求路径，使用在方法上,相当于Servlet中在web.xml中配置
@RequestMapping("/simplePojo")   

//@RequestParam 实现映射，请求参数绑定在控制器的方法参数上
@RequestParam( name= "name
              
//设置请求中是否必须包含此参数，否则抛异常，ture允许为空，false不允许为空
@RequestParam(required = false)

//@RequestParam 将多个请求参数的值封装到list集合
public String listParam(@RequestParam List<String> hobby){

    
    
//通过使用 @ApiIgnore 注解，你可以隐藏该参数      
@ApiIgnore MultipartHttpServletRequest request  
  
    
//@DateTimeFormat注解完成日期参数格式转换
public String dateParam(@DateTimeFormat(pattern  = "yyyy-MM-dd HH:mm:ss") LocalDateTime updateTime){

//@RequestBody将json格式的请求数据直接封装到实体对象当中
/*使用@RequestBody将json格式的数据请求封装到实体对象当中-->>使用post请求*/
            @RequestMapping("/jsonParam")  //使用RequestMapping指定请求路径
            public String jsonParam(@RequestBody User user){  
                System.out.println(user);
                return "ok";
            }

//@PathVariable 路径参数->获取到路径参数并把它绑定给方法形参
 public String path(@PathVariable Integer id,@PathVariable String name){    
    
//ResponseBody  使用在controller方法或者类上 -> 将方法的返回值直接响应给客户端,如果是对象或者集合，会先转化为json格式响应
  @Restcontroller=@controller+@responseBody


//这是一个Lombok注解，自动生成getter、setter、toString等方法      
 @Data
      
 //该注解指定了数据库表名为"li_setting"，用于与数据库进行映射。     
@TableName("li_setting")
  
 //这是一个Swagger注解，用于定义数据模型的说明和描述。
@ApiModel(value = "配置")

//这是一个Lombok注解,自动生成无参构造函数
@NoArgsConstructor


//注解的类可以读取配置文件中以 aliyun.oss 开头的属性值，并将这些属性值自动绑定到类的对应字段上
@ConfigurationProperties(prefix = "aliyun.oss") 
      
      
//将类放入ioc容器
@Componet----------------->一般使用在工具类中  控制反转
@Controller--------------->标注在控制器类上
@Sevice------------------>标注在业务类上
@Respository------------->标注在数据访问类上，(由于与my--batis整合，用的少)
      
//将容器中的东西拿出来注入
@AutoWired----------->默认按照类型自动装配,依赖注入
 SpringBoot提供，按照类型注入
      
//控制反转之后容器中有同类型的多个bean,则使用以下设置依赖注入
@Primary------------>指定依赖注入的**优先级**，和**控制反转使用在Service**上面使用
@Qualifier----------->**指定我们要注入的bean,配合@AutoWired("bean的名称")下方,依赖注入使用
@Resource----------->指定我们需要的bean,在类中使用@Resource（name = "bean的名称"）
 JDK提供的注解，按照名称注入
      
//如果包在com.jiefeng外面就要使用@ComponetScan进行包的扫描
@ComponetScan  包的扫描

//具有包扫描功能，默认扫描当前包及其子包
@SpringBootApplication

      
//用于检验加在字段上面的注解符合要求
@valid
      
1.字段中使用到的注解有以下：

@Null

限制只能为null

@NotNull

限制必须不为null

@AssertFalse

限制必须为false

@AssertTrue

限制必须为true

@DecimalMax(value)

限制必须为一个不大于指定值的数字

@DecimalMin(value)

限制必须为一个不小于指定值的数字

@Digits(integer,fraction)

限制必须为一个小数，且整数部分的位数不能超过integer，小数部分的位数不能超过fraction

@Future

限制必须是一个将来的日期

@Max(value)

限制必须为一个不大于指定值的数字

@Min(value)

限制必须为一个不小于指定值的数字

@Past

限制必须是一个过去的日期

@Pattern(value)

限制必须符合指定的正则表达式

@Size(max,min)

限制字符长度必须在min到max之间

@Past

验证注解的元素值（日期类型）比当前时间早

@NotEmpty

验证注解的元素值不为null且不为空（字符串长度不为0、集合大小不为0）

@NotBlank

验证注解的元素值不为空（不为null、去除首位空格后长度为0），不同于@NotEmpty，@NotBlank只应用于字符串且在比较时会去除字符串的空格

@Email

验证注解的元素值是Email，也可以通过正则表达式和flag指定自定义的email格式

```




![微信图片_20230716115422](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202311121922568.jpg)


















































































































































### 小知识点

#### 00.文件夹优先级问题

![image-20231026235828668](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202310262358869.png)





