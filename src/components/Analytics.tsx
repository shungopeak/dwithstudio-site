import Script from "next/script";

/**
 * Google タグ（GA4）/ Google Tag Manager。
 * 環境変数が設定されているときだけ読み込む（未設定なら何も出力しない）。
 *   NEXT_PUBLIC_GA_ID  例: G-XXXXXXXXXX
 *   NEXT_PUBLIC_GTM_ID 例: GTM-XXXXXXX
 */
export function Analytics() {
  const ga = process.env.NEXT_PUBLIC_GA_ID;
  const gtm = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <>
      {/* Google Tag Manager */}
      {gtm && (
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtm}');`}
        </Script>
      )}

      {/* Google タグ（GA4 / gtag.js） */}
      {ga && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${ga}');`}
          </Script>
        </>
      )}
    </>
  );
}

/** GTM 用の noscript（<body> 直下に置く） */
export function GtmNoScript() {
  const gtm = process.env.NEXT_PUBLIC_GTM_ID;
  if (!gtm) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtm}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
