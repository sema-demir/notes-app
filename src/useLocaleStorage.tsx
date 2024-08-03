// ! CustomHook
//  React hooklarına benzer şekilde görev yapan
//     * Projenin ihtiyacına göre kendimiz oluşturduğumuz
//     * görevini bizim belirlediğimiz hooklardır
//     * Genelde veriyi ve veriyi güncelleyecek fonksiyonu dizi içinde dönerler

import { useEffect, useState } from "react";

export function useLocaleStorage<T>(key: string, initialValue: T) {
  // 1. adım statei tanımla
  const [value, setValue] = useState<T>(() => {
    //2.adım localeStorage den verileri al
    const jsonValue = localStorage.getItem(key);
    //3.adım locale storage de eleman yoksa initial value tanımla
    if (jsonValue === null) {
      return initialValue;
    } else {
      //4. adım locale storage de eleman varsa localdeki veriyi state aktar
      return JSON.parse(jsonValue);
    }
  });
  //5. adım state her değişitğinde locale storage ı güncelle
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  //6. adım hookun kullanılması için stati ve değiştirme metodunu return et
  return [value, setValue] as [T, typeof setValue];
}
