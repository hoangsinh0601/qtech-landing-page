import dynamic from "next/dynamic";

const SceneView = dynamic(() => import("@/components/SceneView"), {
  ssr: false,
});

export default function ExamplePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Compact Version (Scale 8)
          </h2>
        </div>
      </div>
    </div>
  );
}
