import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const StartupCard = ({ post }: { post: StartupType }) => {
  const {
    _createdAt,
    views,
    author: { _id: authorId, name },
    title,
    category,
    _id,
    image,
    description,
  } = post;
  console.log(category);

  return (
    <li className="startup-card group">
      <div className="flex-between">
        <div className="startup_card_date">{formatDate(_createdAt)}</div>
        <div className="flex gap-1 5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="text-16-medium line-clamp-1 ">{name}</p>
          </Link>
          <Link href={`startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010"
            alt="avatar"
            className="rounded-full"
            width={48}
            height={48}
          />
        </Link>
      </div>
      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>
        <img src={image} alt="placeholder" className="startup-card_img" />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category?.toLowerCase() || ""}`}>
          <p className="text-16-medium">{category || "Uncategorized"}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
