import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "数感实验室｜把数学变成可以触摸的想法",
  description: "为 7–12 岁孩子设计的互动数学动画课。通过点击、拖动和挑战，真正理解数字符号与位值。",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
