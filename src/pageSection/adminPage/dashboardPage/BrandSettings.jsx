"use client";
import { useEffect, useState } from "react";

import FooterEditor from "./FooterEditor";
import { Button } from "@/index";
import api from "@/api";
import { translateText } from "@/libs/googleTranslate";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ImageDropZone from "@/components/shared/ImageDropZone";
import Image from "next/image";
import useImagePreview from "@/hooks/useImagePreview";

const BrandSettings = ({ settingData }) => {
  const [brandTitle, setBrandTitle] = useState("");
  const [footerText, setFooterText] = useState("");
  const [loading, setLoading] = useState(false);

  const { file, previewUrl, handleFileChange, resetImage } = useImagePreview();

  const { locale } = useParams();

  const router = useRouter();

  const updateBrandSetting = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const translatedTitle = await translateText(brandTitle);
      const translatedFooter = await translateText(footerText);

      const sendData = {
        id: settingData?.id,
        brandTitle: {
          en: brandTitle,
          fi: translatedTitle,
        },
        footerText: {
          en: footerText,
          fi: translatedFooter,
        },
        // brandLogo: logo,
      };

      if (!settingData?.id) {
        await api.post(`/api/admin/brand-setting`, sendData);
      } else {
        await api.put(`/api/admin/brand-setting`, sendData);
      }
      toast.success("Saved Successful");
      router.refresh();
    } catch (error) {
      toast.error("Failed to save brand settings");
      console.error("Failed to save brand settings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (settingData) {
      setBrandTitle(settingData?.brandTitle[locale]);
      setFooterText(settingData?.footerText[locale]);
    }
  }, [settingData]);

  return (
    <form
      onSubmit={updateBrandSetting}
      className="bg-white lg:p-6 p-2 rounded-lg shadow-md space-y-6"
    >
      <div className="space-y-2">
        <label className="block text-gray-700 font-bold">Brand Logo</label>
        {!file ? (
          <ImageDropZone handleFileChange={handleFileChange} />
        ) : (
          <div className="flex items-center gap-4">
            {previewUrl && (
              <Image
                src={previewUrl}
                alt="Preview"
                width={70}
                height={70}
                className="rounded border object-cover"
              />
            )}
            <button
              className="bg-colors-button text-white px-4 text-sm py-1 rounded-md"
              onClick={resetImage}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
      <div>
        <label className="block text-gray-700 font-bold">Brand Title</label>
        <input
          required
          type="text"
          value={brandTitle}
          onChange={(e) => setBrandTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mt-1"
        />
      </div>

      {/* <LogoUploader logo={logo} setLogo={setLogo} /> */}

      <FooterEditor footerText={footerText} setFooterText={setFooterText} />

      <Button
        type="submit"
        disabled={loading}
        className="px-5 py-2 rounded-lg font-semibold"
      >
        {loading ? "Saving..." : "Save"}
      </Button>
    </form>
  );
};

export default BrandSettings;
