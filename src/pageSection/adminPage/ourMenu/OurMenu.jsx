"use client";
import React, { useEffect, useState } from "react";
import TitleInput from "@/components/shared/TitleInput";
import DescriptionInput from "@/components/shared/DescriptionInput";
import PriceDetailsEditor from "./PriceDetailsEditor";
import { Button } from "@/index";
import { IoClose } from "react-icons/io5";
import api from "@/api";
import { translateText } from "@/libs/googleTranslate";
import toast from "react-hot-toast";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import useImageUpload from "@/hooks/useImageUpload";
import Image from "next/image";
import uploadToCloud from "@/utils/uploadToCloud";

const OurMenu = ({ menuList }) => {
  const router = useRouter();

  const { files, previews, setImageFile } = useImageUpload();

  const locale = useLocale();
  const [menuTitle, setMenuTitle] = useState("");
  const [loader, setLoader] = useState(false);
  const [menuItems, setMenuItems] = useState([
    {
      image: "",
      name: "",
      description: "",
      priceTitle: "",
      priceUnit: "",
      price: "",
    },
  ]);

  const handleAddItem = () => {
    setMenuItems([
      ...menuItems,
      {
        image: null,
        name: "",
        description: "",
        priceTitle: "",
        priceUnit: "",
        price: "",
      },
    ]);
  };

  const handleRemoveItem = (index) => {
    const updated = [...menuItems];
    updated.splice(index, 1);
    setMenuItems(updated);
  };

  const handleItemChange = (index, field, value) => {
    const updated = [...menuItems];
    updated[index][field] = value;
    setMenuItems(updated);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const uploadedImageLinks = await Promise.all(
      files.map(async (file) => {
        if (!file) return "";
        const link = await uploadToCloud(file);
        return link;
      })
    );

    setLoader(true);
    try {
      const translatedMenuTitle = await translateText(menuTitle);

      const translatedItems = await Promise.all(
        menuItems.map(async (item, index) => {
          const translatedName = await translateText(item.name);
          const translatedDescription = await translateText(item.description);
          const translatedPriceTitle = await translateText(item.priceTitle);
          //const translatedPriceUnit = await translateText(item.priceUnit);

          return {
            image: uploadedImageLinks[index],
            name: {
              en: item.name,
              fi: translatedName,
            },
            description: {
              en: item.description,
              fi: translatedDescription,
            },
            priceTitle: {
              en: item.priceTitle,
              fi: translatedPriceTitle,
            },
            priceUnit: {
              en: item.priceUnit,
              fi: item.priceUnit,
            },
            price: item.price,
          };
        })
      );

      const sendData = {
        menuTitle: {
          en: menuTitle,
          fi: translatedMenuTitle,
        },
        menuItems: translatedItems,
      };

      if (menuList && menuList.length > 0 && menuList[0]?.id) {
        await api.patch(`/api/admin/menu`, {
          ...sendData,
          id: menuList[0].id,
        });
      } else {
        await api.post(`/api/admin/menu`, sendData);
      }

      router.refresh();
      toast.success("Saved successfully!");
    } catch (error) {
      console.error("Error saving menu:", error);
      toast.error("Something went wrong!");
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    if (menuList && menuList.length > 0) {
      const currentMenu = menuList[0];

      setMenuTitle(currentMenu.menuTitle?.[locale] || "");

      const items = currentMenu.menuItems.map((item) => ({
        image: item.image || "",
        name: item.name?.[locale] || "",
        description: item.description?.[locale] || "",
        priceTitle: item.priceTitle?.[locale] || "",
        priceUnit: item.priceUnit?.[locale] || "",
        price: item.price || "",
      }));

      setMenuItems(items);
    }
  }, [menuList, locale]);
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md space-y-6"
    >
      <TitleInput
        title={menuTitle}
        setTitle={setMenuTitle}
        label="Menu Title"
      />

      {menuItems.map((item, index) => (
        <div
          key={index}
          className="relative p-4 border border-gray-200 rounded-lg mb-4 space-y-4"
        >
          {menuItems.length > 1 && (
            <button
              onClick={() => handleRemoveItem(index)}
              className="absolute top-2 right-2 text-red-500"
            >
              <IoClose size={20} />
            </button>
          )}

          <div className="space-y-2">
            <label className="block text-gray-700 font-bold">Brand Logo</label>
            {previews[index] ? (
              <Image
                width={400}
                height={400}
                src={previews[index]}
                alt="preview"
                className="w-24 h-24 object-cover"
              />
            ) : (
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(index, e.target.files[0])}
              />
            )}
          </div>

          <TitleInput
            title={item.name}
            setTitle={(val) => handleItemChange(index, "name", val)}
            label="Name"
          />

          <DescriptionInput
            description={item.description}
            setDescription={(val) =>
              handleItemChange(index, "description", val)
            }
          />

          <PriceDetailsEditor
            priceTitle={item.priceTitle}
            setPriceTitle={(val) => handleItemChange(index, "priceTitle", val)}
            priceUnit={item.priceUnit}
            setPriceUnit={(val) => handleItemChange(index, "priceUnit", val)}
            price={item.price}
            setPrice={(val) => handleItemChange(index, "price", val)}
          />
        </div>
      ))}

      <div className="flex items-center gap-4">
        <Button disabled={loader} onClick={handleAddItem} className="px-4 py-2">
          + Add More
        </Button>
        <Button
          disabled={loader}
          type="submit"
          className="px-5 py-2 font-semibold"
        >
          {loader ? "Loading" : "Save Menu"}
        </Button>
      </div>
    </form>
  );
};

export default OurMenu;
