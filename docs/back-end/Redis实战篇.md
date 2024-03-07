



## Redis

### 一、Redis介绍
#### redis是什么

- 1.基于内存的K/V存储中间键
  - 它是利用 **Key** 做索引来实现数据的**存储**、**修改**、**查询**和**删除**功能。
- 2.NoSQL 键值对数据库

**R**emote  **D**ictionary  **S**erver,远程词典服务，是一个基于内存的键值对NoSQL数据库

Redis 不仅仅是数据库，它还能作为消息队列等等。

![image-20240213235146490](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202402132351647.png)

#### **关系型 SQL 和 NoSQL 的对比**

:bicyclist:应用场景是关键:bicyclist:

![image-20240213235315614](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202402132353648.png)



#### **Redis 特征**

1. 支持多种数据结构
2. 单线程，每个命令的执行具备原子性，中途不会执行其他命令（指命令处理始终是单线程的，自 6.x 起改为多线程接受网络请求）
3. 高性能、低延时（基于内存、IO 多路复用、良好编码）
4. 支持数据持久化
5. 支持主从、分片集群
6. 支持多语言客户端

## 二、**Redis 安装**

建议 Linux 下安装，直接到官网安装即可，注意安装后更改 redis.conf 文件，设置 bind ip、requirepass 密码等参数。

Linux版本为CentOS 7.



### 1.单机安装Redis

#### 1.1.安装Redis依赖

Redis是基于C语言编写的，因此首先需要安装Redis所需要的gcc依赖：

```sh
yum install -y gcc tcl
```



#### 1.2.上传安装包并解压

然后将课前资料提供的Redis安装包上传到虚拟机的任意目录：



例如，我放到了/usr/local/src 目录：



解压缩：

```sh
tar -xzf redis-6.2.6.tar.gz
```

解压后：



进入redis目录：

```sh
cd redis-6.2.6
```



运行编译命令：

```sh
make && make install
```

如果没有出错，应该就安装成功了。



默认的安装路径是在 `/usr/local/bin`目录下：



该目录以及默认配置到环境变量，因此可以在任意目录下运行这些命令。其中：

- redis-cli：是redis提供的命令行客户端
- redis-server：是redis的服务端启动脚本
- redis-sentinel：是redis的哨兵启动脚本



#### 1.3.启动

redis的启动方式有很多种，例如：

- 默认启动
- 指定配置启动
- 开机自启



##### 1.3.1.默认启动

安装完成后，在任意目录输入redis-server命令即可启动Redis：

```
redis-server
```



这种启动属于`前台启动`，会阻塞整个会话窗口，窗口关闭或者按下`CTRL + C`则Redis停止。不推荐使用。



##### 1.3.2.指定配置启动

如果要让Redis以`后台`方式启动，则必须修改Redis配置文件，就在我们之前解压的redis安装包下（`/usr/local/src/redis-6.2.6`），名字叫redis.conf：

我们先将这个配置文件备份一份：

```
cp redis.conf redis.conf.bck
```

然后修改redis.conf文件中的一些配置：

```properties
# 允许访问的地址，默认是127.0.0.1，会导致只能在本地访问。修改为0.0.0.0则可以在任意IP访问，生产环境不要设置为0.0.0.0
bind 0.0.0.0
# 守护进程，修改为yes后即可后台运行
daemonize yes 
# 密码，设置后访问Redis必须输入密码
requirepass 123321
```

Redis的其它常见配置：

```properties
# 监听的端口
port 6379
# 工作目录，默认是当前目录，也就是运行redis-server时的命令，日志、持久化等文件会保存在这个目录
dir .
# 数据库数量，设置为1，代表只使用1个库，默认有16个库，编号0~15
databases 1
# 设置redis能够使用的最大内存
maxmemory 512mb
# 日志文件，默认为空，不记录日志，可以指定日志文件名
logfile "redis.log"
```

启动Redis：

```sh
# 进入redis安装目录 
cd /usr/local/src/redis-6.2.6
# 启动
redis-server redis.conf
```

停止服务：

```sh
# 利用redis-cli来执行 shutdown 命令，即可停止 Redis 服务，
# 因为之前配置了密码，因此需要通过 -u 来指定密码
redis-cli -u 123321 shutdown
```

##### 1.3.3.开机自启

我们也可以通过配置来实现开机自启。

首先，新建一个系统服务文件：

```sh
vi /etc/systemd/system/redis.service
```

内容如下：

