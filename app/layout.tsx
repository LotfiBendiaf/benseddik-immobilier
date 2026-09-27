import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
const geist=Geist({variable:"--geist",subsets:["latin"]});
const syncopate=localFont({variable:"--syncopate",src:[{path:"../public/fonts/Syncopate-Regular.ttf",weight:"400",style:"normal"},{path:"../public/fonts/Syncopate-Bold.ttf",weight:"700",style:"normal"}]});
export const metadata:Metadata={title:"Benseddik Immobilier | Oran",description:"Agence immobilière agréée par l'État à Oran. Votre partenaire de confiance pour l'achat, la vente et la location."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr" className={`${geist.variable} ${syncopate.variable}`}><body>{children}</body></html>}
