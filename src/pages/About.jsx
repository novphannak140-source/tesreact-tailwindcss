import { useEffect, useState } from "react";
const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // simulate API call
  }, []);
  return (
    <div className="h-screen flex items-center justify-center">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <h1 className="text-3xl font-bold text-green-600">✅ Data Loaded!</h1>
      )}
    </div>
  );
};

export default About;
