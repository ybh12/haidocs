# 🔥Java

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

### 		🌈自动类型转换

**char => int => long = >folat = >double**

**byte => short => int = > long = >float = > double** 

- 例子：int a = ‘c’;

数据类型转换的细节：

1. 当有多种数据类型进行性转换的时候，系统首先会自动将所有的数据类型转换为容量最大的那种数据类型在进行计算。
2. 我们将精度大（容量大的）赋值给精度（容量小的）数据类型时，就会报错，反之就会进行自动数据类型的转换。
3. （byte ,short）和(char），不会相互进行转换
4. byte，short，char三者可以进行计算，但是在计算之前都会转换为int
5. boolen类型不参与转换
6. 自动提升原则：表达式结果的类型自动提升为操作数中最大的类型

### 🌊强制类型转换

```java
int i = (int)1.9;
System.out.print("i");
//转换之后小数部分会消失

int j = 100;
byte b1 = (byte)j;
System.out.print("b1")
//转换之后，精度会降低

```

强制数据类型转换的细节：

1. 当个一个数据需要从大的数据类型转换为小的数据类型时，就需要使用到强制类型转换

2. 强制类型转换只对最近操作的数有效，往往会使用（）小括号提升优先级

   `int x = (int)10*3.5+6*1.5`❌

   `int x = (int)(10*3.5+6*1.5)`  ✅这个才会生效

3. char类型可以保存int类型的常量值，但是不能保存int类型的变量值

   `int a = 1`✅
   
   `char b = a`❌//这样错误的
   
   char b = (char)a✅//转换之后就是正确的
   
   char c = 100 ✅//常量值可以直接赋值
   
4. byte和short类型在进行运算的时候，使用int类型进行运算

### ✨基本数据类型和String类型的转换

#### 基本数据类型转换为String类型

```java
int a = 1;
float b = 2f;
double c = 12.00;
boolean d = true;

String str2 = b + "";
String str1 = a + "";
String str3 = c + "";
String str4 = d + "";
```

#### String 类型转换为基本数据类型

```
```

❌注意：我们一可以把“123”，转化为一个整数，但是不能将“hello”转换为整数

## 运算符的介绍



### 		引用数据类型

#### 			类（class）

#### 			接口(interface)

#### 			数组([])





# 🌎Java8

##   新特性：

### 	1.速度更快

### 	2.Lambda表达式->代码更少

### 	3.强大的Stream

### 	4.便于并行

### 	5.最大优化减少空指针异常，Optional

### 	6.Nashorn引擎，允许在jvm上运行JS应用