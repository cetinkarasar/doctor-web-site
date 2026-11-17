"use client";

import { useSyncExternalStore } from "react";
import { en } from "@/lib/i18n/en";
import { tr } from "@/lib/i18n/tr";

export type Locale = "tr" | "en";

const STORAGE_KEY = "locale";
const dictionaries = { tr, en };
const listeners = new Set<() => void>();

function readLocale(): Locale {
  try {
    return localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "tr";
  } catch {
    return "tr";
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

export function setLocale(locale: Locale) {
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {}
  listeners.forEach((listener) => listener());
}

export function useLocale(): Locale {
  return useSyncExternalStore(subscribe, readLocale, () => "tr");
}

export function useDictionary() {
  return dictionaries[useLocale()];
}
