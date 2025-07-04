"use client";

import { paths } from "@/config/paths";
import { getCommentsListQueryOptions } from "@/features/Reviews/api/reviewsApi";
import StyledReviewCard from "@/features/Reviews/components/StyledReviewCard";
import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import AnimatedInView from "@/shared/components/Motion/AnimatedInView";
import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

const ReviewsSection = () => {
  const { data: reviews, isPending } = useSuspenseQuery(
    getCommentsListQueryOptions({ per_page: 3 })
  );

  if (isPending) return null;

  return (
    <Section>
      <Container className="flex-col gap-12 lg:gap-0 my-section">
        <div className="w-full space-y-8 lg:translate-y-16">
          <AnimatedInView
            as="h2"
            id="about-reviews-title"
            className="text-h2 uppercase"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            fallbackClassName="opacity-0"
            viewport={{ once: true }}
          >
            Ваши отзывы /
          </AnimatedInView>
          <AnimatedInView
            as="div"
            id="about-reviews-desc"
            className="md:ml-20 flex justify-between md:justify-normal gap-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            fallbackClassName="opacity-0"
            viewport={{ once: true }}
          >
            <Image
              width={39}
              height={48}
              className="object-cover block md:hidden shrink-0"
              src="/images/2happy-logo-black.jpg"
              alt="2happy-logo"
            />
            <p className="text-h5 ">
              — это часть нашей истории, которую мы <br />
              создаём вместе с вами
            </p>
          </AnimatedInView>
        </div>
        <AnimatedInView
          as="div"
          id="about-reviews-desc"
          className="grid grid-cols-1 md:grid-cols-aboutReviewsLg lg:grid-cols-aboutReviews grid-rows-[248px,248px,248px] md:grid-rows-aboutReviewsLg lg:grid-rows-aboutReviews justify-end gap-6 lg:ml-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          fallbackClassName="opacity-0"
          viewport={{ once: true }}
        >
          <StyledReviewCard
            review={reviews.items[0]}
            className="lg:row-start-2 lg:row-end-4 md:min-h-auto"
          />
          <Button
            asChild
            className="w-full md:w-auto row-end-5 lg:row-end-5 md:col-start-3 lg:col-start-auto justify-self-end self-end"
          >
            <Link href={paths.about.reviews.getHref()}>
              Смотреть все отзывы <ArrowUpRightIcon />
            </Link>
          </Button>
          <StyledReviewCard
            review={reviews.items[1]}
            className="lg:col-start-2 md:col-span-2 lg:row-span-2"
          />
          <StyledReviewCard
            review={reviews.items[2]}
            className="md:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-3 lg:row-end-5"
          />
          <div className="relative lg:col-start-3 lg:row-start-3 lg:row-end-5 hidden md:block">
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
        </AnimatedInView>
      </Container>
    </Section>
  );
};

export default ReviewsSection;
