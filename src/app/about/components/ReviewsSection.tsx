"use client";

import { paths } from "@/config/paths";
import { getCommentsListQueryOptions } from "@/features/Reviews/api/reviewsApi";
import StyledReviewCard from "@/features/Reviews/components/StyledReviewCard";
import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

const ReviewsSection = () => {
  const { data: reviews } = useSuspenseQuery(
    getCommentsListQueryOptions({ per_page: 3 })
  );

  return (
    <Section>
      <Container className="flex-col gap-12 lg:gap-0 my-section">
        <div className="w-full space-y-8 lg:translate-y-16">
          <h2 className="text-h2">Ваши отзывы /</h2>
          <p className="text-h5 ml-20">
            — это часть нашей истории, которую мы <br />
            создаём вместе с вами
          </p>
        </div>
        <div className="grid grid-cols-aboutReviewsLg lg:grid-cols-aboutReviews grid-rows-aboutReviewsLg lg:grid-rows-aboutReviews justify-end gap-6 lg:ml-20">
          <StyledReviewCard
            review={reviews.items[0]}
            className="lg:row-start-2 lg:row-end-4"
          />
          <Button
            asChild
            className="row-end-5 justify-self-end self-end hidden lg:inline-flex"
          >
            <Link href={paths.about.reviews.getHref()}>
              Смотреть все отзывы <ArrowUpRightIcon />
            </Link>
          </Button>
          <StyledReviewCard
            review={reviews.items[1]}
            className="lg:col-start-2 col-span-2 lg:row-span-2"
          />
          <StyledReviewCard
            review={reviews.items[2]}
            className="col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-3 lg:row-end-5"
          />
          <div className="relative lg:col-start-3 lg:row-start-3 lg:row-end-5">
            <Image
              fill
              className="object-cover block lg:hidden"
              src="/images/2happy-logo-black.jpg"
              alt="2happy-logo"
            />
            <Image
              fill
              className="object-cover hidden lg:block"
              src="/images/About/2happy-black.png"
              alt="2happy-logo"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ReviewsSection;
