"use client";
import React, { useEffect, useState } from "react";
import TitleInput from "@/components/shared/TitleInput";
import DescriptionInput from "@/components/shared/DescriptionInput";
import ItemsListEditor from "@/components/shared/ItemsListEditor";
import ButtonsEditor from "./ButtonsEditor";
import { Button } from "@/index";
import toast from "react-hot-toast";
import api from "@/api";
import { useParams, useRouter } from "next/navigation";
import { translateText } from "@/libs/googleTranslate";
import ImageDropZone from "@/components/shared/ImageDropZone";
import Image from "next/image";
import useImagePreview from "@/hooks/useImagePreview";

const HeroBanner = ({ bannerData }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [items, setItems] = useState([""]);
  const [buttonOneText, setButtonOneText] = useState("");
  const [buttonTwoText, setButtonTwoText] = useState("");
  const [loader, setLoader] = useState(false);
  const { locale } = useParams();

  const { file, previewUrl, handleFileChange, resetImage } = useImagePreview();

  const router = useRouter();

  const updateHeroBanner = async (event) => {
    event.preventDefault();
    setLoader(true);
    try {
      const translatedItems = await Promise.all(
        items.map(async (item) => ({
          en: item,
          fi: await translateText(item),
        }))
      );

      const sendData = {
        id: bannerData?.id, // important for PUT
        title: {
          en: title,
          fi: await translateText(title),
        },
        description: {
          en: description,
          fi: await translateText(description),
        },
        items: translatedItems,
        buttonOneText: {
          en: buttonOneText,
          fi: await translateText(buttonOneText),
        },
        buttonTwoText: {
          en: buttonTwoText,
          fi: await translateText(buttonTwoText),
        },
      };

      const method = bannerData?.id ? "put" : "post";

      const { data } = await api[method](
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/hero-banner`,
        sendData
      );

      toast.success(data.message);
      router.refresh();
    } catch (err) {
      toast.error("failed");
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    if (!bannerData) return;

    setTitle(bannerData.title[locale]);
    setDescription(bannerData.description[locale]);
    setItems(bannerData.items.map((item) => item[locale]));
    setButtonOneText(bannerData.buttonOneText[locale]);
    setButtonTwoText(bannerData.buttonTwoText[locale]);
  }, [bannerData, locale]);

  return (
    <form
      onSubmit={updateHeroBanner}
      className="bg-white p-6 rounded-lg shadow-md space-y-6"
    >
      <div className="space-y-2">
        <label className="block text-gray-700 font-bold">Banner Image</label>
        {!file ? (
          <ImageDropZone handleFileChange={handleFileChange} />
        ) : (
          <div className="flex items-center gap-4">
            {previewUrl && (
              <Image
                src={previewUrl}
                alt="Preview"
                width={700}
                height={500}
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

      <TitleInput title={title} setTitle={setTitle} />
      <DescriptionInput
        description={description}
        setDescription={setDescription}
      />
      <ItemsListEditor items={items} setItems={setItems} />
      <ButtonsEditor
        buttonOneText={buttonOneText}
        setButtonOneText={setButtonOneText}
        buttonTwoText={buttonTwoText}
        setButtonTwoText={setButtonTwoText}
      />

      <Button type="submit" className="px-5 py-2 rounded-lg font-semibold">
        {loader ? "Loading.." : "Save"}
      </Button>
    </form>
  );
};

export default HeroBanner;
