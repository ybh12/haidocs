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









