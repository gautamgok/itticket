import SignUpComponent from "../components/SignUpComponent";
import image from "../assets/images.png"

const SignUpPage = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-full max-w-md m-auto p-8 bg-white shadow-lg rounded-lg">
        <div className="flex justify-center mb-4">
          <img src={image} alt="Your Company" width={150} height={150} />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">
          Sign Up to your account
        </h2>
        <p className="text-sm text-center mb-6">
          Already have an account?{" "}
          <a href="/login" className="text-red-600 hover:text-red-500">
            Sign in
          </a>
        </p>
        <SignUpComponent />
      </div>
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: "url('/8018766.jpg')",
        }}
      />
    </div>
  );
};

export default SignUpPage;
