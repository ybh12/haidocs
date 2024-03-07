## SpringSecurity注解
```java
   @PreAuthorize("@ss.hasPermi('system:company:remove')")
   
   这个注解的含义是，只有当当前用户具有名为 'system:company:remove' 的权限时，才能执行被注解的方法。
   @ss.hasPermi 是 Spring Security 提供的一个表达式，用于检查用户是否具有指定的权限。
   
   
```
