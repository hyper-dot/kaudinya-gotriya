"use client";
import React from "react";
import { H1 } from "@/components/typography";
import { ImageUploadBtn } from "@/components/admin/ImageUploadBtn";
import { provinceMemberSchema, TProvinceMember } from "@/schemas/member.schema";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { getSignatureForMembers } from "@/server/actions/gallery/upload.action";
import {
  getCloudinaryApiKey,
  getCloudinaryUploadUri,
} from "../../../../news/new/constants";
import { addNewProvinceMember } from "@/server/actions/members/members.action";
import { PROVINCES } from "@/server/utils/constants";

const page = () => {
  const router = useRouter();
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<TProvinceMember>({
    resolver: zodResolver(provinceMemberSchema),
    defaultValues: {
      province: "",
    },
  });

  const onSubmit = async (data: TProvinceMember) => {
    const { image, name, position, isChairman, province } = data;
    const { timestamp, signature } = await getSignatureForMembers();
    const formData = new FormData();
    formData.append("file", image);

    const endpoint = getCloudinaryUploadUri();
    formData.append("api_key", getCloudinaryApiKey());
    formData.append("signature", signature);
    formData.append("timestamp", timestamp.toString());
    formData.append("folder", "members");
    const cloud_res = await fetch(endpoint, { method: "POST", body: formData });

    if (cloud_res.ok) {
      const { public_id, secure_url } = await cloud_res.json();
      const res = await addNewProvinceMember({
        name,
        position,
        image: { public_id, secure_url },
        isChairman: isChairman,
        province,
      });
      toast({
        variant: res.success ? "success" : "destructive",
        title: res.success ? "Success !!" : "Failed !!",
        description: res.message,
      });
      if (res.success) return router.back();
    } else {
      toast({
        variant: "destructive",
        title: "Failed !!",
        description:
          "Couldn't upload image on the server. Please contact relavant party.",
      });
    }
  };

  return (
    <div className="max-w-xl">
      <H1 className="pb-10">New Member Details</H1>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <ImageUploadBtn setValue={setValue} trigger={trigger} />
        <p className="text-xs text-red-500">
          {errors.image && String(errors.image.message)}
        </p>

        <div className="flex flex-col">
          <Label htmlFor="province">Province</Label>
          <select
            id="province"
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors"
            {...register("province")}
          >
            <option value="">Please select a province</option>
            {PROVINCES.map((p) => (
              <option value={p.value} key={p.value}>
                {p.title}
              </option>
            ))}
          </select>
          <p className="text-xs text-red-500">
            {errors.province && String(errors.province.message)}
          </p>
        </div>

        <div>
          <Label>Full Name</Label>
          <Input {...register("name")} placeholder="Eg: Ram Prasad Adhikari" />
          <p className="text-xs text-red-500">
            {errors.name && String(errors.name.message)}
          </p>
        </div>
        <div>
          <Label>Position</Label>
          <Input {...register("position")} placeholder="Eg: Chairman" />
          <p className="text-xs text-red-500">
            {errors.position && String(errors.position.message)}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Label htmlFor="chairman">Is Chairman</Label>
          <input id="chairman" {...register("isChairman")} type="checkbox" />
        </div>

        <Button disabled={isSubmitting} className="flex gap-1">
          {isSubmitting && <Loader2 size={20} className="animate-spin" />}
          Add Member
        </Button>
      </form>
    </div>
  );
};

export default page;
