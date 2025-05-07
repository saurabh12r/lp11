Link : https://codeastro.com/movie-ticket-booking-system-in-php-with-source-code/



To run a PHP and MySQL project using **XAMPP**, follow these steps:

---

### ✅ **1. Install XAMPP**

* Download XAMPP from the official site: [https://www.apachefriends.org](https://www.apachefriends.org)
* Install it and launch the **XAMPP Control Panel**.

---

### ✅ **2. Start Apache and MySQL**

* In the XAMPP Control Panel, click **Start** next to **Apache** and **MySQL**.
* Make sure both show green and say “Running”.

---

### ✅ **3. Move Project Files to `htdocs`**

* Locate your PHP project folder.
* Copy it into:

  ```
  C:\xampp\htdocs\
  ```

  For example, if your project is named `myproject`, the full path will be:

  ```
  C:\xampp\htdocs\myproject\
  ```

---

### ✅ **4. Create the MySQL Database**

1. Open your browser and go to:

   ```
   http://localhost/phpmyadmin
   ```
2. Click **"New"**, enter a **database name**, and click **"Create"**.
3. Import SQL file (if any):

   * Go to the created database → Click **"Import"** → Upload your `.sql` file and **click Go**.

---

### ✅ **5. Configure Database Connection in Your Project**

* Open your project folder.
* Find and edit the file that contains DB connection (often named `config.php`, `db.php`, or similar).
* Make sure it has:

  ```php
  $conn = mysqli_connect("localhost", "root", "", "your_database_name");
  ```

  * Username: `root`
  * Password: *(leave it blank by default)*

---

### ✅ **6. Run the Project**

* Open your browser and type:

  ```
  http://localhost/myproject/
  ```

  * Replace `myproject` with your actual folder name.

---

### ✅ **Optional: Set Index Page**

If it doesn't open the correct page directly, go to:

```
http://localhost/myproject/index.php
```

---

Would you like help setting up the DB connection code or a sample project structure?
