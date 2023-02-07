# mern-api

## Untuk Memulai Server
cd mern-api
<br>
npm install
<br>
npm run start

<br>

### Method GET untuk Mengambil Blog Post berdasarkan ID
http://localhost:4000/v1/blog/post

<br>

### Method GET untuk Mengambil Blog Post berdasarkan ID
http://localhost:4000/v1/blog/post/{ID}

<br>

### Method GET untuk Mengambil Gambar
http://localhost:4000/images/image.jpg

<br>

### Method POST untuk Register
http://localhost:4000/v1/auth/register

Contoh Body(Json)
{
    "name": "Adrian Ramadhan",
    "email": "adrianramadhan@gmail.com",
    "password": "123123"
}

<br>

### Method POST untuk Create Blog Post
http://localhost:4000/v1/blog/post

Contoh Body(Json)
{
    "title": "Mern Blog",
    "body": "Lorem Ipsum",
    "image": "image.jpg"
}

<br>

### Method PUT untuk Update Blog Post
http://localhost:4000/v1/blog/post/{ID}

Contoh Body(Json)
{
    "title": "Mern Blog",
    "body": "Lorem Ipsum",
    "image": "image.jpg"
}

<br>

### Method DELETE untuk menghapus Blog Post
http://localhost:4000/v1/blog/post/{ID}

