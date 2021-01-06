# READ ME

#### 1. Brief Introduction 

This is the final assignment for the modern Software Engineering course of East China Normal University in the autumn term of 2020.

This project mainly develops a second-hand goods trading platform on campus in the form of WeChat Mini Program(微信小程序).

#### 2. What Has Been Updated:

Prototype Diagram Website：https://modao.cc/app/6e641a55127a46477e58c9def5632830dfa806d5?simulator_type=device&sticky

Requirements Specification：\documents

Miniprogram Code：\miniprogram

#### 3. How to Configure it:

1. ​	Clone our `GitHub` repository to your local computer

   ```c
   git clone git@github.com:Hairaa-1026/HuaShiZi--Second-hand-trading-platform.git
   ```

2. Download `Weixin DevTools` (微信开发者工具)  and open the `\miniproprogram` project in it.

3. Download `Wampserver64`, create a new database `"huashizi"` , and import `huashizi.sql` from `\miniprogram\database` into it.

4. Copy the PHP files from `miniprogram\api` to `\www` in the installation directory of Wampserver64.

5. So you can see the small program we designed on the page.