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

const HeroBanner = ({ bannerData }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [items, setItems] = useState([""]);
  const [buttonOneText, setButtonOneText] = useState("");
  const [buttonTwoText, setButtonTwoText] = useState("");
  const [loader, setLoader] = useState(false);
  const { locale } = useParams();

  const router = useRouter();

  const updateHeroBanner = async () => {
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

    setTitle(bannerData.title[locale] || bannerData.title.en);
    setDescription(bannerData.description[locale] || bannerData.description.en);
    setItems(bannerData.items.map((item) => item[locale] || item.en));
    setButtonOneText(
      bannerData.buttonOneText[locale] || bannerData.buttonOneText.en
    );
    setButtonTwoText(
      bannerData.buttonTwoText[locale] || bannerData.buttonTwoText.en
    );
  }, [bannerData, locale]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
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

      <Button
        onClick={updateHeroBanner}
        className="px-5 py-2 rounded-lg font-semibold"
      >
        {loader ? "Loading.." : "Save"}
      </Button>
    </div>
  );
};

export default HeroBanner;
