"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Pencil } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const countryList = [
  { code: "IN", name: "India (भारत)" },
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "AU", name: "Australia" },
  { code: "CA", name: "Canada" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "JP", name: "Japan" },
  { code: "SG", name: "Singapore" },
];

export default function AccountProfile() {
  const [phone, setPhone] = useState("91");
  const [whatsapp, setWhatsapp] = useState("91");
  const [country, setCountry] = useState("India (भारत)");

  return (
    <div className="bg-[#f6f7fb] p-4">
      <div className="max-w-[1024px] mx-auto px-4">
        <h1 className="text-[32px] font-bold text-gray-900 mb-4">Account</h1>
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr]">
          {/* Sidebar */}
          <div className="bg-[#fef8f8] p-4 space-y-4">
            <div className="text-sm font-semibold text-gray-900">
              Edit Profile
            </div>
            <div className="text-sm text-gray-700">Settings</div>
            <div className="text-sm text-gray-700">Chat With Us</div>
            <div className="text-sm text-gray-700 flex items-center">
              User Guide <span className="ml-1">↗</span>
            </div>
            <div className="text-xs bg-[#e8edf5] px-2 py-1 rounded text-gray-700 font-medium mt-6">
              Account managed by
              <br />
              <span className="font-bold">Data Science Masterminds</span>
            </div>
          </div>

          {/* Profile Form */}
          <Card className="p-6 shadow-none rounded-none border-none">
            <CardContent className="space-y-6">
              {/* Profile Photo */}
              <div className="flex flex-col gap-2 items-start justify-center space-x-4">
                <div className="text-sm text-gray-700">Profile Photo</div>
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-16 rounded-full bg-gray-200" />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-1 text-blue-600"
                  >
                    Edit <Pencil className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="text-sm font-medium">
                  Name<span className="text-red-500">*</span>
                </label>
                <div className="flex mt-1 border border-gray-200">
                  <Input
                    className="rounded-none h-[38px] !bg-[#FAFAFA] border-0 w-full"
                    defaultValue="Anisha Gupta"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="text-sm font-medium">
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <div className="flex mt-1 border-1 border-gray-200">
                  <div className="w-24 border-0">
                    <PhoneInput
                      country={"in"}
                      value={phone}
                      onChange={setPhone}
                      inputClass="!w-full !h-[38px] !border-0 !bg-[#FAFAFA] !rounded-none !text-sm"
                      buttonClass="!rounded-none !border-0"
                      dropdownClass="!z-[100] "
                      containerClass="!w-full"
                    />
                  </div>
                  <Input
                    className="rounded-none h-[38px] focus:outline-0 !bg-[#FAFAFA] border-0"
                    defaultValue="070140 20949"
                  />
                </div>
              </div>

              {/* WhatsApp Number */}
              <div>
                <label className="text-sm font-medium">
                  Whatsapp Number<span className="text-red-500">*</span>
                </label>
                <div className="flex mt-1 border-1 border-gray-200">
                  <div className="w-24 border-0">
                    <PhoneInput
                      country={"in"}
                      value={phone}
                      onChange={setPhone}
                      inputClass="!w-full !h-[38px] !border-0 !bg-[#FAFAFA] !rounded-none !text-sm"
                      buttonClass="!rounded-none !border-0"
                      dropdownClass="!z-[100] "
                      containerClass="!w-full"
                    />
                  </div>
                  <Input
                    className="rounded-none h-[38px] !bg-[#FAFAFA] border-0"
                    defaultValue="070140 20949"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="text-sm font-medium">Email Address</label>
                <div className="flex mt-1 border border-gray-200">
                  <Input
                    className="rounded-none h-[38px] !bg-[#FAFAFA] border-0 w-full"
                    defaultValue="anisha.g0201@gmail.com"
                    disabled
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label className="text-sm font-medium">Company Name</label>
                <div className="flex mt-1 border border-gray-200">
                  <Input
                    className="rounded-none h-[38px] !bg-[#FAFAFA] border-0 w-full"
                    defaultValue="Data Science Masterminds"
                    disabled
                  />
                </div>
              </div>

              {/* Country (Full Width with Country Names) */}
              <div>
                <label className="text-sm font-medium">
                  Country<span className="text-red-500">*</span>
                </label>
                <div className="flex mt-1 border border-gray-200">
                  <Select
                    value={country}
                    onValueChange={(val) => setCountry(val)}
                  >
                    <SelectTrigger className="w-full rounded-none h-[38px] text-sm !bg-[#FAFAFA] border-0 focus:ring-0 focus:outline-none">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countryList.map((c) => (
                        <SelectItem key={c.code} value={c.name}>
                          {c.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Save Button */}
              <Button className="w-full rounded-none bg-[var(--theme-color)] hover:bg-[var(--theme-hover-color)] text-white">
                SAVE
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
