# 🧪 TTACart Playwright Automation

A **Playwright automation framework** built using **JavaScript** and the **Page Object Model (POM)** to automate the TTACart application.

## 🚀 Tech Stack

* 🎭 **Playwright**
* 🟨 **JavaScript**
* 🟢 **Node.js**
* 🧩 **Page Object Model (POM)**
* 🔐 **Playwright Storage State**
* 🛣️ **Centralized Routes**

## 📌 Automated Areas

* 🔑 Login & Authentication
* 🛍️ Products
* 🛒 Cart
* 💳 Checkout
* 🍔 Hamburger Menu
* 🔄 Product Sorting

## ✨ Key Features

* ♻️ Reusable Page Object classes
* 🔐 Login once using `storageState`
* 🛣️ Centralized application routes
* 🧪 Functional test coverage
* 📊 HTML test reports
* ⚡ Parallel test execution

## 📁 Project Structure

```text
pages/
├── BasePage.js
├── LoginPage.js
├── ProductsPage.js
├── Cart.js
└── Checkout_1.js

routes/
└── Routes.js

tests/
├── auth.setup.js
└── functional/
    ├── cart.spec.js
    └── products.spec.js

playwright.config.js
package.json
```

## 📊 Reporting

Playwright HTML reports are generated after test execution.

```bash
npx playwright show-report
```

## 👨‍💻 Author

**Vaishnavi Shaw**

 Software Testing & Automation 🚀

---

⭐ **If you find this project useful, feel free to star the repository!**
