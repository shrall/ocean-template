import { Eye } from "lucide-react";
import Link from "next/link";

import Layout from "@/components/layout/layout";
import Seo from "@/components/seo";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <Layout>
      <Seo title="Home" />
      <main className="w-screen h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl">Ocean Starter Template</h1>
        <Link href="/components">
          <Button variant="default">
            <Eye className="mr-2" /> See Components
          </Button>
        </Link>
      </main>
    </Layout>
  );
}
