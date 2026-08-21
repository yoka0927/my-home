# 无后端部署

本项目可以作为公开 GitHub 仓库，通过 Vercel 的 Clone/Deploy 流程部署。

## 维护者一次配置

编辑 `public/deploy-config.js`，把 `repositoryUrl` 改成项目的公开 GitHub 仓库地址。不要把 GitHub 密码、Token、Vercel Token 或个人配置写入仓库。

部署后打开 `/deploy.html`，页面会显示“部署到 Vercel”按钮。

## 使用者操作

1. 打开 `/deploy.html`。
2. 点击“部署到 Vercel”。
3. 登录自己的 Vercel 账号并点击 Deploy。
4. 等待构建完成，在 Vercel 项目中查看网站地址。

纯文件夹版本不会自动创建使用者的 GitHub 仓库，也不会代替使用者保存 GitHub 或 Vercel 授权。需要自动创建仓库和自动发布时，必须增加后端或无服务器函数。
