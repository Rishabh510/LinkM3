import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { magicLinkVerify } from "../services/appwrite";

export const Verify = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const verify = async () => {
    try {
      const userId = searchParams.get("userId");
      const secret = searchParams.get("secret");
      console.log(userId, secret);
      const response = await magicLinkVerify(userId, secret);
      console.log(response);
      setTimeout(() => {
        navigate("/profile");
      }, 2000);
    } catch (error) {
      console.log("ERROR:", error);
      navigate("/login");
    }
  };
  useEffect(() => {
    verify();
  }, []);

  return (
    <h3 style={{ textAlign: "center" }}>
      Do not refresh or close the window. Verification is in progress...
    </h3>
  );
};
