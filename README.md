## OTP Verification App
### Table of Contents
1. [Introduction](#introduction)
2. [Good to Have](#good-to-have)
3. [Tech Stack](#tech-stack)
4. [Getting Started](#getting-started)
5. [Usage](#usage)

### Introduction

The OTP Verification App is a web application that verifies mobile phone numbers using one-time passwords (OTP). It's a simple and user-friendly solution.
Having 3 pages:
Screen-1: Mobile Number Screen
Screen-2: OTP Verification Screen
Screen-3: Success Screen 

### Preview
<img width="420" src="https://github.com/getlost01/phone_otp_verification_react_firebase/assets/79409258/24460807-db48-40e0-a72c-cdd72e4d30c1">
<br>
<img width="420" src="https://github.com/getlost01/phone_otp_verification_react_firebase/assets/79409258/ff4ee9ca-9924-427d-a7ba-f6580bc22b21">
<br>
<img width="420" src="https://github.com/getlost01/phone_otp_verification_react_firebase/assets/79409258/021c1ce2-a8b9-4e42-b3c6-d700fa790dab">


### Good to Have
- **Country Code Selection**: Allow users to choose their country code.
- **Comprehensive Field Validations**: Prevent users from entering incorrect values.
- **Error Handling**: Handle various scenarios, like incorrect numbers or failed OTP delivery.
- **Responsive Design**: Ensure the app works on different devices.

### Tech Stack
- **React.js**: For the front-end.
- **JavaScript (JS)**: For scripting.
- **Firebase**: For user accounts and OTP storage.
- **SMS Service**: For sending OTPs.
- **REST API**: For backend servers communication

## Getting Started

To get started with the OTP Verification App, follow these steps:
1. Clone this repository to your local machine.
```bash
git clone https://github.com/your-username/otp-verification-app.git
```
2. Navigate to the project directory.
```bash
cd otp-verification-app
```
3. Install the required dependencies.
```bash
npm install
```
4. Configure Firebase and the SMS service with your credentials and API keys. Refer to the project's documentation for specific configuration details.
5. Start the development server.
```bash
npm start
```
6. Open your web browser and access the app at `http://localhost:3000`.

## Usage

1. Open the app.
2. Enter your mobile number and, if necessary, select the country code.
3. Click "Send OTP."
4. Check your phone for the OTP.
5. Enter the OTP.
6. Click "Verify OTP."
7. See a success message or error.
8. Change the country code or mobile number as needed.

#### Made with ❤️ and ReactJS (aka Javascript)