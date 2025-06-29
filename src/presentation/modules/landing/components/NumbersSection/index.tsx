"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate, motionValue, useInView } from "motion/react";

import { Page, Title } from "@/presentation/shared/components/layout";

import { INumbersProps, TOrientation } from "./types";

import { AnimatedNumber } from "./AnimatedNumber";

import * as S from "./styles";

export function NumbersSection({ data }: INumbersProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef);

  const [counts] = useState(data.numbers.map(() => motionValue(0)));

  useEffect(() => {
    if (!isInView || counts.length === 0) return;

    const controls = data.numbers.map((item, index) =>
      animate(counts[index], item.number, {
        duration: 3,
        ease: "easeInOut",
      })
    );

    return () => {
      controls.forEach((control) => control.stop());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <S.Container ref={containerRef}>
      <Page.Wrapper>
        <S.Content>
          <Title title={data.title} />
          <S.CardContainer>
            {React.Children.toArray(
              data.numbers.map((item, index) => {
                return (
                  <S.Card
                    key={item.number}
                    orientation={item.orientation as TOrientation}
                  >
                    {counts[index] && (
                      <AnimatedNumber
                        value={counts[index]}
                        isPercentage={item.isPercentage}
                      />
                    )}

                    <S.Title>{item.title}</S.Title>
                  </S.Card>
                );
              })
            )}
          </S.CardContainer>
        </S.Content>
      </Page.Wrapper>
    </S.Container>
  );
}
