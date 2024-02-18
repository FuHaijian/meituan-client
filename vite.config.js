import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  alias: {
    '@': path.resolve(__dirname, 'src')
  },
  server:{
    host:'0.0.0.0' ,//ip地址
    port: 4000, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
  }
})
