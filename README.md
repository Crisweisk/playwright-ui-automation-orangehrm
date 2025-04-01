# UI Test Automation – OrangeHRM with Playwright

This is a **UI automation project** built using [Playwright](https://playwright.dev/), focused on testing the login and logout functionality of the OrangeHRM demo application.

It includes validations for successful and failed logins, logout behavior, automatic screenshots, and basic reporting.

---

## Project Overview

-  Automated login with correct credentials  
-  Validation of login failure with incorrect credentials  
-  Automated logout  
-  Manual and automatic screenshots  
-  Video capture of failed tests  
-  Test structure written in **TypeScript**  

---

##  Folder Structure
ui-automation-playwright-orangehrm/ ├── tests/ │ └── orangehrm-login.spec.ts ├── screenshots/ │ ├── login-success.png │ └── login-failed.png ├── playwright.config.ts ├── package.json └── README.md

##  How to Run

1. **Clone the repository**

git clone https://github.com/Crisweisk/ui-automation-playwright-orangehrm
cd ui-automation-playwright-orangehrm
Install dependencies
npm install
Run the tests


npx playwright test
Tests will run on Chromium with visible browser and output screenshots/videos in case of failure.

 Demo Application
We use the official OrangeHRM Demo site:
🔗 https://opensource-demo.orangehrmlive.com/

Test Credentials:
Username: Admin
Password: admin123

 Screenshots
Test Case	Screenshot
Login success	screenshots/login-success.png
Login failed	screenshots/login-failed.png


 Author
Cristian Camilo Delgado
QA Tester | Automation | Software Developer in Progress
📧 ccdelgado@outlook.es
🔗 GitHub Profile
https://github.com/Crisweisk


 License
This project is intended for learning, demonstration, and portfolio purposes only.
