import { Book } from "@/src/domain/entities/ Book";
import Image from "next/image";
import React from "react";

const BookCard = ({ title, description, image, isbn, publisher }: Book) => {
  return (
    <div
      className="sm:w-[288px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer"
      data-testid={`book-card-book`}
    >
      <Image
        src={image}
        alt="Book cover"
        width={100}
        height={158}
        priority={false}
        className="w-full h-[158px] object-cover rounded-[15px]"
        data-testid={`book-card-image-${isbn}`}
      />

      <div className="flex flex-col p-4">
        <div className="flex flex-row items-center mb-[18px]">
          <Image
            src={"/type.svg"}
            alt="tag"
            width={17}
            height={17}
            className="w-[17px] h-[17px] object-contain"
          />
          <p
            className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]"
            data-testid={`book-card-publisher-${isbn}`} // Unique identifier for the publisher
          >
            {publisher}
          </p>
        </div>

        <div className="block">
          <h3
            className="font-epilogue font-semibold text-[14px] text-white text-left leading-[26px] truncate"
            data-testid={`book-card-title-${isbn}`} // Unique identifier for the title
          >
            {title}
          </h3>

          <p
            className="mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px] truncate"
            data-testid={`book-card-description-${isbn}`} // Unique identifier for the description
          >
            {description}
          </p>
        </div>

        <div className="flex justify-between flex-wrap mt-[15px] gap-2">
          <div className="flex flex-col">
            <p
              className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px]"
              data-testid={`book-card-isbn-${isbn}`} // Unique identifier for the ISBN
            >
              Isbn {isbn}
            </p>
          </div>
        </div>

        <div className="flex items-center mt-[20px] gap-[12px]">
          <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]">
            <Image
              src={"/book.png"}
              alt="user"
              width={17}
              height={17}
              priority={false}
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p
            className="flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate"
            data-testid={`book-card-author-${isbn}`} // Unique identifier for the author
          >
            by <span className="text-[#b2b3bd]">{publisher}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
