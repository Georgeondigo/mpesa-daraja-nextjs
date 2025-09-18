"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface dataFromForm {
  mpesa_phone: string;
  name: string;
  amount: number;
}

function PaymentForm() {
  const [dataFromForm, setDataFromForm] = useState<dataFromForm>({
    mpesa_phone: "",
    name: "",
    amount: 0,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      mpesa_number: dataFromForm.mpesa_phone.trim(),
      name: dataFromForm.name.trim(),
      amount: dataFromForm.amount,
    };
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <h1 className="text-2xl font-bold text-center">Mpesa Payment</h1>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-base text-gray-600 text-center">
            Provide your name, mpesa number and amount to process donation.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                required
                value={dataFromForm.name}
                onChange={(e) =>
                  setDataFromForm({
                    ...dataFromForm,
                    name: e.target.value,
                  })
                }
                placeholder="John Doe"
              />
            </div>
            <div>
              <Label htmlFor="mpesa_number">Mpesa Number</Label>
              <Input
                id="mpesa_number"
                type="text"
                required
                value={dataFromForm.mpesa_phone}
                onChange={(e) =>
                  setDataFromForm({
                    ...dataFromForm,
                    mpesa_phone: e.target.value,
                  })
                }
                placeholder="Enter mpesa phone number"
              />
            </div>
            <div>
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                required
                value={dataFromForm.amount}
                onChange={(e) =>
                  setDataFromForm({
                    ...dataFromForm,
                    amount: Number(e.target.value),
                  })
                }
                placeholder="Enter amount"
                min={1}
              />
            </div>
            <Button type="submit" className="w-full">
              Proceed With Payment
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default PaymentForm;
