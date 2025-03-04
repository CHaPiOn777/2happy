"use client";
import useIsTablet from "@/hooks/useIsTablet";
import { Box } from "@mui/material";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { memo } from "react";
import { motion } from "framer-motion";

const ImageBG = ({
  bg,
  top = "0",
  left = "0",
  height = "700px",
  opacity = 1,
  reverce = false,
  width,
}: {
  bg: string | StaticImport;
  top?: string;
  left?: string;
  height?: string;
  opacity?: number;
  reverce?: boolean;
  width?: string | null;
}) => {
  const isTablet = useIsTablet();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }} // Добавляем размытие
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }} // Анимация запускается при появлении
      viewport={{ once: true }} // `on
      // animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      style={{
        position: "absolute",
        top: top,
        left: left,
        zIndex: -1,
        width: width ? width : isTablet ? "150vw" : "100vw",
        height: height,
      }}
    >
      <Box
        sx={{
          width: width ? width : isTablet ? "150vw" : "100vw",
          height: height,

          opacity: opacity,
          transform: reverce ? "scaleX(-1)" : "scaleX(1)",
        }}
      >
        <Image
          fill
          style={{
            objectFit: "cover",
            backgroundPosition: "center right",
          }}
          alt="бэкграунд"
          src={bg}
          // quality={100}
        />
      </Box>
    </motion.div>
  );
};

export default memo(ImageBG);
