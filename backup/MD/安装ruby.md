#  安装ruby

1. 安装xcode [Xcode](http://developer.apple.com/xcode/) 

2. 安装rvm

   ```
   curl -L https://get.rvm.io | bash -s stable
   ```

   ​

3. 重启terminal

4. 查看是否安装成功 `rvm -v`

5. 用rvm安装ruby `rvm install 2.0.0`

6. 设置ruby为default `rvm 2.0.0 --default` 为了避免rvm安装了多个ruby



## 检测ruby

1. `ruby -v`
2. `gem -v`



## 替换ruby源为ruby china

```
gem source -a https://gems.ruby-china.org
```