```conf
[Unit]
Description=redis-server
After=network.target

[Service]
Type=forking
ExecStart=/usr/local/bin/redis-server /usr/local/src/redis-6.2.6/redis.conf
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

然后重载系统服务：

```sh
systemctl daemon-reload
```

现在，我们可以用下面这组命令来操作redis了：

```sh
# 启动
systemctl start redis
# 停止
systemctl stop redis
# 重启
systemctl restart redis
# 查看状态
systemctl status redis
```

执行下面的命令，可以让redis开机自启：

```sh
systemctl enable redis
```

### 2.Redis客户端

安装完成Redis，我们就可以操作Redis，实现数据的CRUD了。这需要用到Redis客户端，包括：

- 命令行客户端
- 图形化桌面客户端
- 编程客户端



#### 2.1.Redis命令行客户端

Redis安装完成后就自带了命令行客户端：redis-cli，使用方式如下：

```sh
redis-cli [options] [commonds]
```

其中常见的options有：

- `-h 127.0.0.1`：指定要连接的redis节点的IP地址，默认是127.0.0.1
- `-p 6379`：指定要连接的redis节点的端口，默认是6379
- `-a 123321`：指定redis的访问密码 

其中的commonds就是Redis的操作命令，例如：

- `ping`：与redis服务端做心跳测试，服务端正常会返回`pong`

不指定commond时，会进入`redis-cli`的交互控制台：



## 三、**Redis 连接方式**

- redis-cli
- GUI
- 多语言 SDK

## 四、Redis常用命令

Redis 的命令根据数据结构分为多个组。



1）redis 官网命令集：https://redis.io/commands/，中文版：http://www.redis.cn/commands.html

2）redis-cli help 命令查看，help [command] 可以查看某个具体命令、help @xxx 可以查看某个分组下的命令

### 通用命令

- set key value
- get key
- keys pattern 模糊搜索多个 key。性能较差，生产环境（尤其是主节点）不建议使用
- del key...
- exists key 判断 key 是否存在
- expire key 设置过期时间
- ttl key 查询剩余存活时间，未设置过期时间则为 -1

## Redis基本数据结构

### String类型

> 支持存储字符串，数字，浮点数（实际存储都是字节数组）：

|  Key  |    Value    |
| :---: | :---------: |
|  msg  | hello world |
|  num  |     10      |
| score |    92.5     |

单 key 的 value 最大不能超过 512 M！

![image-20240223222056915](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202402232220228.png)



实际使用时，通常用冒号连接多个词来拼接 key，比如 [项目名]:[业务名]:[类名]:[id]。在某些 GUI 工具中，会自动根据冒号来划分层级，浏览更方便。

### 哈希类型

值是一个 Hash 结构（类似 Java 的 HashMap）：

![image-20240223222402740](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202402232224719.png)



常用命令：

> 其实就是在String命令的基础上增加了“H”首字母

![image-20240223222521163](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202402232225741.png)





### List类型

理解为 Java 的 LinkedList 双向链表，特点是有序、插入删除快、但查找性能一般：

常见命令如下：

> 有点像一个双端队列

![image-20240223222744063](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202402232227046.png)





### Set类型

集合，类似于 Java 中的 HashSet，特点是单 set 内元素不能重复、查找性能高。

常见命令如下：

> 分为单集合命令和多集合命令（交并差集）

![image-20240223222907092](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202402232229199.png)





### SortedSet类型



有序集合，在 set 的基础上给每个元素多存了一个分数，类似于 value 类型为整型的 HashMap。

特点是有序、查找性能高，适合用于排行榜、统计 TopN。	

常见命令如下：

> 和 set 结构的命令很像

![image-20240223223019966](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202402232230902.png)

> 注意：所有的排名默认都是升序，如果要降序则在命令的Z后面添加REV即可

## **Redis 客户端**

### **主流客户端**

可以在 Redis 官网查看所有客户端以及推荐的客户端：https://redis.io/docs/clients

对于 Java，主要推荐以下 3 种：

![image-20240223231021862](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202402232310028.png)



其中，Jedis 的命令和原生 redis 命令行的命令一致，学习成本最低（注意它是线程不安全的，通常配合连接池使用）；Lettuce 和 

Spring 兼容最好（Spring Data Redis 默认集成）、基于 Netty 性能最高；Redisson 提供了和 Java 集合用法一致的分布式集合，适

用于更复杂的业务场景。

### **Spring Data Redis**

Spring Data 整合封装了一系列数据访问的操作，Spring Data Redis 则是封装了对 Jedis、Lettuce 这两个 Redis 客户端的操作，提

供了统一的 RedisTemplate 来操作 Redis。

RedisTemplate 针对不同的 Redis 数据结构提供了不同的 API，划分更明确：

![image-20240223223940501](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202402232239600.png)

注意，要在 Spring Data Redis 中使用 Lettuce 线程池的话，要额外引入 apache commons-pool2 依赖。

### RedisTemplate 序列化

RedisTemplate 默认使用 JDK 原生序列化器，可读性差、内存占用大，因此可以用以下两种方式来改变序列化机制：

​	1、自定义 RedisTemplate，指定 key 和 value 的序列化器

缺点：

- 内存占用大
- 需要配置

​	2、使用自带的 StringRedisTemplate，key 和 value 都默认使用 String 序列化器，仅支持写入 String 类型的 key 和 value。因此

需要自己将对象序列化成 String 来写入 Redis，从 Redis 读出数据时也要手动反序列化。

### SpringBoot整合SpringDateRedis快速入门

#### 1.引入依赖

```xml
<dependency>
 <!--Redis依赖 -->
 <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
    <version>3.1.5</version>

