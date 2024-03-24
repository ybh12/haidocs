# Java

## 	java转义字符

1) `\t` 一个制表位，实现对齐功能
2) `\n`换行符
3) `\\`一个\
4) `\'`一个‘
5) `\"`一个“
6) `\r`一个回车

## 	常用的dos命令

1.查看指定目录下面的子目录

![image-20240324232245898](https://cdncode.oss-cn-beijing.aliyuncs.com/test/202403242322748.png)

## 	相对路径和绝对路径

1. 相对路径：从当前目录开始定位，形成一个路径`..\\..\\ybh08\hello.txt`
2. 绝对路径：从顶级目录开始定位，形成的路径`d:\abc\ybh08\hello.txt`

## 	数据类型

### 		基本数据类型

#### 			数值型

- 整数类型 **( byte[1] , short[2], int[4], long[8]** )
- 浮点（小数）类型 **(float[4], double [8]** )

#### 			字符型

- (char[2]),存放单个字符‘a’

#### 			布尔型

- (boolean[1])

### 		自动类型转换

**char => int => long = >folat = >double**

**byte => short => int = > long = >float = > double** 

- 例子：int a = ‘c’;

### 		引用数据类型

#### 			类（class）

#### 			接口(interface)

#### 			数组([])





# Java8

##   新特性：

### 	1.速度更快

### 	2.Lambda表达式->代码更少

### 	3.强大的Stream

### 	4.便于并行

### 	5.最大优化减少空指针异常，Optional

### 	6.Nashorn引擎，允许在jvm上运行JS应用