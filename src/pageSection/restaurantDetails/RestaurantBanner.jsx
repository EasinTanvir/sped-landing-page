"use client";
import React, { useState } from "react";
import Image from "next/image";

// import { detailsBanner } from "@/utils/constant";
import { H1, Container, Section, Icon, Button } from "@/index";
import {
  GiSelfLove,
  //   CiClock2,
  //   BiTask,
  //   FaPersonCirclePlus,
  //   CiFaceSmile,
} from "@/utils/icons";
import SwtichTabs from "@/components/SwtichTabs";
import { CiClock2, CiFaceSmile } from "react-icons/ci";
import { BiTask } from "react-icons/bi";
import { FaPersonCirclePlus } from "react-icons/fa6";
// import SwtichTabs from "./SwtichTabs";
// import { useTranslations } from "next-intl";
// import { useSelector } from "react-redux";

// import RestaurantMoreInfoCard from "../clientComponents/restaurantDetails/RestaurantMoreInfo";

// import { useCityAndCountryChecker } from "@/hooks/useCityAndCountryChecker";

const RestaurantBanner = ({
  title,
  subtitle,
  restaurant_status,
  restaurant_opening_time,
  closeMessage,
  openingTime,
  isRating = false,
  rating,
  btnMsgOne,
  btnMsgTwo,
  noRatingMsg,
  btnText,
  restaurantInfo,
  restaurant_cover_image,
  restaurant_alt_txt,
  country,
  city,
}) => {
  return (
    <Section className="border-b-[1px] border-borderColor">
      <div className="w-full  h-[350px] relative custom-container ">
        <Image
          fill
          className="inset-0 object-cover"
          src={restaurant_cover_image}
          alt={restaurant_alt_txt}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <Container className="relative flex flex-col justify-end h-80 z-20">
          <div className="flex justify-between items-center mb-5">
            <div>
              <H1 className=" !text-white lg:!text-5xl !text-2xl font-semibold">
                {title}
              </H1>
              <h2 className="!text-white mt-1.5">{subtitle}</h2>
            </div>
            <button className="bg-white bg-opacity-30 backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center">
              <GiSelfLove size={20} className="text-white z-20" />
            </button>
          </div>
        </Container>
      </div>
      <Notify
        isClose={restaurant_status}
        closeMessage={closeMessage}
        openingTime={restaurant_opening_time}
        isRating={isRating}
        rating={rating}
        btnMsgOne={btnMsgOne}
        btnMsgTwo={btnMsgTwo}
        noRatingMsg={noRatingMsg}
        btnText={btnText}
        restaurantInfo={restaurantInfo}
      />
    </Section>
  );
};

export default RestaurantBanner;

const Notify = ({
  isClose,
  closeMessage,
  openingTime,
  isRating,
  rating,
  btnMsgOne,
  btnMsgTwo,
  noRatingMsg,
  btnText,
  restaurantInfo,
}) => {
  const [switcher, setSwitcher] = useState("delivery");

  return (
    <Container className="flex lg:flex-row md:justify-between flex-col lg:gap-0 gap-4 lg:items-end  sm:py-6 py-4   overflow-hidden   ">
      <div className="flex-1 ">
        {/* {isClose && <Text className="!text-xs">{closeMessage}</Text>} */}
        <div className="flex md:flex-row  flex-col-reverse items-center gap-4 mt-5">
          <div className="md:w-96  w-full mr-2 ">
            <SwtichTabs
              activeTab={switcher}
              slugOne="delivery"
              slugTwo="pickup"
              btnOneText="Delivery"
              btnTwoText="Pickup"
              setSwitcher={setSwitcher}
            />
          </div>

          <div className="flex  gap-5 items-center   lg:justify-start justify-end flex-1">
            {isRating ? (
              <div className="flex items-center gap-2">
                <span>
                  <Icon
                    className="text-iconColor"
                    size={16}
                    icon={CiFaceSmile}
                  />
                </span>
                <span className="text-sm">{rating}</span>
              </div>
            ) : (
              <span className="text-sm">{noRatingMsg}</span>
            )}
            <div className="flex items-center gap-2">
              <span>
                <Icon className="text-brandColor" size={16} icon={CiClock2} />
              </span>
              <span className="text-[13px]">{openingTime}</span>
            </div>
            <Button className="  text-sm   p-1 rounded-md">{btnText}</Button>
          </div>
        </div>
      </div>
      <div className="flex  items-center gap-4  lg:justify-end justify-center lg:min-w-fit  min-w-full ">
        <Button className="!bg-lowCircleBg !text-brandColor px-4 py-1.5 rounded-md text-sm flex-center gap-2 lg:min-w-fit w-full ">
          <span>
            <Icon size={16} icon={BiTask} />
          </span>
          <span>{btnMsgOne}</span>
        </Button>
        <Button className="!bg-lowCircleBg !text-brandColor px-4 py-1.5 rounded-md text-sm flex-center gap-2 lg:min-w-fit w-full">
          <span>
            <Icon size={16} icon={FaPersonCirclePlus} />
          </span>
          <span>{btnMsgTwo}</span>
        </Button>
      </div>
      {/* <PrimaryModal
        showModal={openMoreModal}
        onClose={() => setOpenMoreModal(false)}
      >
        <RestaurantMoreInfoCard restaurantInfo={restaurantInfo} />
      </PrimaryModal> */}
    </Container>
  );
};
