import { useTranslation } from "../i18n";
import { useEffect, useState } from "react";
import Icon from "./Icon";

export default function TestimonialCarousel({ testimonials }) {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      7000,
    );
    return () => clearInterval(id);
  }, [testimonials.length]);

  const go = (i) => setIndex((i + testimonials.length) % testimonials.length);
  const current = testimonials[index];

  return (
    <div className="relative max-w-3xl mx-auto text-center">
      <Icon name="format_quote" className="text-primary/20 text-[64px]" />
      <p className="font-headline-md text-headline-md text-on-surface mb-8 -mt-6 min-h-[120px] md:min-h-[96px]">
        "{t(current.quote)}"
      </p>
      <p className="font-label-md text-label-md text-on-surface">
        {t(current.name)}
      </p>
      <p className="font-body-md text-body-md text-outline mb-8">
        {t(current.role)}
      </p>

      <div className="flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label={t("Previous testimonial")}
          className="w-10 h-10 rounded-full border border-outline/30 flex items-center justify-center text-on-surface hover:border-primary hover:text-primary transition-colors"
        >
          <Icon name="arrow_back" className="text-[18px]" />
        </button>

        <div className="flex gap-2">
          {testimonials.map((testimonial, i) => (
            <button
              key={testimonial.name}
              type="button"
              aria-label={`${t("Voir le témoignage")} ${i + 1}`}
              onClick={() => go(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === index ? "bg-primary" : "bg-outline/30"}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label={t("Next testimonial")}
          className="w-10 h-10 rounded-full border border-outline/30 flex items-center justify-center text-on-surface hover:border-primary hover:text-primary transition-colors"
        >
          <Icon name="arrow_forward" className="text-[18px]" />
        </button>
      </div>
    </div>
  );
}
