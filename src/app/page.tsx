"use client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <Card className="max-w-lg w-full shadow-lg border">
        <CardHeader>
          <h1 className="text-4xl font-bold text-center mb-2 tracking-tight">
            Mpesa Integration
          </h1>
          <p className="text-muted-foreground text-center">Geo web solutions</p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center gap-4 mt-4">
            <p className="text-lg text-gray-700 text-center">
              Seamlessly integrate Mpesa payments using Daraja API.
            </p>
            <Button asChild>
              <a href="/payments">Get Started</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
