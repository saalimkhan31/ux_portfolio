import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

export default function Resume() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    window.open(
      "https://drive.google.com/file/d/1SnOBMV-OWpZlnv8W5v3fCj031gxBMFLD/view",
      "_blank"
    );

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-lg font-semibold text-gray-700">
      {isLoading ? (
        <>
          <FaSpinner className="animate-spin text-3xl mb-4" />
          <p>Opening your resume in a new tab...</p>
        </>
      ) : (
        <p>
          See My Cv/Resume,{" "}
          <a
            href="https://drive.google.com/file/d/1SnOBMV-OWpZlnv8W5v3fCj031gxBMFLD/view"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            click here
          </a>
          .
        </p>
      )}
    </div>
  );
}
