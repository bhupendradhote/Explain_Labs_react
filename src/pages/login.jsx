import React, { useState } from "react";
// Make sure the path to your image is correct
import bg from "../assets/images/Mask_group.png";

const Login = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
  };

  return (
    <>
      {/* Optional font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap"
        rel="stylesheet"
      />

      <div className="login-page">
        <div className="login-container">
          <div className="login-card">
            {/* Left panel with background image */}
            <div className="left-card">
              {/* Background image container */}
              <div className="image-container">
                <div className="left-overlay">
                  <div className="brand-row">
                    <div className="brand-logo">E</div>
                    <div className="brand-name">Explain Labs</div>
                  </div>

                  <h1 className="left-title">
                    Explain Smarter & <br />
                    Faster Anytime.
                  </h1>
                </div>
              </div>
            </div>

            {/* Right panel (form) */}
            <div className="right-card">
              <div className="form-wrap">
                <h2 className="welcome">Welcome Back</h2>
                <p className="subtitle">
                  Log in to start creating easy explain with Explain Labs
                </p>

                <form onSubmit={handleSubmit} className="form">
                  <label className="label">Email</label>
                  <input
                    className="input"
                    type="email"
                    placeholder="input your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <button className="btn login-btn" type="submit">
                    Login
                  </button>
                </form>

                <div className="or-divider">
                  <span className="line" />
                  <span className="or-text">Or continue with</span>
                  <span className="line" />
                </div>

                <button className="btn google-btn" type="button">
                  <img
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                    alt="Google"
                    className="google-icon"
                  />
                  Continue with Google
                </button>

                <p className="signup">
                  Don't have an account?{" "}
                  <span className="signup-link">Sign up here</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scoped styles */}
        <style jsx="true">{`
          /* Base styles */
          .login-page {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #FFFFFF;
            font-family: 'Inter', sans-serif;
          }

          .login-container {
            width: 100%;
            max-width: 98%;
          }

          .login-card {
            display: flex;
            width: 100%;
            margin: 0 auto;
            border-radius: 16px;
            overflow: hidden;
            background: transparent;
            height: 100vh;
            padding: 20px;

          }

          /* Left Card - Background Image Section */
          .left-card {
            flex: 1;
            border-radius: 16px  16px;
            overflow: hidden;
            position: relative;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
            padding: 20px;

          }

          .image-container {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            background-image: url(${bg});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }

          .image-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(
              135deg,
              rgba(91, 60, 196, 0.85) 0%,
              rgba(76, 51, 167, 0.9) 50%,
              rgba(60, 40, 140, 0.95) 100%
            );
          }

          .left-overlay {
            position: absolute;
            left: 48px;
            bottom: 48px;
            right: 48px;
            color: #fff;
            z-index: 2;
          }

          .brand-row {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 24px;
          }

          .brand-logo {
            width: 32px;
            height: 32px;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            color: #fff;
            font-size: 16px;
            border: 1px solid rgba(255, 255, 255, 0.3);
          }

          .brand-name {
            font-weight: 600;
            color: #ffffff;
            font-size: 16px;
            opacity: 0.95;
          }

          .left-title {
                font-size: 40px;
                line-height: 1.1;
                margin: 0;
                font-weight: 600;
                letter-spacing: -0.6px;
                text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          }

          /* Right Card - Form Section */
          .right-card {
            flex: 1;
            background: #ffffff;
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            border-radius: 0 16px 16px 0;
            // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          }

          .form-wrap {
            width: 100%;
            max-width: 85%;
          }

          .welcome {
            font-size: 44px;
            font-style: Semi Bold;
            margin: 0 0 6px;
            font-weight: 600;
            color: #1a1a1a;
            text-align: center;
          }

          .subtitle {
            margin: 0 0 32px;
            font-style: Regular;
            font-weight: 400;
            color: #6b7280;
            font-size: 20px;
            text-align: center;
            line-height: 1.5;
          }

          .label {
            display: block;
            font-style: Medium;
            font-size: 18px;
            margin-bottom: 8px;
            color: #374151;
            font-weight: 400;
          }

          .input {
            width: 100%;
            padding: 14px 16px;
            border-radius: 10px;
            border: 2px solid #DBDBDB;
            font-size: 16px;
            font-weight: 400;
            outline: none;
            transition: all 0.2s ease;
            margin-bottom: 24px;
            background: #f9fafb;
            font-style: Regular;

          }

          .input:focus {
            box-shadow: 0 0 0 4px rgba(91, 60, 196, 0.12);
            border-color: #5b3cc4;
            background: #ffffff;
          }

          .input::placeholder {
            color: #9ca3af;
          }

          .btn {
            width: 100%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            border: none;
            outline: none;
            font-family: inherit;
          }

          .login-btn {
            background: #5b3cc4;
            color: #fff;
            padding: 16px 24px;
            border-radius: 50px;
            font-size: 16px;
            margin-top: 8px;
          }

          .login-btn:hover {
            background: #4a30a3;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(91, 60, 196, 0.3);
          }

          .or-divider {
            display: flex;
            align-items: center;
            gap: 16px;
            margin: 38px 0;
          }

          .or-divider .line {
            flex: 1;
            height: 1px;
            background: #C7C7C7;
          }

          .or-text {
            color: #C7C7C7;
            font-size: 18px;
            font-weight: 100;
            text-align: center;
          }

          .google-btn {
            padding: 14px 20px;
            border-radius: 12px;
            background: #ffffff;
            border: 1.5px solid #DBDBDB;
            font-size: 18px;
            color: #374151;
          }

          .google-btn:hover {
            background: #f9fafb;
            border-color: #d1d5db;
            transform: translateY(-1px);
          }

          .google-icon {
            width: 20px;
            height: 20px;
          }

          .signup {
            margin-top: 32px;
            text-align: center;
            color: #6b7280;
            font-size: 14px;
          }

          .signup-link {
                color: #000000c2;
                font-weight: 500;
                cursor: pointer;
                transition: color 0.2s ease;
          }

          .signup-link:hover {
            color: #4a30a3;
            text-decoration: underline;
          }

          /* If you want to test with a different image, uncomment this: */
          /*
          .image-container {
            background-image: url("https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80");
          }
          */

          /* Responsive Design */
          @media (max-width: 1024px) {
            .login-card {
              max-width: 900px;
              height: 600px;
            }
            
            .left-overlay {
              left: 32px;
              bottom: 32px;
              right: 32px;
            }
            
            .left-title {
              font-size: 40px;
            }
            
            .right-card {
              padding: 48px;
            }
            
            .welcome {
              font-size: 32px;
            }
          }

          @media (max-width: 768px) {
            .login-card {
              flex-direction: column;
              max-width: 500px;
              border-radius: 16px;
              height: auto;
              min-height: 800px;
            }
            
            .left-card {
              border-radius: 16px 16px 0 0;
              height: 350px;
              min-height: 350px;
            }
            
            .right-card {
              border-radius: 0 0 16px 16px;
              padding: 40px 32px;
              flex: 1;
            }
            
            .left-overlay {
              left: 24px;
              bottom: 24px;
              right: 24px;
            }
            
            .left-title {
              font-size: 32px;
            }
            
            .welcome {
              font-size: 28px;
            }
            
            .form-wrap {
              max-width: 100%;
            }
          }

          @media (max-width: 480px) {
            .login-page {
              padding: 16px;
            }
            
            .login-container {
              padding: 0;
            }
            
            .login-card {
              min-height: 700px;
            }
            
            .left-card {
              height: 280px;
              min-height: 280px;
                      display: none;
            }
            
            .left-overlay {
              left: 20px;
              bottom: 20px;
              right: 20px;
            }
            
            .brand-row {
              margin-bottom: 16px;
            }
            
            .left-title {
              font-size: 28px;
            }
            
            .right-card {
              padding: 52px 14px 0;
              align-items: flex-start;
            }
            
            .welcome {
              font-size: 22px;

            }
            
            .subtitle {
              font-size: 12px;
              margin-bottom: 38px;
            }
            
            .input {
              padding: 12px 14px;
              margin-bottom: 20px;
            }
            
            .login-btn {
              padding: 14px 20px;
            }
          }

          /* Animation */
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .form-wrap {
            animation: fadeIn 0.6s ease-out;
          }
        `}</style>
      </div>
    </>
  );
};

export default Login;