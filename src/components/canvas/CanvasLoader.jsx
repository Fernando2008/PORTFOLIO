import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html as="div" center>
      <div className="flex flex-col items-center justify-center bg-black/75 p-6 rounded-lg shadow-lg">
        <div className="w-12 h-12 border-4 border-t-primary border-gray-200 rounded-full animate-spin"></div>

        <p className="text-white text-lg font-bold mt-4">
          {progress.toFixed(2)}%
        </p>

        <div className="w-full max-w-xs h-2 bg-gray-600 rounded-full mt-4 overflow-hidden">
          <div
            className="h-full bg-primaryHover transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </Html>
  );
};

export default CanvasLoader;
