"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ProBonoForm() {
  const t = useTranslations("pro_bono_req");
  const categories = t.raw("categories") as string[];
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const address = String(data.get("address") ?? "").trim();
    const category = data.get("category");
    if (!name || !address || !category) {
      setError("!");
      return;
    }
    setError(null);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-md border border-line bg-cream p-8 text-center">
        <p className="font-display text-2xl font-semibold text-ink">
          {t("success")}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-md border border-line bg-white p-7 sm:p-9"
      noValidate
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="pb-name"
            className="block text-sm font-semibold text-ink"
          >
            {t("form.name_label")} <span className="text-crimson">*</span>
          </label>
          <input
            id="pb-name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-sm border border-line bg-white px-4 py-3 text-body transition-colors focus:border-crimson focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="pb-address"
            className="block text-sm font-semibold text-ink"
          >
            {t("form.address_label")} <span className="text-crimson">*</span>
          </label>
          <input
            id="pb-address"
            name="address"
            type="text"
            required
            className="mt-2 w-full rounded-sm border border-line bg-white px-4 py-3 text-body transition-colors focus:border-crimson focus:outline-none"
          />
        </div>
      </div>

      <fieldset className="mt-7">
        <legend className="text-sm font-semibold text-ink">
          {t("form.category_label")} <span className="text-crimson">*</span>
        </legend>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {categories.map((c) => (
            <label
              key={c}
              className="flex cursor-pointer items-center gap-3 rounded-sm border border-line px-4 py-3 text-sm text-body transition-colors hover:border-crimson has-checked:border-crimson has-checked:bg-crimson-soft/50"
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

      {error ? (
        <p className="mt-4 text-sm font-medium text-crimson">
          {t("form.name_label")} / {t("form.address_label")} — *
        </p>
      ) : null}

      <button
        type="submit"
        className="mt-8 rounded-sm bg-crimson px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-crimson-dark active:scale-[0.99]"
      >
        {t("form.submit")}
      </button>
    </form>
  );
}
