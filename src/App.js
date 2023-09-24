import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";

import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "./firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";

const App = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    setVerifyLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setVerifyLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        toast.error("Error in sending OTP!");
        setVerifyLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Error in verifying OTP!");
        setLoading(false);
      });
  }

  return (
    <section className="bg-white flex items-center justify-center h-screen fontFamily-cust">
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <>
            <img src="/userPage.png" alt="" className="w-72 mx-auto" />
            <h4 className="text-center leading-normal text-2xl mt-10 mb-0">
              Welcome to AdmitKard
            </h4>
            <p className="text-center leading-normal text-gray-400 font-weight-300 text-md mb-16 ">
                In order to provide you with <br/>
                a custom experience,  <br/>
                we need to ask you a few questions
            </p>
            <button
              className="bg-yellow-500 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded-xl rounded"
            >
                <span>Get Started</span>
              </button>
              <p className="text-center leading-normal text-gray-400 font-weight-300 text-xs my-2 ">
                *This will take less than 5 minutes
            </p>
          </>
        ) : (
          <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
           {!showOTP && <div>
              <img src="/Admitcard_logo.png" alt="" className="w-100 mx-auto" />
              <h4 className="text-center leading-normal text-2xl mt-16 mb-0">
                Welcome Back
              </h4>
              <p className="text-center leading-normal text-gray-400 text-md mb-5 ">
                Please sign in to your account
              </p>
              </div>
            }
            {showOTP ? (
              <>
                <img src="/Otp_verify.png" alt="" className="w-40 mx-auto" />
                <h4 className="text-center leading-normal text-xl mt-10 mb-0">
                  Please verify Mobile number
                </h4>
                <p className="text-center leading-normal text-gray-400 font-medium text-md mb-10 ">
                  An OTP is sent to +{ ph.substring(0, 2) + " " + ph.substring(2, ph.length) }<br/>
                  <a href="/" className="text-center border-b-2 border-yellow-500 text-yellow-500 font-medium text-xs p-0 text-decoration-dashed">
                    Change Phone Number
                  </a>
                </p>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="opt-container "
                ></OtpInput>

                <p className="text-center leading-normal text-gray-400 font-medium text-xs mt-10 m-1">
                  Didn't receive the OTP?{" "}
                  <a onClick = {onSignup} 
                  className="text-center border-b-2 cursor-pointer border-yellow-500 text-yellow-500 font-medium text-xs p-0 text-decoration-dashed">
                    Resend OTP
                  </a>
                </p>

                <button
                  onClick={onOTPVerify}
                  className="bg-yellow-500 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded-xl rounded"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Verify OTP</span>
                </button>
              </>
            ) : (
              <>
                <PhoneInput country={"in"} value={ph} onChange={setPh} />
                <p className="text-center leading-normal text-gray-400 font-medium text-xs mt-3 mb-10">
                  We will send you a one time SMS message.
                  Charges may apply.
                </p>
                <button
                  onClick={onSignup}
                  className="bg-yellow-500 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded-xl rounded"
                >
                  {verifyLoading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Sign In with Otp</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default App;