<!--连接池依赖 -->
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-pool2</artifactId>
    <version>2.8.0</version>
</dependency>

```

#### 2.配置文件

```yaml
spring:
	redis:
		host: 192.168.1.1
		port: 6379
		password: 123321
		lettuce:
			pool:
				max-active: 8 #最大连接
				max-idle: 8	#最大空闲连接
				min-idle: 0  #最小空闲连接
				max-wait: 100 #连接等待时间
```

#### 3.自动装配(RedisTemple)注入RedisTemplate

```YAML
@Autowired
private RedisTemplate redisTemplate;

```

#### 4.编写测试

```java
public class RedisTest{
	@Autowired
	private RedisTemplate redisTemplate;
    
    @Test
    void tsetString(){
        //插入一条string类型的数据类型
        redisTemplate.onForValue().set("name","李四");
        
        //读取一条string类型数据
        Object name = redisTemplate.onForValue().get("name");
        System.out.println("name=" + name);
    }
}
```

### RedisTemplate 序列化

RedisTemplate 默认使用 JDK 原生序列化器，可读性差、内存占用大，因此可以用以下两种方式来改变序列化机制：

​	1、自定义 RedisTemplate，指定 key 和 value 的序列化器

缺点：

- 内存占用大
- 需要配置

​	2、使用自带的 StringRedisTemplate，key 和 value 都默认使用 String 序列化器，仅支持写入 String 类型的 key 和 value。因此

需要自己将对象序列化成 String 来写入 Redis，从 Redis 读出数据时也要手动反序列化。

### RedisTemplate序列化方式

RedisTemplate可以接受任意Object作为值写入Redis，只不过写入之前会把Object序列化为字节形式，默认是采用JDK序列化，得到的加过事一堆乱码

缺点：

- 可读性差
- 内存占用较大

依赖是自动引入的，如果使用springmvc就是自动引入的

1.redisconfig配置文件：

- 创建RedisTemplate对象
- 设置连接工厂
- 创建json序列化工具
- 设置key的序列化
- 设置value的序列化
- 返回

```java
@Bean(name = "template")
    public RedisTemplate<String, Object> template(RedisConnectionFactory factory) {
        // 创建RedisTemplate<String, Object>对象
        RedisTemplate<String, Object> template = new RedisTemplate<>();
        // 配置连接工厂
        template.setConnectionFactory(factory);
        // 定义Jackson2JsonRedisSerializer序列化对象
        Jackson2JsonRedisSerializer<Object> jacksonSeial = new Jackson2JsonRedisSerializer<>(Object.class);
        ObjectMapper om = new ObjectMapper();
        // 指定要序列化的域，field,get和set,以及修饰符范围，ANY是都有包括private和public
        om.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);
        // 指定序列化输入的类型，类必须是非final修饰的，final修饰的类，比如String,Integer等会报异常
        om.enableDefaultTyping(ObjectMapper.DefaultTyping.NON_FINAL);
        jacksonSeial.setObjectMapper(om);
        StringRedisSerializer stringSerial = new StringRedisSerializer();
        // redis key 序列化方式使用stringSerial
        template.setKeySerializer(stringSerial);
        // redis hash key 序列化方式使用stringSerial
        template.setHashKeySerializer(stringSerial);
        
        // redis value 序列化方式使用jackson
        template.setValueSerializer(jacksonSeial);
        // redis hash value 序列化方式使用jackson
        template.setHashValueSerializer(jacksonSeial);
        
        template.afterPropertiesSet();
        return template;
    }
