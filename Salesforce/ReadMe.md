LINK : https://www.youtube.com/watch?v=n4Nx7YD5_mY

---

## ✅ **Step 1: Sign Up for Salesforce Developer Edition** *(Only Once)*

1. Go to: [https://developer.salesforce.com/](https://developer.salesforce.com/)
2. Click **Sign Up** (top right).
3. Fill in your details (name, email, company, country, etc.).
4. Submit the form.
5. Check your email inbox → Click on the verification link → Set your password → Log in.

---

## 🧱 **Step 2: Create a Custom Object - `Student`**

1. Click the **Gear icon (⚙️)** at the top right → Select **Setup**.
2. In the left sidebar, search for **Object Manager**.
3. Click **Object Manager**.
4. Click **Create > Custom Object**.
5. Enter:

   * **Label:** `Student`
   * **Plural Label:** `Students`
   * **Record Name:** `Student Name`
   * Check: ✅ *Allow Reports*, ✅ *Allow Activities*, ✅ *Track Field History*
6. Leave other fields as default → Click **Save**.

---

## 🔡 **Step 3: Add Fields to `Student` Object**

1. After creating, you'll be on the **Student object page**.
2. In the left menu, click **Fields & Relationships**.
3. Click **New** → Choose **Text**.

   * **Label:** `Email`, **Length:** `50`
   * Click **Next** → **Next** → **Save**
4. Click **New** → Choose **Text**

   * **Label:** `Course`
   * Click **Next** → **Next** → **Save**

Now the Student object has:

* `Student Name` (default)
* `Email`
* `Course`

---

## 🧱 **Step 4: Create a Second Object - `Feedback`**

1. Return to **Object Manager**.
2. Click **Create > Custom Object**.
3. Enter:

   * **Label:** `Feedback`
   * **Plural Label:** `Feedbacks`
   * **Record Name:** `Feedback Name` (or any identifier)
4. Click **Save**.

---

## 🔡 **Step 5: Add Fields to `Feedback` Object**

1. On the Feedback object page, go to **Fields & Relationships**.
2. Add the following fields:

   * **Picklist:**

     * Label: `Rating`
     * Values: `1`, `2`, `3`, `4`, `5` (enter each on a new line)
     * Save

   * **Long Text Area:**

     * Label: `Comments`
     * Save

   * **Text:**

     * Label: `Faculty`
     * Save

   * **Lookup Relationship:**

     * Label: `Student`
     * Related To: `Student`
     * Save

This links each Feedback entry to a Student record.

---

## 🧭 **Step 6: Create Tabs for Custom Objects**

1. Go to **Setup** → In **Quick Find**, search `Tabs`.
2. Under **Custom Object Tabs**, click **New**.
3. For **Object**, select `Student`.
4. Choose a **Tab Style** (any icon).
5. Click **Next** → **Save**.
6. Repeat for the `Feedback` object as well.

---

## 🧩 **Step 7: Create a Lightning App - `FeedbackApp`**

1. In **Quick Find**, search **App Manager**.
2. Click **App Manager** → Click **New Lightning App**.
3. Enter:

   * **App Name:** `FeedbackApp`
   * Check all boxes (for Navigation, Setup, etc.)
4. When asked to **Add Tabs**:

   * Add both: `Student` and `Feedback`
5. Save and **Finish**.

---

## 🚀 **Step 8: Use the App**

1. Click the **App Launcher (grid icon)** in the top-left corner.
2. Search for `FeedbackApp` → Open it.
3. You will see two tabs: **Students** and **Feedback**.
4. Click **New** under each tab to add student and feedback records.

---

### ✅ Final Output:

* A functional **Salesforce app** with two custom objects: `Student` and `Feedback`.
* Fully linked using a **Lookup Relationship**.
* Includes tabs for easy data entry and access.

Would you like a downloadable PDF guide of this process or sample screenshots to refer to?

