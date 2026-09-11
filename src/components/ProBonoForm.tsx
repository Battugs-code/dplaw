"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ProBonoForm() {
  const t = useTranslations("pro_bono_req");
  const categories = t.raw("categories") as string[];
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const address = String(data.get("address") ?? "").trim();
    const category = data.get("category");
    if (!name || !address || !category) {
      setError(true);
      return;
    }
    setError(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-line bg-soft p-8">
        <p className="font-display text-lg font-semibold text-ink">
          {t("success")}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-xl">
      <div className="space-y-5">
        <div>
          <label htmlFor="pb-name" className="block text-[15px] text-ink">
            {t("form.name_label")} <span className="text-crimson">*</span>
          </label>
          <input
            id="pb-name"
            name="name"
            type="text"
            required
            className="mt-1.5 w-full border border-line bg-white px-3 py-2.5 text-body transition-colors focus:border-crimson focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="pb-address" className="block text-[15px] text-ink">
            {t("form.address_label")} <span className="text-crimson">*</span>
          </label>
          <input
            id="pb-address"
            name="address"
            type="text"
            required
            className="mt-1.5 w-full border border-line bg-white px-3 py-2.5 text-body transition-colors focus:border-crimson focus:outline-none"
          />
        </div>
        <fieldset>
          <legend className="text-[15px] text-ink">
            {t("form.category_label")} <span className="text-crimson">*</span>
          </legend>
          <div className="mt-2.5 space-y-2">
            {categories.map((c) => (
              <label
                key={c}
                className="flex cursor-pointer items-center gap-2.5 text-sm text-body"
              >
                <input
                  type="radio"
                  name="category"
                  value={c}
                  required
                  className="h-4 w-4 accent-crimson"
                />
                {c}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      {error ? (
        <p className="mt-4 text-sm font-medium text-crimson">*</p>
      ) : null}

      <button
        type="submit"
        className="mt-7 bg-crimson px-8 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-crimson-dark active:scale-[0.99]"
      >
        {t("form.submit")}
      </button>
    </form>
  );
}