```

2.如果不是mvc框架，则需要引入jackson依赖

```xml
<dependency>
    <!--Jackson依赖-->
<groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jacakson-databind</artifactId>
</dependency>
```

3.使用方式

```java
@Autowired
private RedisTemplate<String, Object> template;
public void test002() {
   ValueOperations<String, Object> redisString = template.opsForValue();
   // SET key value: 设置指定 key 的值
   redisString.set("strKey1", "hello spring boot redis");
   // GET key: 获取指定 key 的值
   String value = (String) redisString.get("strKey1");
   System.out.println(value);

   //存取的时候保存user，取json
   redisString.set("strKey2", new User("ID10086", "theName", 11));
    //获取结果的时候帮我们将json反序列化成了一个对象
   User user = (User) redisString.get("strKey2");
   System.out.println(user);
}　　
```

4.json序列化方式的缺点  :first_quarter_moon:

![image-20240228180028947](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202402281800806.png)



夹带了user类的字节码，会带来额外的内存

5. 解决方式：

为了节省空间我们并不会使用json序列化器来处理value,而是统一使用String序列化器，要求只能存储String类型的key和value,**当需要存储java对象的时候手动完成对象的序列化和反序列化**

![image-20240228180508549](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202402281805484.png)



6.使用时不需要再进行配置，spring默认提供了一个StringRedisTemplate类，他的kae和value	的序列化方式默认是String,省去了我们定义Redistemplate

```java
@Autowired
private StringRedisTemplate stringRedisTemplate;
// JSON工具
private static final 0bjectMapper mapper = new ObjectMapper();
@Test
void testStringTemplate()throws JsonProcessingException {
    // 准备对象
    User user = new User("虎哥"，18);
    // 手动序列化
	String json = mapper.writeValueAsString(user);
	// 写入一条数据到redis
	stringRedisTemplate.opsForValue().set("user:200"，json);
	// 读取数据
	String jsonval = stringRedisTemplate.opsForValue().get("user:200");
	//反序列化
	User user1 = mapper.readValue(jsonval,User.class);
	System.out.println("user1=" + user1);
           }
```

### RedisTemplate（Hash的使用方法）

```java
@Test
void testHash() {
	stringRedisTemplate.opsForHash().put(key:"user:400".hashKey:"name",value:"虎哥");
    
    stringRedisTemplate.opsForHash().put( key: "user:400", hashKey: "age", value: "21");
    
    Map<Obiect,Obiect> entries = stringRedisTemplate.opsForHash().entries(key:"user:400");
    
    System.out.println("entries =" + entries);
```





## 五、Redis实战

### 1. 短信登录

#### 基于session实现登录

#### 1. 实现图解

![image-20240228235936813](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202402282359450.png)





## 六、Redis缓存异常方案

### 1. Redis异常问题

#### a、缓存雪崩

如果缓存集中在一段时间内失效，则用户就会大量访问数据库，这样数据库的访问量就会过大，甚至产生宕机。

#### b、缓存预热

在项目上线之前，现将一部分需要用到的数据从数据库中取出放入缓存中，这样一来，用户在登录使用时，就不会先从数据库拿数据了，直接在缓存中拿取数据

#### c、缓存穿透

用户在查询数据的时候，缓存中没有数据，当然数据库中也没有相应的数据，这样一来，每次都会查询两次，在缓存中找不到对应的Key和Value，还要在数据库中再查找一次

#### d、缓存降级

如果缓存失效或者缓存挂掉，则我们也不去访问数据库，直接访问存储在内存中的部分数据缓存，或者直接返回默认数据

#### e、缓存击穿

缓存中没有数据，但是数据库中有数据（通常是缓存过期），这是有大量的用户访问缓存，没有数据，又大量访问数据库



## 八、Redis工作的应用场景

1. 图表的数据来源比较多，处理过程相对于复杂，导致接口响应慢，不符合客户的需求
2. 自定义注解，把需要的信息存储到redis中
3. 一些经常使用到的数据在项目启动的时候直接加载到redis中
4. 验证码，token信息加载到redis中

对于缓存的一致性，直接先更新，再删除就能满足大部分场景

