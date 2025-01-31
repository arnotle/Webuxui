const express = require('express')
const app = express()
const path = require('path')

// กำหนดค่า PORT ก่อนการใช้
const PORT = 3000

let dir = path.join(__dirname, '../Css_1')
let url = path.resolve(__dirname, '../Css_1/login.html')
let loginPage = path.resolve(__dirname, '../Css_1/login.html') // หน้า login

app.use(express.static(dir))

// รันเซิร์ฟเวอร์
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

// เพิ่มการส่งไฟล์เมื่อเข้าไปที่ /main
app.get('/main', (req, res) => {
    res.sendFile(url)  // ใช้ url ที่กำหนดไว้
})

// เพิ่มการเชื่อมต่อหน้า login
app.get('/login', (req, res) => {
    res.sendFile(loginPage)  // ใช้ loginPage ที่กำหนดไว้
})

// เปลี่ยนเส้นทางหลักเป็น /test
app.get('/test', (req, res) => {
    res.send('<h1>Test Page</h1>')
})
