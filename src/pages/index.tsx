import Layout from "@/components/layout/layout";
import Seo from "@/components/seo";

export default function Home() {
  return (
    <Layout>
      <Seo title="Home" />
      <main className="w-screen h-screen flex items-center justify-center">
        <h1 className="text-3xl">Welcome to the starter template!</h1>
      </main>
    </Layout>
  );
}
