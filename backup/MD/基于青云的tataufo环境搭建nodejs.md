# 概述

* 本文针对node.js环境搭建所写，为第一版本，可能有些错误，随时更改，版本号为`0.1`


# 1. 创建服务器
## 后台将会在青云上创建服务器

# 2. 连接服务器
1. 在青云搭建主机后，通过VPC请求远程服务器
2. 在青云左侧 计算机与网络-VPC网络-主机-管理配置-VPN服务中，下载VPN证书
3. VPN软件加载证书，连接网络，以便后期进行操作

# 3. 在本地访问服务器
1. ubuntu连接创建服务器ip名，如web服务器，192.168.5.201
`ssh ubuntu@192.168.5.201`
2. 输入密码
3. 进入服务器
4. 进入仓库位置 e.p. `/tatafile/prod/`

# 4. 安装node环境（以便后期版本管理，在此用nvm安装node）
### 4.1 安装nvm
1. 进入软件安装包目录software `cd /home/tataufo/software`
2. 安装nvm `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash`
3. 重启terminal

### 4.2 安装node.js
1. 列举出所有可用的node版本 `nvm ls-remote`
2. 安装5.6版本node.js  `nvm install v5.6`

### 4.3 安装thinkjs
1. npm安装thinkjs `npm install thinkjs@2 -g --verbose`
2. 如果很慢的话，用淘宝镜像：`npm install thinkjs@2 -g --registry=https://registry.npm.taobao.org --verbose`

### 4.4 安装pm2
1. 安装 `npm install -g pm2`


# 5. 使用
1. 进入项目位置 `cd /tatafile/prod/xxxxx`
2. 因为上传时ignore依赖，所以需要在服务器所在项目中再次安装依赖，此为单次行为，理论上只需要第一次执行 `npm install --registry=https://registry.npm.taobao.org --verbose`
3. pm2运行项目
  + 进入项目www文件夹
  + pm2 start devlopment.js/product.js -i 1
