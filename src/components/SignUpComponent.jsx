import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const SignUpComponent = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [referralCodeInput, setReferralCodeInput] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validateInputs = () => {
    const errors = {};
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier);
    // const isPhone = /^\+?[1-9]\d{1,14}$/.test(identifier);
    const isPhone = true;

    if (!identifier) {
      errors.identifier = "Email or Phone number is required.";
    } else if (!isEmail && !isPhone) {
      errors.identifier = "Please enter a valid email address or phone number.";
    }

    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier);
    if(isEmail){
        navigate("/login");
    }
  };

  return (
    <div>
      <div id="recaptcha-container"></div>
      <form className="space-y-6" onSubmit={handleSignUp}>
        <div>
          <label
            htmlFor="identifier"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="identifier"
            name="identifier"
            type="text"
            required
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm ${
              errors.identifier ? "border-red-600" : "border-gray-300"
            }`}
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          />
          {errors.identifier && (
            <p className="mt-2 text-sm text-red-600">{errors.identifier}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm ${
                errors.password ? "border-red-600" : "border-gray-300"
              }`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5 text-gray-500" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="mt-2 text-sm text-red-600">{errors.password}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="referralCodeInput"
            className="block text-sm font-medium text-gray-700"
          >
            Referral Code (optional)
          </label>
          <input
            id="referralCodeInput"
            name="referralCodeInput"
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            value={referralCodeInput}
            onChange={(e) => setReferralCodeInput(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUpComponent;
