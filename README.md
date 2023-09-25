## OTP Verification App
**Here's the link to the working demo of this project:** [Watch the Video](https://youtu.be/vkP3gv2r4FI)

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
<img width="420" alt="welcome_page" src="https://github.com/shivamverma26/otp_authentication/assets/94590743/86cdf93b-fc3e-4b98-94e7-6da939ba9fcc">
<br>
<img width="420" alt="verify_page" src="https://github.com/shivamverma26/otp_authentication/assets/94590743/470beba8-7a7d-4312-9de6-4a9566079d7f">
<br>
<img width="420" alt="getstarted_page" src="https://github.com/shivamverma26/otp_authentication/assets/94590743/545203c2-fc35-462f-bfcb-c06d0e4930ff">

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
git clone https://github.com/shivamverm26/otp_authenticate.git
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
